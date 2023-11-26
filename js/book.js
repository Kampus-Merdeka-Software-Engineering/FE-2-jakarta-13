// Memulai Navbar
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("tombol-about-us").addEventListener("click", function () {
      window.location.href = "main-page.html#about-us";
    });
  });
  

//memulai calculate
function calculateTotal() {
    // Mendapatkan nilai input dari formulir
    var name = document.getElementById('name').value;
    var roomType = document.getElementById('roomType').value;
    var quantity = parseInt(document.getElementById('quantity').value);

    // Harga per kamar berdasarkan tipe
    var roomPrices = {
        junior: 100,
        executive: 120,
        super: 140
    };

    // Pajak dan biaya layanan dalam persentase
    var taxRate = 0.10; // 10%
    var serviceChargeRate = 0.09; // 9%

    // Menghitung total pemesanan tanpa pajak dan biaya layanan
    var subtotal = roomPrices[roomType] * quantity;

    // Menghitung pajak dan biaya layanan
    var tax = subtotal * taxRate;
    var serviceCharge = subtotal * serviceChargeRate;

    // Menghitung total pemesanan termasuk pajak dan biaya layanan
    var total = subtotal + tax + serviceCharge;

    // Menampilkan hasil perhitungan
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        <div class="invoice">
            <p>Dear ${name}, the total estimated cost is</p>
            <p><strong>Room Type:</strong> ${roomType}</p>
            <p><strong>Quantity:</strong> ${quantity} room(s)</p>
            <p><strong>Subtotal:</strong> $${subtotal.toFixed(2)}</p>
            <p><strong>Tax (10%):</strong> $${tax.toFixed(2)}</p>
            <p><strong>Service Charge (9%):</strong> $${serviceCharge.toFixed(2)}</p>
            <hr>
            <p><strong>Total:</strong> $${total.toFixed(2)}</p>
        </div>
    `;
    
    // Menambahkan CSS untuk membuat tampilan lebih rapi
    resultElement.style.border = '1px solid #ccc';
    resultElement.style.padding = '15px';
    resultElement.style.marginTop = '20px';
    
    // Log untuk memverifikasi bahwa fungsi dijalankan
    console.log('Calculate button clicked!');
}
