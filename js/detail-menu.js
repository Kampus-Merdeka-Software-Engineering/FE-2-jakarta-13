// membuat fungsi submit review
async function submitReview(){
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const rating = document.querySelector('input[name="rating"]:checked').value;
  const review = document.getElementById('comment').value;

  sendReviewToServer(name,email,rating,review);
};

// membuat fungsi mengirim hasil review ke server
async function sendReviewToServer(name,email,rating,review){
  const response = await fetch('http://localhost:3300/sendReview', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name,email,rating,review })
  });

  const data = await response.json();

  if(response.ok){
    console.log("Review has been sent!");
    setTimeout(() => {
      location.reload();
    }, 1000);
  }
  else {
    console.log("Failed to sent review!!");
  }
}

// membuat event pada tombol submit review
const reviewForm = document.getElementById('review-form');

reviewForm.addEventListener('submit', (event) => {
  event.preventDefault();
  submitReview();
});

// membuat event ketika halaman di load untuk menampilkan data review dari database
document.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:3300/getReview')
  .then(response => response.json())
  .then(data => {
    if (data) {
      displayReview(data.review);
    }
    else{
      console.error('Error retrieving review:', data);
    }
  })
  .catch(error => console.error('Error:', error));
});

// membuat fungsi display review
function displayReview(reviews){
  const reviewContainer = document.getElementById('review-container');

  reviews.forEach(review => {
    const reviewElement = document.createElement('div');

    const starRating = getStarRating(review.rating);

    reviewElement.innerHTML = `
    <div id="review-container" class="list">
      <div id="review-list">
        <div class="identity">
          <h3>${review.name}</h3>
          <h4>${review.email}</h4>
        </div>
        <div class="rating-data">${starRating}</div>
        <div class="review-data">${review.review}</div>
    </div>
    `;

    reviewContainer.appendChild(reviewElement);
  });
}

// membuat fungsi untuk mengonversi nilai rating menjadi star rating
function getStarRating(rating){
  const maxRating = 5; //jumlah maksimal bintang
  const filledStars = Math.floor(rating); // jumlah bintang kuning
  const remainingStars = maxRating - filledStars; // jumlah bintang putih

  let starsRating = `<div style="color: #ff8c00;">${'&#9733'.repeat(filledStars)};</div>`;

  if (remainingStars > 0) {
    starsRating += `<div>${'&#9733'.repeat(remainingStars)};</div>`;
  }

  return starsRating;
}
