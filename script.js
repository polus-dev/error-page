const urlParams = new URLSearchParams(window.location.search);
document.querySelector("#error-status-code").textContent = urlParams.get("status_code") || 500;
document.querySelector("#error-text").textContent = urlParams.get("text") || "Something went wrong..."
document.querySelector("#error-request-id").textContent = urlParams.get("request_id") ? `Request-id: ${urlParams.get("request_id")}` : ""
document.querySelector("#back-redirect-link").href = urlParams.get("back_redirect") || "/"