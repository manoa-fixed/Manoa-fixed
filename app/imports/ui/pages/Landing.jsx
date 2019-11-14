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
            <Header as='h3' inverted>See something in need of a repair?</Header>
            <Header as='h3' inverted>Sign-In... then click on our Add Report button above!</Header>
          </Grid.Column>

        </Grid>
        </div>
    );
  }
}

export default Landing;
