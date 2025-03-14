document.addEventListener("DOMContentLoaded", function () {
    const audioPlayers = document.querySelectorAll("audio");

    audioPlayers.forEach(player => {
        player.addEventListener("play", () => {
            audioPlayers.forEach(p => {
                if (p !== player) {
                    p.pause();
                }
            });
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');
    const homeButton = document.querySelector('a[href="#home"]');
    const tracks = document.querySelectorAll('.track');

    searchButton.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase().trim();

        tracks.forEach(track => {
            const title = track.querySelector('h2').innerText.toLowerCase();
            const artist = track.querySelector('p').innerText.toLowerCase();

            if (title.includes(query) || artist.includes(query)) {
                track.style.display = 'block';
            } else {
                track.style.display = 'none';
            }
        });
    });

    searchInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            searchButton.click();
        }
    });

    homeButton.addEventListener('click', () => {
        searchInput.value = '';
        tracks.forEach(track => {
            track.style.display = 'block';
        });
    });
});
document.getElementById('contactBtn').addEventListener('click', function () {
    alert('Contact at: taranjeetsingh7347@gmail.com');
});
document.getElementById('aboutBtn').addEventListener('click', function () {
    alert('This is a music player created by students of CSE: Bobby and Taran.');
});
