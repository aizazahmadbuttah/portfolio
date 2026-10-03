import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Portfolio from './refined/Portfolio.jsx'

// Previous portfolio (HashRouter + App.jsx + App.css) is left intact in src/;
// to restore it, revert this file via git.
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Portfolio />
    </StrictMode>,
)
