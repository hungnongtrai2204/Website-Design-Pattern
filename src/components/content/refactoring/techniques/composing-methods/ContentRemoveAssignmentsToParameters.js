const ContentRemoveAssignmentsToParameters = () => {
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
            <h1 class="title">Loại Bỏ Gán Giá Trị Vào Tham Số</h1>

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
                  Một giá trị nào đó được gán cho một tham số bên trong thân
                  phương thức.
                </p>
              </div>
              <div class="after">
                <h3>Giải Pháp</h3>
                <p>Sử dụng một biến cục bộ thay vì tham số.</p>
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
                    {`int discount(int inputVal, int quantity) {
  if (quantity > 50) {
    inputVal -= 2;
  }
  // ...
}`}
                  </pre>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <pre class="code" lang="java">
                    {`int discount(int inputVal, int quantity) {
  int result = inputVal;
  if (quantity > 50) {
    result -= 2;
  }
  // ...
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
                    {`int Discount(int inputVal, int quantity) 
{
  if (quantity > 50) 
  {
    inputVal -= 2;
  }
  // ...
}`}
                  </pre>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <pre class="code" lang="csharp">
                    {`int Discount(int inputVal, int quantity) 
{
  int result = inputVal;
  
  if (quantity > 50) 
  {
    result -= 2;
  }
  // ...
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
                    {`function discount($inputVal, $quantity) {
  if ($quantity > 50) {
    $inputVal -= 2;
  }
  ...`}
                  </pre>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <pre class="code" lang="php">
                    {`function discount($inputVal, $quantity) {
  $result = $inputVal;
  if ($quantity > 50) {
    $result -= 2;
  }
  ...`}
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
                    {`def discount(inputVal, quantity):
    if quantity > 50:
        inputVal -= 2
    # ...`}
                  </pre>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <pre class="code" lang="python">
                    {`def discount(inputVal, quantity):
    result = inputVal
    if quantity > 50:
        result -= 2
    # ...`}
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
                    {`discount(inputVal: number, quantity: number): number {
  if (quantity > 50) {
    inputVal -= 2;
  }
  // ...
}`}
                  </pre>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <pre class="code" lang="typescript">
                    {`discount(inputVal: number, quantity: number): number {
  let result = inputVal;
  if (quantity > 50) {
    result -= 2;
  }
  // ...
}`}
                  </pre>
                </div>
              </div>
            </div>

            <h3>Tại Sao Nên Tái Cấu Trúc</h3>
            <p>
              Lý do cho việc tái cấu trúc này giống với việc{" "}
              <a href="/refactoring/techniques/composing-methods/split-temporary-variable">
                Tách Biến Tạm Thời
              </a>
              , nhưng trong trường hợp này chúng ta đang xử lý một tham số,
              không phải biến cục bộ.
            </p>
            <p>
              Thứ nhất, nếu một tham số được truyền qua tham chiếu, sau khi giá
              trị của tham số thay đổi bên trong phương thức, giá trị này sẽ
              được truyền tới đối số đã yêu cầu gọi phương thức này. Rất thường
              xuyên, điều này xảy ra một cách ngẫu nhiên và dẫn đến các hiệu ứng
              không mong muốn. Ngay cả khi các tham số thường được truyền bằng
              giá trị (và không phải bằng tham chiếu) trong ngôn ngữ lập trình
              của bạn, thói quen mã hóa này có thể gây khó chịu cho những người
              không quen với nó.
            </p>
            <p>
              Thứ hai, việc gán nhiều giá trị khác nhau cho một tham số duy nhất
              làm cho bạn khó biết được dữ liệu nào nên có trong tham số tại bất
              kỳ thời điểm nào. Vấn đề trở nên tồi tệ hơn nếu tham số và nội
              dung của nó được ghi chép lại nhưng giá trị thực tế có thể khác
              với những gì được mong đợi bên trong phương thức.
            </p>
            <h3>Lợi Ích</h3>
            <ul>
              <li>
                <p>
                  Mỗi thành phần của chương trình nên chỉ chịu trách nhiệm cho
                  một việc duy nhất. Điều này làm cho việc bảo trì mã trở nên dễ
                  dàng hơn nhiều, vì bạn có thể thay thế mã một cách an toàn mà
                  không lo về các hiệu ứng phụ.
                </p>
              </li>
              <li>
                <p>
                  Kỹ thuật tái cấu trúc này giúp trích xuất{" "}
                  <a href="/refactoring/techniques/composing-methods/extract-method">
                    mã lặp lại vào các phương thức riêng biệt
                  </a>
                  .
                </p>
              </li>
            </ul>
            <h3>Cách Tái Cấu Trúc</h3>
            <ol>
              <li>
                <p>
                  Tạo một biến cục bộ và gán giá trị ban đầu của tham số vào
                  biến này.
                </p>
              </li>
              <li>
                <p>
                  Trong tất cả mã phương thức tiếp theo sau dòng này, thay thế
                  tham số bằng biến cục bộ mới của bạn.
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
                    <a href="/refactoring/techniques/composing-methods/split-temporary-variable">
                      Tách Biến Tạm Thời
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-lg-6">
                <h3>Hỗ Trợ Các Tái Cấu Trúc Khác</h3>
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
                href="/refactoring/techniques/composing-methods/replace-method-with-method-object"
                class="btn btn-primary"
              >
                Thay Thế Phương Thức Bằng Đối Tượng Phương Thức&nbsp;
                <span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/techniques/composing-methods/split-temporary-variable"
                class="btn btn-default"
              >
                <span class="fa fa-arrow-left"></span>&nbsp;Chia Biến Tạm Thời
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

export default ContentRemoveAssignmentsToParameters;
