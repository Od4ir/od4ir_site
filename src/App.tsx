import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import od4irLogo from './assets/logo_od4ir_principal.svg'
import od4irLogoRascunho from './assets/logo_od4ir_rascunho.svg'
import od4irLogoIcone from './assets/logo_od4ir_icone.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='logo-home-container'>
        <img className='logo-home-icone' src={od4irLogoIcone} alt="Ícone logo do Odair" />
        <img className='logo-home' src={od4irLogo} alt="Logo do Site do Odair" />
        <img className='logo-home-rascunho' src={od4irLogoRascunho} alt="Rascunho da logo do Site do Odair" />
      </div>
      <h1>OD41R'S SITE</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Cliques: {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Em breve, meu site :)
      </p>
    </>
  )
}

export default App
