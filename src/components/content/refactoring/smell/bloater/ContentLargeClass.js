const ContentLargeClass = () => {
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
              <a class="type" href="/refactoring/smells/bloaters">
                Mã Phình To
              </a>
            </div>
            <h1 class="title">Lớp Lớn</h1>

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
            <span style={{display: "inline-block"}} >Large Class</span>
          </div> */}

            <h3>Dấu Hiệu và Triệu Chứng</h3>
            <p>
              Một lớp chứa quá nhiều trường (fields), phương thức (methods) và
              dòng code.
            </p>
            <figure class="image">
              <img
                width="500"
                height="300"
                src="/images/refactoring/content/smells/large-class-01eaa7.png?id=acac82f25cc90aaa413c2daefebf0e4b"
                //   srcset="
                //     /images/refactoring/content/smells/large-class-01-2x.png?id=44aea94399b8bd6398a01b46b5bc7f29 2x
                //   "
              />
            </figure>
            <h3>Nguyên Nhân Của Vấn Đề</h3>
            <p>
              Các lớp thường bắt đầu nhỏ. Nhưng theo thời gian, chúng trở nên
              phình to khi chương trình phát triển.
            </p>
            <p>
              Tương tự như trường hợp của các phương thức dài, các lập trình
              viên thường thấy việc đặt một tính năng mới vào một lớp hiện có dễ
              dàng hơn về mặt tinh thần so với việc tạo một lớp mới cho tính
              năng đó.
            </p>
            <figure class="image">
              <img
                width="500"
                height="300"
                src="/images/refactoring/content/smells/large-class-027a0b.png?id=973b37334ae57489945a88b9327f81e3"
                //   srcset="
                //     /images/refactoring/content/smells/large-class-02-2x.png?id=f51627abdfb96fad29cb114d00795fec 2x
                //   "
                loading="lazy"
              />
            </figure>
            <h3>Cách Xử Lý</h3>
            <p>
              Khi một lớp đang gánh vác quá nhiều trách nhiệm (chức năng), hãy
              nghĩ đến việc chia nhỏ nó:
            </p>
            <ul>
              <li>
                <p>
                  <a href="/refactoring/techniques/moving-features-between-objects/extract-class">
                    Trích Xuất Lớp
                  </a>{" "}
                  hữu ích nếu một phần hành vi của lớp lớn có thể được tách ra
                  thành một thành phần riêng biệt.
                </p>
              </li>
              <li>
                <p>
                  <a href="/refactoring/techniques/dealing-with-generalization/extract-subclass">
                    Trích Xuất Lớp Con
                  </a>{" "}
                  hữu ích nếu một phần hành vi của lớp lớn có thể được thực hiện
                  theo nhiều cách khác nhau hoặc được sử dụng trong những trường
                  hợp hiếm gặp.
                </p>
              </li>
              <li>
                <p>
                  <a href="/refactoring/techniques/dealing-with-generalization/extract-interface">
                    Trích Xuất Giao Diện
                  </a>{" "}
                  hữu ích nếu cần có một danh sách các hoạt động và hành vi mà
                  client có thể sử dụng.
                </p>
              </li>
              <li>
                <p>
                  Nếu một lớp lớn chịu trách nhiệm về giao diện đồ họa, bạn có
                  thể thử chuyển một số dữ liệu và hành vi của nó sang một đối
                  tượng miền riêng biệt. Khi làm như vậy, có thể cần phải lưu
                  trữ các bản sao của một số dữ liệu ở hai nơi và giữ cho dữ
                  liệu nhất quán. Kỹ thuật{" "}
                  <a href="/refactoring/techniques/organizing-data/duplicate-observed-data">
                    Sao Chép Dữ Liệu Quan Sát
                  </a>{" "}
                  cung cấp một cách để làm điều này.
                </p>
              </li>
            </ul>
            <figure class="image">
              <img
                width="500"
                height="300"
                src="/images/refactoring/content/smells/large-class-030a79.png?id=f0a0109f731dbc420ffe385cb658f0de"
                // srcset="
                //   /images/refactoring/content/smells/large-class-03-2x.png?id=2e497ff65fc035f0d51f908361daee78 2x
                // "
                loading="lazy"
              />
            </figure>
            <h3>Lợi Ích</h3>
            <ul>
              <li>
                <p>
                  Tái cấu trúc các lớp này giúp các nhà phát triển không cần
                  phải nhớ một số lượng lớn các thuộc tính của một lớp.
                </p>
              </li>
              <li>
                <p>
                  Trong nhiều trường hợp, việc chia nhỏ các lớp lớn thành các
                  phần giúp tránh được việc lặp lại mã và chức năng.
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
                    autoPlay
                    muted
                    playsinline
                    width="200"
                    height="200"
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
                href="/refactoring/smells/bloaters/primitive-obsession"
                class="btn btn-primary"
              >
                Ám Ảnh Nguyên Thủy&nbsp;
                <span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/smells/bloaters/long-method"
                class="btn btn-default"
              >
                <span class="fa fa-arrow-left"></span>&nbsp;Phương Thức Dài
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

export default ContentLargeClass;
