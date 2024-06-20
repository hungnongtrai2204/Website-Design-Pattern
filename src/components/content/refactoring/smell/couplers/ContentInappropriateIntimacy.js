const ContentInappropriateIntimacy = () => {
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
              <a class="type" href="/refactoring/smells/couplers">
                Các Yếu Tố Liên Kết Quá Mức
              </a>
            </div>
            <h1 class="title">Thân Mật Không Thích Hợp</h1>

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
            >Inappropriate Intimacy</span
          >
        </div> */}

            <h3>Dấu hiệu và Triệu chứng</h3>
            <p>
              Một lớp sử dụng các trường và phương thức nội bộ của một lớp khác.
            </p>
            <figure class="image">
              <img
                width="500"
                height="300"
                src="/images/refactoring/content/smells/inappropriate-intimacy-017f9d.png?id=31bf185f4ff946f13e28d27d377a4b6c"
                //     srcset="
                //   /images/refactoring/content/smells/inappropriate-intimacy-01-2x.png?id=1857242bb9cf7b2ca50327897d256711 2x
                // "
              />
            </figure>
            <h3>Nguyên nhân của Vấn đề</h3>
            <p>
              Hãy chú ý đến các lớp thường xuyên tương tác với nhau. Các lớp tốt
              nên biết càng ít về nhau càng tốt. Các lớp như vậy sẽ dễ bảo trì
              và tái sử dụng hơn.
            </p>
            <h3>Xử Lý</h3>
            <ul>
              <li>
                <p>
                  Giải pháp đơn giản nhất là sử dụng{" "}
                  <a href="/refactoring/techniques/moving-features-between-objects/move-method">
                    Di Chuyển Phương Thức
                  </a>{" "}
                  và{" "}
                  <a href="/refactoring/techniques/moving-features-between-objects/move-field">
                    Di Chuyển Trường
                  </a>{" "}
                  để chuyển các phần của một lớp sang lớp mà các phần đó được sử
                  dụng. Tuy nhiên, điều này chỉ hoạt động nếu lớp ban đầu thực
                  sự không cần các phần này.
                </p>
                <figure class="image">
                  <img
                    width="500"
                    height="300"
                    src="/images/refactoring/content/smells/inappropriate-intimacy-024036.png?id=3f23c8df6eb8cf91b46e39fa912ff85c"
                    //     srcset="
                    //   /images/refactoring/content/smells/inappropriate-intimacy-02-2x.png?id=f3ac66384b14f074ed36b6d9c3720b20 2x
                    // "
                    loading="lazy"
                  />
                </figure>
              </li>
              <li>
                <p>
                  Một giải pháp khác là sử dụng{" "}
                  <a href="/refactoring/techniques/moving-features-between-objects/extract-class">
                    Trích Xuất Lớp
                  </a>{" "}
                  và{" "}
                  <a href="/refactoring/techniques/moving-features-between-objects/hide-delegate">
                    Ẩn Ủy Nhiệm
                  </a>{" "}
                  trên lớp để làm cho các mối quan hệ mã nguồn trở nên “chính
                  thức”.
                </p>
              </li>
              <li>
                <p>
                  Nếu các lớp phụ thuộc lẫn nhau, bạn nên sử dụng{" "}
                  <a href="/refactoring/techniques/organizing-data/change-bidirectional-association-to-unidirectional">
                    Thay Đổi Mối Quan Hệ Hai Chiều Thành Một Chiều
                  </a>
                  .
                </p>
              </li>
              <li>
                <p>
                  Nếu sự "thân mật" này giữa một lớp con và lớp cha, hãy cân
                  nhắc sử dụng{" "}
                  <a href="/refactoring/techniques/dealing-with-generalization/replace-delegation-with-inheritance">
                    Thay Thế Ủy Nhiệm Bằng Kế Thừa
                  </a>
                  .
                </p>
              </li>
            </ul>
            <figure class="image">
              <img
                width="500"
                height="300"
                src="/images/refactoring/content/smells/inappropriate-intimacy-03b31e.png?id=de33e2285073feaabd1a81cffdcd386c"
                //     srcset="
                //   /images/refactoring/content/smells/inappropriate-intimacy-03-2x.png?id=51bfcec36fb123f146857099555dc478 2x
                // "
                loading="lazy"
              />
            </figure>
            <h3>Lợi Ích</h3>
            <ul>
              <li>
                <p>Cải thiện tổ chức mã nguồn.</p>
              </li>
              <li>
                <p>Đơn giản hóa việc hỗ trợ và tái sử dụng mã nguồn.</p>
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
                href="/refactoring/smells/couplers/message-chains"
                class="btn btn-primary"
              >
                Chuỗi Thông Điệp&nbsp;
                <span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/smells/couplers/feature-envy"
                class="btn btn-default"
              >
                <span class="fa fa-arrow-left"></span>&nbsp;Thèm Khát Tính Năng
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

export default ContentInappropriateIntimacy;
