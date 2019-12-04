import React from 'react';
import { Card, Image, Button, Icon, Confirm } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/** Renders a single row in the List Stuff (Admin) table. See pages/ListStuffAdmin.jsx. */
class ReportsItemAdmin extends React.Component {
  state = { open: false }

  show = () => this.setState({ open: true })

  removeItem = () => {
    console.log(`Deleted item: ${this.props.report._id}`);
    this.props.Reports.remove(this.props.report._id);
    this.setState({ open: false });
  }

  handleCancel = () => this.setState({ open: false })

  render() {
    const { open } = this.state;
    return (
        <Card>
          <Card.Content>
            <Image
                floated='right'
                size='large'
                src={this.props.report.image}
            />
            <Card.Header>{this.props.report.tag}</Card.Header>
            <Card.Meta>{this.props.report.location}</Card.Meta>
            <Card.Meta>{this.props.report.email}</Card.Meta>
            <Card.Meta>{this.props.report.status}</Card.Meta>
            <Card.Description>
              {this.props.report.description}
            </Card.Description>
            <Card.Content extra>
              {this.props.report.owner}
            </Card.Content>
            <Card.Content extra>
              <Link to={`/adminedit/${this.props.report._id}`}>Edit</Link>
            </Card.Content>
            <Card.Content align='right'>
              <Button icon onClick={this.show}>
                <Icon name='trash alternate outline'/>
              </Button>
              <Confirm
                  open={open}
                  onCancel={this.handleCancel}
                  onConfirm={this.removeItem}
              />
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
