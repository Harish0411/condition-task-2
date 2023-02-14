
let day = prompt("Enter any day of the week");

if(day == "saturday" || day == "sunday"){
     document.write(`${day} is weekend`)
}
else{
     document.write(`${day} is week day`)
}
document.write("<br>");	

//Task: 1-Ask user to enter age, sex ( M or F ) and then using following rules print their place of service. if employee is female, then she will work only in urban areas. if employee is a male and age is in between 20 to 40 then he may work in anywhere if employee is male and age is in between 40 to 60 then he will work in urban areas only. And any other input of age should print "ERROR".

	 let age= Number(prompt("Enter your age"));
	 let sex= prompt("Enter your gender(M or F)")
	 
	 if(sex=="M"){
	     if(age>20 && age<40){
	     document.write("you are working anywhere");
		 }
		 else if(age<60 && 40>age){
		       document.write("You are working in only urban areas");
			}
		}
		else if(sex=="F"){
			  document.write("you are working onlly in urban areas")
	    }
		else{
		    document.write("ERROR");
	     }
document.write("<br>");	


let height = Number(prompt("Enter your height (cm)"));
 
if(height>0 && height<=150){
      document.write("you are a dwarf");
	 }
else if(height>150 && height<=165){
     document.write("you are a average person");
}
else if(height>165 && height<=195){
     document.write("you are the tallest person");
}
else{
     document.write("you are an abnormal person");
}

document.write("<br>");

let temp = Number(prompt("Enter temperature"));

if(temp < 0){
     document.write(`${temp} is freezing weather `)
}
else if(temp>=0 && temp <=10){
     document.write(`${temp} is very cold weather`);
}
else if(temp>10 && temp<=20){
     document.write(`${temp} is cold weather`);
}
else if(temp>20 && temp <= 30){
     document.write(`${temp} is normal weather`)
}
else if(temp>30 && temp <= 40){
     document.write(`${temp} is hot weather`)
}
else {
     document.write(`${temp} is very hot weather`);
}




