import { useState } from 'react';
import './ReportIssue.css';
function ReportIssue(){
    const [selectedCategory,setSelectedCategory]=useState("");
    const [streetAddress,setStreetAddress]=useState("");
    const [latitude,setLatitude]=useState("");
    const [longitude,setLongitude]=useState("");
    const [description,setDescription]=useState("");
    const [photo,setPhoto]=useState(null);
    return(
        <section className="report-section">
            <div className="report-header">
                <h1>Report an issue</h1>
                <p>
                    Help us make your community better by reporting an issue.
                </p>
            </div>
        <form action="">
            <div className="box">
                <label htmlFor="category">Choose a category</label>
                <div className="form-grid">
                    <button type='button' onClick={()=>setSelectedCategory("Pothole")} className={selectedCategory === "Pothole" ?"selected-category":""}>
                    <i className="ri-bubble-chart-line"></i>
                        Pothole
                    </button>
                    <button type='button' onClick={()=>setSelectedCategory("Streetlight")} className={selectedCategory === "Streetlight" ?"selected-category":""}>
                         <i className="ri-lightbulb-line"></i>
                        Streetlight
                    </button>
                    <button type='button' onClick={()=>setSelectedCategory("Drainage")} className={selectedCategory === "Drainage" ?"selected-category":""}>
                         <i className="ri-contrast-drop-line"></i>
                        Drainage
                    </button>
                    <button type='button' onClick={()=>setSelectedCategory("Garbage")} className={selectedCategory === "Garbage" ?"selected-category":""}>
                         <i className="ri-contrast-drop-line"></i>
                        Garbage
                    </button>
                </div>

            </div>
            <div className="box">
                <label htmlFor="location">Pinpoint the location</label>
                <h3>Add an address and coordinates for the city crew</h3>
                <label htmlFor="streetaddress">Street Address</label>
                <input 
                    type="text" 
                    placeholder="Street address" 
                    id='streetaddress' 
                    value={streetAddress}
                    onChange={(e)=>setStreetAddress(e.target.value)}
                />
                <div className="form-box">
                    <div>
                        <label htmlFor="latitude">Latitude</label>
                        <input 
                            type="text" 
                            placeholder="Latitude" 
                            id='latitide' 
                            value={latitude}
                            onChange={(e)=>setLatitude(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="longitude">Longitude</label>
                        <input 
                            type="text" 
                            placeholder="Longitude" 
                            id='longitude' 
                            value={longitude}
                            onChange={(e)=>setLongitude(e.target.value)}
                        />  
                    </div>
                   
                </div>
                <button type='button'>
                    <i className="ri-focus-3-line"></i>
                    Use my current location
                </button>
            </div>
            <div className="box">
                <label htmlFor="description">Describe the issue</label>
                <textarea  
                    cols="30"
                     rows="10"
                      placeholder="Example:Large pothole in the left lane,approximately 60cm wide.it becomes difficult to see after dark" id='description'
                      value={description}
                      onChange={(e)=>setDescription(e.target.value)}></textarea>
                <h3>Photo(optional)</h3>
                <input 
                    type="file" 
                    accept='image/*'
                     id='photo'
                     onChange={(e)=>setPhoto(e.target.files[0])}/>
                {photo && <p>photo.name</p>}
            </div>
            <button type='submit'>Submit Report</button>
        </form>
    </section>
    );
    
}
export default ReportIssue;