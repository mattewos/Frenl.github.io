function handlePhoto(imageId, inputFileId) {
    const fileInput = document.getElementById(inputFileId);

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
      const img = new Image();
      img.src = e.target.result;

      const portfolioImage = document.getElementById(imageId);
      portfolioImage.src = img.src;

      localStorage.setItem(imageId + 'Src', img.src);
    };

    const uploadLocation = ''; // Change this if needed
    const filename = file.name;

    console.log('File will be uploaded to:', uploadLocation + filename);

    reader.readAsDataURL(file);
    }
  
    // Load the image source from local storage on page load for Nature
    document.addEventListener('DOMContentLoaded', function() {
      const savedImageSrc = localStorage.getItem('portfolioImageNature1Src');
      if (savedImageSrc) {
        const portfolioImage = document.getElementById('portfolioImageNature1');
        portfolioImage.src = savedImageSrc;
      }
    });
  
    // Load the image source from local storage on page load for Teaching
    document.addEventListener('DOMContentLoaded', function() {
      const savedImageSrc = localStorage.getItem('portfolioImageTeaching1Src');
      if (savedImageSrc) {
        const portfolioImage = document.getElementById('portfolioImageTeaching1');
        portfolioImage.src = savedImageSrc;
      }
    });

    // Load the image source from local storage on page load for Teaching
    document.addEventListener('DOMContentLoaded', function() {
      const savedImageSrc = localStorage.getItem('portfolioImageNature2Src');
      if (savedImageSrc) {
        const portfolioImage = document.getElementById('portfolioImageNature2');
        portfolioImage.src = savedImageSrc;
      }
    });

    // Load the image source from local storage on page load for Teaching
    document.addEventListener('DOMContentLoaded', function() {
      const savedImageSrc = localStorage.getItem('portfolioImageSocial1Src');
      if (savedImageSrc) {
        const portfolioImage = document.getElementById('portfolioImageSocial1');
        portfolioImage.src = savedImageSrc;
      }
    });

// Load the image source from local storage on page load for Teaching
document.addEventListener('DOMContentLoaded', function() {
      const savedImageSrc = localStorage.getItem('portfolioImageTeaching2Src');
      if (savedImageSrc) {
        const portfolioImage = document.getElementById('portfolioImageTeaching2');
        portfolioImage.src = savedImageSrc;
      }
    });

    // Load the image source from local storage on page load for Teaching
    document.addEventListener('DOMContentLoaded', function() {
      const savedImageSrc = localStorage.getItem('portfolioImageNature3Src');
      if (savedImageSrc) {
        const portfolioImage = document.getElementById('portfolioImageNature3');
        portfolioImage.src = savedImageSrc;
      }
    });

    // Load the image source from local storage on page load for Teaching
    document.addEventListener('DOMContentLoaded', function() {
      const savedImageSrc = localStorage.getItem('portfolioImageSocial2Src');
      if (savedImageSrc) {
        const portfolioImage = document.getElementById('portfolioImageSocial2');
        portfolioImage.src = savedImageSrc;
      }
    });

    // Load the image source from local storage on page load for Teaching
    document.addEventListener('DOMContentLoaded', function() {
      const savedImageSrc = localStorage.getItem('portfolioImageSocial3Src');
      if (savedImageSrc) {
        const portfolioImage = document.getElementById('portfolioImageSocial3');
        portfolioImage.src = savedImageSrc;
      }
    });

    // Load the image source from local storage on page load for Teaching
    document.addEventListener('DOMContentLoaded', function() {
      const savedImageSrc = localStorage.getItem('portfolioImageTeaching3Src');
      if (savedImageSrc) {
        const portfolioImage = document.getElementById('portfolioImageTeaching3');
        portfolioImage.src = savedImageSrc;
      }
    });
