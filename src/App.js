import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewTest from './components/NewTest/NewTest.js';
import ViewTestsOptions from './components/ViewTestsOptions.js';
import TestsList from './components/TestsList.js';

import GlobalStyle from './styles/GlobalStyle';
import MainContainer from './components/MainContainer';

function App() {
  return (
    <BrowserRouter>
    <GlobalStyle />
      <MainContainer>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new' element={<NewTest />} />
          <Route path='/search' element={<ViewTestsOptions />} />
          <Route path='tests/:id' element={<TestsList />} />
        </Routes>
      </MainContainer>
    </BrowserRouter>);
}

export default App;
