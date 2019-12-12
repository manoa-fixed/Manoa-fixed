import React from 'react';
import { Card, Image, Button, Icon, Confirm, Popup, PopupContent, Label } from 'semantic-ui-react';
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
    console.log(this.props.report);
    let color;
    switch (this.props.report.status) {
      case 'Pending':
        color = 'orange';
        break;
      case 'In-Progress...':
        color = 'blue';
        break;
      case 'Fixed!':
        color = 'green';
        break;
      default:
        color = 'gray';
    }

    return (
        <Card>
          <Card.Content>
            <Image
                floated='right'
                size='large'
                src={this.props.report.image}
            />
            <Card.Header>{this.props.report.title}</Card.Header>
            <Card.Description>{this.props.report.description}</Card.Description>
            <Card.Meta>
              <Popup
                  on='click'
                  trigger={<Button style = {{ margin: 8 }} content='View Attributes' />}>
                <PopupContent>
                      <b>Location: </b> {this.props.report.location} <br/>
                      <b>Submitted: </b> {this.props.report.datePosted.toLocaleDateString()} <br/>
                      <b>Submitter: </b>{ this.props.report.owner} <br/>
                  <b>Status: </b> <Label color={color}>{this.props.report.status}</Label>
                </PopupContent>
              </Popup>
            </Card.Meta>
            <Card.Content extra>
              <Link style = {{ marginTop: 15 }} to={`/edit/${this.props.report._id}`}>Edit</Link>
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
ReportsItem.propTypes = {
  report: PropTypes.object.isRequired,
  Reports: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(ReportsItem);
