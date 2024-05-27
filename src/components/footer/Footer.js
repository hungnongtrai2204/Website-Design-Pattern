const Footer = () => {
  return (
    <footer
      className=" center-content"
      style={{
        backgroundColor: "#e9ecef",
        color: "#6c757d",
        padding: "0",
        lineHeight: "1",
      }}
    >
      <div className="footer-container center-content-container">
        <div className="footer-inner container-fluid">
          <div className="row">
            <div className="col-8 col-md-10">
              <ul className="footer-list footer-list-horizontal">
                <li>
                  <a href="ru.html" style={{ color: "#6c757d" }}>
                    Trang Chủ
                  </a>
                </li>
                <li>
                  <a href="ru/refactoring.html" style={{ color: "#6c757d" }}>
                    Tái Cấu Trúc
                  </a>
                </li>
                <li>
                  <a
                    href="ru/design-patterns.html"
                    style={{ color: "#6c757d" }}
                  >
                    Mẫu Thiết Kế
                  </a>
                </li>
                <li>
                  <a href="ru/store.html" style={{ color: "#6c757d" }}>
                    Nội Dung Cao Cấp
                  </a>
                </li>
                <li>
                  <a
                    href="https://refactoring.userecho.com/"
                    rel="nofollow"
                    className="userecho-public"
                    style={{ color: "#6c757d" }}
                  >
                    Forum
                  </a>
                </li>
                <li>
                  <a
                    href="https://refactoring.userecho.com/"
                    rel="nofollow"
                    className="userecho-private"
                    style={{ color: "#6c757d" }}
                  >
                    Liên Hệ Chúng Tôi
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-4 col-md-2">
              <ul className="footer-list footer-list-iconic">
                <li>
                  <a
                    href="https://www.facebook.com/refactoring.guru"
                    style={{ color: "#6c757d" }}
                  >
                    <i className="fa fa-facebook-official"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="ru/sendy/form.html"
                    rel="nofollow"
                    style={{ color: "#6c757d" }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/RefactoringGuru"
                    style={{ color: "#6c757d" }}
                  >
                    <i className="fa fa-github-circled"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-second">
        <div className="footer-container center-content-container">
          <div className="footer-inner container-fluid">
            <div className="row">
              <div className="col-12 col-sm-8">
                <i className="fa fa-fw fa-copyright"></i>2014-2022
                <a href="ru.html" style={{ color: "#6c757d" }}>
                  {" "}
                  Refactoring.Guru
                </a>
                .
                <span style={{ whiteSpace: "nowrap" }}>
                  {" "}
                  Đã đăng ký bản quyền.
                </span>
                <br />
                <object
                  className="fa-fw"
                  style={{ height: "0.8rem", filter: "invert(50%)" }}
                  type="image/svg+xml"
                  data="/images/content-public/icons/fa-building4895.svg?id=afddb5806968b0a9acfc1df75a181234"
                >
                  <img
                    className="fa-fw"
                    style={{ height: "0.8rem" }}
                    src="/images/content-public/icons/fa-building4895.svg?id=afddb5806968b0a9acfc1df75a181234"
                    alt="Organization address"
                  />
                </object>
                59/12 khu phố 8, phường Tân Hòa, thành phố Biên Hòa ,tỉnh Đồng
                Nai
                <br />
                <i className="fa fa-fw fa-envelope"></i>Email:
                vuquochung2204@gmail.com
                <div className="mt-2">
                  <i className="fa fa-fw fa-image"></i>
                  Minh họa của
                  <a
                    href="http://zhart.us/"
                    rel="nofollow"
                    style={{ color: "#6c757d" }}
                  >
                    <span style={{ whiteSpace: "nowrap" }}> Dmitry Zhart</span>
                  </a>
                </div>
              </div>
              <div className="footer-links-right col-12 col-sm-4 mt-4 mt-sm-0">
                <div className="row">
                  <div className="col-8 col-sm-12">
                    <ul className="footer-list">
                      <li>
                        <a href="ru/terms.html" style={{ color: "#6c757d" }}>
                          <span>Điều Khoản & Điều Kiện</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="ru/privacy-policy.html"
                          style={{ color: "#6c757d" }}
                        >
                          <span>Chính Sách Bảo Mật</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="ru/content-usage-policy.html"
                          style={{ color: "#6c757d" }}
                        >
                          <span>Chính Sách Sử Dụng Nội Dung</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
