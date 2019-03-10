import React, { Component } from 'react';
import {HotKeys} from 'react-hotkeys';
import MyNode from '../node';

const data = [MyNode, MyNode, MyNode, MyNode]
// Simple "name:key sequence/s" to create a hotkey map
 
const map = {
  'snapLeft': 'command+left',
	'deleteNode': ['del', 'backspace'],
	'moveUp': 'up'
};
 
// Component with a key map
 
class Wrapper extends Component{
	constructor(props){
		super(props);
		this.up = this.up.bind(this);
	}

	handlers = {
		'moveUp': this.up
	};

	up(event){
		console.log(event, "Moving up");
	}

  render() {
    return (
      <HotKeys keyMap={map} handlers={this.handlers}>
        <div>
					{data.map((Node, index)=>{
						return <Node key={index}/>
					})}
        </div>
      </HotKeys>
    );
  }
};

export default Wrapper;