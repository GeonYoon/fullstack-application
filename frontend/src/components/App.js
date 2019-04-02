import React, {Component} from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import TemplateContainer from '../containers/TemplateContainer'

class App extends Component {
    render() {
        return (
        <div className="container">
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={TemplateContainer} />
                </div>
            </BrowserRouter>
        </div>
        );
    }
}
    

export default App