import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class FileExplorer extends Component {
    render() {
        return (
            <div className="fileexp">
                <p className="title">FileExplorer: </p><span>&nbsp;&nbsp;&nbsp;</span>
                <Link to="/" >HTML</Link><span>&nbsp;&nbsp;&nbsp;</span>
                <Link to="/css" >CSS</Link><span>&nbsp;&nbsp;&nbsp;</span>
                <Link to="/javascript" >JS</Link><span>&nbsp;&nbsp;&nbsp;</span>
            </div>
        )
    }
}
