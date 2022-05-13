// browser routing configuration
import { Route, Routes } from 'react-router-dom';
import Home from './components/core/Home';

const MainRouter = () => {
  console.log('***Evaluating React Router...');
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default MainRouter;