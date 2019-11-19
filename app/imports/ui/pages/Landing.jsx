import React from 'react';
import { Grid, Image, Header } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div className='wallpaper-background'>
        <Grid verticalAlign='middle' textAlign='center' container>

          <Grid.Column width={4}>
            <Image size='very large' src="/images/wrench-4.png"/>
          </Grid.Column>

          <Grid.Column width={8}>
            <Header as='h1' inverted>Welcome to Manoa Fixed</Header>
            <Header as='h3' inverted>Help us maintain our UH Manoa campus.
              This site is used to report problems on UH to improve the campus.
            Start by clicking the report button below or learn more about this app by going to the about page.<a Route exact path="/about">about page</a></Header>
            <Image size='medium' src="/images/report-button.png"/>
          </Grid.Column>

        </Grid>
        </div>
    );
  }
}

export default Landing;
