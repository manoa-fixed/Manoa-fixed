import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Card, Input, Button } from 'semantic-ui-react';
import { Reports } from '/imports/api/report/Reports';
import ReportsItem from '/imports/ui/components/ReportsItem';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HoverText = styled.b`color: #000; :hover {color: #ffffff;cursor: pointer;}z`;
/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListReports extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    console.log(this.props);
    return (
        <Container>
          <Header as="h2" textAlign="center" inverted>List Reports</Header>
          <Header as="h3">
            <Input inverted name = 'search' placeholder='Search...' />
            <Button color="orange" size='big' as={NavLink}
                    activeClassName="active" exact to="/add" key='add'><HoverText>Go</HoverText>
            </Button>
             </Header>
          <Card.Group>
            {this.props.reports.map((report, index) => <ReportsItem key={index} report={report} Reports={Reports}/>)}
          </Card.Group>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListReports.propTypes = {
  reports: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Report');
  return {
    reports: Reports.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListReports);
