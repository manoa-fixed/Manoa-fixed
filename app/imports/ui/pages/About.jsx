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
            <Header as='h3' inverted>Manoa Fixed is an application to empower you to help improve the campus!
              This is an online application to report damages and malfunctions around UH Manoa.
            These reports may include: faulty lights, structural damages, vandalism,
              and hazards such as broken glass on the ground.
            Just take out your phone and take a photo of any damages you spot, then press the Report Button to begin!
              Next, add tags, a description, your email, a geo tag and click the submit button to send us your report!
              The site will automatically search for similar cases.
              If you find a case that matches what you want
             to report, simply click the &quot;me too&quot; button.

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
