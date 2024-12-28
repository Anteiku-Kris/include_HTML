async function includeHTML(el, url) {
    try {
      const res = await fetch(url),
        html = await res.text();
  
      if (!res.ok)
        throw new Error({ status: res.status, statusText: res.statusText });
      el.outerHTML = html;
    } catch (error) {
      let message =
        error.status ||
        "Hay un error al cargar el elemento, asegurate de que estes dando una ruta con propiedad o de que estes utilizando peticiones http o https";
      el.innerHTML = `${message}: ${error.statusText}`;
    }
  }
  
  document.querySelectorAll("[data-include]").forEach((el) => {
    includeHTML(el, el.getAttribute("data-include"));
  });
  