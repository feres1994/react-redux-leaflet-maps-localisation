import React, { Fragment } from "react";
import RegionItem from "./regionItem";
import AddRegion from "./addLocalisation";
import { connect } from "react-redux";

class RegionContainer extends React.Component {
  state = {
    regionClicked: false,

    regionToRedirect: ""
  };
  chooseRegionToRedirect = x => {
    this.setState({
      regionClicked: true,

      regionToRedirect: x
    });
  };
  render() {
    return (
      <div className="region-container">
        <div className="add-region-content">
          <h2>
            <i class="fas fa-map-marker-alt" />
            <span> Regions</span>
          </h2>
          <AddRegion />
        </div>
        <ul>
          {this.props.regions.map(el => (
            <RegionItem
              regionItem={el.region}
              chooseRegion={this.chooseRegionToRedirect}
            />
          ))}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    regions: state.mapIcon
  };
};
export default connect(mapStateToProps)(RegionContainer);
