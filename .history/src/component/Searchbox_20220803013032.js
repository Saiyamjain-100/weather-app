import React, {  useState } from 'react'
export default function Searchbox() {
    let [city,setcity]=useState('london');
    let [state,setState]=useState({
        temperature:'',
        pressure:'',
        humidity:'',
        winddirection:'',
        windspeed:'',
});

    const handleChange=(event)=>{
        setcity(event.target.value);
        console.log(city);
    }
    const weatherdeatail=async(city)=>{
        if(!city)return
        const url=`https://api.weatherapi.com/v1/current.json?key=e02e97fa3f2e4622aca170114221705&q=${city}&aqi=no`;  
        let data = await fetch(url);
        let Prasedata = await data.json();
        setState({
            temperature:Prasedata.current.temp_c,
            pressure:Prasedata.current.pressure_in,
            humidity:Prasedata.current.humidity,
            windspeed: Prasedata.current.wind_mph,
            winddirection: Prasedata.current.wind_dir,
        });
        console.log(state);
        console.log(city);
        console.log(url)
    };
    const handleClick=()=>{
        weatherdeatail(city);
    }
    function formSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.');
        return false;
    }
    

  return (
    <div className='top-bar'> 
        <div div className="container my-5 "height="100%" widht="100%" >
        <div className="row d-flex justify-content-evenly">  
        <div className="col-md-3">
                <h1>Weather</h1>
            </div>
                    <form className="form-inline d-flex col-md-3" onSubmit={formSubmit} >
                        <button className="btn btn-outline-danger my-2 my-sm-0" onClick={handleClick} type="submit" >Search</button>
                        <input className="form-control mr-sm-2" value={city} onChange={handleChange}  type="text" placeholder="Enter your city name"/>
                    </form>
            
        </div>
    </div>
    <div className='home' color='white'>
        <h1> {}</h1>
    <div className="container justify-content-center"  height="100%" widht="100%" max-height="40vh">
        <div className="d-flex justify-content-between">
            <div className="col-md-3" color='white'>
                <h5>Temperature</h5>
                <div className="d-flex justify-content-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-thermometer-sun" viewBox="0 0 16 16">
                        <path d="M5 12.5a1.5 1.5 0 1 1-2-1.415V2.5a.5.5 0 0 1 1 0v8.585A1.5 1.5 0 0 1 5 12.5z"/>
                        <path d="M1 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM3.5 1A1.5 1.5 0 0 0 2 2.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0L5 10.486V2.5A1.5 1.5 0 0 0 3.5 1zm5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5zm4.243 1.757a.5.5 0 0 1 0 .707l-.707.708a.5.5 0 1 1-.708-.708l.708-.707a.5.5 0 0 1 .707 0zM8 5.5a.5.5 0 0 1 .5-.5 3 3 0 1 1 0 6 .5.5 0 0 1 0-1 2 2 0 0 0 0-4 .5.5 0 0 1-.5-.5zM12.5 8a.5.5 0 0 1 .5-.5h1a.5.5 0 1 1 0 1h-1a.5.5 0 0 1-.5-.5zm-1.172 2.828a.5.5 0 0 1 .708 0l.707.708a.5.5 0 0 1-.707.707l-.708-.707a.5.5 0 0 1 0-.708zM8.5 12a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5z"/>
                      </svg>
                    <p className="mx-4">{state?.temperature}<span>&#8451;</span></p>
                </div>
            </div>
            <div className="col-md-3">
                <h5>Wind Speed</h5>
                <div className="d-flex justify-content-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-wind" viewBox="0 0 16 16">
                        <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z"/>
                      </svg>
                    <p className="mx-4">{state?.windspeed}</p>
                </div>
            </div>
            <div className="col-md-3">
                <h5>Wind direction</h5>
                <div className="d-flex justify-content-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-arrows-move" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708l2-2zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10zM.146 8.354a.5.5 0 0 1 0-.708l2-2a.5.5 0 1 1 .708.708L1.707 7.5H5.5a.5.5 0 0 1 0 1H1.707l1.147 1.146a.5.5 0 0 1-.708.708l-2-2zM10 8a.5.5 0 0 1 .5-.5h3.793l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L14.293 8.5H10.5A.5.5 0 0 1 10 8z"/>
                      </svg>
                    <p className="mx-4">{state?.winddirection}</p>
                </div>
            </div>
        </div>
        <div className="d-flex justify-content-evenly my-5 ">
            <div className="col-md-3">
                <h5>Humidity</h5>
                <div className="d-flex justify-content-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-thermometer-sun" viewBox="0 0 16 16">
                        <path d="M5 12.5a1.5 1.5 0 1 1-2-1.415V2.5a.5.5 0 0 1 1 0v8.585A1.5 1.5 0 0 1 5 12.5z"/>
                        <path d="M1 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM3.5 1A1.5 1.5 0 0 0 2 2.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0L5 10.486V2.5A1.5 1.5 0 0 0 3.5 1zm5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5zm4.243 1.757a.5.5 0 0 1 0 .707l-.707.708a.5.5 0 1 1-.708-.708l.708-.707a.5.5 0 0 1 .707 0zM8 5.5a.5.5 0 0 1 .5-.5 3 3 0 1 1 0 6 .5.5 0 0 1 0-1 2 2 0 0 0 0-4 .5.5 0 0 1-.5-.5zM12.5 8a.5.5 0 0 1 .5-.5h1a.5.5 0 1 1 0 1h-1a.5.5 0 0 1-.5-.5zm-1.172 2.828a.5.5 0 0 1 .708 0l.707.708a.5.5 0 0 1-.707.707l-.708-.707a.5.5 0 0 1 0-.708zM8.5 12a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5z"/>
                      </svg>
                    <p className="mx-4">{state?.humidity}<span>&#8451;</span></p>
                </div>
            </div>
            <div className="col-md-3">
                <h5>Pressure</h5>
                <div className="d-flex justify-content-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-wind" viewBox="0 0 16 16">
                        <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z"/>
                      </svg>
                    <p className="mx-4">{state?.pressure}</p>
                </div>
            </div>
        </div>    
    </div>
    <div className='footer text-center'>
    <p className="footer-dark">Made with <span>&#10084;</span>  by <cite title="Source Title">Saiyam jain</cite></p>
    </div>
      </div>

     </div>
  )
}
