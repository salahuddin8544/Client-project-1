import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import video from './assets/video/background.mp4'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Route'

function App() {


  return (
    <div className=''>
      {/* <video src={video} autoPlay loop className='video-background' muted playsInline>
       
    
      </video> */}
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
