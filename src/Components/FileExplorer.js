import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class FileExplorer extends Component {
    render() {
        return (
            <div className="fileexp">
                <p className="title">FileExplorer: </p><span>&nbsp;&nbsp;&nbsp;</span>
                
                <Link to="/" >
                    <button className="cust-btn">HTML</button>
                </Link><span>&nbsp;&nbsp;&nbsp;</span>
                <Link to="/css" >
                    <button className="cust-btn">CSS</button>    
                </Link><span>&nbsp;&nbsp;&nbsp;</span>
                <Link to="/javascript" >
                <button className="cust-btn">JS</button>
                </Link><span>&nbsp;&nbsp;&nbsp;</span>
            </div>
        )
    }
}
