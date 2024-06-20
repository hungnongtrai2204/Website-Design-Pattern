const ContentReplaceSubclasswithFields = () => {
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
                <i class="fa fa-home"></i>
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
              <a class="type" href="/refactoring/techniques/organizing-data">
                Tổ Chức Dữ Liệu
              </a>
            </div>
            <h1 class="title">Thay Thế Lớp Con Bằng Các Trường</h1>

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
                  Bạn có các lớp con khác nhau chỉ ở các phương thức (trả về giá
                  trị hằng số).
                </p>
              </div>
              <div class="after">
                <h3>Giải Pháp</h3>
                <p>
                  Thay thế các phương thức bằng các trường trong lớp cha và xóa
                  các lớp con.
                </p>
              </div>
            </div>

            <div class="examples">
              <div class="before-after before-after-container">
                <div class="before">
                  <div class="ba">Before</div>
                  <div class="ba-container">
                    <img
                      src="/images/refactoring/diagrams/Replace%20Subclass%20with%20Fields%20-%20Beforec050.png?id=ea6525cc6b55e1a03fdb35def943c675"
                      alt="Replace Subclass with Fields - Before"
                      width="415"
                    />
                  </div>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <div class="ba-container">
                    <img
                      src="/images/refactoring/diagrams/Replace%20Subclass%20with%20Fields%20-%20After22d1.png?id=bd1b29687aa333b3adbeb2bfb3e78614"
                      alt="Replace Subclass with Fields - After"
                      width="152"
                    />
                  </div>
                </div>
              </div>
            </div>

            <h3>Tại Sao Cần Tái Cấu Trúc</h3>
            <p>Đôi khi tái cấu trúc là cách tốt nhất để tránh mã loại.</p>
            <p>
              Trong một trường hợp như vậy, một hệ thống phân cấp lớp con có thể
              chỉ khác nhau ở các giá trị trả về bởi các phương thức cụ thể. Các
              phương thức này thậm chí không phải là kết quả của tính toán, mà
              được xác định chặt chẽ trong các phương thức hoặc các trường trả
              về bởi các phương thức. Để đơn giản hóa kiến trúc lớp, hệ thống
              phân cấp này có thể được nén thành một lớp duy nhất chứa một hoặc
              nhiều trường với các giá trị cần thiết, dựa trên tình huống.
            </p>
            <p>
              Những thay đổi này có thể trở nên cần thiết sau khi di chuyển một
              lượng lớn chức năng từ một hệ thống phân cấp lớp sang nơi khác. Hệ
              thống phân cấp hiện tại không còn có giá trị nhiều và các lớp con
              của nó bây giờ chỉ là gánh nặng không cần thiết.
            </p>
            <h3>Lợi Ích</h3>
            <ul>
              <li>
                Đơn giản hóa kiến trúc hệ thống. Tạo lớp con là quá mức cần
                thiết nếu tất cả những gì bạn muốn làm là trả về các giá trị
                khác nhau trong các phương thức khác nhau.
              </li>
            </ul>
            <h3>Cách Tái Cấu Trúc</h3>
            <ol>
              <li>
                <p>
                  Áp dụng{" "}
                  <a href="/refactoring/techniques/simplifying-method-calls/replace-constructor-with-factory-method">
                    Thay Thế Constructor Bằng Phương Thức Factory
                  </a>{" "}
                  cho các lớp con.
                </p>
              </li>
              <li>
                <p>
                  Thay thế các lời gọi constructor lớp con bằng các lời gọi
                  phương thức factory của lớp cha.
                </p>
              </li>
              <li>
                <p>
                  Trong lớp cha, khai báo các trường để lưu trữ các giá trị của
                  mỗi phương thức lớp con trả về giá trị hằng số.
                </p>
              </li>
              <li>
                <p>
                  Tạo một constructor bảo vệ của lớp cha để khởi tạo các trường
                  mới.
                </p>
              </li>
              <li>
                <p>
                  Tạo hoặc sửa đổi các constructor hiện có của lớp con để chúng
                  gọi constructor mới của lớp cha và truyền các giá trị liên
                  quan cho nó.
                </p>
              </li>
              <li>
                <p>
                  Thực hiện mỗi phương thức hằng số trong lớp cha để nó trả về
                  giá trị của trường tương ứng. Sau đó, xóa phương thức khỏi lớp
                  con.
                </p>
              </li>
              <li>
                <p>
                  Nếu constructor của lớp con có thêm chức năng, sử dụng phương
                  pháp{" "}
                  <a href="/refactoring/techniques/composing-methods/inline-method">
                    Gộp Phương Thức
                  </a>{" "}
                  để kết hợp constructor vào phương thức factory của lớp cha.
                </p>
              </li>
              <li>
                <p>Xóa lớp con.</p>
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
              <div class="col-xs-12 col-sm-6 col-lg-12">
                <h3>Phản Tái Cấu Trúc</h3>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/techniques/organizing-data/replace-type-code-with-subclasses">
                      Thay Thế Mã Loại Bằng Các Lớp Con
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
                href="/refactoring/techniques/simplifying-conditional-expressions"
                class="btn btn-primary"
              >
                Đơn giản hóa biểu thức điều kiện&nbsp;
                <span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/techniques/organizing-data/replace-type-code-with-state-strategy"
                class="btn btn-default"
              >
                <span class="fa fa-arrow-left"></span>&nbsp;Thay Mã Loại Bằng
                Trạng Thái/Chiến Lược
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

export default ContentReplaceSubclasswithFields;
