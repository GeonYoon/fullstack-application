import React from 'react';
import './css/template.css';
import Header from './Header'


const Template = ({highlight, messages}) => {
    return (
        <main className="template">
            <Header />
            <section className="form-wrapper">
                { highlight }
            </section>
            <section className="form-wrapper fixed">
                { messages }
            </section>
        </main>
    );
};

export default Template;
