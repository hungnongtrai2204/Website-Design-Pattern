const ContentEncapsulateField = () => {
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
            <h1 class="title">Bao Bọc Trường</h1>
            {/* 
        <script type="text/javascript">
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
                <h3>Vấn đề</h3>
                <p>Bạn có một trường (field) công khai (public).</p>
              </div>
              <div class="after">
                <h3>Giải pháp</h3>
                <p>
                  Biến trường đó thành riêng tư (private) và tạo các phương thức
                  truy cập (getter và setter) cho nó.
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
                    {`class Person {
  public String name;
}`}
                  </pre>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <pre class="code" lang="java">
                    {`class Person {
  private String name;

  public String getName() {
    return name;
  }
  public void setName(String arg) {
    name = arg;
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
                    {`class Person 
{
  public string name;
}`}
                  </pre>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <pre class="code" lang="csharp">
                    {`class Person 
{
  private string name;

  public string Name
  {
    get { return name; }
    set { name = value; }
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
                    {`public $name;`}
                  </pre>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <pre class="code" lang="php">
                    {`private $name;

public getName() {
  return $this->name;
}

public setName($arg) {
  $this->name = $arg;
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
                    {`class Person {
  name: string;
}`}
                  </pre>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <pre class="code" lang="typescript">
                    {`class Person {
  private _name: string;

  get name() {
    return this._name;
  }
  setName(arg: string): void {
    this._name = arg;
  }
}`}
                  </pre>
                </div>
              </div>
            </div>

            <h3>Tại sao cần Tái cấu trúc</h3>
            <p>
              Một trong những trụ cột của lập trình hướng đối tượng là{" "}
              <em>Bao bọc</em>, khả năng che giấu dữ liệu của đối tượng. Nếu
              không, tất cả các đối tượng sẽ là công khai và các đối tượng khác
              có thể lấy và sửa đổi dữ liệu của đối tượng của bạn mà không có
              bất kỳ kiểm tra và cân nhắc nào! Dữ liệu được tách biệt khỏi các
              hành vi liên quan đến dữ liệu này, tính mô đun của các phần của
              chương trình bị ảnh hưởng và việc bảo trì trở nên phức tạp.
            </p>
            <h3>Lợi ích</h3>
            <ul>
              <li>
                <p>
                  Nếu dữ liệu và hành vi của một thành phần có mối quan hệ chặt
                  chẽ và ở cùng một nơi trong mã, bạn sẽ dễ dàng hơn nhiều để
                  bảo trì và phát triển thành phần này.
                </p>
              </li>
              <li>
                <p>
                  Bạn cũng có thể thực hiện các thao tác phức tạp liên quan đến
                  truy cập các trường của đối tượng.
                </p>
              </li>
            </ul>
            <h3>Khi nào không nên Sử dụng</h3>
            <ul>
              <li>
                <p>
                  Trong một số trường hợp, bao bọc không được khuyến khích do
                  các cân nhắc về hiệu suất. Những trường hợp này hiếm, nhưng
                  khi chúng xảy ra, hoàn cảnh này rất quan trọng.
                </p>
                <p>
                  Ví dụ, bạn có một trình chỉnh sửa đồ họa chứa các đối tượng có
                  tọa độ x- và y-. Các trường này không có khả năng thay đổi
                  trong tương lai. Hơn nữa, chương trình liên quan đến rất nhiều
                  đối tượng khác nhau mà các trường này có mặt. Vì vậy, truy cập
                  trực tiếp vào các trường tọa độ sẽ tiết kiệm chu kỳ CPU đáng
                  kể mà nếu không sẽ bị chiếm dụng bởi việc gọi các phương thức
                  truy cập.
                </p>
                <p>
                  Một ví dụ của trường hợp bất thường này là lớp{" "}
                  <a href="https://docs.oracle.com/javase/7/docs/api/java/awt/Point.html">
                    Point
                  </a>
                  trong Java. Tất cả các trường của lớp này đều là công khai.
                </p>
              </li>
            </ul>
            <h3>Cách Tái cấu trúc</h3>
            <ol>
              <li>
                <p>Tạo các phương thức getter và setter cho trường.</p>
              </li>
              <li>
                <p>
                  Tìm tất cả các vị trí gọi trường đó. Thay thế việc nhận giá
                  trị trường bằng getter và thay thế việc thiết lập giá trị mới
                  cho trường bằng setter.
                </p>
              </li>
              <li>
                <p>
                  Sau khi tất cả các vị trí gọi trường đã được thay thế, làm cho
                  trường trở nên riêng tư.
                </p>
              </li>
            </ol>
            <h4>Bước Tiếp theo</h4>
            <p>
              <em>Bao Bọc Trường</em> chỉ là bước đầu tiên trong việc đưa dữ
              liệu và các hành vi liên quan đến dữ liệu này lại gần nhau hơn.
              Sau khi tạo các phương thức truy cập đơn giản cho các trường, bạn
              nên kiểm tra lại các nơi mà các phương thức này được gọi. Rất có
              thể rằng mã trong những khu vực này sẽ phù hợp hơn trong các
              phương thức truy cập.
            </p>

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
                <h3>Tái cấu trúc tương tự</h3>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/techniques/organizing-data/self-encapsulate-field">
                      Tự bao bọc trường
                    </a>
                  </div>
                  <div class="dd">
                    <p>
                      Tạo các phương thức getter và setter cho một trường thay
                      vì truy cập trực tiếp{" "}
                      <em>trong các phương thức của lớp</em>.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-lg-6">
                <h3>Loại bỏ mùi mã</h3>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/smells/dispensables/data-class">
                      Lớp dữ liệu
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
                href="/refactoring/techniques/organizing-data/encapsulate-collection"
                class="btn btn-primary"
              >
                Bao Gói Bộ Sưu Tập&nbsp;
                <span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/techniques/organizing-data/replace-magic-number-with-symbolic-constant"
                class="btn btn-default"
              >
                <span class="fa fa-arrow-left"></span>&nbsp;Thay Số Ma Thuật
                Bằng Hằng Số Ký Hiệu
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

export default ContentEncapsulateField;
