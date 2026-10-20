import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'

const Dashboard = lazy(() => import('./Components/dashboard'))
const Landing = lazy(() => import('./Components/landing'))

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* Fixed top bar */}
        <div style={{ background: 'black', color: 'white' }}>
          <h1>HI This is The Topbar</h1>
        </div>

        <Appbar />

        <Suspense fallback={<h2>Loading Page...</h2>}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Landing />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  )
}

function Appbar() {
  const navigate = useNavigate()

  return (
    <div>
      <button onClick={() => navigate('/dashboard')}>
        Go to Dashboard
      </button>

      <button onClick={() => navigate('/')}>
        Go to Landing Page
      </button>
    </div>
  )
}

export default App