import React, { Component } from 'react';
import SearchBar from '../components/searchBar';
import Map from '../components/googleMap';
import requireAuth from '../components/auth/requireAuth';
import {connect} from 'react-redux';

class Feature extends Component {
  render() {
    const { events } = this.props;
    return (
      <div>
        <SearchBar /> 
        <Map lat={40.179186} lng={44.499103} data={this.props.events} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    events: state.events.all,
  };
}

export default connect(mapStateToProps, null)(requireAuth(Feature));
