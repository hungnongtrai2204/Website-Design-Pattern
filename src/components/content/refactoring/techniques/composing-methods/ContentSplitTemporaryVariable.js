const ContentSplitTemporaryVariable = () => {
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
            <h1 class="title">Tách Biến Tạm Thời</h1>

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
                  Bạn có một biến cục bộ được sử dụng để lưu trữ các giá trị
                  trung gian khác nhau bên trong một phương thức (trừ các biến
                  vòng lặp).
                </p>
              </div>
              <div class="after">
                <h3>Giải Pháp</h3>
                <p>
                  Sử dụng các biến khác nhau cho các giá trị khác nhau. Mỗi biến
                  nên chỉ chịu trách nhiệm cho một mục đích cụ thể.
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
                    {`double temp = 2 * (height + width);
System.out.println(temp);
temp = height * width;
System.out.println(temp);`}
                  </pre>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <pre class="code" lang="java">
                    {`final double perimeter = 2 * (height + width);
System.out.println(perimeter);
final double area = height * width;
System.out.println(area);`}
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
                    {`double temp = 2 * (height + width);
Console.WriteLine(temp);
temp = height * width;
Console.WriteLine(temp);`}
                  </pre>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <pre class="code" lang="csharp">
                    {`readonly double perimeter = 2 * (height + width);
Console.WriteLine(perimeter);
readonly double area = height * width;
Console.WriteLine(area);`}
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
                    {`$temp = 2 * ($this->height + $this->width);
echo $temp;
$temp = $this->height * $this->width;
echo $temp;`}
                  </pre>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <pre class="code" lang="php">
                    {`$perimeter = 2 * ($this->height + $this->width);
echo $perimeter;
$area = $this->height * $this->width;
echo $area;`}
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
                    {`temp = 2 * (height + width)
print(temp)
temp = height * width
print(temp)`}
                  </pre>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <pre class="code" lang="python">
                    {`perimeter = 2 * (height + width)
print(perimeter)
area = height * width
print(area)`}
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
                    {`let temp = 2 * (height + width);
console.log(temp);
temp = height * width;
console.log(temp);`}
                  </pre>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <pre class="code" lang="typescript">
                    {`const perimeter = 2 * (height + width);
console.log(perimeter);
const area = height * width;
console.log(area);`}
                  </pre>
                </div>
              </div>
            </div>

            <h3>Tại Sao Nên Tái Cấu Trúc</h3>
            <p>
              Nếu bạn tiết kiệm số lượng biến bên trong một hàm và tái sử dụng
              chúng cho các mục đích không liên quan, bạn sẽ gặp rắc rối ngay
              khi cần thay đổi mã chứa các biến này. Bạn sẽ phải kiểm tra lại
              từng trường hợp sử dụng biến để đảm bảo rằng các giá trị đúng được
              sử dụng.
            </p>
            <h3>Lợi Ích</h3>
            <ul>
              <li>
                <p>
                  Mỗi thành phần của mã chương trình nên chỉ chịu trách nhiệm
                  cho một mục đích duy nhất. Điều này làm cho việc bảo trì mã dễ
                  dàng hơn nhiều, vì bạn có thể dễ dàng thay thế bất kỳ thành
                  phần nào mà không sợ các hiệu ứng không mong muốn.
                </p>
              </li>
              <li>
                <p>
                  Nếu một biến được tạo từ lâu trong tình trạng gấp gáp, nó có
                  thể có một tên không giải thích được gì: <code>k</code>,{" "}
                  <code>a2</code>,<code>value</code>, vv. Nhưng bạn có thể khắc
                  phục tình huống này bằng cách đặt tên cho các biến mới theo
                  cách dễ hiểu và tự giải thích. Những cái tên như{" "}
                  <code>customerTaxValue</code>,
                  <code>cityUnemploymentRate</code>,
                  <code>clientSalutationString</code> sẽ giúp mã rõ ràng hơn.
                </p>
              </li>
              <li>
                <p>
                  Kỹ thuật tái cấu trúc này hữu ích nếu bạn dự định sử dụng{" "}
                  <a href="/refactoring/techniques/composing-methods/extract-method">
                    Trích Xuất Phương Thức
                  </a>{" "}
                  sau này.
                </p>
              </li>
            </ul>
            <h3>Cách Tái Cấu Trúc</h3>
            <ol>
              <li>
                <p>
                  Tìm vị trí đầu tiên trong mã nơi biến được gán giá trị. Ở đây
                  bạn nên đổi tên biến thành một tên tương ứng với giá trị đang
                  được gán.
                </p>
              </li>
              <li>
                <p>
                  Sử dụng tên mới thay vì tên cũ ở những nơi sử dụng giá trị này
                  của biến.
                </p>
              </li>
              <li>
                <p>
                  Lặp lại khi cần thiết cho những nơi biến được gán giá trị
                  khác.
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
                <h3>Chống Tái Cấu Trúc</h3>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/techniques/composing-methods/inline-temp">
                      Biến Tạm Thời Nội Tuyến
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-lg-4">
                <h3>Các Tái Cấu Trúc Tương Tự</h3>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/techniques/composing-methods/extract-variable">
                      Trích Xuất Biến
                    </a>
                  </div>
                </div>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/techniques/composing-methods/remove-assignments-to-parameters">
                      Loại Bỏ Gán Giá Trị Vào Tham Số
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-lg-4">
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
                href="/refactoring/techniques/composing-methods/remove-assignments-to-parameters"
                class="btn btn-primary"
              >
                Loại Bỏ Gán Giá Trị Cho Tham Số&nbsp;
                <span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/techniques/composing-methods/replace-temp-with-query"
                class="btn btn-default"
              >
                <span class="fa fa-arrow-left"></span>&nbsp;Thay Thế Biến Tạm
                Bằng Truy Vấn
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

export default ContentSplitTemporaryVariable;
