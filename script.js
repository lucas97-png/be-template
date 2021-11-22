
$(".header-carousel").owlCarousel({
    autoPlay : 3000,
    stopOnHover : true,
    navigation:true,
    paginationSpeed : 1000,
    goToFirstSpeed : 2000,
    singleItem : true,
    autoHeight : true,
  });

  const gallery = document.querySelectorAll('.gallery-slide');
  const webDesign = document.querySelectorAll('.gallery-slide.webdesign');
  const eCommerce = document.querySelectorAll('.gallery-slide.ecommerce');
  const cms = document.querySelectorAll('.gallery-slide.cms');
  const logo = document.querySelectorAll('.gallery-slide.logo');
  
  document.querySelector('.all').addEventListener('click',showAll);
  
  function showAll() {
    gallery.forEach(e => e.style.display = "block");
  };
  function hideAll() {
    gallery.forEach(e => e.style.display = "none");
  }



  document.querySelector('button.webdesign').addEventListener('click', showWeb);

  function showWeb() {
      hideAll();
      webDesign.forEach(e => e.style.display = "block");
  }

  document.querySelector('button.ecommerce').addEventListener('click', showCommerce);

  function showCommerce() {
      hideAll();
      eCommerce.forEach(e => e.style.display = "block");
  }

  document.querySelector('button.cms').addEventListener('click', showCms)

  function showCms() {
    hideAll();
    cms.forEach(e => e.style.display = "block");
  }

  document.querySelector('button.logo').addEventListener('click', showLogo)

  function showLogo() {
    hideAll();
    logo.forEach(e => e.style.display = "block");
  }


  const toggleOn = document.querySelector('.on');
  const toggleOff = document.querySelector('.off');

  function toggleNav() {
    document.querySelector('.nav-menu').classList.add('active');
    toggleOff.classList.add('active');
    toggleOn.style.display = "none";
  }

  function toggleOfffunction() {
    document.querySelector('.nav-menu').classList.remove('active');
    toggleOff.classList.remove('active');
    toggleOn.style.display = "block";
  }

  toggleOn.addEventListener('click', toggleNav);
  toggleOff.addEventListener('click', toggleOfffunction)