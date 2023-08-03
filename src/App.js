import React, { useEffect } from 'react';
import Pages from './pages/Pages'; 
import { BrowserRouter } from 'react-router-dom';
import Search from './pages/Search';
import "./index.css"

function App() {
  useEffect(() => {
    document.title = "Tanjir Recipes";
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Search/>
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
