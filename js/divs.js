/* debug.css | MIT License | lucasalt.fr/work/debug.css */
if (!("is_debugging" in window)) {
  is_debugging = false;
  var debug_el = document.createElement("style");
  debug_el.append(
    document.createTextNode(`
    div {
      outline: 1px solid red !important;
    }
  `)
  );
}

function enable_debugger() {
  if (!is_debugging) {
    document.head.appendChild(debug_el);
    is_debugging = true;
  }
}

function disable_debugger() {
  if (is_debugging) {
    document.head.removeChild(debug_el);
    is_debugging = false;
  }
}

!is_debugging ? enable_debugger() : disable_debugger();
