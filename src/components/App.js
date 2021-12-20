import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home.js';
import NewTest from './NewTest/NewTest.js';
import ViewTestsOptions from './ViewTestsOptions.js';
import TestsList from './TestsList.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<NewTest />} />
        <Route path='/search' element={<ViewTestsOptions />} />
        <Route path='tests/:id' element={<TestsList />} />
      </Routes>
    </BrowserRouter>);
}

export default App;
