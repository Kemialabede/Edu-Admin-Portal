import React from 'react'
import App from './App/index'
import './index.scss'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import ReactQueryProvider from './App/QueryClient'
import { UserContextProvider } from './contexts/userContexts'

const RootWrapper = ({ children }) => {
  return (
    <BrowserRouter>
      <ReactQueryProvider>
        <UserContextProvider>
            {children}
            <ToastContainer
              theme='colored'
              autoClose={3000}
              position='top-right'
            />
        </UserContextProvider>
      </ReactQueryProvider>
    </BrowserRouter>
  )
}

export { React, ReactDOM, App, RootWrapper }
