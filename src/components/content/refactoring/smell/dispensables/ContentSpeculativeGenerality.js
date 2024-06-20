const ContentSpeculativeGenerality = () => {
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
            <h1 class="title">Tổng Quát Hóa Đầu Cơ</h1>

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
              <span style="display: inline-block">Speculative Generality</span>
            </div> */}

            <h3>Dấu hiệu và Triệu chứng</h3>
            <p>
              Có một lớp, phương thức, trường hoặc tham số không được sử dụng.
            </p>
            <figure class="image">
              <img
                width="500"
                height="300"
                src="/images/refactoring/content/smells/speculative-generality-01d899.png?id=c804fce5c6c5c34b4d9389fcb2aa60aa"
                //     srcset="
                //   /images/refactoring/content/smells/speculative-generality-01-2x.png?id=7875dde405dfa433685fa9040da39b5e 2x
                // "
              />
            </figure>
            <h3>Nguyên nhân của Vấn đề</h3>
            <p>
              Đôi khi mã nguồn được tạo ra "phòng trường hợp" để hỗ trợ các tính
              năng dự kiến trong tương lai mà không bao giờ được triển khai. Kết
              quả là mã trở nên khó hiểu và khó hỗ trợ.
            </p>
            <h3>Xử Lý</h3>
            <ul>
              <li>
                <p>
                  Để loại bỏ các lớp trừu tượng không sử dụng, hãy thử{" "}
                  <a href="/refactoring/techniques/dealing-with-generalization/collapse-hierarchy">
                    Thu Gọn Hệ Thống Phân Cấp
                  </a>
                  .
                </p>
              </li>
              <li>
                <p>
                  Việc ủy nhiệm chức năng không cần thiết cho lớp khác có thể
                  được loại bỏ bằng cách sử dụng{" "}
                  <a href="/refactoring/techniques/moving-features-between-objects/inline-class">
                    Gộp Lớp
                  </a>
                  .
                </p>
              </li>
              <li>
                <p>
                  Các phương thức không sử dụng? Sử dụng{" "}
                  <a href="/refactoring/techniques/composing-methods/inline-method">
                    Gộp Phương Thức
                  </a>{" "}
                  để loại bỏ chúng.
                </p>
              </li>
              <li>
                <p>
                  Các phương thức có tham số không sử dụng nên được xem xét bằng
                  cách sử dụng{" "}
                  <a href="/refactoring/techniques/simplifying-method-calls/remove-parameter">
                    Loại Bỏ Tham Số
                  </a>
                  .
                </p>
              </li>
              <li>
                <p>Các trường không sử dụng có thể được xóa đơn giản.</p>
              </li>
            </ul>
            <figure class="image">
              <img
                width="500"
                height="300"
                src="/images/refactoring/content/smells/speculative-generality-02bab3.png?id=e9d0e8a6170b6d0d0be9cca44175fe44"
                //     srcset="
                //   /images/refactoring/content/smells/speculative-generality-02-2x.png?id=017235ad164cb220c99f21f201872d29 2x
                // "
                loading="lazy"
              />
            </figure>
            <h3>Hiệu quả:</h3>
            <ul>
              <li>
                <p>Mã nguồn gọn gàng hơn.</p>
              </li>
              <li>
                <p>Hỗ trợ dễ dàng hơn.</p>
              </li>
            </ul>
            <h3>Khi nào nên bỏ qua</h3>
            <ul>
              <li>
                <p>
                  Nếu bạn đang làm việc trên một framework, việc tạo ra chức
                  năng không được sử dụng trong chính framework đó là hoàn toàn
                  hợp lý, miễn là chức năng đó cần thiết cho người dùng của
                  framework.
                </p>
              </li>
              <li>
                <p>
                  Trước khi xóa các phần tử, hãy đảm bảo rằng chúng không được
                  sử dụng trong các kiểm thử đơn vị. Điều này xảy ra nếu các
                  kiểm thử cần một cách để lấy thông tin nội bộ nhất định từ một
                  lớp hoặc thực hiện các hành động đặc biệt liên quan đến kiểm
                  thử.
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
                href="/refactoring/smells/couplers"
                class="btn btn-primary"
              >
                Các Yếu Tố Liên Kết Quá Mức&nbsp;
                <span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/smells/dispensables/dead-code"
                class="btn btn-default"
              >
                <span class="fa fa-arrow-left"></span>&nbsp;Mã Chết
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

export default ContentSpeculativeGenerality;
