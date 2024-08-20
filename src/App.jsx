
import { useEffect, useState } from 'react'
import './App.css'

import { ThemeProvider } from './contexts/Theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {


  const [ThemeMode,setThemeMode] = useState("light")

  const darkTheme=()=>{
    setThemeMode("dark")
  }

  const lightTheme=()=>{
    setThemeMode("light")
  }
 
  useEffect(()=>{
    document.querySelector('html').classList.remove('light','dark')
    document.querySelector('html').classList.add(ThemeMode)
  },[ThemeMode])

  return (
   
   <ThemeProvider value={{ThemeMode,darkTheme,lightTheme}}>
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                       <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>
            </ThemeProvider>

  )
}

export default App
