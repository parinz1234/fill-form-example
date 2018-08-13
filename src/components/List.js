import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setCurrentForm } from '../store'

class List extends Component {  

  handleEdit  = (e, id) => {
    e.preventDefault()
    this.props.setCurrentForm({ id: id })
    this.props.history.push(`/form/${id}`)
  }

  render () {
    const { data } = this.props
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data && data.map((value, index) => 
                <tr key={value.id}>
                  <td>{index}</td>
                  <td>{value.firstForm.firstname}</td>
                  <td>{value.firstForm.lastname}</td>
                  <td>{value.status}</td>
                  <td>
                    {
                      <a
                        onClick={(e) => this.handleEdit(e, value.id)}
                        href=""
                        >
                        {
                          value.status !== 'finish'
                          ?
                            'Edit'
                          :
                            'View'
                        }
                      </a>
                    }
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { data } = state
  return { data }
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentForm: bindActionCreators(setCurrentForm, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)