// main.js
const hour = new Date().getHours();
let greeting = 'こんにちは！';

if (hour >= 5 && hour < 11) {
  greeting = 'おはようございます！';
} else if (hour >= 18 || hour < 5) {
  greeting = 'こんばんは！';
}

const messageElem = document.createElement('p');
messageElem.textContent = `${greeting} すなふきん７７のポートフォリオへようこそ！`;
messageElem.style.fontWeight = 'bold';

const h1 = document.querySelector('h1');
h1.after(messageElem);
