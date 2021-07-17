import './App.css';
import React, { useState, Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FileExplorer from './Components/FileExplorer';
import CodeEditorHTML from './Components/CodeEditorHTML';
import LiveResults from './Components/LiveResult';
import CodeEditorCss from './Components/CodeEditorCss';
import CodeEditorJs from './Components/CodeEditorJs';
export default class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      htmlcode:'',
      csscode: '',
      jscode:'',
      sourceCode:''
    }
  }
  setHTMLCode = (val) =>{
    this.setState({htmlcode: val})
  }
  setCSSCode = (val) =>{
    this.setState({csscode: val})
  }

  setJSCode = (val)=>{
    this.setState({jscode: val})
  }

  // componentDidUpdate(){
  //   this.setState({sourceCode: "<html>"+this.state.htmlcode+"</html>"})
  // }
  // sourceCode = "<html><body>"+this.state.htmlcode+"</body><style>"+this.state.csscode+"</style><script>"+this.state.jscode+"</script></html>";
  render(){
      
    return (
        <BrowserRouter>
      <div className="App">
        <FileExplorer/>
        <div className="container">
          <Switch>
            <Route exact path="/">
              <CodeEditorHTML
                codelanguage = ""
                value = {this.state.htmlcode}
                onCodeChange = {this.setHTMLCode}
              />
            </Route>
            <Route exact path="/css">
              <CodeEditorCss
                codelanguage = ""
                value = {this.state.csscode}
                onCodeChange = {this.setCSSCode}
              />
            </Route>
            <Route exact path="/javascript">
              <CodeEditorJs
                codelanguage = ""
                value = {this.state.jscode}
                onCodeChange = {this.setJSCode}
              />
            </Route>
          </Switch>
        <div className="split_bar"></div>
        <LiveResults htmlsrc = {this.state.htmlcode} csssrc = {this.state.csscode} 
          jssrc = {this.state.jscode}
        />
        </div>
      </div>
        </BrowserRouter>
    );
  }
}


