console.log("Hello World!");

const userName = "Kaleb";
let hasDownloadedResume = false;

addEventListener('click', resumeDownload);

function resumeDownload() 
{
    alert("Your resume downloaded successfully!");
}

function showGreeting(userName) 
{
    alert("Hello, my name is " + userName + "! Welcome to my portfolio!");
}

showGreeting(userName)

var dueDate = new Date(12, 4 ,2002);

function daysUntilDeadline(dueDate) 
    {
        var currentDate = new Date(10, 14, 2002);
        var dateDif = dueDate - currentDate;
        console.log(dateDif);
        return(dateDif);
    }

daysUntilDeadline(dueDate)

