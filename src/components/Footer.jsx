import React from "react";

function Footer() {
  const current = new Date();
  const year = current.getFullYear();
  return (
    <footer class="footer mt-auto py-3 h-25">
      <a class="btn-up" href="#">
        <img
          src="https://www.fonasa.cl/assets/fonasa2019/up-e18a8814cae317654e2c61d648e0129c.svg"
          class="a11y-contrast-d-none"
          alt="button to top"
        />
        <img
          src="https://www.fonasa.cl/assets/fonasa2019/up-contrast-7ecfba67e453683ee9de787b285dadb1.svg"
          class="d-none a11y-contrast-d-inline"
          alt="button to top"
        />
      </a>
      <div class="container">
        <div class="row">
          <div class="col-4">
            <img
              class="footer-default-logo"
              src="https://www.fonasa.cl/assets/fonasa2019/gob-footer.svg"
              alt="logo Ministerio de Salud"
            />
            <img
              class="footer-mobile-logo"
              src="https://www.fonasa.cl/assets/fonasa2019/gob-footer-mobile-4a66e7d63cd2b71cf87d1a8958e0e54f.svg"
              alt="logo Ministerio de Salud"
            />
          </div>
          <div class="col-8">
            <div class="row">
              <div class="col-md-12 text-muted">
                © {year} Copyright FONASA, todos los derechos reservados
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 text-muted">
                División de Técnologías de la Información y Comunicaciones
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
