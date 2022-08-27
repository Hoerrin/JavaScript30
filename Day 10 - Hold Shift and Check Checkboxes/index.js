let lastChecked = "chkbx1";

const addEventListeners = () => {
  for (let i = 1; i < 10; i++) {
    let checkbox = document.getElementById(`chkbx${i}`);
    checkbox.addEventListener;
    checkbox.addEventListener("click", (e) => {
      e.shiftKey && selectMultiple(lastChecked, i);
      lastChecked = i;
    });
  }
};

const selectMultiple = (lastChecked, checked) => {
  if (lastChecked == checked) return;
  if (lastChecked > checked) {
    for (let i = checked+1; i < lastChecked; i++) {
      let checkbox = document.getElementById(`chkbx${i}`);
      checkbox.checked = true;
    }
  }
  if (lastChecked < checked) {
    for (let i = lastChecked+1; i < checked; i++) {
      let checkbox = document.getElementById(`chkbx${i}`);
      checkbox.checked = true;
    }
  }
};

addEventListeners();
