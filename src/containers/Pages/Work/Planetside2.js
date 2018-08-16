import React, {Component} from 'react';
import Wrapper from '../../../hoc/Wrapper';
import Jumbotron from '../../../components/Jumbotron/Jumbotron';

import planetside_screenshot5 from '../../../assets/img/portfolio/planetside2/planetside_screenshot5.png';
import planetside_screenshot6 from '../../../assets/img/portfolio/planetside2/planetside_screenshot6.png';
import planetside_screenshot13 from '../../../assets/img/portfolio/planetside2/planetside_screenshot13.jpg';
import planetside_screenshot16 from '../../../assets/img/portfolio/planetside2/planetside_screenshot16.jpg';
import planetside_screenshot18 from '../../../assets/img/portfolio/planetside2/planetside_screenshot18.jpg';
import planetside_screenshot17 from '../../../assets/img/portfolio/planetside2/planetside_screenshot17.jpg';
import planetside_screenshot19 from '../../../assets/img/portfolio/planetside2/planetside_screenshot19.jpg';



class PlanetSide2 extends Component {

    render() {
        return (
            <Wrapper>
            <Jumbotron clsName="jumbotron topSection">
            <div>
                <div className="container">
                        <div className="card-header-work rounded">
                            <h1 className="display-4-purple">PlanetSide 2</h1>
                            <p className="card-text text-light">Actionscript , C++ , UI/UX Design</p>
                            <p className="card-text text-purple">On this project I worked with the Planetside team to port the UI and game systems to the Playstation 4.</p>
                            <img className="card-img-top" src={planetside_screenshot5} alt="Cardcap"/>
                            <div className='spacer'></div>
                            <img className="card-img-top" src={planetside_screenshot6} alt="Cardcap"/>
                            <div className='spacer'></div>
                            <img className="card-img-top" src={planetside_screenshot13} alt="Cardcap"/>
                            <div className='spacer'></div>
                            <img className="card-img-top" src={planetside_screenshot16} alt="Cardcap"/>
                            <div className='spacer'></div>
                            <img className="card-img-top" src={planetside_screenshot18} alt="Cardcap"/>
                            <div className='spacer'></div>
                            <img className="card-img-top" src={planetside_screenshot17} alt="Cardcap"/>
                            <div className='spacer'></div>
                            <img className="card-img-top" src={planetside_screenshot19} alt="Cardcap"/>
                            <div className='spacer'></div>
                        </div>
                </div>
            </div>
            </Jumbotron>
            
            </Wrapper>
            
        )
    }
}

export default PlanetSide2;