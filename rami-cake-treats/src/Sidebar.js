import React from "react"; 
import Time from "./Time";  // Adjust the import path as needed

const Sidebar = () => {
    const sidebarStyle = {
        width: '100px',
        height: '100px',
        backgroundColor: '#fff',
        padding: '20px',
        marginBottom: '20px',
        marginTop: '0',
        marginLeft:'8px'

        
    };
  

    return (
        <div style={sidebarStyle}>
     

           
            <Time />
            {/* Other sidebar content */}
        </div>
    );
};

export default Sidebar;
