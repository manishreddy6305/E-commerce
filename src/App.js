import Navbar from './components/navbar'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/home'
import Store from './components/store';
import Footer from './components/footer';
import Cart from './components/cart';
function App() {
  return(
    <>
     <BrowserRouter>
     <Navbar />
     <Switch>
             <Route path="/store" component={Store}></Route>
             <Route path="/cart" component={Cart}></Route>
             <Route path="/" component={Home}></Route>
     </Switch>
     <Footer />
     </BrowserRouter>
    </>
  )
}

export default App;
