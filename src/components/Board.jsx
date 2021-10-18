import React, { useState } from "react";
import "../style/Board.css";
import Cards from "./Cards";
import { MoreHorizontal } from "react-feather";
import Editable from "./Editable";
function Board(props) {

  const [Card, setCard] = useState(props.thisBoard.cards);
  const [show, setShow] = useState(false);
  const HandleDelete = (id) => {
    let NewBoards = [...props.Boards];
    props.setBoards(NewBoards.filter((item) => item.id !== id));
  };
  const handleDrop = (e) => {
    let title = e.dataTransfer.getData("title");
    let id = parseFloat(e.dataTransfer.getData("id"));
    let newCard = [...Card];
    let contain = 0;
    newCard.forEach((item) => {
      if (item.id === id) {
        contain = 1;
      }
    });
    if (contain === 0) {
      newCard.push({ id: id, title: title });
      setCard(newCard);
    }
  };
  
  return (
    <div
      className="Board"
      onClick={(e) => {
        setShow(false);
        e.stopPropagation();
      }}
    >
      <div className="Board_title">
        <h4>
          {props.thisBoard.title ? props.thisBoard.title : "Untitled"}
          <span style={{"fontSize":"medium"}}>{" "}({Card?.length || 0})</span>
        </h4>
        <MoreHorizontal
          onClick={(e) => {
            setShow(true);
            e.stopPropagation();
          }}
        />
        <div
          className={show ? "deleteBox" : "deleteBoxHide"}
          onClick={(e) => {
            e.stopPropagation();
            HandleDelete(props.thisBoard.id);
          }}
        >
          Delete
        </div>
      </div>
      <div
        className="card_board"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => handleDrop(e)}
      >
        {Card?.map((item, index) => (
          <Cards
            key={index}
            item={item}
            setCard={setCard}
            card={Card}
            thisBoard={props.thisBoard}
          />
        ))}
        <Editable
          Boards={Card}
          setBoards={setCard}
          call={"card"}
          thisBoard={props.thisBoard}
        />
      </div>
    </div>
  );
}

export default Board;
