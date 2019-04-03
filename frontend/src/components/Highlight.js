import React, { Component } from 'react';
import './css/highlight.css';


class HighLight extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            textInput : ''
        };
        this.handleChange = this.handleChange.bind(this)
      }

    handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            this.handleSubmit(e);
        }
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.highlightMessage(this.state.textInput);
        this.setState({ textInput:' '})
    }

    handleChange = e => {
        this.setState({[e.target.name] : e.target.value});
    };

    whichButton(showTrash,clickTrash){
        if(showTrash === 0) return <div className="two" onClick={() => clickTrash()}>Show Trashed Messages </div>
        else return <div className="two" onClick={() => clickTrash()}>Show Untrashed Messages </div>
    }

    sortButton(areSorted,sortMessage){
        if(areSorted === true) return <div className="middle">Sorted!</div>
        else return <div className="middle" onClick={() => sortMessage()}>Sort by Score</div>
    }

    render() {
        const {length,showTrash,clickTrash,sortMessage,areSorted} = this.props;
        return (
            <div className="row">
                <div className="col s3">
                    <div className="one">Starred: {length} </div>
                    {this.whichButton(showTrash,clickTrash)}
                </div>
                <div className="col s7 three">
                    <div className="input-field col s12">
                        <input placeholder="Text you want to highlight" 
                               name="textInput"
                               value={this.state.textInput}
                               type="text" 
                               className="validate" 
                               onChange={this.handleChange}
                               onKeyPress={this.handleKeyPress}
                        />
                        <i className="material-icons prefix custom-icon" 
                           onClick={(e) => this.handleSubmit(e)}
                        >
                            search
                        </i>
                    </div>
                </div>
                <div className="col s2 four">
                    {this.sortButton(areSorted,sortMessage)}
                </div>
            </div>
        );
    }
}

export default HighLight;