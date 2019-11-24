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

            <Header as='h1' inverted>Welcome to Manoa Fixed</Header>
            <Header as='h3' inverted>This is an online application to report problems that happends at UH.
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
            <Button inverted color="orange" size='massive' as={NavLink}
                    activeClassName="active" exact to="/add" key='add'>Add Report
            </Button>
          </Grid.Column>
        </Grid>
        </div>
    );
  }
}

export default About;
