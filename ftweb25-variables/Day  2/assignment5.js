//Problem 1: Given the year of birth, if the age is between 13 and 19 (both included) print Teenage and in between 20 and 29 (both included) print Twenties

let yearOfBirth = 2004;
let presentAge = 2022-yearOfBirth;

if(presentAge>=13 && presentAge<=19)
{
  console.log("Teenage");
}
if(presentAge>=20 && presentAge<=29)
{
  console.log("Twenties");
}