/* API credentials*/
const baseURL = "http://api.openweathermap.org/data/2.5/weather?zip=";
const apiKey = "&appid=a51e67c9e59fa7fe055cb0279d333376";
let units = "&units=imperial";
let generate = document.getElementById("generate");

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + "." + d.getDate() + "." + d.getFullYear();

//submit an action with generate button
generate.addEventListener("click", performAction);

function performAction(e) {
  e.preventDefault();
  let zip = document.getElementById("zip").value;
  let feelings = document.getElementById("feelings").value;

  // get data from weather API
  getWeather(baseURL, zip, apiKey, units)
    // waiting for the data and then sending it to our server project data
    .then((data) => {
      //console.log(data);
      // add data to post request

      return postData("/add", {
        temp: data.main.temp,
        date: newDate,
        content: feelings,
      });
    })
    // updating our page with latest data
    .then(() => {
      updatUi();
    });
}

//function to fetch data from api
const getWeather = async (baseURL, zip, apiKey, units) => {
  const temp = await fetch(`${baseURL}${zip}${units}${apiKey}`);
  //console.log(temp);
  try {
    const allData = await temp.json();
    return allData;
  } catch (error) {
    console.log("error  getWeather 38", error);
  }
};

//function to post route to server
const postData = async (url = "", data = {}) => {
  // console.log(data);
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  try {
    const newData = await response.json();
    // console.log(newData);
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

//function to update ui = get all data from server
const updatUi = async () => {
  const request = await fetch("/all");
  try {
    const allData = await request.json();
    document.getElementById("date").innerHTML = `Date : ${allData.date}`;
    document.getElementById("temp").innerHTML = `Tempratuer : ${allData.temp}`;
    document.getElementById("content").innerHTML = `i feel: ${allData.content}`;
  } catch (error) {
    console.log("error", error);
  }
};
