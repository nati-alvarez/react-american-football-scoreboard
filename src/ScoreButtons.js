import React from "react";

function ScoreButtons(props){
    return (
        <div className={props.className}>
          <button className={props.className + "__touchdown"} onClick={()=> props.changeScore(props.score + 7)}>{props.side} Touchdown</button>
          <button className={props.className + "__fieldGoal"} onClick={()=> props.changeScore(props.score + 3)}>{props.side} Field Goal</button>
        </div>
    );
}

export default ScoreButtons;