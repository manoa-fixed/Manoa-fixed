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
              <Header as='h1' inverted>Welcome to Manoa Fixed</Header>
              <iframe width="1120" height="630" src="https://www.youtube.com/embed/ctWDAdQ81B8" frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen></iframe>
              <Header as='h3' inverted>
                This is an online application to report problems that happends at UH.
                Some of the common problems are: Broken lights, Broken equiptment, lost item,
                and hazards such as broken glass on the ground.
                Use this app to suggest the college about how it can improve! Take a photo on your phone,
                add tags and description and click the report button to send us your report!
                You can even add geo tags to your report.
                Start a new report by typing in your descriptions.
                The site will automatically search for similar cases.
                If you find a case that matches what you want
                to report, simply click the &quot;me too&quot; button.
                <Header as='h1' inverted> Welcome! </Header>
                <Header as='h3' inverted>Manoa Fixed is an online web-tool designed
                  to help create and organize campus maintenance related
                  reports into one single source. If you are on campus
                  and see anything that needs upkeeping (potholes, broken railings,
                  flickering lights, etc), please feel free to click on our
                  Add Report Button below to begin a report. Also we have now
                  incorporated Lost & Found reports!</Header>
                Realize anyway the university can improve? Send us your suggestion!
                You can make an account to get back notifications on your report. If you
                don&apos;t want your name attached to your report,
                just click the &quot;keep me anonymous&quot; button.
                You can comeback to your report to check up on it anonymously with the report number.
                Start a new report with the button below.</Header>

              <Header as='h1' inverted> Welcome! </Header>
              <Header as='h3' inverted>Manoa Fixed is an online web-tool
                designed to help create and organize campus maintenance related
                reports into one single source. If you are on campus and see
                anything that needs upkeeping (potholes, broken railings,
                flickering lights, etc), please feel free to click on our
                Add Report Button below to begin a report. Also we have now
                incorporated Lost & Found reports!</Header>


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
