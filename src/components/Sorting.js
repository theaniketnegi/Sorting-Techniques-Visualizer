import React from "react";
import Bars from "./Bars";

function Control(props) {
  const bubbleSort = async function () {
    // let vec = props.array;
    let vec = [...props.array];
    console.log(vec);
    console.log(props.array);
    for (let i = 0; i < vec.length - 1; i++) {
      for (let j = 0; j < vec.length - i - 1; j++) {
        if (vec[j] > vec[j + 1]) {
          let temp = vec[j];
          vec[j] = vec[j + 1];
          vec[j + 1] = temp;
        }
        setTimeout(() => {
          props.update(vec);
        }, 1000);
      }
    }
    console.log(vec);
    console.log(props.array);
  };

  const forward = () => {
    let technique = document.getElementById("techniques");

    let num = technique.selectedIndex;

    if (num === 0) {
      bubbleSort();
    }
    //    else if( num === 1 ){
    //     selectionSort();
    //    }
    //    else if( num === 2 ){
    //     insertionSort();
    //    }
  };

  return (
    <nav className="bg-dark py-3">
      <div className="container text-light">
        <label className="mx-1" htmlFor="techniques">
          Technique:{" "}
        </label>
        <select
          className="form-select form-select-sm mx-1 my-3"
          name="techniques"
          id="techniques"
          aria-label="Select Technique:"
        >
          <option value="bubble">Bubble Sort</option>
          <option value="selection">Selection Sort</option>
          <option value="insertion">Insertion Sort</option>
          <option value="merge">Merge Sort</option>
          <option value="quick">Quick Sort</option>
        </select>

        <button className="btn btn-primary mx-2" onClick={props.generate}>
          Generate Array
        </button>
        <button className="btn btn-primary mx-2" onClick={forward}>
          Sort
        </button>
      </div>
    </nav>
  );
}

export default function Sorting(props) {
  return (
    <>
      <Control
        generate={props.generate}
        array={props.array}
        update={props.update}
      />
      <div
        className="container"
        style={{ alignContent: "center", backgroundColor: "pink" }}
      >
        <Bars array={props.array} />

        {/* {console.log(props.array)} */}
      </div>
    </>
  );
}
