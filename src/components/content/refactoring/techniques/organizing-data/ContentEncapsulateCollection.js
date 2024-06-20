const ContentEncapsulateCollection = () => {
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
            <h1 class="title">Bao Gói Bộ Sưu Tập</h1>

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
                  Một lớp chứa một trường bộ sưu tập và một getter và setter đơn
                  giản để làm việc với bộ sưu tập.
                </p>
              </div>
              <div class="after">
                <h3>Giải Pháp</h3>
                <p>
                  Làm cho giá trị được trả về bởi getter chỉ đọc và tạo các
                  phương thức để thêm/xóa các phần tử của bộ sưu tập.
                </p>
              </div>
            </div>

            <div class="examples">
              <div class="before-after before-after-container">
                <div class="before">
                  <div class="ba">Before</div>
                  <div class="ba-container">
                    <img
                      src="/images/refactoring/diagrams/Encapsulate%20Collection%20-%20Before4b9f.png?id=0c01860495c763043a13ce47086e49f1"
                      alt="Encapsulate Collection - Before"
                      width="227"
                    />
                  </div>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <div class="ba-container">
                    <img
                      src="/images/refactoring/diagrams/Encapsulate%20Collection%20-%20After0ac4.png?id=e8f5624c8d63963421680121d49a43de"
                      alt="Encapsulate Collection - After"
                      width="284"
                    />
                  </div>
                </div>
              </div>
            </div>

            <h3>Tại Sao Cần Refactor</h3>
            <p>
              Một lớp chứa một trường bao gồm một bộ sưu tập các đối tượng. Bộ
              sưu tập này có thể là một mảng, danh sách, tập hợp hoặc vector.
              Một getter và setter thông thường đã được tạo để làm việc với bộ
              sưu tập.
            </p>
            <p>
              Tuy nhiên, các bộ sưu tập nên được sử dụng theo một giao thức khác
              biệt so với các kiểu dữ liệu khác. Phương thức getter không nên
              trả về đối tượng bộ sưu tập tự nó, vì điều này sẽ cho phép các
              client thay đổi nội dung của bộ sưu tập mà không có sự nhận biết
              của lớp chủ. Ngoài ra, điều này sẽ tiết lộ quá nhiều cấu trúc nội
              bộ của dữ liệu đối tượng cho các client. Phương thức để lấy các
              phần tử của bộ sưu tập nên trả về một giá trị không cho phép thay
              đổi bộ sưu tập hoặc tiết lộ dữ liệu quá mức về cấu trúc của nó.
            </p>
            <p>
              Ngoài ra, không nên có phương thức nào để gán một giá trị cho bộ
              sưu tập. Thay vào đó, nên có các thao tác để thêm và xóa các phần
              tử. Nhờ đó, đối tượng chủ có thể kiểm soát việc thêm và xóa các
              phần tử của bộ sưu tập.
            </p>
            <p>
              Giao thức như vậy sẽ bao bọc bộ sưu tập đúng cách, điều này cuối
              cùng làm giảm mức độ liên kết giữa lớp chủ và mã của client.
            </p>
            <h3>Lợi Ích</h3>
            <ul>
              <li>
                <p>
                  Trường bộ sưu tập được bao gói bên trong lớp. Khi getter được
                  gọi, nó trả về một bản sao của bộ sưu tập, điều này ngăn chặn
                  việc thay đổi hoặc ghi đè tình cờ các phần tử của bộ sưu tập
                  mà không có sự nhận biết của lớp chứa bộ sưu tập.
                </p>
              </li>
              <li>
                <p>
                  Nếu các phần tử của bộ sưu tập được chứa trong một kiểu nguyên
                  thủy, chẳng hạn như mảng, bạn có thể tạo các phương thức tiện
                  lợi hơn để làm việc với bộ sưu tập.
                </p>
              </li>
              <li>
                <p>
                  Nếu các phần tử của bộ sưu tập được chứa trong một bộ chứa
                  không phải là kiểu nguyên thủy (lớp bộ sưu tập chuẩn), bằng
                  cách bao gói bộ sưu tập bạn có thể hạn chế truy cập vào các
                  phương thức chuẩn không mong muốn của bộ sưu tập (chẳng hạn
                  như hạn chế thêm các phần tử mới).
                </p>
              </li>
            </ul>
            <h3>Cách Refactor</h3>
            <ol>
              <li>
                <p>
                  Tạo các phương thức để thêm và xóa các phần tử của bộ sưu tập.
                  Chúng phải chấp nhận các phần tử bộ sưu tập trong các tham số
                  của chúng.
                </p>
              </li>
              <li>
                <p>
                  Gán một bộ sưu tập trống cho trường như là giá trị khởi tạo
                  nếu điều này chưa được thực hiện trong constructor của lớp.
                </p>
              </li>
              <li>
                <p>
                  Tìm các lần gọi setter của trường bộ sưu tập. Thay đổi setter
                  để sử dụng các thao tác thêm và xóa, hoặc làm cho các thao tác
                  này gọi mã của client.
                </p>
              </li>
            </ol>
            <p>
              Lưu ý rằng setters chỉ có thể được sử dụng để thay thế tất cả các
              phần tử của bộ sưu tập bằng các phần tử khác. Do đó, có thể cần
              đổi tên setter (
              <a href="/refactoring/techniques/simplifying-method-calls/rename-method">
                Đổi tên phương thức
              </a>
              ) thành <code>replace</code>.
            </p>
            <ol start="4">
              <li>
                <p>
                  Tìm tất cả các lần gọi getter của bộ sưu tập sau đó bộ sưu tập
                  bị thay đổi. Thay đổi mã để sử dụng các phương thức mới của
                  bạn để thêm và xóa các phần tử từ bộ sưu tập.
                </p>
              </li>
              <li>
                <p>
                  Thay đổi getter để nó trả về một đại diện chỉ đọc của bộ sưu
                  tập.
                </p>
              </li>
              <li>
                <p>
                  Kiểm tra mã của client sử dụng bộ sưu tập để tìm mã sẽ trông
                  tốt hơn bên trong lớp bộ sưu tập tự nó.
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
                <h3>Loại Bỏ Mùi Mã</h3>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/smells/dispensables/data-class">
                      Lớp Dữ Liệu
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
                href="/refactoring/techniques/organizing-data/replace-type-code-with-class"
                class="btn btn-primary"
              >
                Thay Mã Loại Bằng Lớp&nbsp;
                <span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/techniques/organizing-data/encapsulate-field"
                class="btn btn-default"
              >
                <span class="fa fa-arrow-left"></span>&nbsp;Bao Gói Trường
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

export default ContentEncapsulateCollection;
