import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Weather from './components/Weather';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path='/' element={<Main />} />
          <Route path='/weather' element={<Weather />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;