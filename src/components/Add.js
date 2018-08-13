import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import {
  FirstForm,
  SecondForm,
  ThirdForm,
  PreviewForm
} from './forms'

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

const FormComponent = ({ tab, changeTab }) => {
  let renderForm
  switch (tab) {
    case 'first':
      renderForm = <FirstForm changeTab={changeTab} />
      break;
    case 'second':
      renderForm = <SecondForm changeTab={changeTab} />
      break;
    case 'third':
      renderForm = <ThirdForm changeTab={changeTab} />
      break;
    case 'preview':
      renderForm = <PreviewForm changeTab={changeTab} />
      break;
    default:
      renderForm = <FirstForm changeTab={changeTab} />
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
    console.log(this.props)
    return (
      <div>
        <TabComponent
          tab={this.state.tab}
          changeTab={this.changeTab}
          />
        <FormComponent
          tab={this.state.tab}
          changeTab={this.changeTab}
          />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { data, current } = state
  if (current)
    return {
      data: data.filter(value => value.id === current),
      current: current
    }
  else
  return {}
}

export default connect(mapStateToProps)(Add)