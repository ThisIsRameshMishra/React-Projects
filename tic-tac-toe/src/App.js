import React, { useState,useEffect } from 'react';
import Square from "./Components/Square";
import Pattern from"./Pattern";
function App() {
  const[board,setBoard]=useState(["","","","","","","","",""]);
  const [player,setPLayer]=useState("O");
  const [result,setResult]=useState({winner: "none",state: "none"});
  useEffect(()=>{
    checkWin();
    if(player==="X"){
      setPLayer("O");
    }
    else{
      setPLayer("X");
    }

  },[board]);
  useEffect(()=>{
    if(result.state!="none"){
    alert(`Game finished! Winning player: ${result.winner}`);
    }
  },[result])
  const chooseSquare=(square)=>{
    setBoard(
      board.map((val,idx)=>{
      if(idx===square && val===""){
        return player;
      }
      return val;
    }));
  
  };
  const checkWin=()=>{
    Pattern.forEach((curpattern) => {
      const firstPlayer=board[curpattern[0]];
      if(firstPlayer=="") return "";
      let foundWinningPattern=true;
      curpattern.forEach((idx)=>{
        if(board[idx]!==firstPlayer){
          foundWinningPattern=false;
        }
      })
      if(foundWinningPattern){
        setResult({winner: player,state:"won"})
      }
    });
  }
  const checkIfTie=()=>{
    let filled=true;
    board.forEach((square)=>{
      if(square==""){
        filled=false;
      }
    })
    if(filled){
      setResult({winner:"No-one",state:"Tie"});
    }
  }
  return (
    <div className="App">
    <div className="board">
      <div className="row">
      <Square val={board[0]} chooseSquare={()=>{chooseSquare(0)}}/>
      <Square val={board[1]} chooseSquare={()=>{chooseSquare(1)}}/>
      <Square val={board[2]} chooseSquare={()=>{chooseSquare(2)}}/>
      </div>
      
      <div className="row">
      <Square val={board[3]} chooseSquare={()=>{chooseSquare(3)}}/>
      <Square val={board[4]} chooseSquare={()=>{chooseSquare(4)}}/>
      <Square val={board[5]} chooseSquare={()=>{chooseSquare(5)}}/>
      </div>
      <div className="row">
      <Square val={board[6]} chooseSquare={()=>{chooseSquare(6)}}/>
      <Square val={board[7]} chooseSquare={()=>{chooseSquare(7)}}/>
      <Square val={board[8]} chooseSquare={()=>{chooseSquare(8)}}/>
      </div>
    </div>
    </div>
  );
}

export default App;
