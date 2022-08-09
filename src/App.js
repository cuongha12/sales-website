import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Page/Home/Home"
import './App.css';
import SHop from './Page/Shop/SHop';
import Main from './Page/Main/Main';
import Login from './Page/Login/Login';
import Blog from './Page/Blog/Blog';
import Introduce from './Page/Introduce/Introduce';
import Contact from './Page/Contact/Contact';
import Test from './Page/Test/Test';
import Form from './Page/Form/Form';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} >
            <Route index element={<Home />} />
            <Route path='shop' element={<SHop />} />
            <Route path='blog' element={<Blog />} />
            <Route path='introduce' element={<Introduce />} />
            <Route path='contact' element={<Contact />} />
          </Route>
          <Route path='login' element={<Test/>} >
            <Route index element={<Login/>}/>
            <Route path='form' element={<Form/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
