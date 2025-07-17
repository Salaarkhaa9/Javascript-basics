console.log("Hello World!");

const accountId=12345;
let accountName="Salar";
var accountEmail="salarwasil2004@gmail.com";
accountCity="Rawalpindi";
let accountState;
/*
prefer not to use var cause of block scope
*/
accountName="FARHAN";
accountEmail="abs@gmail.com";
accountCity="Islamabad";

console.table([accountEmail,accountId,accountName,accountState,accountCity]);