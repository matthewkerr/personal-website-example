import React, {Component} from 'react';
import Wrapper from '../../../hoc/Wrapper';
import Jumbotron from '../../../components/Jumbotron/Jumbotron';

import foodWithFrancesScreenshot1 from '../../../assets/img/portfolio/foodWithFrances/foodwithfrances_screenshot1.png';
import foodWithFrancesScreenshot2 from '../../../assets/img/portfolio/foodWithFrances/foodwithfrances_screenshot2.png';
import foodWithFrancesScreenshot3 from '../../../assets/img/portfolio/foodWithFrances/foodwithfrances_screenshot3.png';
import foodWithFrancesScreenshot4 from '../../../assets/img/portfolio/foodWithFrances/foodwithfrances_screenshot4.png';

class FoodWithFrances extends Component {

    render() {
        return (
            <Wrapper>
            <Jumbotron clsName="jumbotron topSection">
            <div>
                <div className="container">
                        <div className="card-header-work rounded">
                            <h1 className="display-4-purple">Food With Frances</h1>
                            <h4 className="card-text text-light">Wordpress, Consultating</h4>
                            <p className="card-text text-purple">With this project, I am working with a San Diego based food blogger to help develop and maintain her wordpress blog.</p>
                            <img className="card-img-top rounded border border-info" src={foodWithFrancesScreenshot1} alt="Cardcap"/>
                            <div className='spacer'></div>
                            <img className="card-img-top rounded border border-info" src={foodWithFrancesScreenshot2} alt="Cardcap"/>
                            <div className='spacer'></div>
                            <img className="card-img-top rounded border border-info" src={foodWithFrancesScreenshot3} alt="Cardcap"/>
                            <div className='spacer'></div>
                            <img className="card-img-top rounded border border-info" src={foodWithFrancesScreenshot4} alt="Cardcap"/>
                            <div className='spacer'></div>
                        </div>
                </div>
            </div>
            </Jumbotron>
            </Wrapper>
        )
    }
}

export default FoodWithFrances;