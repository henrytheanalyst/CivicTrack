import './Sidebar.css'
function Sidebar(){
    return(
        <aside className="sidebar">
            <div className="iconbar">
                <i class="ri-megaphone-line"></i>
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
                    <div className="item active-item">
                        <i className="ri-dashboard-line"></i>
                        <span>Overview</span>
                    </div>

                     <div className="item">
                        <i className="ri-add-line"></i>
                        <span>Report an issue</span>
                    </div>

                     <div className="item">
                        <i className="ri-file-text-line"></i>
                        <span>My reports</span>
                    </div>

                     <div className="item">
                     <i className="ri-notification-3-line"></i>
                        <span>Notifications</span>
                    </div>

                     <div className="item">
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
             <i class="ri-logout-box-r-line"></i>
            </div>
        </aside>
    );
}
export default Sidebar;