import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewTest from './pages/NewTest';
import ChooseOption from './pages/SearchTest/ChooseOption';
import TestsList from './pages/SearchTest/TestsList';

import GlobalStyle from './styles/GlobalStyle';
import MainContainer from './components/MainContainer';

function App() {
  return (
    <BrowserRouter>
    <GlobalStyle />
      <MainContainer>
        <Routes>
          <Route index element={<Home />} />
          <Route path='new' element={<NewTest />} />
          <Route path='search'>
            <Route index element={<ChooseOption />} />
            <Route path='tests/:id' element={<TestsList />} />
          </Route>
        </Routes>
      </MainContainer>
    </BrowserRouter>);
}

export default App;
