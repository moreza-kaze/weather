import { Component } from "react";

class WeatherInfo extends Component{
  render(){
    return(
      <>
        <div className="w-100 border-weather rounded-lg p-3">
          <div className="row">
            <div className="col-10 d-flex justify-content-between">
              <h2 className="col-8 d-flex align-items-center px-2">{this.props.data?.name}</h2>
              <div className="col-4 d-flex justify-content-end align-items-center">
                <h3>{(this.props.data?.main.temp - 273).toFixed(1)}<span> &#x2103;</span></h3>
              </div>
            </div>
            <img className="col-2" src={`${process.env.REACT_APP_API_BASE_URL}/img/w/${this.props.data?.weather[0]?.icon}.png`} alt="" />
          </div>
          <div className="row justify-content-center mt-1 px-3">
            <div className="col-12 text-center">{this.props.data?.weather[0]?.description}</div>
          </div>
          <div className="row justify-content-between mt-1 px-3">
            <div className="col-5">contery</div>
            <div className="col-3 col-ms-4 text-end">{this.props.data?.sys.country}</div>
          </div>
          <div className="row justify-content-between mt-1 px-3">
            <div className="col-5">max temp</div>
            <div className="col-3 col-ms-4 text-end">{(this.props.data?.main.temp_max - 273).toFixed(1)} c</div>
          </div>
          <div className="row justify-content-between mt-1 px-3">
            <div className="col-4">min temp</div>
            <div className="col-3 col-ms-4 text-end">{(this.props.data?.main.temp_min - 273).toFixed(1)} c</div>
          </div>
          <div className="row justify-content-between mt-1 px-3">
            <div className="col-4">wind speed</div>
            <div className="col-3 col-ms-4 text-end">{this.props.data?.wind.speed} m/s</div>
          </div>
          <div className="row justify-content-between mt-1 px-3">
            <div className="col-4">humidity</div>
            <div className="col-5 col-ms-4 text-end">{this.props.data?.main.humidity} % </div>
          </div>
        </div>
      </>
    )
  }
}
export default WeatherInfo;