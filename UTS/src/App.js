import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProdukPost from './UTS/container/ProdukPost/ProdukPost';
import KeranjangPost from './UTS/container/Keranjang/KeranjangPost';
import Biodata from './UTS/component/Biodata';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  useHistory,
  Redirect,
  useLocation
} from "react-router-dom";
export default function AuthExample() {
  return (
    <Router>
    <p></p>

    <h3> ICESHOP</h3>
    <hr></hr> 
      <nav className="navbar navbar-expand-lg"> 
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link className="nav-link" to="/shop"><button className class="btn btn-success">Belanja</button></Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/cart"><button className class="btn btn-success">Keranjang</button></Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/about"><button className class="btn btn-success">About</button></Link>
            </li>
          </ul>
          <ul className="navbar-nav navbar-right">
            <AuthButton />
          </ul>
        </div> 
      </nav>
      <div>
        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <ShopRoute path="/shop">
            <ShopPage />
          </ShopRoute>
          <ShopRoute path="/cart">
            <CartPage />
          </ShopRoute>
        </Switch>
      </div>
    </Router>
  );
}
const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};
function AuthButton() {
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };
  return fakeAuth.isAuthenticated ? (
    <button class="btn btn-danger" onClick={() => {
      fakeAuth.signout(() => history.push("/"));
    }}>
      Log out
    </button>
  ) : (
      <button class="btn btn-primary" onClick={login}>Log in</button>
    );
}

function AboutPage() {
  return (
    <Biodata />
  );
}

function ShopRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}

function ShopPage() {
  return (
    <ProdukPost />
  );
}

function CartPage() {
  return (
    <KeranjangPost />
  );
}

function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };
  return (
    <div>
      <p> Kamu harus login terlebih dahulu untuk melihat {from.pathname}</p>
      <button class="btn btn-primary" onClick={login}>Log in</button>
    </div>
  );
}

// export default function NestingExample() {
//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/topics">Topics</Link>
//           </li>
//         </ul>
//         <hr/>
//         <Switch>
//           <Route exact path="/">
//             <Home/>
//           </Route>
//           <Route path="/topics">
//             <Topics/>
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }
// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>  
//   );
// }
// function Topics() {
//   let {path, url} = useRouteMatch();
//   return (
//     <div>
//       <h2>Topics</h2>
//       <ul>
//         <li>
//           <Link to={`${url}/Sate, Nasi goreng`}>Kuliner</Link>
//         </li>
//         <li>
//           <Link to={`${url}/Wisata alam, Museum`}>Travelling</Link>
//         </li>
//         <li>
//           <Link to={`${url}/Ibis, JW Marriot`}>Review Hotel</Link>
//         </li>
//       </ul>
//       <Switch>
//         <Route exact path={path}>
//           <h3>Please select a topic!</h3>
//         </Route>
//         <Route path={`${path}/:topicId`}>
//           <Topic />
//         </Route>
//       </Switch>
//     </div>
//   );
// }

// function Topic() {
//     let {topicId} = useParams();
//     return (
//       <div>
//         <h3>{topicId}</h3>
//       </div>
//     );
// }

// export default function ParamsExample() {
//   return (
//     <Router>
//       <div>
//         <h2>Accounts</h2>
//         <ul>
//           <li>
//             <Link to="/netflix">Netflix</Link>
//           </li>
//           <li>
//             <Link to="/gmail">Gmail</Link>
//           </li>
//           <li>
//             <Link to="/yahoo">Yahoo</Link>
//           </li>
//           <li>
//             <Link to="/amazon">Amazon</Link>
//           </li>
//         </ul>
//         <Switch>
//           <Route path="/:id" children={<Child/>}/>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Child() {
//   let { id } = useParams();
//   return (
//     <div>
//       <h3>ID: {id}</h3>
//     </div>
//   );
// }

// export default function BasicExamples() {
//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/dashboard">Dashboard</Link>
//           </li>
//         </ul>
//         <hr/>
//         <Switch>
//           <Route exact path="/">
//             <Home/>
//           </Route>
//           <Route exact path="/about">
//             <About/>
//           </Route>
//           <Route exact path="/dashboard">
//             <Dahsboard/>
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   ); 
// }

// function About() {
//   return (
//     <div>
//       <h2>About</h2>
//     </div>
//   ); 
// }

// function Dahsboard() {
//   return (
//     <div>
//       <h2>Dahsboard</h2>
//     </div>
//   ); 
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <p>
//         <div className="btn btn-primary btn-sm">BOOTSTRAP</div>
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
