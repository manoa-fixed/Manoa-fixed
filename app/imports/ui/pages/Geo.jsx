import React from 'react';
import { Grid, Image, Header } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Geo extends React.Component {
  render() {
    return (
        <div>
        <Grid verticalAlign='middle' textAlign='center' container>

          <Grid.Column width={4}>
            <Image size='large' src="/images/google.html"/>
          </Grid.Column>

          <Grid.Column width={8}>
            <Header as='h1' inverted>Attach a Geotag</Header>
            <Header as='h3' inverted>Help us maintain our UH Manoa campus</Header>
          </Grid.Column>

        </Grid>
        </div>
    );
  }
}

export default Geo;
