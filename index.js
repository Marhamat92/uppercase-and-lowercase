var name=prompt("What is your name ");
var firstchar=name.slice(0,1);
upperFirstchar=firstchar.toUpperCase();
var restofName= name.slice(1,name.length);
restofName=restofName.toLowerCase();
var capitalisedName=upperFirstchar + restofName;
alert("Hello, " + capitalisedName);
