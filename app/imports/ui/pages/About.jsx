import React from 'react';
import { Grid, Header, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

/** A simple static component to render some text for the landing page. */
const darkbstyle = {
  background: 'rgba(50,50,50,.8)',
  color: 'white',
};
const HoverText = styled.b`color: #000; :hover {color: #ffffff;cursor: pointer;}
`;

class About extends React.Component {
  render() {
    return (
        <div className='wallpaper-background'>
          <Grid verticalAlign='middle' textAlign='Left' container style={darkbstyle}>
            <Grid.Column width={15}>
              <Header as='h1' inverted>About Manoa Fixed</Header>
              <iframe width="1120" height="630" src="https://www.youtube.com/embed/PFD2BpQvaf8" frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen></iframe>
              <Header as='h3' inverted>
                <Header as='h1' inverted> Welcome! </Header>
                <Header as='h3' inverted>Manoa Fixed is an online web-tool designed
                to help create and organize campus maintenance related
                reports into one single source. If you are on campus
                and see anything that needs upkeeping (potholes, broken railings,
                flickering lights,Broken equiptment,lost item, etc), please feel free to click on our
                Add Report Button below to begin a report.</Header>
                Use this app to suggest the college about how it can improve!
                Take a photo on your phone, upload it to your desktop,
                add tags and description and click the report button to send us your report!
                Realize anyway the university can improve? Send us your suggestion!
                You can make an account to get back notifications on your report.
                Start a new report with the button below.</Header>


            <Button className="reportButton" color="red" size='massive' as={NavLink}
                    activeClassName="active" exact to="/add" key='add'>Add Report
            </Button>


              <Header as='h1' inverted> About the Developers... </Header>
              <Header as='h3' inverted> This app was developed by three ICS 314
                (Software Engineering I) students over the course of several weeks.
                View our project page <a href='https://manoa-fixed.github.io/'>
                  [here]</a></Header>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

export default About;
