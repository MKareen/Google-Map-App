import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { connect } from 'react-redux';


class Map extends Component {
  render () {
    const GoogleMapShow = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = {{ lat: this.props.lat, lng: this.props.lng }}
        defaultZoom = {10}
      >
        {props.data && props.data.length && props.data.map(event => {
          if (event.venue && event.venue.latitude) {
            return (
              <Marker key={event.id} position={{ lat: parseFloat(event.venue.latitude), lng: parseFloat(event.venue.longitude) }} />
            );
          }
        })}
      </GoogleMap>
    ));

    return (
      <div>
        <GoogleMapShow
          data={this.props.data}
          containerElement={<div style={{ height: `925px`, width: '1850px' }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default Map;

