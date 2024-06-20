const ContentRemoveMiddleMan = () => {
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
            <h1 class="title">Loại Bỏ Người Trung Gian</h1>

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
                  Một lớp có quá nhiều phương thức chỉ đơn giản là ủy quyền cho
                  các đối tượng khác.
                </p>
              </div>
              <div class="after">
                <h3>Giải Pháp</h3>
                <p>
                  Xóa những phương thức này và buộc khách hàng gọi trực tiếp các
                  phương thức cuối cùng.
                </p>
              </div>
            </div>

            <div class="examples">
              <div class="before-after before-after-container">
                <div class="before">
                  <div class="ba">Before</div>
                  <div class="ba-container">
                    <img
                      src="/images/refactoring/diagrams/Remove%20Middle%20Man%20-%20Before921c.png?id=f51110f3e0d4423b3f9088e92fc3dce4"
                      alt="Remove Middle Man - Before"
                      width="153"
                    />
                  </div>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <div class="ba-container">
                    <img
                      src="/images/refactoring/diagrams/Remove%20Middle%20Man%20-%20After0412.png?id=f7de1016e76545f7c51af09463ce5f4c"
                      alt="Remove Middle Man - After"
                      width="415"
                    />
                  </div>
                </div>
              </div>
            </div>

            <h3>Lý Do Tái Cấu Trúc</h3>
            <p>
              Để mô tả kỹ thuật này, chúng ta sẽ sử dụng các thuật ngữ từ kỹ
              thuật{" "}
              <a href="/refactoring/techniques/moving-features-between-objects/hide-delegate">
                Ẩn Đại Diện
              </a>
              , đó là:
            </p>
            <ul>
              <li>
                <p>
                  <em>Server</em> là đối tượng mà khách hàng có quyền truy cập
                  trực tiếp.
                </p>
              </li>
              <li>
                <p>
                  <em>Delegate</em> là đối tượng cuối cùng chứa chức năng mà
                  khách hàng cần.
                </p>
              </li>
            </ul>
            <p>Có hai loại vấn đề:</p>
            <ol>
              <li>
                <p>
                  <em>Lớp server</em> không làm gì cả và chỉ đơn giản tạo ra sự
                  phức tạp không cần thiết. Trong trường hợp này, hãy cân nhắc
                  xem lớp này có cần thiết không.
                </p>
              </li>
              <li>
                <p>
                  Mỗi khi một tính năng mới được thêm vào <em>delegate</em>, bạn
                  cần tạo một phương thức ủy quyền cho nó trong{" "}
                  <em>lớp server</em>. Nếu có nhiều thay đổi, điều này sẽ khá
                  mệt mỏi.
                </p>
              </li>
            </ol>
            <h3>Cách Tái Cấu Trúc</h3>
            <ol>
              <li>
                <p>
                  Tạo một phương thức getter để truy cập đối tượng{" "}
                  <em>delegate</em> từ đối tượng <em>server</em>.
                </p>
              </li>
              <li>
                <p>
                  Thay thế các lời gọi đến các phương thức ủy quyền trong{" "}
                  <em>lớp server</em> bằng các lời gọi trực tiếp đến các phương
                  thức trong <em>lớp delegate</em>.
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
              <div class="col-xs-12 col-sm-6 col-lg-6">
                <h3>Phản Tái Cấu Trúc</h3>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/techniques/moving-features-between-objects/hide-delegate">
                      Ẩn Đại Diện
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-lg-6">
                <h3>Loại Bỏ Mùi Code</h3>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/smells/couplers/middle-man">
                      Người Trung Gian
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
                href="/refactoring/techniques/moving-features-between-objects/introduce-foreign-method"
                class="btn btn-primary"
              >
                Giới Thiệu Phương Thức Ngoại Lai&nbsp;
                <span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/techniques/moving-features-between-objects/hide-delegate"
                class="btn btn-default"
              >
                <span class="fa fa-arrow-left"></span>&nbsp;Ẩn Đại Diện
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

export default ContentRemoveMiddleMan;
