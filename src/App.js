
import Header from './Components/Header'
import Footer from './Components/Footer'
import HelloWorld from './Components/HelloWorld'
import Home from './Views/Home'
import About from './Views/About'
import Product from './Views/Product'

import {
  BrowserRouter as Router,
  Routes,
  Route

} from 'react-router-dom'
//<h1 className="font-bold text-2xl">This is the home page</h1>
 // <h1 className="font-bold text-2xl">About page</h1>
function App() {
  return (
    <div className="pb-10 relative min-h-screen">
      <Router>
      <Header/>


      <div className="p-3" >
        <Routes>
          <Route path="/" element={<Home/>}>

          </Route>
          <Route path="/about" element={<About/>}>

          </Route>
          <Route path="/products/:id" element={<Product/>}>

          </Route>
        </Routes>
      </div>

      <Footer/>
      </Router>
    </div>
  );
}

export default App;
