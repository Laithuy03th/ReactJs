// class componet
// funtion component

import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";
  class MyComponent extends React.Component{

    state = {
        name: "Thuy",
        address: ' hoi dan it',
        age:'20'
    };
    
    handleClick=(event)=>{
        // console.log(event.target);
        console.log("My name is : ", this.state.name);
        this.setState({
            name: "trieu",
            age: Math.floor(Math.random() * 100) + 1
        });
      
   
       
        
    }
    handleOnMouseOver=(event)=>{
        console.log(event.pageX);
        
    }
    handleOnChangeInput=(event)=>{
         
         this.setState({
            name: event.target.value
         })
         
    }
    handleOnSubmit = (event)=>{
        event.preventDefault();
        console.log(this.state);
        
       
    }

    //jsx
      render(){
        return (
           <div> 
            My name is {this.state.name} and i'm  {this.state.age};
            <button onClick={(event)=>{this.handleClick(event)}}>Click me</button>
            <button onMouseOver={this.handleOnMouseOver(this)}>hover me</button>
            <form onSubmit={(event)=>{
               this.handleOnSubmit(event)
            }}>
                <input type="text"
                onChange={(event)=>{ this.handleOnChangeInput(event)

                }}
                ></input>
                <button>submit</button>
            </form>
           </div>
        );
    }
  }

  export default MyComponent;