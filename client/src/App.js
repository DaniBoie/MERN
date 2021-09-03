import ClassOverview from './pages/ClassOverview'
import ClassPage from './pages/ClassPage'
import SignUp from './pages/SignUp'
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div>
        <nav> 
          <Link to='/'>Sign Up</Link>
          <Link to='/ClassOverview'>Class Overview</Link>
          <Link to='/ClassPage'>Class Page</Link>
        </nav>
        <Switch>
          <Route exact path='/' component={SignUp} />
          <Route exact path='/ClassOverview' component={ClassOverview} />
          <Route exact path='/ClassPage' component={ClassPage} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
