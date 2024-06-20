const ContentDataClass = () => {
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
              <a class="type" href="/refactoring/smells/dispensables">
                Thành Phần Dư Thừa
              </a>
            </div>
            <h1 class="title">Lớp Dữ Liệu</h1>

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
              <span style="display: inline-block">Data Class</span>
            </div> */}

            <h3>Dấu hiệu và Triệu chứng</h3>
            <p>
              Một lớp dữ liệu đề cập đến một lớp chỉ chứa các trường và các
              phương thức truy cập thô sơ (getters và setters). Đây chỉ là các
              thùng chứa dữ liệu được sử dụng bởi các lớp khác. Các lớp này
              không chứa bất kỳ chức năng bổ sung nào và không thể tự vận hành
              trên dữ liệu mà chúng sở hữu.
            </p>
            <figure class="image">
              <img
                width="500"
                height="300"
                src="/images/refactoring/content/smells/data-class-01949b.png?id=2ea1583b05a194a056d27ac559545318"
                //     srcset="
                //   /images/refactoring/content/smells/data-class-01-2x.png?id=2beb8150d4ba31ca37d6515495ceff2d 2x
                // "
              />
            </figure>
            <h3>Lý do của Vấn đề</h3>
            <p>
              Điều này là bình thường khi một lớp mới được tạo ra chỉ chứa vài
              trường công khai (và có thể cả một vài phương thức getter/setter).
              Nhưng sức mạnh thực sự của các đối tượng là chúng có thể chứa các
              loại hành vi hoặc các thao tác trên dữ liệu của chúng.
            </p>
            <h3>Xử Lý</h3>
            <ul>
              <li>
                <p>
                  Nếu một lớp chứa các trường công khai, hãy sử dụng{" "}
                  <a href="/refactoring/techniques/organizing-data/encapsulate-field">
                    Đóng Gói Trường
                  </a>{" "}
                  để ẩn chúng khỏi truy cập trực tiếp và yêu cầu truy cập thông
                  qua các phương thức getter và setter.
                </p>
              </li>
              <li>
                <p>
                  Sử dụng{" "}
                  <a href="/refactoring/techniques/organizing-data/encapsulate-collection">
                    Đóng Gói Bộ Sưu Tập
                  </a>{" "}
                  cho dữ liệu được lưu trữ trong các bộ sưu tập (chẳng hạn như
                  mảng).
                </p>
              </li>
              <li>
                <p>
                  Xem lại mã nguồn của khách hàng sử dụng lớp này. Trong đó, bạn
                  có thể tìm thấy chức năng mà tốt hơn nên được đặt trong lớp dữ
                  liệu. Nếu đúng như vậy, hãy sử dụng{" "}
                  <a href="/refactoring/techniques/moving-features-between-objects/move-method">
                    Di Chuyển Phương Thức
                  </a>{" "}
                  và{" "}
                  <a href="/refactoring/techniques/composing-methods/extract-method">
                    Trích Xuất Phương Thức
                  </a>{" "}
                  để di chuyển chức năng này vào lớp dữ liệu.
                </p>
              </li>
              <li>
                <p>
                  Sau khi lớp đã được điền đầy đủ các phương thức được suy nghĩ
                  kỹ lưỡng, bạn có thể muốn loại bỏ các phương thức cũ cho truy
                  cập dữ liệu mà cung cấp quyền truy cập quá rộng vào dữ liệu
                  của lớp. Để làm điều này,{" "}
                  <a href="/refactoring/techniques/simplifying-method-calls/remove-setting-method">
                    Loại Bỏ Phương Thức Cài Đặt
                  </a>{" "}
                  và{" "}
                  <a href="/refactoring/techniques/simplifying-method-calls/hide-method">
                    Ẩn Phương Thức
                  </a>{" "}
                  có thể hữu ích.
                </p>
              </li>
            </ul>
            <figure class="image">
              <img
                width="500"
                height="300"
                src="/images/refactoring/content/smells/data-class-024cf2.png?id=db0eb15f9f229bafd8423b2cfd09f910"
                srcset="
              /images/refactoring/content/smells/data-class-02-2x.png?id=fb9b6d670232d6effe790980e6b388ec 2x
            "
                loading="lazy"
              />
            </figure>
            <h3>Lợi ích</h3>
            <ul>
              <li>
                <p>
                  Cải thiện sự hiểu biết và tổ chức của mã nguồn. Các thao tác
                  trên dữ liệu cụ thể bây giờ được tập trung tại một nơi, thay
                  vì rải rác khắp mã nguồn.
                </p>
              </li>
              <li>
                <p>Giúp bạn phát hiện sự trùng lặp của mã khách hàng.</p>
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

          <nav class="prev-next">
            <div class="next">
              <h4>ĐỌC TIẾP</h4>
              <a
                rel="next"
                href="/refactoring/smells/dispensables/dead-code"
                class="btn btn-primary"
              >
                Mã Chết&nbsp;
                <span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/smells/dispensables/lazy-class"
                class="btn btn-default"
              >
                <span class="fa fa-arrow-left"></span>&nbsp;Lớp Lười Biếng
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

export default ContentDataClass;
