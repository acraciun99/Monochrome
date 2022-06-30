export default function HeaderPrimary() {
  return (
    <section className="header-primary container">
      <div className="header-controls">
        <a href="https://x.ro/" title="Menu">
          <i className="fa-solid fa-bars"></i>
        </a>
        <form className="header-form">
          <input type="text" name="search" id="search"></input>
          <i className="fa-solid fa-magnifying-glass"></i>
        </form>
      </div>
    </section>
  );
}
