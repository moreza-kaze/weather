import axios from "axios";
import classNames from "classnames";
import { useState } from "react";

function SearchBox(props) {
  const [searchData,setSearchdata] = useState([]);

  const onChangeSearch = async(data) =>{
    await axios.get(`/geo/1.0/direct?q=${data}&limit=5&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`)
    .then((res)=>{
      if (res.data) {
        setSearchdata(res.data.map((v)=>{
          return{
            "name":v.name+" "+v.country,
            "lat":v.lat,
            "lon":v.lon
          }
        }))
      }
    }).catch((err)=>{
      // console.log(err);
      setSearchdata([])
    })
  }
  var boxclass = classNames({
    "mt-2 px-3 w-100 d-flex flex-column border-search rounded-lg":searchData.length>0,
    "w-0":searchData.length<1
  })
  return(
    <>
      <div className="w-100 h-100">
        <input 
          type={props.type} 
          placeholder={props.placeholder} 
          onChange={(v)=>{
            if (v.target.value<1) {
              setSearchdata([])
            }
            else{
            onChangeSearch(v.target.value)
            }
          }} 
          className="w-100 h-100 px-2 rounded-lg search-box" 
        />
        <div className={boxclass}>
        {searchData.length>0 ? searchData.map((g,index)=>(
            <span key={index} className="title py-2 pointer-courser" onClick={(c)=>{props.onChangeSearch({lat:g.lat,lon:g.lon});setSearchdata([])}}>{g.name}<br /></span>
        )) : <span className="d-none"></span>}
        </div>
      </div>
    </>
  )
}
export default SearchBox;