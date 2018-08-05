import React, { Component } from 'react'
import styled from 'styled-components'

const TabMenu = styled.div`
  display: flex;
`

const TabMenuItem = styled.div`
  padding: 1rem 0;
  width: 100px;
  text-align: center;
  border: ${props => props.active ? '1px solid #000': '0'};
  border-bottom: 0;
`

const FormContainer = styled.div`
  width: 50%;
  border: 1px solid #000;
`

const TabComponent = ({ tab, changeTab }) => {
  return (
    <TabMenu>
      <TabMenuItem
        active={ tab === 'first' ? true : false }
        onClick={ () => changeTab('first') }
        >
          First
        </TabMenuItem>
      <TabMenuItem
        active={ tab === 'second' ? true : false }
        onClick={ () => changeTab('second') }
        >
        Second
      </TabMenuItem>
      <TabMenuItem
        active={ tab === 'third' ? true : false }
        onClick={ () => changeTab('third') }
        >
        Third
      </TabMenuItem>
      <TabMenuItem
        active={ tab === 'preview' ? true : false }
        onClick={ () => changeTab('preview') }
        >
        Preview
      </TabMenuItem>
    </TabMenu>
  )
}

const FirstForm  = () => {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="title">Description</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="title">Firstname</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="title">Lastname</label>
          <input type="text" />
        </div>
        <div>
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  )
}

const SecondForm  = () => {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="title">Gender</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="title">Age</label>
          <input type="text" />
        </div>
        <div>
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  )
}

const ThirdForm  = () => {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="title">Province</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="title">Country</label>
          <input type="text" />
        </div>
      </form>
    </div>
  )
}

const PreviewForm  = () => {
  return (
    <div>
      <div>
        <p>Title: </p>
        <p>Description: </p>
        <p>Firstname: </p>
        <p>Lastname: </p>
        <p>Gender: </p>
        <p>Age: </p>
        <p>Province: </p>
        <p>Country: </p>
      </div>
    </div>
  )
}



const FormComponent = ({ tab }) => {
  let renderForm
  switch (tab) {
    case 'first':
      renderForm = <FirstForm />
      break;
    case 'second':
      renderForm = <SecondForm />
      break;
    case 'third':
      renderForm = <ThirdForm />
      break;
    case 'preview':
      renderForm = <PreviewForm />
      break;
    default:
      renderForm = <FirstForm />
  }
  return (
    <FormContainer>
      { renderForm }
    </FormContainer>
  )
}

class Add extends Component {
  state = {
    tab: 'first'
  }
  changeTab = tab => {
    this.setState({
      tab: tab
    })
  }
  render () {
    return (
      <div>
        <TabComponent
          tab={this.state.tab}
          changeTab={this.changeTab}
          />
        <FormComponent
          tab={this.state.tab}
          />
      </div>
    )
  }
}

export default Add