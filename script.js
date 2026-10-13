javascript
function semangat() {
    const pesan = document.getElementById("pesanSemangat");

    const pilihan = [
        "WAWAAA, KAMU PASTI BISA! 🩵🎤<br>Aku percaya sama kamu. Tarik napas, senyum, dan lakukan yang terbaik! 🫂",

        "PELUUUK JAUH DARI AULIAAA! 🫂💙<br>Kamu sudah berusaha sejauh ini. Sekarang, jangan lupa istirahat juga, yaa!",

        "UNTUK MC TERHEBAT HARI ESOK! 🎤✨<br>Nggak perlu sempurna, cukup persiapkan diri dan percaya sama kemampuanmu!",

        "WAWA, KAMU LEBIH HEBAT DARIPADA YANG KAMU KIRA! ☁️🩵<br>Satu per satu saja. Kamu nggak harus menyelesaikan semuanya sekaligus.",

        "PESAN DARI AULIA 💌<br>Kalau hari ini melelahkan, semoga besok membawa senyuman baru. I'm rooting for you, Wawa! 💙"
    ];

    const acak = Math.floor(Math.random() * pilihan.length);

    pesan.innerHTML = pilihan[acak];
    buatHati(20);
}

function buatHati(jumlah) {
    for (let i = 0; i < jumlah; i++) {
        const hati = document.createElement("span");

        hati.className = "heart";
        hati.textContent = ["💙", "🩵", "☁️", "✨"][
            Math.floor(Math.random() * 4)
        ];

        hati.style.left = Math.random() * 100 + "vw";
        hati.style.fontSize = (16 + Math.random() * 18) + "px";
        hati.style.animationDuration = (3 + Math.random() * 2) + "s";

        document.body.appendChild(hati);

        setTimeout(() => hati.remove(), 5500);
    }
}