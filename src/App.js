import React from "react";
// import axios from 'axios'

function App() {

  // const url =`https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=fe9b929bcbcb8a424b70a047929730b7`

  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Dhaka</p>
          </div>
          <div className="temp">
            <h1>60*F</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bootom">
          <div className="feels">
            <p>65*F</p>
          </div>
          <div className="humidity">
            <p>20%</p>
          </div>
          <div className="wind">
            12 MPH
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
