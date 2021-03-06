import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import Home from "./core/Home";
import Shop from "./core/Shop";
import Product from "./core/Product";
import PrivateRoute from './auth/PrivateRoute';
import Dashboard from './user/UserDashboard';
import Profile from './user/Profile';
import AdminRoute from './auth/AdminRoute';
import AdminDashboard from './user/AdminDashboard';
import AddCategory from './admin/AddCategory';
import AddProduct from './admin/AddProduct';
import Orders from './admin/Orders';
import Cart from './core/Cart';
import ManageProducts from './admin/ManageProducts'
import UpdateProduct from './admin/UpdateProduct'


const Routes=()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact  component ={Home} />
                <Route path="/product/:productId" exact  component ={Product} />
                <Route path="/shop" exact  component ={Shop} />
                <AdminRoute path="/admin/orders" exact component={Orders} />
                <AdminRoute path="/create/category" exact component={AddCategory} />
                <AdminRoute path="/create/product" exact component={AddProduct} />
                <Route path="/cart" exact component={Cart} />
                <PrivateRoute path="/user/dashboard" exact component={Dashboard} />
                <PrivateRoute path="/profile/:userId" exact component={Profile} />
                <AdminRoute path="/Admin/products" exact component={ManageProducts} />
                <AdminRoute path="/Admin/dashboard" exact component={AdminDashboard} />
                <AdminRoute path="/admin/product/update/:productId" exact component={UpdateProduct} />
                <Route path="/signin" exact  component ={Signin} />
                <Route path="/signup" exact  component ={Signup} />
            </Switch>   
        </BrowserRouter>
    );
};

export default Routes;