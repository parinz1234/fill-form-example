import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'
/*
  status
    first
    second
    third
    finish
*/

const data = [
  {
    id: 1,
    data: {
      firstForm: {
        firstname: 'hello',
        lastname: 'world'
      },
      secondForm: {
        gender: 'male',
        age: 24
      },
      thirdForm: {
        province: 'Nonthaburi',
        country: 'Thailand'
      }
    },
    status: 'finish'
  }
]

class List extends Component {
  render () {
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

export default List