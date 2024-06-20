const ContentIncompleteLibraryClass = () => {
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
              <a class="type" href="/refactoring/smells/other">
                Các Mùi Mã Khác
              </a>
            </div>
            <h1 class="title">Lớp Thư Viện Không Hoàn Chỉnh</h1>
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
          <span style="display: inline-block"
            >Incomplete Library Class</span
          >
        </div> */}
            <h3>Dấu Hiệu và Triệu Chứng</h3>
            <p>
              Sớm hay muộn,{" "}
              <a href="https://en.wikipedia.org/wiki/Library_(computing)">
                các thư viện
              </a>{" "}
              sẽ không đáp ứng được nhu cầu của người dùng. Giải pháp duy nhất
              cho vấn đề này—thay đổi thư viện—thường là không thể vì thư viện
              chỉ đọc.
            </p>
            <figure class="image">
              <img
                width="500"
                height="300"
                src="/images/refactoring/content/smells/incomplete-library-class-0152c5.png?id=ca51f740f7fd39b7de1430b64cae9f8c"
                //     srcset="
                //   /images/refactoring/content/smells/incomplete-library-class-01-2x.png?id=25c39ccf56423153b7c977c57943af54 2x
                // "
              />
            </figure>
            <h3>Nguyên Nhân Vấn Đề</h3>
            <p>
              Tác giả của thư viện chưa cung cấp các tính năng bạn cần hoặc từ
              chối thực hiện chúng.
            </p>
            <h3>Xử Lý</h3>
            <ul>
              <li>
                <p>
                  Để giới thiệu một vài phương thức vào một lớp thư viện, hãy sử
                  dụng{" "}
                  <a href="/refactoring/techniques/moving-features-between-objects/introduce-foreign-method">
                    Giới Thiệu Phương Thức Ngoại Lai
                  </a>
                  .
                </p>
              </li>
              <li>
                <p>
                  Đối với những thay đổi lớn trong một lớp thư viện, hãy sử dụng{" "}
                  <a href="/refactoring/techniques/moving-features-between-objects/introduce-local-extension">
                    Giới Thiệu Mở Rộng Cục Bộ
                  </a>
                  .
                </p>
              </li>
            </ul>
            <h3>Lợi Ích</h3>
            <ul>
              <li>
                Giảm sự trùng lặp mã (thay vì tạo thư viện của riêng bạn từ đầu,
                bạn vẫn có thể tận dụng một thư viện hiện có).
              </li>
            </ul>
            <figure class="image">
              <img
                width="500"
                height="300"
                src="/images/refactoring/content/smells/incomplete-library-class-02b14e.png?id=05a8d9c631d43a3fb256196f366fd089"
                //     srcset="
                //   /images/refactoring/content/smells/incomplete-library-class-02-2x.png?id=cb204d62084939b3d9e6f97d5d3662ee 2x
                // "
                loading="lazy"
              />
            </figure>
            <h3>Khi Nào Nên Bỏ Qua</h3>
            <ul>
              <li>
                Mở rộng một thư viện có thể tạo ra công việc bổ sung nếu các
                thay đổi đối với thư viện liên quan đến thay đổi trong mã nguồn.
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
                href="/refactoring/smells/couplers/inappropriate-intimacy"
                class="btn btn-primary"
              >
                Các Kỹ Thuật&nbsp;
                <span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/smells/other"
                class="btn btn-default"
              >
                <span class="fa fa-arrow-left"></span>&nbsp;Các Mùi Mã Khác
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

export default ContentIncompleteLibraryClass;
