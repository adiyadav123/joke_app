const url =
  "https://v2.jokeapi.dev/joke/Programming,Dark?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
const joke = document.getElementById("joke");
const emoji = document.getElementById("emoji");
const button = document.getElementById("but");
const add_emoji = document.getElementById("sug");
let emojis = ["😅", "😁", "😆", "🤣", "😹", "😎", "😉"];
let default_jokes = [
  "Why do programmers prefer dark mode? Because light attracts bugs!",
  "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25!",
  "Why do programmers hate nature? It has too many bugs.",
  "Why did the programmer quit his job? Because he didn't get arrays.",
  "Why do programmers prefer Linux? Because it's open-source for a kernel.",
  "Why do programmers always get Christmas and Halloween mixed up? Because Oct 31 == Dec 25!",
  "Why do programmers like UNIX? unzip, strip, touch, finger, grep, mount, fsck, more, yes, fsck, fsck!",
  "Why do programmers always mix up Halloween and Christmas? Because Oct 31 == Dec 25!",
  "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25!",
  "Why do programmers hate communism? They don't like sharing code.",
  "Why do programmers hate nature? It has too many bugs.",
  "Why do programmers prefer dark mode? Because light attracts bugs!",
  "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25!",
  "Why do programmers prefer Linux? Because it's open-source for a kernel.",
  "Why do programmers always get Christmas and Halloween mixed up? Because Oct 31 == Dec 25!",
  "Why do programmers like UNIX? unzip, strip, touch, finger, grep, mount, fsck, more, yes, fsck, fsck!",
  "Why do programmers always mix up Halloween and Christmas? Because Oct 31 == Dec 25!",
  "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25!",
  "Why do programmers hate communism? They don't like sharing code.",
  "Why do programmers hate nature? It has too many bugs.",
  "Why do programmers prefer dark mode? Because light attracts bugs!",
  "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25!",
  "Why do programmers prefer Linux? Because it's open-source for a kernel.",
  "Why do programmers always get Christmas and Halloween mixed up? Because Oct 31 == Dec 25!",
  "Why do programmers like UNIX? unzip, strip, touch, finger, grep, mount, fsck, more, yes, fsck, fsck!",
  "Why do programmers always mix up Halloween and Christmas? Because Oct 31 == Dec 25!",
  "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25!",
  "Why do programmers hate communism? They don't like sharing code.",
  "Why do programmers hate nature? It has too many bugs.",
  "Why do programmers prefer dark mode? Because light attracts bugs!",
  "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25!",
  "Why do programmers prefer Linux? Because it's open-source for a kernel.",
  "Why do programmers always get Christmas and Halloween mixed up? Because Oct 31 == Dec 25!",
  "Why do programmers like UNIX? unzip, strip, touch, finger, grep, mount, fsck, more, yes, fsck, fsck!",
  "Why do programmers always mix up Halloween and Christmas? Because Oct 31 == Dec 25!",
  "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25!",
  "Why do programmers hate communism? They don't like sharing code.",
  "Why do programmers hate nature? It has too many bugs.",
  "Why do programmers prefer dark mode? Because light attracts bugs!",
  "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25!",
  "Why do programmers prefer Linux? Because it's open-source for a kernel.",
  "Why do programmers always get Christmas and Halloween mixed up? Because Oct 31 == Dec 25!",
  "Why do programmers like UNIX? unzip, strip, touch, finger, grep, mount, fsck, more, yes, fsck, fsck!",
  "Why do programmers always mix up Halloween and Christmas? Because Oct 31 == Dec 25!",
  "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25!",
  "Why do programmers hate communism? They don't like sharing code.",
  "Why do programmers hate nature? It has too many bugs.",
  "Why do programmers prefer dark mode? Because light attracts bugs!",
  "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25!",
  "Why do programmers prefer Linux? Because it's open-source for a kernel.",
  "Why do programmers always get Christmas and Halloween mixed up? Because Oct 31 == Dec 25!",
  "Why do programmers like UNIX? unzip, strip, touch, finger, grep, mount, fsck, more, yes, fsck, fsck!",
  "Why do programmers always mix up Halloween and Christmas? Because Oct 31 == Dec 25!",
];

const copy = document.getElementById("copy");

button.onclick = async () => {
  const res = async () => {
    let rand = Math.floor(Math.random() * emojis.length);
    let randd = Math.floor(Math.random() * default_jokes.length);
    let rand_jokes_default = default_jokes[randd];
    let rand_emoji = emojis[rand];
    const response = await fetch(url);
    const data = await response.json();

    // console.log(data.joke.length);

    if (data.joke.length > 150) {
      joke.innerText = `${rand_jokes_default}`;
      emoji.innerHTML = `
        <span id="emoji">${rand_emoji}</span>
        `;
      copy.onclick = () => {
        var copyText = data.joke;
        const a = navigator.clipboard.writeText(copyText);
        copy.innerText = "Copied";
        setTimeout(() => {
          copy.innerHTML = `Copy<i class="fa-solid fa-copy"></i>`;
        }, 1000);
      };

      return;
    }

    copy.onclick = () => {
      var copyText = data.joke;
      const a = navigator.clipboard.writeText(copyText);
      // console.log(a);
      copy.innerText = "Copied";
      setTimeout(() => {
        copy.innerHTML = `Copy<i class="fa-solid fa-copy"></i>`;
      }, 1000);
    };

    joke.innerText = data.joke;
    emoji.innerHTML = `
          <span id="emoji">${rand_emoji}</span>
          `;
  };

  res();
};

copy.onclick = () => {
  var copyText = joke.innerText;
  const a = navigator.clipboard.writeText(copyText);
  // console.log(a);
  copy.innerText = "Copied";
  setTimeout(() => {
    copy.innerHTML = `Copy<i class="fa-solid fa-copy"></i>`;
  }, 1000);
};

// add_emoji.onclick = () => {
// };
