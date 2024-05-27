const Navigation = () => {
  return (
    <nav className="navigation" role="navigation">
      <div className="navigation-container">
        <a href="#menu" className="navigation-toggle">
          <i className="fa fa-bars"></i>
        </a>
        <a className="navigation-brand" href="ru.html">
          <img
            alt="Refactoring.Guru"
            src={
              process.env.PUBLIC_URL +
              "/images/content-public/logos/logo-military-mobile78b4.png?id=65ecbd1e688fc695bc20c22a1e8450d9"
            }
            // srcSet={
            //   process.env.PUBLIC_URL +
            //   "/images/content-public/logos/logo-military-mobile-2x.png?id=0f52141f57f67fb678da8407e254b0a3 2x"
            // }
            width="94"
            height="64"
          />
        </a>
        <div className="social-likes-block" data-url="index.html">
          <div
            data-service="facebook"
            className="facebook"
            title="Поделиться в Facebook"
          >
            Facebook
          </div>
          <div
            data-service="vkontakte"
            className="vkontakte"
            title="Поделиться ВКонтакте"
          >
            Вконтакте
          </div>
          <div
            data-service="twitter"
            className="twitter"
            title="Поделиться в Twitter"
          >
            Twitter
          </div>
        </div>
        <ul className="navigation-menu">
          <li className="dropdown d-lg-none">
            <a
              className="dropdown-toggle"
              id="dropdownLanguage"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fa fa-globe" aria-hidden="true"></i>
              <span className="caption d-none d-xl-inline-block">Язык</span>
            </a>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="dropdownLanguage"
            >
              <a
                href="index.html"
                className="dropdown-item locale-link"
                data-locale="en"
                title="English"
              >
                English
              </a>
              <a
                href="es.html"
                className="dropdown-item locale-link"
                data-locale="es"
                title="Español"
              >
                Español
              </a>
              <a
                href="fr.html"
                className="dropdown-item locale-link"
                data-locale="fr"
                title="Français"
              >
                Français
              </a>
              <a
                href="pl.html"
                className="dropdown-item locale-link"
                data-locale="pl"
                title="Polski"
              >
                Polski
              </a>
              <a
                href="pt-br.html"
                className="dropdown-item locale-link"
                data-locale="pt-br"
                title="Português Brasileiro"
              >
                Português Brasileiro
              </a>
              <a
                href="ru.html"
                className="dropdown-item locale-link active"
                data-locale="ru"
                title="Русский"
              >
                Русский
              </a>
              <a
                href="uk.html"
                className="dropdown-item locale-link"
                data-locale="uk"
                title="Українська"
              >
                Українська
              </a>
              <a
                href="https://refactoringguru.cn/"
                className="dropdown-item locale-link"
                data-locale="zh"
                title="中文"
              >
                中文
              </a>
            </div>
          </li>
          <li className="nav-contact">
            <a
              className="userecho-private"
              href="https://feedback.refactoring.guru/communities/1-russkij-russian?show_feedback_form_private=true"
              rel="nofollow"
              title="Связаться"
            >
              <i
                className="fa fa-envelope"
                style={{
                  marginRight: "3px",
                }}
              ></i>
              <span className="caption d-none d-xl-inline-block">
                Liên hệ chúng tôi
              </span>
            </a>
          </li>
          <li className="nav-login">
            <a href="ru/login.html" title="Đăng nhập">
              <i
                className="fa fa-user"
                style={{
                  marginRight: "3px",
                }}
              ></i>
              <span className="caption d-none d-xl-inline-block">
                Đăng nhập
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <a className="russia-stop" href="ru/help-ukraine.html">
          HELP UKRAINE <b>STOP RUSSIA</b>
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
