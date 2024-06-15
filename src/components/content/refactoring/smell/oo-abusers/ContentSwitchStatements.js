const ContentSwitchStatements = () => {
  return (
    <main
      role="main"
      class="main-content top-content center-content"
      data-page_class=""
    >
      <div class="main-content-container center-content-container">
        <div class="page text">
          <article>
            <div class="breadcrumb">
              <a class="home" href="/">
                <i class="fa fa-home" aria-hidden="true"></i>
              </a>{" "}
              /{" "}
              <a class="type" href="/refactoring">
                Tái Cấu Trúc
              </a>{" "}
              /{" "}
              <a class="type" href="/refactoring/smells">
                Mùi Mã
              </a>{" "}
              /{" "}
              <a class="type" href="/refactoring/smells/oo-abusers">
                Lạm dụng Hướng Đối Tượng
              </a>
            </div>
            <h1 class="title">Câu lệnh Switch</h1>

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

            {/* <div class="aka">
              Также известен как:
              <span style={{ display: "inline-block" }}>Switch Statements</span>
            </div> */}

            <h3>Dấu hiệu và Triệu chứng</h3>
            <p>
              Bạn có một toán tử <code>switch</code> phức tạp hoặc một chuỗi các
              câu lệnh <code>if</code>.
            </p>
            <figure class="image">
              <img
                width="500"
                height="300"
                src="/images/refactoring/content/smells/switch-statements-013ae1.png?id=1c5a538d451c3d2b2e43d0d4f53b994b"
                //     srcset="
                //   /images/refactoring/content/smells/switch-statements-01-2x.png?id=da7f9cad4c4bb8bf5d6910aba08680be 2x
                // "
              />
            </figure>
            <h3>Nguyên nhân của vấn đề</h3>
            <p>
              Việc sử dụng toán tử <code>switch</code> và <code>case</code>tương
              đối hiếm là một trong những đặc điểm của mã nguồn hướng đối tượng.
              Thường thì mã nguồn cho một <code>switch</code> duy nhất có thể bị
              phân tán ở nhiều nơi khác nhau trong chương trình. Khi một điều
              kiện mới được thêm vào, bạn phải tìm tất cả mã <code>switch</code>{" "}
              và sửa đổi nó.
            </p>
            <p>
              Theo nguyên tắc chung, khi bạn thấy <code>switch</code>, bạn nên
              nghĩ đến tính đa hình (polymorphism).
            </p>
            <h3>Cách khắc phục</h3>
            <ul>
              <li>
                <p>
                  Để tách biệt câu lệnh <code>switch</code> và đặt nó vào đúng
                  lớp, bạn có thể cần{" "}
                  <a href="/refactorings/composing-methods/extract-method">
                    Tách Phương Thức
                  </a>{" "}
                  và sau đó{" "}
                  <a href="/refactorings/moving-features-between-objects/move-method">
                    Di Chuyển Phương Thức
                  </a>
                  .
                </p>
              </li>
              <li>
                <p>
                  Nếu một <code>switch</code> dựa trên mã kiểu, chẳng hạn như
                  khi chế độ chạy thời gian thực của chương trình được chuyển
                  đổi, hãy sử dụng{" "}
                  <a href="/refactorings/organizing-data/replace-type-code-with-subclasses">
                    Thay Mã Kiểu bằng Lớp Con
                  </a>{" "}
                  hoặc{" "}
                  <a href="/refactorings/organizing-data/replace-type-code-with-state-strategy">
                    Thay Mã Kiểu bằng Trạng Thái/Chiến Lược
                  </a>
                  .
                </p>
              </li>
              <li>
                <p>
                  Sau khi xác định cấu trúc kế thừa, hãy sử dụng{" "}
                  <a href="/refactorings/simplifying-conditional-expressions/replace-conditional-with-polymorphism">
                    Thay Câu Điều Kiện bằng Tính Đa Hình
                  </a>
                  .
                </p>
              </li>
              <li>
                <p>
                  Nếu không có quá nhiều điều kiện trong toán tử và tất cả chúng
                  đều gọi cùng một phương thức với các tham số khác nhau, tính
                  đa hình sẽ trở nên thừa thãi. Trong trường hợp này, bạn có thể
                  chia phương thức đó thành nhiều phương thức nhỏ hơn với{" "}
                  <a href="/refactorings/simplifying-method-calls/replace-parameter-with-explicit-methods">
                    Thay Tham Số Bằng Các Phương Thức Tường Minh
                  </a>{" "}
                  và thay đổi <code>switch</code> tương ứng.
                </p>
              </li>
              <li>
                <p>
                  Nếu một trong các tùy chọn điều kiện là <code>null</code>, hãy
                  sử dụng{" "}
                  <a href="/refactorings/simplifying-conditional-expressions/introduce-null-object">
                    Giới Thiệu Đối Tượng Null
                  </a>
                  .
                </p>
              </li>
            </ul>
            <h3>Lợi Ích</h3>
            <ul>
              <li>Tổ chức mã nguồn được cải thiện.</li>
            </ul>
            <figure class="image">
              <img
                width="500"
                height="300"
                src="/images/refactoring/content/smells/switch-statements-029112.png?id=29ec9ad9c6d760d2b940a68a1d23c4be"
                //     srcset="
                //   /images/refactoring/content/smells/switch-statements-02-2x.png?id=b7c9163ebe366c956f1aa64c4b3312e4 2x
                // "
                loading="lazy"
              />
            </figure>
            <h3>Khi nào nên bỏ qua</h3>
            <ul>
              <li>
                <p>
                  Khi một toán tử <code>switch</code> thực hiện các hành động
                  đơn giản, không có lý do gì để thay đổi mã nguồn.
                </p>
              </li>
              <li>
                <p>
                  Thường thì các toán tử <code>switch</code> được sử dụng bởi
                  các mẫu thiết kế factory (
                  <a href="/design-patterns/factory-method">Factory Method</a>{" "}
                  hoặc{" "}
                  <a href="/design-patterns/abstract-factory">
                    Abstract Factory
                  </a>
                  ) để chọn một lớp được tạo ra.
                </p>
              </li>
            </ul>

            <div
              class="prom banner-content banner banner-striped banner-with-image"
              data-id="Ref: Part of the ebook"
              data-creative-id="animated-ru"
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

          <nav class="prev-next">
            <div class="next">
              <h4>ĐỌC TIẾP</h4>
              <a
                rel="next"
                href="/refactoring/smells/oo-abusers/temporary-field"
                class="btn btn-primary"
              >
                Trường Tạm Thời&nbsp;
                <span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/smells/oo-abusers"
                class="btn btn-default"
              >
                <span class="fa fa-arrow-left"></span>&nbsp;Lạm Dụng Hướng Đối
                Tượng
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

export default ContentSwitchStatements;
