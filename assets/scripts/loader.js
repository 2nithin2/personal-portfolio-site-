
   // Select the element by its ID
   const element1 = document.getElementById('loader');
   const element2 = document.getElementById('current_page');
   

   // Make the element visible
   element.style.visibility = 'visible';
   
   // After 2 seconds, hide the element again
   setTimeout(() => {
     element.style.visibility = 'hidden';
   }, 2000); // 2000 milliseconds = 2 seconds
   // Get references to the two elements

