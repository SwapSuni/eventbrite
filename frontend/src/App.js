import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Login/Signup';
import New_event from './pages/New-event/New_event';
import Liked_events from './pages/Liked-events/Liked_events';
import User_event from './pages/User-events/User_event';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>} />
        <Route path='/new-event' element={<New_event/>}/>
        <Route path='/liked-events' element={<Liked_events/>}/>
        <Route path='/user-events' element={<User_event/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
