const ContentChangeBidirectionalAssociationtoUnidirectional = () => {
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
            <h1 class="title">Chuyển Mối Quan Hệ Hai Chiều Thành Một Chiều</h1>

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
                  Bạn có một mối quan hệ hai chiều giữa các lớp, nhưng một trong
                  các lớp không sử dụng các tính năng của lớp còn lại.
                </p>
              </div>
              <div class="after">
                <h3>Giải Pháp</h3>
                <p>Loại bỏ mối quan hệ không được sử dụng.</p>
              </div>
            </div>

            <div class="examples">
              <div class="before-after before-after-container">
                <div class="before">
                  <div class="ba">Before</div>
                  <div class="ba-container">
                    <img
                      src="/images/refactoring/diagrams/Change%20Bidirectional%20Association%20to%20Unidirectional%20-%20Before4c70.png?id=9fc2b8d6c54255295d2ef62d9e015c0a"
                      alt="Change Bidirectional Association to Unidirectional - Before"
                      width="396"
                    />
                  </div>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <div class="ba-container">
                    <img
                      src="/images/refactoring/diagrams/Change%20Bidirectional%20Association%20to%20Unidirectional%20-%20After3a90.png?id=0340aa25a071d7529343ebe3dd469ffd"
                      alt="Change Bidirectional Association to Unidirectional - After"
                      width="396"
                    />
                  </div>
                </div>
              </div>
            </div>

            <h3>Tại Sao Cần Refactor</h3>
            <p>
              Một mối quan hệ hai chiều thường khó bảo trì hơn một mối quan hệ
              một chiều, yêu cầu thêm mã để tạo và xóa các đối tượng liên quan
              một cách chính xác. Điều này làm cho chương trình trở nên phức tạp
              hơn.
            </p>
            <p>
              Ngoài ra, một mối quan hệ hai chiều được thực hiện không đúng cách
              có thể gây ra các vấn đề cho việc thu gom rác (garbage
              collection), dẫn đến bloat bộ nhớ bởi các đối tượng không sử dụng.
            </p>
            <p>
              Ví dụ: garbage collector loại bỏ các đối tượng khỏi bộ nhớ không
              còn được tham chiếu bởi các đối tượng khác. Giả sử một cặp đối
              tượng <code>User</code>-<code>Order</code> được tạo ra, sử dụng,
              và sau đó bị bỏ rơi. Nhưng các đối tượng này sẽ không bị xóa khỏi
              bộ nhớ vì chúng vẫn tham chiếu lẫn nhau. Tuy nhiên, vấn đề này
              ngày càng trở nên ít quan trọng hơn nhờ các tiến bộ trong ngôn ngữ
              lập trình, hiện tự động xác định và loại bỏ các tham chiếu đối
              tượng không sử dụng khỏi bộ nhớ.
            </p>
            <p>
              Cũng có vấn đề về sự phụ thuộc giữa các lớp. Trong một mối quan hệ
              hai chiều, hai lớp phải biết về nhau, nghĩa là chúng không thể
              được sử dụng riêng biệt. Nếu có nhiều mối quan hệ như vậy, các
              phần khác nhau của chương trình trở nên quá phụ thuộc vào nhau và
              bất kỳ thay đổi nào trong một thành phần có thể ảnh hưởng đến các
              thành phần khác.
            </p>
            <h3>Lợi Ích</h3>
            <ul>
              <li>
                <p>
                  Đơn giản hóa lớp không cần mối quan hệ. Ít mã hơn nghĩa là ít
                  bảo trì mã hơn.
                </p>
              </li>
              <li>
                <p>
                  Giảm sự phụ thuộc giữa các lớp. Các lớp độc lập dễ bảo trì hơn
                  vì bất kỳ thay đổi nào đối với một lớp chỉ ảnh hưởng đến lớp
                  đó.
                </p>
              </li>
            </ul>
            <h3>Cách Refactor</h3>
            <ol>
              <li>
                <p>
                  Hãy chắc chắn rằng một trong các điều kiện sau đây là đúng đối
                  với các lớp của bạn:
                </p>
                <ul>
                  <li>
                    <p>Không có mối quan hệ nào được sử dụng.</p>
                  </li>
                  <li>
                    <p>
                      Có cách khác để lấy đối tượng liên kết, chẳng hạn thông
                      qua truy vấn cơ sở dữ liệu.
                    </p>
                  </li>
                  <li>
                    <p>
                      Đối tượng liên kết có thể được truyền làm tham số cho các
                      phương thức sử dụng nó.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <p>
                  Tùy thuộc vào tình huống của bạn, việc sử dụng một trường chứa
                  mối quan hệ với đối tượng khác nên được thay thế bằng một tham
                  số hoặc cuộc gọi phương thức để lấy đối tượng theo cách khác.
                </p>
              </li>
              <li>
                <p>Xóa mã gán đối tượng liên kết cho trường.</p>
              </li>
              <li>
                <p>Xóa trường không sử dụng.</p>
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
                <h3>Phản tái cấu trúc</h3>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/techniques/organizing-data/change-unidirectional-association-to-bidirectional">
                      Chuyển Mối Quan Hệ Một Chiều Thành Hai Chiều
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-lg-6">
                <h3>Loại bỏ mùi mã</h3>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/smells/couplers/inappropriate-intimacy">
                      Thân Mật Không Thích Hợp
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
                href="/refactoring/techniques/organizing-data/replace-magic-number-with-symbolic-constant"
                class="btn btn-primary"
              >
                Thay Số Ma Thuật Bằng Hằng Số Ký Hiệu&nbsp;
                <span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/techniques/organizing-data/change-unidirectional-association-to-bidirectional"
                class="btn btn-default"
              >
                <span class="fa fa-arrow-left"></span>&nbsp;Thay Đổi Liên Kết
                Một Chiều Thành Hai Chiều
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

export default ContentChangeBidirectionalAssociationtoUnidirectional;
