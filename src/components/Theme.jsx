import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material'
import { orange, purple } from '@mui/material/colors'
import React, { createContext, useState } from 'react'

export const ChangeTheme=createContext()

const Theme = ({children}) => {
    const [changeMode,setMode]=useState(true)
    const theme=createTheme({
      palette:{
        primary:{
          main:purple[900]
        },
        secondary:{
          main:orange[600]
        },
        mode:changeMode?'light':'dark'
      },
    })
  return (
    <ChangeTheme.Provider value={[changeMode,setMode]}>
        <ThemeProvider theme={theme}>
        {children}
        </ThemeProvider>
    </ChangeTheme.Provider>
  )
}

export default Theme