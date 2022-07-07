import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import Login from './pages/Login';
import ACS from './pages/ACS';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route index path="/" element={<Login/>} exact />
            <Route index path="/acs" element={<ACS/>} exact />
            {/* <Route path="/home" element={<Home/>} exact />
            <Route path="/notifications" element={<Notification/>} exact />
            <Route path="/cronjob" element={<Cronjob/>} exact /> */}
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
