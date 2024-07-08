document.addEventListener("DOMContentLoaded", function() {
    const valueElement = document.querySelector(".value");
    const incrementButton = document.querySelector(".increment");
    const decrementButton = document.querySelector(".decrement");
    
    let counter = 0;
    
    // Initial display of counter value
    valueElement.textContent = counter;
    
    // Increment button click handler
    incrementButton.addEventListener("click", function() {
      counter++;
      valueElement.textContent = counter;
    });
    
    // Decrement button click handler
    decrementButton.addEventListener("click", function() {
      counter--;
      valueElement.textContent = counter;
    });
  });