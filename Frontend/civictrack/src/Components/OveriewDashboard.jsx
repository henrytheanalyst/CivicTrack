import './OverviewDashboard.css';
function OverviewDashboard(){
    return(
        <section className="overview-page">
            <div className="overview-info">
                <div className="info">
                    <h1>{new Date().toDateString()}</h1>
                    <h2>
                        {new Date().getHours() < 12 
                        ? "Good Morning":new Date().getHours() >=17 ? "Good Evening":"Good Afternoon"} ,Alex
                    </h2>
                    <p>
                        Here's what's happening with the issues you care about
                    </p>
                </div>
                <button type="submit">
                    <i className="ri-add-line"></i> Report an issue
                </button>
            </div>
            <div className="overview-card">
                <div className="card">
                     <i className="ri-file-text-line"></i>
                     <div className="card-info">
                        <h3>My Reports</h3>
                        <h2>12</h2>
                        <h3>3 active now</h3>
                     </div>
                </div>

                <div className="card">
                   <i class="ri-time-line"></i>
                     <div className="card-info">
                        <h3>In Progress</h3>
                        <h2>3</h2>
                        <h3>City teams assigned</h3>
                     </div>
                </div>

                <div className="card">
                   <i class="ri-check-line"></i>
                     <div className="card-info">
                        <h3>Resolved</h3>
                        <h2>8</h2>
                        <h3>+2 this month</h3>
                     </div>
                </div>
            </div>
            <div className="card-report">
                <table>
                    <thead>
                     <tr>
                        <th>Issue</th>
                        <th>Location</th>
                        <th>Date reported</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="table-data">
                                <div className="symbol">
                                    <i class="ri-bubble-chart-line"></i>
                                </div>
                                <h2>Pothole</h2>
                            </td>
                            <td>
                                <div className="map">
                                    <div className="map-icon">
                                        <i class="ri-map-pin-line"></i>
                                    </div>
                                    <h2>Market Street,Block 4</h2>
                                </div>
                            </td>
                            <td>
                                November 12 2026
                            </td>
                            <td className="report-status">
                                In progress
                            </td>
                        </tr>

                        <tr>
                            <td className="table-data">
                                <div className="symbol">
                                    <i class="ri-lightbulb-line"></i>
                                </div>
                                <h2>Pothole</h2>
                            </td>
                            <td>
                                <div className="map">
                                    <div className="map-icon">
                                        <i class="ri-map-pin-line"></i>
                                    </div>
                                    <h2>Market Street,Block 4</h2>
                                </div>
                            </td>
                            <td>
                                November 12 2026
                            </td>
                            <td className="report-status">
                                In progress
                            </td>
                        </tr>

                        <tr>
                            <td className="table-data">
                                <div className="symbol">
                                    <i class="ri-delete-bin-5-line"></i>
                                </div>
                                <h2>Garbage</h2>
                            </td>
                            <td>
                                <div className="map">
                                    <div className="map-icon">
                                        <i class="ri-map-pin-line"></i>
                                    </div>
                                    <h2>Market Street,Block 4</h2>
                                </div>
                            </td>
                            <td>
                                November 12 2026
                            </td>
                            <td className="report-status">
                                In progress
                            </td>
                        </tr>

                        <tr>
                            <td className="table-data">
                                <div className="symbol">
                                <i class="ri-contrast-drop-line"></i>
                                </div>
                                <h2>Drainage</h2>
                            </td>
                            <td>
                                <div className="map">
                                    <div className="map-icon">
                                        <i class="ri-map-pin-line"></i>
                                    </div>
                                    <h2>Market Street,Block 4</h2>
                                </div>
                            </td>
                            <td>
                                November 12 2026
                            </td>
                            <td className="report-status">
                                In progress
                            </td>
                        </tr>

                      
                    </tbody>
                  

                </table>
            </div>
        </section>
    );
}
export default OverviewDashboard;