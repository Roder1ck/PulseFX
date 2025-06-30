const images = document.querySelectorAll('.carousel-img');
let current = 0;

function showImage(idx) {
    images.forEach((img, i) => {
        img.style.display = i === idx ? 'block' : 'none';
    });
}

document.querySelector('.carousel-btn.prev').onclick = () => {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
};
document.querySelector('.carousel-btn.next').onclick = () => {
    current = (current + 1) % images.length;
    showImage(current);
};