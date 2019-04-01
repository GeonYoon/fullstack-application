import React, { Component } from 'react';
import './css/highlight.css';


class HighLight extends Component {
    
    whichButton(showTrash,clickTrash){
        if(showTrash === 0) return <div className="two" onClick={() => clickTrash()}>Show Trashed Messages </div>
        else return <div className="two" onClick={() => clickTrash()}>Show Untrashed Messages </div>
    }

    render() {
        const {length,showTrash,clickTrash} = this.props;
        return (
            <div className="row">
                <div className="col s3">
                    <div className="one">Starred: {length} </div>
                    {this.whichButton(showTrash,clickTrash)}
                </div>
                <div className="col s7 three">
                    <div className="input-field col s12">
                        <input placeholder="Text you want to highlight" id="first_name" type="text" className="validate" />
                        <i className="material-icons prefix custom-icon">search</i>
                    </div>
                </div>
                <div className="col s2 four">
                    <div className="middle">Sort by Score</div>
                </div>
            </div>
        );
    }
}

export default HighLight;