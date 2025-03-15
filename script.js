async function downloadReel() {
    const url = document.getElementById("reelUrl").value;
    if (!url) {
        alert("Please enter a valid Instagram Reel URL");
        return;
    }
    
    const apiUrl = `https://rapidapi.com/codecrest8/api/instagram-reels-downloader2?url=${encodeURIComponent(url)}`;
    
    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'codecrest8.api.rapidapi.com',
                'X-RapidAPI-Key': 'YOUR_API_KEY_HERE'
            }
        });
        
        const data = await response.json();
        
        if (data.success) {
            document.getElementById("result").innerHTML = `<video src="${data.download_url}" controls></video>`;
        } else {
            alert("Failed to fetch video. Try again.");
        }
    } catch (error) {
        console.error(error);
        alert("Error fetching data.");
    }
}
