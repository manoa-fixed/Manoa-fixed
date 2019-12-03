import React from 'react';
import { Card, Image, Button, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListReports.jsx. */
class ReportsItem extends React.Component {
  removeItem(docID) {
    console.log(`Deleted item: ${docID}`);
    this.props.Reports.remove(docID);
  }

  render() {
    return (
        <Card>
          <Card.Content>
            <Image
                floated='right'
                size='large'
                src={this.props.report.image}
            />
            <Card.Header>{this.props.report.Location}</Card.Header>
            <Card.Meta>{this.props.report.tag}</Card.Meta>
            <Card.Meta>{this.props.report.email}</Card.Meta>
            <Card.Description>
              {this.props.report.description}
            </Card.Description>
            <Card.Content extra>
              <Link to={`/edit/${this.props.report._id}`}>Edit</Link>
            </Card.Content>
            <Card.Content align='right'>
              <Button icon onClick={() => this.removeItem(this.props.report._id)}>
                <Icon name='trash alternate outline'/>
              </Button>
            </Card.Content>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
ReportsItem.propTypes = {
  report: PropTypes.object.isRequired,
  Reports: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(ReportsItem);
