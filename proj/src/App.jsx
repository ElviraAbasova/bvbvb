import { useState, useReducer } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import reducer from "./reducer/reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, {
    input: "",
    array: [],
  });


  const handleSubmit = (e)=>{
    e.preventDefault()
    dispatch({
      type: "SetArray",
      array: state.input,
    })

  
  }
  const deleteItem = (id) =>{
    dispatch(
      {
        type: "SetFilter",
        id
      }
    )

  }
  const editItem = (id)=>{

    dispatch(
      {
        type: "SetEdit",
        id,
      }
    )
  }
  return (
    <div>
      <form onSubmit={(e)=> handleSubmit(e) }>
        <input
          type="text"
          value={state.input}
          onChange={(e) =>
            dispatch({
              type: "SetInput",
              input: e.target.value,
            })
          }
        />
        <button
          type="submit"
        >
          Submit
        </button>
      </form>
      <ul>
        {state.array.map((elem) => {
          return <li key={elem.id}> <span>{elem.name}</span> <button className="del" onClick={()=> deleteItem(elem.id) }>Delete</button> <button className="edit" onClick={()=> editItem(elem.id)} >Edit</button></li>;
        })}
      </ul>
    </div>
  );
}


export default App;
