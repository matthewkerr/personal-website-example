import React, {Component} from 'react';
import Wrapper from '../../../hoc/Wrapper';
import Jumbotron from '../../../components/Jumbotron/Jumbotron';

import landmarkScreenShot1 from '../../../assets/img/portfolio/landmark/landmark_screenshot1.jpg';
import landmarkScreenShot2 from '../../../assets/img/portfolio/landmark/landmark_screenshot2.jpg';
import landmarkScreenShot1png from '../../../assets/img/portfolio/landmark/landmark_screenshot1.png';
import landmarkScreenShot2png from '../../../assets/img/portfolio/landmark/landmark_screenshot2.png';
import landmarkScreenShot3 from '../../../assets/img/portfolio/landmark/landmark_screenshot3.png';
import landmarkScreenShot4 from '../../../assets/img/portfolio/landmark/landmark_screenshot4.png';
import landmarkScreenShot12 from '../../../assets/img/portfolio/landmark/landmark_screenshot12.png';
import landmarkScreenShot11 from '../../../assets/img/portfolio/landmark/landmark_screenshot11.png';
import landmarkScreenShot13 from '../../../assets/img/portfolio/landmark/landmark_screenshot13.png';



class Landmark extends Component {

    render() {
        return (
            <Wrapper>
            <Jumbotron clsName="jumbotron topSection">
            <div>
                <div className="container">
                        <div className="card-header-work rounded">
                            <h1 className="display-4-purple">Landmark</h1>
                            <p className="card-text text-light">Actionscript , C++ , UI/UX Design </p>
                            <p className="card-text text-purple">On Landmark I worked with the EQ Next team to design, program and skin the UI and in game elements.</p>
                            <img className="card-img-top" src={landmarkScreenShot1} alt="Cardcap"/>
                            <div className='spacer'></div>
                            <img className="card-img-top" src={landmarkScreenShot2} alt="Cardcap"/>
                            <div className='spacer'></div>
                            <img className="card-img-top" src={landmarkScreenShot1png} alt="Cardcap"/>
                            <div className='spacer'></div>
                            <img className="card-img-top" src={landmarkScreenShot2png} alt="Cardcap"/>
                            <div className='spacer'></div>
                            <img className="card-img-top" src={landmarkScreenShot3} alt="Cardcap"/>
                            <div className='spacer'></div>
                            <img className="card-img-top" src={landmarkScreenShot4} alt="Cardcap"/>
                            <div className='spacer'></div>
                            <img className="card-img-top" src={landmarkScreenShot12} alt="Cardcap"/>
                            <div className='spacer'></div>
                            <img className="card-img-top" src={landmarkScreenShot11} alt="Cardcap"/>
                            <div className='spacer'></div>
                            <img className="card-img-top" src={landmarkScreenShot13} alt="Cardcap"/>
                            <div className='spacer'></div>
                        </div>
                </div>
            </div>
            </Jumbotron>
            </Wrapper>
            
        )
    }
}

export default Landmark;