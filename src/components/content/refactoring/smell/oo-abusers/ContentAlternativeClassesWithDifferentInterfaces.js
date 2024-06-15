const ContentAlternativeClassesWithDifferentInterfaces = () => {
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
            <h1 class="title">Các Lớp Thay Thế Với Giao Diện Khác Nhau</h1>

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
                Alternative Classes with Different Interfaces
              </span>
            </div> */}

            <h3>Dấu hiệu và Triệu chứng</h3>
            <p>
              Hai lớp thực hiện các chức năng giống hệt nhau nhưng có tên phương
              thức khác nhau.
            </p>
            <figure class="image">
              <img
                width="500"
                height="300"
                src="/images/refactoring/content/smells/alternative-classes-with-different-interfaces-011fe4.png?id=e5fccb2e5390e0a62b5c9f56029bd361"
                //     srcset="
                //   /images/refactoring/content/smells/alternative-classes-with-different-interfaces-01-2x.png?id=00f0e52d679514e0c16e836e7cee5c24 2x
                // "
              />
            </figure>
            <h3>Nguyên nhân của vấn đề</h3>
            <p>
              Lập trình viên tạo ra một trong các lớp có thể không biết rằng đã
              tồn tại một lớp có chức năng tương đương.
            </p>
            <h3>Cách khắc phục</h3>
            <p>Cố gắng đặt giao diện của các lớp theo một mẫu số chung:</p>
            <ul>
              <li>
                <p>
                  <a href="/refactorings/simplifying-method-calls/rename-method">
                    Đổi Tên Phương Thức
                  </a>{" "}
                  để chúng giống nhau trong tất cả các lớp thay thế.
                </p>
              </li>
              <li>
                <p>
                  <a href="/refactorings/moving-features-between-objects/move-method">
                    Di Chuyển Phương Thức
                  </a>
                  ,{" "}
                  <a href="/refactorings/simplifying-method-calls/add-parameter">
                    Thêm Tham Số
                  </a>{" "}
                  và{" "}
                  <a href="/refactorings/simplifying-method-calls/parameterize-method">
                    Tham Số Hóa Phương Thức
                  </a>{" "}
                  để làm cho chữ ký và triển khai của các phương thức giống
                  nhau.
                </p>
              </li>
              <li>
                <p>
                  Nếu chỉ một phần chức năng của các lớp bị trùng lặp, hãy thử
                  sử dụng{" "}
                  <a href="/refactorings/dealing-with-generalization/extract-superclass">
                    Tách Lớp Cha
                  </a>
                  . Trong trường hợp này, các lớp hiện tại sẽ trở thành lớp con.
                </p>
              </li>
              <li>
                <p>
                  Sau khi bạn đã xác định được phương pháp điều trị nào cần sử
                  dụng và thực hiện nó, bạn có thể xóa một trong các lớp.
                </p>
              </li>
            </ul>
            <h3>Lợi ích</h3>
            <ul>
              <li>
                <p>
                  Bạn loại bỏ được mã nguồn trùng lặp không cần thiết, làm cho
                  mã nguồn kết quả bớt cồng kềnh.
                </p>
              </li>
              <li>
                <p>
                  Mã nguồn trở nên dễ đọc và dễ hiểu hơn (bạn không còn phải
                  đoán lý do tại sao lại có một lớp thứ hai thực hiện các chức
                  năng giống hệt như lớp đầu tiên).
                </p>
              </li>
            </ul>
            <figure class="image">
              <img
                width="500"
                height="300"
                src="/images/refactoring/content/smells/alternative-classes-with-different-interfaces-02ece4.png?id=669874e082965799a70076a120288c6a"
                //     srcset="
                //   /images/refactoring/content/smells/alternative-classes-with-different-interfaces-02-2x.png?id=db011d16b1dcea2e68d252eb435e63ef 2x
                // "
                loading="lazy"
              />
            </figure>
            <h3>Khi nào nên bỏ qua</h3>
            <ul>
              <li>
                Đôi khi việc hợp nhất các lớp là không thể hoặc khó đến mức
                không có ý nghĩa. Một ví dụ là khi các lớp thay thế nằm trong
                các thư viện khác nhau, mỗi thư viện có phiên bản riêng của lớp
                đó.
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
                href="/refactoring/smells/change-preventers"
                class="btn btn-primary"
              >
                Các Yếu Tố Ngăn Cản Thay Đổi&nbsp;
                <span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/smells/oo-abusers/refused-bequest"
                class="btn btn-default"
              >
                <span class="fa fa-arrow-left"></span>&nbsp;Từ Chối Thừa Kế
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

export default ContentAlternativeClassesWithDifferentInterfaces;
