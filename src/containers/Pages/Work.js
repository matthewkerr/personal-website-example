import React, { Component } from 'react';
import Section from '../../components/Section/Section';
import Wrapper from '../../hoc/Wrapper';
import planetsideScreenshot5 from '../../assets/img/portfolio/planetside2/planetside_screenshot5.png';
import h1z1Screenshot1 from '../../assets/img/portfolio/h1z1/h1z1_main_menu_after.jpg';
import landmarkScreenShot1 from '../../assets/img/portfolio/landmark/landmark_screenshot1.jpg';
import cloneWarsScreenShot1 from '../../assets/img/portfolio/cloneWars/clonewars_screenshot1.png';
import freeRealmsScreenShot1 from '../../assets/img/portfolio/freeRealms/free_realms_screenshot1.jpg';
import judyAlbrechtScreenShot1 from '../../assets/img/portfolio/judyAlbrecht/judy_albrecht_landing_page.png';
import foodWithFrancesScreenshot1 from '../../assets/img/portfolio/foodWithFrances/foodwithfrances_screenshot1.png';
import adventurehydroScreenshot1 from '../../assets/img/portfolio/adventureHydrology/adventurehydro_screenshot1.png';
import ProjectCard from '../../components/Card/ProjectCard';
class Work extends Component {
  state = {
    projects: [
      {
        id: 1,
        image: h1z1Screenshot1,
        name: "H1Z1",
        role: "UI/UX Programmer",
        pathname: "/h1z1",
        description: "A battle royale game in which up to 150 players compete against each other in a last man standing deathmatch."
      },
      {
        id: 2,
        image: planetsideScreenshot5,
        name: "PLANETSIDE 2",
        role: "UI/UX Programmer",
        pathname: "/planetside2",
        description: "PlanetSide 2 is a Massively Multiplayer first person shooter that delivers massive combat on a truly epic scale."
      },
      {
        id: 3,
        image: landmarkScreenShot1,
        name: "LANDMARK",
        role: "UI/UX Programmer",
        pathname: "/landmark",
        description: "Landmark was a social building MMO that let you build anything you can imagine."
      },
      {
        id: 4,
        image: cloneWarsScreenShot1,
        name: "CLONE WARS ADVENTURES",
        role: "UI/UX Programmer",
        pathname: "/clonewars",
        description: "Clone Wars was a Star Wars–themed massively multiplayer online game."
      },
      {
        id: 5,
        image: freeRealmsScreenShot1,
        name: "FREE REALMS",
        role: "UI/UX Programmer",
        pathname: "/freerealms",
        description: "Free Realms was a massive multiplayer online role playing video game set in a fantasy-themed world named Sacred Grove."
      },
      {
        id: 6,
        image: judyAlbrechtScreenShot1,
        name: "JUDY ALBRECHT",
        role: "Web Development",
        pathname: "/judyalbrecht",
        description: "A Bootstrap based web application for Judy Albrecht,  Creative Services Director @ KFMB."
      },
      {
        id: 7,
        image: foodWithFrancesScreenshot1,
        name: "FOOD WITH FRANCES",
        role: "Web Development",
        pathname: "/foodwithfrances",
        description: "A Wordpress site for a local certified wine specialist and food blogger."
      },
      {
        id: 8,
        image: adventurehydroScreenshot1,
        name: "ADVENTURE HYDROLOGY",
        role: "Web Development",
        pathname: "/adventurehydro",
        description: "A Wordpress site for video blogger and hydrologist Chris Wolff."
      },
    ]
  } 

  onProjectClicked =( event, id ) => {
    const projectIndex = this.state.projects.findIndex( p => {
      return p.id === id;
    } );
    const project =  {
      ...this.state.projects[projectIndex]
    }
    this.props.history.push({ pathname: project.pathname});
  }
    
  render() {

    let projects = this.state.projects.map( project => {
      return  <Wrapper>
              <ProjectCard 
                          key={project.id}
                          image={project.image} 
                          name={project.name} 
                          description={project.description}
                          clicked={(event) => this.onProjectClicked(event, project.id)} />
                          <br/>
              </Wrapper>
    })

    return ( 
        <Wrapper>
        <Section label="Work" class='topSection'/>
        <div className="container">
        {projects}
        </div>
        </Wrapper>
      )
    }
}

export default Work;