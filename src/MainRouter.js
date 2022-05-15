// browser routing configuration
import { Route, Routes } from 'react-router-dom';
import Home from './components/core/Home';
import Users from './components/user/Users';
import SignUp from './components/user/Signup';
import SignIn from './components/auth/Signin';
import Profile from './components/user/Profile';

const MainRouter = () => {
  console.log('***Evaluating React Router...');
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path="/user/:userId" element={<Profile />} />
      </Routes>
    </div>
  )
}

export default MainRouter;