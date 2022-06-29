import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About'; 
import SingleProduct from './pages/SingleProduct'; 

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'; //Include Heder
import Footer from './Footer'; //Include Footer

const App = () => { 
 
        return (
            <>
            <Router>
                <Header></Header>
                <Switch>
                    <Route path="/" component={Home} exact></Route>
                    <Route path="/about" component={About}></Route>
                    {/* <Route path="/products" exact component={ProductsPage}></Route> */}
                    <Route path="/product/:slug" exact component={SingleProduct}></Route>
                </Switch>

                
                <Footer></Footer>
            </Router>
            </>
        ) 
}
export default App;