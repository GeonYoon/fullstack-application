import React, {Component} from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

//component import here
import TemplateContainer from '../containers/TemplateContainer'

class App extends Component {
    componentDidMount(){
        // notyet
    }
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