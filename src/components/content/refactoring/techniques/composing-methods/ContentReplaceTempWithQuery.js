const ContentReplaceTempWithQuery = () => {
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
            <h1 class="title">Thay Thế Biến Tạm Bằng Truy Vấn</h1>

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
                  Bạn đặt kết quả của một biểu thức vào một biến cục bộ để sử
                  dụng sau trong mã của mình.
                </p>
              </div>
              <div class="after">
                <h3>Giải Pháp</h3>
                <p>
                  Chuyển toàn bộ biểu thức vào một phương thức riêng biệt và trả
                  về kết quả từ đó. Truy vấn phương thức này thay vì sử dụng một
                  biến. Kết hợp phương thức mới này vào các phương thức khác,
                  nếu cần thiết.
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
                    {`double calculateTotal() {
  double basePrice = quantity * itemPrice;
  if (basePrice > 1000) {
    return basePrice * 0.95;
  }
  else {
    return basePrice * 0.98;
  }
}`}
                  </pre>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <pre class="code" lang="java">
                    {`double calculateTotal() {
  if (basePrice() > 1000) {
    return basePrice() * 0.95;
  }
  else {
    return basePrice() * 0.98;
  }
}
double basePrice() {
  return quantity * itemPrice;
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
                    {`double CalculateTotal() 
{
  double basePrice = quantity * itemPrice;
  
  if (basePrice > 1000) 
  {
    return basePrice * 0.95;
  }
  else 
  {
    return basePrice * 0.98;
  }
}`}
                  </pre>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <pre class="code" lang="csharp">
                    {`double CalculateTotal() 
{
  if (BasePrice() > 1000) 
  {
    return BasePrice() * 0.95;
  }
  else 
  {
    return BasePrice() * 0.98;
  }
}
double BasePrice() 
{
  return quantity * itemPrice;
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
                    {`$basePrice = $this->quantity * $this->itemPrice;
if ($basePrice > 1000) {
  return $basePrice * 0.95;
} else {
  return $basePrice * 0.98;
}`}
                  </pre>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <pre class="code" lang="php">
                    {`if ($this->basePrice() > 1000) {
  return $this->basePrice() * 0.95;
} else {
  return $this->basePrice() * 0.98;
}

...

function basePrice() {
  return $this->quantity * $this->itemPrice;
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
                    {`def calculateTotal():
    basePrice = quantity * itemPrice
    if basePrice > 1000:
        return basePrice * 0.95
    else:
        return basePrice * 0.98`}
                  </pre>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <pre class="code" lang="python">
                    {`def calculateTotal():
    if basePrice() > 1000:
        return basePrice() * 0.95
    else:
        return basePrice() * 0.98

def basePrice():
    return quantity * itemPrice`}
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
                    {` calculateTotal(): number {
  let basePrice = quantity * itemPrice;
  if (basePrice > 1000) {
    return basePrice * 0.95;
  }
  else {
    return basePrice * 0.98;
  }
}`}
                  </pre>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <pre class="code" lang="typescript">
                    {`calculateTotal(): number {
  if (basePrice() > 1000) {
    return basePrice() * 0.95;
  }
  else {
    return basePrice() * 0.98;
  }
}
basePrice(): number {
  return quantity * itemPrice;
}`}
                  </pre>
                </div>
              </div>
            </div>

            <h3>Tại Sao Nên Tái Cấu Trúc</h3>
            <p>
              Kỹ thuật tái cấu trúc này có thể đặt nền tảng cho việc áp dụng{" "}
              <a href="/refactoring/techniques/composing-methods/extract-method">
                Trích Xuất Phương Thức
              </a>{" "}
              cho một phần của một phương thức rất dài.
            </p>
            <p>
              Biểu thức giống nhau đôi khi có thể được tìm thấy trong các phương
              thức khác, đó là một lý do để xem xét việc tạo ra một phương thức
              chung.
            </p>
            <h3>Lợi Ích</h3>
            <ul>
              <li>
                <p>
                  Độ dễ đọc của mã: Dễ hiểu mục đích của phương thức{" "}
                  <code>getTax()</code> hơn là dòng{" "}
                  <code>orderPrice() * 0.2</code>.
                </p>
              </li>
              <li>
                <p>
                  Mã gọn gàng hơn nhờ việc loại bỏ sự trùng lặp, nếu dòng mã
                  được thay thế được sử dụng trong nhiều phương thức.
                </p>
              </li>
            </ul>
            <h3>Điều Cần Biết</h3>
            <h4>Hiệu Suất</h4>
            <p>
              Kỹ thuật tái cấu trúc này có thể đặt ra câu hỏi liệu phương pháp
              này có gây ra sự giảm hiệu suất không. Câu trả lời thẳng thắn là:
              có, vì mã kết quả có thể bị nặng nề bởi việc truy vấn một phương
              thức mới. Nhưng với CPU nhanh và trình biên dịch xuất sắc hiện
              nay, gánh nặng này hầu như luôn là tối thiểu. Ngược lại, mã dễ đọc
              và khả năng tái sử dụng phương thức này ở các nơi khác trong mã
              chương trình—nhờ kỹ thuật tái cấu trúc này—là những lợi ích rất
              đáng kể.
            </p>
            <p>
              Tuy nhiên, nếu biến tạm của bạn được sử dụng để lưu trữ kết quả
              của một biểu thức thực sự tốn thời gian, bạn có thể muốn dừng việc
              tái cấu trúc này sau khi trích xuất biểu thức vào một phương thức
              mới.
            </p>
            <h3>Cách Tái Cấu Trúc</h3>
            <ol>
              <li>
                <p>
                  Đảm bảo rằng một giá trị được gán cho biến chỉ một lần duy
                  nhất trong phương thức. Nếu không, sử dụng{" "}
                  <a href="/refactoring/techniques/composing-methods/split-temporary-variable">
                    Chia Biến Tạm Thời
                  </a>{" "}
                  để đảm bảo rằng biến sẽ chỉ được sử dụng để lưu trữ kết quả
                  của biểu thức của bạn.
                </p>
              </li>
              <li>
                <p>
                  Sử dụng{" "}
                  <a href="/refactoring/techniques/composing-methods/extract-method">
                    Trích Xuất Phương Thức
                  </a>{" "}
                  để đặt biểu thức quan tâm vào một phương thức mới. Đảm bảo
                  rằng phương thức này chỉ trả về một giá trị và không thay đổi
                  trạng thái của đối tượng. Nếu phương thức ảnh hưởng đến trạng
                  thái hiện tại của đối tượng, sử dụng{" "}
                  <a href="/refactoring/techniques/simplifying-method-calls/separate-query-from-modifier">
                    Tách Truy Vấn Khỏi Bộ Sửa Đổi
                  </a>
                  .
                </p>
              </li>
              <li>
                <p>
                  Thay thế biến bằng một truy vấn đến phương thức mới của bạn.
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
                    <a href="/refactoring/techniques/composing-methods/extract-method">
                      Trích Xuất Phương Thức
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-lg-6">
                <h3>Loại Bỏ Mùi Mã Nguồn</h3>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/smells/bloaters/long-method">
                      Phương Thức Dài
                    </a>
                  </div>
                </div>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/smells/dispensables/duplicate-code">
                      Mã Nguồn Trùng Lặp
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
                href="/refactoring/techniques/composing-methods/split-temporary-variable"
                class="btn btn-primary"
              >
                Chia Biến Tạm Thời&nbsp;
                <span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/techniques/composing-methods/inline-temp"
                class="btn btn-default"
              >
                <span class="fa fa-arrow-left"></span>&nbsp;Gộp Biến Tạm
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

export default ContentReplaceTempWithQuery;
