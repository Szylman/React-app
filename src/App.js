import Container from './components/Container/Container';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Favorite from './components/Favorite/Favorite';
import About from './components/About/About';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import List from './components/List/List';

const App = () => {
  return (
    <main>
          <NavBar />
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/favorite" element={<Favorite />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/list/:listId" element={<List />} />
            </Routes>
          </Container>
    </main>
  );
};

export default App;
