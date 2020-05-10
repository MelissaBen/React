import React ,  {Component} from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

   this.state = {
    result : 0 ,
    numbers :[0,1,2,3,4,5,6,7,8,9 ]  ,
    operators : ["+" , "-" , "*" ,"/"  ,'Calculer' , 'Effacer'],
    /*modulo : ["%"],*/
    equation : " "
  }

  }
  buttonNumberClick = (number) => {
    //console.log(number)

    this.setState({
      equation:this.state.equation + number
    })

 }


  buttonOperatorClick = (operator) => {

  this.setState({
    equation:this.state.equation + operator
       })
    //console.log(operators)

    if(operator == "Calculer"){
      //console.log("c'est ok")
    this.setState({
       equation :this.state.equation , 
       result:eval(this.state.equation) ,
       })
     
    } 
    else if (operator == 'Effacer') {
      this.setState({ 
        equation : " ",
        result : 0 })
    }
 
    else {
      this.setState({
        equation:this.state.equation + operator})
    }

  }


  ModuloClick = (n) => {
    this.setState ( {
      //result : mod(this.state.equation) ,
      result: (( this.state.equation % n))  ,
      equation : " " ,
      
  })
  /*let m = (( this.state.equation % n) + n) % n;
  return m < 0 ? m + Math.abs(n) : m;*/

 }

  render(){
    return (
      <div className="App">
        <h1> Calculatrice</h1>

        <div>
        {this.state.numbers.map((number, index)=> {
          return (
            <button className="number" onClick={()=>this.buttonNumberClick(number)} key = {index}>{number}</button>
          )

        })}
        </div>

        <div>
        {this.state.operators.map((operator ,index)=> {
          return (
            <button  className="operator" onClick={()=>this.buttonOperatorClick(operator)} key = {index} > {operator} </button>
          )
        })}
        </div>


      <>
        <ul> L'équation  : {this.state.equation } </ul>
        <ul> Résultat : {this.state.result} </ul>
      </>
    
      

      </div>

    )
  }
} 
 

export default App;




