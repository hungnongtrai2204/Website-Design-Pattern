const ContentMoveMethod = () => {
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
            <h1 class="title">Di Chuyển Phương Thức</h1>

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
                  Một phương thức được sử dụng nhiều hơn trong một lớp khác so
                  với lớp của nó.
                </p>
              </div>
              <div class="after">
                <h3>Giải Pháp</h3>
                <p>
                  Tạo một phương thức mới trong lớp sử dụng phương thức nhiều
                  nhất, sau đó di chuyển mã từ phương thức cũ sang đó. Biến mã
                  của phương thức gốc thành một tham chiếu đến phương thức mới
                  trong lớp khác hoặc xóa hoàn toàn phương thức đó.
                </p>
              </div>
            </div>

            <div class="examples">
              <div class="before-after before-after-container">
                <div class="before">
                  <div class="ba">Before</div>
                  <div class="ba-container">
                    <img
                      src="/images/refactoring/diagrams/Move%20Method%20-%20Before2a62.png?id=4abd2ccfc636cdcffe30f5593868bbfa"
                      alt="Move Method - Before"
                      width="134"
                    />
                  </div>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <div class="ba-container">
                    <img
                      src="/images/refactoring/diagrams/Move%20Method%20-%20Afterfe74.png?id=df9892b4d0a367b12881e93e7d0ea0c0"
                      alt="Move Method - After"
                      width="134"
                    />
                  </div>
                </div>
              </div>
            </div>

            <h3>Lý Do Tái Cấu Trúc</h3>
            <ol>
              <li>
                <p>
                  Bạn muốn di chuyển một phương thức đến lớp chứa hầu hết dữ
                  liệu được sử dụng bởi phương thức đó. Điều này làm cho{" "}
                  <strong>các lớp trở nên nhất quán hơn về mặt nội bộ</strong>.
                </p>
              </li>
              <li>
                <p>
                  Bạn muốn di chuyển một phương thức để giảm hoặc loại bỏ sự phụ
                  thuộc của lớp gọi phương thức vào lớp chứa phương thức đó.
                  Điều này có thể hữu ích nếu lớp gọi đã phụ thuộc vào lớp mà
                  bạn đang dự định di chuyển phương thức đến. Điều này{" "}
                  <strong>giảm sự phụ thuộc giữa các lớp</strong>.
                </p>
              </li>
            </ol>
            <h3>Cách Tái Cấu Trúc</h3>
            <ol>
              <li>
                <p>
                  Xác minh tất cả các tính năng được phương thức cũ sử dụng
                  trong lớp của nó. Có thể là một ý kiến hay nếu di chuyển chúng
                  cùng với phương thức. Theo quy tắc, nếu một tính năng chỉ được
                  sử dụng bởi phương thức đang xem xét, bạn nên di chuyển tính
                  năng đó cùng với phương thức. Nếu tính năng được sử dụng bởi
                  các phương thức khác, bạn nên di chuyển các phương thức này
                  cùng với tính năng. Đôi khi, di chuyển một số lượng lớn các
                  phương thức dễ dàng hơn so với thiết lập mối quan hệ giữa
                  chúng trong các lớp khác nhau.
                </p>
                <p>
                  Đảm bảo rằng phương thức không được khai báo trong các siêu
                  lớp và lớp con. Nếu đây là trường hợp, bạn sẽ phải từ bỏ việc
                  di chuyển hoặc thực hiện một loại đa hình trong lớp nhận để
                  đảm bảo chức năng thay đổi của một phương thức chia nhỏ giữa
                  các lớp cho.
                </p>
              </li>
              <li>
                <p>
                  Khai báo phương thức mới trong lớp nhận. Bạn có thể muốn đặt
                  tên mới cho phương thức sao cho phù hợp hơn với lớp mới.
                </p>
              </li>
              <li>
                <p>
                  Quyết định cách bạn sẽ tham chiếu đến lớp nhận. Bạn có thể đã
                  có một trường hoặc phương thức trả về một đối tượng phù hợp,
                  nhưng nếu không, bạn sẽ cần viết một phương thức mới hoặc
                  trường để lưu trữ đối tượng của lớp nhận.
                </p>
                <p>
                  Bây giờ bạn có một cách để tham chiếu đến đối tượng nhận và
                  một phương thức mới trong lớp của nó. Với tất cả những điều
                  này, bạn có thể biến phương thức cũ thành một tham chiếu đến
                  phương thức mới.
                </p>
              </li>
              <li>
                <p>
                  Hãy nhìn xem: bạn có thể xóa phương thức cũ hoàn toàn không?
                  Nếu có, hãy đặt một tham chiếu đến phương thức mới trong tất
                  cả các nơi sử dụng phương thức cũ.
                </p>
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
                    <a href="/refactoring/techniques/composing-methods/extract-method">
                      Trích Xuất Phương Thức
                    </a>
                  </div>
                </div>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/techniques/moving-features-between-objects/move-field">
                      Di Chuyển Trường
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
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/techniques/simplifying-method-calls/introduce-parameter-object">
                      Giới Thiệu Đối Tượng Tham Số
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
                    <a href="/refactoring/smells/couplers/feature-envy">
                      Thèm Khát Chức Năng
                    </a>
                  </div>
                </div>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/smells/oo-abusers/switch-statements">
                      Câu Lệnh Switch
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
                    <a href="/refactoring/smells/couplers/message-chains">
                      Chuỗi Tin Nhắn
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
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/smells/dispensables/data-class">
                      Lớp Dữ Liệu
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
                href="/refactoring/techniques/moving-features-between-objects/move-field"
                class="btn btn-primary"
              >
                Di Chuyển Trường&nbsp;<span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/techniques/moving-features-between-objects"
                class="btn btn-default"
              >
                <span class="fa fa-arrow-left"></span>&nbsp;Di Chuyển Chức Năng
                Giữa Các Đối Tượng
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

export default ContentMoveMethod;
