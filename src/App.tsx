import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import './App.css'
import { useAppSelector } from './Store/Hook'
import Header from './Components/Header/Header'
import Footer from "./Components/Footer/Footer"


const Home = React.lazy(()=> import('./Pages/Home'))

function App() {
  const isAuthenticated = useAppSelector((state)=> state.auth.isAuthenticated)

  return (
    <>
    <Header/>
    <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      {/* Public routes */}
      <Route path='/' element={<Home/>} />
      {/* Private routes */}
      <Route
        path='/abc'
        element={isAuthenticated ? <>Harshit</> : <>User</>}
      />
    </Routes>
    </Suspense>
    </BrowserRouter>
    <Footer/>
    </>
  )
}

export default App;



