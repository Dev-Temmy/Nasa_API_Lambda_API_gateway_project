import axios from 'axios';
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";


const API_KEY= "pmn28bi0NkYUw1E8kl8jLS7830wC1j0DPEVBNIud";

const App = () => {

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [data, setData] = useState([]);

  const getEarthParameter = () => {
  const options = {
    method: 'GET',
    url: `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date={endDate}&api_key=${API_KEY}`,
    params:{ start_date: {startDate}, 
    end_date: {endDate},
  }
      
      
    // 'ID': { }, 
    // 'Name_of_the_Object': {}, 
    // 'Diameter_of_Object_in_metres': {}, 
    // 'potentially_hazardous_asteroid': 'false',
    // 'velocity_of_object_in_Kilometres_per_hour': {},
    

   //headers: 
  // headers: {
  //   'x-nasa-host': 'api.nasa.gov',
  //   'x-nasaapi-key': 'pmn28bi0NkYUw1E8kl8jLS7830wC1j0DPEVBNIud',
  //   'Access-Control-Allow-Origin': '*',
  //           'Access-Control-Allow-Headers': '*',
  //           'Access-Control-Allow-Credentials': '*',
  //           'Content-Type': 'application/json'
  // },
}


axios.request(options).then((response) => {
	console.log(response.data)
}).catch((error) => {
	console.error(error)
})
}



// axios.get('http://localhost:5000/getData', {
//   headers: {
//       'x-api-key': "pmn28bi0NkYUw1E8kl8jLS7830wC1j0DPEVBNIud" ,
//       'Content-Type': 'application/json'
//   } 
// }).then((response) => {
// 	console.log(response.data)
// }).catch((error) => {
// 	console.log(error)
// })
// }

//to invoke the API function(getEarthParameter)
//useEffect(()=> { if (startDate && endDate) getEarthParameter()
//})

useEffect(()=> {
  axios('http://localhost:5000/getData').then(response => {
    console.log(response.data.near_earth_objects);
    setData(response.data.near_earth_objects); //to display near earth object in the console
  })
}, []);


//const earth_objects = data.map((near_earth_objects) => <p>{near_earth_objects}</p>

//

// [startDate,endDate]

const handleSubmit =(event) => {

//const near_earth_objects = []
alert('The properties of the object are:')

//near_earth_objects.map((near_earth_objects)=>
//<p>{near_earth_objects.id}</p>
event.preventDefault()
  }
  
return (
    <div className="App">
      <h2> Trend Micro Technical Assessment</h2>
    <div>
    <form onSubmit={handleSubmit}>
      <DatePicker
        dateFormat="yyyy, MMMM d"
        selected={startDate}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        onChange={date => setStartDate(date)}/> State Date <br></br>
      <DatePicker
        dateFormat="yyyy, MMMM d"
        selected={endDate}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        onChange={date => setEndDate(date)}/> End Date <br></br> 
        <input type="submit" value="Submit" onClick={handleSubmit}/>
        </form>
        </div> 

        </div>


  ); 
}
export default App;
