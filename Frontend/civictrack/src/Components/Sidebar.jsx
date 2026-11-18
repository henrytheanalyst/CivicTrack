import './Sidebar.css'
function Sidebar({selectedPage,setSelectedPage}){
    
    return(
        <aside className="sidebar">
            <div className="iconbar">
                <i className="ri-megaphone-line"></i>
                <div className="logo-name">
                    <h2>CivicTrack</h2>
                    <p className="logo-subtitle">
                        Better cities ,together
                    </p>
                </div>
            </div>
            <nav className='sidebar-navs'>
                <h3>Workspace</h3>
                <div className="navs-btns">
                    <div 
                    className={`item ${selectedPage === "Overview" ? "active-item":""}`}
                    onClick={()=>setSelectedPage("Overview")}>
                        <i className="ri-dashboard-line"></i>
                        <span>Overview</span>
                    </div>

                     <div 
                     className={`item ${selectedPage === "Report Issue" ? "active-item":""}`}
                     onClick={()=>setSelectedPage("Report Issue")}>
                        <i className="ri-add-line"></i>
                        <span>Report an issue</span>
                    </div>

                     <div className={`item ${selectedPage === "My Reports" ? "active-item":""}`}
                     onClick={()=>setSelectedPage("My Reports")}>
                        <i className="ri-file-text-line"></i>
                        <span>My reports</span>
                    </div>

                     <div className={`item ${selectedPage === "Notifications" ? "active-item":""}`}
                     onClick={()=>setSelectedPage("Notifications")}>
                     <i className="ri-notification-3-line"></i>
                        <span>Notifications</span>
                    </div>

                     <div className={`item ${selectedPage === "My Profile" ? "active-item":""}`}
                     onClick={()=>setSelectedPage("My Profile")}>
                        <i className="ri-user-line"></i>
                        <span>My profile</span>
                    </div>

                    
                  
                </div>
            </nav>
            <div className="sidebar-bottom">
             <div className="name-bottom">
                  <h2> Alex Morgan</h2>
                 <p>Citizen reporter</p>
             </div>
             <i className="ri-logout-box-r-line"></i>
            </div>
        </aside>
    );
}
export default Sidebar;