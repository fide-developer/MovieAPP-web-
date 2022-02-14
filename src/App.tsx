import React, { useEffect, useState } from 'react';
import './App.css';
import { getGenre } from './GeneralUse/Function/Api';
import { genre, moviesData } from './GeneralUse/Function/Api/type';
import Home from './Pages/Home';
import { Outlet, Route, Routes } from 'react-router-dom';
import PageDetailsTV from './Pages/PageDetails/PageDetailsTV';
import Header from './components/Header';
import PageDetailsMovie from './Pages/PageDetails/PageDetailsMovie';


export const MainContext = React.createContext<{genre: genre[], movieData?: moviesData, setMovieData: any} | null>(null)
// export const movieContext = React.createContext<moviesData>([])

const App: React.FC = () => {
  const [currentMovieData, setCurrentMovieData] = useState<moviesData>()
  const [listGenre, setListGenre] = useState([])
  useEffect(()=>{
    getGenre().then((listGenre)=>{
      setListGenre(list => list = listGenre.genres)
    })
  },[])


  return(
    <div style={{backgroundColor: "#1d1d1d"}}>
      
      <MainContext.Provider value={{genre: listGenre, movieData: currentMovieData, setMovieData: setCurrentMovieData}}>
        <Routes>
          {/* <Header /> */}
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='tv/:id' element={<PageDetailsTV />} />
            <Route path='movie/:id' element={<PageDetailsMovie />} />
            <Route path='*' element={<Home />} />
          </Route>
        </Routes>
      </MainContext.Provider>
    </div>
  )
}

const Layout: React.FC = () => {
  return(
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}
export default App;
