const ContentHome = () => {
  return (
    <main
      role="main"
      className="main-content top-content center-content"
      // data-page_className=""
    >
      <div className="main-content-container center-content-container">
        <div id="fb-root"></div>
        <div className="page text">
          <h1 className="hello">Hello, world!</h1>

          <p className="big">
            <b>Refactoring.Guru</b> giúp bạn dễ dàng khám phá mọi thứ bạn cần
            biết về refactoring, các mẫu thiết kế, các nguyên tắc SOLID và các
            chủ đề lập trình thông minh khác.
          </p>

          <p>
            Trang web này cho bạn thấy bức tranh tổng thể, cách tất cả các chủ
            đề này giao cắt, làm việc cùng nhau và vẫn còn có ý nghĩa. Tôi không
            giả vờ là người sáng tạo ra những khái niệm này - hầu hết chúng được
            người khác phát minh trong vòng 20 năm qua. Nhưng tôi nghĩ rằng mối
            liên kết giữa việc tái cấu trúc, mẫu thiết kế và nguyên tắc lập
            trình tổng quát vẫn còn là một bí ẩn đối với đa số lập trình viên.
            Đây là vấn đề mà tôi muốn giải quyết ở đây.
          </p>

          <div
            className="author row"
            style={{ fontStyle: "italic", fontSize: "14px" }}
          >
            <p className="col-12 col-sm-6 col-md-8">
              <b>P.S.</b> Trong khi tôi liên tục cập nhật dự án, bạn đã có thể
              tìm thấy rất nhiều thông tin về việc tái cấu trúc và mẫu thiết kế
              ngay tại trang web này. Theo dõi tiến độ dự án qua
              <a
                href="ru/sendy/form.html"
                rel="nofollow"
                title="Email рассылка сайта Refactoring.guru"
              >
                {" "}
                email
              </a>{" "}
              hoặc trên{" "}
              <a
                href="https://www.facebook.com/refactoring.guru/"
                title="Facebook страница сайта Refactoring.guru"
              >
                Facebook
              </a>
              .
            </p>
            <p className="col-12 col-sm-6 col-md-4 signature" style={{}}>
              <b>— Alexander Shvets</b>
              <br />
              Người đứng sau Refactoring.Guru là một người làm việc độc lập
            </p>
          </div>

          <div className="index-grid">
            <div className="email banner" style={{ borderColor: "#edd" }}>
              <h3>
                <i className="fa fa-envelope" aria-hidden="true"></i> Đăng ký
                nhận thông tin
              </h3>
              <p>
                Nhập địa chỉ email của bạn để theo dõi tiến độ dự án. Bạn chỉ có
                thể nhận được tối đa một email mỗi tháng. Không có spam, cam
                đoan.
              </p>

              <form
                action="https://refactoring.guru/ru/sendy/subscribe"
                method="POST"
                acceptCharset="utf-8"
              >
                <div className="input-group">
                  <input
                    type="email"
                    value=""
                    onChange={() => {}}
                    name="email"
                    className="form-control email"
                    id="email"
                    placeholder="Email"
                    required
                  />
                  <span className="input-group-append">
                    <button
                      type="submit"
                      name="subscribe"
                      className="btn btn-secondary"
                    >
                      <i
                        className="fa fa-envelope"
                        aria-hidden="true"
                        style={{ marginRight: "4px" }}
                      ></i>
                      <span className="d-none d-xl-inline-block"> Đăng Ký</span>
                    </button>
                  </span>
                </div>
                <input type="hidden" name="language" id="language" value="ru" />

                <div style={{ display: "none" }}>
                  <label htmlFor="name22">Name</label>
                  <br />
                  <input type="text" name="name22" id="name22" />
                </div>
              </form>
            </div>

            <div className="facebook banner" style={{ borderColor: "#cde" }}>
              <h3>
                <i className="fa fa-facebook-official" aria-hidden="true"></i>{" "}
                Trang Facebook
              </h3>

              <p>
                <a href="https://www.facebook.com/refactoring.guru/">
                  <img
                    src="images/content-public/facebook-page-en3e3c.png?id=406931e47483b8c8f52dd32c73f4e174"
                    alt="Страница Facebook"
                  />
                </a>
              </p>
            </div>
          </div>

          <div className="hr"></div>

          <div className="container-fluid container-headline">
            <div className="row">
              <div className="col-md-6" aria-hidden="true">
                <a href="ru/refactoring.html">
                  <img
                    className="index-img"
                    loading="lazy"
                    width="466"
                    src="images/refactoring/content/refactoring-preview7144.png?id=33c3aeb5f162270d467d97ad17b6ff53"
                    //   srcset="
                    //   /images/refactoring/content/refactoring-preview-2x.png?id=22f20e9eaf98949d52a05b133829dddf 2x
                    // "
                    alt="Картинка-превью секции Рефакторинга"
                    style={{
                      maxWidth: "466px !important",
                      marginLeft: "-10px",
                    }}
                  />
                </a>
              </div>
              <div className="col-md-6">
                <h2>Tái Cấu Trúc</h2>

                <p>
                  Tái cấu trúc là quá trình có hệ thống nhằm cải thiện mã mà
                  không tạo ra chức năng mới. Refactoring biến một mớ hỗn độn
                  thành mã sạch và thiết kế đơn giản.
                </p>

                <a
                  href="ru/refactoring.html"
                  className="btn d-block d-sm-inline-block btn-lg btn-primary"
                >
                  Thêm về tái cấu trúc »
                </a>
              </div>
            </div>
          </div>

          <div className="hr"></div>

          <div className="container-fluid container-headline">
            <div className="row">
              <div className="col-md-6">
                <a href="/design-patterns">
                  <img
                    className="index-img"
                    loading="lazy"
                    width="466"
                    src="images/patterns/content/index-design-patterns52cc.png?id=2a73abe6d41f0108d6bf636473851484"
                    //   srcset="
                    //   /images/patterns/content/index-design-patterns-2x.png?id=25c4fb3ed68fc2fb9f1b14e59f64a771 2x
                    // "
                    alt="Картинка-превью секции Паттернов проектирования"
                    style={{
                      maxWidth: "466px !important",
                      marginLeft: "-10px",
                    }}
                  />
                </a>
              </div>
              <div className="col-md-6" aria-hidden="true">
                <h2>
                  <span>Mẫu</span> Thiết Kế
                </h2>

                <p>
                  Mẫu thiết kế là các giải pháp điển hình cho các vấn đề thường
                  gặp trong thiết kế phần mềm. Chúng là các bản thiết kế mà bạn
                  có thể lấy và tùy chỉnh để giải quyết một vấn đề thiết kế cụ
                  thể trong mã của bạn.
                </p>

                <a
                  href="ru/design-patterns.html"
                  className="btn d-block d-sm-inline-block btn-lg btn-primary"
                >
                  Thêm về mẫu thiết kế »
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContentHome;
