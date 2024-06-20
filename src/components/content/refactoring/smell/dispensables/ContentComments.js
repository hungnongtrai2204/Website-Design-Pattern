const ContentComments = () => {
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
            <h1 class="title">Nhận Xét</h1>

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
              <span style="display: inline-block">Comments</span>
            </div> */}

            <h3>Dấu hiệu và Triệu chứng</h3>
            <p>Một phương thức được lấp đầy bằng các nhận xét giải thích.</p>
            <figure class="image">
              <img
                width="500"
                height="300"
                src="/images/refactoring/content/smells/comments-01cb86.png?id=584958123f3b902e0ad0895d879509b9"
                srcset="
              /images/refactoring/content/smells/comments-01-2x.png?id=15fe22a84b974b19a752ad169ae999ae 2x
            "
              />
            </figure>
            <h3>Lý do cho Vấn đề</h3>
            <p>
              Các nhận xét thường được tạo ra với ý định tốt nhất khi tác giả
              nhận ra rằng mã nguồn của mình không trực quan hoặc rõ ràng. Trong
              những trường hợp như vậy, các nhận xét giống như một chất khử mùi
              che giấu mùi khó chịu của mã nguồn có thể được cải thiện.
            </p>
            <blockquote>
              <p>
                Nhận xét tốt nhất là một tên gọi tốt cho một phương thức hoặc
                lớp.
              </p>
            </blockquote>
            <p>
              Nếu bạn cảm thấy rằng một đoạn mã không thể hiểu được mà không có
              nhận xét, hãy thử thay đổi cấu trúc mã sao cho nhận xét trở nên
              không cần thiết.
            </p>
            <h3>Cách Điều Trị</h3>
            <ul>
              <li>
                <p>
                  Nếu một nhận xét nhằm giải thích một biểu thức phức tạp, biểu
                  thức đó nên được chia thành các biểu thức con dễ hiểu hơn bằng
                  cách sử dụng{" "}
                  <a href="/refactoring/techniques/composing-methods/extract-variable">
                    Kỹ Thuật Trích Xuất Biến
                  </a>
                  .
                </p>
              </li>
              <li>
                <p>
                  Nếu một nhận xét giải thích một phần của mã, phần này có thể
                  được chuyển thành một phương thức riêng biệt thông qua{" "}
                  <a href="/refactoring/techniques/composing-methods/extract-method">
                    Kỹ Thuật Trích Xuất Phương Thức
                  </a>
                  . Tên của phương thức mới có thể được lấy từ chính văn bản
                  nhận xét.
                </p>
              </li>
              <li>
                <p>
                  Nếu một phương thức đã được trích xuất, nhưng vẫn cần nhận xét
                  để giải thích phương thức đó làm gì, hãy đặt tên cho phương
                  thức một cách tự giải thích. Sử dụng{" "}
                  <a href="/refactoring/techniques/simplifying-method-calls/rename-method">
                    Kỹ Thuật Đổi Tên Phương Thức
                  </a>{" "}
                  cho việc này.
                </p>
              </li>
              <li>
                <p>
                  Nếu bạn cần xác nhận các quy tắc về trạng thái cần thiết để hệ
                  thống hoạt động, hãy sử dụng{" "}
                  <a href="/refactoring/techniques/simplifying-conditional-expressions/introduce-assertion">
                    Kỹ Thuật Giới Thiệu Khẳng Định
                  </a>
                  .
                </p>
              </li>
            </ul>
            <h3>Lợi Ích</h3>
            <ul>
              <li>Mã trở nên trực quan và dễ hiểu hơn.</li>
            </ul>
            <figure class="image">
              <img
                width="500"
                height="300"
                src="/images/refactoring/content/smells/comments-02b499.png?id=266f82bb7081957d409ae690c2c66483"
                //     srcset="
                //   /images/refactoring/content/smells/comments-02-2x.png?id=57a83d2b705347aa0d0a6d197a1f9d3c 2x
                // "
                loading="lazy"
              />
            </figure>
            <h3>Khi Nào Bỏ Qua</h3>
            <p>Đôi khi, chú thích có thể hữu ích:</p>
            <ul>
              <li>
                <p>
                  Khi giải thích lý do <strong>tại sao</strong> một cái gì đó
                  được triển khai theo cách cụ thể.
                </p>
              </li>
              <li>
                <p>
                  Khi giải thích các thuật toán phức tạp (khi tất cả các phương
                  pháp khác để đơn giản hóa thuật toán đã được thử và không hiệu
                  quả).
                </p>
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
                href="/refactoring/smells/dispensables/duplicate-code"
                class="btn btn-primary"
              >
                Mã Nguồn Trùng Lặp&nbsp;
                <span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/smells/dispensables"
                class="btn btn-default"
              >
                <span class="fa fa-arrow-left"></span>&nbsp;Thành Phần Dư Thừa
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

export default ContentComments;
