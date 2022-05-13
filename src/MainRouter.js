// browser routing configuration
import { Route, Routes } from 'react-router-dom';
import Home from './components/core/Home';
import Users from './components/user/Users';

const MainRouter = () => {
  console.log('***Evaluating React Router...');
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  )
}

export default MainRouter;