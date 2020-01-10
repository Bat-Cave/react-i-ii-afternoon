import React, {Component} from 'react'

class Controller extends Component{
  
  render(){
    return(
      <div className='controller-container'>
        <button onClick={this.props.previous}>{'<'} Previous</button>
        <div className='black-diamond-container'>
          <button className='black-diamond'>Edit</button>
          <button className='black-diamond' onClick={this.props.delete}>Delete</button>
          <button className='black-diamond' onClick={this.props.showForm}>New</button>
        </div>
        <button onClick={this.props.next}>Next ></button>
      </div>
    )
  }
}

export default Controller