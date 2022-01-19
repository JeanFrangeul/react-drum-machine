import './App.css';
import { BrowserRouter as Router, Routes, Route } from  "react-router-dom";

import Layout from 'componnents/UI/Layout';

import About from 'componnents/About';
import Home from 'componnents/Home';


const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route element={<About/>} path="/about" />
          <Route element={<Home/>} path="/" />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
