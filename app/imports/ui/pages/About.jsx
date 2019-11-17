import React from 'react';
import { Grid, Image, Header } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class About extends React.Component {
  render() {
    return (
        <div className='wallpaper-background'>
        <Grid verticalAlign='middle' textAlign='center' container>
          <Grid.Column width={15}>
            <Header as='h1' inverted>Welcome to Manoa Fixed</Header>
            <Header as='h3' inverted>This is an online application to report problems that happends at UH.
            Some of the common problems are: Broken lights, Broken equiptment. lost item.
            Use this app to suggest the college about how it can improve! Take a photo on your phone,
              add tags and description and click the report button to send us your report!
              You can even add geo tags to your report.
              Start a new report by typing in your descriptions.
              The site will automatically search for similar cases.
              If you find a case that matches what you want
              Realize anyway the university can improve?to report, simply click the `&quot`me too`&quot` button.

              Send us your suggeions! You can make an account to get back notifications on your report. If you
            don`&apos`t want your name attached to your report,
              just click the `&quot`keep me anonymous`&quot` button.
              You can comeback to your report to check up on it  anonymously with the report number.
            Start a new report with the button below.</Header>
            <Image size='medium' src="/images/report-button.png"/>
          </Grid.Column>

        </Grid>
        </div>
    );
  }
}

export default About;
