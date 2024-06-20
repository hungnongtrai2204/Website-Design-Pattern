const ContentInlineClass = () => {
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
            <h1 class="title">Lồng Lớp</h1>

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
                  Một lớp gần như không làm gì và không chịu trách nhiệm cho bất
                  kỳ điều gì, và không có kế hoạch nào để thêm trách nhiệm mới
                  cho nó.
                </p>
              </div>
              <div class="after">
                <h3>Giải Pháp</h3>
                <p>
                  Di chuyển tất cả các chức năng từ lớp đó sang một lớp khác.
                </p>
              </div>
            </div>

            <div class="examples">
              <div class="before-after before-after-container">
                <div class="before">
                  <div class="ba">Before</div>
                  <div class="ba-container">
                    <img
                      src="/images/refactoring/diagrams/Inline%20Class%20-%20Beforebf8b.png?id=717d80baaa902d09acbaa55fd0539638"
                      alt="Inline Class - Before"
                      width="509"
                    />
                  </div>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <div class="ba-container">
                    <img
                      src="/images/refactoring/diagrams/Inline%20Class%20-%20After5bcb.png?id=7cb7db0fe2ab0d17f067d411f9e98f15"
                      alt="Inline Class - After"
                      width="209"
                    />
                  </div>
                </div>
              </div>
            </div>

            <h3>Lý Do Tái Cấu Trúc</h3>
            <ul>
              <li>
                Thường thì kỹ thuật này cần thiết sau khi các chức năng của một
                lớp được “chuyển giao” sang các lớp khác, để lại lớp đó với rất
                ít nhiệm vụ.
              </li>
            </ul>
            <h3>Lợi Ích</h3>
            <ul>
              <li>
                Loại bỏ các lớp không cần thiết sẽ giải phóng bộ nhớ hoạt động
                trên máy tính—và giảm bớt khối lượng công việc trong đầu bạn.
              </li>
            </ul>
            <h3>Cách Tái Cấu Trúc</h3>
            <ol>
              <li>
                <p>
                  Trong lớp nhận, tạo các trường và phương thức công khai có
                  trong lớp cho. Các phương thức nên tham chiếu đến các phương
                  thức tương đương của lớp cho.
                </p>
              </li>
              <li>
                <p>
                  Thay thế tất cả các tham chiếu đến lớp cho bằng các tham chiếu
                  đến các trường và phương thức của lớp nhận.
                </p>
              </li>
              <li>
                <p>
                  Kiểm tra chương trình và đảm bảo rằng không có lỗi nào được
                  thêm vào. Nếu các bài kiểm tra cho thấy mọi thứ đang hoạt động
                  tốt, bắt đầu sử dụng{" "}
                  <a href="/refactoring/techniques/moving-features-between-objects/move-method">
                    Di Chuyển Phương Thức
                  </a>{" "}
                  và{" "}
                  <a href="/refactoring/techniques/moving-features-between-objects/move-field">
                    Di Chuyển Trường
                  </a>{" "}
                  để hoàn toàn chuyển tất cả chức năng sang lớp nhận từ lớp ban
                  đầu. Tiếp tục làm như vậy cho đến khi lớp ban đầu hoàn toàn
                  trống rỗng.
                </p>
              </li>
              <li>
                <p>Xóa lớp ban đầu.</p>
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
              <div class="col-xs-12 col-sm-6 col-lg-6">
                <h3>Phản Tái Cấu Trúc</h3>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/techniques/moving-features-between-objects/extract-class">
                      Trích Xuất Lớp
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-lg-6">
                <h3>Loại Bỏ Mùi Code</h3>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/smells/change-preventers/shotgun-surgery">
                      Phẫu Thuật Đa Tầng
                    </a>
                  </div>
                </div>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/smells/dispensables/lazy-class">
                      Lớp Lười Biếng
                    </a>
                  </div>
                </div>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/smells/dispensables/speculative-generality">
                      Tổng Quát Hóa Dự Phòng
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
                href="/refactoring/techniques/moving-features-between-objects/hide-delegate"
                class="btn btn-primary"
              >
                Ẩn Đại Diện&nbsp;<span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/techniques/moving-features-between-objects/extract-class"
                class="btn btn-default"
              >
                <span class="fa fa-arrow-left"></span>&nbsp;Trích Xuất Lớp
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

export default ContentInlineClass;
