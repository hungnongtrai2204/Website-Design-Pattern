const ContentIntroduceLocalExtension = () => {
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
                <i class="fa fa-home" aria-hidden="true"></i>
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
              <a
                class="type"
                href="/refactoring/techniques/moving-features-between-objects"
              >
                Di Chuyển Chức Năng Giữa Các Đối Tượng
              </a>
            </div>
            <h1 class="title">Giới Thiệu Phần Mở Rộng Cục Bộ</h1>

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
                  Một lớp tiện ích không chứa một số phương thức mà bạn cần.
                  Nhưng bạn không thể thêm các phương thức này vào lớp.
                </p>
              </div>
              <div class="after">
                <h3>Giải Pháp</h3>
                <p>
                  Tạo một lớp mới chứa các phương thức và làm cho nó trở thành
                  lớp con hoặc lớp bao bọc của lớp tiện ích.
                </p>
              </div>
            </div>

            <div class="examples">
              <div class="before-after before-after-container">
                <div class="before">
                  <div class="ba">Before</div>
                  <div class="ba-container">
                    <img
                      src="/images/refactoring/diagrams/Introduce%20Local%20Extension%20-%20Before766c.png?id=3ba103e769691215bed0a50e1de1b80f"
                      alt="Introduce Local Extension - Before"
                      width="209"
                    />
                  </div>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <div class="ba-container">
                    <img
                      src="/images/refactoring/diagrams/Introduce%20Local%20Extension%20-%20After041f.png?id=44bc24e5c4b86e28a9dfc9c67c9e21d1"
                      alt="Introduce Local Extension - After"
                      width="209"
                    />
                  </div>
                </div>
              </div>
            </div>

            <h3>Lý Do Tái Cấu Trúc</h3>
            <p>
              Lớp mà bạn đang sử dụng không có các phương thức mà bạn cần. Điều
              tồi tệ hơn là bạn không thể thêm các phương thức này (vì các lớp
              nằm trong một thư viện của bên thứ ba, ví dụ). Có hai cách giải
              quyết:
            </p>
            <ul>
              <li>
                <p>
                  Tạo một <strong>lớp con</strong> từ lớp liên quan, chứa các
                  phương thức và thừa kế mọi thứ khác từ lớp cha. Cách này dễ
                  dàng hơn nhưng đôi khi bị chặn bởi lớp tiện ích (do{" "}
                  <code>final</code>).
                </p>
              </li>
              <li>
                <p>
                  Tạo một lớp <strong>bao bọc</strong> chứa tất cả các phương
                  thức mới và nơi khác sẽ ủy quyền cho đối tượng liên quan từ
                  lớp tiện ích. Phương pháp này tốn nhiều công sức hơn vì bạn
                  không chỉ cần mã để duy trì mối quan hệ giữa lớp bao bọc và
                  đối tượng tiện ích, mà còn cần một số lượng lớn các phương
                  thức ủy quyền đơn giản để mô phỏng giao diện công khai của lớp
                  tiện ích.
                </p>
              </li>
            </ul>
            <h3>Lợi Ích</h3>
            <ul>
              <li>
                Bằng cách di chuyển các phương thức bổ sung vào một lớp mở rộng
                riêng biệt (bao bọc hoặc lớp con), bạn tránh được việc làm cho
                các lớp khách hàng trở nên rối rắm với mã không phù hợp. Các
                thành phần chương trình trở nên rõ ràng hơn và có thể tái sử
                dụng nhiều hơn.
              </li>
            </ul>
            <h3>Cách Tái Cấu Trúc</h3>
            <ol>
              <li>
                <p>Tạo một lớp mở rộng mới:</p>
                <ul>
                  <li>
                    <p>
                      Lựa chọn A: Làm cho nó trở thành lớp con của lớp tiện ích.
                    </p>
                  </li>
                  <li>
                    <p>
                      Lựa chọn B: Nếu bạn quyết định tạo một lớp bao bọc, tạo
                      một trường trong đó để lưu trữ đối tượng của lớp tiện ích
                      mà sẽ được ủy quyền. Khi sử dụng lựa chọn này, bạn cũng
                      cần tạo các phương thức lặp lại các phương thức công khai
                      của lớp tiện ích và chứa việc ủy quyền đơn giản cho các
                      phương thức của đối tượng tiện ích.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <p>
                  Tạo một constructor sử dụng các tham số của constructor của
                  lớp tiện ích.
                </p>
              </li>
              <li>
                <p>
                  Tạo một constructor chuyển đổi thay thế chỉ lấy đối tượng của
                  lớp gốc trong các tham số của nó. Điều này sẽ giúp thay thế
                  phần mở rộng cho các đối tượng của lớp gốc.
                </p>
              </li>
              <li>
                <p>
                  Tạo các phương thức mở rộng mới trong lớp. Di chuyển các
                  phương thức ngoại lai từ các lớp khác vào lớp này hoặc xóa các
                  phương thức ngoại lai nếu chức năng của chúng đã có sẵn trong
                  phần mở rộng.
                </p>
              </li>
              <li>
                <p>
                  Thay thế việc sử dụng lớp tiện ích bằng lớp mở rộng mới trong
                  các nơi cần chức năng của nó.
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
              <div class="col-xs-12 col-sm-6 col-lg-6">
                <h3>Tái Cấu Trúc Tương Tự</h3>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/techniques/moving-features-between-objects/introduce-foreign-method">
                      Giới Thiệu Phương Thức Ngoại Lai
                    </a>
                  </div>
                  <div class="dd">
                    <p>
                      Nếu bạn chỉ muốn một phương thức đặc biệt, mà không tồn
                      tại trong lớp dịch vụ, và bạn không thể mở rộng nó, hãy
                      chuyển nó sang lớp khách hàng và truyền đối tượng của lớp
                      dịch vụ làm tham số.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-lg-6">
                <h3>Loại Bỏ Mùi Code</h3>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/smells/other/incomplete-library-class">
                      Lớp Thư Viện Không Hoàn Chỉnh
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
                href="/refactoring/techniques/organizing-data"
                class="btn btn-primary"
              >
                Tổ Chức Dữ Liệu&nbsp;
                <span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/techniques/moving-features-between-objects/introduce-foreign-method"
                class="btn btn-default"
              >
                <span class="fa fa-arrow-left"></span>&nbsp;Giới Thiệu Phương
                Thức Ngoại Lai
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

export default ContentIntroduceLocalExtension;
