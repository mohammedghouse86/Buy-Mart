import './App.css';
import Products from './Component/Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom';
import RouteLayout from './Component/RouteLayout.js';
import About from './Component/bout.js';
import Cart from './Component/Cart.js';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path ='/' element ={<RouteLayout/>}>
      <Route index element ={<Products/>}></Route>
      <Route path='/about' element ={<About/>}></Route>
      <Route path='/cart' element ={<Cart/>}></Route>
    </Route>

  ))
  return (
    <div className='App'>
      <RouterProvider router ={router}/>
    </div>
  );
}

export default App;
