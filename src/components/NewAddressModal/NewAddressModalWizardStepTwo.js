import React, {
  Component
  // useState
} from 'react';
import { array, func, shape, object } from 'prop-types';
import {
  Col,
  Row,
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';
import * as actions from 'actions';
// these are messy - sit down with them a bit
import {
  initialRestaurantName,
  initialStreetAddress,
  initialCity,
  initialRegion,
  initialPlz
} from './helpers/gmapsFormatters';

/* not using hooks here because of a console warning, suggesting hooks aren't ready for this kind of form implementation */
/* Warning: A component is changing an uncontrolled input of type text to be controlled. Input elements should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://fb.me/react-controlled-components */
class NewAddressModalWizardStepTwo extends Component {
  state = {
    restaurantName: '',
    restaurantStreetAddress: '',
    city: '',
    region: '',
    plz: ''
  };

  componentDidMount() {
    const { customPlace } = this.props;
    this.setState({
      restaurantName: initialRestaurantName(customPlace) || '',
      restaurantStreetAddress: initialStreetAddress(customPlace) || '',
      city: initialCity(customPlace) || '',
      region: initialRegion(customPlace) || '',
      plz: initialPlz(customPlace) || ''
    });
  }

  handleCloseModal = e => {
    e.preventDefault();
    this.props.closeModal();
  };

  formIsValid = () => {
    return Object.values(this.state).every(val => val.length);
  };

  handleSaveAddress = e => {
    e.preventDefault();
    const {
      addCustomFavorite,
      handleMapInstance,
      closeModal,
      customPlace,
      currentMapInfo,
      places
    } = this.props;
    const { map, maps } = currentMapInfo;
    if (this.formIsValid()) {
      const newPlace = {
        ...this.state,
        ...customPlace,
        customFavorite: true
      };
      addCustomFavorite(newPlace);
      handleMapInstance(map, maps, [...places, newPlace]);
      closeModal();
    }
  };

  render() {
    const {
      restaurantName,
      restaurantStreetAddress,
      city,
      region,
      plz
    } = this.state;

    return (
      <Form>
        <Row form>
          <Col md={12}>
            <FormGroup>
              <Label for="restaurantName">Restaurant Name</Label>
              <Input
                type="text"
                name="restaurantName"
                id="restaurantName"
                value={restaurantName}
                onChange={e =>
                  this.setState({ restaurantName: e.target.value })
                }
                placeholder="Restaurant Name"
                invalid={!restaurantName.length}
              />
              <FormFeedback tooltip>Must be filled in</FormFeedback>
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="restaurantAddress">Address</Label>
          <Input
            type="text"
            name="restaurantAddress"
            id="restaurantAddress"
            value={restaurantStreetAddress}
            onChange={e =>
              this.setState({ restaurantStreetAddress: e.target.value })
            }
            placeholder="Restaurant Street Address"
            invalid={!restaurantStreetAddress.length}
          />
          <FormFeedback tooltip>Must be filled in</FormFeedback>
        </FormGroup>
        <Row form>
          <Col md={2}>
            <FormGroup>
              <Label for="exampleZip">PLZ</Label>
              <Input
                type="text"
                name="plz"
                id="plz"
                value={plz}
                onChange={e => this.setState({ plz: e.target.value })}
                invalid={!plz.length}
              />
              <FormFeedback tooltip>Must be filled in</FormFeedback>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="city">City</Label>
              <Input
                type="text"
                name="city"
                id="city"
                onChange={e => this.setState({ city: e.target.value })}
                value={city}
                placeholder="City"
                invalid={!city.length}
              />
              <FormFeedback tooltip>Must be filled in</FormFeedback>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="region">Region</Label>
              <Input
                type="text"
                name="region"
                id="region"
                onChange={e => this.setState({ region: e.target.value })}
                value={region}
                placeholder="Region"
                invalid={!region.length}
              />
              <FormFeedback tooltip>Must be filled in</FormFeedback>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <Button
              color="danger"
              className="flex-grow-1"
              onClick={this.handleCloseModal}
            >
              Cancel
            </Button>
          </Col>
          <Col className="d-flex justify-content-center">
            <Button
              color="success"
              className="flex-grow-1"
              onClick={this.handleSaveAddress}
            >
              Save Address
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

NewAddressModalWizardStepTwo.propTypes = {
  // modalStepIndex: number,
  places: array,
  closeModal: func,
  handleMapInstance: func,
  currentMapInfo: shape({
    map: object,
    maps: object
  }),
  // goToNextModalStep: func,
  customPlace: object
};

export default connect(
  null,
  actions
)(NewAddressModalWizardStepTwo);

/* this works, but there is a console warning */

// const NewAddressModalWizardStepTwo = ({ customPlace }) => {
//   const [restaurantName, setRestaurantName] = useState(
//     initialRestaurantName(customPlace)
//   );
//   const [restaurantStreetAddress, setRestaurantStreetAddress] = useState(
//     initialStreetAddress(customPlace) || ''
//   );
//   const [city, setCity] = useState(initialCity(customPlace) || '');
//   const [region, setRegion] = useState(initialRegion(customPlace) || '');
//   const [plz, setPlz] = useState(initialPlz(customPlace) || '');

//   return (
//     <Form>
//       <Row form>
//         <Col md={12}>
//           <FormGroup>
//             <Label for="restaurantName">Restaurant Name</Label>
//             <Input
//               type="text"
//               name="restaurantName"
//               id="restaurantName"
//               value={restaurantName}
//               onChange={e => setRestaurantName(e.target.value)}
//               placeholder="Restaurant Name"
//             />
//           </FormGroup>
//         </Col>
//       </Row>
//       <FormGroup>
//         <Label for="restaurantAddress">Address</Label>
//         <Input
//           type="text"
//           name="restaurantAddress"
//           id="restaurantAddress"
//           value={restaurantStreetAddress}
//           onChange={e => setRestaurantStreetAddress(e.target.value)}
//           placeholder="Restaurant Street Address"
//         />
//       </FormGroup>
//       <Row form>
//         <Col md={2}>
//           <FormGroup>
//             <Label for="exampleZip">PLZ</Label>
//             <Input
//               type="text"
//               name="plz"
//               id="plz"
//               onChange={e => setPlz(e.target.value)}
//               value={plz || ''}
//             />
//           </FormGroup>
//         </Col>
//         <Col md={6}>
//           <FormGroup>
//             <Label for="city">City</Label>
//             <Input
//               type="text"
//               name="city"
//               id="city"
//               onChange={e => setCity(e.target.value)}
//               value={city || ''}
//               placeholder="City"
//             />
//           </FormGroup>
//         </Col>
//         <Col md={4}>
//           <FormGroup>
//             <Label for="region">Region</Label>
//             <Input
//               type="text"
//               name="region"
//               id="region"
//               onChange={e => setRegion(e.target.value)}
//               value={region || ''}
//               placeholder="Region"
//             />
//           </FormGroup>
//         </Col>
//       </Row>
//       <Button>Sign in</Button>
//     </Form>
//   );
// };
