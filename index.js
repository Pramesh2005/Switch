
    const day = document.getElementById("day");
    const btnSubmit = document.getElementById("btnSubmit");
    const output = document.getElementById("output");

    btnSubmit.onclick = function() {
        if (day.value.trim().toUpperCase() === "SATURDAY") {
            output.textContent = "Today is Holiday";
        } else {
            output.textContent = "Today is not Holiday";
        }
    }
