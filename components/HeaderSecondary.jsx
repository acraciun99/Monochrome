export default function HeaderSecondary() {
  return (
    <section className="header-secondary">
      <section className="header-secondary-inner container">
        <div className="header-title d-lg-none">
          <h1>Monochrome</h1>
        </div>

        <div className="header-connect d-none d-lg-block">
          <ul className="header-social">
            <li>
              <a
                href="https://pixellab.ro/"
                target="_blank"
                rel="noopener noreferrer"
                title="Monochrome on Youtube"
              >
                {' '}
                <i className="fa-brands fa-youtube"></i>
              </a>
            </li>

            <li>
              <a
                href="https://pixellab.ro/"
                target="_blank"
                rel="noopener noreferrer"
                title="Monochrome on Twitter"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>

            <li>
              <a
                href="https://pixellab.ro/"
                target="_blank"
                rel="noopener noreferrer"
                title="Monochrome on Facebook"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </li>

            <li>
              <a
                href="https://pixellab.ro/"
                target="_blank"
                rel="noopener noreferrer"
                title="Monochrome on Twitter"
              >
                {' '}
                <i className="fa-brands fa-instagram-square"></i>
              </a>
            </li>

            <li>
              <a href="tel:++440 10 2345 6789" title="Call us">
                {' '}
                Call Us +440 10 2345 6789
              </a>
            </li>
          </ul>
        </div>

        <div className="header-controls d-none d-lg-flex">
          <form className="header-secondary-search">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="search"
            />

            <label htmlFor="search" className="search-icon">
              {' '}
              <i className="fa-solid fa-magnifying-glass"></i>
            </label>
          </form>
          <ul>
            <li>
              <a href="https://pixellab.ro/" title="My Account">
                <i className="fa-solid fa-user"></i>
              </a>
            </li>

            <li>
              <a href="https://pixellab.ro/" title="Favorite">
                <i className="fa-solid fa-heart"></i>
              </a>
            </li>

            <li>
              <a href="https://pixellab.ro/" title="Cart">
                <i className="fa-solid fa-bag-shopping"></i>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
}
