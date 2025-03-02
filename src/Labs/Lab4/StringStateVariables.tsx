import  {useState} from "react"; // import useState
export default function StringStateVariables(){
    const[firstName, setFirstName] = useState("John");
    return ( // initialize
        <div>
            <h2>String State Variables</h2>
            <p>{firstName}</p> {/* Render string */}
            <input
               className="form-control"
               defaultValue={firstName} 
               onChange={(e) => setFirstName(e.target.value)} /> {/* update the state variable at each key stroke */}
               <hr />
        </div>
    )
}