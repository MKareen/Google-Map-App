import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEvents } from '../actions/eventBrites';
import { getEvents } from '../actions/api/event';
import Map from './googleMap';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      term: '',
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  };

  /*componentDidMount() {
    this.props.fetchEvents();
  };*/

  componentDidMount() {
    this.props.getEvents()
  }

  onInputChange (term) {
    this.setState({ term });
  };

  onFormSubmit(event) {
    event.preventDefault();
    this.props.getEvents(this.state.term);
  };


  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} className="input-group">
          <input
            placeholder="Get an event location"
            className="form-control"
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)} />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Search</button>
          </span>
        </form>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    events: state.events.all,
   };
}

function mapDispatchToProps(dispatch) {
  return {
    getEvents: term => dispatch({ 
      type: "EVENTS_FETCH_REQUESTED", 
      payload: {term}
    })
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);


