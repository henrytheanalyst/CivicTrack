import Sidebar from "./Sidebar.jsx";
import './Dashboard.css';
import  OverviewDashboard from './OveriewDashboard.jsx'
function Dashboard(){
    return(
        <main className="dashboard">
            <Sidebar/>
            <OverviewDashboard/>
        
        </main>
    );
}
export default Dashboard;