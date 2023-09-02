import Home from './components/Home';
import UserAuth from './components/UserAuth';
import {Switch, Route} from 'react-router-dom'

const App = () => {
  return(
    <Switch>
      <Route exact path="/login" component={UserAuth} />
      <Route exact path="/" component={Home} />
    </Switch>
  )
}

export default App
