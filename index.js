const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");
const hour = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const period = document.querySelector("#period");

const months = ["January", "Feburary","March","April","May","June","July","Augest","September","Octobar","November","December"]
const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const current_date = new Date();
function updateClock(){
    year.innerHTML = current_date.getFullYear();
    day.innerHTML = current_date.getDate() + " - " + week[current_date.getDay()];
    month.innerHTML = months[current_date.getMonth()];
    seconds.innerHTML  = (current_date.getSeconds()< "9" ? "0"+ current_date.getSeconds():""+ current_date.getSeconds());
    minutes.innerHTML = (current_date.getMinutes() < "9" ? "0"+ current_date.getMinutes()+" :":"" + current_date.getMinutes()+" :");
    hour.innerHTML = (current_date.getHours()< "9" ? "0" + current_date.getHours()+" :" :"" + current_date.getHours()+ " :");
}
period.innerHTML = (current_date.getHours() < "12" ? "AM" : "PM" )
setInterval(updateClock,1);

