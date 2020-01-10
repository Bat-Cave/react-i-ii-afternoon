import React, {Component} from 'react'

class Form extends Component{


  render(){
    return(
      <div className={this.props.class}>
        <span className='name'>Add New Person</span>
        <br></br>
        <div>
          <span className='item-new'>First Name: </span><input placeholder='Enter First Name'/>
          <span className='item-new'>Last Name: </span><input placeholder='Enter Last Name'/>
        </div>
        <div>
          <span className='item-new'>City: </span><input placeholder='Enter City'/>
          <span className='item-new'>Country: </span><input placeholder='Enter Country'/>
        </div>
        <div>
          <span className='item-new'>Employer: </span><input placeholder='Enter Employer'/>
          <span className='item-new'>Job Title: </span><input placeholder='Enter Job Title'/>
        </div>
        <div className='add-movies'>
          <span className='item-new'>Favorite Movies: </span><input placeholder='Enter Favorite Movie 1'/>
          <input placeholder='Enter Favorite Movie 2'/>
          <input placeholder='Enter Favorite Movie 3'/>
        </div>
      <button className='black-diamond'>Submit</button>  
    </div>
    )
  }
}

export default Form