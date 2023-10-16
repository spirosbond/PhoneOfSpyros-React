import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Test from './Test'
import Home from './Home'

function App() {

  return (
      <Router>
          <Routes>
             <Route exact path='/' exact element={<Home />} />
             <Route path='/test' element={<Test />} />
          </Routes>
      </Router>

   );
}

export default App;
