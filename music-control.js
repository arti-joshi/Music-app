
import { apiCall } from "./api-client.js";
function loadMusic(){
  const URL =
    "https://github.com/arti-joshi/finalnew/blob/main/newapi%20%5BMConverter.eu%5D.json";
  const promise = apiCall(URL);
  // Pending
  promise
    .then(function (response) {    
      const pr = response.json();
      pr.then(function (data) {
        printTracks(data.tracks);
        console.log("Music Data ", data);
      }).catch(function (err) {
        console.log("Invalid JSON ", err);
      });
    })
    .catch(function (err) {
      console.log("Unable to make API Call ", err);
    });
}
loadMusic();

function printTracks(tracks) {
  for (var i = 0; i < tracks.length; i++) {
    printTrack(tracks[i]);
  }
}
function printTracks(tracks) {
  for (var i = 0; i < tracks.length; i++) {
    printTrack(tracks[i]);
  }
}
function printTrack(track) {
  const card = `
    <div class="col-4 card">
      <img src="${track.artworkUrl100}" class="card-img-top" alt="Album cover">
      <div class="card-body">
        <h5 class="card-title">${track.trackName}</h5>
        <p class="card-text">Artist: ${track.artistName}</p>
        <p class="card-text">Album: ${track.collectionName}</p>
        <p class="card-text">Price: $${track.trackPrice}</p> <!-- Adjust the property name as per your API -->
        <audio controls>
          <source src="${track.previewUrl}" type="audio/m4a">
          Your browser does not support the audio element.
        </audio>
        <a href="${track.trackViewUrl}" class="btn btn-primary" target="_blank">View on Apple Music</a>
      </div>
    </div>`;
  const div = document.getElementById("tracks");
  div.innerHTML = div.innerHTML + card;
}
