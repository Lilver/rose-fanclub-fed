import './App.css';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home/index'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route component={Home} path="/"/>
      </Switch>
    </div>
  );
}

export default App;
