

console.log("Message Saathi started!");


const messageInput = document.getElementById("messageInput");
const charCount = document.getElementById("charCount");
const clearBtn = document.getElementById("clearBtn");
const sampleButtons = document.querySelectorAll(".sample-chip");

function updateCharCount() {
  charCount.textContent =
    `${messageInput.value.length} / 5000`;
}

messageInput.addEventListener("input", updateCharCount);

clearBtn.addEventListener("click", () => {
  messageInput.value = "";
  updateCharCount();
  messageInput.focus();
});

const samples = {
  bill: "Your electricity bill is due on 28 October. Please pay before the due date to avoid late fees.",

  bank: "Bank alert: A transaction of Rs. 500 was made from your account. If this was not you, contact your bank through its official app.",

  scam: "URGENT! Your bank account will be blocked in 10 minutes. Share your OTP immediately to keep your account active."
};

sampleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const sampleName = button.dataset.sample;

    messageInput.value = samples[sampleName] || "";
    updateCharCount();
    messageInput.focus();
  });
});

