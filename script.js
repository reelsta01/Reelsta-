async function downloadReel() {
    let videoUrl = document.getElementById("videoUrl").value;
    if (!videoUrl.includes("instagram.com/reel/")) { alert("Please enter a valid Instagram Reel URL."); return; }
    try {
        let response = await fetch(`https://api.akarsh.me/instagram?url=${encodeURIComponent(videoUrl)}`);
        let data = await response.json();
        if (data.success) {
            document.getElementById("videoPreview").innerHTML = `<video src="${data.video}" controls width="100%"></video><br><a href="${data.video}" download class="download-btn">Download Reel</a>`;
        } else { alert("Error fetching video. Try again."); }
    } catch (error) { console.error(error); alert("Failed to fetch video."); }
}
function toggleDarkMode() { document.body.classList.toggle("dark-mode"); }