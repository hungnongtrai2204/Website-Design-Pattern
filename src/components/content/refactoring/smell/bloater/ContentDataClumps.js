const ContentDataClumps = () => {
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
              <a class="type" href="/refactoring/smells/bloaters">
                Mã Phình To
              </a>
            </div>
            <h1 class="title">Cụm Dữ Liệu</h1>

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
              <span style={{ display: "inline-block" }}>Data Clumps</span>
            </div> */}

            <h3>Dấu hiệu và Triệu chứng</h3>
            <p>
              Đôi khi các phần khác nhau của mã nguồn chứa các nhóm biến giống
              hệt nhau (chẳng hạn như các tham số để kết nối với cơ sở dữ liệu).
              Những cụm này nên được chuyển thành các lớp riêng của chúng.
            </p>
            <figure class="image">
              <img
                width="500"
                height="300"
                src="/images/refactoring/content/smells/data-clumps-018c21.png?id=9d8a38ce942720cee728797eba695a2f"
                //     srcset="
                //   /images/refactoring/content/smells/data-clumps-01-2x.png?id=64c7f4113e3c06f10dbec825833fa190 2x
                // "
              />
            </figure>
            <h3>Nguyên nhân của vấn đề</h3>
            <p>
              Thường thì các nhóm dữ liệu này xuất hiện do cấu trúc chương trình
              kém hoặc do "lập trình sao chép dán".
            </p>
            <p>
              Nếu bạn muốn chắc chắn liệu một số dữ liệu có phải là một cụm dữ
              liệu hay không, hãy thử xóa một trong các giá trị dữ liệu và xem
              liệu các giá trị khác còn hợp lý hay không. Nếu không phải vậy, đó
              là dấu hiệu tốt cho thấy nhóm biến này nên được kết hợp thành một
              đối tượng.
            </p>
            <h3>Cách khắc phục</h3>
            <ul>
              <li>
                <p>
                  Nếu dữ liệu lặp lại bao gồm các trường của một lớp, hãy sử
                  dụng{" "}
                  <a href="/refactoring/techniques/moving-features-between-objects/extract-class">
                    Tách Lớp
                  </a>{" "}
                  để di chuyển các trường này vào lớp riêng của chúng.
                </p>
              </li>
              <li>
                <p>
                  Nếu các cụm dữ liệu giống nhau được truyền vào tham số của các
                  phương thức, hãy sử dụng{" "}
                  <a href="/refactoring/techniques/simplifying-method-calls/introduce-parameter-object">
                    Giới Thiệu Đối Tượng Tham Số
                  </a>{" "}
                  để tách chúng ra thành một lớp.
                </p>
              </li>
              <li>
                <p>
                  Nếu một số dữ liệu được truyền vào các phương thức khác, hãy
                  cân nhắc việc truyền toàn bộ đối tượng dữ liệu vào phương thức
                  thay vì chỉ truyền các trường riêng lẻ.{" "}
                  <a href="/refactoring/techniques/simplifying-method-calls/preserve-whole-object">
                    Bảo Tồn Toàn Bộ Đối Tượng
                  </a>{" "}
                  sẽ giúp thực hiện điều này.
                </p>
              </li>
              <li>
                <p>
                  Hãy xem xét mã nguồn được sử dụng bởi các trường này. Có thể
                  sẽ là một ý tưởng tốt để chuyển mã này vào một lớp dữ liệu.
                </p>
              </li>
            </ul>
            <figure class="image">
              <img
                width="500"
                height="300"
                src="/images/refactoring/content/smells/data-clumps-02ec1e.png?id=cfb0a8fa64a983473dd31527e28ae158"
                //     srcset="
                //   /images/refactoring/content/smells/data-clumps-02-2x.png?id=195f24da42dbd21508aa9ef46a57abba 2x
                // "
                loading="lazy"
              />
            </figure>
            <h3>Lợi Ích</h3>
            <ul>
              <li>
                <p>
                  Cải thiện sự hiểu biết và tổ chức mã nguồn. Các thao tác trên
                  dữ liệu cụ thể giờ đây được tập trung ở một chỗ, thay vì nằm
                  rải rác khắp mã nguồn.
                </p>
              </li>
              <li>
                <p>Giảm kích thước mã nguồn.</p>
              </li>
            </ul>
            <figure class="image">
              <img
                width="500"
                height="300"
                src="/images/refactoring/content/smells/data-clumps-038987.png?id=c170bbdea77b7d4a26947ef328b70adc"
                //     srcset="
                //   /images/refactoring/content/smells/data-clumps-03-2x.png?id=2b4a70e09a6236715a9bc4bd4663508b 2x
                // "
                loading="lazy"
              />
            </figure>
            <h3>Khi nào nên bỏ qua</h3>
            <ul>
              <li>
                Truyền toàn bộ đối tượng vào tham số của một phương thức, thay
                vì chỉ truyền các giá trị của nó (kiểu nguyên thủy), có thể tạo
                ra sự phụ thuộc không mong muốn giữa hai lớp.
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
                    autoPlay
                    playsinline
                    width="200"
                    height="200"
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
                href="/refactoring/smells/oo-abusers"
                class="btn btn-primary"
              >
                Lạm dụng Hướng đối tượng&nbsp;
                <span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/smells/bloaters/long-parameter-list"
                class="btn btn-default"
              >
                <span class="fa fa-arrow-left"></span>&nbsp;Danh Sách Tham Số
                Dài
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

export default ContentDataClumps;
