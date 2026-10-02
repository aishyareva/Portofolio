/* Fitur 2. Variabel let dan const, const untuk nilai tetap dan let untuk nilai yang bisa berubah. */
const OWNER_NAME = "Aishya Reva Anastasya";
const OWNER_NICKNAME = "Aishya";
const SHOW_WELCOME_ALERT = true;
let clickCount = 0;

const hobbyTips = [
    "Sketch something tiny every day. Even five minutes counts.",
    "Herbs like basil and mint are beginner friendly if you want to start a mini garden.",
    "Slow practice on the violin beats rushing the hard part. Trust the process.",
    "Try a new brush or texture pack in your digital art. Small tweaks, big vibes."
];

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


/* Fitur 1. Output console.log() dan alert(), menampilkan pesan di console dan popup saat halaman selesai dimuat. */
window.addEventListener("load", function () {
    console.log("Page loaded. Welcome to " + OWNER_NAME + "'s portfolio.");
    if (SHOW_WELCOME_ALERT) {
        alert("Welcome to my little corner of the internet!");
    }
});


/* Fitur 3. Fungsi dengan parameter dan return, buildGreeting() menerima name dan mengembalikan teks sapaan. */
function buildGreeting(name) {
    return "Hey, " + name + " here! Thanks for stopping by.";
}


function sayHi() {
    trackClick("sayHi");
    alert(buildGreeting(OWNER_NICKNAME));
}


function trackClick(source) {
    clickCount = clickCount + 1;
    console.log("Button used: " + source + " | total clicks: " + clickCount);
    document.getElementById("clickCount").innerHTML = clickCount;
}


function countCourses() {
    trackClick("countCourses");

    const total = document.querySelectorAll(".course-row").length;

    /* Fitur 5. getElementById dan innerHTML, isi elemen diganti dengan jumlah mata kuliah hasil hitungan. */
    document.getElementById("courseCount").innerHTML = total + " classes this week";
    document.getElementById("loadNote").innerHTML = describeLoad(total);
}


function describeLoad(total) {
    /* Fitur 6. Percabangan if/else, pesan berbeda tergantung jumlah mata kuliah. */
    if (total >= 10) {
        return "Packed week, but we make it work.";
    } else {
        return "Pretty chill week, plenty of room for hobbies.";
    }
}


function showHobbyTip() {
    /* Fitur Lanjutan 2. Fungsi Custom lewat onclick, fungsi ini dipanggil tombol dan memilih satu tips hobi acak. */
    trackClick("showHobbyTip");

    const index = Math.floor(Math.random() * hobbyTips.length);
    document.getElementById("hobbyTip").innerHTML = hobbyTips[index];
}


function showTodayPlan() {
    trackClick("showTodayPlan");

    const today = new Date().getDay();
    const rows = document.querySelectorAll('.course-row[data-day="' + today + '"]');
    let message = "";

    /* Fitur Lanjutan 5. console.log untuk Debugging, mencatat indeks hari dan jumlah kelas yang ditemukan. */
    console.log("Day index: " + today + " | classes found: " + rows.length);

    /* Fitur Lanjutan 4. Percabangan if/else, hari tanpa kelas dan hari kuliah menampilkan pesan yang berbeda. */
    if (rows.length === 0) {
        message = "<b>" + dayNames[today] + "</b>: no classes today. Perfect time to draw, water the plants, or practice violin.";
    } else {
        message = "<b>" + dayNames[today] + "</b>: " + rows.length + " class(es) on the list.<ul>";
        rows.forEach(function (row) {
            const name = row.querySelector(".course-name").textContent;
            const time = row.querySelector(".course-time").textContent;
            message += "<li>" + name + " (" + time + ")</li>";
        });
        message += "</ul>";
    }

    /* Fitur Lanjutan 3. getElementById dan innerHTML, panel hari ini diisi ulang secara dinamis. */
    document.getElementById("todayPanel").innerHTML = message;
}


function toggleTheme() {
    trackClick("toggleTheme");

    /* Fitur 7. Tombol ganti tema dengan classList.toggle(), menambah atau menghapus class theme-night pada body. */
    const isNight = document.body.classList.toggle("theme-night");

    const label = document.getElementById("themeLabel");
    if (isNight) {
        label.innerHTML = "Switch to Day Sky";
    } else {
        label.innerHTML = "Switch to Night Aqua";
    }
}
