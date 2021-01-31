import './App.scss';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home/index'
import Navbar from './components/Navbar/index'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="bottom-cover">
        <Switch>
          <Route component={Home} path="/"/>
        </Switch>
      </div>
      
    </div>
  );
}

export default App;
