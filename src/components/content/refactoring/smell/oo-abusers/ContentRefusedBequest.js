const ContentRefusedBequest = () => {
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
              <a class="type" href="/refactoring/smells/oo-abusers">
                Lạm dụng Hướng Đối Tượng
              </a>
            </div>
            <h1 class="title">Từ Chối Thừa Kế</h1>

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
              <span style={{ display: "inline-block" }}>Refused Bequest</span>
            </div> */}

            <h3>Dấu hiệu và Triệu chứng</h3>
            <p>
              Nếu một lớp con chỉ sử dụng một số phương thức và thuộc tính được
              kế thừa từ lớp cha của nó, thì hệ thống phân cấp bị lệch. Các
              phương thức không cần thiết có thể đơn giản không được sử dụng
              hoặc bị định nghĩa lại và phát sinh ngoại lệ.
            </p>
            <figure class="image">
              <img
                width="500"
                height="300"
                src="/images/refactoring/content/smells/refused-bequest-014f59.png?id=7a1d79e75a3836c22ec865d72c98664e"
                //     srcset="
                //   /images/refactoring/content/smells/refused-bequest-01-2x.png?id=d2e31b7b9fa3326118817b8e0c65e435 2x
                // "
              />
            </figure>
            <h3>Nguyên nhân của vấn đề</h3>
            <p>
              Ai đó đã được thúc đẩy để tạo ra sự kế thừa giữa các lớp chỉ bởi
              mong muốn tái sử dụng mã nguồn trong một lớp cha. Nhưng lớp cha và
              lớp con hoàn toàn khác nhau.
            </p>
            <figure class="image">
              <img
                width="500"
                height="300"
                src="/images/refactoring/content/smells/refused-bequest-02c0d0.png?id=f9b0affd4bbf6fec22c05783fc75562e"
                //     srcset="
                //   /images/refactoring/content/smells/refused-bequest-02-2x.png?id=33b42b7d51bca13f27e4933d24f82751 2x
                // "
                loading="lazy"
              />
            </figure>
            <h3>Cách khắc phục</h3>
            <ul>
              <li>
                <p>
                  Nếu việc kế thừa không có ý nghĩa và lớp con thực sự không có
                  gì chung với lớp cha, hãy loại bỏ kế thừa và thay thế bằng{" "}
                  <a href="/refactorings/dealing-with-generalization/replace-inheritance-with-delegation">
                    Ủy Quyền
                  </a>
                  .
                </p>
              </li>
              <li>
                <p>
                  Nếu việc kế thừa là phù hợp, hãy loại bỏ các trường và phương
                  thức không cần thiết trong lớp con. Tách tất cả các trường và
                  phương thức cần thiết cho lớp con từ lớp cha, đưa chúng vào
                  một lớp cha mới và đặt cả hai lớp kế thừa từ lớp này (
                  <a href="/refactorings/dealing-with-generalization/extract-superclass">
                    Tách Lớp Cha
                  </a>
                  ).
                </p>
              </li>
            </ul>
            <figure class="image">
              <img
                width="500"
                height="300"
                src="/images/refactoring/content/smells/refused-bequest-03ba1b.png?id=2a84293620fa1caf4329fca1f4a44e08"
                //     srcset="
                //   /images/refactoring/content/smells/refused-bequest-03-2x.png?id=6990ba0083e3de07881bd551928e3a79 2x
                // "
                loading="lazy"
              />
            </figure>
            <h3>Lợi ích</h3>
            <ul>
              <li>
                Cải thiện sự rõ ràng và tổ chức của mã nguồn. Bạn sẽ không còn
                phải tự hỏi tại sao lớp <code>Dog</code> lại kế thừa từ lớp{" "}
                <code>Chair</code> (mặc dù cả hai đều có 4 chân).
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
                href="/refactoring/smells/oo-abusers/alternative-classes-with-different-interfaces"
                class="btn btn-primary"
              >
                Các Lớp Thay Thế Với Giao Diện Khác Nhau&nbsp;
                <span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/smells/oo-abusers/temporary-field"
                class="btn btn-default"
              >
                <span class="fa fa-arrow-left"></span>&nbsp;Trường Tạm Thời
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

export default ContentRefusedBequest;
