import React from 'react';
import { Grid, Image, Header, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

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
            <Header as='h3' inverted>Click on the button below to begin a report!</Header>
            <Button inverted color="orange" size='massive' as={NavLink}
                    activeClassName="active" exact to="/add" key='add'>Add Report
            </Button>
          </Grid.Column>

        </Grid>
        </div>
    );
  }
}

export default Landing;
