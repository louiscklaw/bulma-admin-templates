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

document.addEventListener("DOMContentLoaded", function() {
  // Init Pjax instance
  pjax = new Pjax({
    elements: [".js-Pjax"],
    selectors: [".body", "title"],
    cacheBust: true
  });
  console.log("Pjax initialized.", pjax);

  // Init page content
  initButtons();
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1bG1hLmpzIiwibWFpbi5qcyIsIl9ET01Db250ZW50TG9hZGVkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgZm9sbG93aW5nIGNvZGUgaXMgYmFzZWQgb2ZmIGEgdG9nZ2xlIG1lbnUgYnkgQEJyYWRjb21wXG4vLyBzb3VyY2U6IGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL0JyYWRjb21wL2E5ZWYyZWYzMjJhOGU4MDE3NDQzYjYyNjIwODk5OWMxXG4oZnVuY3Rpb24oKSB7XG4gICAgdmFyIGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXJnZXInKTtcbiAgICB2YXIgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnK2J1cmdlci5kYXRhc2V0LnRhcmdldCk7XG4gICAgYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcbiAgICB9KTtcbn0pKCk7IiwiZnVuY3Rpb24gaGVsbG93b3JsZCgpIHtcbiAgY29uc29sZS5sb2coXCJoZWxsb3dvcmxkXCIpO1xufVxuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XG4gIC8vIEluaXQgUGpheCBpbnN0YW5jZVxuICBwamF4ID0gbmV3IFBqYXgoe1xuICAgIGVsZW1lbnRzOiBbXCIuanMtUGpheFwiXSxcbiAgICBzZWxlY3RvcnM6IFtcIi5ib2R5XCIsIFwidGl0bGVcIl0sXG4gICAgY2FjaGVCdXN0OiB0cnVlXG4gIH0pO1xuICBjb25zb2xlLmxvZyhcIlBqYXggaW5pdGlhbGl6ZWQuXCIsIHBqYXgpO1xuXG4gIC8vIEluaXQgcGFnZSBjb250ZW50XG4gIGluaXRCdXR0b25zKCk7XG59KTtcbiJdfQ==
