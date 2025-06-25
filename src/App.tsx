import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import LoadingSpinner from './components/LoadingSpinner';
import Homepage from './pages/homepage/Homepage';
import Navbar from './components/Navbar';

const ContextPage = React.lazy(() => import('./pages/context/App'));


function App() {

  return (
    <div className="app">
      <header>
        <Navbar/>
      </header>
      <main>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/context" element={<ContextPage />} />
          </Routes>
        </Suspense>
      </main>
      <footer>
      </footer>
    </div>
  )
}

export default App
