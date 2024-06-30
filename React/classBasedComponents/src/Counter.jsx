import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state ={
        count : 0,
    }
    console.log(" Constructor is called ")
  }

  componentDidMount(){ // UseEffect , []
    console.log(" component did mount is called ")

  }

  componentDidUpdate(){ // useEffect, ___(No array )
    console.log(" component did Update  is called ")
  }

  render() {
    console.log("render  is called ")
    return (
      <>
        <button onClick={()=> {
            this.setState({
                count : this.state.count+1 
            })
        }}> Increment </button>
       <span> {this.state.count} </span>
      
        <button onClick={()=>{
            this.setState({
                count : this.state.count -1 
            })
        }}> Decrement </button>
      </>
    );
  }
}

export default Counter;
