var STRING_AFRICA = "Africa";
var STRING_FRANCE = "France"
var african_contact = "https://www.questions2vie.com/contactAF1.html";
var french_contact = "https://www.questions2vie.com/contactFR.html";
var af2_contact = "https://www.questions2vie.com/contactAF2.html";

function ipLookUp () {
  $.ajax('http://ip-api.com/json')
  .then(
      function success(response) {
          console.log('User\'s Location Data is ', response);
          console.log('User\'s Country', response.country);
          console.log('User\'s Continent', response.timezone);
          var timezone = response.timezone;
          if(timezone.includes(STRING_AFRICA)){
            window.location.replace(african_contact);
          }else if(timezone.includes(STRING_FRANCE)){
            window.location.replace(french_contact);
          }else{
            window.location.replace(af2_contact);
          }
      },
      function fail(data, status) {
          console.log('Request failed.  Returned status of',
                      status);
      }
  );
}
ipLookUp()