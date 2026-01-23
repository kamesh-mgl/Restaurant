
// import './components/mystyle.css'
import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import Menu from './Menu.jsx';
import AddItems from './AddItems.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Provider } from 'react-redux';
import store from '../redux/store.js';
import Item from './Item.jsx';
import AdminLogin from './AdminLogin.jsx';
import EditItem from './EditItem.jsx';
import Register from './Register.jsx';


export default function App() {

   

    console.log("rendered")

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Hero />} />
                    <Route path='/menu' element={<Menu />} />
                    <Route path='/additems' element={<AddItems fn={"Add"} />} />
                    <Route path='/menu/:id' element={<Item />} />
                    <Route path='/menu/:id/edit' element={<EditItem />} />
                    <Route path='/login' element={<AdminLogin />} />
                    <Route path='/register' element={<Register />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}
