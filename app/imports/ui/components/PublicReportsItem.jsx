import React from 'react';
import { Card, Image, Button, Label, Popup, PopupContent } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

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
