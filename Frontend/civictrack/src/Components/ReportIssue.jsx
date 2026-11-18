import './ReportIssue.css';
function ReportIssue(){
    return(
        <section className="report-section">
        <form action="">
            <div className="box">
                <label htmlFor="category">Choose a category</label>
                <div className="form-grid">
                    <button type='button'>
                    <i className="ri-bubble-chart-line"></i>
                        Pothole
                    </button>
                    <button type='button'>
                         <i className="ri-lightbulb-line"></i>
                        Streetlight
                    </button>
                    <button className='button'>
                         <i className="ri-contrast-drop-line"></i>
                        Drainage
                    </button>
                    <button className='button'>
                         <i className="ri-contrast-drop-line"></i>
                        Garbage
                    </button>
                </div>

            </div>
            <div className="box">
                <label htmlFor="location">Pinpoint the location</label>
                <h3>Add an address and coordinates for the city crew</h3>
                <label htmlFor="streetaddress">Street Address</label>
                <input type="text" placeholder="Street address" id='streetaddress' />
                <div className="form-box">
                    <label htmlFor="latitude">Latitude</label>
                    <input type="text" placeholder="Latitude" id='latitide' />
                    <label htmlFor="longitude">Longitude</label>
                     <input type="text" placeholder="Longitude" id='longitude' />
                </div>
                <button>
                    <i className="ri-focus-3-line"></i>
                    Use my current location
                </button>
            </div>
            <div className="box">
                <label htmlFor="description">Describe the issue</label>
                <textarea  cols="30" rows="10" placeholder="Example:Large pothole in the left lane,approximately 60cm wide.it becomes difficult to see after dark" id='description'></textarea>
                <h3>Photo(optional)</h3>
                <input type="file" accept='image/*'/>
            </div>
            <button type='submit'>Submit Report</button>
        </form>
    </section>
    );
    
}
export default ReportIssue;