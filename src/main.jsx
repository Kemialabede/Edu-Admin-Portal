import React from 'react'
import './index.scss'
import { RootWrapper, ReactDOM, App } from './rootImports.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RootWrapper>
      <App />
    </RootWrapper>
  </React.StrictMode>,
)
