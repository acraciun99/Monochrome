export default function HeaderPrimary() {
  return (
    <section className="header-primary">
      <div className="header-primary-inner container d-lg-none">
        <div className="header-bars">
          <a href="https://pixellab.ro/">
            <i className="fa-solid fa-bars"></i>
          </a>
        </div>

        <form action="" className="header-search">
          <input type="text" name="search" id="search" placeholder="search" />
          <label htmlFor="search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </label>
        </form>
      </div>

      <section className="banner-main d-block d-lg-none">
        <button>
          <a href="https://pixellab.ro/" title="New In">
            New In
          </a>
        </button>
      </section>

      <section className="header-primary-nav d-none d-lg-block">
        <ul>
          <li>
            <a href="https://pixellab.ro/">New Arrivals</a>
          </li>

          <li>
            <a href="https://pixellab.ro/">Brands</a>
          </li>

          <li>
            <a href="https://pixellab.ro/">Men</a>
          </li>

          <li>
            <a href="https://pixellab.ro/">Women</a>
          </li>

          <li>
            <a href="https://pixellab.ro/">Accesories</a>
          </li>

          <li>
            <a href="https://pixellab.ro/">Lookbook</a>
          </li>
        </ul>
      </section>
    </section>
  );
}
