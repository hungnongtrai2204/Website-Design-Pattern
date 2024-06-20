const ContentMiddleMan = () => {
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
            <h1 class="title">Người Trung Gian</h1>

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
          <span style="display: inline-block">Middle Man</span>
        </div> */}

            <h3>Dấu hiệu và Triệu chứng</h3>
            <p>
              Nếu một lớp chỉ thực hiện một hành động duy nhất, ủy quyền công
              việc cho một lớp khác, tại sao nó lại tồn tại?
            </p>
            <figure class="image">
              <img
                width="500"
                height="300"
                src="/images/refactoring/content/smells/middle-man-01d4ce.png?id=14c65845c4e0cf03e7e9e48108090c98"
                //     srcset="
                //   /images/refactoring/content/smells/middle-man-01-2x.png?id=a1a99f8b475b719d9f894aa613515761 2x
                // "
              />
            </figure>
            <h3>Nguyên Nhân Vấn Đề</h3>
            <p>
              Mùi này có thể là kết quả của việc loại bỏ quá mức{" "}
              <a href="/refactoring/smells/couplers/message-chains">
                Chuỗi Thông Điệp
              </a>
              .
            </p>
            <p>
              Trong các trường hợp khác, nó có thể là kết quả của việc chức năng
              hữu ích của một lớp dần dần được chuyển sang các lớp khác. Lớp này
              trở thành một vỏ rỗng không làm gì ngoài việc ủy nhiệm.
            </p>
            <h3>Xử Lý</h3>
            <ul>
              <li>
                Nếu hầu hết các phương thức của một lớp ủy nhiệm công việc cho
                lớp khác, hãy sử dụng{" "}
                <a href="/refactoring/techniques/moving-features-between-objects/remove-middle-man">
                  Loại Bỏ Người Trung Gian
                </a>
                .
              </li>
            </ul>
            <h3>Lợi ích</h3>
            <ul>
              <li>Mã trở nên gọn gàng hơn.</li>
            </ul>
            <figure class="image">
              <img
                width="500"
                height="300"
                src="/images/refactoring/content/smells/middle-man-02455a.png?id=f507c0fd9a7bde8df8c22b9027d0a404"
                //     srcset="
                //   /images/refactoring/content/smells/middle-man-02-2x.png?id=41869f090e8263d46e708778fe64059c 2x
                // "
                loading="lazy"
              />
            </figure>
            <h3>Khi Nào Nên Bỏ Qua</h3>
            <p>
              Không xóa người trung gian nếu chúng được tạo ra vì một lý do cụ
              thể:
            </p>
            <ul>
              <li>
                <p>
                  Một người trung gian có thể được thêm vào để tránh sự phụ
                  thuộc giữa các lớp.
                </p>
              </li>
              <li>
                <p>
                  Một số design pattern tạo ra người trung gian có chủ đích
                  (chẳng hạn như <a href="/design-patterns/proxy">Proxy</a> hoặc{" "}
                  <a href="/design-patterns/decorator">Decorator</a>).
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
                href="/refactoring/smells/other"
                class="btn btn-primary"
              >
                Các Mùi Mã Khác&nbsp;
                <span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/smells/couplers/message-chains"
                class="btn btn-default"
              >
                <span class="fa fa-arrow-left"></span>&nbsp;Chuỗi Thông Điệp
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

export default ContentMiddleMan;
