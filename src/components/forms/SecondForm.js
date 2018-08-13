import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { submitSecond } from '../../store'

class SecondForm extends Component {
  state = {
    gender: '',
    age: ''
  }

  handleInput = e => {
    this.setState({
      [e.target.getAttribute('name')]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.submitSecond({
      id: this.props.current,
      formData: {
        gender: this.state.gender,
        age: this.state.age
      }
    })
    this.props.changeTab('third')
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="title">Gender</label>
            <input
              type="text"
              name="gender"
              value={this.state.gender}
              onChange={this.handleInput}
              />
          </div>
          <div>
            <label htmlFor="title">Age</label>
            <input
              type="text"
              name="age"
              value={this.state.age}
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

const mapStateToProps = state => {
  const { current } = state
  return { current }
}

const mapDispatchToProps = dispatch => {
  return {
    submitSecond: bindActionCreators(submitSecond, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SecondForm)
