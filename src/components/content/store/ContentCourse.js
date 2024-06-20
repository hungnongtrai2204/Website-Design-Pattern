import { useState } from "react";

const ContentCourse = () => {
  const [videoActive, setVideoActive] = useState(-1);
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible((pre) => !pre);
  };

  return (
    <main
      role="main"
      className="main-content top-content center-content "
      data-page_className=""
    >
      <div className="main-content-container center-content-container">
        <article className="page text">
          <h1>
            <span>Dive Into</span>
            <strong>REFACTORING</strong>
          </h1>

          <div className="lead">
            Một khóa học trực tuyến về các mã xấu và tái cấu trúc
          </div>

          <div className="top-product-block product-block">
            <div className="image">
              <a
                className="do-checkout"
                href="#buy-now"
                data-product="Dive Into Refactoring"
              >
                <img
                  style={{ borderRadius: "30px" }}
                  src="/images/refactoring/course/course-cover-en.jpg"
                />
              </a>
            </div>
            <div className="buy-widget">
              <div className="price-tag price-tag-hg compact">
                <span className="old-price font-money">$40.00</span>
                <span className="new-price font-money">
                  <span className="offer-text">GIẢM GIÁ</span>
                  $14.95
                </span>
              </div>
              <a
                className="btn btn-secondary btn-buy do-checkout"
                href="#buy-now"
                data-product="Dive Into Refactoring"
              >
                <i className="fa fa-shopping-cart"></i> Mua ngay
              </a>
            </div>
            <div className="buy-options mt-4">
              <a
                className="do-checkout btn btn-block btn-md btn-secondary"
                href="#buy-now"
                data-product="Dive Into Refactoring"
                data-purchase-type="1"
              >
                <i className="fa fa-gift"></i> Купить в подарок
              </a>

              <a
                className="do-checkout btn btn-block btn-md btn-secondary mt-1"
                href="#buy-team"
                data-product="Dive Into Design Patterns"
                data-purchase-type="2"
              >
                <i className="fa fa-users"></i> Купить для команды
              </a>
            </div>
          </div>

          <blockquote className="author-blockquote">
            <p className="first">
              Xin chào, tôi tên là Alexander Shvets, tôi là người sáng lập trang
              web này. Sau hai năm làm việc, tôi rất vui mừng được giới thiệu
              với bạn khóa học của tôi về tái cấu trúc, sẽ giúp bạn trở thành
              một lập trình viên giỏi hơn.
            </p>

            <p>
              Tôi đã lập trình từ khi tôi 13 tuổi. Thậm chí, Windows còn chưa có
              nút Start vào thời điểm đó. Kể từ thời điểm đó, tôi đã làm việc
              tại năm công ty, học được nửa chục ngôn ngữ lập trình và triển
              khai một số dự án thành công.
            </p>

            <p>
              Trong khóa học này, tôi sẽ chia sẻ kiến thức của mình với bạn và
              dạy bạn:
            </p>

            <ul>
              <li>Nhìn thấy sự khác biệt giữa mã nguồn đẹp và xấu.</li>
              <li>
                Cải thiện mã nguồn xấu, ngay cả khi bạn nghĩ rằng điều đó là
                không thể.
              </li>
              <li>
                Thay đổi mã nguồn mà không làm hỏng các phần khác của chương
                trình của bạn.
              </li>
            </ul>

            <p>
              Bạn sẽ yêu thích khóa học nếu bạn từng cảm thấy như{" "}
              <a href="javascript:void(0)" onClick={handleClick}>
                con mèo ở đây
              </a>{" "}
              ngồi trước một phiên bản xây dựng bị hỏng.
            </p>

            <video
              className="cat-img"
              preload="metadata"
              muted
              loop
              autoPlay
              playsinline
              style={{
                display: isVisible ? "block" : "none",
                background: "#eee",
              }}
              width={322}
              height={281}
            >
              <source
                src="/images/content-public/refactoring-cat.mp4"
                type="video/mp4"
              />
              Your browser does not support HTML video.
            </video>
          </blockquote>

          <h2>Bên trong có gì?</h2>

          <p>
            <i className="fa fa-cubes"></i> Khóa học giảng dạy về{" "}
            <b>21 mã nguồn xấu</b> và <b>kỹ thuật tái cấu trúc</b> để sửa chữa
            chúng.
          </p>

          <p>
            <i className="fa fa-code"></i> Mỗi chương bao gồm các ví dụ trong{" "}
            <b>Java, C# và PHP</b>.
          </p>

          <p>
            <i className="fa fa-bomb"></i> Các kỹ thuật tái cấu trúc được minh
            họa bằng các <b>ví dụ thực tế</b>. Chúng dễ theo dõi hơn so với mã
            nguồn tĩnh—và cũng vui hơn nữa!
          </p>

          <p>
            <i className="fa fa-file-pdf" aria-hidden="true"></i> Khóa học có
            thể được tải xuống để <b>sử dụng ngoại tuyến</b> dưới dạng sách điện
            tử trong các định dạng PDF, EPUB, MOBI.
          </p>

          <p>
            <i className="fa fa-clock" aria-hidden="true"></i> Khóa học không có
            bất kỳ hạn chế thời gian nào. Bạn có thể hoàn thành nó vào bất kỳ
            thời điểm thuận tiện nào và theo tốc độ của riêng bạn một số lần bạn
            muốn. Trung bình, việc hoàn thành toàn bộ khóa học mất khoảng 8 giờ.
          </p>

          <h2>Ảnh chụp màn hình</h2>

          <div className="screenshot-container">
            <div className="screenshot">
              <div
                className="screenshot-thumb"
                onClick={() => setVideoActive(0)}
              >
                <img
                  src="/images/content-public/landings/screenshots/home-en-thumb.png"
                  alt="Главная страница"
                />
                <p className="description">
                  Trang chính với các liên kết đến diễn đàn và bảng tựa.
                </p>
              </div>
              <div
                className={`screenshot-full ${
                  videoActive === 0 ? "active" : ""
                }`}
                onClick={() => {
                  if (videoActive !== -1) {
                    setVideoActive(-1);
                  }
                }}
              >
                {videoActive === 0 && (
                  <div
                    className="screenshot-content"
                    style={{
                      position: "fixed",
                      left: "631.5px",
                      top: "232.5px",
                      width: "640px",
                      height: "480px",
                    }}
                  >
                    <div className="browser-title">
                      <span className="browser-url">
                        <i className="fa fa-lock" aria-hidden="true"></i>{" "}
                        refactoring.guru/home
                      </span>
                    </div>
                    <img
                      src="/images/content-public/landings/screenshots/home-ru.png"
                      alt="Главная страница"
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="screenshot screenshot-video">
              <div
                className="screenshot-thumb"
                onClick={() => setVideoActive(1)}
              >
                <img
                  src="/images/content-public/landings/screenshots/start-en-thumb.png"
                  alt="Первые шаги"
                />
                <p className="description">Những bước đầu tiên vào khóa học.</p>
              </div>
              <div
                className={`screenshot-full ${
                  videoActive === 1 ? "active" : ""
                }`}
                onClick={() => {
                  if (videoActive !== -1) {
                    setVideoActive(-1);
                  }
                }}
              >
                {videoActive === 1 && (
                  <div
                    className="screenshot-content"
                    style={{
                      position: "fixed",
                      left: "631.5px",
                      top: "232.5px",
                      width: "640px",
                      height: "480px",
                    }}
                  >
                    <div className="browser-title">
                      <span className="browser-url">
                        <i className="fa fa-lock" aria-hidden="true"></i>{" "}
                        refactoring.guru/first-steps
                      </span>
                    </div>
                    <video
                      preload="metadata"
                      muted
                      loop
                      playsinline
                      autoPlay={videoActive === 1}
                    >
                      <source
                        src="/images/content-public/landings/screenshots/start-en.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support HTML video.
                    </video>
                  </div>
                )}
              </div>
            </div>
            <div className="screenshot screenshot-video">
              <div
                className="screenshot-thumb"
                onClick={() => setVideoActive(2)}
              >
                <img
                  src="/images/content-public/landings/screenshots/smell-en-thumb.png"
                  alt="Запах плохого кода"
                />
                <p className="description">
                  Đi qua một trong các mã nguồn xấu.
                </p>
              </div>
              <div
                className={`screenshot-full ${
                  videoActive === 2 ? "active" : ""
                }`}
                onClick={() => {
                  if (videoActive !== -1) {
                    setVideoActive(-1);
                  }
                }}
              >
                {videoActive === 2 && (
                  <div
                    className="screenshot-content"
                    style={{
                      position: "fixed",
                      left: "631.5px",
                      top: "232.5px",
                      width: "640px",
                      height: "480px",
                    }}
                  >
                    <div className="browser-title">
                      <span className="browser-url">
                        <i className="fa fa-lock" aria-hidden="true"></i>{" "}
                        refactoring.guru/code-smell
                      </span>
                    </div>
                    <video
                      preload="metadata"
                      muted
                      loop
                      playsinline
                      autoPlay={videoActive === 2}
                    >
                      <source
                        src="/images/content-public/landings/screenshots/smell-en.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support HTML video.
                    </video>
                  </div>
                )}
              </div>
            </div>
            <div className="screenshot screenshot-video">
              <div
                className="screenshot-thumb"
                onClick={() => setVideoActive(3)}
              >
                <img
                  src="/images/content-public/landings/screenshots/story-en-thumb.png"
                  alt="Количество контента"
                />
                <p className="description">
                  Khóa học bao gồm 21 mã nguồn xấu và 66 kỹ thuật tái cấu trúc.
                </p>
              </div>
              <div
                className={`screenshot-full ${
                  videoActive === 3 ? "active" : ""
                }`}
                onClick={() => {
                  if (videoActive !== -1) {
                    setVideoActive(-1);
                  }
                }}
              >
                {videoActive === 3 && (
                  <div
                    className="screenshot-content"
                    style={{
                      position: "fixed",
                      left: "631.5px",
                      top: "232.5px",
                      width: "640px",
                      height: "480px",
                    }}
                  >
                    <div className="browser-title">
                      <span className="browser-url">
                        <i className="fa fa-lock" aria-hidden="true"></i>{" "}
                        refactoring.guru/story-mode
                      </span>
                    </div>
                    <video
                      preload="metadata"
                      muted
                      loop
                      playsinline
                      autoPlay={videoActive === 3}
                    >
                      <source
                        src="/images/content-public/landings/screenshots/story-en.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support HTML video.
                    </video>
                  </div>
                )}
              </div>
            </div>
            <div className="screenshot screenshot-video">
              <div
                className="screenshot-thumb"
                onClick={() => setVideoActive(4)}
              >
                <img
                  src="/images/content-public/landings/screenshots/live-example-en-thumb.png"
                  alt="Живой пример"
                />
                <p className="description">
                  Các ví dụ thực tế sẽ chỉ bạn cách áp dụng các kỹ thuật tái cấu
                  trúc bước một.
                </p>
              </div>
              <div
                className={`screenshot-full ${
                  videoActive === 4 ? "active" : ""
                }`}
                onClick={() => {
                  if (videoActive !== -1) {
                    setVideoActive(-1);
                  }
                }}
              >
                {videoActive === 4 && (
                  <div
                    className="screenshot-content"
                    style={{
                      position: "fixed",
                      left: "631.5px",
                      top: "232.5px",
                      width: "640px",
                      height: "480px",
                    }}
                  >
                    <div className="browser-title">
                      <span className="browser-url">
                        <i className="fa fa-lock" aria-hidden="true"></i>{" "}
                        refactoring.guru/live-example
                      </span>
                    </div>
                    <video
                      preload="metadata"
                      muted
                      loop
                      playsinline
                      autoPlay={videoActive === 4}
                    >
                      <source
                        src="/images/content-public/landings/screenshots/live-example-en.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support HTML video.
                    </video>
                  </div>
                )}
              </div>
            </div>
            <div className="screenshot">
              <div
                className="screenshot-thumb"
                onClick={() => setVideoActive(5)}
              >
                <img
                  src="/images/content-public/landings/screenshots/live-example-diff-en-thumb.png"
                  alt="Разница в живом примере"
                />
                <p className="description">
                  Mỗi ví dụ điều được theo sau bởi một chế độ xem diff giữa mã
                  nguồn khởi đầu và kết quả.
                </p>
              </div>
              <div
                className={`screenshot-full ${
                  videoActive === 5 ? "active" : ""
                }`}
                onClick={() => {
                  if (videoActive !== -1) {
                    setVideoActive(-1);
                  }
                }}
              >
                {videoActive === 5 && (
                  <div
                    className="screenshot-content"
                    style={{
                      position: "fixed",
                      left: "631.5px",
                      top: "232.5px",
                      width: "640px",
                      height: "480px",
                    }}
                  >
                    <div className="browser-title">
                      <span className="browser-url">
                        <i className="fa fa-lock" aria-hidden="true"></i>{" "}
                        refactoring.guru/live-example-diff
                      </span>
                    </div>
                    <img
                      src="../../images/content-public/landings/screenshots/live-example-diff-en.png"
                      alt="Live example diff"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          <h2>
            Tại sao tôi nên mua khóa học này thay vì một cuốn sách dày về tái
            cấu trúc?
          </h2>

          <p>
            <i className="fa fa-smile"></i> Khóa học này được viết bằng ngôn ngữ
            đơn giản, dễ tiếp cận, không có ngôn ngữ chuyên môn. Trực tiếp và
            súc tích với ít lời văn phong.
          </p>

          <p>
            <i className="fa fa-tablet"></i> Nó được tối ưu hóa cho việc xem
            trên máy tính bảng. Vì vậy, hãy đọc nó trên ghế sofa của bạn trong
            khi thưởng thức một tách cà phê cappuccino ngon lành.
          </p>

          <p>
            <i className="fa fa-hand-point-up"></i> Các yếu tố tương tác của
            khóa học giúp bạn giữ tinh thần tập trung, khác với sách thông
            thường khiến bạn buồn ngủ sau mười phút.
          </p>

          <p>
            <i className="fa fa-bomb"></i> Ồ và tôi đã đề cập đến các ví dụ
            tương tác trực tiếp chưa? Đúng vậy, nhưng chúng thực sự quá tuyệt để
            không đề cập lại lần nữa!
          </p>

          <h3>Chứng chỉ hoàn thành</h3>

          <p>
            Sau khi hoàn thành khóa học, bạn sẽ nhận được một chứng chỉ hoàn
            thành điện tử. Mặc dù nó chắc chắn trông rất tuyệt khi treo trên
            tường, bạn cũng có thể đưa nó vào CV của mình, tăng cơ hội trong
            cuộc phỏng vấn việc làm tiếp theo.
          </p>

          <div className="certificate" style={{ textAlign: "center" }}>
            <figure className="image">
              <a href="../cert/r/MQ.html" target="_blank">
                <img
                  src="/images/content-public/landings/certificate-en.png"
                  // srcset="/images/content-public/landings/certificate-en-2x.png 2x"
                />
              </a>
              <figcaption>Ví dụ về chứng chỉ</figcaption>
            </figure>
          </div>

          <div className="section guarantee d-sm-flex align-items-sm-center text-center text-sm-left">
            <img
              className="mb-4 mb-sm-0"
              style={{ width: "140px" }}
              src="/images/content-public/100-satisfaction-en.png"
              // srcset="/images/content-public/100-satisfaction-ru-2x.png 2x, /images/content-public/100-satisfaction-ru-3x.png 3x"
              alt="Гарантия удовлетворения"
            />
            <div className="ml-sm-4">
              <h2 className="title">100% Bảo đảm hài lòng</h2>
              <p>
                Việc mua khóa học là hoàn toàn không có rủi ro. Nếu trong vòng
                một tháng bạn quyết định không hài lòng với việc mua hàng của
                mình, tôi sẽ ngay lập tức hoàn lại toàn bộ số tiền của bạn,
                không có câu hỏi nào được đặt.
              </p>
            </div>
          </div>

          <div className="section section-bordered buy-button d-block d-sm-flex">
            <div className="flex-grow-1" style={{ textAlign: "center" }}>
              <div className="price-tag price-tag-hg">
                <div className="price-tag offer">
                  <span className="old-price font-money">$40.00</span>
                  <span className="new-price font-money">
                    <span className="offer-text">GIẢM GIÁ</span>
                    $14.95
                  </span>
                </div>
              </div>
              <a
                className="btn btn-secondary btn-buy btn-hg add-to-cart do-checkout"
                href="#buy-now"
                data-product="Dive Into Refactoring"
              >
                <i className="fa fa-shopping-cart"></i> Mua ngay
                <br />
                <span>(mức giá này sẽ không kéo dài mãi mãi)</span>
              </a>
            </div>
            <div className="flex-grow-1">
              <ul>
                <li>
                  Truy cập không giới hạn vào khóa học{" "}
                  <b>Dive Into Refactoring</b>.
                </li>
                <li>Nguồn cảm xúc lập trình tuyệt vời.</li>
                <li>Bảng tóm tắt tái cấu trúc có thể in được.</li>
                <li>
                  Và tất cả điều này đều được bảo đảm hoàn tiền trong vòng 30
                  ngày.
                </li>
              </ul>
            </div>
          </div>

          <div className="section">
            <h2 style={{ marginTop: "0" }}>
              Dưới đây là những gì mà mọi người nói
            </h2>

            <div>
              <span className="social-likes-block" data-url="../../index.html">
                <span className="facebook" title="Поделиться в Facebook">
                  Facebook
                </span>
              </span>

              <a
                href="../login4637.html?destination=https%3A%2F%2Ffeedback.refactoring.guru%2Fforums%2F1-russianrusskij%2F%3Flang%3Dru%26show_feedback_form_private%3Dtrue"
                className="btn btn-xs btn-success "
              >
                <i className="fa fa-star" aria-hidden="true"></i> Viết đánh giá
              </a>
            </div>

            <div className="feedback-container">
              <div className="feedback-list">
                <div className="feedback-item visible">
                  <div className="feedback">
                    <p>
                      I didn't have a chance to ran through the whole course, so
                      I still have some lessons ahead. Overall I really like the
                      course, it's written in understandable way, contains lot
                      of good ideas. I noticed that I started to use Extract
                      Method really often. As well as substitution of complex
                      logical "IF" statements by method that returns bool. Code
                      is really much more readable and don't need to be
                      commented. Don't know what to improve, maybe bigger
                      variety of code snippets. I noticed that snippets are
                      reused again and again over the course and I would welcome
                      to see some different scenarios.. Don't know if you get
                      the point, simple not to reuse the same snippet over and
                      over for similar use cases.
                    </p>
                  </div>
                  <div className="feedback-details">
                    <div className="stars">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="name">Peter Dubovan</div>
                    <div className="location">Slovakia</div>
                  </div>
                </div>

                <div className="feedback-item visible">
                  <div className="feedback">
                    <p>
                      I like the site, and the information is good I like the
                      way it is organized in stories and how you can see in the
                      sample code how to apply a solution. I would like to have
                      something like a playground so I can actually write and
                      refactorize code, and check the results against the
                      recommended solution (similar to what udacity has on their
                      python courses)
                    </p>
                  </div>
                  <div className="feedback-details">
                    <div className="stars">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="name">Edison Martinez</div>
                    <div className="location">Ecuador</div>
                  </div>
                </div>

                <div className="feedback-item visible">
                  <div className="feedback">
                    <p>
                      I loved the refactoring course and especially the online
                      aspect of it. Well done with respect to content and easy
                      to understand material. I have bought all your work in the
                      past except for UML. Keep on doing good work. It helps me
                      understand the material properly and I can apply at work
                      as well. In terms of new suggestions: Come up with a nice
                      tutorial or a book on Java 8 and Java 9 with focus on
                      functional programming, modules and concurrency. I am sure
                      it will do well.
                    </p>
                  </div>
                  <div className="feedback-details">
                    <div className="stars">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="name">Yogesh Sagar</div>
                    <div className="location">Canada</div>
                  </div>
                </div>

                <div className="feedback-item visible">
                  <div className="feedback">
                    <p>
                      Начал проходить курс, но из-за нехватки времени, пока что
                      притормозил обучение. Паттерны также начал изучать.
                      Впечатлений много, и все в основном положительные.
                      <br />
                      Очень понравилась подача материала, забавные зарисовки, а
                      так же структурированность материала. Примеры встречаются
                      иногда достаточно сложные для первичного восприятия, а в
                      основном все понравилось.
                      <br />
                      Насчет идей, я столкнулся с описанием структуры
                      UML-диаграммам в книге про паттерны. Хотелось бы эти
                      описания увидеть и в самом курсе, так как диаграммы там
                      встречаются часто, а до того как я заглянул в книгу
                      паттернов, не совсем понимал взаимосвязи и обозначения.
                      Так же хотелось бы немного более подробные примеры
                      применения рефакторинга (если это возможно), так как
                      схематически вроде все понятно, но как только пытаешься
                      применить на практике, сталкиваешься с небольшой проблемой
                      переложения знания схемы и принципа на реальный код.
                      <br />А в общем огромное спасибо за проделанную работу, ни
                      капли не пожалел о покупке, и с удовольствием продолжу
                      изучение при наличии свободного времени, так как усваивать
                      информацию лучше всего небольшими порциями.
                    </p>
                  </div>
                  <div className="feedback-details">
                    <div className="stars">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star-o" aria-hidden="true"></i>
                    </div>
                    <div className="name">Фарит Ахмеров</div>
                    <div className="location">Россия</div>
                  </div>
                </div>

                <div className="feedback-item visible">
                  <div className="feedback">
                    <p>
                      Этот курс мне посоветовал пройти мой тимлид, сказал что
                      после него начну смотреть на код совсем по-новому.
                      <br />
                      Тимлид сказал — девелопер сделал. И как ни странно,
                      действительно отношение к коду, который я пишу и читаю
                      поменялось. А самое главное — теперь я знаю в каких
                      случаях какие методики рефакторинга применять, чтобы без
                      лишней головной боли получить более структурированный и
                      самодокументируемый код
                    </p>
                  </div>
                  <div className="feedback-details">
                    <div className="stars">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="name">Даниил Радковский</div>
                    <div className="location">Украина</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      I've just started with the course. I like the boxes
                      explaining the solutions. If anything I would prefer small
                      exampeles of actual code.{" "}
                    </p>

                    <p>
                      Otherwise I really like the Course and you've done an
                      awesome job with this.
                    </p>
                  </div>
                  <div className="feedback-details">
                    <div className="stars">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="name">Joel Nordh</div>
                    <div className="location">Sweden</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Я начал проходить курс, правда сейчас отложил из-за
                      недостатка времени, но это не важно. У вас очень приятно
                      изложен материал. Вот эта динамика изложения с этими
                      переходами от блока к блоку создает ощущение легкости.
                      "Знания" не давят, нету стресса в стиле
                      "я-начал-читать-а-страница-такая-длинная-когда-же-оно-кончится-я-уже-устал".
                      Никогда не думал, что подача материала на столько может
                      влиять на легкость чтения. Сама книжка, сайт - все супер.
                      Было не жалко отдать денежку за хороший продукт. Респект!
                      Надеюсь люди оценивают по достоинству ваш труд.
                    </p>
                  </div>
                  <div className="feedback-details">
                    <div className="stars">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="name">Андрей Демьянец</div>
                    <div className="location">Россия</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Курс я прошёл, огромное спасибо. Активно использую в
                      работе, особенно помогает при code review мерж реквестов
                      специалистов. Книгу читаю в чуть более ленивом темпе (пока
                      что дошёл до паттерна Фасад) , но в целом доволен. Из
                      идей/предложений: сделать курс более интерактивным,
                      добавить возможность самому написать, как бы я срефакторил
                      (аля курсы на html academy или codewars).
                    </p>
                  </div>
                  <div className="feedback-details">
                    <div className="stars">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="name">Евгений Петухов</div>
                    <div className="location">Россия</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      — Have you already tried the course?
                      <br />
                      Yes.
                      <br />— What do you think about it?
                      <br />
                      Awesome!
                      <br />— What did you like about it and what not?
                      <br />
                      It goes directly to the point.
                      <br />— Do you have any suggestions on how can I improve
                      it?
                      <br />
                      Maybe some real-world examples.
                    </p>
                  </div>
                  <div className="feedback-details">
                    <div className="stars">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="name">Juan José D'Ambrosio</div>
                    <div className="location">Argentina</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      I've only gone through a portion of the course, reading
                      through it piece by piece when i have free time. I really
                      like the course and I think it's helping me become a
                      better programmer. It's already helped me with refactoring
                      my code. I think it's great and more people should know
                      about it.
                    </p>

                    <p>
                      Things I like are:
                      <br />- Very easy to understand and great examples.
                      <br />- Easy to understand why refactoring practices
                      exist.
                    </p>

                    <p>
                      Things I don't like are:
                      <br />- I bought the premium version because I wanted
                      access to the practice code. But it seems like I can't get
                      to the without reading through all the refactoring
                      practices and code smells portion yet (or maybe it just
                      isn't clear to me on how to access the practice portion).
                      <br />- A lot of the refactoring methods are reused in
                      different code smells. I understand that it's a way to fix
                      the code smell, but it can get a little repetitive reading
                      the same thing over and over.
                    </p>

                    <p>
                      If I had any suggestions on how to improve the site, I
                      would say that a way to access just the code examples
                      would be nice. And also maybe having some refactoring
                      methods for Javascript or ES6 with examples as well (I'm a
                      front end developer so I work a lot with JS). Although the
                      second suggestion isn't as important because these methods
                      can applied and translated across languages fairly easily.
                    </p>
                  </div>
                  <div className="feedback-details">
                    <div className="stars">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star-o" aria-hidden="true"></i>
                    </div>
                    <div className="name">Jeremy Field</div>
                    <div className="location">USA</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      It felt a bit boring to read. It did not feel so engaging.
                      I think some design patterns(fixes) didn't have good
                      examples given.
                      <br />I liked the way it is organized and linked between
                      different sections.
                    </p>
                  </div>
                  <div className="feedback-details">
                    <div className="stars">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star-o" aria-hidden="true"></i>
                      <i className="fa fa-star-o" aria-hidden="true"></i>
                    </div>
                    <div className="name">Rineez Ahmed</div>
                    <div className="location">India</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Спасибо, курс классный, я начал проходить, но пока
                      отложил, обязательно пройду! Никаких предложений по
                      улучшению к сожалению нет, всё нравится.
                    </p>
                  </div>
                  <div className="feedback-details">
                    <div className="stars">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="name">Владимир Ерыгин</div>
                    <div className="location">Россия</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      I think it's awesome!! Right now I'm working my way
                      through reading the sourcemaking website. I started
                      working on some of the refactoring guru course and will
                      finish it once I finish sourcemaking.
                    </p>
                  </div>
                  <div className="feedback-details">
                    <div className="stars">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="name">Allen Mackley</div>
                    <div className="location">USA</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Курс прошел 78%, довольно познавательно. Занимаюсь
                      программированием с 1994 года, тоже люблю красивый код.
                      Данный курс рассказывает как его достичь. Идея курса
                      "Погружение в Рефакторинг" замечательная!
                      <br />
                      Понравилось, что курс наглядно рассказывает, как достичь
                      красивого кода.
                    </p>
                  </div>
                  <div className="feedback-details">
                    <div className="stars">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="name">Eлиceeв Eвгeний</div>
                    <div className="location">Россия</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Yesterday i finished the course, i find it a good
                      alternative for reading books. Especially for running
                      source examples is a great idea. Working on the course was
                      a good alternation at work. The design pattern page is a
                      good help at work, especially the c# examples.
                    </p>

                    <p>
                      One thing i missed, after finishing the course, a
                      certificate for successful partcipating the course should
                      be included. After each seminar/course, i get a paper for
                      participation. For example, if you pass the PSM1 test in
                      scrum.org, you can download a certificate.
                    </p>
                    <div className="feedback-reply">
                      <b>Обратите внимание:</b> since January, 2019, everyone
                      who has finished the course can download a certificate of
                      completion.
                    </div>
                  </div>
                  <div className="feedback-details">
                    <div className="stars">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="name">Andreas Lamparter</div>
                    <div className="location">Germany</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      I love the book, though I haven’t read the whole book yet.
                      It was also a surprise for me that I got linked basic
                      solutions regarding the patterns.
                    </p>

                    <p>
                      I purchased your book because I like to relearn design
                      patterns frequently and see the use of them from another
                      perspectives. So overall I think your book is quite good.
                    </p>
                  </div>
                  <div className="feedback-details">
                    <div className="stars">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="name">Sandor Maraczy</div>
                    <div className="location">Hungary</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Курс рефакторинга хорошо оформлен, удобен в прохождении.
                      Рекомендую его всем своим знакомым или соратникам, когда
                      заходит речь о повышении навыков рефакторинга или
                      написания чистого кода.
                    </p>

                    <p>
                      К сожалению, есть несколько моментов, которые омрачают
                      прохождение:
                      <br />- Большая условность при демонстрации некоторых
                      методов решения. Смысл несомненно понятен, но курс-то
                      предназначен программистам. Ожидаемо увидеть примеры кода,
                      а не блок-схемы.
                      <br />- Отсутствие хоть какого-то тренажера по отработке
                      того или иного метода решения. От двух до пяти примерных
                      заданий вполне бы хватило для закрепления материала,
                      усиления погружения в обучение и повышения
                      заинтересованности. Всё-таки это курс, а не слайдшоу. Если
                      вас заинтересует, то есть шанс в феврале (к концу месяца)
                      представить вам перечень заданий для интерактивного
                      тренажёра. К сожалению (или к счастью) пишу на PHP\JS, но
                      могу попробовать сформировать задачник на JAVA.
                      Разумеется, эта инициатива продиктована бескорыстным
                      интересом к вашему курсу.
                    </p>

                    <p>
                      Само-собой, это всего лишь пожелания.. В целом курсом
                      доволен, хотя и не прошёл его полностью пока что.
                      Отвлекают рутинные задачи.
                    </p>
                  </div>
                  <div className="feedback-details">
                    <div className="stars">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star-o" aria-hidden="true"></i>
                    </div>
                    <div className="name">Василий Аносов</div>
                    <div className="location">Россия</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Я начал проходить курс, но пока остановился, из-за
                      нехватки времени. Пока мне всё очень нравится, по
                      сравнению с сухими книгами, читается и воспринимается
                      гораздо лучше.
                    </p>
                  </div>
                  <div className="feedback-details">
                    <div className="stars">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="name">Артем Бунеев</div>
                    <div className="location">Россия</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      1. In my opinion its very clever that refactoring course
                      is structured around code smells - makes it easier to
                      remember code smells and the ways they can be resolved.
                    </p>

                    <p>
                      2. The structure, the flow of the course and the small
                      code snippets with the problem and the solution is among
                      the things i liked a lot. Did not like so much the red
                      colour that dominates in the course but that's a matter of
                      personal preference, maybe it kind of 'forces' you to move
                      towards the end of the course faster that other colours.
                    </p>

                    <p>
                      3. One thing i would really like to see (i have not
                      reached the end of the course so maybe its already there
                      and i just did not see it yet) is a set of exercises: one
                      code snippet when you are given the problematic code that
                      needs refactoring, a small description of the solution
                      that we should follow and then in the next code snippet we
                      get to write the refactored code based on the suggested
                      solution.
                    </p>
                  </div>
                  <div className="feedback-details">
                    <div className="stars">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star-o" aria-hidden="true"></i>
                    </div>
                    <div className="name">Aimilia Kelaidi</div>
                    <div className="location">Netherlands</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Курс замечательный уже разгреб кучу кода и коллег учу)
                    </p>
                  </div>
                  <div className="feedback-details">
                    <div className="stars">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="name">Ruslan Akhriyev</div>
                    <div className="location">Россия</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Yes, I’ve started the course. I think I’m about 60 percent
                      of the way through. I think the UI is great and very easy
                      to use. I would have preferred if there were examples you
                      could try yourself. I would also have liked to have a
                      clearer idea of the overall layout of the content. And
                      finally, I found it confusing that there was so much
                      repetition.
                    </p>
                  </div>
                  <div className="feedback-details">
                    <div className="stars">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star-o" aria-hidden="true"></i>
                    </div>
                    <div className="name">Emma Murphy</div>
                    <div className="location">UK</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      I have started to look through the course. I was really
                      happy with the content and recommended it to my team.
                    </p>
                  </div>
                  <div className="feedback-details">
                    <div className="stars">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="name">Jonathan Rhodes</div>
                    <div className="location">Australia</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      I'm very happy with the course! I had a chance to go
                      through the different refactoring/smells and now I am
                      working on the design patterns.
                    </p>
                  </div>
                  <div className="feedback-details">
                    <div className="stars">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="name">Bryan Andrade</div>
                    <div className="location">USA</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Данный курс, позволяет эффективно освоить приемы
                      рефакторинга, содержит лаконичные объяснения и примеры
                      кода, которые без лишней воды дают ценную информацию.
                      Процесс прохождения наглядно отображается в шагах с
                      иллюстрациями. Каждый раздел структурирован для
                      эффективного представления информации.
                    </p>

                    <p>
                      Может показаться, что информация в разделах повторяется,
                      но как я понял автор просто попытался избавить
                      пользователя от перекрестных скачков по ссылочной
                      информации. Подача очень понравилась. Понравилось так же
                      что материал оптимизирован для просмотра на мобильных
                      устройствах.
                    </p>

                    <p>
                      Единственное пожелание к автору сделать интерактивную
                      карту курса что бы у пользователя была возможность одним
                      взглядом окинуть все разделы курса и при необходимости
                      перейти к нужному. И еще где нибудь выводить процент
                      освоенного материала, что бы представлять как далеко
                      пользователь продвинулся в изучении и какой объем еще
                      осталось изучить.
                    </p>
                  </div>
                  <div className="feedback-details">
                    <div className="stars">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="name">Артём Комаров</div>
                    <div className="location">Москва, Россия</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      I find the content to the point and written in easy to
                      understand language, with real problems ( I am also
                      referring to design pattern )
                    </p>

                    <p>
                      Thank you for the effort that you have put in it is
                      reflected in your content. If you can also add video
                      tutorial along with what you have it will be great.
                    </p>
                  </div>
                  <div className="feedback-details">
                    <div className="stars">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="name">Deepak Bhagat</div>
                    <div className="location">Singapore</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Прошел весь курс неспеша примерно за неделю. Понравились
                      перекрестные ссылки с запахов на рефакторинги и обратно.
                    </p>
                  </div>
                  <div className="feedback-details">
                    <div className="stars">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="name">Михаил Ершов</div>
                    <div className="location">Москва, Россия</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Спасибо за отличный курс! Я пользуюсь стандартными
                      рефакторингами, встроенными в Idea довольно часто, но даже
                      не думал, что их существует так много. Из новых самым
                      полюбившимся стала замена вложенных условий граничными
                      операторами.
                    </p>
                  </div>
                  <div className="feedback-details">
                    <div className="stars">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="name">Николай Тарасенко</div>
                    <div className="location">Одесса, Украина</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Мне понравилось как курс был структурирован в одну большую
                      историю. Знаю, вы только недавто запустились, но добавьте
                      примеры на Swift.
                    </p>
                  </div>
                  <div className="feedback-details">
                    <div className="stars">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star-o" aria-hidden="true"></i>
                    </div>
                    <div className="name">Виктор Кнас</div>
                    <div className="location">Rotterdam, Netherlands</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      I have tried the course. I have now unlocked the topic
                      "refactoring/smells". And here's the main and only issue I
                      have with the course - I have no idea how much I've got
                      left to complete. The only suggestion about improving the
                      course I can give you so far is, let me know how much I've
                      completed or how much I have left. I honestly don't know
                      if I'm currently at 20% or 92%.
                    </p>
                    <div className="feedback-reply">
                      <b>Update:</b> the progress indicator was added to the
                      course in the recent update.
                    </div>
                  </div>
                  <div className="feedback-details">
                    <div className="stars">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="name">Daniel Kašaj</div>
                    <div className="location">Zagreb, Croatia</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      I have gotten through a large section of the course (using
                      Java). I really like it so far. Thank you for putting it
                      together, it has been a good learning experience for me to
                      go through this.
                    </p>

                    <p>
                      I have gone through some sections repeatedly to understand
                      them better. I love the navigation, the graphics and how
                      easy some of the concepts are to understand because of how
                      the content is organized.
                    </p>

                    <p>
                      In terms of improvement, I think some of the code examples
                      get a bit repetitive as you go through some of the later
                      topics. I would request that some of the examples be
                      refined to make them more specific to the example at hand.
                    </p>
                  </div>
                  <div className="feedback-details">
                    <div className="stars">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star-o" aria-hidden="true"></i>
                    </div>
                    <div className="name">Ajay Bhat</div>
                    <div className="location">Hyderabad, India</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Hey I started the course. It is really good, I am gonna
                      finish it soon.
                    </p>
                  </div>
                  <div className="feedback-details">
                    <div className="stars">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="name">Darién Guilarte Duarte</div>
                    <div className="location">Fort Lauderdale, USA</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Хочу сказать, что работу вы проделали колоссальную!
                      Отдельная благодарность дизайнеру - изображения очень
                      радуют глаза. Это именно тот продукт, которым хочется
                      пользоваться и видно, что сделан с душой. Спасибо Вам!
                    </p>
                  </div>
                  <div className="feedback-details">
                    <div className="stars">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="name">Илья Ухляница</div>
                    <div className="location">Минск, Беларусь</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>I’d like to see more video content on your site.</p>

                    <p>
                      I’m not much of a reader and I would definitely use your
                      site more if it had videos covering the same topics you’ve
                      written about.{" "}
                    </p>
                  </div>
                  <div className="feedback-details">
                    <div className="stars">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star-o" aria-hidden="true"></i>
                      <i className="fa fa-star-o" aria-hidden="true"></i>
                    </div>
                    <div className="name">Loga J.</div>
                    <div className="location">London, UK</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>Здоровский курс, мне понравился, своих денег стоит.</p>

                    <p>
                      Единственное что мне не очень понравилось, что многие
                      примеры дублируются и не имеют особого отношения к
                      реальной жизни. Я имею в виду ту интерактивную штуку, где
                      происходит рефакторинг, и нужно кликать на "синие штуки"
                      :) Было бы здорово подобрать конкретные примеры для
                      каждого рефакторинга, может быть из реальных(или
                      придуманных) проектов. К примеру, очень часто встречается
                      такая логика: рефакторинг вроде выделить в отдельный метод
                      - интерактивный пример. Рефакторинг заинлайнить метод -
                      тот же пример но в обратном порядке. Понятно, что в
                      реальной жизни тот или иной рефакторинг нужно в
                      зависимости от ситуации делать и в процессе разработки, но
                      такие примеры немного запутывают.
                    </p>

                    <p>
                      В целом проект классный, посоветовал знакомым всем. Крутая
                      идея с интерактивностью этой.
                    </p>
                  </div>
                  <div className="feedback-details">
                    <div className="stars">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="name">Денис Максимов</div>
                    <div className="location">Иваново, Россия</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      I tried the course, it seems good. Currently I don't have
                      the time to continue but its in my plans. The only thing I
                      would like is more, how would I put it, coding exercises,
                      to grind it more trough the fingers. I like that it is
                      tutorial style themed, but would like also to have option,
                      like on design patterns to pick which topic I want to
                      learn about or need at the moment. Or maybe like on khan
                      academy, some big piece of code(something like this
                      https://github.com/zoran-horvat/sudoku-kata ) to refactor
                      and offered links to helpful topics, and like he said
                      there is not right one, its all about the practice.
                    </p>

                    <p>
                      Well thats my ten cents. Thanks for making something like
                      this it helped me a lot both refactoring and design
                      patterns.
                    </p>
                  </div>
                  <div className="feedback-details">
                    <div className="stars">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star-o" aria-hidden="true"></i>
                    </div>
                    <div className="name">Sinisa Radin</div>
                    <div className="location">Novi Sad, Serbia</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Thank you for your refactoring course. It is very clean,
                      simple and understandable, especially section with code
                      presentation.
                    </p>

                    <p>
                      I will appreciate any improvements, for example, covering
                      more examples with design patterns etc.
                    </p>
                  </div>
                  <div className="feedback-details">
                    <div className="stars">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="name">Vladimir Skipic</div>
                    <div className="location">Belgrade, Serbia</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Курс очень нравится в визульном плане, это здорово
                      мотивирует проходить дальше. Какие-то мелкие баги были,
                      типа где-то приходилось обновлять страничку, но точно
                      припомнить не могу.
                    </p>

                    <p>
                      Я думаю чаще всего Вам приходится слышать предложение про
                      расширение спектра ЯП - я сначала тоже сконфузился в
                      некоторых местах (прохожу курс на джаве, с ней знаком,
                      основные ЯП для меня - пайтон и свифт), если правильно
                      помню, было что-то про убогие джавовские енамы и
                      описываемая проблема как класс отсутствала в том же
                      свифте. Но в конечном итоге пришел к выводу, что будет
                      полезно с такой точки зрения посмотреть, какие именно
                      проблемы других окружений решаются в моем тем или иными
                      способами.
                    </p>
                  </div>
                  <div className="feedback-details">
                    <div className="stars">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="name">Дмитрий Гачковский</div>
                    <div className="location">Москва, Россия</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      I enjoyed very much this course but it is missing several
                      learning techniques:
                    </p>

                    <p>
                      - practice should be actual practice, your practice is
                      like a how to tutorial, we need to do the job ourselves
                      <br />
                      - mix refactoring and practice since the beginning, it
                      will help memorization and building knowledge on top of
                      knowledge
                      <br />
                      - more graphical cheat sheet, it is to extent and
                      overcrowded
                      <br />
                      - new code should be on the right side after refactoring
                      too show progress, at least in our left to right languages
                      that is how it should be.
                      <br />
                      - create a course like this for design patterns.
                      <br />
                      - real practice should be graded aaand last but not least
                      important,
                      <br />- create a refactoring certification diploma that i
                      can include in my resume to boost my career.
                    </p>

                    <p>
                      I hope you can make this changes possibles so i can retake
                      this course and improve my skills even more. thanks so
                      much, you are awesome
                    </p>
                  </div>
                  <div className="feedback-details">
                    <div className="stars">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star-o" aria-hidden="true"></i>
                      <i className="fa fa-star-o" aria-hidden="true"></i>
                    </div>
                    <div className="name">Михаил Ершов</div>
                    <div className="location">Москва, Россия</div>
                  </div>
                </div>
              </div>
              <div className="feedback-controls">
                <a href="#" className="btn btn-primary btn-sm load-more">
                  <i className="fa fa-arrow-up" aria-hidden="true"></i> Hiển thị
                  đánh giá tiếp theo
                </a>
              </div>
            </div>
          </div>

          <div className="section questions">
            <h2>Các câu hỏi thường gặp</h2>

            <div className="dl icon">
              <div className="dt">
                <i
                  className="fa fa-fw fa-cloud-download"
                  aria-hidden="true"
                ></i>{" "}
                Sau khi thanh toán, tôi nhận được gì?
              </div>
              <div className="dd">
                Bạn sẽ nhận được một tên người dùng và mật khẩu cho một tài
                khoản trên trang web này. Sau đó, bạn đăng nhập và bắt đầu khóa
                học. Tài khoản của bạn cũng sẽ có các liên kết để tải xuống các
                tài liệu bonus.
              </div>
            </div>

            <div className="dl icon">
              <div className="dt">
                <i className="fa fa-fw fa-clock" aria-hidden="true"></i> Tôi có
                thể truy cập trong bao lâu? Có giới hạn thời gian không?
              </div>
              <div className="dd">
                Không có giới hạn thời gian và không có phí hàng tháng/năm để
                duy trì quyền truy cập. Đăng nhập bất cứ khi nào bạn muốn và
                khóa học sẽ sẵn sàng cho bạn!
              </div>
            </div>

            <div className="dl icon">
              <div className="dt">
                <i className="fa fa-fw fa-credit-card" aria-hidden="true"></i>{" "}
                Chúng tôi chấp nhận các phương thức thanh toán nào?
              </div>
              <div className="dd">
                Bạn có thể thanh toán bằng thẻ tín dụng/thẻ ghi nợ (Visa,
                MasterCard, AmEx, Discover, JBC và nhiều loại khác), PayPal,
                Apple Pay, Google Pay, iDeal, Giropay, NetBanking, WeChat Pay,
                và Alipay.
              </div>
            </div>

            <div className="dl icon">
              <div className="dt">
                <i className="fa fa-fw fa-lock" aria-hidden="true"></i> Làm thế
                nào bạn giữ dữ liệu của tôi an toàn?
              </div>
              <div className="dd">
                Thông tin thanh toán của bạn được mã hóa và gửi trực tiếp đến
                cổng thanh toán. Nó không bao giờ được truyền tải đến hoặc lưu
                trữ trên máy chủ của chúng tôi.
              </div>
            </div>

            <div className="dl icon">
              <div className="dt">
                <i className="fa fa-fw fa-money-bill" aria-hidden="true"></i>{" "}
                Tôi có thể được hoàn lại tiền nếu tôi không hài lòng với khóa
                học không?
              </div>
              <div className="dd">
                Đúng vậy! Nếu bạn không hài lòng, vui lòng gửi email đến
                support@refactoring.guru với bản sao của hóa đơn và bạn sẽ được
                hoàn tiền, không có câu hỏi nào được đặt.
              </div>
            </div>

            <h2>Có thêm câu hỏi nào không?</h2>

            <p>
              <a
                href="https://feedback.refactoring.guru/forums/1-russianrusskij/?lang=ru&amp;show_feedback_form=true"
                className="userecho-private"
                rel="nofollow"
              >
                Gửi cho chúng tôi một tin nhắn trên diễn đàn
              </a>{" "}
              hoặc email tới{" "}
              <a href="mailto:support@refactoring.guru">
                support@refactoring.guru
              </a>
              . Chúng tôi thường trả lời trong vòng vài giờ.
            </p>
          </div>

          <div className="section section-bordered buy-button">
            <h3 style={{ marginTop: "0", textAlign: "center" }}>
              Dive Into <strong>REFACTORING</strong>
            </h3>

            <div className=" flex-row ">
              <div className="flex-grow-1" style={{ textAlign: "center" }}>
                <div className="price-tag price-tag-hg">
                  <div className="price-tag offer">
                    <span className="old-price font-money">$40.00</span>
                    <span className="new-price font-money">
                      <span className="offer-text">GIẢM GIÁ</span>
                      $14.95
                    </span>
                  </div>
                </div>
                <a
                  className="btn btn-secondary btn-buy btn-hg add-to-cart do-checkout"
                  href="#buy-now"
                  data-product="Dive Into Refactoring"
                >
                  <i className="fa fa-shopping-cart"></i> Mua ngay
                </a>
              </div>
            </div>
            <div style={{ textAlign: "center", marginTop: "15px" }}>
              <div>
                <strong>Học vào thời gian thuận tiện cho bạn</strong> / Cập nhật
                miễn phí / <strong>Bảo hành 30 ngày</strong>
              </div>
            </div>
          </div>
        </article>

        <div className="feature product-block">
          <div className="image">
            <a
              className="do-checkout"
              href="#buy-now"
              data-product="Dive Into Refactoring"
            >
              <img
                style={{ borderRadius: "30px" }}
                src="/images/refactoring/course/course-cover-en.jpg"
              />
            </a>
          </div>
          <div className="buy-widget">
            <div className="price-tag price-tag-hg compact">
              <span className="old-price font-money">$40.00</span>
              <span className="new-price font-money">
                <span className="offer-text">GIẢM GIÁ</span>$14.95
              </span>
            </div>
            <a
              className="btn btn-secondary btn-buy do-checkout"
              href="#buy-now"
              data-product="Dive Into Refactoring"
            >
              <i className="fa fa-shopping-cart"></i> Mua ngay
            </a>
          </div>
          <div className="buy-options mt-4">
            <a
              className="do-checkout btn btn-block btn-md btn-secondary"
              href="#buy-now"
              data-product="Dive Into Refactoring"
              data-purchase-type="1"
            >
              <i className="fa fa-gift"></i> Mua làm quà tặng
            </a>

            <a
              className="do-checkout btn btn-block btn-md btn-secondary mt-1"
              href="#buy-team"
              data-product="Dive Into Design Patterns"
              data-purchase-type="2"
            >
              <i className="fa fa-users"></i> Mua cho đội của tôi
            </a>
          </div>
          <div className="product-features">
            <div className="product-feature">
              <figure className="image">
                <img src="/images/content-public/landings/ipadiphone.png" />
              </figure>
              <div className="description">Tối ưu hóa cho máy tính bảng</div>
            </div>
            <div className="product-feature">
              <figure className="image">
                <img
                  src="/images/content-public/landings/satisf.gif"
                  width="60"
                  srcset="/images/content-public/landings/satisf.gif 2x"
                  loading="lazy"
                />
              </figure>
              <div className="description">Đảm bảo hoàn tiền trong 30 ngày</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContentCourse;
