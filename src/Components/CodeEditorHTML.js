import React, { useState, Component } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'

import { Controlled as CodeEditorr} from 'react-codemirror2'
export default class CodeEditorHTML extends Component {
    constructor(props){
        super(props);
        this.state = {
            code:'//Put your code here'
        }
    }
    
    handleCodeChange = (editor, data, value)=>{
        // this.setState({code:value});
        this.props.onCodeChange(value);
    }
    

    render() {
        return (
            <div className="editor split_left">
                {/* hello */}
                <p className='editor-title'>index.html (HTML)</p>
                <CodeEditorr
                    onBeforeChange={this.handleCodeChange}
                    value = {this.props.value}
                    options = {{
                        lineWrapping : true,
                        mode: "xml",
                        lineNumbers : true,
                        theme: 'material',
                    }}
                    className = "code-editor"
                    
                    />
            </div>
        )
    }
}
