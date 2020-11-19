
function ipLookUp () {
  $.ajax('http://ip-api.com/json')
  .then(
      function success(response) {
          console.log('User\'s Location Data is ', response);
          console.log('User\'s Country', response.country);
          console.log('User\'s Continent', response.timezone);
          var timezone = response.timezone;
          if(timezone.includes("Africa")){
            window.location.replace("https://www.questions2vie.com/contactAF1.html");
          }else if(timezone.includes("France")){
            window.location.replace("https://www.questions2vie.com/contactFR.html");
          }else{
            window.location.replace("https://www.questions2vie.com/contactAF2.html");
          }
      },
      function fail(data, status) {
          console.log('Request failed.  Returned status of',
                      status);
      }
  );
}
ipLookUp()