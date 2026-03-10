function Footer() {
  return (
    <footer className="footer" id="footer">

      <div className="footer-container">

        {/* Лого и описание */}
        <div className="footer-brand">
          <div className="logo">
            <div className="logo-icon">💼</div>
            <span>Job Board</span>
          </div>
          <p className="footer-desc">
            Find your dream job or post a vacancy. We connect talented people with great companies.
          </p>
        </div>

        {/* Навигация */}
        <div className="footer-col">
          <h4>Navigation</h4>
          <a href="#jobs">Find Jobs</a>
          <a href="#post-job">Post a Job</a>
          <a href="#">Categories</a>
          <a href="#">Contacts</a>
        </div>

        {/* Категории */}
        <div className="footer-col">
          <h4>Categories</h4>
          <a href="#">Frontend</a>
          <a href="#">Backend</a>
          <a href="#">Design</a>
          <a href="#">Marketing</a>
        </div>

        {/* Контакты */}
        <div className="footer-col">
          <h4>Contact</h4>
          <a href="mailto:hello@jobboard.com">hello@jobboard.com</a>
          <a href="#">Telegram</a>
          <a href="#">LinkedIn</a>
        </div>

      </div>

      <div className="footer-bottom">
        <span>© 2026 Job Board. All rights reserved.</span>
        <span>Made with ❤️</span>
      </div>

    </footer>
  )
}

export default Footer