import React from 'react';
import _ from 'underscore';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Card } from 'semantic-ui-react';
import { Reports } from '/imports/api/report/Reports';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SimpleSchema from 'simpl-schema';
import AutoForm from 'uniforms-semantic/AutoForm';
import MultiSelect from '../components/MultiSelect';
import PublicReportsItem from '../components/PublicReportsItem';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListReportsAll extends React.Component {
  state = {
    selected: [],
  }

  handleInputChange = (key, value) => {
    this.setState({
      selected: value,
    });
  }

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader inverted active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    const formSchema = new SimpleSchema({
      Search: { type: Array, optional: true },
      'Search.$': {
        type: String,
        allowedValues: ['Vandalism', 'Water Damage', 'Structural', 'Natural/Plants',
          'Electrical', 'Lost & Found', 'Miscellaneous'],
      },
    });

    let fRef = null;
    let reports = this.props.reports;
    if (this.state.selected.length > 0) {
      reports = _.filter(reports, (r) => {
        let retval = false;
        r.tag.forEach((t) => {
          retval = retval || _.includes(this.state.selected, t);
        });
        return retval;
      });
    }

    return (
        <Container>
          <Header as="h2" textAlign="center" inverted>All Reports</Header>
          <Header as="h3">
            <AutoForm ref={ref => {
              fRef = ref;
            }} schema={formSchema} onChange={this.handleInputChange}>
              <MultiSelect name='Search'/>
            </AutoForm>
          </Header>
          <Card.Group>
            {reports.map((report, index) => <PublicReportsItem key={index} report={report} Reports={Reports}/>)}
          </Card.Group>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListReportsAll.propTypes = {
  reports: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Reportall');
  return {
    reports: Reports.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListReportsAll);
