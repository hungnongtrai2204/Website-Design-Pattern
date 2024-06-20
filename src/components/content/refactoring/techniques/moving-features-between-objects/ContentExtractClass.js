const ContentExtractClass = () => {
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
            <h1 class="title">Trích Xuất Lớp</h1>

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
                  Khi một lớp thực hiện công việc của hai lớp, dẫn đến sự cồng
                  kềnh và khó hiểu.
                </p>
              </div>
              <div class="after">
                <h3>Giải Pháp</h3>
                <p>
                  Thay vào đó, tạo một lớp mới và đặt các trường và phương thức
                  chịu trách nhiệm cho chức năng liên quan vào đó.
                </p>
              </div>
            </div>

            <div class="examples">
              <div class="before-after before-after-container">
                <div class="before">
                  <div class="ba">Before</div>
                  <div class="ba-container">
                    <img
                      src="/images/refactoring/diagrams/Extract%20Class%20-%20Before5bcb.png?id=7cb7db0fe2ab0d17f067d411f9e98f15"
                      alt="Extract Class - Before"
                      width="209"
                    />
                  </div>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <div class="ba-container">
                    <img
                      src="/images/refactoring/diagrams/Extract%20Class%20-%20Afterbf8b.png?id=717d80baaa902d09acbaa55fd0539638"
                      alt="Extract Class - After"
                      width="509"
                    />
                  </div>
                </div>
              </div>
            </div>

            <h3>Lý Do Tái Cấu Trúc</h3>
            <p>
              Các lớp luôn bắt đầu rõ ràng và dễ hiểu. Chúng làm đúng công việc
              của mình và không can thiệp vào công việc của các lớp khác. Nhưng
              khi chương trình mở rộng, một phương thức được thêm vào và sau đó
              là một trường... và cuối cùng, một số lớp thực hiện nhiều trách
              nhiệm hơn so với dự kiến ban đầu.
            </p>
            <h3>Lợi Ích</h3>
            <ul>
              <li>
                <p>
                  Phương pháp tái cấu trúc này sẽ giúp duy trì nguyên tắc{" "}
                  <em>Trách Nhiệm Đơn Lẻ</em>. Mã của các lớp sẽ rõ ràng và dễ
                  hiểu hơn.
                </p>
              </li>
              <li>
                <p>
                  Các lớp có trách nhiệm đơn lẻ sẽ đáng tin cậy hơn và dễ dàng
                  chấp nhận thay đổi. Ví dụ, giả sử bạn có một lớp chịu trách
                  nhiệm cho mười điều khác nhau. Khi bạn thay đổi lớp này để cải
                  thiện một điều, bạn có nguy cơ làm hỏng nó cho chín điều khác.
                </p>
              </li>
            </ul>
            <h3>Hạn Chế</h3>
            <ul>
              <li>
                Nếu bạn “lạm dụng” kỹ thuật tái cấu trúc này, bạn sẽ phải sử
                dụng lại kỹ thuật
                <a href="/refactoring/techniques/moving-features-between-objects/inline-class">
                  Lồng Lớp
                </a>
                .
              </li>
            </ul>
            <h3>Cách Tái Cấu Trúc</h3>
            <p>
              Trước khi bắt đầu, quyết định cách chính xác bạn muốn phân chia
              trách nhiệm của lớp.
            </p>
            <ol>
              <li>
                <p>Tạo một lớp mới để chứa chức năng liên quan.</p>
              </li>
              <li>
                <p>
                  Tạo mối quan hệ giữa lớp cũ và lớp mới. Tối ưu, mối quan hệ
                  này là một chiều; điều này cho phép tái sử dụng lớp thứ hai mà
                  không gặp vấn đề gì. Tuy nhiên, nếu bạn nghĩ rằng mối quan hệ
                  hai chiều là cần thiết, điều này luôn có thể được thiết lập.
                </p>
              </li>
              <li>
                <p>
                  Sử dụng{" "}
                  <a href="/refactoring/techniques/moving-features-between-objects/move-field">
                    Di Chuyển Trường
                  </a>{" "}
                  và{" "}
                  <a href="/refactoring/techniques/moving-features-between-objects/move-method">
                    Di Chuyển Phương Thức
                  </a>{" "}
                  cho mỗi trường và phương thức mà bạn đã quyết định chuyển sang
                  lớp mới. Đối với các phương thức, bắt đầu với các phương thức
                  riêng tư (private) để giảm nguy cơ mắc lỗi lớn. Cố gắng di
                  chuyển từng chút một và kiểm tra kết quả sau mỗi lần di chuyển
                  để tránh tích lũy lỗi ở cuối cùng.
                </p>
                <p>
                  Sau khi bạn hoàn tất việc di chuyển, xem xét lại các lớp kết
                  quả. Một lớp cũ với trách nhiệm thay đổi có thể được đổi tên
                  để tăng độ rõ ràng. Kiểm tra lại xem liệu bạn có thể loại bỏ
                  mối quan hệ hai chiều giữa các lớp, nếu có.
                </p>
              </li>
              <li>
                <p>
                  Cũng hãy suy nghĩ về khả năng truy cập vào lớp mới từ bên
                  ngoài. Bạn có thể ẩn lớp khỏi khách hàng hoàn toàn bằng cách
                  làm cho nó riêng tư, quản lý nó qua các trường từ lớp cũ. Hoặc
                  bạn có thể làm cho nó trở thành công khai bằng cách cho phép
                  khách hàng thay đổi các giá trị trực tiếp. Quyết định của bạn
                  ở đây phụ thuộc vào mức độ an toàn cho hành vi của lớp cũ khi
                  có những thay đổi trực tiếp không mong muốn đối với các giá
                  trị trong lớp mới.
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
              <div class="col-xs-12 col-sm-6 col-lg-4">
                <h3>Phản Tái Cấu Trúc</h3>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/techniques/moving-features-between-objects/inline-class">
                      Lồng Lớp
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-lg-4">
                <h3>Các Tái Cấu Trúc Tương Tự</h3>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/techniques/dealing-with-generalization/extract-subclass">
                      Trích Xuất Lớp Con
                    </a>
                  </div>
                </div>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/techniques/organizing-data/replace-data-value-with-object">
                      Thay Thế Giá Trị Dữ Liệu bằng Đối Tượng
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-lg-4">
                <h3>Loại Bỏ Mùi Code</h3>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/smells/dispensables/duplicate-code">
                      Mã Trùng Lặp
                    </a>
                  </div>
                </div>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/smells/bloaters/large-class">
                      Lớp Lớn
                    </a>
                  </div>
                </div>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/smells/change-preventers/divergent-change">
                      Thay Đổi Đa Dạng
                    </a>
                  </div>
                </div>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/smells/bloaters/data-clumps">
                      Các Cụm Dữ Liệu
                    </a>
                  </div>
                </div>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/smells/bloaters/primitive-obsession">
                      Ám Ảnh Nguyên Thủy
                    </a>
                  </div>
                </div>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/smells/oo-abusers/temporary-field">
                      Trường Tạm Thời
                    </a>
                  </div>
                </div>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/smells/couplers/inappropriate-intimacy">
                      Thân Mật Không Phù Hợp
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
                href="/refactoring/techniques/moving-features-between-objects/inline-class"
                class="btn btn-primary"
              >
                Lồng Lớp&nbsp;<span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/techniques/moving-features-between-objects/move-field"
                class="btn btn-default"
              >
                <span class="fa fa-arrow-left"></span>&nbsp;Di Chuyển Trường
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

export default ContentExtractClass;
