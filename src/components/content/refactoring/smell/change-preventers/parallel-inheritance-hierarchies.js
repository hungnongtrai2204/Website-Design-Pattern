const ContentParallelInheritanceHierarchies = () => {
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
              <a class="type" href="/refactoring/smells/change-preventers">
                Các Yếu Tố Ngăn Cản Thay Đổi
              </a>
            </div>
            <h1 class="title">Hệ Thống Kế Thừa Song Song</h1>

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
                Parallel Inheritance Hierarchies
              </span>
            </div> */}

            <h3>Dấu hiệu và triệu chứng</h3>
            <p>
              Mỗi khi bạn tạo một lớp con cho một lớp, bạn lại thấy mình cần
              phải tạo một lớp con cho một lớp khác.
            </p>
            <figure class="image">
              <img
                width="500"
                height="300"
                src="/images/refactoring/content/smells/parallel-inheritance-hierarchies-0187af.png?id=9167875f5f0e80256edcc8fcaaed3563"
                srcset="
              /images/refactoring/content/smells/parallel-inheritance-hierarchies-01-2x.png?id=975e6a0589795c59b47ed3aa122beead 2x
            "
              />
            </figure>
            <h3>Nguyên nhân của vấn đề</h3>
            <p>
              Mọi thứ đều ổn miễn là hệ thống phân cấp vẫn nhỏ. Nhưng khi các
              lớp mới được thêm vào, việc thực hiện các thay đổi trở nên ngày
              càng khó khăn hơn.
            </p>
            <h3>Cách xử lý</h3>
            <ul>
              <li>
                Bạn có thể loại bỏ sự trùng lặp trong các hệ thống phân cấp lớp
                song song theo hai bước. Đầu tiên, làm cho các thể hiện của một
                hệ thống phân cấp tham chiếu đến các thể hiện của hệ thống phân
                cấp khác. Sau đó, loại bỏ hệ thống phân cấp trong lớp được tham
                chiếu, bằng cách sử dụng{" "}
                <a href="/refactorings/moving-features-between-objects/move-method">
                  Di Chuyển Phương Thức
                </a>{" "}
                và{" "}
                <a href="/refactorings/moving-features-between-objects/move-field">
                  Di Chuyển Trường
                </a>
                .
              </li>
            </ul>
            <h3>Lợi ích</h3>
            <ul>
              <li>
                <p>Giảm sự trùng lặp mã nguồn.</p>
              </li>
              <li>
                <p>Cải thiện tổ chức mã nguồn.</p>
              </li>
            </ul>
            <figure class="image">
              <img
                width="500"
                height="300"
                src="/images/refactoring/content/smells/parallel-inheritance-hierarchies-02b2cf.png?id=4dca6795d3d087b23ad1027298d6f1dd"
                //     srcset="
                //   /images/refactoring/content/smells/parallel-inheritance-hierarchies-02-2x.png?id=b45e8dde4f4abbe2f0d329964c921960 2x
                // "
                loading="lazy"
              />
            </figure>
            <h3>Khi nào nên bỏ qua</h3>
            <ul>
              <li>
                Đôi khi việc có các hệ thống phân cấp lớp song song chỉ là cách
                để tránh lộn xộn lớn hơn với kiến trúc chương trình. Nếu bạn
                thấy rằng các nỗ lực loại bỏ sự trùng lặp trong các hệ thống
                phân cấp của mình tạo ra mã thậm chí còn xấu hơn, hãy dừng lại,
                hoàn nguyên tất cả các thay đổi của bạn và chấp nhận mã đó.
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
                href="/refactoring/smells/dispensables"
                class="btn btn-primary"
              >
                Thành Phần Dư Thừa&nbsp;
                <span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/smells/change-preventers/shotgun-surgery"
                class="btn btn-default"
              >
                <span class="fa fa-arrow-left"></span>&nbsp;Phẫu Thuật Súng Ngắn
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
                <span class="banner-discount">Скидки!</span>
                <a href="../refactoring/course.html">
                  <img
                    width="300"
                    height="300"
                    loading="lazy"
                    src="../../images/refactoring/course/course-cover-rua60d.jpg?id=e9d6b4015f4c6c48cf06f7479874d8d7"
                  />
                </a>
              </div>
              <div class="banner-text banner-text-ru">
                <p class="text-center">
                  Этот запах кода — малая часть интерактивного
                  <b>онлайн курса по рефакторингу</b>.
                </p>
                <a
                  href="../refactoring/course.html"
                  class="btn btn-secondary btn-block"
                >
                  <i class="fa fa-star" aria-hidden="true"></i> Узнать больше…
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default ContentParallelInheritanceHierarchies;
