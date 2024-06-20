const ContentReplaceTypeCodewithSubclasses = () => {
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
            <h1 class="title">Thay Thế Mã Loại Bằng Các Lớp Con</h1>

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
                sử dụng một kiểu dữ liệu riêng biệt, bạn có một tập hợp các số
                hoặc chuỗi hình thành nên danh sách các giá trị được phép cho
                một thực thể nào đó. Thường thì những số và chuỗi cụ thể này
                được đặt tên dễ hiểu thông qua các hằng số, đó là lý do tại sao
                mã loại thường gặp nhiều như vậy.
              </p>
            </blockquote>

            <div class="before-after-container">
              <div class="before">
                <h3>Vấn Đề</h3>
                <p>
                  Bạn có một mã loại được mã hóa trực tiếp ảnh hưởng đến hành vi
                  của chương trình (các giá trị của trường này kích hoạt các
                  đoạn mã trong các điều kiện).
                </p>
              </div>
              <div class="after">
                <h3>Giải Pháp</h3>
                <p>
                  Tạo các lớp con cho mỗi giá trị của mã loại được mã hóa. Sau
                  đó, trích xuất các hành vi liên quan từ lớp gốc vào các lớp
                  con này. Thay thế mã điều khiển bằng tính đa hình.
                </p>
              </div>
            </div>

            <div class="examples">
              <div class="before-after before-after-container">
                <div class="before">
                  <div class="ba">Before</div>
                  <div class="ba-container">
                    <img
                      src="/images/refactoring/diagrams/Replace%20Type%20Code%20with%20Subclasses%20-%20Before4bb7.png?id=5fa75a3c084933dcb4d1d1f0c60e56d3"
                      alt="Replace Type Code with Subclasses - Before"
                      width="152"
                    />
                  </div>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <div class="ba-container">
                    <img
                      src="/images/refactoring/diagrams/Replace%20Type%20Code%20with%20Subclasses%20-%20After2670.png?id=9a9b00b277bd590e01589a441f50410e"
                      alt="Replace Type Code with Subclasses - After"
                      width="302"
                    />
                  </div>
                </div>
              </div>
            </div>

            <h3>Tại Sao Cần Tái Cấu Trúc</h3>
            <p>
              Kỹ thuật tái cấu trúc này là một biến thể phức tạp hơn của{" "}
              <a href="/refactoring/techniques/organizing-data/replace-type-code-with-class">
                Thay Thế Mã Loại Bằng Lớp
              </a>
              .
            </p>
            <p>
              Giống như trong phương pháp tái cấu trúc đầu tiên, bạn có một tập
              hợp các giá trị đơn giản tạo thành tất cả các giá trị được phép
              cho một trường. Mặc dù các giá trị này thường được chỉ định là các
              hằng số và có tên dễ hiểu, việc sử dụng chúng làm cho mã của bạn
              rất dễ gặp lỗi vì chúng vẫn là các giá trị nguyên thủy. Ví dụ, bạn
              có một phương thức chấp nhận một trong những giá trị này trong các
              tham số. Vào một thời điểm nào đó, thay vì hằng số{" "}
              <code>USER_TYPE_ADMIN</code> với giá trị{" "}
              <code>&quot;ADMIN&quot;</code>, tphương thức nhận cùng một chuỗi ở
              dạng chữ thường (<code>&quot;admin&quot;</code>), điều này sẽ gây
              ra việc thực hiện một thứ gì đó khác mà tác giả (bạn) không hề
              mong muốn.
            </p>
            <p>
              Ở đây chúng ta đang xử lý mã điều khiển như các điều kiện{" "}
              <code>if</code>, <code>switch</code> và <code>?:</code>. Nói cách
              khác, các trường với các giá trị mã hóa (như{" "}
              <code>$user-&gt;type === self::USER_TYPE_ADMIN</code>) được sử
              dụng bên trong các điều kiện của các toán tử này. Nếu chúng ta sử
              dụng{" "}
              <a href="/refactoring/techniques/organizing-data/replace-type-code-with-class">
                Thay Thế Mã Loại Bằng Lớp
              </a>{" "}
              ở đây, tất cả các cấu trúc điều khiển này tốt nhất nên được chuyển
              đến một lớp chịu trách nhiệm cho loại dữ liệu. Cuối cùng, điều này
              tất nhiên sẽ tạo ra một lớp loại rất giống với lớp ban đầu, với
              cùng các vấn đề.
            </p>
            <h3>Lợi Ích</h3>
            <ul>
              <li>
                <p>
                  Xóa bỏ mã điều khiển. Thay vì một <code>switch</code> cồng
                  kềnh trong lớp gốc, hãy chuyển mã tới các lớp con phù hợp.
                  Điều này cải thiện việc tuân thủ{" "}
                  <em>Nguyên Lý Trách Nhiệm Đơn Lẻ</em> và làm cho chương trình
                  dễ đọc hơn.
                </p>
              </li>
              <li>
                <p>
                  Nếu bạn cần thêm một giá trị mới cho mã loại, tất cả những gì
                  bạn cần làm là thêm một lớp con mới mà không cần chạm vào mã
                  hiện có (cf. the <em>Nguyên Lý Mở/Đóng</em>).
                </p>
              </li>
              <li>
                <p>
                  Bằng cách thay thế mã loại bằng các lớp, chúng ta mở đường cho
                  việc gợi ý kiểu cho các phương thức và trường ở mức ngôn ngữ
                  lập trình. Điều này sẽ không thể thực hiện được nếu sử dụng
                  các giá trị số hoặc chuỗi đơn giản được mã hóa.
                </p>
              </li>
            </ul>
            <h3>Khi Không Nên Sử Dụng</h3>
            <ul>
              <li>
                <p>
                  Kỹ thuật này không áp dụng nếu bạn đã có một hệ thống phân cấp
                  lớp. Bạn không thể tạo một hệ thống phân cấp kép qua kế thừa
                  trong lập trình hướng đối tượng. Tuy nhiên, bạn có thể thay
                  thế mã loại thông qua thành phần thay vì kế thừa. Để làm điều
                  này, hãy sử dụng{" "}
                  <a href="/refactoring/techniques/organizing-data/replace-type-code-with-state-strategy">
                    Thay Thế Mã Loại Bằng Trạng Thái/Chiến Lược
                  </a>
                  .
                </p>
              </li>
              <li>
                <p>
                  Nếu các giá trị của mã loại có thể thay đổi sau khi một đối
                  tượng được tạo, hãy tránh kỹ thuật này. Chúng ta sẽ phải thay
                  thế lớp của đối tượng ngay tại chỗ, điều này không thể thực
                  hiện được. Tuy nhiên, một lựa chọn thay thế trong trường hợp
                  này cũng là{" "}
                  <a href="/refactoring/techniques/organizing-data/replace-type-code-with-state-strategy">
                    Thay Thế Mã Loại Bằng Trạng Thái/Chiến Lược
                  </a>
                  .
                </p>
              </li>
            </ul>
            <h3>Cách Tái Cấu Trúc</h3>
            <ol>
              <li>
                <p>
                  Sử dụng kỹ thuật{" "}
                  <a href="/refactoring/techniques/organizing-data/self-encapsulate-field">
                    Tự Bao Bọc Trường
                  </a>
                  to create a getter for the field that contains type code.
                </p>
              </li>
              <li>
                <p>
                  Làm cho constructor của lớp cha là riêng tư. Tạo một phương
                  thức factory tĩnh với cùng các tham số như constructor của lớp
                  cha. Nó phải chứa tham số sẽ nhận các giá trị ban đầu của mã
                  loại. Tùy thuộc vào tham số này, phương thức factory sẽ tạo
                  các đối tượng của các lớp con khác nhau. Để làm điều này,
                  trong mã của nó bạn phải tạo một điều kiện lớn nhưng ít nhất,
                  nó sẽ là điều kiện duy nhất khi thật sự cần thiết; nếu không,
                  các lớp con và tính đa hình sẽ đảm nhận.
                </p>
              </li>
              <li>
                <p>
                  Tạo một lớp con duy nhất cho mỗi giá trị của mã loại. Trong
                  đó, định nghĩa lại getter của mã loại sao cho nó trả về giá
                  trị tương ứng của mã loại.
                </p>
              </li>
              <li>
                <p>
                  Xóa trường có mã loại từ lớp cha. Làm cho getter của nó là
                  trừu tượng.
                </p>
              </li>
              <li>
                <p>
                  Bây giờ bạn có các lớp con, bạn có thể bắt đầu di chuyển các
                  trường và phương thức từ lớp cha tới các lớp con tương ứng
                  (với sự trợ giúp của{" "}
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
                  Khi mọi thứ có thể đã được di chuyển, sử dụng{" "}
                  <a href="/refactoring/techniques/simplifying-conditional-expressions/replace-conditional-with-polymorphism">
                    Thay Thế Điều Kiện Bằng Tính Đa Hình
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
                <h3>Phản Tái Cấu Trúc</h3>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/techniques/organizing-data/replace-subclass-with-fields">
                      Thay Thế Lớp Con Bằng Các Trường
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-lg-4">
                <h3>Các Tái Cấu Trúc Tương Tự</h3>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/techniques/organizing-data/replace-type-code-with-class">
                      Thay Thế Mã Loại Bằng Lớp
                    </a>
                  </div>
                </div>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/techniques/organizing-data/replace-type-code-with-state-strategy">
                      Thay Thế Mã Loại Bằng Trạng Thái/Chiến Lược
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-lg-4">
                <h3>Loại Bỏ Mùi Mã</h3>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/smells/bloaters/primitive-obsession">
                      Nỗi Ám Ảnh Nguyên Thủy
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
                href="/refactoring/techniques/organizing-data/replace-type-code-with-state-strategy"
                class="btn btn-primary"
              >
                Thay Mã Loại Bằng Trạng Thái/Chiến Lược&nbsp;
                <span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/techniques/organizing-data/replace-type-code-with-class"
                class="btn btn-default"
              >
                <span class="fa fa-arrow-left"></span>&nbsp;Thay Mã Loại Bằng
                Lớp
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

export default ContentReplaceTypeCodewithSubclasses;
