import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import Navigation from './components/Navigation'
import PostDetails from './components/posts/PostDetails'
function App() {

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/posts/:videoId' element={<PostDetails />} />
      </Routes>
    </div>
  )
}

export default App
