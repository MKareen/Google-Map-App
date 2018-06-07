import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { signupUser } from '../../actions/api/auth';
import * as actions from '../../actions';

class Signup extends Component {
  onSubmit = formProps => {
    this.props.signupUser(formProps, () => {
      this.props.history.push('/feature');
    });
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)} className="form-group">
        <fieldset>
          <label>Email adress</label>
          <Field
            name="email"
            className="form-control"
            placeholder="Enter Email"
            type="text"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field
            name="password"
            className="form-control"
            placeholder="Enter password"
            type="password"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <div>{this.props.errorMessage}</div> <br />
        <button className="btn btn-primary">Sign Up!</button>
      </form>
    );
  }
}

function mapsDispatchToProps(dispatch) {
  return { signupUser: (formProps, callback) => dispatch({
    type: 'AUTH_USER_SIGNUP',
    payload: { formProps, callback }
  })
}
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default compose(
  connect(mapStateToProps, mapsDispatchToProps),
  reduxForm({ form: 'signup' })
)(Signup);
