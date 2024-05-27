import "./ContentBook.css";

const ContentBook = () => {
  return (
    // <body className="locale-ru announcement" data-body_class="">
    <main
      role="main"
      className="main-content top-content center-content"
      // data-page_class=""
    >
      <div className="main-content-container center-content-container">
        <article className="page text">
          <h1>
            <span>Dive Into</span>
            <strong>DESIGN PATTERNS</strong>
          </h1>

          <div className="lead">
            Một cuốn sách điện tử về các mẫu thiết kế và các nguyên lý đằng sau
            chúng .
          </div>

          <div className="top-product-block product-block">
            <div className="image">
              <a
                className="do-checkout"
                href="#buy-now"
                data-product="Dive Into Design Patterns"
              >
                <img
                  width="250"
                  src="/images/patterns/book/web-cover-en.png"
                  // srcSet="
                  //   /images/patterns/book/web-cover-en-2x.png 2x,
                  //   /images/patterns/book/web-cover-en-3x.png 3x
                  // "
                />
              </a>
            </div>
            <div className="buy-widget">
              <div className="price-tag price-tag-hg compact">
                <span className="old-price font-money">$30.00</span>
                <span className="new-price font-money">
                  <span className="offer-text">GIẢM GIÁ</span> $8.95
                </span>
              </div>
              <a
                className="btn btn-secondary btn-buy do-checkout"
                href="#buy-now"
                data-product="Dive Into Design Patterns"
              >
                <i className="fa fa-shopping-cart"></i> Mua ngay
              </a>
            </div>
            <div className="buy-options mt-4">
              <a
                className="do-checkout btn btn-block btn-md btn-secondary"
                href="#buy-now"
                data-product="Dive Into Design Patterns"
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
          </div>

          <p>
            <strong>Mẫu thiết kế</strong> giúp bạn giải quyết các vấn đề thường
            gặp trong thiết kế phần mềm. Nhưng bạn không thể chỉ tìm thấy một
            mẫu và sao chép nó vào chương trình của mình, như cách bạn có thể
            làm với các chức năng hoặc thư viện sẵn có. Một mẫu không phải là
            một đoạn mã cụ thể, mà là một khái niệm tổng quát để giải quyết một
            vấn đề cụ thể. Chúng giống như các bản thiết kế sẵn có mà bạn có thể
            tùy chỉnh để giải quyết một vấn đề thiết kế lặp lại trong mã của
            bạn.
          </p>

          <p>
            Cuốn sách <i>Dive Into Design Patterns</i> minh họa 22 mẫu thiết kế
            cổ điển và 8 nguyên lý thiết kế mà những mẫu này dựa trên.
          </p>

          <ul>
            <li>
              Mỗi chương sẽ bắt đầu với một <i>vấn đề</i> thiết kế phần mềm thực
              tế, sau đó giải quyết nó bằng cách sử dụng một trong các mẫu thiết
              kế.
            </li>
            <li>
              Sau đó, chúng tôi sẽ đi sâu vào một bài đánh giá chi tiết về{" "}
              <i>cấu trúc</i> của mẫu và các biến thể của nó, tiếp theo là một
              ví dụ mã.
            </li>
            <li>
              Sau đó, cuốn sách sẽ hiển thị các <i>ứng dụng</i> khác nhau của
              mẫu và hướng dẫn cách triển khai mẫu từng bước, ngay cả trong một
              chương trình đã tồn tại.
            </li>
            <li>
              Mỗi chương kết thúc bằng một cuộc thảo luận về{" "}
              <i>ưu điểm và nhược điểm</i> của mẫu và khám phá
              <i> mối quan hệ, sự tương đồng và khác biệt</i> của nó so với các
              mẫu khác.
            </li>
          </ul>

          <blockquote style={{ border: "solid 10px #ede", marginTop: "3em" }}>
            <h2>Tại sao phải biết về các mẫu thiết kế?</h2>

            <p>
              <b>Ghi điểm trong phỏng vấn và đánh giá.</b> Câu hỏi về các mẫu
              thiết kế xuất hiện gần như trong mọi cuộc phỏng vấn việc làm lập
              trình và trong mỗi cuộc đánh giá hiệu suất. Thu được nhiều công
              việc hơn và đạt được sự thăng chức và tăng lương mà bạn xứng đáng.
            </p>

            <p>
              <b>Mở rộng bộ công cụ lập trình của bạn.</b> Các mẫu thiết kế cho
              phép bạn tùy chỉnh các giải pháp sẵn có thay vì phải phát minh lại
              bánh xe. Mã của bạn có ít lỗi hơn vì bạn đang sử dụng một giải
              pháp chuẩn đã được kiểm chứng, bao gồm tất cả các vấn đề ẩn.
            </p>

            <p>
              <b>Giao tiếp tốt hơn với đồng nghiệp.</b> Chỉ cần chia sẻ tên của
              mẫu thiết kế thay vì lãng phí một giờ để giải thích chi tiết về
              thiết kế tuyệt vời của bạn và các lớp của nó cho các lập trình
              viên khác. Nhận được sự vinh quang mà không cần đổ mồ hôi.
            </p>
          </blockquote>

          <h2>Cuốn sách này dành cho ai?</h2>

          <p>
            <b>Người mới bắt đầu với mẫu thiết kế.</b> Nếu bạn chưa bao giờ học
            về các mẫu thiết kế, cuốn sách sẽ giải thích các nguyên tắc cơ bản
            của lập trình hướng đối tượng thông qua các ví dụ thực tế. Trước khi
            đi sâu vào các mẫu, chúng ta sẽ xem xét các giá trị và nguyên lý
            thiết kế mà các mẫu được xây dựng.
          </p>

          <p>
            <b>Người cần làm mới kiến thức về mẫu thiết kế.</b> Nếu bạn đã học
            về các mẫu thiết kế cách đây một thời gian, nhưng đã quên điều gì
            đó, cuốn sách điện tử này có thể làm mới lại kiến thức của bạn và là
            một nguồn tham khảo hữu ích. Dễ dàng tìm các phần quan trọng mà
            không cần phải đọc từ đầu đến cuối.
          </p>

          <p>
            <b>Những người chuyển đổi ngôn ngữ.</b> Nếu bạn đang chuyển sang một
            trong các ngôn ngữ lập trình hướng đối tượng (C#, C++, Go, Java,
            PHP, Python, Ruby, Rust, Swift hoặc TypeScript), bạn sẽ dễ dàng nắm
            bắt được bản chất của văn bản nhờ vào nhiều ví dụ và phản ánh từ
            thực tế, được hỗ trợ bởi các hình minh họa và sơ đồ hữu ích.
          </p>

          <blockquote
            className="demo"
            style={{
              border: "solid 10px #edd",
              marginTop: "3em",
              marginBottom: "3em",
            }}
          >
            <h2>
              <i className="fa fa-eye" aria-hidden="true"></i> Bản Demo Miễn Phí
            </h2>

            <div style={{ margin: "-0.5rem 0 1rem" }}>
              <a
                href="/files/design-patterns-en-demo.pdf"
                id="open-pdf"
                style={{ marginRight: "10px" }}
                className="btn btn-secondary"
              >
                <i className="fa fa-compass" aria-hidden="true"></i> Mở trong
                trình duyệt
              </a>
              <a
                href="/files/design-patterns-en-demo.pdf"
                id="download-pdf"
                download="dive-into-design-patterns-ru-demo.pdf"
                className="btn btn-primary"
              >
                <i className="fa fa-file-pdf" aria-hidden="true"></i> Tải PDF
              </a>
            </div>

            <p style={{ marginBottom: "0" }}>
              Tự kiểm tra chất lượng của cuốn sách. Bản demo bao gồm bảng mục
              lục, một số chương giới thiệu, ba nguyên lý thiết kế và mẫu thiết
              kế Factory Method.
            </p>

            {/* <script>
              document.getElementById("open-pdf").onclick = function () {
                document.getElementById("pdf").style.height = "700px";
                document.getElementById("pdf").style.marginTop = "20px";
                document.getElementById("pdf").innerHTML =
                  '<iframe src="/files/design-patterns-ru-demo.pdf" style="width: 100%; height: 100%;" frameborder="0" scrolling="no"><p>It appears your web browser doesn\'t support iframes.</p></iframe>';
              };
            </script> */}
            <div
              id="pdf"
              style={{ width: "100%", height: "0", transition: "all 0.25s" }}
            ></div>
          </blockquote>

          <div className="section guarantee d-sm-flex align-items-sm-center text-center text-sm-left">
            <img
              className="mb-4 mb-sm-0"
              style={{ width: "140px" }}
              src="/images/content-public/100-satisfaction-en.png"
              // srcSet="
              //   /images/content-public/100-satisfaction-ru-2x.png 2x,
              //   /images/content-public/100-satisfaction-ru-3x.png 3x
              // "
              alt="Гарантия удовлетворения"
            />
            <div className="ml-sm-4">
              <h2 className="title">100% Đảm bảo hài lòng</h2>
              <p>
                Không có rủi ro khi mua ngay bây giờ. Nếu trong vòng một tháng
                kể từ khi mua bạn quyết định rằng cuốn sách không hữu ích, toàn
                bộ số tiền của bạn sẽ được hoàn trả. Không có câu hỏi nào được
                đặt.
              </p>
            </div>
          </div>

          <div className="section section-bordered buy-button d-block d-sm-flex">
            <div className="flex-grow-1 text-center">
              <div className="price-tag price-tag-hg">
                <div className="price-tag offer">
                  <span className="old-price font-money">$30.00</span>
                  <span className="new-price font-money">
                    <span className="offer-text">Giảm Giá</span>
                    $8.95
                  </span>
                </div>
              </div>
              <a
                className="btn btn-secondary btn-buy btn-hg add-to-cart do-checkout"
                href="#buy-now"
                data-product="Dive Into Design Patterns"
              >
                <i className="fa fa-shopping-cart"></i> Mua ngay
                <br />
                <span>(Sẽ đắt hơn sau này!)</span>
              </a>
            </div>
            <div className="flex-grow-1">
              <ul>
                <li>
                  Bản sao cá nhân của bạn về <b>Dive Into Design Patterns</b>
                </li>
                <li>409 trang về văn chương kỹ thuật tuyệt vời</li>
                <li>225 (!) hình minh họa và sơ đồ</li>
                <li>
                  Bộ sưu tập các ví dụ mã nguồn phong phú
                  <br />
                  (Java, C#, C++, Go, PHP, Python, Ruby, Swift, TypeScript)
                </li>
                <li>Bảo đảm hoàn tiền trong vòng 30 ngày</li>
              </ul>
            </div>
          </div>

          <div className="section">
            <h2 className="inline-block" style={{ marginTop: "0" }}>
              Người khác nói gì?
            </h2>

            <div>
              <a href="https://www.goodreads.com/book/show/39940356">
                <img src="../../images/content-public/goodreads-badge-read-reviews.png" />
              </a>

              <span className="social-likes-block" data-url="../../index.html">
                <span className="facebook" title="Поделиться в Facebook">
                  Facebook
                </span>
              </span>

              <a
                href="../login4637.html?destination=https%3A%2F%2Ffeedback.refactoring.guru%2Fforums%2F1-russianrusskij%2F%3Flang%3Dru%26show_feedback_form_private%3Dtrue"
                className="btn btn-xs btn-success"
              >
                <i className="fa fa-star" aria-hidden="true"></i> Thêm một bài
                đánh giá
              </a>
            </div>

            <div className="alert alert-warning" style={{ marginTop: "1rem" }}>
              Hầu hết các bài đánh giá đều được gửi đến tác giả qua email dưới
              mọi hình thức nên chúng được xuất bản “nguyên trạng”, giữ nguyên
              định dạng ban đầu.
            </div>

            <div className="feedback-container">
              <div className="feedback-list">
                <div className="feedback-item visible">
                  <div className="feedback">
                    <p>
                      Everything is well explained and I like the way all basics
                      are introduced first (UML, SOLID) and then we can go on
                      each design pattern and play with it. The only improvement
                      I see is making printed version available (I prefer paper
                      to pdf) and maybe in another languages.
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
                    <div className="name">Mickaël Andrieu</div>
                    <div className="location">USA</div>
                  </div>
                </div>

                <div className="feedback-item visible">
                  <div className="feedback">
                    <p>
                      Your book is great. I am junior level developer and
                      certainly happy with the purchase! I like the structure of
                      how each pattern is presented, and the UML and examples
                      really clarify things. I also like the "vibe", which keeps
                      it fun yet on-point. I can't think of a con. Thanks for
                      this!
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
                    <div className="name">Leon Wong</div>
                    <div className="location">Canada</div>
                  </div>
                </div>

                <div className="feedback-item visible">
                  <div className="feedback">
                    <p>
                      The book is awesome, easy-understanding and well-written.
                      Just have a little suggestion to organize the content not
                      in alphabetical order but by categories would be better.
                      And also put some code in it [rather than having it in
                      separate archive] so that it would be easier to read on an
                      iPad when travel.
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
                    <div className="name">Zhang Lingkang</div>
                    <div className="location">China</div>
                  </div>
                </div>

                <div className="feedback-item visible">
                  <div className="feedback">
                    <p>
                      I read it the same day I got it, I mostly use it as a
                      refresher on on when I dont see the woods for the trees. I
                      think it's fine the way it is.
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
                    <div className="name">Christopher Lousberg</div>
                    <div className="location">UK</div>
                  </div>
                </div>

                <div className="feedback-item visible">
                  <div className="feedback">
                    <p>
                      I have been really busy with work recently. The info you
                      have on design patterns has been a huge help and an
                      excellent reference! <br />I think what you have currently
                      is well done and the organization is superb!
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
                    <div className="name">Pamela Wheeler</div>
                    <div className="location">USA</div>
                  </div>
                </div>

                <div className="feedback-item visible">
                  <div className="feedback">
                    <p>
                      Книга отличная. Написано максимально доступно, без
                      излишней терминологии и воды. Примеры достаточно понятные,
                      из жизни. Начал читать еще когда был только сайт, но
                      захотел поддержать автора :)
                    </p>

                    <p>
                      Больше всего нравятся иллюстрации паттернов - иконки, по
                      которым быстро запоминается назначение и разделы с
                      практическими применениями и связями паттернов между
                      собой.
                    </p>

                    <p>
                      Хотелось бы добавить еще паттернов. Я еще очень давно
                      писал про "репозиторий". Достаточно удобный и популярный.
                      Еще можно "единицу работы" добавить. Вообще хотелось бы
                      больше более специфических паттернов. Общие можно где
                      угодно найти, а вот более сложные нуждаются в простом
                      объяснении, которого как раз в интернете не найдёшь.
                    </p>

                    <p>
                      Еще одно пожелание, как программиста на JS - возможность
                      добавить где-то примеры для фронт-енд. Сейчас много
                      программистов работают на JS, даже не зная, как
                      использовать то или иной паттерн на практике. Или не зная,
                      что задача уже решалась сотни раз.
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
                    <div className="name">Алексей Петленко</div>
                    <div className="location">Украина</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Книгу читаю периодически, когда надо освежить. Мне очень
                      нравится. Раньше читал сайт, потом решил купить книгу: она
                      того заслуживает. Нравятся иллюстрации, доступное
                      описание, примеры. Из непонравившегося: синтаксис
                      псевдокода мне не знаком и я не знаю как искать сам
                      синтаксис чтобы с ним ознакомиться. Отличная работа:
                      давайте книгу по энтерпрайз паттернам, я бы купил.
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
                    <div className="name">Дмитрий Куркин</div>
                    <div className="location">Украина</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Вашу книжку я почав читати і вона мені дійсно довподоби.
                      Із зауважень хочу виділити лише те, що я очікував на java
                      приклади у самій книжчі, а не у окремому архіві, та трохи
                      розчарувала відсутність англомовного варіанту. Та в цілому
                      все дуже добре!
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
                    <div className="name">Ігор Ковтун</div>
                    <div className="location">Украина</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Книга дуже сподобалась. Написана простими словами
                      зрозумілою мовою. Чудово підійде як студентам так і
                      досвідченим розробникам. Описано переваги та недоліки
                      кожного патерна (часто записують на співбесідах). Було б
                      круто якби були приклади на C#. Однозначно рекомендуватиму
                      своїм знайомим.
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
                    <div className="name">Тарас Красниця</div>
                    <div className="location">Украина</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Купил данную книгу для ознакомления и изучения паттернов,
                      так как обучаюсь на разработчика. Очень понравилась подача
                      информации, забавные (и в то же время очень тематические)
                      зарисовки и само структурирование материала. На данный
                      момент еще не все дочитал, так как времени нет, но
                      обязательное прочтение данной книги у меня в дальнейших
                      планах. Информация достаточно понятная оказалась даже для
                      меня, хоть я только недавно узнал про паттерны) в целом и
                      в-общем рекомендую её, иметь в библиотеке (не пожалеете).
                      Единственное - достаточно сложно применять знания на
                      практике, но я надеюсь, что не единственный такой.
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
                    <div className="name">Фарит Ахмеров</div>
                    <div className="location">Россия</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      До рефакторинга еще не добрался времени нет, но есть пара
                      слов о книге паттерны проектирования. Дизайн и подача
                      материала на 5, не сказано радует что добавили примеры на
                      языке php. В принципе минусов я не нашел если кому то
                      кажется сложно пусть попробуют почитать книгу GoF.
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
                    <div className="name">Алексей Буховский</div>
                    <div className="location">Россия</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>Мой отзыв, естественно, восторженный :)</p>

                    <p>
                      ООП "свалилось" на меня, когда я решил выучить Python в
                      дополнение к R. Моя работа вышла за рамки простых скриптов
                      и отдельных функций, пришлось приспосабливаться к
                      совершенно непривычному стилю программирования, да и
                      сложность проектов стала совершенно другой. Мне очень не
                      хватало единого источника, настольной книги, по которой я
                      мог бы изучать базовые вещи в ООП. В книге я нашел всё для
                      старта: простые и конкретные пояснения, SOLID, постепенный
                      ввод читателя в мышление в стиле ООП, бонус - научился
                      понимать UML. В книге очень удачная постановка проблем для
                      решения с помощью паттернов. Описание самих паттернов
                      понятно на интуитивном уровне. Больше всего я оценил
                      тщательно продуманную логику изложения, которая постепенно
                      "интегрируется" в мышление и меняет взгляд на
                      программирование (это очень важно, если до этого писал
                      обычную процедурку с функциями). Я очень рекомендую
                      «Погружение в Паттерны Проектирования» начинающим
                      программистам и всем, кто решил изучить или перейти на
                      ООП. На русском языке лучшего изложения вы не найдёте.
                    </p>

                    <p>Отвечаю на вопросы:</p>

                    <p>
                      В: Вы уже начали читать книгу? <br />
                      О: Книгу я прочитал сразу и перечитал еще несколько раз.
                      Книга однозначно раскрывает чакры :)
                    </p>

                    <p>
                      В: Какие ваши впечатления? <br />
                      О: Впечатления - переворот в мышлении. Я наконец - то
                      почувствовал себя частью команды, а не отшельником,
                      который пишет странные скрипты на странном языке.
                    </p>

                    <p>
                      В: Что вам понравилось, а что не очень? <br />- Понравился
                      порядок изложения, легкие пояснения. В интернете полно
                      бесплатной информации по паттернам, но я купил книгу,
                      соответственно недостатки не рассматриваю. Реально, эта
                      книга - лучшее пояснение паттернов, что я видел.
                    </p>

                    <p>
                      В: Есть ли у вас идеи, как можно было бы улучшить книгу?
                      <br />
                      О: Улучшить - добавить про MVC и примеры на Python.
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
                    <div className="name">Олег Попов</div>
                    <div className="location">Россия</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Поки що не бачив такого з одного боку простого, а з іншого
                      змістовного опису патернів. Я спочатку у вас на сайті
                      читав про патеррни і дуже сподобалось те що розбили опис
                      одного патерна на секції, те що приводити приклад
                      використання, псевдокод, порівнюєте з іншими патернами.
                      Так от, потім хотів порадити сайт дружині (вона теж
                      розробник ПЗ), а виявилось що вона вже і сама у вас
                      патерни читає :) Через якийсь тиждень вирішив купити
                      книжку, таким чином сказати дякую за роботу автору, а з
                      іншого і самому мати під рукою по поличкам розкладені
                      основні патерни.
                    </p>

                    <p>
                      Зараз намагаюсь по два патерни в тиждень читати, щоб мати
                      змогу більш детально запам’ятати їх. Інакше щось забуваю
                      через місяць, так що вирішив по пару штук вчити :) Що не
                      сподобалось чи які ідаї, не можу сказати, поки що. Я хотів
                      мати добре проговорені патерни, я їх отримав.
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
                    <div className="name">Alex Kuskov</div>
                    <div className="location">Украина</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Книга отменная, все кратко, емко, наглядно и по делу;
                      лучшая, наверное, на сегодняшний момент из всех, что я
                      видел по данной тематике; можно смело рекомендовать как
                      новичкам, так и специалистам; <br />
                      Написано доходчиво, последовательно, упомянуты все важные
                      темы, изложить постарались кратко и понятно (в HeadFirst
                      примеры разжеваны сильнее, но тут они короче и нагляднее);
                      можно рекомендовать прочесть даже до HeadFirst-овской
                      книжки;
                    </p>

                    <p>
                      Если кратко сравнить с другими (возьму популярные):
                      <br />- GoF - скорее каталог паттернов, эдакий справочник
                      для программистов, которые уже с такими проблемами
                      сталкивались и будут использовать книжку, чтобы вспомнить,
                      какое можно взять решение для той или иной общей проблемы;
                      новички из нее много не вынесут (т.к. паттерны - решения
                      общих проблем, то они с такими проблемами даже не
                      сталкивались, чтобы оценить элегантные способы их решения){" "}
                      <br />- Head First, Паттерны проектирования - учебник,
                      специфика изложения - именно под обучение, чтобы лучше
                      запомнить мысль, одно и то же рассказывается несколько
                      раз, просто разными словами; <br />А здесь золотая
                      середина - можно читать по порядку, либо пользоваться как
                      справочником; <br />У книги замечательная методическая
                      ценность, на наглядных примерах "на пальцах" гораздо проще
                      объяснять паттерны (в той же GoF примеры более специфичны,
                      их представить новичку будет сложнее; к примеру - Visitor
                      для разбора синтаксического дерева, фасад - тоже что-то
                      про компиляцию, либо State с примером про TCP-коннекты);
                      <br />
                      Особенно хорошо, что есть разделы "зачем знать паттерны",
                      принципы SOLID и подобные вещи, неотъемлимо относящиеся к
                      паттернам;
                    </p>

                    <p>
                      Псевдокод - хорошее решение, т.к. реализация паттернов на
                      конкретных языках программирования будет различной,
                      специфической для этого языка и будет отвлекать от сути;
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
                    <div className="name">Виктор Сенченко</div>
                    <div className="location">Россия</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Читаю книгу, все доступно розжовано, єдине - для мого поля
                      діяльності embedded C не все можна застосувати. Добре що
                      матеріал на українській мові, читається дуже швидко.
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
                    <div className="name">Ярослав Сліпчук</div>
                    <div className="location">Украина</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      В цілому, я задоволений. Книга динамічно пронизує в
                      дійсності достатньо складні теми. Не заставляє нудьгувати,
                      і що важливо- цікавий спосіб подання - він занурює читання
                      далі.
                    </p>

                    <p>
                      В дійсності я знайомий із патернами проектування, а
                      покупку вашої книги для мене важлива по декільком
                      причинам: <br />
                      1. Дуже важливою є бачити ще один погляд на цю
                      проблематику. (між іншим цього разу, - вперше, - на рідній
                      мові) <br />
                      2. Ви розвиваєте дуже хороший ресурс Refactoring.Guru і я
                      б дуже хотів, щоб він розвивався й надалі.
                    </p>

                    <p>Вдячний за вашу роботу!</p>
                  </div>
                  <div className="feedback-details">
                    <div className="stars">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="name">Михайло Кравець</div>
                    <div className="location">Украина</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Книгу читать начал, на данный момент изучаю порождающие
                      паттерны. Впечатления положительные, книга помогает в
                      освоении паттернов. Понравилось, что перед тем как
                      приступить к изучению дано изложение принципов ООП,
                      принципов проектирования, что упрощает погружение в
                      паттерны. Думаю, было бы проще, если бы было чуть больше
                      информации об интерфейсах. В книге было сказано, что
                      разработчики путают публичную часть класса и оператор
                      interface, и было бы понятнее, если бы было объяснено, что
                      порой интерфейс можно реализовать путём создания класса
                      без реализации (в случае отсутствия оператора), и вообще,
                      при этом может отсутствовать множественное наследование, и
                      как в этом случае реализовать рекомендации из книги.
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
                    <div className="name">Евгений Родионов</div>
                    <div className="location">Россия</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Yes, I read it the same day I got it, I mostly use it as a
                      refresher on on when I dont see the woods for the trees. I
                      think it's fine the way it is.
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
                    <div className="name">Christopher Lousberg</div>
                    <div className="location">Czech Republic</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      По содержанию книги у меня претензий нет. Прочел с
                      интересом. Для меня основным побуждающим мотивом на
                      покупку книги был формат epub (чтоб читать в мобилке). Для
                      книг по IT это редкость.
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
                    <div className="name">Alexey Firsakov</div>
                    <div className="location">Россия</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Покупкой доволен =) Книгу было интересно читать и
                      чувствуется, что не зря прочитал. Т.к. это первая книга по
                      паттернам сравнивать мне её не с чем, но после прочтения
                      мне стало проще разбираться в коде библиотек и
                      фреймворков. В своём коде тоже начал использовать
                      паттерны. В целом книга меня продвинула на новую ступень в
                      программировании и открыла мне дверь в мир паттернов =)
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
                    <div className="name">Евгений Котюков</div>
                    <div className="location">Россия</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Покупая книгу я уже был в курсе того как она написана,
                      ознакомился на сайте. В целом очевидно что подача
                      максимально разжевана. Приятные иллюстрации разбавляют
                      текст. Рекомендовал сайт другим людям.
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
                    <div className="name">Сергей Рыдкин</div>
                    <div className="location">Беларусь</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Книга превзошла ожидания - помимо самого каталога
                      паттернов, там есть хорошее введение тему ООП и SOLID, а
                      также, разбор диаграмм классов. С первых страниц
                      понимаешь, что книга сделана с умом и для людей, со
                      вниманием к мелочам.
                    </p>

                    <p>
                      Будет ли книга полезна опытному разработчику? Да, это
                      отличный справочник по паттернам проектирования. Примеры
                      на псевдокоде и реализации на конкретных ЯП позволят
                      максимально быстро разобраться.
                    </p>

                    <p>
                      Будет ли книга понятна новичку? Да, всё описано на
                      примерах "из жизни", текст легко воспринимается и
                      сопровождается прекрасными иллюстрациями.
                    </p>

                    <p>
                      Минусы: Не советую читать перед сном, потому что в
                      какой-то момент настолько захочется реализовать один из
                      паттернов, что не сможешь уснуть! :D
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
                    <div className="name">Сергей Мелодин</div>
                    <div className="location">Россия</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Эта книга - лучшее, что я читал по паттернам! Жалко, что
                      ее не было в то время, когда я учился в университете, так
                      как нам приходилось делать доклады по каждому паттерну, а
                      информации в понятном виде, с хорошими примерами было
                      очень мало.
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
                    <div className="name">Иван Романович</div>
                    <div className="location">Россия</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Перед тим як купити книжку я пройшов структурні і
                      породжувальні паттерни на сайті, що змотивувало мене
                      купити книжку, так як це відносно невелика плата за такий
                      корисний ресурс, і я таким чином міг сказати автору,
                      дякую. Згодом придбав книжку і дочитав вже те чого не
                      вистачало, максимум витратив на все це один місяць.
                    </p>

                    <p>
                      Книжка дуже крута! Вона допомогла мені при співбесіді в
                      softserve (хоча я й не отримав офер). Задяки гарним
                      прикладам з життя дуже добре запам’ятовується суть
                      паттернів, один з прикладів я використав на співбесіді.
                      Ваша книжка відкрила для мене ще невідомий світ паттернів
                      проектування, про який я взагалі не знав до недавнього
                      часу.
                    </p>

                    <p>
                      Щодо того що можна покращити, то в кінці книжки Ви даєте
                      посилання на шпаргалку в якій є ще поведінковий паттерн
                      інтерпретатор, можливо його також варто описати в книзі? І
                      дуже чекаю прикладів паттернів, а також рефакторингу на
                      Python.
                    </p>

                    <p>Дякую за вашу працю, і бажаю Вам успіхів!</p>
                    <div className="feedback-reply">
                      <b>Обратите внимание:</b> �одо Інтерпретатора, то я не
                      включив його до книги а каталогу на сайті свідомо. Ось тут
                      можна почитати докладніше чому:
                      https://feedback.refactoring.guru/helpdesks/2/tickets/702-missing-interpreter-pattern-in-behavioral-section#comment-940
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
                    <div className="name">Юрий Хомич</div>
                    <div className="location">Украина</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Сподобалась простота подання матеріалу (без всяких
                      "розумних" слів). Такого роду матеріал для мене дуже легко
                      засвоюється.
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
                    <div className="name">Павло Андрощук</div>
                    <div className="location">Украина</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>Я невероятно доволен покупками! Спасибо Вам за труды!</p>

                    <p>
                      Прямо сейчас я методично изучаю паттерны проектирования,
                      закрепляя на практике. Также вскоре планирую продолжить
                      проходить интерактивный курс по рефакторингу, всвязи с
                      недавним переездом в другой город распорядок дня немного
                      сбился, не так много времени есть на всё про всё к
                      сожалению.
                    </p>

                    <p>
                      Я далеко не силён в написании отзывов, но совершенно не
                      против, если от моего лица (и даже с моими контактными
                      данными) будет написан отличный отзыв о Ваших продуктах :)
                      И если будет необходимо - подтвержу кому угодно что это
                      действительно мой отзыв и что я действительно так считаю.{" "}
                      <br />
                      Хочу также сказать, что восхищен подходом к написанию
                      книги! Крутая смесь подачи сложного материала простыми
                      идеями, прекрасные примеры и просто ОТМЕННЫЕ иллюстрации.
                      Приятнее книги для чтения и изучения я ещё не видел.
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
                    <div className="name">Дмитрий Печковский</div>
                    <div className="location">Россия</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Ваша книга появилась в нужный момент и помогла мне закрыть
                      дыры в вопросах паттернов. Единственное, что мне
                      показалось, что книга дублирует контент, который есть на
                      сайте в открытом доступе. Но я нисколько не расстроился.
                      Ваш труд стоит потраченных денег. Изучаю книгу в спокойном
                      темпе, не тороплюсь. Перечитываю примеры. Книга показала
                      ваш серьезный подход к работе. В будущем планирую купить
                      курс по рефакторингу. Огромное спасибо за проделанную
                      работу.
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
                    <div className="name">Олег Пацай</div>
                    <div className="location">Россия</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Я, начав обучаться на сайте JavaRush, в одном из
                      комментариев по уроку обнаружил ссылку на ваш сайт. Тогда
                      я параллельно на работе получал теорию по Джаве, среди
                      которой были шаблоны проектирования. Изучая доступные до
                      посещения вашего сайта материалы, я понимал насколько
                      сложно усвоить суть шаблонов. Это притом что в разработке,
                      правда не ООП, я уже достаточно долго и часть шаблонов
                      использую по наитию.
                    </p>

                    <p>
                      Перейдя по ссылке, я понял, что есть и другой мир, где
                      понимание все-таки существует, и для этого не нужно
                      прикладывать невообразимые усилия. С тех пор я изредка
                      посещаю сайт. Сейчас я участвую в одном стартапе, где в
                      том числе мы пытаемся осознанно применять шаблоны
                      проектирования. Несмотря на то, что интернет доступен, я
                      посчитал необходимым иметь такой материал под рукой,
                      поэтому купил книгу.
                    </p>

                    <p>
                      Не могу сказать, что зачитал ее до дыр, но периодически
                      обращаюсь к ней как к справочной информации и понимания
                      как на работе, так и в обучении на JavaRush. Считаю ваше
                      начинание очень полезным, ни разу не пожалел о покупке
                      Книги. При случае рекомендую ваш сайт знакомым.
                    </p>

                    <p>
                      Из пожеланий в силу своих текущих потребностей, лично мне
                      хотелось бы иметь примеры, приближенные к реальным
                      потребностям промышленной разработки. Т.е. сейчас примеры
                      хороши, но все таки они синтетические. Хотелось бы ещё и
                      примеров а-ля: была потребность сделать то-то, разложив
                      задачу так-то понял что можно применить шаблон такой-то
                      если допилить так-то, и это применимо здесь больше чем
                      другое потому-то.
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
                    <div className="name">Генрих Авдеев</div>
                    <div className="location">Россия</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      От книги испытваю неприкрытый восторг! Всё понравилось.
                      Чего бы хотелось увидеть в следующих вариантах этой книги
                      это примеры использования комбинаций паттернов т.к. много
                      где в разных источниках упоминается но нет примера. За
                      книгу огромное спасибо! Успехов!
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
                    <div className="name">Alex Petrov</div>
                    <div className="location">Украина</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      I have been really busy with work recently. The info you
                      have on design patterns has been a huge help and an
                      excellent reference!
                    </p>

                    <p>
                      I think what you have currently is well done and the
                      organization is superb!
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
                    <div className="name">Pamela Wheeler</div>
                    <div className="location">USA</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Я читаю вашу книгу, але окремими розділами і це мені
                      подобаєть. Те що особисто мені не дуже подобається: опис
                      патерна в псевдо коді. Нажаль він мені дається набагато
                      гірше ніж java.
                    </p>

                    <p>
                      Що можна покращити: так як я читаю книгу в громадському
                      транспорті, особисто мені було б дуже круто бачити приклад
                      патерна в книзі на java. Можливо було б прикольно зробити
                      книги не тільки на різних мовах але й відразу з прикладами
                      коду на якійсь одній обраній мові.
                    </p>

                    <p>Легко і швидко читається!</p>
                  </div>
                  <div className="feedback-details">
                    <div className="stars">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="name">Руслан Бур</div>
                    <div className="location">Украина</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Книжка является хорошим справочником по типовым паттернам
                      имени GoF. Все по делу изложено.
                    </p>

                    <p>
                      Хорошо бы дополнить паттернами из мира UI: MVC, MVP, MVVM
                      (PM).
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
                    <div className="name">Александр Галилов</div>
                    <div className="location">Россия</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Книга замечательная! Решил купить, когда ваш сайт
                      рекомендовал Владимир Сонькин из Luxoft на вебинарах
                      Otus.ru, до этого сайт рекомендовали ребята GDG SPB. Уже
                      на сайте достаточно информации по паттернам. Книга
                      написана в доступной, итересной форме. Даже забавные
                      картинки объясняют суть паттерна.
                    </p>

                    <p>
                      Что касается улушений: может ешё дабавить код на С++ в
                      примеры? Особенно интересны реализации пттернов
                      поддерживаюшие множественнное наследование классов.
                      Возможно интересны будут потокобезопасные варианты, если
                      там есть свои хитрости. но я пока до них не дошёл. А так
                      рекомендую не остановливаться ))
                    </p>

                    <p>
                      Может в отдельной книжке написать о паттернах
                      многопоточности?: Concurrency pattern. Active Object,
                      Balking, Barrier, Double-checked locking, Guarded
                      suspension,Leaders/followers, Monitor Object, Reactor,
                      Read write lock, Scheduler, Thread pool, Thread-local
                      storage. Большое спасибо за ваш труд!!!
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
                    <div className="name">Алексей Кузьмичёв</div>
                    <div className="location">Россия</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Книгу купил потому что очень понравился проект. Да и книга
                      оказалась замечательная. Все коротко и понятно, без воды.{" "}
                      <br />
                      Понравилось энциклопедическая структура, иконки, текст
                      читсый приятный. Не понравилось.. Хм.. Ну это не то что не
                      понравилось, просто хотелка - примеры на Python, или ищу
                      каком-нибудь менее объекто-ориентированном языке, там где
                      не все так понятно, но это не к книге. <br />У меня не так
                      много опыта в программировании, и я в восторге от уже
                      имеющегося материала, поэтому предложить могу только разве
                      что отдельные главы про комбинации паттернов… Несмотря на
                      то что у вас описаны отношения с патентами, но возможно
                      иногда можно описать какие-то часто встречающиеся
                      комбинации с псевдокодом, это бы конечно было полезно.
                    </p>

                    <p>
                      А вообще замечательный проект, замечательная книга,
                      спасибо Вам большое!
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
                    <div className="name">Андрей Груздев</div>
                    <div className="location">Россия</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Я очень доволен покупкой! Да, я уже начал читать вашу
                      книгу. Очень понравилась подача информации, с юмором, от
                      чего желание продолжать изучение только усиливается. Лично
                      для меня не очень было удобно читать схемы, приходилось
                      возвращаться к началу чтобы понять, что же означают эти
                      стрелочки, линии и ромбики. По поводу улучшения книги, то
                      после полного прочтения постараюсь что нибудь предложить,
                      хотя сейчас всё на очень высоком уровне! Отдельно хочу
                      сказать вам Спасибо за такую прекрасную книгу и такую
                      подачу информации!
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
                    <div className="name">Леха Кухаренко</div>
                    <div className="location">Украина</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Книга очень легко прочиталась, думаю ее прочитывать еще не
                      один раз, так как очень помогает старый код
                      переосмысливать на паттерны. Спасибо! <br />
                      П.С. Иллюстрации в книге забавные, понравились)
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
                    <div className="name">Ольга Горобченко</div>
                    <div className="location">Украина</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      I only had time to glance at the book but it seems really
                      amazing. I hope to have time since next month to read it.{" "}
                      <br />
                      About the things that made me to buy it are the cartoons
                      and UML diagrams that simplifies the understanding of each
                      pattern. I really like them!
                      <br />I would like to suggest you to do something similar
                      (including cartoons) with the most famous programming
                      antipatterns.
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
                    <div className="name">Alvaro Prieto</div>
                    <div className="location">Spain</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Thank you for reaching out to me in regards to the design
                      patterns and refactoring. I’ve thoroughly enjoyed the
                      materials, and they are a great resource.
                    </p>

                    <p>
                      In my college Software Engineering program we used the
                      book by the GoF on Design Patterns, and it was great
                      material. However, I find that the way you explain things
                      and layout samples is far better, and I reference the
                      website often.
                    </p>

                    <p>
                      I currently have an ongoing project to adapt the design
                      patterns to industrial robotics systems; the book has
                      helped me refresh and see things I haven’t seen before.
                      Most automation systems are programmed with the IEC61131-3
                      languages, and most programmers in the field are very
                      basic programmers; no knowledge of OOP and Design
                      Patterns, very dated industrial/electrical engineer types.
                    </p>

                    <p>
                      I wish I had more critical feedback I could give, but
                      everything looks great!
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
                    <div className="name">John Helfrich</div>
                    <div className="location">USA</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      — Вы уже начали читать книгу? <br />Я уже ее прочитал и
                      использую как справочник. <br />— Какие ваши впечатления?{" "}
                      <br />
                      Книга отличная. Все объясняется легко и доходчиво. <br />
                      Наверно это самая полная и понятная информация, которую я
                      находил. <br />+ примеры очень помогают в понимании.{" "}
                      <br />— Что вам понравилось, а что не очень? <br />
                      Понравилось доходчивое описания паттернов. <br />
                      Иллюстрации. <br />
                      Подача текста
                      <br />— Есть ли у вас идеи, как можно было бы улучшить
                      книгу? <br />
                      Наверное было бы хорошо добавить больше реальных примеров
                      связанных именно с программированием. (хотя бы по одному){" "}
                      <br />и Больше котов)
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
                    <div className="name">Михаил Коренев</div>
                    <div className="location">Россия</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      I have just read the book and I think it is amazing. I
                      have bought both of your patterns books and refactoring
                      course and if you need me to buy from you again I will :)
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
                    <div className="name">Toni Dezman</div>
                    <div className="location">Slovenia</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      So far I find this book very interesting and useful in
                      terms of examples/diagrams and ideas. I wish you could
                      have the code written in Java.
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
                    <div className="name">Ion Apostol</div>
                    <div className="location">Romania</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      I am loving the book so far. I'm currently reading it on
                      my Kindle. I'll use it to make dojos with some friends of
                      mine so that we practice the principles of the book.
                    </p>

                    <p>
                      As for suggestions, maybe it's a bit too soon to say since
                      I'm still at the beginning and I'm a slow reader, but
                      maybe exercises? I don't even know if the book presents
                      exercises. Maybe it does and I didn't get there yet.
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
                    <div className="name">Vinícius Guerra Cardoso</div>
                    <div className="location">Brazil</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      The book is great and makes all the patterns more easier
                      to understand than the books or examples i found on the
                      internet. <br />I like your style of writting, it`s easy
                      to understand. You are going from the problem to the
                      solution and that process give me the best understanding
                      about pattern. <br />
                      Comparations betweem patterns are helpful alot. <br />
                      Maybe the UML diagrams should have cardinality and the
                      role that a className plays in the relationship because
                      it's difficult for the first reading for every problem
                      follow all properties from the code or from the text.{" "}
                      <br />
                      Maybe for some patters you should use the same problem,
                      saving time to understand the new problem but to
                      concentrate just on pattern, and make good comparision of
                      new pattern with the old one. Well it's good to have more
                      different problems for diversity but it's more time
                      consuming and little blury the pattern.
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
                    <div className="name">Nikola Pajić</div>
                    <div className="location">Serbia</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Книга хорошая, впечатления оставляет только положительные.{" "}
                      <br />
                      Подойдет как для джунов, так и знакомых с "кухней".
                      Однозначно могу рекомендовать для погружения или
                      обновления знаний.
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
                    <div className="name">Артем Иванский</div>
                    <div className="location">Украина</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Я довольний книжкою і вже рекомендував її своїм колегам.
                      Насправді, незважаючи на те, що тема цього довідника вже
                      давно для мене пройдена, мене підкупила сама якість
                      викладення контенту, в сукупністю з візуальною складовою!
                      Тобто, вони являються невідривними сутностями, і це
                      свідчить про якість. Тому, я залюбки продовжую
                      користуватись книгою, як довідником кожного дня.
                    </p>

                    <p>
                      Як побажання, дуже б хотілось книгу по рефакторингу і code
                      smells, оскільки вважаю, що це більш практична складова.
                      Оскільки коли людина вчить патерни, вона не до кінця може
                      застосувати їх, бо вони занадто абстракті. Якраз «запахи»
                      можуть пападвтись частіше і конкретніше вказувати на
                      недоліки.
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
                    <div className="name">Андрій Кравець</div>
                    <div className="location">Украина</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      I have already started reading the book, though I'm not
                      quite half way yet. My impressions so far is that I like
                      it! I enjoy the UML diagrams high diagrams explaining the
                      connections and the coding examples. I also appreciate the
                      explanation on when to use a particular pattern and what
                      are it's strengths and weaknesses. There is a lot of good
                      information and I have been re-reading sections to make
                      sure I have a firm understanding as to why a particular
                      pattern is beneficial and how to properly implement it
                      before moving on.
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
                    <div className="name">Akin Delamarre</div>
                    <div className="location">Canada</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Понравилась простота изложения,особенно примеры на
                      основании объектов из жизни. Все кратко и поделу,легко
                      представлять, то что читаешь. До этого уже прочитал
                      несколько книг похожего характера, ваша определена
                      попадаем в мой том лист,друзьям уже рекомендовал ее.
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
                    <div className="name">Дмитрий Харлампиев</div>
                    <div className="location">Россия</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      This is a great book. I really like it’s simplicity and
                      real world examples. I am not new to design patterns but
                      this book is definitely one of favourite in my book
                      collection
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
                    <div className="name">Željko Bajšanski</div>
                    <div className="location">Serbia</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      The book is great! I discovered your site a few months ago
                      in my ongoing quest to design better code. I bought the
                      book because it has information on SOLID design
                      principles, and I like that I can read it on a Kindle. I'm
                      a big fan of the illustrations - they're funny and do a
                      good job of illustrating the concepts.
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
                    <div className="name">Brian Dumez</div>
                    <div className="location">USA</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Everything is well explained and I like the way all basics
                      are introduced first (UML, SOLID) and then we can go on
                      each design pattern and play with it. The only improvement
                      I see is making printed version available (I prefer paper
                      to pdf) and maybe in another languages (french, spanish,
                      chinese?).
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
                    <div className="name">Mickaël Andrieu</div>
                    <div className="location">France</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Книга очень полезная и интересная. Я прочитал начальную
                      часть: до того момента, где описываются паттерны, т.к.
                      сами паттерны смотрю на сайте. У меня книга Boox
                      Миклухо-Маклай. В формате epub Ваша книга отображается в
                      моей читалке криво, поэтому пришлось использовать pdf, но
                      в этом формате не работают гиперссылки, это, конечно, не
                      очень страшно, но немного неудобно. Если бы был доступен
                      формат fb2, то, может быть, тогда всё отображалось
                      нормально, хотя это не точно.
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
                    <div className="name">Александр Калентеенков</div>
                    <div className="location">Россия</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Your book is great. I am junior level developer and
                      certainly happy with the purchase! I like the structure of
                      how each pattern is presented, and the UML and examples
                      really clarify things. I also like the "vibe", which keeps
                      it fun yet on-point. I can't think of a con. Thanks for
                      this!
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
                    <div className="name">Leon Wong</div>
                    <div className="location">Canada</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      I'm a long-term user of your website refactoring.guru from
                      as early as my undergrad era. I have to say the website
                      (refactor.guru and design patterns) are great! It's the
                      101 for me to learn how to improve my code in a higher
                      level than just learning grammars and best practices of
                      programming languages.
                    </p>

                    <p>
                      To me, the e-book is a modernized Design Patterns:
                      Elements of Reusable Object-Oriented Software. Although
                      I've purchased the old Design Patterns book long before
                      and put it on my bookshelf, I seldom read it. Your book
                      changed this awkward situation, because it has a much
                      better look and more readable contents. It also have
                      updated understandings of trade-off, nice illustrations
                      and better summaries for each of the design patterns. Much
                      more attractive to me. And the book is well organized by
                      chapters, letting me to read it through many times on my
                      phone during leisure time.
                    </p>

                    <p>
                      Sincerely, it's perfect as an e-book to me as a guidebook
                      to improve my skills as a software developer and I have
                      recommended the book to all of my friends. Yet I'm
                      wondering if there is a further plan to make a more
                      "advanced" version. What I mean is that a version with
                      more detailed explanation with the theories behind these
                      design patterns, probably citing some academic researches
                      of software engineering, some industry cases, etc. This
                      advanced book will be the best choice for people who want
                      to dive even deeper into the story behind the scene. Its
                      form might be somehow like that of Peopleware and
                      Pragmatic Programmer where the author introduced the
                      experiences by telling stories or some industry cases they
                      know.
                    </p>

                    <p>
                      Another advice is that it might be a good business
                      decision to make a paper-based version of the e-book. I
                      believe almost every programmer will be willing to put one
                      on his/her shelf. I noticed the e-book has some hyperlinks
                      as part of the organization. But I believe it's possible
                      to make some arrangement to minimize the jumps and make it
                      highly sequentially readable.
                    </p>

                    <p>
                      Again, thank you so much for creating the awesome website
                      and book. It's a huge help to me. The thing is that I
                      found trade-offs in software engineering cannot be taught
                      easily in universities. So in the past a newgrad have to
                      spend several years to learn these experiences by working
                      in a big company for years. However, this might not be
                      everyone's ideal career path. Your website and book made
                      it all flatten and now a newgrad or student can learn very
                      quickly by using your website. It enabled an agile career
                      path directly from a startup (or even "non-profit" career
                      path by simply start to working on open-source projects).
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
                    <div className="name">Zhaoxiong Cui</div>
                    <div className="location">USA</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      I did read your book. Twice. It is a very comprehensive
                      book and a joy to read and to walk through. It serves
                      great as a reference and I probably won't need another
                      reference book for patterns. I like your writing. No
                      lengthy fluff, no excessive jargon, no just dry code. To
                      the point. Also I like the way you explain the design and
                      SOLID principles. Thank you very much.
                    </p>

                    <p>
                      What I would like to see more in the book is a reference
                      to typical, real life use cases of each pattern. For
                      example, I have heard the command pattern can be used to
                      radio groups or for writing wizards. How is this done? Are
                      there any examples of real life code using the visitor
                      pattern? Are there any simple examples we can study? No
                      need for extra book pages, just a link to a online repo
                      with code examples probably would do. Maybe more examples
                      would help the stick better to the memory.
                    </p>

                    <p>
                      Yes, it is up to me to come up with good use cases for
                      each pattern but as a newbie I find it difficult to
                      remember what each pattern does and what it is good for.
                      Some, like the singleton, the facade, the observer etc.
                      are obvious and easy to remember their purpose and general
                      functionality, others not so much.
                    </p>

                    <p>
                      Also it would be great if there was an option for a dead
                      tree version of the book. I want to keep it as reference.
                      I will feed the PDF to my laser printer but I would like
                      to have it printed and bound looking like a real book.
                    </p>

                    <p>
                      All and all I give your book a solid 5 stars. Thank you
                      very much.
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
                    <div className="name">Alkis Tsamis</div>
                    <div className="location">Grece</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      I've read a considerable part of the book already. I loved
                      what I read! You explain the concepts in such an easy way.
                      I wish I had the opportunity to read it when I was in
                      college. I don't have, currently, any suggestions to
                      improve it. But it would be great if it were available in
                      more languages. Since I'm from Brazil, I'm not gonna lie,
                      it would be great to have it in Portuguese (so I could
                      tell my non-English speaking friends to get it as well,
                      'cause they really need some of the knowledge in the
                      book).
                    </p>

                    <p>
                      I stumbled across your website when searching "why
                      refactoring is important" if I'm not mistaken. I
                      immediately saved it to my bookmarks that day and shared
                      it with some of my colleagues.
                    </p>

                    <p>Thank you for the book.</p>
                  </div>
                  <div className="feedback-details">
                    <div className="stars">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="name">Renato Oliveira</div>
                    <div className="location">Brazil</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      I have read your book and it’s really wonderful work. All
                      patterns are well described with a lot of examples. The
                      text is simple for understanding without any complex
                      meanings. I has increased own knowledges around design
                      with your help, thank a lot. What may you add? I think it
                      will be great to show more deeply or with some examples a
                      diff mixes of patters or show big project ( game? ).
                      However , nice work, thank you and best wishes!
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
                    <div className="name">Иван Парфенюк</div>
                    <div className="location">Украина</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      I like your book, it is easy to understand even if I'm not
                      good in English and really really beginner, of course the
                      illustrate each pattern make me smile, real world example
                      and className diagram help me better understanding,
                      relation between pattern really help me to understand when
                      and why pattern exist.
                    </p>

                    <p>
                      I hope you can write code in JavaScript, because sometime
                      I convert the code into Typescript/ES7
                    </p>
                    <div className="feedback-reply">
                      <b>Обратите внимание:</b> since March, 2019, the book
                      comes with TypeScript examples.
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
                    <div className="name">Rozaliyana Aushuria</div>
                    <div className="location">Indonesia</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Книга «Погружение в Паттерны Проектирования» очень
                      понравилась. До нее несколько раз начинал читать другие,
                      но подача материала в них очень заметно уступала. В итоге
                      забрасывал их после описания первых пары паттернов.
                      <br />
                      <br />В данной же книге все разложено по полочкам. Воды
                      нет. Начинается все с описания проблемы, которую решает
                      тот или иной паттерн. Затем идет UML-схема решения,
                      примеры кода, список шагов, которые нужно пройти для
                      реализации паттерна, плюсы и минусы паттерна и описание
                      связей с другоми паттернами.
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
                    <div className="name">Игорь Тельменко</div>
                    <div className="location">Россия</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      — Вы уже начали читать книгу? <br />- да <br />— Какие
                      ваши впечатления? <br />- просто восторге. Очень просто
                      описанно и понятно. <br />— Что вам понравилось, а что не
                      очень? <br />- простота объяснения. Очень структурировано
                      описано. Элементарные примеры. <br />— Есть ли у вас идеи,
                      как можно было бы улучшить книгу?
                      <br />- мне необходимы были паттерны для языка с++. Очень
                      бы хотелось, чтоб в вашей книге появились примеры также и
                      на этом языке.
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
                    <div className="name">Елена Герасимова</div>
                    <div className="location">Украина</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      I am half way through the design patterns book and I must
                      say I am more than 100% happy that I purchased the books.
                      I must say you have a knack of telling the things in the
                      right way. I am really enjoying the book and I am very
                      sure even the refactoring book would be great as well.
                    </p>

                    <p>
                      I like the way topics are presented and the examples. That
                      helped be get the context and better understand them. This
                      way, I will not forget the concepts over a period of time.
                      I wish the SOLID principles content should be expanded a
                      little more by taking a real world complete use case and
                      applying step by step like before and after. I know this
                      kind of thing may be tricky to make, but, it would help.
                    </p>

                    <p>
                      Moreover, I would suggest breaking the design pattern book
                      in to design patterns and also OOAD book. The OOAD book
                      can focus on SOLID principles, OOP in general and how OOAD
                      can be done. The design patterns then can augment the
                      same.
                    </p>

                    <p>
                      I am glad to have purchased the books and they will
                      definitely help me in understanding and applying them at
                      my work. Keep up the good work. I will be watching out for
                      any new content that you put out.
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
                    <div className="name">Vamsikrishna Koundinya</div>
                    <div className="location">India</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      I like the way you have explained each of design patterns
                      although I have the original GoF books but it's really
                      hard to understand.
                    </p>

                    <p>
                      No suggestion as of now I am still in between and I am
                      happy with my purchase. Thanks!
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
                    <div className="name">Majed Samyal</div>
                    <div className="location">India</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Решил обновить знания по паттернам. У меня есть оригинал
                      GoF и "Head First. Паттерны проектирования", но я выбрал
                      вашу книгу.
                    </p>

                    <p>
                      Книга замечательная. Всё чётко и понятно. Приятно читать.
                      Можно потом в качестве справочника использовать.
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
                    <div className="name">Ярослав Станко</div>
                    <div className="location">Россия</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      The Design Patterns are something I was not very familiar
                      with. I already learned a lot from your book and I hope I
                      will be able soon to get a new role in my career and maybe
                      to teach other people about the patterns.
                    </p>

                    <p>
                      Everything is explained very well, the introductory part
                      includes SOLID and fundamentals of OOP which is very good.
                      I would do more examples if I could. What I would put here
                      is a brief of symptoms of a bad design like rigidity,
                      fragility, imobility and viscosity. But for me, it's
                      exactly what I was looking for - design patterns with
                      explanations and concrete examples in one place. And to be
                      honest it was at the best price - personally I wouldn't do
                      it for this amount.
                    </p>

                    <p>
                      Thank you again and congratulations for your work. I would
                      be glad to share you my pieces of code in the future if
                      you want. Good luck!
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
                    <div className="name">Daniel Belu</div>
                    <div className="location">Romania</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      This book is amazing. It’s a lot more palpable and easier
                      to understand that the Java Design Patterns book that’s
                      the “Golden standard”.
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
                    <div className="name">Rudresh Amin</div>
                    <div className="location">USA</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      This is a very good book you have. This is well explained
                      at the level of the principles and through examples.{" "}
                      <br />
                      My only concern is my level of English which is very low
                      and it takes me a lot of time to understand the quite
                      complex designs. I am a symfony developer and currently I
                      am in the process of deciding the use of these patterns at
                      the framwork level.
                      <br />
                      The use of SOLID is quite understandable and I think it is
                      the basis, so I did not have the same problems for the
                      factory. It's the others that I'm investing more. I found,
                      for example, that symfony formlaries are rich enough to
                      find use cases (factoryMethod, builder, composite). <br />
                      This will interest me a lot if you can help me find the
                      use of the symfony designs.
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
                    <div className="name">Setra Ratefiniaina</div>
                    <div className="location">France</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      I read the book and it was well organized and easy to
                      read. I usually learn more by code examples and graphics
                      and you put both in the book. However there were some code
                      examples that were not too clear to understand. I don’t
                      have the time now to look them up but will try to later
                      on. The book covers the most well known patterns and I
                      purchased it to have a refresher of my knowledge, but I’m
                      now looking at the subject of enterprise patterns,
                      specially related to communications between objects,
                      remote servers, etc. There are a few books out there but
                      most are overpriced and complex to digest.
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
                    <div className="name">Carlos Nunez</div>
                    <div className="location">USA</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Нравится, что написано понятным языком, с примерами и
                      рисунками, и, самое важное для понимания: паттерн
                      описывается начиная с проблемы из реального мира, которую
                      он решает. <br />В одной статье просто и понятно объяснен
                      принцип ООП, чего я не видел ни в одной книге.
                      <br />
                      Плюс книга на трех языках, что несомненно плюс для тех,
                      кто изучает английский, ну или украинский. Моя жена от
                      вашей книги тоже в восторге.
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
                    <div className="name">Paul Nike</div>
                    <div className="location">Украина</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Честно скажу, книга читается тяжело. Например начинающий
                      просто войдет в штопор. Я думаю надо объяснить что такое
                      интерфейс более понятным языком. А то интерфейсы
                      получаются как волшебная палочка.
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
                    <div className="name">Maksim Azizov</div>
                    <div className="location">Israel</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Книжка прекрасна. Особливо якщо взяти до уваги, що
                      написано українською. Власне лише через це в мене виникло
                      бажання придбати. Україномовного контенту на тему
                      програмування вкрай мало.
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
                    <div className="name">Yevgen Chabanyuk</div>
                    <div className="location">Украина</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Перед тим як купити вашу книжку я пройшов структурні і
                      породжувальні паттерни на вашому вебсайті, що змотивувало
                      мене купити вашу книжку, так як це відносно невелика плата
                      за такий корисний ресурс, і я таким чином міг сказати Вам,
                      дякую. Згодом придбав книжку і дочитав вже те чого не
                      вистачало, максимум витратив на все це один місяць.
                    </p>

                    <p>
                      Книжка дуже крута! Вона допомогла мені при співбесіді в
                      softserve (хоча я й не отримав офер). Задяки гарним
                      прикладам з життя дуже добре запам’ятовується суть
                      паттернів, один з прикладів я використав на співбесіді.
                      Ваша книжка відкрила для мене ще невідомий світ паттернів
                      проектування, про який я взагалі не знав до недавнього
                      часу.
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
                    <div className="name">Юрий Хомич</div>
                    <div className="location">Украина</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      I'm still reading the book, but so far I really like it!
                      It has been a helpful refresher to me on OOP principles. I
                      liked the explanation of UML diagram symbols.
                    </p>

                    <p>
                      I'm relatively new to design patterns, but you explain
                      them in a very clear manner which is easy to understand. I
                      enjoy the illustrations and the real-world examples. Other
                      material I had previously read on design patterns was
                      pretty abstract without saying how it would be helpful in
                      real life. But your book makes it all very clear!
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
                    <div className="name">Edward Gulbransen</div>
                    <div className="location">USA</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      The book is really awesome and explains the concepts in
                      great detail. I read the book completely and I think its
                      the fastest I completed any book.I am also considering to
                      buy the other book on code refactoring.
                    </p>

                    <p>
                      The improvements I would like to see in the book is to add
                      some more design patterns. I guess some design patterns
                      from the Gang of Four missing and also some patterns
                      outside GoF which we use most often. Some information on
                      Anti patterns & code smells and also examples of how
                      multiple patterns can be used together within applications
                      would be great.
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
                    <div className="name">Raghavendra Somannavar</div>
                    <div className="location">USA</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      I enjoyed your book a lot! I have read through it
                      (although, I must admit I skimmed some of the patterns
                      which I was already familiar with). I found your writing
                      style enjoyable, and the illustrations were fun too, it
                      was certainly a lot more digestible than my old GoF book!
                    </p>

                    <p>
                      Something I personally never read in the book was the
                      pseudocode listings, I think that they could probably be
                      removed. The reason I think this is that the prior UML
                      diagrams of both the general concept, followed by a
                      specific example made the patterns intention abundantly
                      clear without the need for the pseudocode, but maybe
                      that’s just me personally.
                    </p>

                    <p>
                      Also, I think it would have been nice to include some sort
                      of post-word after the design patterns summarising what
                      we’d learned. This might also be a good spot to include a
                      matrix of patterns for quick reference when you are
                      looking for that “Structural pattern that helps
                      compatibility”.
                    </p>

                    <p>
                      I hope this feedback is useful, again, big fan of the
                      book, I know it’s a hard topic to make engaging, and I
                      think you did a great job!
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
                    <div className="name">Hanna Greaves</div>
                    <div className="location">UK</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      I would like to thank you for your excellent book. It's
                      one of the best purchases I have recently made and has
                      helped me a ton with work.
                    </p>

                    <p>
                      I've read the book as soon as I got it after I had read
                      through the examples available on your website, because it
                      convinced me that the information in it would be very
                      useful to me. Since I have got your book, I have kept it
                      open at work on one of the displays as a reference and
                      guidelines for my designs and whenever I extend the
                      functionality of my software I always follow the design
                      patterns presented in the book.
                    </p>

                    <p>
                      What I love about the book is that it is a recent and
                      modern document about design patterns, which is in my
                      experience the bread and butter of object oriented
                      software design. It is very concise, provides many
                      examples and very concrete applications, and actual
                      implementations in all the programming languages I use at
                      work. While the information in the unavoidable "Gang of
                      Four" design patterns book is very good on its own and a
                      great text, I was looking for a book in the same scope,
                      but a recent one to keep up with the new designs,
                      technology and concepts that come and your book is a
                      perfect candidate for that.
                    </p>

                    <p>
                      The text itself is pretty, with very nice diagrams and
                      images, great formatting and typesetting. While these are
                      details, they make the information much more readable and
                      enhances the whole experience. And the cover art is very
                      nice ! <br />I honestly have no idea on how to improve the
                      book. It has been a pleasure to read, and has become a
                      very important tool at work and one of my "definite
                      references", so it's difficult to improve something you
                      are already very satisfied with !
                    </p>

                    <p>
                      So, thank you again, props to you for making this great
                      text. The first recommendation for books about design
                      patterns and object oriented software design that I would
                      give would be definitely yours, hands down.
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
                    <div className="name">Julien Belmon</div>
                    <div className="location">France</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>Книгой доволен, читается легче книги от GoF'а.</p>

                    <p>
                      - Не могу сказать, ничего плохого.
                      <br />
                      - В простой форме объясняются сложные конструкции.
                      <br />- Полагаю, что было бы здорово, написать несколько
                      глав по анти-паттернам.
                    </p>

                    <p>
                      В целом, большое спасибо за качественный материал. И
                      отдельное спасибо, за небольшую цену.
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
                    <div className="name">Евгений Стельмашок</div>
                    <div className="location">Тула, Россия</div>
                  </div>
                </div>
                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Все понравилось, прочёл пока только один раз. И не нашёл
                      пока то что можно было улучшить. А так храню в избранном,
                      так сказать как настольную книгу, подсматриваю в неё
                      иногда.
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
                    <div className="name">Владислав Карпенко</div>
                    <div className="location">Москва, Россия</div>
                  </div>
                </div>
                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Пользуюсь вашим сайтом, а книгу купил чтобы поддержать
                      проект! Все очень нравится. Просто и доходчиво объясняете!
                      Так держать!
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
                    <div className="name">Максим Березин</div>
                    <div className="location">Владимир, Россия</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      На мое удивление книга очень хорошо подходит для разного
                      уровня специалистов, поэтому даже разместили у себя ссылку
                      на ваш сайт в качестве рекомендации.
                    </p>
                    <p>
                      Отмечу, что очень понравились иллюстрации и способ подачи
                      материала. И от себя выражаю благодарность за то, что
                      популяризируете полезные всем обучающие материалы.
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
                    <div className="name">Андрей Греков</div>
                    <div className="location">Москва, Россия</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      По мне идеальный вариант изложения: коротко, без ненужных
                      рассуждений. Чёткое описание проблемы, способ решения,
                      псевдокод - то, что надо. Иллюстрации тоже сильно
                      помогают. Если мне надо вспомнить зачем нужен тот или иной
                      паттерн, достаточно посмотреть на картинку и все
                      восстанавливается в памяти.
                    </p>
                    <p>
                      Из пожеланий. Ну, может быть, ещё чуть больше примеров
                      практического применения того или иного паттерны. Без
                      кода. Просто изложение ситуации и её решения с помощью
                      паттерна. Т. е. примеры из "жизни". Для меня, конечно,
                      интереснее из Web разработки.
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
                    <div className="name">Андрей Сеничев</div>
                    <div className="location">Москва, Россия</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Книгу читаю. Правда на сайте есть почти все, что и в ней
                      написано, так что мог бы просто на сайте смотреть. По
                      замечаниям - сложно сказать. Иногда вы по 10 раз пишите
                      одно и то же, но это многим (в том числе и мне) нужно для
                      первоначального осознания.
                    </p>

                    <p>
                      Хотелось бы побольше примеров. Но можно и без реализации.
                      Т.е. смотрите - можно пообщаться с разработчиками из
                      разных отраслей и поспрашивать - где и как они применяют
                      тот или иной паттерн.
                    </p>

                    <p>
                      Я например Android разработчик и некоторые из ваших
                      паттернов укладываются на часто встречающиеся экраны.
                      Может быть какие-нибудь ссылки на реализации других ребят
                      разместить в качестве примера.
                    </p>

                    <p>
                      А в целом - книга хороша. Картинки клеевые. Иногда сложно
                      во что-то въехать, но что уж тут поделаешь? Надо долбиться
                      дальше. Перечитывать, пробовать.
                    </p>

                    <p>
                      Пригодилась бы реализация на котлин. Я собственно с
                      помощью переписывания ваших примеров и язык так изучаю.
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
                    <div className="name">Дмитрий Митрошин</div>
                    <div className="location">Москва, Россия</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Книгою задоволений. Рекомендую друзям. Наразі ще не
                      дочитав, оскільки з'явились більш приоритетні речі які
                      вимагають моєї уваги. Видрукував і віддав для прочитання
                      сину. В найближчих планах купити і опрацювати книгу по
                      рефакторингу.
                    </p>
                    <p>
                      Не те, щоб я чогось не знаю, швидше подобається подача +
                      просто приємно почитати в вільний час. Якщо маєте час і
                      натхнення написати ще одну книгу і не маєте їдей, мені
                      стала б в нагоді книга по дебагу. З моїм темпом складно
                      знайти час структурувати свій досвід і розказати джунам як
                      це робиться.
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
                    <div className="name">Павло Маначинський</div>
                    <div className="location">Львів, Україна</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Книжка чудова, дуже легко і зрозуміло читається,
                      підкріпленна гарними прикладами. Прочитав на одному
                      диханні.
                    </p>

                    <p>
                      Зауваження незначні:
                      <br />
                      - деякі опечатки
                      <br />
                      - деякі ілюстрації не перекладені українською
                      <br />
                      - приклади на Swing (було б більш зрозуміло, якщо приклади
                      були б просто на джава коді)
                      <br />
                      - відсутній паттерн Interpreter
                      <br />- некоректна робота формату epub2 на android (Play
                      Books).
                    </p>

                    <p>Але загалом книжка дуже класна!</p>

                    <div className="feedback-reply">
                      <b>Коментар автора:</b> з дати цього відгуку вийшло
                      декілька оновленнь української версії книжки з багатьма
                      виправленнями опечаток, зокрема в діаграмах українською.
                    </div>
                  </div>
                  <div className="feedback-details">
                    <div className="stars">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star-o" aria-hidden="true"></i>
                    </div>
                    <div className="name">Павло Заяць</div>
                    <div className="location">Львів, Україна</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Начал читать книгу, остался очень доволен. Хорошее и
                      качественные примеры и схемы.
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
                    <div className="name">Тарас Савранский</div>
                    <div className="location">Краснодар, Россия</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Первые впечатления — положительные, автору стоит писать и
                      дальше. Есть желание купить книгу для товарища. Я так
                      понимаю — единственный вариант — это регистрация под новым
                      аккаунтом.
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
                    <div className="name">Денис Захаров</div>
                    <div className="location">Минск, Беларусь</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Я изучал ранее эти шаблоны по книге «Банда четырех». Ваша
                      книга мне понравилась простотой описания, и превосходными
                      аппликациями. Я использую вашу книгу как справочник, для
                      того чтобы освежить знания о том или ином шаблоне или
                      поискать в ней возможно необходимый мне в данный момент
                      шаблон. На счет улучшения книги не могу сказать, так как я
                      даже не думал на эту тему.
                    </p>

                    <p>Создание такой книги это замечательная работа)</p>
                  </div>
                  <div className="feedback-details">
                    <div className="stars">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="name">Дмитрий Бородин</div>
                    <div className="location">Казань, Россия</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Спасибо за отличный материал! Читаю книгу выборочно, очень
                      нравится подача материала — доступное изложение на
                      нескольких уровнях, интересные примеры, понятные
                      иллюстрации. Невольно сравнивается с "Паттернами
                      Проектирования" Фримена, и подача в Вашей книге кажется
                      более информативной. Удобно не только читать книгу
                      последовательно, но и обращаться к ней как к справочнику.
                    </p>

                    <p>
                      Планирую использовать собранные Вами материалы для
                      подготовки обучающих материалов, докладов внутри и снаружи
                      своей компании, в контексте применения во фронтенд
                      разработке.
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
                    <div className="name">Андрей Алексеев</div>
                    <div className="location">Санкт-Петербург, Россия</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Книжка прекрасна. Особливо якщо взяти до уваги, що
                      написано українською. Власне лише через це в мене виникло
                      бажання придбати. Україномовного контенту на тему
                      програмування вкрай мало.
                    </p>

                    <p>
                      А щодо побажань, було б непогано мати приклади на
                      JavaScript, але то таке, не критично.
                    </p>

                    <div className="feedback-reply">
                      <b>От автора:</b> недавно были добавлены примеры на
                      TypeScript, что уже ближе к желаемому.
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
                    <div className="name">Євген Чабанюк</div>
                    <div className="location">Saint-Hubert, Canada</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Честно говоря, книжку купил, чтоб задонатить таким образом
                      за труд, вложенный в создание сайта, он мне помог и
                      помогает + мне интересно было посмотреть как изложены
                      SOLID.
                    </p>

                    <p>
                      Думаю, для новичков было бы круто, если бы примеры были и
                      на шарпе, хотя и так все понятно. Ввиду стабильного инета,
                      вместо книги пользуюсь сайтом как справочником.
                    </p>

                    <div className="feedback-reply">
                      <b>От автора:</b> примеры на C# уже поставляются с книгой.
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
                    <div className="name">Павел Бобровский</div>
                    <div className="location">Иваново, Россия</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Книгу читаю, интересная, не нудная, написана бодро и
                      свежо. Очень хотелось бы увидеть бумажное издание.
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
                    <div className="name">Дмитрий Удовенко</div>
                    <div className="location">Кострома, Россия</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Спасибо за книгу. Материал изложен доступно и красиво.
                      Примеры понятны, диаграммы точны, рисунки интересны.
                      Подходит как в качестве справочника, так и в качестве
                      введения в тему. Для меня — и то и другое.
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
                    <div className="name">Владимир Лебедь</div>
                    <div className="location">Костанай, Казахстан</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Я работаю разработчиком на C#. Я читал статью в интернете,
                      где было много ссылок на паттерны. Я полез гуглить и попал
                      на ваш сайт, где прочитал про интересующий меня паттерн. У
                      вас очень приятно структурирована информация, но больше
                      всего мне понравился стиль иллюстраций. Есть в них что-то
                      родное)) Как новичку, мне очень понравилось, что паттерны
                      описываются с проблем, которые они решают, а не с описания
                      самого паттерна. После прочтения всего раздела про
                      паттерны на сайте я понял, что хочу купить книгу в
                      благодарность за ваш труд по сбору и структурированию
                      информации.
                    </p>
                    <p>
                      Замечание есть только к одному разделу - "Отношения с
                      другими паттернами". Не смотря на то, что я прочитал про
                      все паттерны, я до сих пор не понимаю о чем речь в этом
                      разделе. Может туда иллюстраций добавить, или вообще
                      убрать этот раздел и добавить главу про использование
                      объединенных паттернов.
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
                    <div className="name">Daniil Doniy</div>
                    <div className="location">Москва, Россия</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Проект в целом, и книга в частности, производят отличное
                      впечатление. Казалось бы книг написано на эту тему
                      довольно много, но у вас все "по полочкам" и довольно
                      весело) Замечательные иллюстрации, и забавно и запоминать
                      помогают.
                    </p>

                    <p>
                      Книгу начал читать сразу после покупки, пару - тройку из
                      описанных паттернов уже научился довольно уверенно
                      использовать на практике.
                    </p>

                    <p>
                      Книгу можно улучшить, издав ее на бумаге, это было бы
                      удобно например для подарка.
                    </p>

                    <p>
                      Примеры кода мне были бы интересны на PHP и Python, но я
                      так понимаю работа над этим уже ведется.
                    </p>

                    <p>Спасибо вам за ваши труды, и успехов!</p>

                    <div className="feedback-reply">
                      <b>От автора:</b> примеры на PHP уже поставляются с
                      книгой.
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
                    <div className="name">Василий Юрлов</div>
                    <div className="location">Казань, Россия</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Покупкой доволен полностью, книгу уже прочитал от корки до
                      корки. Как по мне - это самая доступная и удачная книга по
                      паттернам из тех, что я читал. Отдельно порадовало
                      удобство чтения с iPhone. Спасибо за толковую книгу!
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
                    <div className="name">Алексей Безрученков</div>
                    <div className="location">Киев, Украина</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                       — Вы уже начали читать книгу?
                      <br />
                      Уже прочитал.
                      <br />
                       — Какие ваши впечатления?
                      <br />
                      Очень понравилось.
                      <br />
                       — Что вам понравилось, а что не очень?
                      <br />
                      Понравилось изложение материала, все очень доступно.
                      <br />
                       — Есть ли у вас идеи, как можно было бы улучшить книгу?
                      <br />
                      Мне было бы очень интересно прочитать про concurrency
                      patterns.
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
                    <div className="name">Гай Дмитриев</div>
                    <div className="location">Новосибирск, Россия</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Отличная книга, всё разложено по полочкам и изложено
                      понятным языком. Отдельная благодарность за поддержку
                      нескольких форматов и возможность читать книгу в дороге.
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
                    <div className="name">Алекс Чугаев</div>
                    <div className="location">Киев, Украина</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Книга понравилась я периодически применяю у себя на работе
                      решения из книги.
                    </p>

                    <p>Книгой доволен и очень благодарен за ваш труд.</p>
                  </div>
                  <div className="feedback-details">
                    <div className="stars">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="name">Дмитрий Грушецкий</div>
                    <div className="location">Люберцы, Россия</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Сразу хочу отметить что книга прекрасно иллюстрирована)
                      Очень хорошо и доступно изложено про SOLID и в частности
                      про принцип Барбары Лисков Для меня новым было про
                      приватные члены базовых классов и то, что вы явным образом
                      отделяете ограничения на предусловия по типам и по
                      значениям атрибутов, так и впрямь яснее.
                    </p>

                    <p>Странным показалось что книга весит 30мб</p>
                  </div>
                  <div className="feedback-details">
                    <div className="stars">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="name">Дмитрий Безик</div>
                    <div className="location">Самара, Россия</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Книга отличная. Удачные иллюстрации и примеры. Готовлю
                      теперь на работе доклад по теме Design Patterns.
                    </p>

                    <p>
                      Что можно добавить: примеры с Anti-Patterns — как не
                      следует делать.
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
                    <div className="name">Alexandre Fiveg</div>
                    <div className="location">Munich, Germany</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      I do really enjoy your book. And would like to buy printed
                      version to have it on my work place.
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
                    <div className="name">Sergii Aleksieiev</div>
                    <div className="location">Київ, Україна</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Все что объясняют на котиках и на пальцах всегда понятно и
                      чем больше аллегорий тем лучше. Книгу еще не дочитал, но
                      первое впечатление хорошее, спасибо!
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
                    <div className="name">Андрей Земсков</div>
                    <div className="location">Москва, Россия</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Подтверждаю, что я купил эту книгу и доволен покупкой,
                      иначе я бы ее не купил :)
                    </p>

                    <p>
                      На самом деле, мне было надо получить некоторую информацию
                      по самым заезженным паттернам (builder и factory), и,
                      собственно, я получил ее из материалов сайта. Ну а дальше
                      все просто -- мне очень понравилось оформление сайта и его
                      структура, на прочих подобных ресурсах обычно отделываются
                      описанием случайных ~5-ти паттернов, а остальные "coming
                      soon...".
                    </p>

                    <p>
                      Собственно, ваш сайт ЛУЧШИЙ из всего, что мне попадалось
                      по данной теме, поэтому он однозначно попал в закладки, а
                      PDF-версия легла в offline-библиотеку на планшете. Я хоть
                      и "пират" со стажем, но всегда рад заплатить АДЕКВАТНУЮ
                      цену, за товар который я использую в профессиональной
                      деятельности.
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
                    <div className="name">Денис Захаров</div>
                    <div className="location">Москва, Россия</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Книгу практически дочитал. Скажу сразу - книга
                      понравилась, примеры из жизни, описание и превдокод -
                      хороши.
                    </p>
                    <p>
                      Немного досадны грамматически ошибки, но в целом всё
                      отлично.
                    </p>
                    <div className="feedback-reply">
                      <b>От автора:</b> с даты создания этого отзыва вышла
                      дюжина обновлений, исправляющих разнообразные опечатки и
                      грамматические ошибки.
                    </div>
                  </div>
                  <div className="feedback-details">
                    <div className="stars">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star-o" aria-hidden="true"></i>
                    </div>
                    <div className="name">Альберт Гизетдинов</div>
                    <div className="location">Санкт-Петербург, Россия</div>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback">
                    <p>
                      Материал интересный, единственно немного непривычно
                      учиться на примерах с псевдокодом. Для профи такой подход
                      конечно приемлем. В целом книга вполне оправданно стоит
                      своих денег.
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
                    <div className="name">NeonDT</div>
                    <div className="location">Россия</div>
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

          <div className="section">
            <h2>Bạn nhận được gì?</h2>

            <div className="row">
              <div className="col-12 col-sm-6">
                <p>
                  <b>eBook đa ngôn ngữ trong 4 định dạng</b>
                </p>
                <ul>
                  <li>Các định dạng: PDF, EPUB, MOBI, KFX</li>
                  <li>
                    Ngôn ngữ: Tiếng Anh, Tiếng Trung, Tiếng Pháp, Tiếng Hàn,
                    Tiếng Nhật, Tiếng Bồ Đào Nha, Tiếng Ba Lan, Tiếng Nga, Tiếng
                    Tây Ban Nha, Tiếng Ukraina
                  </li>
                  <li>Tập: 409 trang</li>
                  <li>Đồ họa: 225 hình minh họa và sơ đồ</li>
                  <li>Cập nhật và Sửa lỗi: miễn phí như một chú chim</li>
                </ul>
              </div>
              <div className="col-12 col-sm-6">
                <p>
                  <b>Một kho lưu trữ chứa các ví dụ mã nguồn</b>
                </p>
                <ul>
                  <li>
                    Các ví dụ được viết bằng C#, C++, Go, Java, PHP, Python,
                    Ruby, Rust, Swift và TypeScript
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="book-features">
            <div className="book-feature" style={{ borderColor: "#dee" }}>
              <div className="image">
                <img
                  width="200"
                  height="200"
                  src="/images/patterns/banners/patterns-book-banner-5-ru.png"
                  // srcset="
                  //   /images/patterns/banners/patterns-book-banner-5-ru-2x.png 2x,
                  //   /images/patterns/banners/patterns-book-banner-5-ru-3x.png 3x
                  // "
                />
              </div>
              <div style={{}}>
                <p>
                  <b>
                    Một cuốn sách điện tử bằng ngôn ngữ tự nhiên, thân thiện với
                    con người.
                  </b>
                  <br />
                  Được viết với ít thuật ngữ chuyên môn nhất có thể, nhiều mẫu
                  mã và hình minh họa nhất có thể.
                </p>
              </div>
            </div>

            <div className="book-feature" style={{ borderColor: "#ede" }}>
              <div className="image">
                <img
                  width="200"
                  height="200"
                  src="/images/patterns/banners/patterns-book-banner-6.png"
                  // srcSet="
                  //   /images/patterns/banners/patterns-book-banner-6-2x.png 2x,
                  //   /images/patterns/banners/patterns-book-banner-6-3x.png 3x
                  // "
                />
              </div>
              <div style={{}}>
                <p>
                  <b>Không giới hạn bởi một ngôn ngữ lập trình cụ thể.</b>
                  <br />
                  Các ví dụ mã nguồn được viết bằng mã giả, có thể áp dụng cho
                  hầu hết các ngôn ngữ lập trình hướng đối tượng hiện đại.
                </p>
              </div>
            </div>

            <div className="book-feature" style={{ borderColor: "#edd" }}>
              <div className="image">
                <img
                  width="200"
                  height="200"
                  src="/images/patterns/banners/patterns-book-banner-3.png"
                  // srcSet="
                  //   /images/patterns/banners/patterns-book-banner-3-2x.png 2x,
                  //   /images/patterns/banners/patterns-book-banner-3-3x.png 3x
                  // "
                />
              </div>

              <div style={{}}>
                <p style={{ marginBottom: "0.5em" }}>
                  <b>Dễ đọc trên mọi thiết bị.</b>
                  <br />
                  Cuốn sách điện tử có sẵn trong bốn định dạng:
                </p>

                <ul style={{ marginBottom: "0" }}>
                  <li>
                    <b>EPUB</b> để đọc trên điện thoại và máy tính bảng
                  </li>
                  <li>
                    <b>MOBI</b>, <b>KFX</b> cho người đọc Kindle của Amazon
                  </li>
                  <li>
                    <b>PDF</b> để đọc ở bất kỳ nơi nào hoặc in ra
                  </li>
                </ul>
              </div>
            </div>

            <div className="book-feature" style={{ borderColor: "#eed" }}>
              <div className="image">
                <img
                  width="200"
                  height="200"
                  src="/images/patterns/banners/patterns-book-banner-2.png"
                  // srcSet="
                  //   /images/patterns/banners/patterns-book-banner-2-2x.png 2x,
                  //   /images/patterns/banners/patterns-book-banner-2-2x.png 3x
                  // "
                />
              </div>

              <div style={{}}>
                <p>
                  <b>Luôn thuận tiện và có thể tìm kiếm.</b>
                  <br />
                  Cuốn sách điện tử là một hướng dẫn tham khảo tiện lợi. Không
                  giống như sách giấy, nó có thể tìm kiếm và không thể bỏ quên ở
                  đâu đó. Luôn luôn có sẵn trên điện thoại thông minh, máy tính
                  bảng, laptop hoặc máy tính để bàn của bạn.
                </p>
              </div>
            </div>

            <div className="book-feature" style={{ borderColor: "#ded" }}>
              <div className="image">
                <img
                  width="200"
                  height="200"
                  src="/images/patterns/banners/patterns-book-banner-1-a.png"
                  // srcSet="
                  //   /images/patterns/banners/patterns-book-banner-1-a-2x.png 2x,
                  //   /images/patterns/banners/patterns-book-banner-1-a-3x.png 3x
                  // "
                />
              </div>

              <div style={{}}>
                <p>
                  <b>Đọc thú vị khi di chuyển hoặc thư giãn.</b>
                  <br />
                  Nơi nào khác bạn có thể học một cách yên bình như vậy vào thời
                  đại này, nếu không phải là trong các chuyến bay và trên xe
                  buýt hoặc tàu điện ngầm? Cũng có thể là trong giường...
                </p>
              </div>
            </div>

            <div
              className="book-feature"
              style={{
                borderColor: "#555",
                background: "#333",
                color: "#eee",
              }}
            >
              <div className="image">
                <img
                  width="200"
                  height="200"
                  src="/images/patterns/banners/patterns-book-banner-4.png"
                  // srcSet="
                  //   /images/patterns/banners/patterns-book-banner-4-2x.png 2x,
                  //   /images/patterns/banners/patterns-book-banner-4-3x.png 3x
                  // "
                />
              </div>

              <div style={{}}>
                <p>
                  <b>Dễ đọc vào ban ngày hoặc ban đêm.</b>
                  <br />
                  Tin tốt cho những người thức đêm! Cuốn sách điện tử trông
                  tuyệt vời trên nền sáng để đọc vào ban ngày hoặc nền tối để
                  đọc vào ban đêm.
                </p>
              </div>
            </div>
          </div>

          <div className="section questions">
            <h2>Câu hỏi thường gặp</h2>

            <div className="dl icon">
              <div className="dt">
                <i className="fa fa-fw fa-credit-card" aria-hidden="true"></i>{" "}
                Chúng tôi chấp nhận các phương thức thanh toán nào?
              </div>
              <div className="dd">
                Bạn có thể thanh toán bằng thẻ tín dụng/ghi nợ (Visa,
                MasterCard, AmEx, Discover, JCB và nhiều hơn nữa), PayPal, Apple
                Pay, Google Pay, iDeal, Giropay, NetBanking, WeChat Pay và
                Alipay.
              </div>
            </div>

            <div className="dl icon">
              <div className="dt">
                <i className="fa fa-fw fa-lock" aria-hidden="true"></i> Làm thế
                nào để bạn bảo vệ dữ liệu của tôi?
              </div>
              <div className="dd">
                Thông tin thanh toán của bạn được mã hóa và gửi trực tiếp đến
                cổng thanh toán. Nó không bao giờ được truyền hoặc lưu trữ trên
                máy chủ của chúng tôi.
              </div>
            </div>

            <div className="dl icon">
              <div className="dt">
                <i className="fa fa-fw fa-credit-card" aria-hidden="true"></i>{" "}
                Tôi đã đặt đơn hàng, nhưng mỗi lần thanh toán của tôi đều thất
                bại. Tôi phải làm gì?
              </div>
              <div className="dd">
                Vui lòng đảm bảo rằng thẻ của bạn được kích hoạt để thực hiện
                giao dịch trực tuyến và bạn không vượt quá hạn mức chi tiêu trực
                tuyến của mình. Sau đó, thử lại việc đặt đơn hàng. Nếu không có
                gì giúp được,{" "}
                <a
                  href="https://refactoring.userecho.com/?show_feedback_form=true"
                  className="userecho-private"
                  rel="nofollow"
                >
                  gửi cho chúng tôi một tin nhắn
                </a>{" "}
                và chúng tôi sẽ cố gắng cung cấp cho bạn các phương thức thanh
                toán
              </div>
            </div>

            <div className="dl icon">
              <div className="dt">
                <i className="fa fa-fw fa-money-bill" aria-hidden="true"></i>{" "}
                Tôi có thể nhận lại tiền nếu tôi không hài lòng không?
              </div>
              <div className="dd">
                Đúng vậy! Nếu cuốn sách của chúng tôi không giúp ích cho bạn,
                chỉ cần gửi email tới support@refactoring.guru kèm theo biên
                nhận của bạn. Chúng tôi sẽ hoàn lại toàn bộ số tiền bạn đã mua,
                không có câu hỏi nào được đặt.
              </div>
            </div>

            <div className="dl icon">
              <div className="dt">
                <i className="fa fa-fw fa-book" aria-hidden="true"></i> Có phiên
                bản sách cứng của cuốn sách không?
              </div>
              <div className="dd">
                Cuốn sách chưa được xuất bản dưới dạng sách giấy. Tuy nhiên, có
                thể sẽ được xuất bản trong tương lai. Vì vậy, nếu bạn quan tâm,
                vui lòng đăng ký nhận{" "}
                <a href="../sendy/form.html">bản tin của chúng tôi</a> để không
                bỏ lỡ thông tin..
              </div>
            </div>

            <div className="dl icon">
              <div className="dt">
                <i className="fa fa-fw fa-amazon" aria-hidden="true"></i> Tôi có
                thể mua cuốn sách trên Amazon không?
              </div>
              <div className="dd">
                Rất tiếc, không được. Cuốn sách chỉ có thể được mua trên
                Refactoring.Guru. Bán sách từ trang web của chúng tôi giúp chúng
                tôi tránh được việc bị cắt giảm lớn từ các nền tảng bên thứ ba
                và có thể đạt được cân bằng về mặt tài chính trong khi giữ cho
                giá cả phải chăng. Nếu bạn quan tâm hơn đến những đánh giá, bạn
                có thể tham khảo trang sách trên{" "}
                <a href="https://www.goodreads.com/book/show/43125355-dive-into-design-patterns">
                  Goodreads
                </a>
                .
              </div>
            </div>

            <div className="dl icon">
              <div className="dt">
                <i className="fa fa-fw fa-language" aria-hidden="true"></i>
                Sau khi mua, tôi có được tất cả các phiên bản ngôn ngữ không?
                (Tiếng Tây Ban Nha, Tiếng Trung, v.v.)
              </div>
              <div className="dd">
                Đúng vậy! Bạn có truy cập vào tất cả các phiên bản ngôn ngữ hiện
                tại và tương lai của cuốn sách điện tử.
              </div>
            </div>

            <h2>Còn câu hỏi nào khác không?</h2>

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
              . Thường thì chúng tôi sẽ trả lời trong vài giờ.
            </p>
          </div>

          <div className="section section-bordered buy-button">
            <h3 style={{ marginTop: "0", textAlign: "center" }}>
              <strong>Dive Into DESIGN PATTERNS</strong>
            </h3>

            <div className="d-block d-sm-flex">
              <div className="flex-grow-1 text-center">
                <div className="price-tag price-tag-hg">
                  <div className="price-tag offer">
                    <span className="old-price font-money">$30.00</span>
                    <span className="new-price font-money">
                      <span className="offer-text">GIẢM GIÁ</span> $8.95
                    </span>
                  </div>
                </div>
                <a
                  className="btn btn-secondary btn-buy btn-hg add-to-cart do-checkout"
                  href="#buy-now"
                  data-product="Dive Into Design Patterns"
                >
                  <i className="fa fa-shopping-cart"></i> Mua ngay
                </a>
              </div>
            </div>
            <div style={{ textAlign: "center", marginTop: "15px" }}>
              <div>
                <strong>PDF, EPUB, MOBI, KFX</strong> / Cập nhật miễn phí /{" "}
                <strong>Đảm bảo hoàn tiền trong 30 ngày</strong>
              </div>
            </div>
          </div>
        </article>

        <div
          // className="feature product-block affix"
          className="feature product-block"
        >
          <div className="image">
            <div className="image3d-book-right">
              <div className="image3d-cover" style={{ background: "#0b3752" }}>
                <a
                  className="do-checkout"
                  href="#buy-now"
                  data-product="Dive Into Design Patterns"
                >
                  <img
                    width="250"
                    height="375"
                    src="/images/patterns/book/web-cover-en.png"
                    // srcSet="
                    //   /images/patterns/book/web-cover-en-2x.png 2x,
                    //   /images/patterns/book/web-cover-en-3x.png 3x
                    // "
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="buy-widget">
            <div className="price-tag price-tag-hg compact">
              <span className="old-price font-money">$30.00</span>
              <span className="new-price font-money">
                <span className="offer-text">GIẢM GIÁ</span>
                $8.95
              </span>
            </div>
            <a
              className="btn btn-secondary btn-buy do-checkout"
              href="#buy-now"
              data-product="Dive Into Design Patterns"
            >
              <i className="fa fa-shopping-cart"></i> Mua ngay
            </a>
          </div>
          <div className="buy-options mt-4">
            <a
              className="do-checkout btn btn-block btn-md btn-secondary"
              href="#buy-now"
              data-product="Dive Into Design Patterns"
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
              <div className="image">
                <img
                  src="/images/content-public/landings/ipadiphone.png"
                  alt=""
                  className=""
                />
              </div>
              <div className="description">
                PDF, EPUB, MOBI, KFX
                <br />+ các ví dụ mã nguồn
              </div>
            </div>
            <div className="product-feature">
              <div className="image">
                <img
                  src="/images/content-public/landings/satisf.gif"
                  alt=""
                  className=""
                />
              </div>
              <div className="description">Đảm bảo hoàn tiền trong 30 ngày</div>
            </div>
          </div>
        </div>
      </div>
    </main>
    // </body>
  );
};

export default ContentBook;
