import React, {useState, useEffect, Component } from 'react'

export default class LiveResult extends Component {
    constructor(props){
        super(props);
        this.state = {
            code:"<html>"+this.props.htmlsrc+"<style>"+this.props.csssrc+"</style><script>"+this.props.jssrc+"</script></html>"
            
        }

    }
    // sourceFile = this.props.htmlsrc;
    // state = {
    //     htmlsrc: "<html>"+this.props.htmlsrc+"</html>"
    // }
    
    componentWillReceiveProps(newProps){
        const timeout = setTimeout(()=>{
            this.setState({code:"<html>" +newProps.htmlsrc +"<style>"+newProps.csssrc+"</style><script>"+newProps.jssrc+"</script></html>"})

        },250)
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
