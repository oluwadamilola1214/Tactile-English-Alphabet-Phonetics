// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import IPAChart from './Components/IPAChart';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ipa-chart" element={<IPAChart />} />
      </Routes>
    </Router>
  );
};

export default App;
