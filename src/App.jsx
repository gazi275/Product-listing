import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';

import SingleProduct from './Components/SingleProduct';

function App() {
  return (
    <Router>
      <div className="App bg-gray-100 dark:bg-gray-900 min-h-screen">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/product/:id" element={<SingleProduct />} /> {/* Add route for single product page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
