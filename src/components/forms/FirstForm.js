import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { submitFirst } from '../../store'

class FirstForm extends Component {
  state = {
    firstname: '',
    lastname: ''
  }

  handleInput = (e) => {
    this.setState({ [e.target.getAttribute('name')]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.submitFirst({
      firstname: this.state.firstname,
      lastname: this.state.lastname
    })
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="firstname">Firstname</label>
            <input
              type="text"
              name="firstname"
              value={this.state.firstname}
              onChange={this.handleInput}
              />
          </div>
          <div>
            <label htmlFor="lastname">Lastname</label>
            <input
              name="lastname"
              value={this.state.lastname}
              onChange={this.handleInput}
              />
          </div>
          <div>
            <button type="submit">submit</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submitFirst: bindActionCreators(submitFirst, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(FirstForm)
