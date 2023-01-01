//Problem 5: Given the days of the week in short format "Sun", "Mon" ... print in long format "Sunday", "Monday", ...

let day = "sat";

switch(day)
{
    case "mon" : console.log("Monday"); 
    break;
    case "tue" : console.log("Tuesday");
    break;
    case "wed" : console.log("Wednsday");
    break;
    case "thu" : console.log("Thursday");
    break;
    case "fri" : console.log("Friday");
    break;
    case "sat" : console.log("Saturday");
    break;
    default  : console.log("wrong input");
}