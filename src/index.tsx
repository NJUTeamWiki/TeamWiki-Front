import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './pages/App'
import Home from './pages/Home'
import 'antd/dist/antd.css'
import {BrowserRouter, Route,HashRouter,IndexRoute,hashHistory} from 'react-router-dom'
const Root = () => {
  return (
      <HashRouter history={hashHistory} >
        <Route path={`/home`} component={Home}/>
          <Route path={`/app`} component={App}/>
          
      </HashRouter>
  )

}
ReactDOM.render(
  <Root/>,
  document.getElementById('example'),
)
