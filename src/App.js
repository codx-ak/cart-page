import React from 'react'
import Layout from './routes/Layout'
import { Provider } from 'react-redux'
import { store } from './redux/config'

const App = () => {
  return (
    <Provider store={store}>
      <Layout/>
    </Provider>
  )
}

export default App