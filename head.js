document.addEventListener('DOMContentLoaded', function() {
  let menuIcon = document.querySelector('.menu-icon');
  let middleHeader = document.querySelector('.middle-header');
  let windowWidth = window.innerWidth;

  // Check screen width and show/hide the menu icon as needed
  function handleResize() {
    windowWidth = window.innerWidth;

    if (windowWidth <= 967) {
      if (menuIcon.classList.contains('fa-x')) {
        middleHeader.style.display = 'block';
      } else {
        middleHeader.style.display = 'none';
      }
    } else {
      menuIcon.classList.remove('fa-x'); // Remove 'fa-x' class for larger screens
      middleHeader.style.display = 'block'; // Hide middle-header for larger screens
    }
  }

  // Initial setup
  handleResize();

  // Listen for window resize events
  window.addEventListener('resize', handleResize);

  menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('fa-x');
    handleResize();
  });
});
