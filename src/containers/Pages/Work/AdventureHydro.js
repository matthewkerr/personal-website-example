import React, {Component} from 'react';
import Wrapper from '../../../hoc/Wrapper';
import Jumbotron from '../../../components/Jumbotron/Jumbotron';

import adventurehydroScreenshot1 from '../../../assets/img/portfolio/adventureHydrology/adventurehydro_screenshot1.png';
import adventurehydroScreenshot2 from '../../../assets/img/portfolio/adventureHydrology/adventurehydro_screenshot2.png';
import adventurehydroScreenshot3 from '../../../assets/img/portfolio/adventureHydrology/adventurehydro_screenshot3.png';

class AdventureHydro extends Component {

    render() {
        return (
            <Wrapper>
            <Jumbotron clsName="jumbotron topSection">
            <div>
                <div className="container">
                        <div className="card-header-work rounded">
                            <h1 className="display-4-purple">Adventure Hydrology</h1>
                            <p className="card-text text-light">Wordpress , Consultating</p>
                            <p className="card-text text-purple">Here I am using ReactJs to develop a mobile first, single page web application for Chriss Wolff's video series.</p>
                            <img className="card-img-top" src={adventurehydroScreenshot1} alt="Cardcap"/>
                            <div className='spacer'></div>
                            <img className="card-img-top" src={adventurehydroScreenshot2} alt="Cardcap"/>
                            <div className='spacer'></div>
                            <img className="card-img-top" src={adventurehydroScreenshot3} alt="Cardcap"/>
                            <div className='spacer'></div>
                        </div>
                </div>
            </div>
            </Jumbotron>
            </Wrapper>
        )
    }
}

export default AdventureHydro;