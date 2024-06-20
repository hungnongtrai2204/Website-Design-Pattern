const ContentFeatureEnvy = () => {
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
            <h1 class="title">Thèm Khát Tính Năng</h1>

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
          <span style="display: inline-block">Feature Envy</span>
        </div> */}

            <h3>Dấu hiệu và Triệu chứng</h3>
            <p>
              Một phương thức truy cập dữ liệu của đối tượng khác nhiều hơn dữ
              liệu của chính nó.
            </p>
            <figure class="image">
              <img
                width="500"
                height="300"
                src="/images/refactoring/content/smells/feature-envy-010982.png?id=f520a24562e3f4b7848eca94792c329f"
                srcset="
              /images/refactoring/content/smells/feature-envy-01-2x.png?id=4329322703e5af5b3ef7faefd17c4750 2x
            "
              />
            </figure>
            <h3>Nguyên nhân của Vấn đề</h3>
            <p>
              Mùi này có thể xuất hiện sau khi các trường được chuyển sang một
              lớp dữ liệu. Nếu vậy, bạn có thể muốn chuyển các hoạt động trên dữ
              liệu sang lớp này.
            </p>
            <h3>Xử Lý</h3>
            <p>
              Theo nguyên tắc cơ bản, nếu các yếu tố thay đổi cùng một lúc, bạn
              nên giữ chúng ở cùng một chỗ. Thông thường, dữ liệu và các chức
              năng sử dụng dữ liệu này sẽ được thay đổi cùng nhau (mặc dù có thể
              có ngoại lệ).
            </p>
            <ul>
              <li>
                <p>
                  Nếu một phương thức rõ ràng cần được chuyển đến nơi khác, hãy
                  sử dụng{" "}
                  <a href="/refactoring/techniques/moving-features-between-objects/move-method">
                    Di Chuyển Phương Thức
                  </a>
                  .
                </p>
              </li>
              <li>
                <p>
                  Nếu chỉ một phần của phương thức truy cập dữ liệu của một đối
                  tượng khác, hãy sử dụng{" "}
                  <a href="/refactoring/techniques/composing-methods/extract-method">
                    Trích Xuất Phương Thức
                  </a>{" "}
                  để chuyển phần liên quan.
                </p>
              </li>
              <li>
                <p>
                  Nếu một phương thức sử dụng các chức năng từ nhiều lớp khác,
                  trước tiên hãy xác định lớp nào chứa phần lớn dữ liệu được sử
                  dụng. Sau đó đặt phương thức trong lớp này cùng với các dữ
                  liệu khác. Ngoài ra, bạn có thể sử dụng{" "}
                  <a href="/refactoring/techniques/composing-methods/extract-method">
                    Trích Xuất Phương Thức
                  </a>{" "}
                  để tách phương thức thành nhiều phần có thể được đặt ở các vị
                  trí khác nhau trong các lớp khác nhau.
                </p>
              </li>
            </ul>
            <figure class="image">
              <img
                width="500"
                height="300"
                src="/images/refactoring/content/smells/feature-envy-025fc9.png?id=a90a3545498c7c22e605ceeb1f23d005"
                //     srcset="
                //   /images/refactoring/content/smells/feature-envy-02-2x.png?id=641faecaeb0d422232c0bcc6346352c5 2x
                // "
                loading="lazy"
              />
            </figure>
            <h3>Lợi Ích</h3>
            <ul>
              <li>
                <p>
                  Ít mã nguồn trùng lặp hơn (nếu mã xử lý dữ liệu được đặt ở một
                  nơi trung tâm).
                </p>
              </li>
              <li>
                <p>
                  Tổ chức mã tốt hơn (các phương thức xử lý dữ liệu nằm cạnh dữ
                  liệu thực tế).
                </p>
              </li>
            </ul>
            <figure class="image">
              <img
                width="500"
                height="300"
                src="/images/refactoring/content/smells/feature-envy-03a90e.png?id=ea63eeab9eda1910348d0930c8592780"
                //     srcset="
                //   /images/refactoring/content/smells/feature-envy-03-2x.png?id=d8d24af45285db63e68560788e6240bc 2x
                // "
                loading="lazy"
              />
            </figure>
            <h3>Khi nào nên bỏ qua</h3>
            <ul>
              <li>
                Đôi khi hành vi được tách biệt có chủ đích khỏi lớp giữ dữ liệu.
                Lợi ích thông thường của việc này là khả năng thay đổi hành vi
                một cách động (xem các mẫu thiết kế{" "}
                <a href="/design-patterns/strategy">Strategy</a>,{" "}
                <a href="/design-patterns/visitor">Visitor</a> và các mẫu khác).
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
                href="/refactoring/smells/couplers/inappropriate-intimacy"
                class="btn btn-primary"
              >
                Thân Mật Không Thích Hợp&nbsp;
                <span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/smells/couplers"
                class="btn btn-default"
              >
                <span class="fa fa-arrow-left"></span>&nbsp;Các Yếu Tố Liên Kết
                Quá Mức
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

export default ContentFeatureEnvy;
