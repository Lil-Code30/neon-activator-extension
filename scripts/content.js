const body = document.querySelector("body");

const text = body.textContent;
const wordMatchRegExp = /[^\s]+/g; // Regular expression
const words = text.matchAll(wordMatchRegExp);

// matchAll returns an iterator, convert to array to get word count
const wordCount = [...words].length;
