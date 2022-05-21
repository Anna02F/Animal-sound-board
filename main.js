const sounds = ["rooster", "hen", "cow", "horse", "sheep", "goat", "pig"];
const buttonsContainer = document.querySelector("#buttons");

const fragment = document.createDocumentFragment();

sounds.forEach((sound) => {
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.style.backgroundImage = `url('images/${sound}.png')`;

    fragment.appendChild(btn);
    buttonsContainer.appendChild(fragment);

    btn.addEventListener("click", (e) => {
        stop();
        document.querySelector(`#${sound}`).play();
    });
});

function stop() {
    sounds.forEach((sound) => {
        const song = document.querySelector(`#${sound}`);
        song.pause();
        song.currentTime = 0;
    });
}
