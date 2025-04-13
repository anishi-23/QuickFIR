document.addEventListener('DOMContentLoaded', function() {
    // Form submission
    const reportForm = document.getElementById('report-form');
    
    if (reportForm) {
      reportForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const incidentType = document.getElementById('incident-type').value;
        const location = document.getElementById('location').value;
        const description = document.getElementById('description').value;
        
        // Simulate form submission (would be an API call in real implementation)
        console.log({
          name,
          phone,
          email,
          incidentType,
          location,
          description
        });
        
        // Show success message
        showToast('Report submitted successfully! An officer will contact you soon.');
        
        // reset the form
        reportForm.reset();
      });
    }
    
    // lawyers information
    const lawyerSearch = document.getElementById('lawyer-search');
    
    if (lawyerSearch) {
      lawyerSearch.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const lawyerItems = document.querySelectorAll('.lawyer-item');
        
        lawyerItems.forEach(item => {
          const lawyerName = item.querySelector('h3').textContent.toLowerCase();
          const lawyerLocation = item.querySelector('.lawyer-info p').textContent.toLowerCase();
          
          if (lawyerName.includes(searchTerm) || lawyerLocation.includes(searchTerm)) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    }
    
    // Search functionality for police stations
    const stationSearch = document.getElementById('station-search');
    
    if (stationSearch) {
      stationSearch.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const stationItems = document.querySelectorAll('.station-item');
        
        stationItems.forEach(item => {
          const stationName = item.querySelector('h3').textContent.toLowerCase();
          const stationLocation = item.querySelector('.station-info p').textContent.toLowerCase();
          
          if (stationName.includes(searchTerm) || stationLocation.includes(searchTerm)) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    }
    
    // Toast notification function
    function showToast(message) {
      // Create toast element if it doesn't exist
      let toast = document.querySelector('.toast');
      
      if (!toast) {
        toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `
          <i class="fa-solid fa-check-circle"></i>
          <span>${message}</span>
        `;
        document.body.appendChild(toast);
      } else {
        toast.querySelector('span').textContent = message;
      }
      
      // Show toast
      setTimeout(() => {
        toast.classList.add('show');
      }, 100);
      
      // Hide toast after 3 seconds
      setTimeout(() => {
        toast.classList.remove('show');
      }, 3000);
    }
  });