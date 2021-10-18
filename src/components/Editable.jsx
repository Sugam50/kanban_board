import React from "react";
import "../style/Editable.css";
import { useState } from "react";
import { X } from "react-feather";

function Editable({ Boards, setBoards,call }) {
  const [Show, setShow] = useState(false);
  const [InputVal, setInputVal] = useState("");
  return (
    <div className="Editable_main" onClick={() => setShow(true)}>
      {Show ? (
        <div className="Add_box">
          <X
            onClick={(e) => {
              setShow(false);
              e.stopPropagation();
            }}
          />
          <input
            type="text"
            placeholder="Add name"
            onChange={(e) => setInputVal(e.target.value)}
          />
          <button
            onClick={(e) => {
              setShow(false);
              e.stopPropagation();
              setInputVal("");
              if (call === "board") {
                let tempBoard = [...Boards];
                tempBoard.push({id:Date.now()*Math.random(), title: InputVal,cards:[]});
                setBoards(tempBoard);
              } else {
                let tempBoard = [...Boards];
                tempBoard.push({ id:Date.now()*Math.random()*2,title: InputVal });
                setBoards(tempBoard);
              }
            }}
          >
            Add
          </button>
        </div>
      ) : (
        <p className="Editable"> Add more</p>
      )}
    </div>
  );
}

export default Editable;
