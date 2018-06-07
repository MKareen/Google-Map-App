import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { signinUser } from '../../actions/api/auth';
import * as actions from '../../actions';

class Signin extends Component {
  onSubmit = formProps => {
    this.props.signinUser(formProps, () => {
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
            className="form-control"
            name="email"
            placeholder="Enter email"
            type="text"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field
            className="form-control"
            name="password"
            type="password"
            placeholder="Enter password"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <div>{this.props.errorMessage}</div> <br />
        <button className="btn btn-primary">Sign In!</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { signinUser: (formProps, callback) => dispatch({
      type: 'AUTH_USER_SIGNIN',
      payload: { formProps, callback }
    })
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form: 'signin' })
)(Signin);
