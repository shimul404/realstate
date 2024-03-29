  // Function to update the time and date
  function updateTimeAndDate() {
    var now = new Date();
    var currentTime = now.toLocaleTimeString();
    var currentDate = now.toLocaleDateString();

    document.getElementById('current-time').textContent = currentTime;
    document.getElementById('current-time').setAttribute('datetime', now.toISOString());

    document.getElementById('current-date').textContent = currentDate;
    document.getElementById('current-date').setAttribute('datetime', now.toISOString().split('T')[0]);
}

// Call updateTimeAndDate initially and then every second to update the time and date
updateTimeAndDate(); // Call initially
setInterval(updateTimeAndDate, 1000);
// time and date//

//0wl-catousel//
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    smartSpeed: 1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));