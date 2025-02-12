import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import './App.css'
import { useAppSelector } from './Store/Hook'


const Home = React.lazy(()=> import('./Pages/Home'))

function App() {
  const isAuthenticated = useAppSelector((state)=> state.auth.isAuthenticated)

  return (
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
  )
}

export default App;



