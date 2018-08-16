import React, {Component} from 'react';
import NavItem from './NavItem/NavItem';
import BrandImage from '../../assets/img/matthew_kerr_logo.png';
import Wrapper from '../../hoc/Wrapper';

class Navbar extends Component {
    state = {
        navCollapsed: true
    }

    onToggleNavigation = () => {
        this.setState({ navCollapsed: !this.state.navCollapsed })
    }
    
    render() {

        const {navCollapsed} = this.state;
        return (
            <Wrapper>
            <nav className={this.props.class}>
            <div className="container">
              <a className="navbar-brand" href="/"><img src={BrandImage} alt='matthew kerr logo' />Matthew Kerr</a>
              <button  onClick={this.onToggleNavigation} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className={(navCollapsed ? 'collapse' : '') + ' navbar-collapse'} id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                <NavItem link={"/"}clicked={this.onToggleNavigation}>Home</NavItem>
                <NavItem link={"/work"}clicked={this.onToggleNavigation}>Work</NavItem>
                <NavItem link={"/about"} clicked={this.onToggleNavigation}>About</NavItem>
                <NavItem link={"/contact"}clicked={this.onToggleNavigation}>Contact</NavItem>
                </ul>
              </div>
            </div>
          </nav>
        </Wrapper>
        )
    }
}

export default Navbar;
