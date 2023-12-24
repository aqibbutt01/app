import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Register from './components/Register';
import UsersData from './components/UsersData';
import UpdateComp from './components/UpdateComp';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path='/' element={<h1>Welcome To AL Awais Addmin Portal</h1>} />
          <Route path='/register' element={<Register />} />
          <Route path='/usersdetail' element={<UsersData />} />
          <Route path='/editform/:id' element={<UpdateComp />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
