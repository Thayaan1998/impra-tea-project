import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from './containers/DashBoard';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<DashBoard />}>
            <Route index element={<DashBoard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
