const shortBtn = document.getElementById('short-btn');
const reloadBtn = document.getElementById('reload-btn');

shortBtn.addEventListener('click', shortenUrl);

function shortenUrl() {
    var originalUrl = document.getElementById('originalUrl').value;
    var apiUrl = "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(originalUrl);
    var shortenedUrlTextarea = document.getElementById('shortenedUrl');

    fetch(apiUrl).then(response => response.text()).then(data => {
        shortenedUrlTextarea.value = data;
        if(shortenedUrlTextarea.value === "Error"){
            shortenedUrlTextarea.value = "Error : Unable to shorten URL!";
        }
    }).catch(error => {
        shortenedUrlTextarea.value = "Error : Unable to shorten URL!";
    });
}

reloadBtn.addEventListener('click', () => {
    location.reload();
});