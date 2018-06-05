import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEvents } from '../actions/eventBrites';
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

  componentDidMount() {
    this.props.fetchEvents();
  };

  onInputChange (term) {
    this.setState({ term });
  };

  async onFormSubmit(event) {
    event.preventDefault();
    await this.props.fetchEvents(this.state.term);
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

export default connect(mapStateToProps, {fetchEvents})(SearchBar);

