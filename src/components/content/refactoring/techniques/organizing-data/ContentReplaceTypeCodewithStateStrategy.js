const ContentReplaceTypeCodewithStateStrategy = () => {
  return (
    <main
      role="main"
      class="main-content top-content center-content"
      data-page_class=""
    >
      <div class="main-content-container center-content-container">
        <div class="refactoring page text">
          <article>
            <div class="breadcrumb">
              <a class="home" href="/">
                <i class="fa fa-home"></i>
              </a>{" "}
              /{" "}
              <a class="type" href="/refactoring">
                Tái Cấu Trúc
              </a>{" "}
              /{" "}
              <a class="type" href="/refactoring/techniques">
                Các Kỹ Thuật
              </a>{" "}
              /{" "}
              <a class="type" href="/refactoring/techniques/organizing-data">
                Tổ Chức Dữ Liệu
              </a>
            </div>
            <h1 class="title">Thay Thế Mã Loại Bằng Trạng Thái/Chiến Lược</h1>

            {/* <script type="text/javascript">
          // Shorten examples titles for users.
          var h1 = document.getElementsByTagName("H1")[0];
          if (h1.offsetHeight > 160) {
            h1.className += " smaller";
          }

          // Small beautification for pattern examples.
          var title = h1.innerHTML;
          title = title.replace(
            /^(Java|C\+\+|C#|PHP|Python|Ruby|Delphi): (.*)$/,
            "<strong>$1:</strong> $2"
          );
          h1.innerHTML = title;
        </script> */}

            <blockquote>
              <p>
                <strong>Mã loại là gì?</strong> Mã loại xuất hiện khi, thay vì
                sử dụng một loại dữ liệu riêng biệt, bạn có một tập hợp các số
                hoặc chuỗi tạo thành danh sách các giá trị hợp lệ cho một số
                thực thể. Thường thì những số và chuỗi cụ thể này được đặt tên
                dễ hiểu thông qua các hằng số, đó là lý do tại sao mã loại như
                vậy thường được gặp rất nhiều.
              </p>
            </blockquote>

            <div class="before-after-container">
              <div class="before">
                <h3>Vấn đề</h3>
                <p>
                  Bạn có một mã loại ảnh hưởng đến hành vi nhưng bạn không thể
                  sử dụng các lớp con để loại bỏ nó.
                </p>
              </div>
              <div class="after">
                <h3>Giải pháp</h3>
                <p>
                  Thay thế mã loại bằng một đối tượng trạng thái. Nếu cần thiết
                  để thay thế một giá trị trường bằng mã loại, một đối tượng
                  trạng thái khác sẽ được “cắm vào”.
                </p>
              </div>
            </div>

            <div class="examples">
              <div class="before-after before-after-container">
                <div class="before">
                  <div class="ba">Before</div>
                  <div class="ba-container">
                    <img
                      src="/images/refactoring/diagrams/Replace%20Type%20Code%20with%20State-Strategy%20-%20Before4bb7.png?id=5fa75a3c084933dcb4d1d1f0c60e56d3"
                      alt="Replace Type Code with State-Strategy - Before"
                      width="152"
                    />
                  </div>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <div class="ba-container">
                    <img
                      src="/images/refactoring/diagrams/Replace%20Type%20Code%20with%20State-Strategy%20-%20After15f4.png?id=1fb190a5b389c0a88e7335648b869748"
                      alt="Replace Type Code with State-Strategy - After"
                      width="452"
                    />
                  </div>
                </div>
              </div>
            </div>

            <h3>Tại Sao Phải Tái Cấu Trúc</h3>
            <p>
              Bạn có mã loại và nó ảnh hưởng đến hành vi của một lớp, do đó
              chúng ta không thể sử dụng{" "}
              <a href="/refactoring/techniques/organizing-data/replace-type-code-with-class">
                Thay Thế Mã Loại Bằng Lớp
              </a>
              .
            </p>
            <p>
              Mã loại ảnh hưởng đến hành vi của một lớp nhưng chúng ta không thể
              tạo các lớp con cho mã loại do hệ thống phân cấp lớp hiện tại hoặc
              các lý do khác. Vì vậy chúng ta không thể áp dụng{" "}
              <a href="/refactoring/techniques/organizing-data/replace-type-code-with-subclasses">
                Thay Thế Mã Loại Bằng Các Lớp Con
              </a>
              .
            </p>
            <h3>Lợi Ích</h3>
            <ul>
              <li>
                <p>
                  Kỹ thuật tái cấu trúc này là một giải pháp trong các tình
                  huống khi một trường với mã loại thay đổi giá trị của nó trong
                  suốt vòng đời của đối tượng. Trong trường hợp này, việc thay
                  thế giá trị được thực hiện thông qua việc thay thế đối tượng
                  trạng thái mà lớp gốc tham chiếu đến.
                </p>
              </li>
              <li>
                <p>
                  Nếu bạn cần thêm một giá trị mới của mã loại, tất cả những gì
                  bạn cần làm là thêm một lớp con trạng thái mới mà không cần
                  thay đổi mã hiện có (xem <em>Nguyên lý Mở/Đóng</em>).
                </p>
              </li>
            </ul>
            <h3>Nhược Điểm</h3>
            <ul>
              <li>
                Nếu bạn có một trường hợp mã loại đơn giản nhưng bạn vẫn sử dụng
                kỹ thuật tái cấu trúc này, bạn sẽ có nhiều lớp phụ (và không cần
                thiết).
              </li>
            </ul>
            <h3>Cần Biết</h3>
            <p>
              Việc thực hiện kỹ thuật tái cấu trúc này có thể sử dụng một trong
              hai mẫu thiết kế: <strong>State</strong> hoặc{" "}
              <strong>Strategy</strong>. Việc thực hiện là như nhau dù bạn chọn
              mẫu nào. Vậy bạn nên chọn mẫu nào trong tình huống cụ thể?
            </p>
            <p>
              Nếu bạn đang cố gắng tách một điều kiện điều khiển việc lựa chọn
              các thuật toán, hãy sử dụng Chiến Lược.
            </p>
            <p>
              Nhưng nếu mỗi giá trị của mã loại chịu trách nhiệm không chỉ cho
              việc lựa chọn một thuật toán mà còn cho toàn bộ điều kiện của lớp,
              trạng thái lớp, giá trị trường, và nhiều hành động khác, Trạng
              Thái sẽ phù hợp hơn cho công việc.
            </p>
            <h3>Cách Tái Cấu Trúc</h3>
            <ol>
              <li>
                <p>
                  Sử dụng{" "}
                  <a href="/refactoring/techniques/organizing-data/self-encapsulate-field">
                    Tự Bao Bọc Trường
                  </a>
                  to create a getter for the field that contains type code.
                </p>
              </li>
              <li>
                <p>
                  Tạo một lớp mới và đặt cho nó một tên dễ hiểu phù hợp với mục
                  đích của mã loại. Lớp này sẽ đóng vai trò là <em>state</em>{" "}
                  (hoặc <em>strategy</em>). Trong đó, tạo một getter trừu tượng
                  cho trường mã loại.
                </p>
              </li>
              <li>
                <p>
                  Tạo các lớp con của lớp trạng thái cho mỗi giá trị của mã
                  loại. Trong mỗi lớp con, xác định lại getter của trường mã
                  loại để nó trả về giá trị tương ứng của mã loại.
                </p>
              </li>
              <li>
                <p>
                  Trong lớp trạng thái trừu tượng, tạo một phương thức nhà máy
                  tĩnh chấp nhận giá trị của mã loại như một tham số. Tùy thuộc
                  vào tham số này, phương thức nhà máy sẽ tạo các đối tượng của
                  các trạng thái khác nhau. Để làm điều này, trong mã của nó tạo
                  một điều kiện lớn; nó sẽ là điều kiện duy nhất khi việc tái
                  cấu trúc hoàn tất.
                </p>
              </li>
              <li>
                <p>
                  Trong lớp gốc, thay đổi loại của trường mã loại thành lớp
                  trạng thái. Trong setter của trường, gọi phương thức nhà máy
                  trạng thái để lấy các đối tượng trạng thái mới.
                </p>
              </li>
              <li>
                <p>
                  Bây giờ bạn có thể bắt đầu di chuyển các trường và phương thức
                  từ siêu lớp sang các lớp con trạng thái tương ứng (sử dụng{" "}
                  <a href="/refactoring/techniques/dealing-with-generalization/push-down-field">
                    Đẩy Xuống Trường
                  </a>{" "}
                  và{" "}
                  <a href="/refactoring/techniques/dealing-with-generalization/push-down-method">
                    Đẩy Xuống Phương Thức
                  </a>
                  ).
                </p>
              </li>
              <li>
                <p>
                  Khi mọi thứ có thể di chuyển đã được di chuyển, sử dụng{" "}
                  <a href="/refactoring/techniques/simplifying-conditional-expressions/replace-conditional-with-polymorphism">
                    Thay Thế Điều Kiện Bằng Đa Hình
                  </a>{" "}
                  để loại bỏ các điều kiện sử dụng mã loại một lần và mãi mãi.
                </p>
              </li>
            </ol>

            <div
              class="prom banner-content banner banner-striped banner-with-image"
              data-id="Ref: Part of the ebook"
              data-creative-id="animated-en"
              data-position="content_bottom"
            >
              <div class="banner-image">
                <a href="/store/course">
                  <video
                    id="banner-zzz"
                    loop
                    muted
                    playsinline
                    width="200"
                    height="200"
                    autoPlay
                  >
                    <source
                      src="/images/refactoring/banners/tired-of-reading-banner-1xdc3d.mp4?id=7fa8f9682afda143c2a491c6ab1c1e56"
                      type="video/mp4"
                    />
                    <source
                      src="/images/refactoring/banners/tired-of-reading-banner3c9b.png?id=1721d160ff9c84cbf8912f5d282e2bb4"
                      type="image/png"
                    />
                    Your browser does not support HTML video.
                  </video>
                </a>
              </div>
              {/* <script>
            if (/CPU (?:iPhone )?OS [1-9]_/.test(navigator.userAgent)) {
              // Don't autoplay on old iOS, since it doesn not support playsinline.
            } else {
              document.getElementById("banner-zzz").play();
            }
          </script> */}

              <div class="banner-text">
                <h3 class="title">Mệt mỏi vì đọc quá nhiều?</h3>
                <p class="big">
                  Không có gì lạ, phải mất <span class="blue">7 giờ</span> để
                  đọc hết tất cả các văn bản ở đây.
                </p>
                <p>
                  Hãy thử khóa học tương tác của chúng tôi về tái cấu trúc. Nó
                  cung cấp một cách tiếp cận bớt tẻ nhạt hơn để học những kiến
                  thức mới.
                </p>
                <a class="btn btn-secondary" href="/store/course">
                  <i class="fa fa-star" aria-hidden="true"></i> Cùng xem nào...
                </a>
              </div>
            </div>
          </article>

          <nav class="relations link-list">
            <div class="row">
              <div class="col-xs-12 col-sm-6 col-lg-4">
                <h3>Các tái cấu trúc tương tự</h3>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/techniques/organizing-data/replace-type-code-with-class">
                      Thay Thế Mã Loại Bằng Lớp
                    </a>
                  </div>
                </div>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/techniques/organizing-data/replace-type-code-with-subclasses">
                      Thay Thế Mã Loại Bằng Các Lớp Con
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-lg-4">
                <h3>Thực hiện mẫu thiết kế</h3>
                <div class="dl">
                  <div class="dt">
                    <a href="/design-patterns/state">State</a>
                  </div>
                </div>
                <div class="dl">
                  <div class="dt">
                    <a href="/design-patterns/strategy">Strategy</a>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-lg-4">
                <h3>Loại bỏ mùi mã</h3>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/smells/bloaters/primitive-obsession">
                      Ám Ảnh Nguyên Thủy
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <nav class="prev-next">
            <div class="next">
              <h4>ĐỌC TIẾP</h4>
              <a
                rel="next"
                href="/refactoring/techniques/organizing-data/replace-subclass-with-fields"
                class="btn btn-primary"
              >
                Thay Lớp Con Bằng Các Trường&nbsp;
                <span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/techniques/organizing-data/replace-type-code-with-subclasses"
                class="btn btn-default"
              >
                <span class="fa fa-arrow-left"></span>&nbsp;Thay Mã Loại Bằng
                Các Lớp Con
              </a>
            </div>
          </nav>
        </div>
        <aside class="feature content-secondary">
          <div
            class="prom banner-sidebar"
            data-id="Ref: Sidebar"
            data-creative-id="standard-sidebar-ru"
            data-position="sidebar"
          >
            <div class="ban">
              <div class="image product-image">
                <span class="banner-discount">SALE!</span>
                <a href="/store/course">
                  <img
                    width="300"
                    height="300"
                    loading="lazy"
                    src="/images/refactoring/course/course-cover-en1b63.jpg?id=e9d6b4015f4c6c48cf06f7479874d8d7"
                  />
                </a>
              </div>
              <div class="banner-text banner-text-ru">
                <p class="text-center">
                  Mùi mã này là một phần của <b>Khóa Học Tái Cấu Trúc</b> lớn
                  hơn nhiều.
                </p>
                <a href="/store/course" class="btn btn-secondary btn-block">
                  <i class="fa fa-star" aria-hidden="true"></i> Tìm hiểu thêm...
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default ContentReplaceTypeCodewithStateStrategy;
