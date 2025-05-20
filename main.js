function setCookie(name, value) {
  document.cookie = name + "=" + value + "; path=/";
}

function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split("=");
    if (cookie[0] === name) {
      return cookie[1];
    }
  }
  return null;
}

// Get cookie by user with key
document.getElementById("get-cookie").addEventListener("click", () => {
  const key = document.getElementById("cookie-key").value.trim();
  const value = getCookie(key);

  const list = document.getElementById("cookie-list");
  list.innerHTML = "";
  const li = document.createElement("li");
  if (value) {
    li.textContent = `Cookie "${key}" has value: "${value}"`;
  } else {
    li.textContent = `Cookie "${key}" not found.`;
  }
  list.appendChild(li);
});

console.log("name:",getCookie("name"));
console.log("email:",getCookie("email"));
console.log("number:",getCookie("number"));

// Set cookie by user
document.getElementById("set-cookie").addEventListener("click", () => {
  const key = document.getElementById("set-cookie-key").value.trim();
  const value = document.getElementById("set-cookie-value").value.trim();

  const list = document.getElementById("cookie-list");
  list.innerHTML = "";

  if (key && value) {
    setCookie(key, value);
    const li = document.createElement("li");
    li.textContent = `Cookie "${key}" set with value "${value}".`;
    list.appendChild(li);
  } else {
    const li = document.createElement("li");
    li.textContent = "Please enter both key and value to set a cookie.";
    list.appendChild(li);
  }
});


// Now for session storage

// Set session storage by user
document.getElementById("set-session").addEventListener("click", () => {
  const key = document.getElementById("set-session-key").value.trim();
  const value = document.getElementById("set-session-value").value.trim();

  const list = document.getElementById("cookie-list");
  list.innerHTML = "";

  if (key && value) {
    sessionStorage.setItem(key, value);
    const li = document.createElement("li");
    li.textContent = `Session storage key "${key}" set with value "${value}".`;
    list.appendChild(li);
  } else {
    const li = document.createElement("li");
    li.textContent = "Please enter both key and value for session storage.";
    list.appendChild(li);
  }
});

console.log("name:",sessionStorage.getItem("name"));
console.log("email:",sessionStorage.getItem("email"));
console.log("number:",sessionStorage.getItem("number"));

// Get session storage by user
document.getElementById("get-session").addEventListener("click", () => {
  const key = document.getElementById("get-session-key").value.trim();
  const value = sessionStorage.getItem(key);

  const list = document.getElementById("session-list");
  list.innerHTML = "";

  const li = document.createElement("li");
  if (value) {
    li.textContent = `Session storage key "${key}" value: "${value}"`;
  } else {
    li.textContent = `Session storage key "${key}" not found.`;
  }
  list.appendChild(li);
});
