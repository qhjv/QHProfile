import React,{useEffect,useState} from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from '../features/home/home';
import AboutMe from '../features/aboutme/aboutMe';
import Product from '../features/products/product';

Router.propTypes = {
    
};

function Router(props) {
    return (
        <>
            <Switch>
                <Redirect from="/home" to="/" exact />
                <Redirect from="/post-list/:postId" to="/posts/:postId" exact />

                <Route path="/" component={Home} exact />
                <Route path="/about" component={AboutMe} />
                <Route path="/product/:id" component={Product} />
                {/* <Route component={NotFound} /> */}
            </Switch>
        </>
    );
}

export default Router;