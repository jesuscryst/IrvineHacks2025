
  document.addEventListener("DOMContentLoaded", function () {
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    
    // Initialize each popover with hover trigger
    popoverTriggerList.forEach(popoverTriggerEl => {
      new bootstrap.Popover(popoverTriggerEl, {
        trigger: 'hover'  // Change the trigger to 'hover'
      });
    });
  });

