import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/** Renders a single row in the List Stuff (Admin) table. See pages/ListStuffAdmin.jsx. */
class ReportsItemAdmin extends React.Component {
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
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
ReportsItemAdmin.propTypes = {
  report: PropTypes.object.isRequired,
};

export default ReportsItemAdmin;
