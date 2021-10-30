//Helper function          
let $ = (id) => document.getElementById(id);

//Start Date
let startDate = new Date('2021-10-26'); //update this date as needed
startDate.setHours(0,0,0,0); //sets time to 00:00:00.000 of current time zone

//Today's Date
const today = new Date();

//Nnumber of days to payment's deadline date
const daysToDeadline = 10; //input # of days to deadline date and update as needed

//Calculate deadline date
const deadlineDate = new Date(startDate);
deadlineDate.setDate(startDate.getDate() + daysToDeadline);

//Opacity decrease rate
const decreaseRate = 1/daysToDeadline; //since default and max. opacity is 1

//Days until deadline date
const daysLeft = ((deadlineDate - today) / (1000 * 60 * 60 * 24));

// Current opacity
let currentOpacity = decreaseRate*daysLeft;

//Decrease opacity daily to 0 by deadline date
(daysLeft >= 0) ? (document.getElementsByTagName("body")[0].style.opacity = currentOpacity) : (document.getElementsByTagName("body")[0].style.opacity = 0);

//Display deadline date
$("dueDate").innerHTML = (deadlineDate.getMonth()+1) + '/' + deadlineDate.getDate() + '/' + deadlineDate.getFullYear();
