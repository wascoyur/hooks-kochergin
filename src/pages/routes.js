import { Switch, Route } from 'react-router-dom';
import Article from './article';
import Auth from './auth';
import GlobalFeeds from './globalFeed';

const Routes=() => {

  return (
    <Switch>
      <Route path='/' component={ GlobalFeeds} exact/>
      <Route path='/articles/:slug' component={Article} />
      <Route path='/login' component={ Auth }/>
      <Route path='/register' component={ Auth }/>
    </Switch>
  )
}
export default Routes
