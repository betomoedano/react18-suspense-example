import React from 'react'
import './index.css'
import App from './App'
import { createRoot } from 'react-dom/client'
import { SWRConfig } from 'swr'
//after
const container = document.getElementById('root')
const root = createRoot(container);
root.render(
    <SWRConfig
        value={{
            fetcher: (...args) => {
                return fetch(...args)
                .then((res) => res.json() )
                },
        suspense: true
    }}
    >
        <App/>
    </SWRConfig>
)

//before
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// )
