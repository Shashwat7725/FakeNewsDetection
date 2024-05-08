import React from "react";
import "./playListSong.css"
function Newsitem(props){
    
      const handleClick = (newsId)=>{
        props.setSelectedNewsId(newsId)
    }
    return(
        <div className="playListSong " onClick={()=>handleClick(props.index)}>
            <img className="nimg" src={props.img}/>
            <h1 className="title">{props.title}</h1>
        </div>
    )
}
export default Newsitem;