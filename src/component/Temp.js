import React, { useEffect, useState } from "react";
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import SearchIcon from '@material-ui/icons/Search';
import NotInterestedIcon from '@material-ui/icons/NotInterested';

function Temp() {


    const API_KEY = "4ab421b32f5247d4ab794938211702"

    const [search, setSearch] = useState('');
    const [tempCondition, setTempCondition] = useState([]);
    const [tempInfo, setTempInfo] = useState([]);

    const [searchQuery, setSearchQuery] = useState('Kathmandu');

    useEffect(() => {
        getTemp();
    }, [searchQuery])

    const getTemp = async () => {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${searchQuery}`)
        const data = await response.json();
        setTempInfo(data.location);
        setTempCondition(data.current);
       


    }


    const searchinfo = (e) => {
        e.preventDefault();
        setSearchQuery(search);
        
    }
    const deleteinfo = () =>{

    }
    return (

        <>
            <div className="back">
                <div className="card">
                    <h1>Weather Info <WbSunnyIcon style={{ fontSize: "40px" }} /></h1>
                    <form type="submit" onSubmit={(e) => searchinfo(e)}>
                        <input className="input" type="text" onChange={(event) => setSearch(event.target.value)} />
                        <button className="input-btn" type="submit" >Enter</button>

                    </form>







                    {!(tempInfo&&tempCondition)? (
                        <p className ="No-data"> No Data found <NotInterestedIcon style={{fontSize:"30px"}}/></p>
                        
                    ) : (
                            <div className="info">

                                Country : {tempInfo.country} <br />
                                Place : {tempInfo.name} <br />
                                Local time : {tempInfo.localtime} <br />
                                Temperature : {tempCondition.temp_c}°C  / {tempCondition.temp_f}°F <br />

                            </div>

                        )}

   





                </div>
            </div>

            <br />
            {/* 
         {tempInfo.country === "" && <h1></h1>}    */}




        </>
    )
}

export default Temp;
