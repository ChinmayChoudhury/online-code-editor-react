import './App.css';
import React, { useState, Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FileExplorer from './Components/FileExplorer';
import CodeEditorHTML from './Components/CodeEditorHTML';
import LiveResults from './Components/LiveResult';
import CodeEditorCss from './Components/CodeEditorCss';
import CodeEditorJs from './Components/CodeEditorJs';
import useLocalCode from './Hooks/useLocalCode';
export default function App() {
  

  const [ htmlcode, setHTMLCode] = useLocalCode('htmlcode','')
  const [csscode, setCSSCode] = useLocalCode('csscode', '')
  const [ jscode , setJSCode] = useLocalCode('jscode', '')
      
    return (

      // uses browser router to navigate through the 3 files
        <BrowserRouter>
      <div className="App">
        <FileExplorer/>
        <div className="container">
          <Switch>
            <Route exact path={process.env.PUBLIC_URL}>
              <CodeEditorHTML
                codelanguage = ""
                value = {htmlcode}
                onCodeChange = {setHTMLCode}
              />
            </Route>
            <Route exact path={process.env.PUBLIC_URL + '/css'}>
              <CodeEditorCss
                codelanguage = ""
                value = {csscode}
                onCodeChange = {setCSSCode}
              />
            </Route>
            <Route exact path={process.env.PUBLIC_URL + '/javascript'}>
              <CodeEditorJs
                codelanguage = ""
                value = {jscode}
                onCodeChange = {setJSCode}
              />
            </Route>
          </Switch>
        <div className="split_bar"></div>
        <LiveResults htmlsrc = {htmlcode} csssrc = {csscode} 
          jssrc = {jscode}
        />
        </div>
      </div>
        </BrowserRouter>
    );
}


