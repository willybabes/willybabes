import React from 'react'
import ReactDOM from 'react-dom'
import App from './js/components/App'
import '../node_modules/css-reset-and-normalize/scss/reset-and-normalize'
import './css/global'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
