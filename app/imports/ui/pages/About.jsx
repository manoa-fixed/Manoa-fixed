import React from 'react';
import { Grid, Header, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

/** A simple static component to render some text for the landing page. */
class About extends React.Component {
  render() {
    return (
        <div className='wallpaper-background'>
        <Grid verticalAlign='middle' textAlign='Left' container>
          <Grid.Column width={15}>
            <Header as='h1' inverted> INTRODUCTION </Header>
            <Header as='h3' inverted>> Welcome! Manoa Fixed is an online web-tool designed to help create and organize campus maintenance related
            reports into one single source. If you are on campus and see anything that needs upkeeping (potholes, broken railings,
            flickering lights, etc), please feel free to click on our Add Report Button below to begin a report. Also we have now
            incorporated Lost & Found reports!</>

            <Button inverted color="orange" size='massive' as={NavLink}
                    activeClassName="active" exact to="/add" key='add'>Add Report
            </Button>

            <Header as='h1' inverted>> About the Developers </Header>
            <Header as='h3' inverted>> This app was developed by three ICS 314 (Software Engineering I) students over the course of several weeks.
              View our project page [here](https://manoa-fixed.github.io/)</Header>
          </Grid.Column>
        </Grid>
        </div>
    );
  }
}

export default About;
