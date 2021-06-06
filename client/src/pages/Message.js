import React from 'react';
import Navbar from '../components/reusable/Navbar';
import SidebarMessages from '../components/sidebarMessages/SidebarMessages';
import '../styles/message/message.css';
function Message() {
   return (
      <div style={{ color: 'white' }}>
         <Navbar />
         <div className="container-wrap container__2 ">
            <SidebarMessages />
            <div className="no-message-selected">
               <h1>No Message</h1>
            </div>
         </div>
      </div>
   );
}

export default Message;
