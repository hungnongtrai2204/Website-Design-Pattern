const ContentLazyClass = () => {
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
            <h1 class="title">Lớp Lười Biếng</h1>

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
              <span style="display: inline-block">Lazy Class</span>
            </div> */}

            <h3>Dấu hiệu và Triệu chứng</h3>
            <p>
              Việc hiểu và bảo trì các lớp luôn tốn thời gian và tiền bạc. Vì
              vậy, nếu một lớp không đủ quan trọng để thu hút sự chú ý của bạn,
              nó nên được xóa đi.
            </p>
            <figure class="image">
              <img
                width="500"
                height="300"
                src="/images/refactoring/content/smells/lazy-class-0148c1.png?id=efec5911dfaaa3ba69d3eb4dab03fd3c"
                //     srcset="
                //   /images/refactoring/content/smells/lazy-class-01-2x.png?id=3b5b07bc60eb98c883fc68c5e1a05aed 2x
                // "
              />
            </figure>
            <h3>Nguyên nhân của Vấn đề</h3>
            <p>
              Có thể một lớp đã được thiết kế để hoạt động đầy đủ chức năng
              nhưng sau một số lần tái cấu trúc, nó đã trở nên vô cùng nhỏ bé.
            </p>
            <p>
              Hoặc có thể lớp này được thiết kế để hỗ trợ công việc phát triển
              trong tương lai mà chưa bao giờ được thực hiện.
            </p>
            <h3>Xử lý</h3>
            <ul>
              <li>
                <p>
                  Các thành phần gần như vô dụng nên được xử lý bằng cách sử
                  dụng{" "}
                  <a href="/refactoring/techniques/moving-features-between-objects/inline-class">
                    Gộp Lớp
                  </a>
                  .
                </p>
              </li>
              <li>
                <p>
                  Đối với các lớp con có ít chức năng, hãy thử{" "}
                  <a href="/refactoring/techniques/dealing-with-generalization/collapse-hierarchy">
                    Thu Gọn Hệ Thống Phân Cấp
                  </a>
                  .
                </p>
              </li>
            </ul>
            <figure class="image">
              <img
                width="500"
                height="300"
                src="/images/refactoring/content/smells/lazy-class-02adb6.png?id=393302f2bd27ba0197660caea274ae23"
                srcset="
              /images/refactoring/content/smells/lazy-class-02-2x.png?id=d46dd63f159b40aa266ccbdbefb319bd 2x
            "
                loading="lazy"
              />
            </figure>
            <h3>Lợi ích</h3>
            <ul>
              <li>
                <p>Giảm kích thước mã nguồn.</p>
              </li>
              <li>
                <p>Dễ dàng bảo trì hơn.</p>
              </li>
            </ul>
            <h3>Khi nào bỏ qua</h3>
            <ul>
              <li>
                Đôi khi một <em>Lớp Lười</em> được tạo ra để phân định ý định
                phát triển trong tương lai. Trong trường hợp này, hãy cố gắng
                duy trì sự cân bằng giữa sự rõ ràng và đơn giản trong mã của
                bạn.
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
                href="/refactoring/smells/dispensables/data-class"
                class="btn btn-primary"
              >
                Lớp Dữ Liệu&nbsp;
                <span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/smells/dispensables/duplicate-code"
                class="btn btn-default"
              >
                <span class="fa fa-arrow-left"></span>&nbsp;Mã Nguồn Trùng Lặp
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

export default ContentLazyClass;
