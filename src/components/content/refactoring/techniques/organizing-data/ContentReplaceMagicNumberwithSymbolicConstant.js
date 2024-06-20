const ContentReplaceMagicNumberwithSymbolicConstant = () => {
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
            <h1 class="title">Thay Thế Số Ma Thuật Bằng Hằng Số Ký Hiệu</h1>

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
                  Mã nguồn của bạn đang sử dụng một số mà có một ý nghĩa nhất
                  định.
                </p>
              </div>
              <div class="after">
                <h3>Giải Pháp</h3>
                <p>
                  Thay thế số này bằng một hằng số có tên dễ đọc, giải thích ý
                  nghĩa của số đó.
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
                    {`double potentialEnergy(double mass, double height) {
  return mass * height * 9.81;
}`}
                  </pre>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <pre class="code" lang="java">
                    {`static final double GRAVITATIONAL_CONSTANT = 9.81;

double potentialEnergy(double mass, double height) {
  return mass * height * GRAVITATIONAL_CONSTANT;
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
                    {`double PotentialEnergy(double mass, double height) 
{
  return mass * height * 9.81;
}`}
                  </pre>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <pre class="code" lang="csharp">
                    {`const double GRAVITATIONAL_CONSTANT = 9.81;

double PotentialEnergy(double mass, double height) 
{
  return mass * height * GRAVITATIONAL_CONSTANT;
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
                    {`function potentialEnergy($mass, $height) {
  return $mass * $height * 9.81;
}`}
                  </pre>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <pre class="code" lang="php">
                    {`define("GRAVITATIONAL_CONSTANT", 9.81);

function potentialEnergy($mass, $height) {
  return $mass * $height * GRAVITATIONAL_CONSTANT;
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
                    {`def potentialEnergy(mass, height):
    return mass * height * 9.81`}
                  </pre>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <pre class="code" lang="python">
                    {`GRAVITATIONAL_CONSTANT = 9.81

def potentialEnergy(mass, height):
    return mass * height * GRAVITATIONAL_CONSTANT`}
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
                    {`potentialEnergy(mass: number, height: number): number {
  return mass * height * 9.81;
}`}
                  </pre>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <pre class="code" lang="typescript">
                    {`static const GRAVITATIONAL_CONSTANT = 9.81;

potentialEnergy(mass: number, height: number): number {
  return mass * height * GRAVITATIONAL_CONSTANT;
}
`}
                  </pre>
                </div>
              </div>
            </div>

            <h3>Tại Sao Cần Tái Cấu Trúc</h3>
            <p>
              Số ma thuật là một giá trị số mà được gặp trong mã nguồn nhưng
              không có ý nghĩa rõ ràng. Kiểu “anti-pattern” này làm cho việc
              hiểu chương trình và tái cấu trúc mã khó khăn hơn.
            </p>
            <p>
              Nhiều khó khăn khác sẽ xuất hiện khi bạn cần thay đổi số ma thuật
              này. Việc tìm kiếm và thay thế sẽ không hiệu quả: cùng một số có
              thể được sử dụng cho các mục đích khác nhau ở các nơi khác nhau,
              có nghĩa là bạn sẽ phải kiểm tra từng dòng mã sử dụng số này.
            </p>
            <h3>Lợi Ích</h3>
            <ul>
              <li>
                <p>
                  Hằng số ký hiệu có thể phục vụ như tài liệu sống về ý nghĩa
                  của giá trị của nó.
                </p>
              </li>
              <li>
                <p>
                  Việc thay đổi giá trị của một hằng số dễ dàng hơn nhiều so với
                  tìm kiếm số này trong toàn bộ mã nguồn, mà không có rủi ro vô
                  tình thay đổi cùng một số được sử dụng ở nơi khác với mục đích
                  khác.
                </p>
              </li>
              <li>
                <p>
                  Giảm việc sử dụng trùng lặp một số hoặc chuỗi trong mã nguồn.
                  Điều này đặc biệt quan trọng khi giá trị phức tạp và dài (như{" "}
                  <code>3.14159</code> hoặc <code>0xCAFEBABE</code>).
                </p>
              </li>
            </ul>
            <h3>Điều Cần Biết</h3>
            <h4>Không phải tất cả các số đều là số ma thuật.</h4>
            <p>
              Nếu mục đích của một số là rõ ràng, không cần thay thế nó. Một ví
              dụ kinh điển là:
            </p>
            <figure class="code">
              <pre class="code">{`for (i = 0; i &lt; сount; i++) { ... }`}</pre>
            </figure>
            <h4>Các Lựa Chọn Khác</h4>
            <ol>
              <li>
                <p>
                  Đôi khi một số ma thuật có thể được thay thế bằng các lời gọi
                  phương thức. Ví dụ, nếu bạn có một số ma thuật chỉ định số
                  phần tử trong một tập hợp, bạn không cần sử dụng nó để kiểm
                  tra phần tử cuối cùng của tập hợp. Thay vào đó, sử dụng phương
                  thức chuẩn để lấy độ dài của tập hợp.
                </p>
              </li>
              <li>
                <p>
                  Số ma thuật đôi khi được sử dụng như mã loại. Giả sử bạn có
                  hai loại người dùng và bạn sử dụng một trường số trong một lớp
                  để chỉ định ai là ai: quản trị viên là <code>1</code> và người
                  dùng thường là <code>2</code>.
                </p>
                <p>
                  Trong trường hợp này, bạn nên sử dụng một trong các phương
                  pháp tái cấu trúc để tránh mã loại:
                </p>
                <ul>
                  <li>
                    <p>
                      <a href="/refactoring/techniques/organizing-data/replace-type-code-with-class">
                        Thay Thế Mã Loại Bằng Lớp
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="/refactoring/techniques/organizing-data/replace-type-code-with-subclasses">
                        Thay Thế Mã Loại Bằng Các Lớp Con
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="/refactoring/techniques/organizing-data/replace-type-code-with-state-strategy">
                        Thay Thế Mã Loại Bằng Trạng Thái/Chiến Lược
                      </a>
                    </p>
                  </li>
                </ul>
              </li>
            </ol>
            <h3>Cách Tái Cấu Trúc</h3>
            <ol>
              <li>
                <p>
                  Khai báo một hằng số và gán giá trị của số ma thuật cho nó.
                </p>
              </li>
              <li>
                <p>Tìm tất cả các đề cập đến số ma thuật.</p>
              </li>
              <li>
                <p>
                  Đối với mỗi số bạn tìm thấy, kiểm tra kỹ rằng số ma thuật
                  trong trường hợp cụ thể này tương ứng với mục đích của hằng
                  số. Nếu đúng, thay thế số đó bằng hằng số của bạn. Đây là một
                  bước quan trọng, vì cùng một số có thể có nghĩa hoàn toàn khác
                  (và thay thế bằng các hằng số khác nhau, tùy trường hợp).
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

          <nav class="prev-next">
            <div class="next">
              <h4>ĐỌC TIẾP</h4>
              <a
                rel="next"
                href="/refactoring/techniques/organizing-data/encapsulate-field"
                class="btn btn-primary"
              >
                Bao Gói Trường&nbsp;
                <span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/techniques/organizing-data/change-bidirectional-association-to-unidirectional"
                class="btn btn-default"
              >
                <span class="fa fa-arrow-left"></span>&nbsp;Thay Đổi Liên Kết
                Hai Chiều Thành Một Chiều
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

export default ContentReplaceMagicNumberwithSymbolicConstant;
