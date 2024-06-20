const ContentDeadCode = () => {
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
              <a class="type" href="/refactoring/smells/dispensables">
                Thành Phần Dư Thừa
              </a>
            </div>
            <h1 class="title">Mã Chết</h1>

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
              <span style="display: inline-block">Dead Code</span>
            </div> */}

            <h3>Dấu hiệu và Triệu chứng</h3>
            <p>
              Một biến, tham số, trường, phương thức hoặc lớp không còn được sử
              dụng (thường là do nó đã lỗi thời).
            </p>
            <figure class="image">
              <img
                width="500"
                height="300"
                src="/images/refactoring/content/smells/dead-code-01fd46.png?id=418685bee5de933c472c48efcb5b67a0"
                //     srcset="
                //   /images/refactoring/content/smells/dead-code-01-2x.png?id=d9981d853e7e855cf0454fc32aab85a6 2x
                // "
              />
            </figure>
            <h3>Nguyên nhân của Vấn đề</h3>
            <p>
              Khi yêu cầu cho phần mềm thay đổi hoặc các lỗi đã được sửa chữa,
              không ai có thời gian để dọn dẹp mã cũ.
            </p>
            <p>
              Loại mã này cũng có thể được tìm thấy trong các điều kiện phức
              tạp, khi một trong các nhánh trở nên không thể đạt tới (do lỗi
              hoặc các hoàn cảnh khác).
            </p>
            <h3>Xử Lý</h3>
            <p>
              Cách nhanh nhất để tìm mã nguồn không còn sử dụng là sử dụng một{" "}
              <a href="https://en.wikipedia.org/wiki/Integrated_development_environment">
                IDE
              </a>{" "}
              tốt.
            </p>
            <ul>
              <li>
                <p>Xóa mã nguồn không sử dụng và các tệp không cần thiết.</p>
              </li>
              <li>
                <p>
                  Trong trường hợp một lớp không cần thiết, có thể áp dụng{" "}
                  <a href="/refactoring/techniques/moving-features-between-objects/inline-class">
                    Gộp Lớp
                  </a>{" "}
                  hoặc{" "}
                  <a href="/refactoring/techniques/dealing-with-generalization/collapse-hierarchy">
                    Thu Gọn Hệ Thống Phân Cấp
                  </a>{" "}
                  nếu có sử dụng lớp con hoặc lớp cha..
                </p>
              </li>
              <li>
                <p>
                  Để loại bỏ các tham số không cần thiết, sử dụng{" "}
                  <a href="/refactoring/techniques/simplifying-method-calls/remove-parameter">
                    Loại Bỏ Tham Số
                  </a>
                  .
                </p>
              </li>
            </ul>
            <figure class="image">
              <img
                width="500"
                height="300"
                src="/images/refactoring/content/smells/dead-code-025e37.png?id=b368f23b7cc88340933b761cf2ad1954"
                //     srcset="
                //   /images/refactoring/content/smells/dead-code-02-2x.png?id=bf78ebf643d890b41b60058d8e67d845 2x
                // "
                loading="lazy"
              />
            </figure>
            <h3>Lợi ích</h3>
            <ul>
              <li>
                <p>Giảm kích thước mã.</p>
              </li>
              <li>
                <p>Hỗ trợ đơn giản hơn.</p>
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
                href="/refactoring/smells/dispensables/speculative-generality"
                class="btn btn-primary"
              >
                Tổng Quát Hóa Đầu Cơ&nbsp;
                <span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/smells/dispensables/data-class"
                class="btn btn-default"
              >
                <span class="fa fa-arrow-left"></span>&nbsp;Lớp Dữ Liệu
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

export default ContentDeadCode;
