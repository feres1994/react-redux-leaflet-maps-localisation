import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
class RegionDataModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      lat: 0,
      lng: 0,
      region: ""
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  change = e => {
    this.setState({
      [e.target.name]: parseFloat(e.target.value)
    });
  };
  changeRegion = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { lat, lng, region } = this.state;
    return (
      <div>
        <button className="btn btn-primary" onClick={this.toggle}>
          + Add region
        </button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <label>Region name</label>{" "}
            <input
              className="form-control"
              name="region"
              onChange={this.changeRegion}
            />
            <label>latitude</label>{" "}
            <input
              className="form-control"
              name="lat"
              onChange={this.change}
              type="number"
            />
            <label>langtitude</label>{" "}
            <input
              className="form-control"
              name="lng"
              onChange={this.change}
              type="number"
            />
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => {
                this.props.addRegion({
                  region,

                  lat: parseFloat(lat),
                  lng: parseFloat(lng)
                });
                this.toggle();
              }}
            >
              ADD
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addRegion: regionData =>
      dispatch({ type: "ADD_REGION_LOCALISATION", payload: regionData })
  };
};
export default connect(
  null,
  mapDispatchToProps
)(RegionDataModal);
