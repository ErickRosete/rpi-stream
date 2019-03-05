var socket = io();
socket.on("stream", function(image) {
  document.querySelector("#play").src = image;
});
