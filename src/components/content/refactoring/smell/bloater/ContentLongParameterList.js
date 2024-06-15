const ContentLongParameterList = () => {
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
            <h1 class="title">Danh sách Tham số Dài</h1>

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
              <span style={{ display: "inline-block" }}>
                Long Parameter List
              </span>
            </div> */}

            <h3>Dấu hiệu và Triệu chứng</h3>
            <p>Có nhiều hơn ba hoặc bốn tham số cho một phương thức.</p>
            <figure class="image">
              <img
                width="500"
                height="300"
                src="/images/refactoring/content/smells/long-parameter-list-015e37.png?id=06fad4adaf485cfaa569e66c20f268eb"
                //     srcset="
                //   /images/refactoring/content/smells/long-parameter-list-01-2x.png?id=d964f68180e89b6312726c7a5719e35d 2x
                // "
              />
            </figure>
            <h3>Nguyên nhân của vấn đề</h3>
            <p>
              Một danh sách tham số dài có thể xuất hiện sau khi nhiều loại
              thuật toán được gộp vào một phương thức duy nhất. Một danh sách
              dài có thể được tạo ra để kiểm soát thuật toán nào sẽ được chạy và
              cách thức thực hiện.
            </p>
            <p>
              Danh sách tham số dài cũng có thể là sản phẩm phụ của nỗ lực làm
              cho các lớp độc lập hơn với nhau. Ví dụ, mã tạo các đối tượng cụ
              thể cần thiết trong một phương thức được chuyển từ phương thức
              sang mã gọi phương thức đó, nhưng các đối tượng được tạo này được
              truyền vào phương thức dưới dạng tham số. Vì vậy, lớp ban đầu
              không còn biết về mối quan hệ giữa các đối tượng nữa và sự phụ
              thuộc đã giảm đi. Nhưng nếu nhiều đối tượng như vậy được tạo ra,
              mỗi đối tượng sẽ yêu cầu tham số riêng, dẫn đến danh sách tham số
              dài hơn.
            </p>
            <p>
              Thật khó để hiểu các danh sách như vậy, chúng trở nên mâu thuẫn và
              khó sử dụng khi càng dài ra. Thay vì có một danh sách tham số dài,
              một phương thức có thể sử dụng dữ liệu của đối tượng riêng của nó.
              Nếu đối tượng hiện tại không chứa tất cả dữ liệu cần thiết, một
              đối tượng khác (có dữ liệu cần thiết) có thể được truyền vào như
              một tham số phương thức.
            </p>
            <h3>Cách khắc phục</h3>
            <ul>
              <li>
                <p>
                  Kiểm tra các giá trị được truyền vào tham số. Nếu một số đối
                  số chỉ là kết quả của các lời gọi phương thức của đối tượng
                  khác, hãy sử dụng{" "}
                  <a href="/refactorings/simplifying-method-calls/replace-parameter-with-method-call">
                    Thay Tham Số Bằng Lời Gọi Phương Thức
                  </a>
                  . Đối tượng này có thể được đặt trong trường của lớp riêng của
                  nó hoặc được truyền vào như một tham số phương thức.
                </p>
              </li>
              <li>
                <p>
                  Thay vì truyền một nhóm dữ liệu nhận được từ đối tượng khác
                  dưới dạng tham số, hãy truyền đối tượng đó vào phương thức
                  bằng cách sử dụng{" "}
                  <a href="/refactorings/simplifying-method-calls/preserve-whole-object">
                    Bảo Tồn Toàn Bộ Đối Tượng
                  </a>
                  .
                </p>
              </li>
              <li>
                <p>
                  Nhưng nếu các tham số này đến từ các nguồn khác nhau, bạn có
                  thể truyền chúng như một đối tượng tham số duy nhất bằng cách
                  sử dụng{" "}
                  <a href="/refactorings/simplifying-method-calls/introduce-parameter-object">
                    Giới Thiệu Đối Tượng Tham Số
                  </a>
                  .
                </p>
              </li>
            </ul>
            <figure class="image">
              <img
                width="500"
                height="300"
                src="/images/refactoring/content/smells/long-parameter-list-020f28.png?id=7571291fcaea939ed137400cbe0f3c02"
                //     srcset="
                //   /images/refactoring/content/smells/long-parameter-list-02-2x.png?id=90514c8d76f4eae7b76439778b82c778 2x
                // "
                loading="lazy"
              />
            </figure>
            <h3>Lợi Ích</h3>
            <ul>
              <li>
                <p>Mã nguồn ngắn hơn, dễ đọc hơn.</p>
              </li>
              <li>
                <p>
                  Việc tái cấu trúc có thể làm lộ ra mã nguồn trùng lặp mà trước
                  đó không được nhận ra.
                </p>
              </li>
            </ul>
            <h3>Khi nào nên bỏ qua</h3>
            <ul>
              <li>
                Đừng loại bỏ các tham số nếu việc làm như vậy sẽ gây ra sự phụ
                thuộc không mong muốn giữa các lớp.
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
                href="/refactoring/smells/bloaters/data-clumps"
                class="btn btn-primary"
              >
                Cụm Dữ Liệu&nbsp;
                <span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/smells/bloaters/primitive-obsession"
                class="btn btn-default"
              >
                <span class="fa fa-arrow-left"></span>&nbsp;Ám Ảnh Nguyên Thủy
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

export default ContentLongParameterList;
