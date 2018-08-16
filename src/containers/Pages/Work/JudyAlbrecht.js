import React, {Component} from 'react';
import Wrapper from '../../../hoc/Wrapper';
import Jumbotron from '../../../components/Jumbotron/Jumbotron';

import judyAlbrechtScreenShot1 from '../../../assets/img/portfolio/judyAlbrecht/judy_albrecht_landing_page.png';
import judyAlbrechtScreenShot2 from '../../../assets/img/portfolio/judyAlbrecht/judy_albrecht_contact_page.png';
import judyAlbrechtScreenShot3 from '../../../assets/img/portfolio/judyAlbrecht/judy_albrecht_resume_page.png';
import judyAlbrechtScreenShot4 from '../../../assets/img/portfolio/judyAlbrecht/judy_albrecht_work_page.png';

class JudyAlbrecht extends Component {

    render() {
        return (
            <Wrapper>
            <Jumbotron clsName="jumbotron topSection">
            <div>
                <div className="container">
                        <div className="card-header-work rounded">
                            <h1 className="display-4-purple">Judy Albrecht</h1>
                            <p className="card-text text-light">Bootstrap, Javascript, HTML5</p>
                            <p className="card-text text-purple">Created a bootstrap based template for the Creative Services Director at KFMB.</p>
                            <img className="card-img-top" src={judyAlbrechtScreenShot1} alt="Cardcap"/>
                            <div className='spacer'></div>
                            <img className="card-img-top" src={judyAlbrechtScreenShot2} alt="Cardcap"/>
                            <div className='spacer'></div>
                            <img className="card-img-top" src={judyAlbrechtScreenShot3} alt="Cardcap"/>
                            <div className='spacer'></div>
                            <img className="card-img-top" src={judyAlbrechtScreenShot4} alt="Cardcap"/>
                            <div className='spacer'></div>
                        </div>
                </div>
            </div>
            </Jumbotron>
            </Wrapper>
        )
    }
}

export default JudyAlbrecht;