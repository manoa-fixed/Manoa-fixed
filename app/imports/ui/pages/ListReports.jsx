import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Card, Input, Button } from 'semantic-ui-react';
import { Reports } from '/imports/api/report/Reports';
import ReportsItem from '/imports/ui/components/ReportsItem';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SimpleSchema from 'simpl-schema';
import AutoForm from 'uniforms-semantic/AutoForm';
import MultiSelect from '../components/MultiSelect';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListReports extends React.Component {
  state = { query: '' };

  handleInputChange = (key, value) => {
    // this.setState({
    //   query: this.search.value,
    // });
    console.log(key, value);
  }

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    const formSchema = new SimpleSchema({
      Search: Array,
      'Search.$': {
        type: String,
        allowedValues: ['Vandalism', 'Water Damage', 'Structural', 'Natural/Plants',
          'Electrical', 'Lost & Found', 'Miscellaneous'],
      },
    });
    console.log(this.props);
    let fRef = null;
    return (
        <Container>
          <Header as="h2" textAlign="center" inverted>List Reports</Header>
          <Header as="h3">
            <AutoForm ref={ref => { fRef = ref; }} schema={formSchema} onChange={this.handleInputChange}>
            <MultiSelect inverted name='Search' />
            </AutoForm>
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
