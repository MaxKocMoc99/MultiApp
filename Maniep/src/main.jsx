import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './components/router/Router'
import Layout from './components/layout/Layout'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout>
    <Router />
    </Layout>
  </React.StrictMode>,
)
