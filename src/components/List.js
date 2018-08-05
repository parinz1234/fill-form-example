import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Link
} from 'react-router-dom'

class List extends Component {  
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
                  <td>{value.data.firstForm.firstname}</td>
                  <td>{value.data.firstForm.lastname}</td>
                  <td>{value.status}</td>
                  <td>
                    {
                      <Link to={`/form/${value.id}`}>
                        {
                          value.status !== 'finish'
                          ?
                            'Edit'
                          :
                            'View'
                        }
                      </Link>
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

const mapStateToProps = (state) => {
  const { data } = state
  return { data }
}

export default connect(mapStateToProps)(List)