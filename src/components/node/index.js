import React, {Component} from 'react';
import {HotKeys} from 'react-hotkeys';
 
/**
 * Component with hotkey handlers, which are only called when the component
 * is within the application's 'focus tree' and prevents cascading hotkeys from
 * being called
 */
 
class MyNode extends Component{

	componentDidUpdate(prevProps) {
 
		if(!prevProps.isFocused && this.props.isFocused) {
				this._container.focus();
		}

}

	deleteNode() {
		console.log("askdjak");
	}

	render() {
    const handlers = {
      'deleteNode': this.deleteNode
    };

    return (
			<HotKeys handlers={handlers}>
			<div ref={ (c) => this._container = c }>
        Node contents
			</div>
      </HotKeys>
    );
  }
};

export default MyNode;