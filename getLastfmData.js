const user = "Hpnasa";
// look I realize this is a vulnerability, i'm not dumb. However,
//  ummmm idk it has no actual permissions or anything and its only the key
//  I guess you could abuse it and break the widget on my website if you wanted to.
// I have no idea why you would want to do that. plz don't i'm sensitive and it will
// hurt my feelings and i will cry probably I looked at other peoples code and there 
// is a shields.io badge for this (I have a vague understanding of what that is) but
// that relies on someone elses backend that has an API. I have a choice of using their
// backend until either their backend dies or the API dies or I can use mine and only
// rely on the API not failing or getting deprecated
const apiKey = "cad3a6b0acefaab023f0a680a1a796df";

async function fetchRecentTracks(){
  try{
    response = await fetch(`https://ws.audioscrobbler.com/2.0/?api_key=${apiKey}&method=User.getrecenttracks&user=${user}&format=json&limit=1`);
    const lastfmData = await response.json();
    document.getElementById("trackInfo").textContent = `${lastfmData.recenttracks.track[0].name} by ${lastfmData.recenttracks.track[0].artist["#text"]}`;
  } catch (error){
    console.log("wahhhhhhh last fm is borken sadge");
    console.log(error);
  }
}

fetchRecentTracks();