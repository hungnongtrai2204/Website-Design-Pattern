const ContentChangeReferenceToValue = () => {
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
            <h1 class="title">Chuyển Tham Chiếu Thành Giá Trị</h1>

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
                  Bạn có một đối tượng tham chiếu quá nhỏ và hiếm khi thay đổi
                  để biện minh cho việc quản lý vòng đời của nó.
                </p>
              </div>
              <div class="after">
                <h3>Giải Pháp</h3>
                <p>Chuyển nó thành một đối tượng giá trị.</p>
              </div>
            </div>

            <div class="examples">
              <div class="before-after before-after-container">
                <div class="before">
                  <div class="ba">Before</div>
                  <div class="ba-container">
                    <img
                      src="/images/refactoring/diagrams/Change%20Reference%20to%20Value%20-%20Before2033.png?id=584dcba345161853463376cef73ab205"
                      alt="Change Reference to Value - Before"
                      width="377"
                    />
                  </div>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <div class="ba-container">
                    <img
                      src="/images/refactoring/diagrams/Change%20Reference%20to%20Value%20-%20After05e8.png?id=08ac04b5ee1d4845fb6ebe409a4a6614"
                      alt="Change Reference to Value - After"
                      width="377"
                    />
                  </div>
                </div>
              </div>
            </div>

            <h3>Lý Do Tái Cấu Trúc</h3>
            <p>
              Việc chuyển đổi từ tham chiếu sang giá trị có thể được khơi nguồn
              từ sự bất tiện khi làm việc với tham chiếu. Tham chiếu đòi hỏi sự
              quản lý từ phía bạn:
            </p>
            <ul>
              <li>
                <p>Luôn yêu cầu đối tượng cần thiết từ kho lưu trữ.</p>
              </li>
              <li>
                <p>
                  Tham chiếu trong bộ nhớ có thể không thuận tiện để làm việc.
                </p>
              </li>
              <li>
                <p>
                  Làm việc với tham chiếu đặc biệt khó khăn so với giá trị trong
                  các hệ thống phân tán và song song.
                </p>
              </li>
            </ul>
            <p>
              Giá trị đặc biệt hữu ích nếu bạn muốn có các đối tượng không thay
              đổi hơn là các đối tượng có thể thay đổi trạng thái trong suốt
              vòng đời của chúng.
            </p>
            <h3>Lợi Ích</h3>
            <ul>
              <li>
                <p>
                  Một thuộc tính quan trọng của các đối tượng là chúng nên không
                  thay đổi. Kết quả tương tự nên được nhận cho mỗi truy vấn trả
                  về giá trị của đối tượng. Nếu điều này đúng, không có vấn đề
                  gì nảy sinh nếu có nhiều đối tượng đại diện cho cùng một thứ.
                </p>
              </li>
              <li>
                <p>Giá trị dễ dàng triển khai hơn nhiều.</p>
              </li>
            </ul>
            <h3>Nhược Điểm</h3>
            <ul>
              <li>
                Nếu một giá trị có thể thay đổi, hãy đảm bảo rằng nếu bất kỳ đối
                tượng nào thay đổi thì các giá trị trong tất cả các đối tượng
                khác đại diện cho cùng một thực thể đều được cập nhật. Điều này
                khó khăn đến mức dễ dàng hơn để tạo một tham chiếu cho mục đích
                này.
              </li>
            </ul>
            <h3>Cách Tái Cấu Trúc</h3>
            <ol>
              <li>
                <p>
                  Làm cho đối tượng không thay đổi. Đối tượng không nên có bất
                  kỳ phương thức setter hoặc các phương thức nào khác thay đổi
                  trạng thái và dữ liệu của nó (
                  <a href="/refactoring/techniques/simplifying-method-calls/remove-setting-method">
                    Loại bỏ Phương thức Thiết lập
                  </a>{" "}
                  có thể giúp ở đây). Nơi duy nhất mà dữ liệu nên được gán cho
                  các trường của một đối tượng giá trị là constructor.
                </p>
              </li>
              <li>
                <p>
                  Tạo một phương thức so sánh để có thể so sánh hai giá trị.
                </p>
              </li>
              <li>
                <p>
                  Kiểm tra xem bạn có thể xóa phương thức factory và làm cho
                  constructor của đối tượng trở thành công khai.
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
              <div class="col-xs-12 col-sm-6 col-lg-12">
                <h3>Chống Tái Cấu Trúc</h3>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/techniques/organizing-data/change-value-to-reference">
                      Chuyển Giá Trị Thành Tham Chiếu
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
                href="/refactoring/techniques/organizing-data/replace-array-with-object"
                class="btn btn-primary"
              >
                Thay Mảng Bằng Đối Tượng&nbsp;
                <span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/techniques/organizing-data/change-value-to-reference"
                class="btn btn-default"
              >
                <span class="fa fa-arrow-left"></span>&nbsp;Thay Đổi Giá Trị
                Thành Tham Chiếu
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

export default ContentChangeReferenceToValue;
