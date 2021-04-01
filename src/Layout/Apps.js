import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Index from '../Pages/Apps/Index';


class Apps extends Component {

    constructor(props){
        super(props);
        this.state = {
            path: this.props.match.path,
        }
    }
    
    componentDidMount() {
        console.log(this.state.path)
    }

    render () {
        return (
            <div>
                <h1>
                    Apps
                </h1>

               
                <Switch>
                    <Route exact path={`${this.state.path}/`}>
                        <Index />
                    </Route>
                   
                </Switch>
            </div>
        );
    }
}

export default withRouter(Apps);