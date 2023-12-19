import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomLayout from "./components/CustomLayout/CustomLayout";
import Home from "./pages/Home";



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<CustomLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
