import React, {Component} from 'react';
import Wrapper from '../../../hoc/Wrapper';
import Jumbotron from '../../../components/Jumbotron/Jumbotron';

import freeRealmsScreenShot1 from '../../../assets/img/portfolio/freeRealms/free_realms_screenshot1.jpg';
import freeRealmsScreenShot2 from '../../../assets/img/portfolio/freeRealms/free_realms_screenshot2.png';
import freeRealmsScreenShot3 from '../../../assets/img/portfolio/freeRealms/free_realms_screenshot3.png';
import freeRealmsScreenShot4 from '../../../assets/img/portfolio/freeRealms/free_realms_screenshot4.png';
import freeRealmsScreenShot5 from '../../../assets/img/portfolio/freeRealms/free_realms_screenshot5.png';
import freeRealmsScreenShot6 from '../../../assets/img/portfolio/freeRealms/free_realms_screenshot6.png';
import freeRealmsScreenShot7 from '../../../assets/img/portfolio/freeRealms/free_realms_screenshot7.png';
import freeRealmsScreenShot8 from '../../../assets/img/portfolio/freeRealms/free_realms_screenshot8.png';

class FreeRealms extends Component {

    render() {
        return (
            <Wrapper>
            <Jumbotron clsName="jumbotron topSection">
            <div>
                <div className="container">
                        <div className="card-header-work rounded">
                            <h1 className="display-4-purple">Free Realms</h1>
                            <p className="card-text text-light">Actionscript, Lua,  UI/UX Design</p>
                            <p className="card-text text-purple">While on the UI team for Free Realms, I helped program, design, and branded elements of the hud, menus, and advertisizing elements.</p>
                            <img className="card-img-top" src={freeRealmsScreenShot1} alt="Cardcap"/>
                            <div className='spacer'></div>
                            <img className="card-img-top" src={freeRealmsScreenShot2} alt="Cardcap"/>
                            <div className='spacer'></div>
                            <img className="card-img-top" src={freeRealmsScreenShot3} alt="Cardcap"/>
                            <div className='spacer'></div>
                            <img className="card-img-top" src={freeRealmsScreenShot4} alt="Cardcap"/>
                            <div className='spacer'></div>
                            <img className="card-img-top" src={freeRealmsScreenShot5} alt="Cardcap"/>
                            <div className='spacer'></div>
                            <img className="card-img-top" src={freeRealmsScreenShot6} alt="Cardcap"/>
                            <div className='spacer'></div>
                            <img className="card-img-top" src={freeRealmsScreenShot7} alt="Cardcap"/>
                            <div className='spacer'></div>
                            <img className="card-img-top" src={freeRealmsScreenShot8} alt="Cardcap"/>
                            <div className='spacer'></div>
                        </div>
                </div>
            </div>
            </Jumbotron>
            </Wrapper>
        )
    }
}

export default FreeRealms;