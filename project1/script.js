// جلب العناصر
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const closeButton = document.getElementsByClassName("close")[0];

// تفعيل عرض الصورة عند النقر
document.querySelectorAll(".project-card img").forEach((img) => {
    img.onclick = function () {
        modal.style.display = "flex";
        modalImage.src = this.src;
        captionText.innerHTML = this.alt;
    };
});

// إغلاق المودال عند النقر على الزر إغلاق
closeButton.onclick = function () {
    modal.style.display = "none";
};

// إغلاق المودال عند النقر خارج الصورة
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
