// 1. Pobieramy aktualny koszyk z localStorage. 
// Jeśli go tam nie ma (bo to pierwsze wejście na stronę), tworzymy pustą tablicę [].
let koszyk = JSON.parse(localStorage.getItem('mojKoszyk')) || [];

// 2. Tworzymy funkcję, która odpali się po kliknięciu "Dodaj do koszyka"
function dodajDoKoszyka(event) {
    // 'event.target' to dokładnie ten przycisk, który został kliknięty
    const przycisk = event.target;

    // 3. Wyciągamy dane o produkcie z atrybutów HTML (data-id, data-name, data-price)
    const id = przycisk.getAttribute('data-id');
    const nazwa = przycisk.getAttribute('data-name');
    // Używamy parseFloat, żeby zamienić tekst ceny (np. "2.50") na prawdziwą liczbę, 
    // co ułatwi Studentowi B późniejsze liczenie sumy!
    const cena = parseFloat(przycisk.getAttribute('data-price'));

    // 4. Tworzymy z tych danych obiekt reprezentujący nasz produkt
    const produkt = {
        id: id,
        nazwa: nazwa,
        cena: cena
    };

    // 5. Wrzucamy nasz nowy produkt do tablicy 'koszyk'
    koszyk.push(produkt);

    // 6. Zapisujemy zaktualizowaną tablicę z powrotem do pamięci przeglądarki (localStorage).
    // Musimy użyć JSON.stringify, ponieważ localStorage potrafi trzymać tylko tekst, a nie tablice obiektów.
    localStorage.setItem('mojKoszyk', JSON.stringify(koszyk));

    // 7. Mały feedback dla użytkownika
    alert(`Dodano: ${nazwa} do koszyka!`);
}

// 8. Podpinamy naszą funkcję pod wszystkie przyciski na stronie
// Znajdujemy wszystkie elementy, które mają klasę '.add-to-cart-btn'
const przyciskiDodawania = document.querySelectorAll('.add-to-cart-btn');

// Przechodzimy przez każdy znaleziony przycisk i "nasłuchujemy" kliknięcia
przyciskiDodawania.forEach(przycisk => {
    przycisk.addEventListener('click', dodajDoKoszyka);
});