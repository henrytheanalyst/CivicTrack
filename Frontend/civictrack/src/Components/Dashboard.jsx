import { useState } from "react";
import Sidebar from "./Sidebar.jsx";
import './Dashboard.css';
import  OverviewDashboard from './OveriewDashboard.jsx';
import ReportIssue from "./ReportIssue.jsx";
function Dashboard(){
    const [selectedPage,setSelectedPage]=useState("Overview")
    return(
        <main className="dashboard">
            <Sidebar 
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            />
           {selectedPage === "Overview" && <OverviewDashboard/>}
           {selectedPage === "Report Issue" && <ReportIssue/>}
        
        </main>
    );
}
export default Dashboard;