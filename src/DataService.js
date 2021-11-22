import http from "././Http-comman";  
class DataService {  
     
    getAll() { 
        console.log(http.get("https://api.covid19api.com/summary"))
        return http.get("https://api.covid19api.com/summary");
      }

      getCountries(){
        console.log(http.get("https://api.covid19api.com/countries"))
        return http.get("https://api.covid19api.com/countries");
      }

      getActive(name){
        console.log(http.get("https://api.covid19api.com/dayone/country/" + name))
        return http.get("https://api.covid19api.com/dayone/country/" + name);
      }
      
        
}
export default new DataService();  