var convertedTemperature = 0;

button.addEventListener ("click", function() {
   var getTemperature = document.getElementById("temperature").value;
   var getTemperatureType = document.getElementById("temperatureType").value;

   var convertedTemperature = convertTemp(getTemperature, getTemperatureType);
   var convertedTemperatureType ; 

   if (temperatureType === 'F')
    {  
      convertedTemperatureType = "C";  
    }
      else  
    {
      convertedTemperatureType = "F"; 
    }
    
   console.log(getTemperature, getTemperatureType, convertedTemperature, convertedTemperatureType);

   var printTemperature = document.createElement("p");
    printTemperature.innerText += "The input temperature is: " +  getTemperature + 
    " and the input Temperature Type is:  " + getTemperatureType + 
    ". "
    p1.appendChild(printTemperature); 

    printTemperature = document.createElement("p");
    printTemperature.innerText += " The converted temperature is: "  + convertedTemperature 
    + " " + convertedTemperatureType + ".";

    p1.appendChild(printTemperature); 

 });
   
 function convertTemp (temperature, temperatureType)
    {

   /* temperaturetype is equal to what we are converting temperature to */

  if (temperatureType === "F") 
     { 
  		convertedTemperature = temperature * 9/5 + 32; 
     }
  else { 
  		convertedTemperature = (temperature - 32) * (5/9); 
     }
  return convertedTemperature
}  