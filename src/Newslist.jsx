import React,{useState} from "react";
import Newsitem from "./Newsitem";
import "./playlist.css"
function Newslist(props){
    const newsdata=props.news;
console.log(props);


    
    return(
        <div className="playList">
            <h1 className="heading">Election News</h1>
            <ul>
            {
                newsdata.map((item,index)=>(
                <li>
                    <Newsitem
                        index={index}
                        title={item.title}
                        img={item.img}
                        setSelectedNewsId={props.setSelectedNewsId}                    />
                </li>))  
            }
            </ul>
        </div>
    )
}
export default Newslist;