import React from 'react';
import { Grid, Loader, Header, Segment, Button, Image } from 'semantic-ui-react';
import { Reports, ReportsSchema } from '/imports/api/report/Reports';
import swal from 'sweetalert';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import SubmitField from 'uniforms-semantic/SubmitField';
import HiddenField from 'uniforms-semantic/HiddenField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import LongTextField from 'uniforms-semantic/LongTextField'; // required for Uniforms
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import 'uniforms-bridge-simple-schema-2';
import { openCloudinaryWidget } from '../components/open-cloudinary-widget';
import MultiSelect from '../components/MultiSelect';

/** Renders the Page for editing a single document. */
class EditReport extends React.Component {
  constructor(props) {
    super(props);
    this.state = { picture: '' };
  }

  /** On successful submit, insert the data. */
  submit(data) {
    const { location, tag, description, _id } = data;
    const image = this.state.picture;
    Reports.update(_id, { $set: { location, image, tag, description } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Item updated successfully', 'success')));
  }

  getUrl = (value) => {
    this.setState({ picture: value });
    console.log(value);
  }

  handleFormChange = (e, { value }) => {
    console.log(e, value);
    this.setState({ picture: value });
  }

  handleUploadPicture = async (e) => {
    e.preventDefault();
    const cloudinaryResult = await openCloudinaryWidget(this.getUrl);
    console.log(cloudinaryResult);
  }

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  renderPage() {
    const { picture } = this.state;
    console.log(picture);
    const imageStyle = {
      maxHeight: 90,
      maxWidth: 150,
      paddingTop: 15,
    };
    return (
        <Grid container centered>
          <Grid.Column>
            <Header as="h2" textAlign="center" inverted>Edit Report</Header>
            <AutoForm schema={ReportsSchema} onSubmit={data => this.submit(data)}
                      model={this.props.doc}>
              <Segment>
                <TextField name='location'/>
                <MultiSelect name='tag'/>
                <React.Fragment>
                  <Grid.Column width={2}><b>Image</b></Grid.Column>
                  <Grid.Column width={2}>
                    <Image src={picture} style={imageStyle} floated="left"/>
                    <Button basic={true} color="green" onClick={this.handleUploadPicture}>Upload</Button>
                  </Grid.Column>
                </React.Fragment>
                <LongTextField name='description'/>
                <SubmitField value='Submit'/>
                <ErrorsField/>
                <HiddenField name='status' />
                <HiddenField name='owner' />
              </Segment>
            </AutoForm>
          </Grid.Column>
        </Grid>
    );
  }
}

/** Require the presence of a Stuff document in the props object. Uniforms adds 'model' to the props, which we use. */
EditReport.propTypes = {
  doc: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(({ match }) => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const documentId = match.params._id;
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Report');
  return {
    doc: Reports.findOne(documentId),
    ready: subscription.ready(),
  };
})(EditReport);
