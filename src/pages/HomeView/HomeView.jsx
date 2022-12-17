import "./HomeView.scss"
import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchBox from "../../component/SearchBox";
import WeatherInfo from "../../component/WeatherInfo"

function HomeView(){
  const [geo,setGeo] = useState({})
  const [data,setData] = useState({})

  const onChangeSearchHF = (v) => {
    setGeo(v);
  } 

  useEffect(()=>{
    if (geo.lat) {
      axios.get(`/data/2.5/weather?lat=${geo.lat}&lon=${geo.lon}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`)
      .then((res)=>{
        setData(res.data)
      }).catch((err)=>{})
    }
  },[geo])

  return(
    <>
      <div className="search-box-px text-white">
        <div className="w-100 h-2 my-5 position-relative z-10">
          <SearchBox type="text" placeholder="please type your city name" onChangeSearch={onChangeSearchHF} />
        </div>
        <div>
          {data.name ? <WeatherInfo data={data} /> : 
          <div className="w-100 border-weather rounded-lg p-3">
            city is empty or incorrect
          </div>
          }
        </div>
      </div>
    </>
  )
}
export default HomeView