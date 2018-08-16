import React, {Component} from 'react';
import Wrapper from '../../../hoc/Wrapper';
import Jumbotron from '../../../components/Jumbotron/Jumbotron';

import cloneWarsScreenShot1 from '../../../assets/img/portfolio/cloneWars/clonewars_screenshot1.png';
import cloneWarsScreenShot2 from '../../../assets/img/portfolio/cloneWars/clonewars_screenshot2.png';
import cloneWarsScreenShot3 from '../../../assets/img/portfolio/cloneWars/clonewars_screenshot3.png';
import cloneWarsScreenShot4 from '../../../assets/img/portfolio/cloneWars/clonewars_screenshot4.png';
import cloneWarsScreenShot5 from '../../../assets/img/portfolio/cloneWars/clonewars_screenshot5.png';
import cloneWarsScreenShot6 from '../../../assets/img/portfolio/cloneWars/clonewars_screenshot6.png';
import cloneWarsScreenShot7 from '../../../assets/img/portfolio/cloneWars/clonewars_screenshot7.png';



class CloneWars extends Component {

    render() {
        return (
            <Wrapper>
            <Jumbotron clsName="jumbotron topSection">
            <div>
                <div className="container">
                        <div className="card-header-work rounded">
                            <h1 className="display-4-purple">Clone Wars Adventures</h1>
                            <p className="card-text text-light">Actionscript, UI/UX Design </p>
                            <p className="card-text text-purple">With Clone Wars, we worked with the Lucas Arts to design and brand the UI based on the popluar cartoon series.</p>
                            <img className="card-img-top" src={cloneWarsScreenShot1} alt="Cardcap"/>
                            <div className='spacer'></div>
                            <img className="card-img-top" src={cloneWarsScreenShot2} alt="Cardcap"/>
                            <div className='spacer'></div>
                            <img className="card-img-top" src={cloneWarsScreenShot3} alt="Cardcap"/>
                            <div className='spacer'></div>
                            <img className="card-img-top" src={cloneWarsScreenShot4} alt="Cardcap"/>
                            <div className='spacer'></div>
                            <img className="card-img-top" src={cloneWarsScreenShot5} alt="Cardcap"/>
                            <div className='spacer'></div>
                            <img className="card-img-top" src={cloneWarsScreenShot6} alt="Cardcap"/>
                            <div className='spacer'></div>
                            <img className="card-img-top" src={cloneWarsScreenShot7} alt="Cardcap"/>
                            <div className='spacer'></div>
                        </div>
                </div>
            </div>
            </Jumbotron>
            </Wrapper>
            
        )
    }
}

export default CloneWars;