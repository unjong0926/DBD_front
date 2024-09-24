import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './Main/Main';
import Header from './Header';
import Login from './Signin/Login';
import SignUp from './SignUp/SignUp'
import MyPage from './MyPage/MyPage';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/mypage' element={<MyPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
