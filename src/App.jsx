import React, {Component} from 'react';
import AppBar from './containers/AppBar';
import {RouteTransition} from 'react-router-transition';
import './App.css';

export default class App extends Component {
    render() {
        return (
            <div>
                <AppBar brand="We.org MovieDB"/>
                <RouteTransition
                    pathname={this.props.location.pathname}
                    atEnter={{opacity: 0}}
                    atLeave={{opacity: 0}}
                    atActive={{opacity: 1}}
                >
                    {this.props.children}
                </RouteTransition>
            </div>

        );
    }
}
