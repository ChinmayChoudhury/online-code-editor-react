import './App.css';
import React, { useState, Component } from 'react';
import { Router, Route, Switch } from "react-router";
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
      jscode:''
    }
  }
  setCode = (val) =>{
    this.setState({htmlcode: val})
  }
  render(){

    return (
      <div className="App">
        <FileExplorer/>
        <CodeEditorHTML
          codelanguage = ""
          value = {this.state.htmlcode}
          onCodeChange = {this.setCode}
        />
        <LiveResults/>
      </div>
    );
  }
}


