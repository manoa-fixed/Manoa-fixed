import React from 'react';
import { Card, Image, Button, Icon, Confirm, Label, Popup, PopupContent } from 'semantic-ui-react';
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
    let color;
    switch (this.props.report.status) {
      case 'Pending':
        color = 'blue';
        break;
      case 'In-Progress...':
        color = 'yellow';
        break;
      case 'Fixed!':
        color = 'green';
        break;
      default:
        color = 'red';
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
            <b>Status: </b> <Label color={color}>{this.props.report.status}</Label><br/>
            {this.props.report.tag.map((t, index) => (<Label style = {{ margin: 5 }} key = {index}>{t}</Label>))}
            <Card.Description>
              {this.props.report.description}
            </Card.Description>
            <Card.Meta>
              <Popup
                  on='click'
                  trigger={<Button content='View Attributes' />}>
                <PopupContent>
                  <b>Location: </b> {this.props.report.location} <br/>
                  <b>Submitted: </b> {this.props.report.datePosted.toLocaleDateString()} <br/>
                  <b>Submitter: </b>{ this.props.report.owner} <br/>
                </PopupContent>
              </Popup>
            </Card.Meta>
            <Card.Content extra>
              <Link to={`/adminedit/${this.props.report._id}`}>Update Status</Link>
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
