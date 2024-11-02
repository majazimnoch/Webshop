
/* import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import { Routes, Route } from "react-router-dom";
import './App.css'
import Button from 'react-bootstrap/Button';
import Navigation from './components/Navigation'

function App() {


  return (
/*   <Routes>
    <Route path="/" element = {<Home />} />
  </Routes> */
  <div>
  hej
  <Navigation />
  <Button variant="primary">Primary</Button>{' '}
  <Button variant="secondary">Secondary</Button>{' '}
  </div>
  )
}

export default App
