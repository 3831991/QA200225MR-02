const frame = document.getElementById("frame");

fetch("https://api.shipap.co.il/contact")
.then(res => res.json())
.then(data => {
    for (const item of data) {
        frame.innerHTML += `
            <div>
                <p><b>תאריך:</b> ${item.createTime}</p>
                <p><b>שם הפונה:</b> ${item.fullName}</p>
                <p><b>טלפון:</b> ${item.phone}</p>
                <p><b>אימייל:</b> ${item.email}</p>
                <p><b>הודעה:</b> ${item.message}</p>
            </div>`;
    }
});