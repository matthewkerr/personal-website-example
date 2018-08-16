import React, {Component} from 'react';
import Wrapper from '../../../hoc/Wrapper';
import Jumbotron from '../../../components/Jumbotron/Jumbotron';

import h1z1Screenshot1 from '../../../assets/img/portfolio/h1z1/h1z1_main_menu_after.jpg';
import h1z1Screenshot2 from '../../../assets/img/portfolio/h1z1/h1z1_main_menu_before.jpg';
import h1z1Screenshot3 from '../../../assets/img/portfolio/h1z1/h1z1_character_select_after.jpg';
import h1z1Screenshot4 from '../../../assets/img/portfolio/h1z1/h1z1_character_select_before.jpg';
import h1z1Screenshot5 from '../../../assets/img/portfolio/h1z1/h1z1_marketplace_after.jpg';
import h1z1Screenshot6 from '../../../assets/img/portfolio/h1z1/h1z1_marketplace_before.jpg';
import h1z1Screenshot7 from '../../../assets/img/portfolio/h1z1/h1z1_scrapyard_after.jpg';
import h1z1Screenshot8 from '../../../assets/img/portfolio/h1z1/h1z1_scrapyard_before.jpg';
import h1z1Screenshot9 from '../../../assets/img/portfolio/h1z1/h1z1_splash_screen_before.jpg';
import h1z1Screenshot10 from '../../../assets/img/portfolio/h1z1/h1z1_splash_screen_after.jpg';


class H1Z1 extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <Wrapper>
            <Jumbotron clsName="jumbotron topSection">
            <div>
                <div className="container">
                        <div className="card-header-work rounded">
                            <h1 className="display-4-purple">H1Z1</h1>
                            <p className="card-text text-light">Actionscript, C++, UI/UX Design </p>
                            <p className="card-text text-purple">On this project I worked closely with UI and game designers to program and design various hud, menu, and game play elements.</p>
                            <img className="card-img-top" src={h1z1Screenshot1} alt="Cardcap"/>
                            <div className='spacer'></div>
                            <img className="card-img-top" src={h1z1Screenshot2} alt="Cardcap"/>
                            <div className='spacer'></div>
                            <img className="card-img-top" src={h1z1Screenshot3} alt="Cardcap"/>
                            <div className='spacer'></div>
                            <img className="card-img-top" src={h1z1Screenshot4} alt="Cardcap"/>
                            <div className='spacer'></div>
                            <img className="card-img-top" src={h1z1Screenshot5} alt="Cardcap"/>
                            <div className='spacer'></div>
                            <img className="card-img-top" src={h1z1Screenshot6} alt="Cardcap"/>
                            <div className='spacer'></div>
                            <img className="card-img-top" src={h1z1Screenshot7} alt="Cardcap"/>
                            <div className='spacer'></div>
                            <img className="card-img-top" src={h1z1Screenshot8} alt="Cardcap"/>
                            <div className='spacer'></div>
                            <img className="card-img-top" src={h1z1Screenshot9} alt="Cardcap"/>
                            <div className='spacer'></div>
                            <img className="card-img-top" src={h1z1Screenshot10} alt="Cardcap"/>
                            <div className='spacer'></div>
                        </div>
                </div>
            </div>
            </Jumbotron>
            
            </Wrapper>
            
        )
    }
}

export default H1Z1;