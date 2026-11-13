
document.querySelectorAll(".approve").forEach(button => {
    button.addEventListener("click", function () {
        const card = this.closest(".leave-card");

        const status = card.querySelector(".pending");

        if (status) {
            status.textContent = "Approved";
            status.className = "approved";

            card.querySelector(".buttons").remove();

            alert("Leave Approved Successfully!");
        }
    });
});

document.querySelectorAll(".reject").forEach(button => {
    button.addEventListener("click", function () {
        const card = this.closest(".leave-card");

        const status = card.querySelector(".pending");

        if (status) {
            status.textContent = "Rejected";
            status.className = "rejected";

            card.querySelector(".buttons").remove();

            alert("Leave Rejected!");
        }
    });
});
