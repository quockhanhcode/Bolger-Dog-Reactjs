import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Single from '../Dogger/Single/Single';
import DarkDog from '../Dogger/DarkDog/DarkDog';
import Wellcome from '../Dogger/Well/Wellcome';
import Trainers from '../Dogger/OutTrain/Trainers';
import Pricing from '../Dogger/Pricing table/Pricing';
import Question from '../Dogger/Question/Question';
import Customers from '../Dogger/Custommers/Customers';
import Gallery from '../Dogger/Gallery/Gallery';
import BlogD from '../Dogger/DoggerBlog/BlogD';
import Services from '../Dogger/Services/Services';
import Contact from '../Dogger/Contact/Contact';

class DieuHuongURL extends Component {
    render() {
        return (
            
                <div>
                <Route exact path="/" component={DarkDog}/>
                <Route exact path="/" component={Wellcome}/>
                <Route exact path="/" component={Trainers}/>
                <Route exact path="/" component={Pricing}/>
                <Route exact path="/" component={Question}/>
                <Route exact path="/" component={Customers}/>
                <Route exact path="/" component={Gallery}/>
                <Route exact path="/" component={BlogD}/>
                <Route exact path="/" component={Services}/>
                <Route exact path="/" component={Contact}/>
                <Route exact path="/single:slug.:id.html" component={Single}/>
                </div>
            
        );
    }
}

export default DieuHuongURL;