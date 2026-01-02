var marqueeText = "";

async function getLyrics(){
  const lyrics = await fetch("/content/shrines/kkb/kkb-lyrics.json");
  const response = await lyrics.json();
  for(song of response['Bonito Intro']){
    marqueeText += `~${song['title']}~ ${song['lyrics']} `;
  }
  document.getElementById('lyrics-marquee').innerHTML = marqueeText;
}
