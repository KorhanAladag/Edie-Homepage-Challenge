document.addEventListener('click', function (e) {
    navigateToTarget(e);
  });
  
  document.addEventListener('touchstart', function (e) {
    navigateToTarget(e);
  });
  
  function navigateToTarget(e) {
    if (e.target.tagName === 'A') {
      var targetId = e.target.getAttribute('href').substring(1);
      var targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
  
  function toggleDropdown() {
    var dropdownList = document.getElementById('dropdown-list');
    dropdownList.classList.toggle('show');
  }

  window.onclick = function (event) {
    if (!event.target.matches('.wrap-dropdown')) {
      var dropdowns = document.getElementsByClassName('dropdown-content');
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
