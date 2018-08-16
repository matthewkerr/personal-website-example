import React, {Component} from 'react';
import Wrapper from '../../hoc/Wrapper';
import Jumbotron from '../../components/Jumbotron/Jumbotron';

class Contact extends Component {
    render() {
        return (
            <Wrapper>
            <Jumbotron clsName="jumbotron topSection">
                <div className="container text-center centered">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1 className="display-6">SAY HELLO!</h1>
                            <h1 className="display-6">619-995-1499</h1>
                            <h4><strong>matt@matthewkerr.com</strong></h4>
                        </div>
                    </div>
                </div>
            </Jumbotron>
            <div className="footer-contact text-center">
                    <p className=''>If you have a project that you want to get started, something you need fixed ? 
                    If you think you need my help or just want to say hello, get in touch.</p>
            </div>
            </Wrapper>
        )
    }
}

export default Contact;