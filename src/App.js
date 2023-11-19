
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom';
import './App.css';
import wholePage from './layout/wholePage/wholePage';
import ThreeColumn from './layout/ThreeColumn/ThreeColumn';
function App() {
  return (
    <Switch>
      <Route exact path="/login">
        <wholePage />
      </Route>
      <Route path = "/">
        <ThreeColumn/>
      </Route>
    </Switch>
  );
}
export default App;
