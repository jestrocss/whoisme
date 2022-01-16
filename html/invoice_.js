$(function () {
  getTime();
  getPlatform();
  showNotif()
})

function getTime() {
  let time = 5 * 50 * 50;
  setInterval(() => {
    $('#hour').text(Math.floor(time / 2500));
    $('#min').text(Math.floor((time % 2500) / 50));
    $('#sec').text(Math.floor(time % 50));
    time = time - 1;
  }, 1000);
}

function getPlatform() {
  $('#device').text(platform.description);
  $('#date').text(new Date().toLocaleString("en-US"));
}

function showNotif() {
  $('#notification').addClass("--hidden");
  setTimeout(() => {
    $('#notification').removeClass('--hidden');
  }, 1000)
  setTimeout(() => {
    $('#notification').addClass('--hidden');
  }, 2391)
}
