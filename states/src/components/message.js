import React,{ Component } from 'react'

class Welcome extends Component {

    constructor (){
        super()
        this.state = {

            message : 'ALPHA'
        }
    }

    changeMessage(){
        this.setState({
            message : 'OMEGA'
        })
    }


    render(){
        return(
            <div> 
                
            <h1>{this.state.message}</h1>
            <button onClick={() => this.changeMessage()}>click</button>
            
            </div>
        )

    }
}


export default Welcome