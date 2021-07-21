import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

const rootNode = document.getElementById('root');

ReactDOM.render(
   <StrictMode>
      <Router>
         <App />
      </Router>
   </StrictMode>,
   rootNode
);
