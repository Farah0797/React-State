import React, {Component} from "react";
import Person from "./Components/Person";


class App extends Component {
   state={
      show:false,
   }
   handleShow=()=>{
     this.setState({show:!this.state.show})
   }
  render() {
    return(
      <div className="App">
        <button onClick={this.handleShow}>Show</button>
        {
          this.state.show?<Person/>:"Hello"
        }
        
      </div>
    )
  }
}j//export default class App extends Component {
 // state = {
   // persons: [
    //  { person: "Fullname", },
     // { person: "Bio", },
     // { person: ""}
   // ]
  //}
//}
export default App;