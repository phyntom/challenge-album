import NavigationBar from './components/NavigationBar';
import './styles.css';
import { BrowserRouter as Router } from 'react-router-dom';

import Albums from './pages/AlbumsPage';
export default function App() {
   return (
      <div>
         <Router>
            <NavigationBar />
            <Albums />
         </Router>
      </div>
   );
}
