const ContentReplaceDataValueWithObject = () => {
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
            <h1 class="title">Thay Giá Trị Dữ Liệu Bằng Đối Tượng</h1>

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
                  Một lớp (hoặc nhóm các lớp) chứa một trường dữ liệu. Trường
                  này có hành vi riêng và dữ liệu liên quan.
                </p>
              </div>
              <div class="after">
                <h3>Giải Pháp</h3>
                <p>
                  Tạo một lớp mới, đặt trường cũ và hành vi của nó vào lớp này,
                  và lưu trữ đối tượng của lớp mới trong lớp gốc.
                </p>
              </div>
            </div>

            <div class="examples">
              <div class="before-after before-after-container">
                <div class="before">
                  <div class="ba">Before</div>
                  <div class="ba-container">
                    <img
                      src="/images/refactoring/diagrams/Replace%20Data%20Value%20with%20Object%20-%20Before08a7.png?id=f9ecd087d0e9e71ec8be6622ac36e573"
                      alt="Replace Data Value with Object - Before"
                      width="190"
                    />
                  </div>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <div class="ba-container">
                    <img
                      src="/images/refactoring/diagrams/Replace%20Data%20Value%20with%20Object%20-%20After5a05.png?id=26b91a5742429b46df4885713fea0a74"
                      alt="Replace Data Value with Object - After"
                      width="434"
                    />
                  </div>
                </div>
              </div>
            </div>

            <h3>Lý Do Tái Cấu Trúc</h3>
            <p>
              Tái cấu trúc này về cơ bản là một trường hợp đặc biệt của{" "}
              <a href="/refactoring/techniques/moving-features-between-objects/extract-class">
                Trích Xuất Lớp
              </a>
              . Điều làm nó khác biệt là nguyên nhân của việc tái cấu trúc.
            </p>
            <p>
              Trong{" "}
              <a href="/refactoring/techniques/moving-features-between-objects/extract-class">
                Trích Xuất Lớp
              </a>
              , chúng ta có một lớp duy nhất chịu trách nhiệm cho nhiều việc
              khác nhau và chúng ta muốn chia nhỏ trách nhiệm của nó.
            </p>
            <p>
              Với việc thay thế giá trị dữ liệu bằng một đối tượng, chúng ta có
              một trường nguyên thủy (số, chuỗi, v.v.) mà không còn đơn giản nữa
              do sự phát triển của chương trình và bây giờ có dữ liệu và hành vi
              liên quan. Một mặt, không có gì đáng sợ về các trường này tự bản
              thân chúng. Tuy nhiên, gia đình các trường và hành vi này có thể
              có mặt đồng thời trong nhiều lớp, tạo ra mã lặp lại.
            </p>
            <p>
              Do đó, chúng ta tạo một lớp mới và chuyển cả trường và dữ liệu
              cùng hành vi liên quan đến đó.
            </p>
            <h3>Lợi Ích</h3>
            <ul>
              <li>
                Cải thiện sự liên quan bên trong các lớp. Dữ liệu và hành vi
                liên quan được đặt trong một lớp duy nhất.
              </li>
            </ul>
            <h3>Cách Tái Cấu Trúc</h3>
            <p>
              Trước khi bắt đầu tái cấu trúc, hãy kiểm tra xem có các tham chiếu
              trực tiếp đến trường từ bên trong lớp hay không. Nếu có, sử dụng{" "}
              <a href="/refactoring/techniques/organizing-data/self-encapsulate-field">
                Tự Bao Gói Trường
              </a>{" "}
              để ẩn nó trong lớp gốc.
            </p>
            <ol>
              <li>
                <p>
                  Tạo một lớp mới và sao chép trường của bạn và getter liên quan
                  vào đó. Ngoài ra, tạo một hàm tạo (constructor) nhận giá trị
                  đơn giản của trường. Lớp này sẽ không có setter vì mỗi giá trị
                  trường mới được gửi đến lớp gốc sẽ tạo một đối tượng giá trị
                  mới.
                </p>
              </li>
              <li>
                <p>Trong lớp gốc, thay đổi kiểu của trường thành lớp mới.</p>
              </li>
              <li>
                <p>
                  Trong getter của lớp gốc, gọi getter của đối tượng liên quan.
                </p>
              </li>
              <li>
                <p>
                  Trong setter, tạo một đối tượng giá trị mới. Bạn có thể cần
                  tạo một đối tượng mới trong hàm tạo nếu các giá trị ban đầu đã
                  được đặt ở đó cho trường trước đó.
                </p>
              </li>
            </ol>
            <h3>Bước Tiếp Theo</h3>
            <p>
              Sau khi áp dụng kỹ thuật tái cấu trúc này, nên áp dụng{" "}
              <a href="/refactoring/techniques/organizing-data/change-value-to-reference">
                Thay đổi Giá trị thành Tham chiếu
              </a>{" "}
              cho trường chứa đối tượng. Điều này cho phép lưu trữ một tham
              chiếu đến một đối tượng duy nhất tương ứng với một giá trị thay vì
              lưu trữ hàng chục đối tượng cho một giá trị duy nhất.
            </p>
            <p>
              Cách tiếp cận này thường được sử dụng khi bạn muốn có một đối
              tượng chịu trách nhiệm cho một đối tượng thực tế (như người dùng,
              đơn hàng, tài liệu, v.v.). Đồng thời, cách tiếp cận này sẽ không
              hữu ích cho các đối tượng như ngày, tiền, khoảng thời gian, v.v.
            </p>

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
                    <a href="/refactoring/techniques/moving-features-between-objects/extract-class">
                      Trích Xuất Lớp
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
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/techniques/organizing-data/replace-array-with-object">
                      Thay Mảng Bằng Đối Tượng
                    </a>
                  </div>
                </div>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/techniques/composing-methods/replace-method-with-method-object">
                      Thay Phương Thức Bằng Đối Tượng Phương Thức
                    </a>
                  </div>
                  <div class="dd">
                    <p>Làm tương tự với mã của phương thức.</p>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-lg-6">
                <h3>Loại Bỏ Mùi Hôi</h3>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/smells/dispensables/duplicate-code">
                      Mã Lặp Lại
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
                href="/refactoring/techniques/organizing-data/change-value-to-reference"
                class="btn btn-primary"
              >
                Thay Đổi Giá Trị Thành Tham Chiếu&nbsp;
                <span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/techniques/organizing-data/self-encapsulate-field"
                class="btn btn-default"
              >
                <span class="fa fa-arrow-left"></span>&nbsp;Tự Bao Gói Trường
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

export default ContentReplaceDataValueWithObject;
