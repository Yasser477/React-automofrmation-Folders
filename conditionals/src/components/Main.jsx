import React, { Component } from 'react'

 class Main extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
          isLoggedIn: true 
      }
    }
    



  render() {


    if (this.state.isLoggedIn){

        return(
            <div>
                hello me 
            </div>
        )
    } else{

        return(
            <div> get out of here </div>
        )
    }

    // return (
    //   <div> 

    //     <div> alpha</div>
    //     <div> omega</div>


    //   </div>
      
    // )
  }
}

export default Main