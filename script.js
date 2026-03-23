function show(id) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function order(service) {
    const phone = "21627049943";
    const msg = encodeURIComponent("مرحباً Kriaa Services، أريد طلب خدمة: " + service);
    window.open(`https://wa.me/${phone}?text=${msg}`, "_blank");
}

function whatsapp() {
    window.open("https://wa.me/21627049943", "_blank");
}

function desc(text) {
    // استخدمنا SweetAlert أو Alert عادية بشكل منسق
    alert("تفاصيل الخدمة:\n" + text);
}

document.addEventListener("DOMContentLoaded", function() {
    show('home');
});
