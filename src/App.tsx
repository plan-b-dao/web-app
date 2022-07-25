import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './shared';
import { Founder, Home, NotFound } from './pages';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="founder" element={<Founder />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
