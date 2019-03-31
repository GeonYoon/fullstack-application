import React, { Component } from 'react';
import './css/highlight.css';


class HighLight extends Component {
    render() {
        return (
            <div className="row">
                <div className="col s3">
                    <div className="one">Starred: 12 </div>
                    <div className="two">Show Trashed Messages </div>
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