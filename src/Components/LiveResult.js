import React, {useState, Component } from 'react'

export default class LiveResult extends Component {
    constructor(props){
        super(props);
        this.state = {
            code:this.props.htmlsrc+"<style>"+this.props.csssrc+"</style><script>"+this.props.jssrc+"</scripts>"
            
        }

    }
    // sourceFile = this.props.htmlsrc;
    // state = {
    //     htmlsrc: "<html>"+this.props.htmlsrc+"</html>"
    // }
    
    componentWillReceiveProps(newProps){
        this.setState({code: newProps.htmlsrc +"<style>"+newProps.csssrc+"</style><script>"+newProps.jssrc+"</scripts>"})
    }


    render() {
        return (
            <div className="outputbox">
                <iframe
                    height="100%"
                    width = "100%"
                    marginHeight="0"
                    marginWidth = "0"
                    frameBorder="0"
                    sandbox="allow-scripts"
                    srcDoc = {this.state.code}

                />
                    
                
            </div>
        )
    }
}
