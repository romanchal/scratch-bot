// login.html: Handle secret code login
function login() {
    const key = document.getElementById('adminKey').value;
    if (key === "botworld123") {
      localStorage.setItem("adminAuth", "true");
      window.location.href = "dashboard.html";
    } else {
      alert("❌ Wrong secret code");
    }
  }
  
  // dashboard.html: Check auth before showing dashboard
  function checkAdminAuth() {
    if (localStorage.getItem("adminAuth") !== "true") {
      window.location.href = "login.html";
    }
  }
  
  // dashboard.html: Logout handler
  function logout() {
    localStorage.removeItem("adminAuth");
    window.location.href = "login.html";
  }
  
  // dashboard.html: Load mock referral and UPI data
  function loadDashboard() {
    checkAdminAuth();
  
    // You can replace these with real data from backend
    document.getElementById("refCount").innerText = 26;
  
    const sampleUPIs = [
      { upi: "john@upi", phone: "9998877665" },
      { upi: "ravi@ybl", phone: "8822112233" },
      { upi: "megha@paytm", phone: "7011234567" }
    ];
  
    const upiContainer = document.getElementById("upiData");
    upiContainer.innerHTML = "";
    sampleUPIs.forEach(entry => {
      const p = document.createElement("p");
      p.innerText = UPI: ${entry.upi} | Phone: ${entry.phone};
      upiContainer.appendChild(p);
    });
  }