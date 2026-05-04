function wyczyscKoszyk() {
    localStorage.removeItem('mojKoszyk');
    alert("Dziękujemy! Koszyk zostal wyczyszczony.");
    window.location.href = "index.html";
}