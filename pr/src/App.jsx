import { useReducer, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import reduce from "./reduce";

function App() {
  const [state, dispatch] = useReducer(reduce, {
    title: "",
    desc: "",
    number: "",
    category: "",

  });

  const input = useRef();
  const second = useRef();
  const third = useRef();

  let obj = {
    title: state.title,
    desc : state.desc,
    number: state.number,
  }

  console.log(obj)


  return (
    <div className="container">
      <input
        type="text"
        ref={input}
        onChange={() =>{
          dispatch({ type: "Settype", title: input.current.value })

        }
      }
      />
       <input
        type="text"
        ref={second}
        onChange={() =>{
          dispatch({ type: "Settype2", desc: second.current.value })
       
        }
      }
      />
      <input
        type="number"
        ref={third}
        onChange={() =>{
          dispatch({ type: "Settype3", number: third.current.value })

        }
      }
      />

      <select name="" id="">
        <option>Category</option>
        <option>My</option>

      </select>
    </div>
  );
}

export default App;
