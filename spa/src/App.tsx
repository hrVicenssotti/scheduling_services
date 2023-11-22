import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<h1>Seja bem vindo</h1>} />
    </Routes>
  )
}

export default App
