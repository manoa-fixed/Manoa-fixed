import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Card } from 'semantic-ui-react';
import { Reports } from '/imports/api/report/Reports';
import ReportsItem from '/imports/ui/components/ReportsItem';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

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
          <Card.Group>
            {this.props.reports.map((report, index) => <ReportsItem key={index} report={report}/>)}
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
