const ContentHideDelegate = () => {
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
            <h1 class="title">Ẩn Đại Diện</h1>

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
                  Khách hàng lấy đối tượng B từ một trường hoặc phương thức của
                  đối tượng A. Sau đó, khách hàng gọi một phương thức của đối
                  tượng B.
                </p>
              </div>
              <div class="after">
                <h3>Giải Pháp</h3>
                <p>
                  Tạo một phương thức mới trong lớp A để ủy quyền gọi phương
                  thức đó cho đối tượng B. Bây giờ, khách hàng không biết và
                  không phụ thuộc vào đối tượng B.
                </p>
              </div>
            </div>

            <div class="examples">
              <div class="before-after before-after-container">
                <div class="before">
                  <div class="ba">Before</div>
                  <div class="ba-container">
                    <img
                      src="/images/refactoring/diagrams/Hide%20Delegate%20-%20Before0412.png?id=f7de1016e76545f7c51af09463ce5f4c"
                      alt="Hide Delegate - Before"
                      width="415"
                    />
                  </div>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <div class="ba-container">
                    <img
                      src="/images/refactoring/diagrams/Hide%20Delegate%20-%20After921c.png?id=f51110f3e0d4423b3f9088e92fc3dce4"
                      alt="Hide Delegate - After"
                      width="153"
                    />
                  </div>
                </div>
              </div>
            </div>

            <h3>Lý Do Tái Cấu Trúc</h3>
            <p>Đầu tiên, hãy nhìn vào thuật ngữ:</p>
            <ul>
              <li>
                <p>
                  <em>Server</em> là đối tượng mà khách hàng có quyền truy cập
                  trực tiếp.
                </p>
              </li>
              <li>
                <p>
                  <em>Delegate</em> là đối tượng cuối cùng chứa chức năng mà
                  khách hàng cần.
                </p>
              </li>
            </ul>
            <p>
              Một chuỗi gọi xuất hiện khi một khách hàng yêu cầu một đối tượng
              từ một đối tượng khác, sau đó đối tượng thứ hai yêu cầu một đối
              tượng khác, và cứ tiếp tục như vậy. Những chuỗi gọi này làm cho
              khách hàng phải tham gia vào việc điều hướng dọc theo cấu trúc
              lớp. Bất kỳ sự thay đổi nào trong các mối quan hệ này sẽ yêu cầu
              thay đổi phía khách hàng.
            </p>
            <h3>Lợi Ích</h3>
            <ul>
              <li>
                Ẩn việc ủy quyền khỏi khách hàng. Càng ít mã khách hàng cần biết
                về chi tiết của các mối quan hệ giữa các đối tượng, càng dễ dàng
                để thực hiện các thay đổi đối với chương trình của bạn.
              </li>
            </ul>
            <h3>Hạn Chế</h3>
            <ul>
              <li>
                Nếu bạn cần tạo ra một số lượng lớn các phương thức ủy quyền,{" "}
                <em>lớp server</em> có thể trở thành một cầu nối không cần
                thiết, dẫn đến việc dư thừa{" "}
                <a href="/refactoring/smells/couplers/middle-man">
                  Người Trung Gian
                </a>
                .
              </li>
            </ul>
            <h3>Cách Tái Cấu Trúc</h3>
            <ol>
              <li>
                <p>
                  Đối với mỗi phương thức của <em>lớp delegate</em> được gọi bởi
                  khách hàng, tạo một phương thức trong <em>lớp server</em> để
                  ủy quyền gọi phương thức đó cho <em>lớp delegate</em>.
                </p>
              </li>
              <li>
                <p>
                  Thay đổi mã khách hàng để nó gọi các phương thức của{" "}
                  <em>lớp server</em>.
                </p>
              </li>
              <li>
                <p>
                  ếu các thay đổi của bạn giải phóng khách hàng khỏi việc cần{" "}
                  <em>lớp delegate</em>, bạn có thể loại bỏ phương thức truy cập
                  vào <em>lớp delegate</em> từ <em>lớp server</em> (phương thức
                  ban đầu được sử dụng để lấy <em>lớp delegate</em>).
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
                <h3>Phản Tái Cấu Trúc</h3>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/techniques/moving-features-between-objects/remove-middle-man">
                      Loại Bỏ Người Trung Gian
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-lg-6">
                <h3>Loại Bỏ Mùi Code</h3>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/smells/couplers/message-chains">
                      Chuỗi Tin Nhắn
                    </a>
                  </div>
                </div>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/smells/couplers/inappropriate-intimacy">
                      Sự Thân Mật Không Phù Hợp
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
                href="/refactoring/techniques/moving-features-between-objects/remove-middle-man"
                class="btn btn-primary"
              >
                Xóa Trung Gian&nbsp;<span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/techniques/moving-features-between-objects/inline-class"
                class="btn btn-default"
              >
                <span class="fa fa-arrow-left"></span>&nbsp;Lồng Lớp
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

export default ContentHideDelegate;
