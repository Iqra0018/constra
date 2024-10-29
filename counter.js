function animateCounter() {
    const counters = document.querySelectorAll('.Countup');
    const speed = 3000; // Animation speed
    const delay = 100; // Animation delay
  
    counters.forEach((counter, index) => {
      const target = parseInt(counter.getAttribute('data-target'));
      let count = 0;
  
      const updateCount = () => {
        const increment = Math.ceil(target / 100);
        count += increment;
  
        if (count <= target) {
          counter.textContent = count;
          setTimeout(updateCount, 50);
        } else {
          counter.textContent = target;
        }
      };
  
      setTimeout(() => {
        updateCount();
      }, index * delay);
    });
  }
  
  document.addEventListener('DOMContentLoaded', animateCounter);
  