import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { submitPreview } from '../../store'
import { withRouter } from 'react-router-dom'

class PreviewForm extends Component {

  handleSubmit = e => {
    console.log(this.props)
    e.preventDefault()
    this.props.submitPreview({
      id: this.props.current
    })
    this.props.history.push(`/`)
  }

  render () {
    const { data } = this.props
    // console.log(this.props)
    return (
      <div>
        {
          data.length > 0
            ?
              <form onSubmit={this.handleSubmit}>
                <p>Firstname: { data[0].firstForm.firstname }</p>
                <p>Lastname: { data[0].firstForm.lastname }</p>
                <p>Gender: { data[0].secondForm.gender }</p>
                <p>Age: { data[0].secondForm.age }</p>
                <p>Province: { data[0].thirdForm.province }</p>
                <p>Country: { data[0].thirdForm.country }</p>
                <div>
                  <button type="submit">submit</button>
                </div>
              </form>
            :
              <div>
                Empty
              </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { data, current  } = state
  if (current)
    return {
      data: data.filter(value => value.id === current),
      current: current
    }
  else 
    return {}
}

const mapDispatchToProps = dispatch => {
  return {
    submitPreview: bindActionCreators(submitPreview, dispatch)
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PreviewForm))