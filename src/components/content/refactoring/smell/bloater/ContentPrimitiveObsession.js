const ContentPrimitiveObsession = () => {
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
            <h1 class="title">Ám Ảnh Nguyên Thủy</h1>

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
                Primitive Obsession
              </span>
            </div> */}

            <h3>Dấu Hiệu Và Triệu Chứng</h3>
            <ul>
              <li>
                <p>
                  Sử dụng kiểu nguyên thủy thay vì các đối tượng nhỏ cho các tác
                  vụ đơn giản (chẳng hạn như tiền tệ, khoảng, chuỗi đặc biệt cho
                  số điện thoại, v.v.)
                </p>
              </li>
              <li>
                <p>
                  Sử dụng hằng số để mã hóa thông tin (chẳng hạn như một hằng số{" "}
                  <code>USER_ADMIN_ROLE = 1</code> để chỉ định người dùng có
                  quyền quản trị.)
                </p>
              </li>
              <li>
                <p>
                  Sử dụng các hằng chuỗi làm tên trường để sử dụng trong các
                  mảng dữ liệu.
                </p>
              </li>
            </ul>
            <figure class="image">
              <img
                width="500"
                height="300"
                src="/images/refactoring/content/smells/primitive-obsession-0177ec.png?id=73e1c5b08ea68a7ad7a66832644e6696"
                //     srcset="
                //   /images/refactoring/content/smells/primitive-obsession-01-2x.png?id=e13be298e4b8d9d4a987972dfc777f4b 2x
                // "
              />
            </figure>
            <h3>Nguyên nhân của vấn đề</h3>
            <p>
              Giống như hầu hết các mùi hôi khác, ám ảnh nguyên thủy xuất hiện
              trong những lúc yếu đuối. “Chỉ là một trường để lưu trữ một số dữ
              liệu thôi mà!” lập trình viên nói. Tạo một trường nguyên thủy dễ
              dàng hơn nhiều so với việc tạo ra một lớp mới hoàn toàn, phải
              không? Và thế là nó đã được thực hiện. Sau đó, cần thêm một trường
              khác và nó được thêm vào theo cách tương tự. Chẳng mấy chốc, lớp
              trở nên lớn và khó quản lý.
            </p>
            <p>
              Kiểu nguyên thủy thường được sử dụng để “mô phỏng” các loại kiểu
              dữ liệu. Vì vậy, thay vì một kiểu dữ liệu riêng biệt, bạn có một
              tập hợp các số hoặc chuỗi tạo thành danh sách các giá trị được
              phép cho một thực thể nào đó. Những cái tên dễ hiểu sau đó được
              đặt cho các số và chuỗi cụ thể này thông qua các hằng số, và đó là
              lý do tại sao chúng được lan rộng ra xa.
            </p>
            <p>
              Một ví dụ khác về việc sử dụng nguyên thủy kém là mô phỏng trường.
              Lớp chứa một mảng lớn dữ liệu đa dạng và các hằng chuỗi (được chỉ
              định trong lớp) được sử dụng làm chỉ số mảng để lấy dữ liệu này.
            </p>
            <h3>Cách khắc phục</h3>
            <ul>
              <li>
                <p>
                  Nếu bạn có nhiều trường nguyên thủy khác nhau, có thể nhóm
                  logic một số trong chúng vào lớp riêng của chúng. Thậm chí tốt
                  hơn, hãy di chuyển hành vi liên quan đến dữ liệu này vào lớp
                  đó. Đối với nhiệm vụ này, hãy thử sử dụng{" "}
                  <a href="/refactorings/organizing-data/replace-data-value-with-object">
                    Thay thế Giá trị Dữ liệu bằng Đối tượng
                  </a>
                  .
                </p>
                <figure class="image">
                  <img
                    width="500"
                    height="300"
                    src="/images/refactoring/content/smells/primitive-obsession-02edeb.png?id=69dfd06eec8d6053e9d88c03ecc78044"
                    //     srcset="
                    //   /images/refactoring/content/smells/primitive-obsession-02-2x.png?id=255bbb1e0b340ce3b62a5898e8edc75a 2x
                    // "
                    loading="lazy"
                  />
                </figure>
              </li>
              <li>
                <p>
                  Nếu các giá trị của các trường nguyên thủy được sử dụng trong
                  tham số phương thức, hãy sử dụng{" "}
                  <a href="/refactorings/simplifying-method-calls/introduce-parameter-object">
                    Giới thiệu Đối tượng Tham số
                  </a>{" "}
                  hoặc{" "}
                  <a href="/refactorings/simplifying-method-calls/preserve-whole-object">
                    Bảo tồn Toàn bộ Đối tượng
                  </a>
                  .
                </p>
              </li>
              <li>
                <p>
                  Khi dữ liệu phức tạp được mã hóa trong các biến, hãy sử dụng{" "}
                  <a href="/refactorings/organizing-data/replace-type-code-with-class">
                    Thay thế Mã Kiểu bằng Lớp
                  </a>
                  ,{" "}
                  <a href="/refactorings/organizing-data/replace-type-code-with-subclasses">
                    Thay thế Mã Kiểu bằng Lớp Con
                  </a>{" "}
                  hoặc{" "}
                  <a href="/refactorings/organizing-data/replace-type-code-with-state-strategy">
                    Thay thế Mã Kiểu bằng Trạng thái/Chiến lược
                  </a>
                  .
                </p>
              </li>
              <li>
                <p>
                  Nếu có các mảng trong số các biến, hãy sử dụng{" "}
                  <a href="/refactorings/organizing-data/replace-array-with-object">
                    Thay thế Mảng bằng Đối tượng
                  </a>
                  .
                </p>
              </li>
            </ul>
            <figure class="image">
              <img
                width="500"
                height="300"
                src="/images/refactoring/content/smells/primitive-obsession-03b918.png?id=ab0a8c7b6188265bb9890424e679af2f"
                //     srcset="
                //   /images/refactoring/content/smells/primitive-obsession-03-2x.png?id=bec1080bcf2be14eeda69b0090d5d3fb 2x
                // "
                loading="lazy"
              />
            </figure>
            <h3>Lợi Ích</h3>
            <ul>
              <li>
                <p>
                  Mã nguồn trở nên linh hoạt hơn nhờ việc sử dụng các đối tượng
                  thay vì các kiểu nguyên thủy.
                </p>
              </li>
              <li>
                <p>
                  Tăng tính dễ hiểu và tổ chức mã nguồn tốt hơn. Các thao tác
                  trên dữ liệu cụ thể nằm cùng một chỗ, thay vì bị phân tán.
                  Không còn phải đoán lý do cho tất cả những hằng số lạ lùng và
                  tại sao chúng lại nằm trong một mảng.
                </p>
              </li>
              <li>
                <p>Dễ dàng tìm thấy mã nguồn trùng lặp.</p>
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
                href="/refactoring/smells/bloaters/long-parameter-list"
                class="btn btn-primary"
              >
                Danh Sách Tham Số Dài&nbsp;
                <span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/smells/bloaters/large-class"
                class="btn btn-default"
              >
                <span class="fa fa-arrow-left"></span>&nbsp;Lớp Lớn
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

export default ContentPrimitiveObsession;
