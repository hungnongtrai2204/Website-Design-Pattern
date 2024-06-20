const ContentExtractVariable = () => {
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
            <h1 class="title">Trích Xuất Biến</h1>

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
                <p>Bạn có một biểu thức khó hiểu.</p>
              </div>
              <div class="after">
                <h3>Giải Pháp</h3>
                <p>
                  Đặt kết quả của biểu thức hoặc các phần của nó vào các biến
                  riêng lẻ có tên tự giải thích.
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
                    {`void renderBanner() {
  if ((platform.toUpperCase().indexOf("MAC") > -1) &&
       (browser.toUpperCase().indexOf("IE") > -1) &&
        wasInitialized() && resize > 0 )
  {
    // do something
  }
}`}
                  </pre>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <pre class="code" lang="java">
                    {`void renderBanner() {
  final boolean isMacOs = platform.toUpperCase().indexOf("MAC") > -1;
  final boolean isIE = browser.toUpperCase().indexOf("IE") > -1;
  final boolean wasResized = resize > 0;

  if (isMacOs && isIE && wasInitialized() && wasResized) {
    // do something
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
                    {`void RenderBanner() 
{
  if ((platform.ToUpper().IndexOf("MAC") > -1) &&
       (browser.ToUpper().IndexOf("IE") > -1) &&
        wasInitialized() && resize > 0 )
  {
    // do something
  }
}`}
                  </pre>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <pre class="code" lang="csharp">
                    {`void RenderBanner() 
{
  readonly bool isMacOs = platform.ToUpper().IndexOf("MAC") > -1;
  readonly bool isIE = browser.ToUpper().IndexOf("IE") > -1;
  readonly bool wasResized = resize > 0;

  if (isMacOs && isIE && wasInitialized() && wasResized) 
  {
    // do something
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
                    {`if (($platform->toUpperCase()->indexOf("MAC") > -1) &&
     ($browser->toUpperCase()->indexOf("IE") > -1) &&
      $this->wasInitialized() && $this->resize > 0)
{
  // do something
}`}
                  </pre>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <pre class="code" lang="php">
                    {`$isMacOs = $platform->toUpperCase()->indexOf("MAC") > -1;
$isIE = $browser->toUpperCase()->indexOf("IE")  > -1;
$wasResized = $this->resize > 0;

if ($isMacOs && $isIE && $this->wasInitialized() && $wasResized) {
  // do something
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
                    {`def renderBanner(self):
    if (self.platform.toUpperCase().indexOf("MAC") > -1) and \ 
       (self.browser.toUpperCase().indexOf("IE") > -1) and \ 
       self.wasInitialized() and (self.resize > 0):
        # do something`}
                  </pre>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <pre class="code" lang="python">
                    {`def renderBanner(self):
    isMacOs = self.platform.toUpperCase().indexOf("MAC") > -1
    isIE = self.browser.toUpperCase().indexOf("IE") > -1
    wasResized = self.resize > 0

    if isMacOs and isIE and self.wasInitialized() and wasResized:
        # do something`}
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
                    {`renderBanner(): void {
  if ((platform.toUpperCase().indexOf("MAC") > -1) &&
       (browser.toUpperCase().indexOf("IE") > -1) &&
        wasInitialized() && resize > 0 )
  {
    // do something
  }
}`}
                  </pre>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <pre class="code" lang="typescript">
                    {`renderBanner(): void {
  const isMacOs = platform.toUpperCase().indexOf("MAC") > -1;
  const isIE = browser.toUpperCase().indexOf("IE") > -1;
  const wasResized = resize > 0;

  if (isMacOs && isIE && wasInitialized() && wasResized) {
    // do something
  }
}`}
                  </pre>
                </div>
              </div>
            </div>

            <h3>Tại Sao Nên Tái Cấu Trúc</h3>
            <p>
              Lý do chính để trích xuất biến là làm cho biểu thức phức tạp dễ
              hiểu hơn bằng cách chia nó thành các phần trung gian. Điều này có
              thể bao gồm:
            </p>
            <ul>
              <li>
                <p>
                  Điều kiện của toán tử <code>if()</code> hoặc một phần của toán
                  tử <code>?:</code> trong các ngôn ngữ dựa trên C.
                </p>
              </li>
              <li>
                <p>Biểu thức số học dài không có kết quả trung gian.</p>
              </li>
              <li>
                <p>Các dòng dài và nhiều phần.</p>
              </li>
            </ul>
            <p>
              Trích xuất một biến có thể là bước đầu tiên hướng tới việc thực
              hiện{" "}
              <a href="/refactoring/techniques/composing-methods/extract-method">
                Trích Xuất Phương Thức
              </a>{" "}
              nếu bạn thấy rằng biểu thức được trích xuất được sử dụng ở các nơi
              khác trong mã của bạn.
            </p>
            <h3>Lợi Ích</h3>
            <ul>
              <li>
                Mã dễ đọc hơn! Hãy cố gắng đặt tên cho các biến trích xuất sao
                cho mục đích của biến rõ ràng. Càng dễ đọc, càng ít phải viết
                các bình luận dài dòng. Hãy chọn các tên như{" "}
                <code>customerTaxValue</code>,<code>cityUnemploymentRate</code>,
                <code>clientSalutationString</code>, vv.
              </li>
            </ul>
            <h3>Hạn Chế</h3>
            <ul>
              <li>
                <p>
                  Số lượng biến trong mã của bạn sẽ tăng lên. Nhưng điều này
                  được bù đắp bởi việc mã dễ đọc hơn.
                </p>
              </li>
              <li>
                <p>
                  Khi tái cấu trúc các biểu thức điều kiện, hãy nhớ rằng trình
                  biên dịch sẽ tối ưu hóa nó để giảm thiểu số lượng tính toán
                  cần thiết để xác định giá trị kết quả. Giả sử bạn có biểu thức
                  sau: <code>if (a() || b()) ...</code>. TChương trình sẽ không
                  gọi phương thức <code>b</code> nếu phương thức <code>a</code>{" "}
                  trả về <code>true</code> vì giá trị kết quả sẽ vẫn là{" "}
                  <code>true</code>, bất kể giá trị <code>b</code> trả về.
                </p>
                <p>
                  Tuy nhiên, nếu bạn trích xuất các phần của biểu thức này vào
                  các biến, cả hai phương thức sẽ luôn được gọi, điều này có thể
                  ảnh hưởng đến hiệu suất của chương trình, đặc biệt nếu các
                  phương thức này thực hiện công việc nặng.
                </p>
              </li>
            </ul>
            <h3>Cách Tái Cấu Trúc</h3>
            <ol>
              <li>
                <p>
                  Chèn một dòng mới trước biểu thức liên quan và khai báo một
                  biến mới tại đó. Gán một phần của biểu thức phức tạp cho biến
                  này.
                </p>
              </li>
              <li>
                <p>Thay thế phần đó của biểu thức bằng biến mới.</p>
              </li>
              <li>
                <p>
                  Lặp lại quy trình cho tất cả các phần phức tạp của biểu thức.
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
              <div class="col-xs-12 col-sm-6 col-lg-4">
                <h3>Phản Tái Cấu Trúc</h3>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/techniques/composing-methods/inline-temp">
                      Gộp Biến Tạm
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-lg-4">
                <h3>Các Tái Cấu Trúc Tương Tự</h3>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/techniques/composing-methods/extract-method">
                      Trích Xuất Phương Thức
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-lg-4">
                <h3>Loại Bỏ Mùi Mã Nguồn</h3>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/smells/dispensables/comments">
                      Bình Luận
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
                href="/refactoring/techniques/composing-methods/inline-temp"
                class="btn btn-primary"
              >
                Gộp Biến Tạm&nbsp;<span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/techniques/composing-methods/inline-method"
                class="btn btn-default"
              >
                <span class="fa fa-arrow-left"></span>&nbsp;Gộp Phương Thức
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

export default ContentExtractVariable;
