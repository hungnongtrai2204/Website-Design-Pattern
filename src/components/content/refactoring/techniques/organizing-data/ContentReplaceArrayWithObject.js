const ContentReplaceArrayWithObject = () => {
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
            <h1 class="title">Thay Thế Mảng Bằng Đối Tượng</h1>

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

            <blockquote>
              <p>
                Kỹ thuật tái cấu trúc này là một trường hợp đặc biệt của kỹ
                thuật{" "}
                <a href="/refactoring/techniques/organizing-data/replace-data-value-with-object">
                  Thay Thế Giá Trị Dữ Liệu Bằng Đối Tượng
                </a>
                .
              </p>
            </blockquote>

            <div class="before-after-container">
              <div class="before">
                <h3>Vấn Đề</h3>
                <p>Bạn có một mảng chứa các loại dữ liệu khác nhau.</p>
              </div>
              <div class="after">
                <h3>Giải Pháp</h3>
                <p>
                  Thay thế mảng bằng một đối tượng sẽ có các trường riêng biệt
                  cho mỗi phần tử.
                </p>
              </div>
            </div>

            <div class="examples">
              <h3>Java</h3>
              <div
                class="before-after before-after-container java"
                data-lang="java"
              >
                <div class="before">
                  <div class="ba">Before</div>
                  <pre class="code" lang="java">
                    {`String[] row = new String[2];
row[0] = "Liverpool";
row[1] = "15";`}
                  </pre>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <pre class="code" lang="java">
                    {`Performance row = new Performance();
row.setName("Liverpool");
row.setWins("15");`}
                  </pre>
                </div>
              </div>
              <h3>C#</h3>
              <div
                class="before-after before-after-container csharp"
                data-lang="csharp"
              >
                <div class="before">
                  <div class="ba">Before</div>
                  <pre class="code" lang="csharp">
                    {`string[] row = new string[2];
row[0] = "Liverpool";
row[1] = "15";`}
                  </pre>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <pre class="code" lang="csharp">
                    {`Performance row = new Performance();
row.SetName("Liverpool");
row.SetWins("15");`}
                  </pre>
                </div>
              </div>
              <h3>PHP</h3>
              <div
                class="before-after before-after-container php"
                data-lang="php"
              >
                <div class="before">
                  <div class="ba">Before</div>
                  <pre class="code" lang="php">
                    {`$row = [];
$row[0] = "Liverpool";
$row[1] = 15;`}
                  </pre>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <pre class="code" lang="php">
                    {`$row = new Performance;
$row->setName("Liverpool");
$row->setWins(15);`}
                  </pre>
                </div>
              </div>
              <h3>Python</h3>
              <div
                class="before-after before-after-container python"
                data-lang="python"
              >
                <div class="before">
                  <div class="ba">Before</div>
                  <pre class="code" lang="python">
                    {`row = [None * 2]
row[0] = "Liverpool"
row[1] = "15"`}
                  </pre>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <pre class="code" lang="python">
                    {`row = Performance()
row.setName("Liverpool")
row.setWins("15")`}
                  </pre>
                </div>
              </div>
              <h3>Typescript</h3>
              <div
                class="before-after before-after-container typescript"
                data-lang="typescript"
              >
                <div class="before">
                  <div class="ba">Before</div>
                  <pre class="code" lang="typescript">
                    {`let row = new Array(2);
row[0] = "Liverpool";
row[1] = "15";`}
                  </pre>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <pre class="code" lang="typescript">
                    {`let row = new Performance();
row.setName("Liverpool");
row.setWins("15");`}
                  </pre>
                </div>
              </div>
            </div>

            <h3>Tại Sao Cần Tái Cấu Trúc</h3>
            <p>
              Mảng là một công cụ tuyệt vời để lưu trữ dữ liệu và các tập hợp
              cùng loại. Nhưng nếu bạn sử dụng mảng như các hộp thư, lưu trữ tên
              người dùng ở hộp số 1 và địa chỉ của người dùng ở hộp số 14, thì
              một ngày nào đó bạn sẽ rất không vui. Cách tiếp cận này dẫn đến
              các lỗi nghiêm trọng khi ai đó đặt sai thứ vào "hộp" và cũng yêu
              cầu thời gian của bạn để tìm hiểu dữ liệu nào được lưu trữ ở đâu.
            </p>
            <h3>Lợi Ích</h3>
            <ul>
              <li>
                <p>
                  Trong lớp kết quả, bạn có thể đặt tất cả các hành vi liên quan
                  đã được lưu trữ trước đó trong lớp chính hoặc ở nơi khác.
                </p>
              </li>
              <li>
                <p>
                  Các trường của một lớp dễ dàng để tài liệu hóa hơn là các phần
                  tử của một mảng.
                </p>
              </li>
            </ul>
            <h3>Cách Tái Cấu Trúc</h3>
            <ol>
              <li>
                <p>
                  Tạo lớp mới sẽ chứa dữ liệu từ mảng. Đặt chính mảng trong lớp
                  như một trường công khai.
                </p>
              </li>
              <li>
                <p>
                  Tạo một trường để lưu trữ đối tượng của lớp này trong lớp gốc.
                  Đừng quên cũng tạo đối tượng trong nơi mà bạn khởi tạo mảng dữ
                  liệu.
                </p>
              </li>
              <li>
                <p>
                  Trong lớp mới, tạo các phương thức truy cập từng phần tử của
                  mảng. Đặt cho chúng những tên tự giải thích chỉ ra chúng làm
                  gì. Đồng thời, thay thế mỗi lần sử dụng phần tử của mảng trong
                  mã chính bằng phương thức truy cập tương ứng.
                </p>
              </li>
              <li>
                <p>
                  Khi các phương thức truy cập đã được tạo cho tất cả các phần
                  tử, làm cho mảng trở nên riêng tư.
                </p>
              </li>
              <li>
                <p>
                  Đối với mỗi phần tử của mảng, tạo một trường riêng tư trong
                  lớp và sau đó thay đổi các phương thức truy cập để chúng sử
                  dụng trường này thay vì mảng.
                </p>
              </li>
              <li>
                <p>Khi tất cả dữ liệu đã được di chuyển, xóa mảng.</p>
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
                <h3>Các Tái Cấu Trúc Tương Tự</h3>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/techniques/organizing-data/replace-data-value-with-object">
                      Thay Thế Giá Trị Dữ Liệu Bằng Đối Tượng
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-lg-6">
                <h3>Loại Bỏ Mùi Mã</h3>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/smells/bloaters/primitive-obsession">
                      Ám Ảnh Nguyên Thủy
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
                href="/refactoring/techniques/organizing-data/duplicate-observed-data"
                class="btn btn-primary"
              >
                Nhân Đôi Dữ Liệu Quan Sát&nbsp;
                <span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/techniques/organizing-data/change-reference-to-value"
                class="btn btn-default"
              >
                <span class="fa fa-arrow-left"></span>&nbsp;Thay Đổi Tham Chiếu
                Thành Giá Trị
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

export default ContentReplaceArrayWithObject;
