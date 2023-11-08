import React from 'react'
import Layout from './routes/Layout'
import { Provider } from 'react-redux'
import { store } from './redux/config'
import Theme from './components/Theme'





const App = () => {
  
  return (
    <Provider store={store}>
      <Theme>
      <Layout />
      </Theme>
    </Provider>
  )
}

export default App