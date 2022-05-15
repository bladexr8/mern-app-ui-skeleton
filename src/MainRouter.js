// browser routing configuration
import { Route, Routes } from 'react-router-dom';
import Home from './components/core/Home';
import Users from './components/user/Users';
import SignUp from './components/user/Signup';
import SignIn from './components/auth/Signin';
import Profile from './components/user/Profile';
import PrivateRoute from './components/auth/PrivateRoute';
import EditProfile from './components/user/EditProfile';
import Menu from './components/core/Menu';

const MainRouter = () => {
  console.log('***Evaluating React Router...');
  return (
    <div>
      <Menu />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <PrivateRoute path="/user/edit/:userId" element={<EditProfile />} />
        <Route path="/user/:userId" element={<Profile />} />
      </Routes>
    </div>
  )
}

export default MainRouter;