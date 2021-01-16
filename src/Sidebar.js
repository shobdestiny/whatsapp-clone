import React,{useState,useEffect} from 'react';
import './Sidebar.css';
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {SearchOutlined} from "@material-ui/icons";
import SidebarChat from "./SidebarChat";
import db from "./firebase";
import { useStateValue } from "./StateProvider";
//local firebase up here

function Sidebar() {
    const [rooms,setRooms] = useState([]);
    const[{user},dispatch] = useStateValue(); 
    useEffect(() => {
        const unsubscribe = db.collection('rooms').onSnapshot((snapshot) =>
            setRooms(
                snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
             }))  
            )
        );
        //when ever you are done with the data base this step will dettach you from the db.
        return()=>{
            unsubscribe();
        }
    }, []);
    
    //adding this [] makes the function(use-effect) call once.
    
    return (
        <div className="sidebar"> 
            <div class="sidebar__header">
                <Avatar src={user?.photoURL}/>
                <div className="sidebar__headerRight">
                <IconButton>
                    <DonutLargeIcon />
                </IconButton>
                <IconButton>
                    <ChatIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
                
                </div>
            </div>
            <div className="sidebar__search">
                <div className= "sidebar__searchContainer">
                <SearchOutlined />
                <input placeholder="Search or start new chat" type="text"></input>
                </div>
                
            </div> 
            <div className="sidebar__chats">
                <SidebarChat addNewChat/>
                {rooms.map(room => (
                    <SidebarChat key={room.id} id={room.id}
                    name={room.data.name} />
                ))}
            </div>
        </div>
    )
};

export default Sidebar;
