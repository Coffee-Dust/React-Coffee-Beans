import { BrowserRouter as Router, } from 'react-router-dom';
import '../assets/App.css';
import AppRoutes from '../components/AppRoutes';
import Navbar from '../components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="App-wrapper">
          <AppRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;
