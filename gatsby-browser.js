import "./src/styles/global.css"

export const onRouteUpdate = () => {
    [...document.querySelectorAll('a')].forEach(e => {
      // Add window URL params to the href's params
      const url = new URL(e.href);
      for (let [k, v] of new URLSearchParams(window.location.search).entries()) {
        url.searchParams.set(k, v);
      }
      e.href = url.toString();
    });
  };

  export const onInitialClientRender = () => {
    const script = document.createElement("script");
    script.defer = true;
    script.setAttribute("data-domain", "amsterdam.pydata.org");
    script.src = "https://plausible.io/js/script.tagged-events.js";
    document.head.appendChild(script);
  };