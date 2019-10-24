// The following code is based off a toggle menu by @Bradcomp
// source: https://gist.github.com/Bradcomp/a9ef2ef322a8e8017443b626208999c1
(function() {
    var burger = document.querySelector('.burger');
    var menu = document.querySelector('#'+burger.dataset.target);
    burger.addEventListener('click', function() {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
})();
function helloworld() {
  console.log("helloworld");
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1bG1hLmpzIiwibWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSBmb2xsb3dpbmcgY29kZSBpcyBiYXNlZCBvZmYgYSB0b2dnbGUgbWVudSBieSBAQnJhZGNvbXBcbi8vIHNvdXJjZTogaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vQnJhZGNvbXAvYTllZjJlZjMyMmE4ZTgwMTc0NDNiNjI2MjA4OTk5YzFcbihmdW5jdGlvbigpIHtcbiAgICB2YXIgYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1cmdlcicpO1xuICAgIHZhciBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycrYnVyZ2VyLmRhdGFzZXQudGFyZ2V0KTtcbiAgICBidXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgYnVyZ2VyLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xuICAgICAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xuICAgIH0pO1xufSkoKTsiLCJmdW5jdGlvbiBoZWxsb3dvcmxkKCkge1xuICBjb25zb2xlLmxvZyhcImhlbGxvd29ybGRcIik7XG59XG4iXX0=
