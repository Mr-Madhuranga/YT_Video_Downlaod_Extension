function addDownloadButton() {
  if (document.getElementById("my-download-btn")) return;

  const container = document.querySelector("#above-the-fold #title");
  if (!container) return;

  const button = document.createElement("button");
  button.id = "my-download-btn";
  button.innerText = "Download Video";
  button.style.cssText = "margin-left:10px; padding:6px 12px; background:#ff0000; color:#fff; border:none; border-radius:4px; cursor:pointer; font-weight:bold;";

  button.onclick = () => {
    const videoUrl = window.location.href;
    const downloadUrl = "https://www.y2mate.com/youtube/" + encodeURIComponent(videoUrl);
    window.open(downloadUrl, "_blank");
  };

  container.appendChild(button);
}

// Observe changes to the page to handle YouTube dynamic loading
const observer = new MutationObserver(addDownloadButton);
observer.observe(document.body, { childList: true, subtree: true });
