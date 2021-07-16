import './App.css';
import React, { useState, Component } from 'react';
import FileExplorer from './Components/FileExplorer';
import CodeEditor from './Components/CodeEditorHTML';
import LiveResults from './Components/LiveResult';

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
        <CodeEditor
          codelanguage = ""
          value = {this.state.htmlcode}
          onCodeChange = {this.setCode}
        />
        <LiveResults/>
      </div>
    );
  }
}


