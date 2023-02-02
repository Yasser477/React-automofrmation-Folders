import React, { Component } from 'react'

 class Main extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
          isLoggedIn: false 
      }
    }




  render() {

     let Message 
    if (this.state.isLoggedIn){

        Message = <div>alpha</div> 
       
    } else{

       
        Message =  <div> get out of here </div>
      
    }

    return <div>{Message}</div>







    //return as a div
    


    // return (
    //   <div> 

    //     <div> alpha</div>
    //     <div> omega</div>


    //   </div>
      
    // )
  }
}

export default Main