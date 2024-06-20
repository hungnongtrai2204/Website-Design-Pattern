const ContentInlineTemp = () => {
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
            <h1 class="title">Gộp Biến Tạm</h1>

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
                  Bạn có một biến tạm thời được gán kết quả của một biểu thức
                  đơn giản và không có gì hơn.
                </p>
              </div>
              <div class="after">
                <h3>Giải Pháp</h3>
                <p>Thay thế các tham chiếu đến biến bằng chính biểu thức đó.</p>
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
                    {`boolean hasDiscount(Order order) {
  double basePrice = order.basePrice();
  return basePrice > 1000;
}`}
                  </pre>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <pre class="code" lang="java">
                    {`boolean hasDiscount(Order order) {
  return order.basePrice() > 1000;
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
                    {`bool HasDiscount(Order order)
{
  double basePrice = order.BasePrice();
  return basePrice > 1000;
}
`}
                  </pre>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <pre class="code" lang="csharp">
                    {`bool HasDiscount(Order order)
{
  return order.BasePrice() > 1000;
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
                    {`$basePrice = $anOrder->basePrice();
return $basePrice > 1000;`}
                  </pre>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <pre class="code" lang="php">
                    {`return $anOrder->basePrice() > 1000;
`}
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
                    {`def hasDiscount(order):
    basePrice = order.basePrice()
    return basePrice > 1000`}
                  </pre>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <pre class="code" lang="python">
                    {`def hasDiscount(order):
    return order.basePrice() > 1000`}
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
                    {`hasDiscount(order: Order): boolean {
  let basePrice: number = order.basePrice();
  return basePrice > 1000;
}`}
                  </pre>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <pre class="code" lang="typescript">
                    {`hasDiscount(order: Order): boolean {
  return order.basePrice() > 1000;
}`}
                  </pre>
                </div>
              </div>
            </div>

            <h3>Tại Sao Nên Tái Cấu Trúc</h3>
            <p>
              Gộp các biến cục bộ gần như luôn được sử dụng như một phần của
              việc{" "}
              <a href="/refactoring/techniques/composing-methods/replace-temp-with-query">
                Thay Thế Biến Tạm Bằng Truy Vấn
              </a>{" "}
              hoặc để chuẩn bị cho việc{" "}
              <a href="/refactoring/techniques/composing-methods/extract-method">
                Trích Xuất Phương Thức
              </a>
              .
            </p>
            <h3>Lợi Ích</h3>
            <ul>
              <li>
                Kỹ thuật tái cấu trúc này gần như không mang lại lợi ích riêng
                lẻ. Tuy nhiên, nếu biến được gán kết quả của một phương thức,
                bạn có thể cải thiện chút ít độ dễ đọc của chương trình bằng
                cách loại bỏ biến không cần thiết.
              </li>
            </ul>
            <h3>Hạn Chế</h3>
            <ul>
              <li>
                Đôi khi các biến tạm tưởng chừng vô ích lại được sử dụng để lưu
                trữ kết quả của một thao tác tốn kém mà được sử dụng nhiều lần.
                Vì vậy, trước khi sử dụng kỹ thuật tái cấu trúc này, hãy đảm bảo
                rằng sự đơn giản sẽ không phải trả giá bằng hiệu suất.
              </li>
            </ul>
            <h3>Cách Tái Cấu Trúc</h3>
            <ol>
              <li>
                <p>
                  Tìm tất cả các vị trí sử dụng biến. Thay vì sử dụng biến, hãy
                  sử dụng biểu thức đã được gán cho biến đó.
                </p>
              </li>
              <li>
                <p>Xóa khai báo của biến và dòng gán giá trị cho nó.</p>
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
              <div class="col-xs-12 col-sm-6 col-lg-12">
                <h3>Hỗ Trợ Các Tái Cấu Trúc Khác</h3>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/techniques/composing-methods/replace-temp-with-query">
                      Thay Thế Biến Tạm Bằng Truy Vấn
                    </a>
                  </div>
                </div>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/techniques/composing-methods/extract-method">
                      Trích Xuất Phương Thức
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
                href="/refactoring/techniques/composing-methods/replace-temp-with-query"
                class="btn btn-primary"
              >
                Thay Thế Biến Tạm Bằng Truy Vấn&nbsp;
                <span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/techniques/composing-methods/extract-variable"
                class="btn btn-default"
              >
                <span class="fa fa-arrow-left"></span>&nbsp;Trích Xuất Biến
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

export default ContentInlineTemp;
