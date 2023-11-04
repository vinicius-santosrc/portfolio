/* IMPORTS STYLES */
import './styles/Index.css';

/* React Hooks */

import {Route, Routes, BrowserRouter} from 'react-router-dom'

/* IMPORTS COMPONENTS */

/* IMPORTS PAGES */
import Index from './pages/Index';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Index />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
