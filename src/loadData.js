async function loadCities(param) {
  debugger;
  try{
      var fetchExample = await fetch("https://countriesnow.space/api/v0.1/countries/population/cities/filter", 
      {
    "headers": {      
      "Content-Type": "application/json",
      "accept": "*/*",
      "accept-language": "en-GB,en-US;q=0.9,en;q=0.8"      
    },    
    "method": "POST",
    "body": JSON.stringify({
      "limit": 10,
      "order": "asc",
      "orderBy": "name",
      "country": "india"
    })
  });
      const data = await fetchExample.json();
      debugger;
      console.log(data); 
      return data;
  }
  catch(e){
      return e;
  }   
  }
  



module.exports = {
  loadCities
}