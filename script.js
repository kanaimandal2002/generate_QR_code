document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generate-btn');
    generateBtn.addEventListener('click', generateQRCode);
});

function generateQRCode() {
    const inputText = document.getElementById('text-input').value.trim();
    
    if (!inputText) {
        alert("Please enter some text or a URL");
        return;
    }
    
    // Clear previous QR code
    const qrCodeElement = document.getElementById('qrcode');
    qrCodeElement.innerHTML = "";
    
    // Generate new QR code
    new QRCode(qrCodeElement, {
        text: inputText,
        width: 200,
        height: 200,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
}