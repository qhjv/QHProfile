import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Signin from "../components/auth/signin"
import Dashboard from "../features/dashboard/dashboard"

Router.propTypes = {
    
};

function Router(props) {
    return (
        <>
            <Switch>
                <Redirect from="/admin" to="/" exact />
                <Route path="/" component={Signin} exact />
                
                <Route path="/dashboard" component={Dashboard} />
                
                {/* <Route exact  path="/product/:id" component ={()=><Product/>} />
                <Redirect exact from="/product/:id/reload" to="/product/:id" /> */}
                {/* <Route component={NotFound} /> */}
            </Switch>
        </>
    );
}

export default Router;