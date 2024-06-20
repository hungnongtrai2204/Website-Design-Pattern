const ContentChangeUnidirectionalAssociationToBidirectional = () => {
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
            <h1 class="title">Thay đổi Quan hệ Đơn hướng thành Song hướng</h1>

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
                  Bạn có hai lớp cần sử dụng các tính năng của nhau, nhưng quan
                  hệ giữa chúng chỉ là đơn hướng.
                </p>
              </div>
              <div class="after">
                <h3>Giải pháp</h3>
                <p>Thêm quan hệ còn thiếu vào lớp cần nó.</p>
              </div>
            </div>

            <div class="examples">
              <div class="before-after before-after-container">
                <div class="before">
                  <div class="ba">Before</div>
                  <div class="ba-container">
                    <img
                      src="/images/refactoring/diagrams/Change%20Unidirectional%20Association%20to%20Bidirectional%20-%20Before914d.png?id=a31d8472bbb2be95836c8b5e2334ac77"
                      alt="Change Unidirectional Association to Bidirectional - Before"
                      width="396"
                    />
                  </div>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <div class="ba-container">
                    <img
                      src="/images/refactoring/diagrams/Change%20Unidirectional%20Association%20to%20Bidirectional%20-%20After01d6.png?id=058ba44a44610bcb9caa4c23f60ad0bc"
                      alt="Change Unidirectional Association to Bidirectional - After"
                      width="396"
                    />
                  </div>
                </div>
              </div>
            </div>

            <h3>Tại sao cần Tái cấu trúc</h3>
            <p>
              Ban đầu các lớp có quan hệ đơn hướng. Nhưng theo thời gian, mã
              khách hàng cần truy cập vào cả hai bên của quan hệ.
            </p>
            <h3>Lợi ích</h3>
            <ul>
              <li>
                Nếu một lớp cần một quan hệ ngược, bạn có thể đơn giản tính toán
                nó. Nhưng nếu các tính toán này phức tạp, tốt hơn là giữ quan hệ
                ngược.
              </li>
            </ul>
            <h3>Nhược điểm</h3>
            <ul>
              <li>
                <p>
                  Quan hệ song hướng khó triển khai và duy trì hơn quan hệ đơn
                  hướng.
                </p>
              </li>
              <li>
                <p>
                  Quan hệ song hướng làm các lớp phụ thuộc lẫn nhau. Với quan hệ
                  đơn hướng, một trong số chúng có thể được sử dụng độc lập với
                  lớp kia.
                </p>
              </li>
            </ul>
            <h3>Cách Tái cấu trúc</h3>
            <ol>
              <li>
                <p>Thêm một trường để giữ quan hệ ngược.</p>
              </li>
              <li>
                <p>
                  Quyết định lớp nào sẽ là “thống trị”. Lớp này sẽ chứa các
                  phương thức tạo hoặc cập nhật quan hệ khi các phần tử được
                  thêm hoặc thay đổi, thiết lập quan hệ trong lớp của nó và gọi
                  các phương thức tiện ích để thiết lập quan hệ trong đối tượng
                  liên kết.
                </p>
              </li>
              <li>
                <p>
                  Tạo một phương thức tiện ích để thiết lập quan hệ trong lớp
                  “không thống trị”. Phương thức này nên sử dụng những gì nó
                  nhận được trong các tham số để hoàn thành trường. Đặt tên rõ
                  ràng cho phương thức để không được sử dụng sau này cho bất kỳ
                  mục đích nào khác.
                </p>
              </li>
              <li>
                <p>
                  Nếu các phương thức cũ để kiểm soát quan hệ đơn hướng nằm
                  trong lớp “thống trị”, bổ sung chúng bằng các cuộc gọi đến các
                  phương thức tiện ích từ đối tượng liên kết.
                </p>
              </li>
              <li>
                <p>
                  Nếu các phương thức cũ để kiểm soát quan hệ nằm trong lớp
                  “không thống trị”, tạo các phương thức trong lớp “thống trị”,
                  gọi chúng và ủy quyền thực thi cho chúng.
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
                <h3>Phản tái cấu trúc</h3>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/techniques/organizing-data/change-bidirectional-association-to-unidirectional">
                      Thay đổi Quan hệ Song hướng thành Đơn hướng
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
                href="/refactoring/techniques/organizing-data/change-bidirectional-association-to-unidirectional"
                class="btn btn-primary"
              >
                Thay Đổi Liên Kết Hai Chiều Thành Một Chiều&nbsp;
                <span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/techniques/organizing-data/duplicate-observed-data"
                class="btn btn-default"
              >
                <span class="fa fa-arrow-left"></span>&nbsp;Nhân Đôi Dữ Liệu
                Quan Sát
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

export default ContentChangeUnidirectionalAssociationToBidirectional;
