import { BrowserRouter as Router, } from 'react-router-dom';
import '../assets/App.css';
import AppRoutes from '../components/AppRoutes';


function App() {
  return (
    <Router>
      <div className="App">

        <div className="App-wrapper">
          <AppRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;
