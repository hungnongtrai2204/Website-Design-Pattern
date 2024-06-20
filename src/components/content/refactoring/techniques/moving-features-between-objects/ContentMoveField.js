const ContentMoveField = () => {
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
                <i class="fa fa-home" aria-hidden="true"></i>
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
              <a
                class="type"
                href="/refactoring/techniques/moving-features-between-objects"
              >
                Di Chuyển Chức Năng Giữa Các Đối Tượng
              </a>
            </div>
            <h1 class="title">Di Chuyển Trường</h1>

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
                  Một trường (field) được sử dụng nhiều hơn trong một lớp khác
                  so với lớp của nó.
                </p>
              </div>
              <div class="after">
                <h3>Giải Pháp</h3>
                <p>
                  Tạo một trường trong lớp mới và chuyển hướng tất cả người dùng
                  của trường cũ sang trường mới.
                </p>
              </div>
            </div>

            <div class="examples">
              <div class="before-after before-after-container">
                <div class="before">
                  <div class="ba">Before</div>
                  <div class="ba-container">
                    <img
                      src="/images/refactoring/diagrams/Move%20Field%20-%20Before2fe2.png?id=b58c81b01a0c4ef8659f92cc64fa51a8"
                      alt="Move Field - Before"
                      width="134"
                    />
                  </div>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <div class="ba-container">
                    <img
                      src="/images/refactoring/diagrams/Move%20Field%20-%20After4c93.png?id=d7c21af94ec9df17575373bae745e96e"
                      alt="Move Field - After"
                      width="134"
                    />
                  </div>
                </div>
              </div>
            </div>

            <h3>Lý Do Tái Cấu Trúc</h3>
            <p>
              Thường thì các trường được di chuyển như một phần của kỹ thuật{" "}
              <a href="/refactoring/techniques/moving-features-between-objects/extract-class">
                Trích Xuất Lớp
              </a>
              . Quyết định để lại trường ở lớp nào có thể khó khăn. Đây là quy
              tắc ngón tay cái của chúng tôi:{" "}
              <strong>
                đặt một trường ở cùng chỗ với các phương thức sử dụng nó
              </strong>{" "}
              (hoặc nơi có nhiều phương thức sử dụng nó nhất).
            </p>
            <p>
              Quy tắc này sẽ giúp trong các trường hợp khác khi một trường đơn
              giản nằm ở vị trí sai.
            </p>
            <h3>Cách Tái Cấu Trúc</h3>
            <ol>
              <li>
                <p>
                  Nếu trường là công khai (public), việc tái cấu trúc sẽ dễ dàng
                  hơn nếu bạn làm cho trường đó trở thành riêng tư (private) và
                  cung cấp các phương thức truy cập công khai (để làm điều này,
                  bạn có thể sử dụng kỹ thuật{" "}
                  <a href="/refactoring/techniques/organizing-data/encapsulate-field">
                    Đóng Gói Trường
                  </a>
                  ).
                </p>
              </li>
              <li>
                <p>
                  Tạo trường tương tự với các phương thức truy cập trong lớp
                  nhận.
                </p>
              </li>
              <li>
                <p>
                  Quyết định cách bạn sẽ tham chiếu đến lớp nhận. Bạn có thể đã
                  có một trường hoặc phương thức trả về đối tượng phù hợp; nếu
                  không, bạn sẽ cần viết một phương thức mới hoặc trường để lưu
                  trữ đối tượng của lớp nhận.
                </p>
              </li>
              <li>
                <p>
                  Thay thế tất cả các tham chiếu đến trường cũ bằng các lệnh gọi
                  phương thức tương ứng trong lớp nhận. Nếu trường không phải là
                  riêng tư, hãy xử lý điều này trong lớp cha và các lớp con.
                </p>
              </li>
              <li>
                <p>Xóa trường trong lớp gốc.</p>
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
              <div class="col-xs-12 col-sm-6 col-lg-4">
                <h3>Các Tái Cấu Trúc Tương Tự</h3>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/techniques/moving-features-between-objects/move-method">
                      Di Chuyển Phương Thức
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-lg-4">
                <h3>Giúp Tái Cấu Trúc Khác</h3>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/techniques/moving-features-between-objects/extract-class">
                      Trích Xuất Lớp
                    </a>
                  </div>
                </div>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/techniques/moving-features-between-objects/inline-class">
                      Lồng Lớp
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-lg-4">
                <h3>Loại Bỏ Mùi Code</h3>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/smells/change-preventers/shotgun-surgery">
                      Phẫu Thuật Bắn Súng
                    </a>
                  </div>
                </div>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/smells/change-preventers/parallel-inheritance-hierarchies">
                      Hệ Thống Kế Thừa Song Song
                    </a>
                  </div>
                </div>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/smells/couplers/inappropriate-intimacy">
                      Thân Mật Không Phù Hợp
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
                href="/refactoring/techniques/moving-features-between-objects/extract-class"
                class="btn btn-primary"
              >
                Trích Xuất Lớp&nbsp;<span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/techniques/moving-features-between-objects/move-method"
                class="btn btn-default"
              >
                <span class="fa fa-arrow-left"></span>&nbsp;Di Chuyển Phương
                Thức
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

export default ContentMoveField;
