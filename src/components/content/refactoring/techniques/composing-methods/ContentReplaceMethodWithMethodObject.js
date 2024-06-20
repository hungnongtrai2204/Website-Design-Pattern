const ContentReplaceMethodWithMethodObject = () => {
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
              <a class="type" href="/refactoring/techniques/composing-methods">
                Sắp Xếp Phương Thức
              </a>
            </div>
            <h1 class="title">
              Thay Thế Phương Thức Bằng Đối Tượng Phương Thức
            </h1>

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
                  Bạn có một phương thức dài trong đó các biến cục bộ bị rối
                  loạn đến mức bạn không thể áp dụng{" "}
                  <i>Trích Xuất Phương Thức</i>.
                </p>
              </div>
              <div class="after">
                <h3>Giải Pháp</h3>
                <p>
                  Chuyển đổi phương thức thành một lớp riêng biệt để các biến
                  cục bộ trở thành các trường của lớp. Sau đó, bạn có thể chia
                  phương thức thành nhiều phương thức nhỏ hơn trong cùng lớp đó.
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
                    {`class Order {
  // ...
  public double price() {
    double primaryBasePrice;
    double secondaryBasePrice;
    double tertiaryBasePrice;
    // Perform long computation.
  }
}`}
                  </pre>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <pre class="code" lang="java">
                    {`class Order {
  // ...
  public double price() {
    return new PriceCalculator(this).compute();
  }
}

class PriceCalculator {
  private double primaryBasePrice;
  private double secondaryBasePrice;
  private double tertiaryBasePrice;
  
  public PriceCalculator(Order order) {
    // Copy relevant information from the
    // order object.
  }
  
  public double compute() {
    // Perform long computation.
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
                    {`public class Order 
{
  // ...
  public double Price() 
  {
    double primaryBasePrice;
    double secondaryBasePrice;
    double tertiaryBasePrice;
    // Perform long computation.
  }
}`}
                  </pre>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <pre class="code" lang="csharp">
                    {`public class Order 
{
  // ...
  public double Price() 
  {
    return new PriceCalculator(this).Compute();
  }
}

public class PriceCalculator 
{
  private double primaryBasePrice;
  private double secondaryBasePrice;
  private double tertiaryBasePrice;
  
  public PriceCalculator(Order order) 
  {
    // Copy relevant information from the
    // order object.
  }
  
  public double Compute() 
  {
    // Perform long computation.
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
                    {`class Order {
  // ...
  public function price() {
    $primaryBasePrice = 10;
    $secondaryBasePrice = 20;
    $tertiaryBasePrice = 30;
    // Perform long computation.
  }
}`}
                  </pre>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <pre class="code" lang="php">
                    {`class Order {
  // ...
  public function price() {
    return (new PriceCalculator($this))->compute();
  }
}

class PriceCalculator {
  private $primaryBasePrice;
  private $secondaryBasePrice;
  private $tertiaryBasePrice;
  
  public function __construct(Order $order) {
      // Copy relevant information from the
      // order object.
  }
  
  public function compute() {
    // Perform long computation.
  }
}`}
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
                    {`class Order:
    # ...
    def price(self):
        primaryBasePrice = 0
        secondaryBasePrice = 0
        tertiaryBasePrice = 0
        # Perform long computation.`}
                  </pre>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <pre class="code" lang="python">
                    {`class Order:
    # ...
    def price(self):
        return PriceCalculator(self).compute()


class PriceCalculator:
    def __init__(self, order):
        self._primaryBasePrice = 0
        self._secondaryBasePrice = 0
        self._tertiaryBasePrice = 0
        # Copy relevant information from the
        # order object.

    def compute(self):
        # Perform long computation.`}
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
                    {`class Order {
  // ...
  price(): number {
    let primaryBasePrice;
    let secondaryBasePrice;
    let tertiaryBasePrice;
    // Perform long computation.
  }
}`}
                  </pre>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <pre class="code" lang="typescript">
                    {`class Order {
  // ...
  price(): number {
    return new PriceCalculator(this).compute();
  }
}

class PriceCalculator {
  private _primaryBasePrice: number;
  private _secondaryBasePrice: number;
  private _tertiaryBasePrice: number;
  
  constructor(order: Order) {
    // Copy relevant information from the
    // order object.
  }
  
  compute(): number {
    // Perform long computation.
  }
}`}
                  </pre>
                </div>
              </div>
            </div>

            <h3>Tại Sao Nên Tái Cấu Trúc</h3>
            <p>
              Một phương thức quá dài và bạn không thể tách nó ra do các biến
              cục bộ bị rối loạn và khó tách biệt.
            </p>
            <p>
              Bước đầu tiên là tách toàn bộ phương thức vào một lớp riêng và
              chuyển các biến cục bộ của nó thành các trường của lớp.
            </p>
            <p>
              Thứ nhất, điều này cho phép tách biệt vấn đề ở mức lớp. Thứ hai,
              nó mở đường cho việc chia nhỏ một phương thức lớn và khó quản lý
              thành các phương thức nhỏ hơn mà không làm ô nhiễm lớp ban đầu với
              các phương thức tiện ích.
            </p>
            <h3>Lợi Ích</h3>
            <ul>
              <li>
                Tách một phương thức dài thành lớp riêng của nó cho phép ngăn
                chặn phương thức phình to quá mức. Điều này cũng cho phép chia
                nó thành các phương thức con trong lớp, mà không làm ô nhiễm lớp
                ban đầu với các phương thức tiện ích.
              </li>
            </ul>
            <h3>Nhược Điểm</h3>
            <ul>
              <li>
                Thêm một lớp mới, tăng độ phức tạp tổng thể của chương trình.
              </li>
            </ul>
            <h3>Cách Tái Cấu Trúc</h3>
            <ol>
              <li>
                <p>
                  Tạo một lớp mới. Đặt tên nó dựa trên mục đích của phương thức
                  mà bạn đang tái cấu trúc.
                </p>
              </li>
              <li>
                <p>
                  Trong lớp mới, tạo một trường riêng để lưu trữ tham chiếu đến
                  một thể hiện của lớp trong đó phương thức trước đó nằm. Điều
                  này có thể được sử dụng để lấy một số dữ liệu cần thiết từ lớp
                  ban đầu nếu cần.
                </p>
              </li>
              <li>
                <p>Tạo một trường riêng cho mỗi biến cục bộ của phương thức.</p>
              </li>
              <li>
                <p>
                  Tạo một hàm khởi tạo (constructor) chấp nhận các giá trị của
                  tất cả các biến cục bộ của phương thức như các tham số và cũng
                  khởi tạo các trường riêng tương ứng.
                </p>
              </li>
              <li>
                <p>
                  Khai báo phương thức chính và sao chép mã của phương thức ban
                  đầu vào đó, thay thế các biến cục bộ bằng các trường riêng.
                </p>
              </li>
              <li>
                <p>
                  Thay thế nội dung của phương thức ban đầu trong lớp ban đầu
                  bằng cách tạo một đối tượng phương thức và gọi phương thức
                  chính của nó.
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
                    <a href="/refactoring/techniques/organizing-data/replace-data-value-with-object">
                      Thay Thế Giá Trị Dữ Liệu Bằng Đối Tượng
                    </a>
                  </div>
                  <div class="dd">
                    <p>Thực hiện tương tự với các trường.</p>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-lg-6">
                <h3>Loại Bỏ Mùi</h3>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/smells/bloaters/long-method">
                      Phương Thức Dài
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
                href="/refactoring/techniques/composing-methods/substitute-algorithm"
                class="btn btn-primary"
              >
                Thay Thế Thuật Toán&nbsp;
                <span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/techniques/composing-methods/remove-assignments-to-parameters"
                class="btn btn-default"
              >
                <span class="fa fa-arrow-left"></span>&nbsp;Loại Bỏ Gán Giá Trị
                Vào Tham Số
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

export default ContentReplaceMethodWithMethodObject;
