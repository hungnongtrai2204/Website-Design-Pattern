const ContentDivergentChange = () => {
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
              <a class="type" href="/refactoring/smells/change-preventers">
                Các Yếu Tố Ngăn Cản Thay Đổi
              </a>
            </div>
            <h1 class="title">Thay Đổi Phân Kỳ</h1>

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
              <span style={{ display: "inline-block" }}>Divergent Change</span>
            </div> */}

            <blockquote>
              <p>
                Thay Đổi Phân Kỳ giống với{" "}
                <a href="/refactoring/smells/change-preventers/shotgun-surgery">
                  Phẫu Thuật Súng Ngắn
                </a>{" "}
                nhưng thực ra là mùi hôi ngược lại. Thay Đổi Phân Kỳ xảy ra khi
                nhiều thay đổi được thực hiện trên một lớp duy nhất. Phẫu Thuật
                Súng Ngắn đề cập đến khi một thay đổi duy nhất được thực hiện
                trên nhiều lớp cùng một lúc.
              </p>
            </blockquote>
            <h3>Dấu hiệu và Triệu chứng</h3>
            <p>
              Bạn thấy mình phải thay đổi nhiều phương thức không liên quan khi
              thực hiện các thay đổi cho một lớp. Ví dụ, khi thêm một loại sản
              phẩm mới, bạn phải thay đổi các phương thức tìm kiếm, hiển thị và
              đặt hàng sản phẩm.
            </p>
            <figure class="image">
              <img
                width="500"
                height="300"
                src="/images/refactoring/content/smells/divergent-change-010f98.png?id=d62e68e1778d67bf82ff74064c24de33"
                //     srcset="
                //   /images/refactoring/content/smells/divergent-change-01-2x.png?id=1c7d20737703941d1e3f7ad85e180578 2x
                // "
              />
            </figure>
            <h3>Nguyên nhân của vấn đề</h3>
            <p>
              Thường những sự thay đổi phân kỳ này là kết quả của cấu trúc
              chương trình kém hoặc lập trình "copypasta" không tốt.
            </p>
            <h3>Cách xử lý</h3>
            <ul>
              <li>
                <p>
                  Phân chia hành vi của lớp bằng cách{" "}
                  <a href="/refactoring/techniques/moving-features-between-objects/extract-class">
                    Tách Lớp
                  </a>
                  .
                </p>
              </li>
              <li>
                <p>
                  Nếu các lớp khác nhau có cùng hành vi, bạn có thể muốn kết hợp
                  các lớp thông qua kế thừa (
                  <a href="/refactoring/techniques/dealing-with-generalization/extract-superclass">
                    Tách Lớp Cha
                  </a>{" "}
                  và{" "}
                  <a href="/refactoring/techniques/dealing-with-generalization/extract-subclass">
                    Tách Lớp Con
                  </a>
                  ).
                </p>
              </li>
            </ul>
            <figure class="image">
              <img
                width="500"
                height="300"
                src="/images/refactoring/content/smells/divergent-change-02aacb.png?id=21b6fd7cba36f123c09497cb8f5a5625"
                //     srcset="
                //   /images/refactoring/content/smells/divergent-change-02-2x.png?id=581f6218d8a2393ece88419ad60831da 2x
                // "
                loading="lazy"
              />
            </figure>
            <h3>Lợi ích</h3>
            <ul>
              <li>
                <p>Cải thiện tổ chức mã nguồn.</p>
              </li>
              <li>
                <p>Giảm sự trùng lặp mã nguồn.</p>
              </li>
              <li>
                <p>Đơn giản hóa việc hỗ trợ.</p>
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
                href="/refactoring/smells/change-preventers/shotgun-surgery"
                class="btn btn-primary"
              >
                Phẫu Thuật Súng Ngắn&nbsp;
                <span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/smells/change-preventers"
                class="btn btn-default"
              >
                <span class="fa fa-arrow-left"></span>&nbsp;Các Yếu Tố Ngăn Cản
                Thay Đổi
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

export default ContentDivergentChange;
