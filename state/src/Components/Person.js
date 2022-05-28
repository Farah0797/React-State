import React, { Component} from "react";

export const picture = "pic.jpg";

class Person extends Component {

    
        state = {
    
            timer:0,
            intervall:null

         
        };
 
   componentDidMount(){
      this.setState(
          {
              intervall:setInterval(()=>{
                  this.setState({timer:this.state.timer +1 })
              },1000)
          }
      )
   }
   
  componentWillUnmount()
  {
      clearInterval(this.state.intervall)
  }
    

    render() {

          return(
          <div>
                 <center>
                  <img src={picture}  alt="" style={{width:'400px',height:'400px'}}/>
                  <h1>Farah Ben Othman</h1>
                  <h2>Look deep into nature and then you will understand everything better</h2>
                  <h3>Web Developer</h3> 
                  {this.state.timer}
                  </center>
               
              
                </div>
          )
      
    }
};

export default Person;