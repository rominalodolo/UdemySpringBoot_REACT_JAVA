import React, {Component} from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import withNavigation from './WithNavigation.jsx'	
import withParams from './WithParams.jsx'

import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import ErrorComponent from './ErrorComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import ListTodosComponent from './ListTodosComponent.jsx'
import TodoComponent from './TodoComponent.jsx'

class TodoApp extends Component {
    render() {
    	const LoginComponentWithNavigation = withNavigation(LoginComponent);

    	const WelcomeComponentWithParams = withParams(WelcomeComponent);

    	const HeaderComponentWithNavigation = withNavigation(HeaderComponent);

      //REACT-6
    	const TodoComponentWithParamsAndNavigation = withParams(withNavigation(TodoComponent));

      //REACT-6
    	const ListTodosComponentWithNavigation = withNavigation(ListTodosComponent) 

        return (
            <div className="TodoApp">
            	<Router>
            		<HeaderComponentWithNavigation/>
            		<Routes>
		            	<Route path="/" element={<LoginComponentWithNavigation />} />
		            	<Route path="/login" element={<LoginComponentWithNavigation />} />
		            	<Route path="/welcome/:name" element={
		            		<AuthenticatedRoute>
		            			<WelcomeComponentWithParams />
		            		</AuthenticatedRoute>
		            	} />
		            	
		            	{/* /REACT-6 */}
		            	<Route path="/todos/:id" element={ 
			            	<AuthenticatedRoute>
			            		<TodoComponentWithParamsAndNavigation />
			            	</AuthenticatedRoute>
			            } />

			            {/* REACT-6 */}
		            	<Route path="/todos" element={
			            	<AuthenticatedRoute>
			            		<ListTodosComponentWithNavigation /> 
			            	</AuthenticatedRoute>
			            } />
		            	
                  <Route path="/logout" element={
		            		<AuthenticatedRoute>
		            			<LogoutComponent />
		            		</AuthenticatedRoute>
		            	} />
		            	<Route path="*" element={<ErrorComponent />} />
	            	</Routes>
	            	<FooterComponent/>
            	</Router>
            </div>
        )
    }
}

export default TodoApp



// import React, {Component} from 'react'
// import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import AuthenticatedRoute from './AuthenticatedRoute.jsx'
// import LoginComponent from './LoginComponent.jsx'
// import ListTodosComponent from './ListTodosComponent.jsx'
// import ErrorComponent from './ErrorComponent.jsx'
// import HeaderComponent from './HeaderComponent.jsx'
// import FooterComponent from './FooterComponent.jsx'
// import LogoutComponent from './LogoutComponent.jsx'
// import WelcomeComponent from './WelcomeComponent.jsx'
// import TodoComponent from './TodoComponent.jsx'
// import withNavigation from './WithNavigation.jsx'   

// class TodoApp extends Component {
//     render() {
//         const LoginComponentWithNavigation = withNavigation(LoginComponent);
//         return (
//             <div className="TodoApp">
//                 <Router>
//                     <>
//                         <HeaderComponent/>
//                         <Routes>
//                             <Route path="/welcome" exact component={ <LoginComponent/> } />
//                             <Route path="/login" element={<LoginComponentWithNavigation />} />
//                             {/* <Route path="/login" component={LoginComponent}/>  */}
//                             <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
//                             <AuthenticatedRoute path="/todos/:id" component={TodoComponent}/>
//                             <AuthenticatedRoute path="/todos" component={ListTodosComponent}/>
//                             <AuthenticatedRoute path="/logout" component={LogoutComponent}/>

//                             <Route component={ErrorComponent}/>
//                         </Routes>
//                         <FooterComponent/>
//                     </>
//                 </Router>
//                 {/*<LoginComponent/>
//                 <WelcomeComponent/>*/}
//             </div>
//         )
//     }
// }

// export default TodoApp


// import React, {Component} from 'react'

// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

// import withNavigation from './WithNavigation.jsx' 
// import withParams from './WithParams.jsx'

// import AuthenticationService from './AuthenticationService.js'
// import AuthenticatedRoute from './AuthenticatedRoute.jsx'

// class TodoApp extends Component {
//     render() {
//       const LoginComponentWithNavigation = withNavigation(LoginComponent);

//       const WelcomeComponentWithParams = withParams(WelcomeComponent);

//       const HeaderComponentWithNavigation = withNavigation(HeaderComponent);

//         return (
//             <div className="TodoApp">
//               <Router>
//                 <HeaderComponentWithNavigation/>
//                 <Routes>
//                   <Route path="/" element={<LoginComponentWithNavigation />} />
//                   <Route path="/login" element={<LoginComponentWithNavigation />} />
//                   <Route path="/welcome/:name" element={
//                     <AuthenticatedRoute>
//                       <WelcomeComponentWithParams />
//                     </AuthenticatedRoute>
//                   } />
//                   <Route path="/todos" element={
//                     <AuthenticatedRoute>
//                       <ListTodosComponent />
//                     </AuthenticatedRoute>
//                   } />
//                   <Route path="/logout" element={
//                     <AuthenticatedRoute>
//                       <LogoutComponent />
//                     </AuthenticatedRoute>
//                   } />
//                   <Route path="*" element={<ErrorComponent />} />
//                 </Routes>
//                 <FooterComponent/>
//               </Router>
//             </div>
//         )
//     }
// }

// class HeaderComponent extends Component {
//     render() {
//         const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
//         //console.log(isUserLoggedIn);

//         return (
//             <header>
//                 <nav className="navbar navbar-expand-md navbar-dark bg-dark">
//                     <div><a href="http://www.in28minutes.com" className="navbar-brand">in28Minutes</a></div>
//                     <ul className="navbar-nav">
//                         {isUserLoggedIn && <li><Link className="nav-link" to="/welcome/in28minutes">Home</Link></li>}
//                         {isUserLoggedIn && <li><Link className="nav-link" to="/todos">Todos</Link></li>}
//                     </ul>
//                     <ul className="navbar-nav navbar-collapse justify-content-end">
//                         {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
//                         {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
//                     </ul>
//                 </nav>
//             </header>
//         )
//     }
// }

// class FooterComponent extends Component {
//     render() {
//         return (
//             <footer className="footer">
//                 <span className="text-muted">All Rights Reserved 2022 @in28minutes</span>
//             </footer>
//         )
//     }
// }

// class LoginComponent extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       username: 'in28minutes',
//       password: '',
//       hasLoginFailed: false,
//       showSuccessMessage: false
//     }
//     this.handleChange = this.handleChange.bind(this)
//     this.loginClicked = this.loginClicked.bind(this)
//   }

//   handleChange(event){
//     this.setState({
//       [event.target.name]:event.target.value
//     })
//   }

//   loginClicked() {
//     if(this.state.username==='in28minutes' && this.state.password==='dummy'){
//       AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
//       this.props.navigate(`/welcome/${this.state.username}`)
//         }
//         else {
//             this.setState({showSuccessMessage:false})
//             this.setState({hasLoginFailed:true})
//         }
//     console.log(this.state)
//   }

//     render() {
//         return (
//           <div>
//               {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
//                 {this.state.showSuccessMessage && <div>Login Sucessful</div>}
//               <div className="TodoApp">
//                 User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
//                 Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
//                 <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
//               </div>
//             </div>
//         )
//     }
// }

// function ErrorComponent() {
//     return <div>An Error Occurred. I don't know what to do! Contact support at abcd-efgh-ijkl</div>
// }

// class LogoutComponent extends Component {
//     render() {
//         return (
//             <>
//                 <h1>You are logged out</h1>
//                 <div className="container">
//                     Thank You for Using Our Application.
//                 </div>
//             </>
//         )
//     }
// }

// class ListTodosComponent extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             todos : 
//             [
//              {id: 1, description : 'Learn to Dance', done:false, targetDate: new Date()},
//              {id: 2, description : 'Become an Expert at React', done:false, targetDate: new Date()},
//              {id: 3, description : 'Visit India', done:false, targetDate: new Date()}
//             ]
//         }
//     }

//     render() {
//         return (
//             <div>
//                  <h1>List Todos</h1>
//                  <div className="container">
//                     <table className="table">
//                         <thead>
//                             <tr>
//                                 <th>Description</th>
//                                 <th>Target Date</th>
//                                 <th>Is Completed?</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                         {
//                             this.state.todos.map (
//                                 todo =>
//                                     <tr key={todo.id}>
//                                         <td>{todo.description}</td>
//                                         <td>{todo.done.toString()}</td>
//                                         <td>{todo.targetDate.toString()}</td>
//                                     </tr>
//                             )
//                             }
//                         </tbody>
//                     </table>
//                  </div>
//             </div>
//         )
//     }
// }

// class WelcomeComponent extends Component {
//     render() {

//         return (
//           <>
//                 <h1>Welcome!</h1>
//                 <div className="container">
//                 Welcome {this.props.params.name}. You can manage your todos <Link to="/todos">here</Link>.
//                 </div>
//             </>
//         )        
//     }
// }

// export default TodoApp


