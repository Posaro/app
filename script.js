function toggleGoldSection() {
    const goldType = document.getElementById("goldType").value;
    document.getElementById("processedGold").classList.toggle("hidden", goldType !== "processed");
    document.getElementById("rawGold").classList.toggle("hidden", goldType !== "raw");
}

function calculatePrice() {
    const karat = parseInt(document.getElementById("karat").value);
    const weight = parseFloat(document.getElementById("weight").value);
    if (isNaN(weight) || weight <= 0) {
        alert("Ingrese un peso válido.");
        return;
    }

    const basePrice = 150;
    const pricePerGram = (karat / 24) * basePrice;
    const totalPrice = pricePerGram * weight;

    document.getElementById("processedResult").textContent = `Precio: S/ ${totalPrice.toFixed(2)}`;
    document.getElementById("sendToWhatsApp").classList.remove("hidden");
}

function calculateRawPrice() {
    const rawPrices = { 
        "venoso": 700, 
        "semi_venoso": 500, 
        "escarchado": 350, 
        "semi_escarchado": 200 
    };
    
    const rawType = document.getElementById("rawType").value;
    const weight = parseFloat(document.getElementById("rawWeight").value);
    if (isNaN(weight) || weight <= 0) {
        alert("Ingrese un peso válido.");
        return;
    }

    const totalPrice = rawPrices[rawType] * weight;

    document.getElementById("rawResult").textContent = `Precio: S/ ${totalPrice.toFixed(2)}`;
    document.getElementById("sendToWhatsApp").classList.remove("hidden");
}

function sendToWhatsApp() {
    let message = "";
    if (!document.getElementById("processedGold").classList.contains("hidden")) {
        message = document.getElementById("processedResult").textContent;
    } else {
        message = document.getElementById("rawResult").textContent;
    }

    const phoneNumber = "961223776";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}
