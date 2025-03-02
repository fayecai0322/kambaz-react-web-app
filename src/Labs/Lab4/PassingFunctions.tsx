export default function PassingFunctions(
    {theFunction} : {theFunction: () => void}){ // function passed in as a parameter
        return (
            <div>
            <h2>Passing Function </h2>
            <button onClick = {theFunction} className ="btn btn-primary">  
              Invoke the Function
            </button>
            </div>
        );
    }
//This component takes a function (theFunction) as a prop and attaches it to a button’s onClick event.
//When the button is clicked, the passed-in function is executed.