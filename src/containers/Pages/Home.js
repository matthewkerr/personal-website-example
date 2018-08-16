import React, {Component} from 'react';
import Jumbotron from '../../components/Jumbotron/Jumbotron';

class Home extends Component {

    homePageClicked =()=> {
        this.props.history.push({ pathname: '/work'});
    }

    render() {
        return (
            <Jumbotron clsName="jumbotron-home">
                <div className="container text-center centered" onClick={this.homePageClicked}>
                    <br/>
                    <br/>
                    <h1 className="display-4">ENGAGE</h1>
                    <h1 className="display-4">DISRUPT</h1>
                    <h1 className="display-4">PROVOKE</h1>
                    <h1 className="display-4">EXECUTE</h1>
                    <h1 className="display-4">CHANGE</h1>
                </div>
          </Jumbotron>
    
        );
    }
}

export default Home;