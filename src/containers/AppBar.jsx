import React, {Component} from 'react'
import {Navbar, Nav, NavItem, Glyphicon} from 'react-bootstrap/lib'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'

class AppBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            suggestions: []
        }
    }

    render() {
        const brandStyle = {
            fontWeight: 'bold',
            textTransform: 'caplitalize',
            paddingLeft: 10,
            fontSize: '1.2em'
        }

        return (
            <Navbar bsStyle='inverse'>
                <Navbar.Header style={{display: 'inline-block'}}>
                    <Navbar.Brand>
                        <a href="#"><span style={brandStyle}>{this.props.brand}</span></a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav style={{float: 'right'}}>
                    <NavItem onClick={() => hashHistory.goBack()}><Glyphicon glyph="arrow-left"/></NavItem>
                </Nav>
            </Navbar>
        )
    }
}

export default connect()(AppBar);
