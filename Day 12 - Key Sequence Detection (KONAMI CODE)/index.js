const sequence = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

const check = () => {
  sequence.every((item) => log.includes(item.toUpperCase())) && success();
};

const success = () => {
  log = [];
  cornify_add();
};

document.addEventListener("keyup", (e) => {
  log.push(e.key.toUpperCase());
  log.splice(-sequence.length - 1, log.length - sequence.length);
  check();
});

let log = [];
