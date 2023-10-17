// Load the image source from local storage on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedImageSrc = localStorage.getItem('portfoliImageSrc');
    if (savedImageSrc) {
      const portfolioImage = document.getElementById('portfoliImage');
      portfolioImage.src = savedImageSrc;
    }
  });

  function handlePhoto() {
    const fileInput = document.getElementById('photFileInput');

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
      const img = new Image();
      img.src = e.target.result;

      // Find the portfolio-item element and update its image
      const portfolioImage = document.getElementById('portfoliImage');
      portfolioImage.src = img.src;

      // Save the image source to local storage
      localStorage.setItem('portfoliImageSrc', img.src);
    };

    // Modify the upload location here if needed
    const uploadLocation = ''; // Change this if needed
    const filename = file.name;

    // Log the upload location and filename for demonstration purposes
    console.log('File will be uploaded to:', uploadLocation + filename);

    reader.readAsDataURL(file);
  }