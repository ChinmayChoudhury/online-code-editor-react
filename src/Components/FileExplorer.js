import React, {useState, Component } from 'react'
import {Link} from 'react-router-dom';
export default class FileExplorer extends Component {
    constructor(props){
        super(props);
        //not using this right now
        this.state= {
            isHtml: false,
            isCss: false,
            isJs: false
        }
    }



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
