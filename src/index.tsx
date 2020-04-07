import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './pages/App'
import Home from './pages/Home'
import Link from './pages/Link'
import Login from './pages/Login'
import Company from './pages/Company'
import Register from './pages/Register'
import Development from './pages/Development'
import FileList from './pages/FileList'
import Share from './pages/Share'
import Knowledge from './pages/Knowledge'
import Admin from './pages/Admin'
import It from './pages/It'
import Programming from './pages/Programming'
import Userinfo from './pages/Userinfo'
import 'antd/dist/antd.css'
import * as LoginService from './services/loginService'
import {BrowserRouter, Route,HashRouter,IndexRoute,hashHistory,Switch,Redirect} from 'react-router-dom'

const Root = () => {
  function redirece(){
    let bool = false;
    LoginService.checklogin().then((res)=>{
      if(res.code=="1"){
        window.location.href="/#/home/"
      }
      else{
        window.location.href="/#/login"
      }
    })
    // return bool?"/home/":"/login"
  }
  return (
      <HashRouter history={hashHistory} >
        <Route  path={`/home`} render={ (props: any) => 
            <Home>
              <Switch>
              <Route exact path="/home/" component={Company} />
              <Route exact path="/home/knowledge" component={Knowledge} />
              <Route exact path="/home/it" component={It} />
              <Route exact path="/home/programming" component={Programming} />
              <Route exact path="/home/development" component={Development} />
              <Route exact path="/home/filelist" component={FileList} />
              <Route exact path="/home/share" component={Share} />
              <Route exact path="/home/userinfo" component={Userinfo} />
              <Route path="/home/portal" component={Link} />
              </Switch>
            </Home>
        } >
        </Route>
        <Route path={`/login`} component={Login}/>
        <Route path={`/admin`} component={Admin}/>
        <Route exact path={`/`} render={()=> <Redirect to={redirece()} /> }/>
        <Route path={`/register`} component={Register}/>   
      </HashRouter>
  )

}

ReactDOM.render(
  <Root/>,
  document.getElementById('example'),
)
