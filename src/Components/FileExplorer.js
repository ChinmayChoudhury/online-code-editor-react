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
    
    // not using this function right now. Pastebin doesn't allow any more pastes???
    handleClick= ()=>{
        var url = "https://pastebin.com/api/api_post.php";

        var xhr = new XMLHttpRequest();
        xhr.open("POST", url);

        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }};

        var data = '{"api_option":"paste","api_user_key":"","api_paste_private":"1","api_paste_name":"chinmay.html","api_paste_expire_date":"10M","api_paste_format":"html","api_dev_key":"rihuVYFGlhyrgBeH2zr7pbVkChI8_hu7","api_paste_code":"hello"}';

        xhr.send(data);
    }

    render() {
        return (
            <div className="fileexp">
                <p className="title">FileExplorer </p><span>&nbsp;&nbsp;&nbsp;</span>
                {/* Links to respective file, process.env.PUBLIC_URL gets the 
                    current url and adds further route ahead of it, 
                    helps with gh-pages routes.
                */}
                <Link to={process.env.PUBLIC_URL} >
                    <button className="cust-btn html-btn">HTML</button>
                </Link><span>&nbsp;&nbsp;&nbsp;</span>
                <Link to={process.env.PUBLIC_URL + '/css'} >
                    <button className="cust-btn css-btn">CSS</button>    
                </Link><span>&nbsp;&nbsp;&nbsp;</span>
                <Link to={process.env.PUBLIC_URL + '/javascript'} >
                <button className="cust-btn js-btn">JS</button>
                </Link><span>&nbsp;&nbsp;&nbsp;</span>
               
            </div>
        )
    }
    
}
