$(document).ready(function (){

// =======גיף טעינה בזמן המתנה לצד שרת
$(document).on({
    ajaxStart: function() {  $(".loaddiv").css("display", "block");  },
     ajaxStop: function() {   $(".loaddiv").css("display", "none");}    
  });  
  
let countryList = []
let allCountry =[]
let coin




$(".btn-all").click(function(){
    $(".container").html(` `)
    $.get("https://restcountries.eu/rest/v2/all",(data)=>{
    allCountry = data
    console.log(data);
    for (const country of allCountry) {
        coin = country.currencies
        console.log(coin);
        let coinlist = []
        for (const c of coin) {
            coinlist.push(` ${c.name}(${c.symbol}) `)
        }
        $(".container").append(`
        <div class="country" id="${country.name}">
        <h3 class="name">${country.name}</h3>
        <div class="topld">Top Level Domain: "${country.topLevelDomain}"</div>
        <div class="capital">capital: ${country.capital} </div>
        <div class="currancy">currency: ${coinlist}</div>
        <div class="borders">borders : ${country.borders}</div>
        <div class="flag" ><img src="${country.flag}" alt="" style="height: 30px; width:50px;"></div>    </div>
        `)
        
    }

})
})




$(".btn-search").click(function(){
    let input = $("#inp-search").val()
    $(".container").html(` `)
    $.get(`https://restcountries.eu/rest/v2/name/${input}`,(data)=>{
    countryList = data
    for (const country of countryList) {
        coin = country.currencies
        let coinlist = []
        for (const c of coin) {            
            coinlist.push(` ${c.name}(${c.symbol}) `)
        }
        $(".container").append(`
        <div class="country" id="${country.name}">
        <h3 class="name">${country.name}</h3>
        <div class="topld">Top Level Domain: "${country.topLevelDomain}"</div>
        <div class="capital">capital: ${country.capital} </div>
        <div class="currancy">currency: ${coinlist}</div>
        <div class="borders">borders : ${country.borders}</div>
        <div class="flag" ><img src="${country.flag}" alt="" style="height: 30px; width:50px;"></div>    </div>
        `)
        
    }
})
})




  })
                
                
                
                
                
                
                
                
                
               
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  