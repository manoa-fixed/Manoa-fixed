import React from 'react';
import { Card, Image, Button, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/** Renders a single row in the List Stuff (Admin) table. See pages/ListStuffAdmin.jsx. */
class ReportsItemAdmin extends React.Component {
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
              {this.props.report.owner}
            </Card.Content>
            <Card.Content extra>
              <Link to={`/edit/${this.props.report._id}`}>Edit</Link>
            </Card.Content>
            <Card.Content align='right'>
              <Button icon onClick={event => this.removeItem(event)}>
                <Icon name='trash alternate outline'/>
              </Button>
            </Card.Content>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
ReportsItemAdmin.propTypes = {
  report: PropTypes.object.isRequired,
  Reports: PropTypes.object.isRequired,
};

export default ReportsItemAdmin;
