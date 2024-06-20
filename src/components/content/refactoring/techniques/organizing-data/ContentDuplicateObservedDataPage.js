const ContentDuplicateObservedData = () => {
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
            <h1 class="title">Xóa bỏ Dữ liệu Quan sát Bị trùng lặp</h1>

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
                <h3>Vấn đề</h3>
                <p>
                  Dữ liệu miền (domain data) được lưu trữ trong các lớp chịu
                  trách nhiệm cho giao diện người dùng (GUI)?
                </p>
              </div>
              <div class="after">
                <h3>Giải pháp</h3>
                <p>
                  Khi đó, bạn nên tách dữ liệu ra thành các lớp riêng biệt, đảm
                  bảo kết nối và đồng bộ hóa giữa lớp miền và GUI.
                </p>
              </div>
            </div>

            <div class="examples">
              <div class="before-after before-after-container">
                <div class="before">
                  <div class="ba">Before</div>
                  <div class="ba-container">
                    <img
                      src="/images/refactoring/diagrams/Duplicate%20Observed%20Data%20-%20Befored907.png?id=bd26ed6d7d9921504165fd46b7f6124c"
                      alt="Duplicate Observed Data - Before"
                      width="227"
                    />
                  </div>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <div class="ba-container">
                    <img
                      src="/images/refactoring/diagrams/Duplicate%20Observed%20Data%20-%20After5bfb.png?id=b86fa0ff2f9ff7c76d4a183607153458"
                      alt="Duplicate Observed Data - After"
                      width="227"
                    />
                  </div>
                </div>
              </div>
            </div>

            <h3>Tại sao cần tái cấu trúc</h3>
            <p>
              Bạn muốn có nhiều giao diện người dùng khác nhau cho cùng một dữ
              liệu (ví dụ: bạn có cả ứng dụng trên máy tính để bàn và ứng dụng
              di động). Nếu bạn không tách rời GUI khỏi miền, bạn sẽ gặp khó
              khăn lớn trong việc tránh trùng lặp mã và một số lượng lớn các
              lỗi.
            </p>
            <h3>Lợi ích</h3>
            <ul>
              <li>
                <p>
                  Bạn chia trách nhiệm giữa các lớp logic nghiệp vụ và các lớp
                  trình bày (theo <em>Nguyên tắc Trách nhiệm Duy nhất</em>),
                  giúp chương trình của bạn dễ đọc và dễ hiểu hơn.
                </p>
              </li>
              <li>
                <p>
                  Nếu bạn cần thêm một giao diện người dùng mới, chỉ cần tạo các
                  lớp trình bày mới; bạn không cần đụng đến mã của logic nghiệp
                  vụ (theo <em>Nguyên tắc Đóng/Mở</em>).
                </p>
              </li>
              <li>
                <p>
                  Bây giờ, các thành viên khác nhau trong nhóm có thể làm việc
                  trên logic nghiệp vụ và giao diện người dùng độc lập.
                </p>
              </li>
            </ul>
            <h3>Khi nào không nên sử dụng</h3>
            <ul>
              <li>
                <p>
                  Kỹ thuật tái cấu trúc này, trong hình thức cổ điển của nó,
                  được thực hiện bằng cách sử dụng mẫu{" "}
                  <a href="/design-patterns/observer">Observer</a>, không áp
                  dụng cho các ứng dụng web, nơi mà tất cả các lớp được tái tạo
                  giữa các truy vấn tới máy chủ web.
                </p>
              </li>
              <li>
                <p>
                  Tuy nhiên, nguyên tắc chung của việc tách logic nghiệp vụ ra
                  các lớp riêng biệt vẫn có thể được áp dụng cho các ứng dụng
                  web. Nhưng điều này sẽ được thực hiện bằng các kỹ thuật tái
                  cấu trúc khác nhau tùy thuộc vào cách thiết kế hệ thống của
                  bạn.
                </p>
              </li>
            </ul>
            <h3>Cách Tái cấu trúc</h3>
            <ol>
              <li>
                <p>
                  Ẩn truy cập trực tiếp tới dữ liệu miền trong <em>lớp GUI</em>.
                  Sử dụng phương thức{" "}
                  <a href="/refactoring/techniques/organizing-data/self-encapsulate-field">
                    Tự đóng gói trường
                  </a>{" "}
                  để tạo các getter và setter cho dữ liệu này.
                </p>
              </li>
              <li>
                <p>
                  Trong các xử lý sự kiện của <em>lớp GUI</em>, sử dụng các
                  setter để thiết lập các giá trị trường mới, cho phép truyền
                  các giá trị này đến đối tượng miền liên quan.
                </p>
              </li>
              <li>
                <p>
                  Tạo một lớp miền và sao chép các trường cần thiết từ{" "}
                  <em>lớp GUI</em> vào nó. Tạo các getter và setter cho tất cả
                  các trường này.
                </p>
              </li>
              <li>
                <p>Tạo mẫu Observer cho hai lớp này:</p>
                <ul>
                  <li>
                    <p>
                      Trong <em>lớp miền</em>, tạo một mảng để lưu trữ các đối
                      tượng quan sát (<em>đối tượng GUI</em>), cũng như các
                      phương thức để đăng ký, xóa và thông báo cho chúng.
                    </p>
                  </li>
                  <li>
                    <p>
                      Trong <em>lớp GUI</em>, tạo một trường để lưu trữ tham
                      chiếu đến <em>lớp miền</em> cũng như phương thức{" "}
                      <code>update()</code>, sẽ phản ứng với các thay đổi trong
                      đối tượng và cập nhật giá trị của các trường trong{" "}
                      <em>lớp GUI</em>. Lưu ý rằng cập nhật giá trị nên được
                      thiết lập trực tiếp trong phương thức, để tránh đệ quy.
                    </p>
                  </li>
                  <li>
                    <p>
                      Trong hàm tạo của <em>lớp GUI</em>, tạo một thể hiện của{" "}
                      <em>lớp miền</em> và lưu nó vào trường đã tạo. Đăng ký{" "}
                      <em>đối tượng GUI</em> làm quan sát viên trong
                      <em>đối tượng miền</em>.
                    </p>
                  </li>
                  <li>
                    <p>
                      Trong các setter cho các trường của <em>lớp miền</em> ,
                      gọi phương thức thông báo cho quan sát viên (tức là phương
                      thức cập nhật trong <em>lớp GUI</em>), để truyền các giá
                      trị mới đến GUI.
                    </p>
                  </li>
                  <li>
                    <p>
                      Thay đổi các setter của các trường <em>lớp GUI</em> để
                      chúng đặt giá trị mới trực tiếp trong đối tượng miền. Đảm
                      bảo rằng giá trị không được đặt thông qua setter của{" "}
                      <em>lớp miền</em>—nếu không sẽ dẫn đến đệ quy vô hạn.
                    </p>
                  </li>
                </ul>
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
                <h3>Thực hiện mẫu thiết kế</h3>
                <div class="dl">
                  <div class="dt">
                    <a href="/design-patterns/observer">Observer</a>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-lg-6">
                <h3>Loại bỏ mùi mã</h3>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/smells/bloaters/large-class">
                      Lớp Lớn
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
                href="/refactoring/techniques/organizing-data/change-unidirectional-association-to-bidirectional"
                class="btn btn-primary"
              >
                Thay Đổi Liên Kết Một Chiều Thành Hai Chiều&nbsp;
                <span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/techniques/organizing-data/replace-array-with-object"
                class="btn btn-default"
              >
                <span class="fa fa-arrow-left"></span>&nbsp;Thay Mảng Bằng Đối
                Tượng
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

export default ContentDuplicateObservedData;
