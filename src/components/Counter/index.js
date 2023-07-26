
import './index.css'

import { Component } from 'react'
 
class Count extends Component{
    state={count:0}

    onDecrement =()=>{
        this.setState((prevState)=>({
            count:prevState.count-1
        }))
    }

    onIncrement =()=>{
        this.setState((prevState)=>({
            count:prevState.count+1
        }))
    }


    render(){
        const {count}=this.state
        return(
            <div>
            <h1>Counter</h1>
            <p>{count}</p>
            <div>
                <button onClick={this.onDecrement}>Decrement</button>
                <button onClick={this.onIncrement}>Increment</button>
            </div>
        </div>
        )
        
    }
}

export default Count

