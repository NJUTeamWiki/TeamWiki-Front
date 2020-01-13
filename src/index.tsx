import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './pages/App'
import Home from './pages/Home'
import Link from './pages/Link'
import Login from './pages/Login'
import Company from './pages/Company'
import Register from './pages/Register'
import Development from './pages/Development'
import Workflow from './pages/Workflow'
import Share from './pages/Share'
import It from './pages/It'
import Programming from './pages/Programming'

import 'antd/dist/antd.css'
import {BrowserRouter, Route,HashRouter,IndexRoute,hashHistory,Switch} from 'react-router-dom'
const Root = () => {
  return (
      <HashRouter history={hashHistory} >
        <Route path={`/home`} render={ (props: any) => 
            <Home>
              <Switch>
              <Route exact path="/home/company" component={Company} />
              <Route exact path="/home/it" component={It} />
              <Route exact path="/home/programming" component={Programming} />
              <Route exact path="/home/development" component={Development} />
              <Route exact path="/home/workflow" component={Workflow} />
              <Route exact path="/home/share" component={Share} />

              <Route path="/home/link" component={Link} />
              
              </Switch>
            </Home>
        } >
        </Route>
        <Route path={`/login`} component={Login}/>
        <Route path={`/register`} component={Register}/>
        <Route path={`/app`} component={App}/>
          
      </HashRouter>
  )

}
ReactDOM.render(
  <Root/>,
  document.getElementById('example'),
)
