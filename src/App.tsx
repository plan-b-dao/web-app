import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './shared';
import { Founder, Home } from './pages';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="founder" element={<Founder />} />
      </Route>
    </Routes>
  );
}

export default App;
