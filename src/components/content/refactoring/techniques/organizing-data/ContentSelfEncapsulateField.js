const ContentSelfEncapsulateField = () => {
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
            <h1 class="title">Tự Bao Gói Trường</h1>

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
                Tự bao gói trường khác với
                <a href="/refactoring/techniques/organizing-data/encapsulate-field">
                  Bao Gói Trường
                </a>{" "}
                thông thường: kỹ thuật tái cấu trúc được đề cập ở đây được thực
                hiện trên một trường riêng tư.
              </p>
            </blockquote>

            <div class="before-after-container">
              <div class="before">
                <h3>Vấn Đề</h3>
                <p>
                  Bạn sử dụng truy cập trực tiếp vào các trường riêng tư trong
                  một lớp.
                </p>
              </div>
              <div class="after">
                <h3>Giải Pháp</h3>
                <p>
                  Tạo một getter và setter cho trường, và chỉ sử dụng chúng để
                  truy cập vào trường.
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
                    {`class Range {
  private int low, high;
  boolean includes(int arg) {
    return arg >= low && arg <= high;
  }
}`}
                  </pre>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <pre class="code" lang="java">
                    {`class Range {
  private int low, high;
  boolean includes(int arg) {
    return arg >= getLow() && arg <= getHigh();
  }
  int getLow() {
    return low;
  }
  int getHigh() {
    return high;
  }
}`}
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
                    {`class Range 
{
  private int low, high;
  
  bool Includes(int arg) 
  {
    return arg >= low && arg <= high;
  }
}`}
                  </pre>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <pre class="code" lang="csharp">
                    {`class Range 
{
  private int low, high;
  
  int Low {
    get { return low; }
  }
  int High {
    get { return high; }
  }
  
  bool Includes(int arg) 
  {
    return arg >= Low && arg <= High;
  }
}`}
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
                    {`private $low;
private $high;

function includes($arg) {
  return $arg >= $this->low && $arg <= $this->high;
}`}
                  </pre>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <pre class="code" lang="php">
                    {`private $low;
private $high;

function includes($arg) {
  return $arg >= $this->getLow() && $arg <= $this->getHigh();
}
function getLow() {
  return $this->low;
}
function getHigh() {
  return $this->high;
}`}
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
                    {`class Range {
  private low: number
  private high: number;
  includes(arg: number): boolean {
    return arg >= low && arg <= high;
  }
}`}
                  </pre>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <pre class="code" lang="typescript">
                    {`class Range {
  private low: number
  private high: number;
  includes(arg: number): boolean {
    return arg >= getLow() && arg <= getHigh();
  }
  getLow(): number {
    return low;
  }
  getHigh(): number {
    return high;
  }
}`}
                  </pre>
                </div>
              </div>
            </div>

            <h3>Lý Do Tái Cấu Trúc</h3>
            <p>
              Đôi khi truy cập trực tiếp vào một trường riêng tư trong một lớp
              không đủ linh hoạt. Bạn muốn có thể khởi tạo giá trị trường khi
              truy vấn đầu tiên được thực hiện hoặc thực hiện các thao tác nhất
              định trên các giá trị mới của trường khi chúng được gán, hoặc có
              thể thực hiện tất cả điều này theo nhiều cách khác nhau trong các
              lớp con.
            </p>
            <h3>Lợi Ích</h3>
            <ul>
              <li>
                <p>
                  <em>Truy cập gián tiếp vào các trường</em> là khi một trường
                  được thao tác thông qua các phương thức truy cập (getter và
                  setter). Cách tiếp cận này linh hoạt hơn nhiều so với{" "}
                  <em>truy cập trực tiếp vào các trường</em>.
                </p>
                <ul>
                  <li>
                    <p>
                      Đầu tiên, bạn có thể thực hiện các thao tác phức tạp khi
                      dữ liệu trong trường được đặt hoặc nhận.{" "}
                      <em>Khởi tạo lười biếng</em> và{" "}
                      <em>xác thực các giá trị trường</em> được dễ dàng thực
                      hiện bên trong các getter và setter của trường.
                    </p>
                  </li>
                  <li>
                    <p>
                      Thứ hai và quan trọng hơn, bạn có thể tái định nghĩa các
                      getter và setter trong các lớp con.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <p>
                  Bạn có tùy chọn không triển khai setter cho một trường nào đó.
                  Giá trị trường sẽ được chỉ định chỉ trong hàm tạo, do đó làm
                  cho trường không thể thay đổi suốt toàn bộ vòng đời của đối
                  tượng.
                </p>
              </li>
            </ul>
            <h3>Hạn Chế</h3>
            <ul>
              <li>
                Khi <em>truy cập trực tiếp vào các trường</em> được sử dụng, mã
                sẽ trông đơn giản và dễ nhìn hơn, mặc dù tính linh hoạt bị giảm
                đi.
              </li>
            </ul>
            <h3>Cách Tái Cấu Trúc</h3>
            <ol>
              <li>
                <p>
                  Tạo một getter (và setter tùy chọn) cho trường. Chúng nên được{" "}
                  <code>bảo vệ</code> hoặc <code>công khai</code>.
                </p>
              </li>
              <li>
                <p>
                  Tìm tất cả các lời gọi trực tiếp đến trường và thay thế chúng
                  bằng các lời gọi đến getter và setter.
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
                <h3>Các Tái Cấu Trúc Tương Tự</h3>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/techniques/organizing-data/encapsulate-field">
                      Bao Gói Trường
                    </a>
                  </div>
                  <div class="dd">
                    <p>
                      Ẩn các trường công khai, cung cấp các getter và setter.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-lg-6">
                <h3>Hỗ Trợ Các Tái Cấu Trúc Khác</h3>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/techniques/organizing-data/duplicate-observed-data">
                      Nhân Đôi Dữ Liệu Quan Sát
                    </a>
                  </div>
                </div>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/techniques/organizing-data/replace-type-code-with-subclasses">
                      Thay Mã Loại Bằng Các Lớp Con
                    </a>
                  </div>
                </div>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/techniques/organizing-data/replace-type-code-with-state-strategy">
                      Thay Mã Loại Bằng Trạng Thái/Chiến Lược
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
                href="/refactoring/techniques/organizing-data/replace-data-value-with-object"
                class="btn btn-primary"
              >
                Thay Giá Trị Dữ Liệu Bằng Đối Tượng&nbsp;
                <span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/techniques/organizing-data"
                class="btn btn-default"
              >
                <span class="fa fa-arrow-left"></span>&nbsp;Tổ Chức Dữ Liệu
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

export default ContentSelfEncapsulateField;
