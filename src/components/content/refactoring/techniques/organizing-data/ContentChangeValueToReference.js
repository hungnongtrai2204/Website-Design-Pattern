const ContentChangeValueToReference = () => {
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
            <h1 class="title">Chuyển Giá Trị Thành Tham Chiếu</h1>

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

            <div class="before-after-container">
              <div class="before">
                <h3>Vấn Đề</h3>
                <p>
                  Bạn có nhiều trường hợp giống hệt nhau của một lớp cần thay
                  thế bằng một đối tượng duy nhất.
                </p>
              </div>
              <div class="after">
                <h3>Giải Pháp</h3>
                <p>
                  Chuyển các đối tượng giống hệt nhau thành một đối tượng tham
                  chiếu duy nhất.
                </p>
              </div>
            </div>

            <div class="examples">
              <div class="before-after before-after-container">
                <div class="before">
                  <div class="ba">Before</div>
                  <div class="ba-container">
                    <img
                      src="/images/refactoring/diagrams/Change%20Value%20to%20Reference%20-%20Beforefa98.png?id=b2e65e5bb87366e8195bab6933c15250"
                      alt="Change Value to Reference - Before"
                      width="396"
                    />
                  </div>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <div class="ba-container">
                    <img
                      src="/images/refactoring/diagrams/Change%20Value%20to%20Reference%20-%20Afterfe5d.png?id=20d3bdea32264097859011bacb4ff19f"
                      alt="Change Value to Reference - After"
                      width="396"
                    />
                  </div>
                </div>
              </div>
            </div>

            <h3>Lý Do Tái Cấu Trúc</h3>
            <p>
              Trong nhiều hệ thống, các đối tượng có thể được phân loại là giá
              trị hoặc tham chiếu.
            </p>
            <ul>
              <li>
                <p>
                  <strong>Tham chiếu</strong>: khi một đối tượng thực tế tương
                  ứng với chỉ một đối tượng trong chương trình. Tham chiếu
                  thường là các đối tượng người dùng/đơn hàng/sản phẩm, v.v.
                </p>
              </li>
              <li>
                <p>
                  <strong>Giá trị</strong>: một đối tượng thực tế tương ứng với
                  nhiều đối tượng trong chương trình. Những đối tượng này có thể
                  là ngày tháng, số điện thoại, địa chỉ, màu sắc và những thứ
                  tương tự.
                </p>
              </li>
            </ul>
            <p>
              Việc lựa chọn giữa tham chiếu và giá trị không phải lúc nào cũng
              rõ ràng. Đôi khi có một giá trị đơn giản với một lượng nhỏ dữ liệu
              không đổi. Sau đó, cần thêm dữ liệu thay đổi và truyền những thay
              đổi này mỗi khi đối tượng được truy cập. Trong trường hợp này, cần
              thiết chuyển nó thành một tham chiếu.
            </p>
            <h3>Lợi Ích</h3>
            <ul>
              <li>
                Một đối tượng chứa tất cả thông tin mới nhất về một thực thể cụ
                thể. Nếu đối tượng thay đổi ở một phần của chương trình, các
                thay đổi này có thể truy cập từ các phần khác của chương trình
                sử dụng đối tượng đó.
              </li>
            </ul>
            <h3>Nhược Điểm</h3>
            <ul>
              <li>Tham chiếu khó triển khai hơn nhiều.</li>
            </ul>
            <h3>Cách Tái Cấu Trúc</h3>
            <ol>
              <li>
                <p>
                  Sử dụng{" "}
                  <a href="/refactoring/techniques/simplifying-method-calls/replace-constructor-with-factory-method">
                    Thay thế hàm tạo bằng phương thức Factory
                  </a>{" "}
                  trên lớp từ đó các tham chiếu sẽ được tạo ra.
                </p>
              </li>
              <li>
                <p>
                  Xác định đối tượng nào sẽ chịu trách nhiệm cung cấp truy cập
                  vào các tham chiếu. Thay vì tạo một đối tượng mới, khi bạn cần
                  một, bây giờ bạn cần lấy nó từ một đối tượng lưu trữ hoặc
                  trường từ điển tĩnh.
                </p>
              </li>
              <li>
                <p>
                  Xác định liệu các tham chiếu sẽ được tạo trước hay tạo động
                  khi cần thiết. Nếu các đối tượng được tạo trước, hãy đảm bảo
                  tải chúng trước khi sử dụng.
                </p>
              </li>
              <li>
                <p>
                  Thay đổi phương thức factory để trả về một tham chiếu. Nếu các
                  đối tượng được tạo trước, quyết định cách xử lý lỗi khi một
                  đối tượng không tồn tại được yêu cầu. Bạn cũng có thể cần sử
                  dụng{" "}
                  <a href="/refactoring/techniques/simplifying-method-calls/rename-method">
                    Đổi tên phương thức
                  </a>{" "}
                  để thông báo rằng phương thức chỉ trả về các đối tượng tồn
                  tại.
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
              <div class="col-xs-12 col-sm-6 col-lg-12">
                <h3>Chống Tái Cấu Trúc</h3>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/techniques/organizing-data/change-reference-to-value">
                      Chuyển Tham Chiếu Thành Giá Trị
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
                href="/refactoring/techniques/organizing-data/change-reference-to-value"
                class="btn btn-primary"
              >
                Thay Đổi Tham Chiếu Thành Giá Trị&nbsp;
                <span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/techniques/organizing-data/replace-data-value-with-object"
                class="btn btn-default"
              >
                <span class="fa fa-arrow-left"></span>&nbsp;Thay Giá Trị Dữ Liệu
                Bằng Đối Tượng
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

export default ContentChangeValueToReference;
