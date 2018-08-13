import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { submitThird } from '../../store'

class ThirdForm extends Component {
  state = {
    province: '',
    country: ''
  }

  handleInput = e => {
    this.setState({
      [e.target.getAttribute('name')]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.submitThird({
      id: this.props.current,
      formData: {
        province: this.state.province,
        country: this.state.country
      }
    })
    this.props.changeTab('preview')
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="title">Province</label>
            <input
              type="text"
              name="province"
              value={this.state.province}
              onChange={this.handleInput}
              />
          </div>
          <div>
            <label htmlFor="title">Country</label>
            <input
              type="text"
              name="country"
              value={this.state.country}
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
    submitThird: bindActionCreators(submitThird, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThirdForm)
