const ContentReplaceTypeCodewithClass = () => {
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
            <h1 class="title">Thay Thế Mã Loại Bằng Lớp</h1>

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

            <blockquote>
              <p>
                <strong>Mã loại là gì?</strong> Mã loại xuất hiện khi, thay vì
                sử dụng một kiểu dữ liệu riêng biệt, bạn có một tập hợp các số
                hoặc chuỗi hình thành nên danh sách các giá trị được phép cho
                một thực thể nào đó. Thường thì những số và chuỗi cụ thể này
                được đặt tên dễ hiểu thông qua các hằng số, đó là lý do tại sao
                mã loại thường gặp nhiều như vậy.
              </p>
            </blockquote>

            <div class="before-after-container">
              <div class="before">
                <h3>Vấn Đề</h3>
                <p>
                  Một lớp có một trường chứa mã loại. Các giá trị của loại này
                  không được sử dụng trong các điều kiện toán tử và không ảnh
                  hưởng đến hành vi của chương trình.
                </p>
              </div>
              <div class="after">
                <h3>Giải Pháp</h3>
                <p>
                  Tạo một lớp mới và sử dụng các đối tượng của nó thay vì các
                  giá trị mã loại.
                </p>
              </div>
            </div>

            <div class="examples">
              <div class="before-after before-after-container">
                <div class="before">
                  <div class="ba">Before</div>
                  <div class="ba-container">
                    <img
                      src="/images/refactoring/diagrams/Replace%20Type%20Code%20with%20Class%20-%20Before7f24.png?id=1b492169f36a1b9da5bb6d9e6f857f45"
                      alt="Replace Type Code with Class - Before"
                      width="152"
                    />
                  </div>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <div class="ba-container">
                    <img
                      src="/images/refactoring/diagrams/Replace%20Type%20Code%20with%20Class%20-%20After8bf2.png?id=c3be25afb117027a6d56cc489d0e7ae6"
                      alt="Replace Type Code with Class - After"
                      width="152"
                    />
                  </div>
                </div>
              </div>
            </div>

            <h3>Tại Sao Cần Tái Cấu Trúc</h3>
            <p>
              Một trong những lý do phổ biến nhất cho mã loại là làm việc với cơ
              sở dữ liệu, khi một cơ sở dữ liệu có các trường trong đó một khái
              niệm phức tạp nào đó được mã hóa bằng một số hoặc chuỗi.
            </p>
            <p>
              Ví dụ, bạn có lớp <code>User</code> với trường{" "}
              <code>user_role</code>, chứa thông tin về quyền truy cập của mỗi
              người dùng, là quản trị viên, biên tập viên, hoặc người dùng thông
              thường. Vì vậy, trong trường hợp này, thông tin này được mã hóa
              trong trường dưới dạng <code>A</code>, <code>E</code>, and
              <code>U</code> tương ứng.
            </p>
            <p>
              Những nhược điểm của cách tiếp cận này là gì? Trường setter thường
              không kiểm tra giá trị nào được gửi đến, điều này có thể gây ra
              các vấn đề lớn khi ai đó gửi các giá trị không mong muốn hoặc sai
              lầm vào các trường này.
            </p>
            <p>
              Ngoài ra, việc xác minh loại không thể thực hiện được cho các
              trường này. Có thể gửi bất kỳ số hoặc chuỗi nào đến chúng, điều
              này sẽ không được IDE kiểm tra loại và thậm chí cho phép chương
              trình của bạn chạy (và sau đó có thể gặp sự cố).
            </p>
            <h3>Lợi Ích</h3>
            <ul>
              <li>
                <p>
                  Chúng ta muốn biến các tập hợp giá trị nguyên thủy—đó là những
                  gì các loại mã được mã hóa—thành các lớp đầy đủ với tất cả các
                  lợi ích mà lập trình hướng đối tượng mang lại.
                </p>
              </li>
              <li>
                <p>
                  Bằng cách thay thế mã loại bằng các lớp, chúng ta cho phép gợi
                  ý kiểu cho các giá trị được truyền vào các phương thức và
                  trường ở mức ngôn ngữ lập trình.
                </p>
                <p>
                  Ví dụ, trong khi trình biên dịch trước đây không thấy sự khác
                  biệt giữa hằng số số của bạn và một số tùy ý nào đó khi một
                  giá trị được truyền vào một phương thức, giờ đây khi dữ liệu
                  không phù hợp với lớp kiểu được chỉ định được truyền vào, bạn
                  sẽ được cảnh báo về lỗi bên trong IDE của bạn.
                </p>
              </li>
              <li>
                <p>
                  Do đó, chúng ta có thể di chuyển mã tới các lớp của loại. Nếu
                  bạn cần thực hiện các thao tác phức tạp với các giá trị loại
                  trên toàn bộ chương trình, giờ đây mã này có thể "sống" bên
                  trong một hoặc nhiều lớp loại.
                </p>
              </li>
            </ul>
            <h3>Khi Không Nên Sử Dụng</h3>
            <p>
              Nếu các giá trị của một loại mã được sử dụng bên trong các cấu
              trúc điều khiển luồng (<code>if</code>, <code>switch</code>, etc.)
              và kiểm soát hành vi của lớp, bạn nên sử dụng một trong hai kỹ
              thuật tái cấu trúc mã loại:
            </p>
            <ul>
              <li>
                <p>
                  <a href="/refactoring/techniques/organizing-data/replace-type-code-with-subclasses">
                    Thay Thế Mã Loại Bằng Các Lớp Con
                  </a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/refactoring/techniques/organizing-data/replace-type-code-with-state-strategy">
                    Thay Thế Mã Loại Bằng Trạng Thái/Chiến Lược
                  </a>
                </p>
              </li>
            </ul>
            <h3>Cách Tái Cấu Trúc</h3>
            <ol>
              <li>
                <p>
                  Tạo một lớp mới và đặt tên mới cho nó phù hợp với mục đích của
                  loại mã được mã hóa. Ở đây chúng ta sẽ gọi nó là{" "}
                  <em>lớp loại</em>.
                </p>
              </li>
              <li>
                <p>
                  Sao chép trường chứa mã loại sang <em>lớp loại</em> và làm cho
                  nó thành riêng tư. Sau đó tạo một phương thức getter cho
                  trường này. Một giá trị sẽ được thiết lập cho trường này chỉ
                  từ constructor.
                </p>
              </li>
              <li>
                <p>
                  Đối với mỗi giá trị của loại mã được mã hóa, tạo một phương
                  thức tĩnh trong <em>lớp loại</em>. Nó sẽ tạo một đối tượng
                  <em>lớp loại</em> mới tương ứng với giá trị này của loại mã
                  được mã hóa.
                </p>
              </li>
              <li>
                <p>
                  Trong lớp gốc, thay thế kiểu của trường mã được mã hóa bằng{" "}
                  <em>lớp loại</em>. Tạo một đối tượng mới của kiểu này trong
                  constructor cũng như trong setter của trường. Thay đổi getter
                  của trường để nó gọi getter của <em>lớp loại</em>.
                </p>
              </li>
              <li>
                <p>
                  Thay thế bất kỳ đề cập nào đến các giá trị của loại mã được mã
                  hóa bằng các lời gọi của các phương thức tĩnh liên quan của{" "}
                  <em>lớp loại</em>.
                </p>
              </li>
              <li>
                <p>Loại bỏ các hằng số mã được mã hóa từ lớp gốc.</p>
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
                <h3>Các Tái Cấu Trúc Tương Tự</h3>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/techniques/organizing-data/replace-type-code-with-subclasses">
                      Thay Thế Mã Loại Bằng Các Lớp Con
                    </a>
                  </div>
                </div>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/techniques/organizing-data/replace-type-code-with-state-strategy">
                      Thay Thế Mã Loại Bằng Trạng Thái/Chiến Lược
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-lg-6">
                <h3>Loại Bỏ Mùi Mã</h3>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/smells/bloaters/primitive-obsession">
                      Nỗi Ám Ảnh Nguyên Thủy
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
                href="/refactoring/techniques/organizing-data/replace-type-code-with-subclasses"
                class="btn btn-primary"
              >
                Thay Mã Loại Bằng Các Lớp Con&nbsp;
                <span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/techniques/organizing-data/encapsulate-collection"
                class="btn btn-default"
              >
                <span class="fa fa-arrow-left"></span>&nbsp;Bao Gói Bộ Sưu Tập
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

export default ContentReplaceTypeCodewithClass;
