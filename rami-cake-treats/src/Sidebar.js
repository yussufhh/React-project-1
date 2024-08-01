import React from "react"; 
import Time from "./Time";  // Adjust the import path as needed

const Sidebar = () => {
    const sidebarStyle = {
        width: '120px',
        height: '60px',
        backgroundColor: '#fff',
        padding: 'px',
        marginBottom: '20px',
        marginTop: '0',
        marginLeft:'8px'

        
    };
  

    return (
        <div style={sidebarStyle}>
            <h3>moon lover</h3>
            <Time />
            {/* Other sidebar content */}
        </div>
    );
};

export default Sidebar;
