// preloader start
let preloader = document.querySelector('.preloader');

window.addEventListener('load', function () {
  preloader.classList.add('preloaderOpacity');
  setTimeout(function () {
    preloader.style.display = 'none';
  }, 1000);
});
// preloader end

var wow = new WOW(
  {
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true,
    callback: function (box) {
    },
    scrollContainer: null,
    resetAnimation: true,
  }
);
wow.init();


// Daylight start
let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#chk');
const enableDarkMode = () => {
  document.body.classList.add('dark');
  localStorage.setItem('darkMode', 'enabled');
};
const disableDarkMode = () => {
  document.body.classList.remove('dark');
  localStorage.setItem('darkMode', null);
};

if (darkMode === 'enabled') {
  enableDarkMode();
  darkModeToggle.checked = true;
}

darkModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode');
  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
// Daylight End

// menu and toogle btn start
let toggleBtn = document.querySelector('.toggleBtn');
let toggleBtnIcon = document.querySelector('.toggleBtn i');
let menu = document.querySelector('.menu');

function menuLeft() {
  toggleBtn.classList.remove('right');
  toggleBtn.classList.add('left');
  menu.classList.remove('menuRight');
  menu.classList.add('menuLeft');
}
function menuRight() {
  toggleBtn.classList.add('right');
  menu.classList.add('menuRight');
  menu.classList.remove('menuLeft');
  toggleBtn.classList.remove('left');
}
function toggleBtnRigth() {
  toggleBtnIcon.classList.add('fa-chevron-right');
  toggleBtnIcon.classList.remove('fa-chevron-left');
}
function toggleBtnLeft() {
  toggleBtnIcon.classList.remove('fa-chevron-right');
  toggleBtnIcon.classList.add('fa-chevron-left');
}
toggleBtn.addEventListener('click', function () {
  if (toggleBtn.classList.contains('right')) {
    menuLeft();
  } else {
    menuRight();
  }
  if (toggleBtnIcon.classList.contains('fa-chevron-right')) {
    toggleBtnLeft();
  } else {
    toggleBtnRigth();
  }
});
function toggleBtnMenu() {
  if (toggleBtn.classList.contains('right')) {
    menuLeft();
  }
  if (menu.classList.contains('menuRight')) {
    toggleBtnLeft();
  } else {
    toggleBtnRigth();

  }
}
document.querySelector('.Wrapper').addEventListener('click', toggleBtnMenu);

let menuList = document.querySelectorAll('.menuList li a');
menuList.forEach(li => {
  li.addEventListener('click', toggleBtnMenu);
});


// menu and toogle btn end

// navigation link active start
let linkList = document.querySelectorAll('nav ul li a');

function activeLinks(data, classname) {
  for (let i = 0; i < data.length; i++) {
    data[i].addEventListener('click', function () {
      for (let k = 0; k < data.length; k++) {
        data[k].classList.remove(classname);
      }
      data[i].classList.add(classname);
    });
  }
}

activeLinks(linkList, 'active');

// navigation link active end

//  onclick page transition start

let innerLoader = document.querySelector('.InnerLoader');
let home = document.querySelector('#homePage');
let resume = document.querySelector('#resumePage');
let service = document.querySelector('#servicePage');
let work = document.querySelector('#workPage');
let review = document.querySelector('#reviewPage');
let contact = document.querySelector('#contactPage');

for (let i = 0; i < menuList.length; i++) {
  let btns = menuList[i];
  // menulist variable found from line number 60
  btns.addEventListener('click', function () {
    if (btns.classList.contains('home')) {
      innerLoader.style.left = '0';
      setTimeout(function () {
        innerLoader.style.left = '-100%';
        resume.style.display = 'none';
        home.style.display = 'block';
        service.style.display = 'none';
        work.style.display = 'none';
        contact.style.display = 'none';
        review.style.display = 'none';
      }, 500);
    } else if (btns.classList.contains('resume')) {
      innerLoader.style.left = '0';
      setTimeout(function () {
        innerLoader.style.left = '-100%';
        resume.style.display = 'block';
        home.style.display = 'none';
        service.style.display = 'none';
        work.style.display = 'none';
        review.style.display = 'none';
        contact.style.display = 'none';
      }, 500);
    } else if (btns.classList.contains('service')) {
      innerLoader.style.left = '0';
      setTimeout(function () {
        innerLoader.style.left = '-100%';
        service.style.display = 'block';
        home.style.display = 'none';
        resume.style.display = 'none';
        work.style.display = 'none';
        review.style.display = 'none';
        contact.style.display = 'none';
      }, 500);
    } else if (btns.classList.contains('works')) {
      innerLoader.style.left = '0';
      setTimeout(function () {
        innerLoader.style.left = '-100%';
        service.style.display = 'none';
        home.style.display = 'none';
        resume.style.display = 'none';
        work.style.display = 'block';
        review.style.display = 'none';
        contact.style.display = 'none';
      }, 500);
    } else if (btns.classList.contains('review')) {
      innerLoader.style.left = '0';
      setTimeout(function () {
        innerLoader.style.left = '-100%';
        service.style.display = 'none';
        home.style.display = 'none';
        resume.style.display = 'none';
        work.style.display = 'none';
        review.style.display = 'block';
        contact.style.display = 'none';
      }, 500);
    } else if (btns.classList.contains('contact')) {
      innerLoader.style.left = '0';
      setTimeout(function () {
        innerLoader.style.left = '-100%';
        service.style.display = 'none';
        home.style.display = 'none';
        resume.style.display = 'none';
        work.style.display = 'none';
        review.style.display = 'none';
        contact.style.display = 'block';
      }, 500);
    }
  });
}

//  onclick page transition end

// work filter start
$(document).ready(function () {
  $(".filter-button").click(function () {
    var value = $(this).attr('data-filter');

    if (value == "all") {
      $('.filter').show('1000');
    }
    else {
      $(".filter").not('.' + value).hide('3000');
      $('.filter').filter('.' + value).show('3000');
    }
  });

});
// work filter end

// work page filter lightbox start
let items = document.querySelectorAll('.gallery_product');
let totalitem = items.length;
let lightbox = document.querySelector('.lightbox');
let image = document.querySelector('.light_img');
let close = document.querySelector('.close');
let text = document.querySelector('.caption');
let count = document.querySelector('.count');
let pb = document.querySelector('.prev');
let nb = document.querySelector('.next');
let index = 0;

for (let i = 0; i < totalitem; i++) {
  items[i].addEventListener('click', function () {
    index = i;
    toggleopen();
    changeItem();
  });
}

function toggleopen() {
  lightbox.classList.toggle('open');
}
function changeItem() {
  let imgsrc = items[index].querySelector('.filterImg img').getAttribute('src');
  image.src = imgsrc;
  let cap = items[index].querySelector('h4').innerHTML;
  text.innerHTML = cap;
  count.innerHTML = (index + 1) + ' of ' + totalitem;
}

nb.addEventListener('click', function () {
  if (index === totalitem - 1) {
    index = 0;
  } else {
    index++;

  }
  changeItem();
});

image.addEventListener('click', function () {
  if (index === totalitem - 1) {
    index = 0;
  } else {
    index++;

  }
  changeItem();
});

pb.addEventListener('click', function () {
  if (index === 0) {
    totalitem - 1;
  } else {
    index--;

  }
  changeItem();
});

lightbox.addEventListener('click', function (e) {
  if (e.target === lightbox || e.target === close) {
    toggleopen();
  }
});

// work page filter lightbox end

// work page filter btn active start
let filterbtns = document.querySelectorAll('.filterBtns button');

activeLinks(filterbtns, 'activeFilterBtn');

// work page filter btn active end


// review page carousel start
$(document).ready(function () {

  $('#carousel').owlCarousel({
    loop: true,
    dots: true,
    slideSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    items: 1,
    resonsiveClass: true,
    responsiveRefreshRate: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      1000: {
        items: 1
      },
      1200: {
        items: 1
      },
      1920: {
        items: 1
      }

    }

  });
  wow = new WOW();
  wow.init();

});
// review page carousel end

// home page typing text start
var typed = new Typed('.animateText', {
  strings: [
    'full stack developer',
    'web designer',
    'web developer',
    'Freelancer'
  ],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,

});
// home page typing text end

// google map start

let map;
let latAndLng = { lat: 23.810331, lng: 90.412521 }; 
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: latAndLng,
    zoom: 8,
  });
}

let beachMarker = new google.maps.Marker({
  position: latAndLng,
  map
});

// google map end
