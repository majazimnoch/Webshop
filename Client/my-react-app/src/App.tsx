import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import User from "./pages/User";
import Cart from "./pages/Cart";
import Navigation from './components/Navigation';
import { Container } from "react-bootstrap";
import './assets/scss/App.scss'

function App() {


  return (
    <div>
      <Navigation />

      <Container className="py-3">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/user" element={<User />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </div>
  )
}

export default App;
