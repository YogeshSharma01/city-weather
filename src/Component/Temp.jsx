import React,{useState, useEffect} from 'react';
import './Css/Temp.css';
const Temp = ()=>{
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("India");
    useEffect(()=>{
        const fetchApi = async () =>{
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=14b369f6117711c4ffbdcfe1ed153082`
            const res = await fetch(url);
            const resJson = await res.json();
            setCity(resJson.main);
        }
        fetchApi();
    },[search]);
    
    return(
        <>
      
            <div className="box">
                <div className="inputData">
                    <input
                    type="search"
                    className="inputField"
                    placeholder="Search..."
                    onChange={(event)=>{setSearch(event.target.value)}}/>
                </div>
                {!city ? (
                        <p> No Data Found</p>
                        ):(
            <>
            <div className="info">
            <span className="info-data">
                    <h2 className="location">
                    <i className="fab fa-cloudversify"></i>{search}
                    </h2>
                    <h1 className="temp">
                    {city.temp}°Cel
                    </h1>
                    <h3 className="tempmin_max">Min : {city.temp_min}°Cel <br/> Min : {city.temp_max}°Cel
                    </h3>
                    <img className="cloud-img" src="https://media0.giphy.com/media/cOJbD5FJCMRbFJdjSe/giphy.gif" alt="ok" />
                    </span>
            </div>
            </>
                    )
                }
           
            

            </div>
           
        </>
    )
}

export default Temp;