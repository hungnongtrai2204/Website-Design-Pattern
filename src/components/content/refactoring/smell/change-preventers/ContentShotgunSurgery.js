const ContentShotgunSurgery = () => {
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
            <h1 class="title">Phẫu Thuật Súng Ngắn</h1>

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
              <span
                style={{ display: "inline-block" }}
                // style="display: inline-block"
              >
                Shotgun Surgery
              </span>
            </div> */}

            <blockquote>
              <p>
                Phẫu thuật súng ngắn giống với{" "}
                <a href="/refactoring/smells/change-preventers/divergent-change">
                  Thay Đổi Phân Kỳ
                </a>{" "}
                nhưng thực tế là mùi hôi ngược lại. Thay đổi phân kỳ xảy ra khi
                nhiều thay đổi được thực hiện trên một lớp duy nhất. Phẫu thuật
                súng ngắn đề cập đến khi một thay đổi duy nhất được thực hiện
                đồng thời trên nhiều lớp.
              </p>
            </blockquote>
            <h3>Dấu hiệu và triệu chứng</h3>
            <p>
              Mỗi khi thực hiện bất kỳ sửa đổi nào, bạn cần phải thực hiện nhiều
              thay đổi nhỏ trong nhiều lớp khác nhau.
            </p>
            <figure class="image">
              <img
                width="500"
                height="300"
                src="/images/refactoring/content/smells/shotgun-surgery-01e5e8.png?id=9cc1117a6d787364788e152a3adb6a53"
                //     srcset="
                //   /images/refactoring/content/smells/shotgun-surgery-01-2x.png?id=01431b43fcaee83fade53530a3dd91ab 2x
                // "
              />
            </figure>
            <h3>Nguyên nhân của vấn đề</h3>
            <p>
              Một trách nhiệm duy nhất đã được phân chia giữa một số lượng lớn
              các lớp. Điều này có thể xảy ra sau khi áp dụng quá mức{" "}
              <a href="/refactoring/smells/change-preventers/divergent-change">
                Thay Đổi Phân Kỳ
              </a>
              .
            </p>
            <figure class="image">
              <img
                width="500"
                height="300"
                src="/images/refactoring/content/smells/shotgun-surgery-02b284.png?id=48f8a4a0f17d112e02ae73bacaed43fa"
                //     srcset="
                //   /images/refactoring/content/smells/shotgun-surgery-02-2x.png?id=a35426ca3f6e64857e66b2fdeb395870 2x
                // "
                loading="lazy"
              />
            </figure>
            <h3>Cách xử lý</h3>
            <ul>
              <li>
                <p>
                  Sử dụng{" "}
                  <a href="/refactorings/moving-features-between-objects/move-method">
                    Di Chuyển Phương Thức
                  </a>{" "}
                  và{" "}
                  <a href="/refactorings/moving-features-between-objects/move-field">
                    Di Chuyển Trường
                  </a>{" "}
                  để di chuyển các hành vi của lớp hiện có vào một lớp duy nhất.
                  Nếu không có lớp nào phù hợp cho việc này, hãy tạo một lớp
                  mới.
                </p>
              </li>
              <li>
                <p>
                  Nếu việc di chuyển mã vào cùng một lớp khiến các lớp ban đầu
                  gần như trống rỗng, hãy cố gắng loại bỏ những lớp dư thừa này
                  bằng cách{" "}
                  <a href="/refactorings/moving-features-between-objects/inline-class">
                    Sát Nhập Lớp
                  </a>
                  .
                </p>
              </li>
            </ul>
            <figure class="image">
              <img
                width="500"
                height="300"
                src="/images/refactoring/content/smells/shotgun-surgery-030760.png?id=cf013f14eb5cde98bd48595a1c9836a9"
                //     srcset="
                //   /images/refactoring/content/smells/shotgun-surgery-03-2x.png?id=259b00413f0f8be143ead703c74b7e38 2x
                // "
                loading="lazy"
              />
            </figure>
            <h3>Lợi ích</h3>
            <ul>
              <li>
                <p>Tổ chức mã nguồn tốt hơn.</p>
              </li>
              <li>
                <p>Giảm sự trùng lặp mã nguồn.</p>
              </li>
              <li>
                <p>Dễ dàng bảo trì hơn.</p>
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
                href="/refactoring/smells/change-preventers/parallel-inheritance-hierarchies"
                class="btn btn-primary"
              >
                Hệ Thống Kế Thừa Song Song&nbsp;
                <span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/smells/change-preventers/divergent-change"
                class="btn btn-default"
              >
                <span class="fa fa-arrow-left"></span>&nbsp;Thay Đổi Phân Kỳ
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

export default ContentShotgunSurgery;
