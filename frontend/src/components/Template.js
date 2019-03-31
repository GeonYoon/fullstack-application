import React from 'react';
import './css/template.css';

const Template = ({highlight, messages}) => {
    return (
        <main className="template">
            <div className="title">
                Signafire logo goes here
            </div>
            <section className="form-wrapper">
                { highlight }
            </section>
            <section className="form-wrapper">
                { messages }
            </section>
        </main>
    );
};

export default Template;
