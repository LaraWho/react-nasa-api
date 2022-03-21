import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ApiDetails from './Pages/ApiDetails';
import Home from './Pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<Home />} path="/" exact />
        <Route element={<ApiDetails />} path="/apidetails" />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
