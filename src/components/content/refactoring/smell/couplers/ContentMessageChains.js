const ContentMessageChains = () => {
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
              <a class="type" href="/refactoring/smells/couplers">
                Các Yếu Tố Liên Kết Quá Mức
              </a>
            </div>
            <h1 class="title">Chuỗi Thông Điệp</h1>

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
          <span style="display: inline-block">Message Chains</span>
        </div> */}

            <h3>Dấu hiệu và Triệu chứng</h3>
            <p>
              Trong mã bạn thấy một loạt các lời gọi giống như{" "}
              <code>$a-&gt;b()-&gt;c()-&gt;d()</code>
            </p>
            <figure class="image">
              <img
                width="500"
                height="300"
                src="/images/refactoring/content/smells/message-chains-01e234.png?id=c290ab1d348b3e6ab500c0b949f3d3f8"
                //     srcset="
                //   /images/refactoring/content/smells/message-chains-01-2x.png?id=63332ad44f028e0d60f42d3a56e0280a 2x
                // "
              />
            </figure>
            <h3>Nguyên nhân của Vấn đề</h3>
            <p>
              Một chuỗi thông điệp xảy ra khi một client yêu cầu một đối tượng,
              đối tượng đó lại yêu cầu một đối tượng khác, và cứ tiếp tục như
              vậy. Những chuỗi này có nghĩa là client phụ thuộc vào việc điều
              hướng dọc theo cấu trúc lớp. Bất kỳ thay đổi nào trong các mối
              quan hệ này đều yêu cầu sửa đổi client.
            </p>
            <h3>Xử Lý</h3>
            <ul>
              <li>
                <p>
                  Để xóa một chuỗi thông điệp, hãy sử dụng{" "}
                  <a href="/refactoring/techniques/moving-features-between-objects/hide-delegate">
                    Ẩn Ủy Nhiệm
                  </a>
                  .
                </p>
              </li>
              <li>
                <p>
                  Đôi khi tốt hơn là suy nghĩ về lý do tại sao đối tượng cuối
                  cùng được sử dụng. Có lẽ sẽ hợp lý hơn nếu sử dụng{" "}
                  <a href="/refactoring/techniques/composing-methods/extract-method">
                    Trích Xuất Phương Thức
                  </a>{" "}
                  cho chức năng này và di chuyển nó lên đầu chuỗi, bằng cách sử
                  dụng{" "}
                  <a href="/refactoring/techniques/moving-features-between-objects/move-method">
                    Di Chuyển Phương Thức
                  </a>
                  .
                </p>
              </li>
            </ul>
            <figure class="image">
              <img
                width="500"
                height="300"
                src="/images/refactoring/content/smells/message-chains-02cbe3.png?id=d348325f450e592900b1a4a2ed960b53"
                //     srcset="
                //   /images/refactoring/content/smells/message-chains-02-2x.png?id=07214cc9363ca16dcbaab4bb6e1edeef 2x
                // "
                loading="lazy"
              />
            </figure>
            <h3>Lợi ích</h3>
            <ul>
              <li>
                <p>Giảm sự phụ thuộc giữa các lớp của một chuỗi.</p>
              </li>
              <li>
                <p>Giảm bớt lượng mã không cần thiết.</p>
              </li>
            </ul>
            <figure class="image">
              <img
                width="500"
                height="300"
                src="/images/refactoring/content/smells/message-chains-03d2e4.png?id=e651ac11f057e3e2e7c7786fc4051a66"
                //     srcset="
                //   /images/refactoring/content/smells/message-chains-03-2x.png?id=2e0e5bdf1e249a09f9c8e67f01de6bd1 2x
                // "
                loading="lazy"
              />
            </figure>
            <h3>Khi Nào Nên Bỏ Qua</h3>
            <ul>
              <li>
                Việc ẩn ủy nhiệm quá mức có thể khiến mã nguồn trở nên khó hiểu,
                khó nhận biết nơi thực sự xảy ra chức năng. Nói cách khác, cần
                tránh "mùi"{" "}
                <a href="/refactoring/smells/couplers/middle-man">
                  Người Trung Gian
                </a>{" "}
                quá mức.
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
                href="/refactoring/smells/couplers/middle-man"
                class="btn btn-primary"
              >
                Người Trung Gian&nbsp;
                <span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/smells/couplers/inappropriate-intimacy"
                class="btn btn-default"
              >
                <span class="fa fa-arrow-left"></span>&nbsp;Thân Mật Không Thích
                Hợp
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

export default ContentMessageChains;
