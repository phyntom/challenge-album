import NavigationBar from './components/NavigationBar';
// import './styles.css';
import './index.css';
import { Switch, Route } from 'react-router-dom';

import Albums from './pages/AlbumsPage';
import AlbumPageTailwind from './pages/AlbumPageTailwind';
export default function App() {
   return (
      <div>
         <NavigationBar />
         <Switch>
            <Route path={'/home'} component={Albums} />
            <Route path={'/withTailwind'} component={AlbumPageTailwind} />
         </Switch>
      </div>
   );
}
