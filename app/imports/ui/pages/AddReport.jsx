import React from 'react';
import { Grid, Segment, Header, Button, Image, Form } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import SelectField from 'uniforms-semantic/SelectField';
import LongTextField from 'uniforms-semantic/LongTextField';
import SubmitField from 'uniforms-semantic/SubmitField';
import HiddenField from 'uniforms-semantic/HiddenField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import { openCloudinaryWidget } from '../components/open-cloudinary-widget';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import SimpleSchema from 'simpl-schema';
import { Reports } from '/imports/api/report/Reports';


/** Renders the Page for adding a document. */
class AddReport extends React.Component {

  constructor(props) {
    super(props);
    this.state = { picture: '' };
  }

  /** On submit, insert the data. */
  submit(data, formRef) {
    const { location, datePosted, tag, description, status } = data;
    const image = this.state.picture;
    const owner = Meteor.user().username;
    console.log(data);
    Reports.insert({ location, datePosted, image, tag, description, owner, status },
        (error) => {
          if (error) {
            swal('Error', error.message, 'error');
          } else {
            swal('Success', 'Item added successfully', 'success');
            formRef.reset();
            Meteor.call(
                'sendEmail',
                'Yuuma <yuma2@hawaii.edu>',
                'bob@example.com',
                'Hello from Meteor!',
                'This is a test of Email.send.',
                (err, result) => { console.log(err, result); },
            );
          }
        });
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

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    let fRef = null;

    const { picture } = this.state;
    console.log(picture);

    /** Create a schema to specify the structure of the data to appear in the form. */
   const formSchema = new SimpleSchema({
      location: String,
      datePosted: { type: Date, defaultValue: new Date() },
      tag: {
        type: String,
        allowedValues: ['Vandalism', 'Water Damage', 'Structural', 'Natural/Plants',
          'Electrical', 'Lost & Found', 'Miscellaneous'],
        defaultValue: 'Structural',
      },
      description: {
        type: String,
        defaultValue: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
            'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown ' +
            'printer took a galley of type and scrambled it to make a type specimen book. It has survived not ' +
            'only five centuries, but also the leap into electronic typesetting, ' +
            'remaining essentially unchanged. It was popularised in the 1960s with ' +
            'the release of Letraset sheets containing Lorem Ipsum passages, and more recently with ' +
            'desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ' +
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece' +
            ' of classical Latin literature from 45 BC, making it over 2000 years old. ' +
            'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, ' +
            'looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, ' +
            'and going through the cites of the word in classical literature, discovered the undoubtable ' +
            'source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et ' +
            'Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book ' +
            'is a treatise on the theory of ethics, very popular during the Renaissance. ' +
            'The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
      },
      image: {
        type: String,
        defaultValue: picture,
      },
      status: {
        type: String,
        allowedValues: ['Pending', 'In-Progress...', 'Fixed!'],
        defaultValue: 'Pending',
      },
    });

    const imageStyle = {
      maxHeight: 90,
      maxWidth: 150,
      paddingTop: 15,
    };

    return (

        <Grid container centered>
          <Grid.Column>
            <Header as="h2" textAlign="center" inverted>Add Report</Header>
            <AutoForm ref={ref => { fRef = ref; }} schema={formSchema} onSubmit={data => this.submit(data, fRef)} >
              <Segment>
                <Form.Group widths={'equal'}>
                <TextField name='location'/>
                <SelectField name='tag'/>
                <HiddenField name='status'/>
                </Form.Group>
                <Form.Group widths={'equal'}>
                <React.Fragment>
                  <Grid.Column width={2}><b>Image</b>&nbsp;<b className="redText">*</b></Grid.Column>
                  <Grid.Column width={2}>
                    <Image src={picture} style={imageStyle} floated="left"/>
                    <Button basic={true} color="green" onClick={this.handleUploadPicture}>Upload</Button>
                  </Grid.Column>
                </React.Fragment>
                  <LongTextField name='description'/>
                </Form.Group>
                <SubmitField value='Submit'/>
                <ErrorsField/>
              </Segment>
            </AutoForm>
          </Grid.Column>
        </Grid>
    );
  }
}

export default AddReport;
