import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Table, Header, Loader, Card } from 'semantic-ui-react';
import { Reports } from '/imports/api/report/Reports';
import ReportsItemAdmin from '/imports/ui/components/ReportsItemAdmin';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListReportsAdmin extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    console.log(this.props);
    return (
        <Container>
          <Header as="h2" textAlign="center" inverted>List Reports (Admin)</Header>
          <Card.Group>
            {this.props.reports.map((report, index) => <ReportsItemAdmin key={index} report={report}/>)}
          </Card.Group>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListReportsAdmin.propTypes = {
  reports: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('ReportAdmin');
  return {
    reports: Reports.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListReportsAdmin);
