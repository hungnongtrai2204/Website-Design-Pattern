const ContentTemporaryField = () => {
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
            <h1 class="title">Trường Tạm Thời</h1>

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
              <span style={{ display: "inline-block" }}>Temporary Field</span>
            </div> */}

            <h3>Dấu hiệu và Triệu chứng</h3>
            <p>
              Các trường tạm thời chỉ nhận giá trị (và do đó cần thiết cho các
              đối tượng) dưới một số hoàn cảnh nhất định. Ngoài những hoàn cảnh
              này, chúng trống rỗng.
            </p>
            <figure class="image">
              <img
                width="500"
                height="300"
                src="/images/refactoring/content/smells/temporary-field-01e767.png?id=5e30a8144171693ee4894091762b9742"
                //     srcset="
                //   /images/refactoring/content/smells/temporary-field-01-2x.png?id=1cf05ea67f1e3bd1c1f634af7408f67c 2x
                // "
              />
            </figure>
            <h3>Nguyên nhân của vấn đề</h3>
            <p>
              Thường thì các trường tạm thời được tạo ra để sử dụng trong một
              thuật toán yêu cầu một lượng lớn đầu vào. Vì vậy, thay vì tạo ra
              một số lượng lớn các tham số trong phương thức, lập trình viên
              quyết định tạo các trường cho dữ liệu này trong lớp. Các trường
              này chỉ được sử dụng trong thuật toán và không được sử dụng vào
              thời gian còn lại.
            </p>
            <p>
              Loại mã nguồn này rất khó hiểu. Bạn mong đợi thấy dữ liệu trong
              các trường của đối tượng nhưng vì lý do nào đó chúng hầu như luôn
              trống rỗng.
            </p>
            <figure class="image">
              <img
                width="500"
                height="300"
                src="/images/refactoring/content/smells/temporary-field-02bc27.png?id=2cf98e02ffb0c1d36a98d48ba7bc5c45"
                //     srcset="
                //   /images/refactoring/content/smells/temporary-field-02-2x.png?id=6c8e4384d9029cd3ec84cd330d5871eb 2x
                // "
                loading="lazy"
              />
            </figure>
            <h3>Cách khắc phục</h3>
            <ul>
              <li>
                <p>
                  Các trường tạm thời và tất cả mã nguồn thao tác trên chúng có
                  thể được đưa vào một lớp riêng biệt thông qua{" "}
                  <a href="/refactoring/techniques/moving-features-between-objects/extract-class">
                    Tách Lớp
                  </a>
                  . Nói cách khác, bạn đang tạo ra một đối tượng phương thức,
                  đạt được kết quả tương tự như khi bạn thực hiện{" "}
                  <a href="/refactoring/techniques/composing-methods/replace-method-with-method-object">
                    Thay Phương Thức bằng Đối Tượng Phương Thức
                  </a>
                  .
                </p>
              </li>
              <li>
                <p>
                  <a href="/refactoring/techniques/simplifying-conditional-expressions/introduce-null-object">
                    Giới Thiệu Đối Tượng Null
                  </a>{" "}
                  và tích hợp nó thay cho mã điều kiện đã được sử dụng để kiểm
                  tra sự tồn tại của các giá trị trường tạm thời.
                </p>
              </li>
            </ul>
            <figure class="image">
              <img
                width="500"
                height="300"
                src="/images/refactoring/content/smells/temporary-field-032ad0.png?id=cf0e1c1e2a19745d23ca9e1d917d45cc"
                //     srcset="
                //   /images/refactoring/content/smells/temporary-field-03-2x.png?id=c633fd664958307bf296b09de72959dd 2x
                // "
                loading="lazy"
              />
            </figure>
            <h3>Lợi ích</h3>
            <ul>
              <li>Mã nguồn rõ ràng và tổ chức tốt hơn.</li>
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
                href="/refactoring/smells/oo-abusers/refused-bequest"
                class="btn btn-primary"
              >
                Từ Chối Thừa Kế&nbsp;
                <span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/smells/oo-abusers/switch-statements"
                class="btn btn-default"
              >
                <span class="fa fa-arrow-left"></span>&nbsp;Câu Lệnh Switch
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

export default ContentTemporaryField;
