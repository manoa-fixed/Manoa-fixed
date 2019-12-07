import React from 'react';
import { Card, Image, Button, Icon, Confirm } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListReports.jsx. */
class ReportsItem extends React.Component {
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
            <Card.Header>{this.props.report.Location}</Card.Header>
            <Card.Meta>{this.props.report.tag}</Card.Meta>
            <Card.Meta>{this.props.report.email}</Card.Meta>
            <Card.Description>
              {this.props.report.description}
            </Card.Description>
            <Card.Content align='right'>
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
ReportsItem.propTypes = {
  report: PropTypes.object.isRequired,
  Reports: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(ReportsItem);
