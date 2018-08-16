import React, {Component} from 'react';
import Wrapper from '../../hoc/Wrapper';
import Jumbotron from '../../components/Jumbotron/Jumbotron';

class About extends Component {
    render() {
        return (
            <Wrapper>
            <Jumbotron clsName="jumbotron topSection">
                <div className="container text-center centered">
                    <h1 className="display-6">UI-UX</h1>
                    <h1 className="display-6">ENGINEER</h1>
                    <h1 className="display-6">DESIGNER</h1>
                    <h1 className="display-6">ARTIST</h1>
                    <h4>Clean and functional code. Beautiful user experiences.</h4><br/>
                    
                </div>
            </Jumbotron>
            <div className="footer-contact text-center">
                    <p className=''>Javascript, React Js, React Native, HTML5, CSS, PHP, Laravel,  C++, Actionscript, Python, MySQL </p>
            </div>
            </Wrapper>
        )
    }
}

export default About;