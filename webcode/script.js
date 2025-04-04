// Scratch card effect
const canvas = document.getElementById('scratchCanvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;

const scratchContent = document.getElementById("scratchContent");

// fill canvas with gray scratch surface
function initScratch() {
  ctx.fillStyle = "#999";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.globalCompositeOperation = 'destination-out';
}

canvas.addEventListener("mousedown", () => isDrawing = true);
canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mouseleave", () => isDrawing = false);
canvas.addEventListener("mousemove", draw);

function draw(e) {
  if (!isDrawing) return;
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  ctx.beginPath();
  ctx.arc(x, y, 20, 0, Math.PI * 2);
  ctx.fill();
}

// Pop-up logic
function openJoinPopup() {
  document.getElementById('popup').classList.remove('hidden');
}

function verifyJoin() {
  // mock verification (you can integrate Telegram Bot API later)
  alert("✅ Verified!");
  document.getElementById('popup').classList.add('hidden');
}

// Cashout logic
function showCashOut() {
  document.getElementById('cashout').classList.toggle('hidden');
}

function submitUPI() {
  const upi = document.getElementById('upi').value;
  const phone = document.getElementById('phone').value;
  if (!upi || !phone) {
    alert("Please fill both fields");
    return;
  }

  const entry = document.createElement('p');
  entry.innerText = UPI: ${upi} | Phone: ${phone};
  document.getElementById('upiList').appendChild(entry);
  document.getElementById('upi').value = "";
  document.getElementById('phone').value = "";
}

// Referral system
function copyReferral() {
  const ref = localStorage.getItem("refCode") || generateReferral();
  const refLink = ${window.location.origin}${window.location.pathname}?ref=${ref};
  navigator.clipboard.writeText(refLink);
  alert("Referral link copied: " + refLink);
}

function generateReferral() {
  const code = 'BW' + Math.floor(Math.random() * 100000);
  localStorage.setItem("refCode", code);
  return code;
}

function goTo(section) {
  alert("Coming soon: " + section);
}

// Detect referral
window.onload = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const ref = urlParams.get('ref');
  if (ref) {
    console.log("Referred by: ", ref);
    // Save for backend tracking if needed
  }
  initScratch();
};