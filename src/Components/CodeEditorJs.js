import React, { useState, Component } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'

import { Controlled as CodeEditorr} from 'react-codemirror2'
export default class CodeEditor extends Component {
    constructor(props){
        super(props);
        this.state = {
            code:'//This is js editor'
        }
    }
    
    handleCodeChange = (editor, data, value)=>{
        // this.setState({code:value});
        this.props.onCodeChange(value);
    }
    componentDidMount(){
        // Prism.highlightAll();
    }

    render() {
        return (
            <div className="editor split_left">
                {/* hello */}
                <p className="editor-title">index.js (Javascript)</p>
                <CodeEditorr
                    onBeforeChange={this.handleCodeChange}
                    value = {this.props.value}
                    options = {{
                        lineWrapping : true,
                        mode: "javascript",
                        lineNumbers : true,
                        theme: 'material',
                    }}
                    className = "code-editor"
                    
                    />
            </div>
        )
    }
}
