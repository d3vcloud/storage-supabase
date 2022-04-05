import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

import { AuthProvider } from './context/AuthContext'

import App from './App'

// Add color mode config
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

// Extend the theme
const theme = extendTheme({ config })

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
