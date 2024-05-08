document.head.append(
  function () {
    let link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "https://unpkg.com/@highlightjs/cdn-assets@11.9.0/styles/default.min.css");
    return link;
  }(),
  function () {
    let link = document.createElement("script");
    link.setAttribute("src", "https://unpkg.com/@highlightjs/cdn-assets@11.9.0/highlight.min.js");
    return link;
  }(),
);

window.onload = function() {
  for (script of document.querySelectorAll("script.code")) {
    let code = script.innerText.replace(/^\n+/m, "");
    code = code.replace(/\n+\s*$/, "");
    const indentation = code.split("\n").reduce(
      (a, b) => Math.min(a, b.trim() == "" ? Number.MAX_SAFE_INTEGER : b.search(/\S|$/)),
      100000);
    code = code.replace(new RegExp(`^[^\\S\n]{${indentation}}`, "gm"), "");
    let html = document.createElement("pre");
    if (script.getAttribute('lang')) {
      code = hljs.highlight(code, { language: script.getAttribute('lang') }).value;
    } else {
      code = hljs.highlightAuto(code).value;
    }
    html.appendChild(document.createElement("code")).innerHTML = code;
    script.parentNode.replaceChild(html, script);
  }
};
