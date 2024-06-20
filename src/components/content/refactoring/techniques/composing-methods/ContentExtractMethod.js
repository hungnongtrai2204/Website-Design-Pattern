import { useEffect } from "react";

const ContentExtractMethod = () => {
  useEffect(() => {
    const h1 = document.querySelector("H1"); // Use querySelector instead of getElementsByTagName
    if (h1 && h1.offsetHeight > 160) {
      h1.classList.add("smaller"); // Use classList API for adding classes
    }

    if (h1) {
      let title = h1.innerHTML;
      title = title.replace(
        /^(Java|C\+\+|C#|PHP|Python|Ruby|Delphi): (.*)$/,
        "<strong>$1:</strong> $2"
      );
      h1.innerHTML = title;
    }
  }, []);
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
            <h1 class="title">Trích Xuất Phương Thức</h1>

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
                <p>Bạn có một đoạn mã có thể được nhóm lại với nhau.</p>
              </div>
              <div class="after">
                <h3>Giải Pháp</h3>
                <p>
                  Chuyển đoạn mã này sang một phương thức mới riêng biệt (hoặc
                  hàm) và thay thế đoạn mã cũ bằng một lời gọi đến phương thức
                  mới.
                </p>
              </div>
            </div>
            <h3>Java</h3>

            <div class="examples">
              <div
                class="before-after before-after-container java"
                data-lang="java"
              >
                <div class="before">
                  <div class="ba">Before</div>
                  <pre class="code" lang="java">
                    {`void printOwing() {
  printBanner();

  // Print details.
  System.out.println("name: " + name);
  System.out.println("amount: " + getOutstanding());
}`}
                  </pre>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <pre class="code" lang="java">
                    {`void printOwing() {
  printBanner();
  printDetails(getOutstanding());
}

void printDetails(double outstanding) {
  System.out.println("name: " + name);
  System.out.println("amount: " + outstanding);
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
                    {`void PrintOwing() 
{
  this.PrintBanner();

  // Print details.
  Console.WriteLine("name: " + this.name);
  Console.WriteLine("amount: " + this.GetOutstanding());
}`}
                  </pre>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <pre class="code" lang="csharp">
                    {`void PrintOwing()
{
  this.PrintBanner();
  this.PrintDetails();
}

void PrintDetails()
{
  Console.WriteLine("name: " + this.name);
  Console.WriteLine("amount: " + this.GetOutstanding());
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
                    {`function printOwing() {
  $this->printBanner();

  // Print details.
  print("name:  " . $this->name);
  print("amount " . $this->getOutstanding());
}`}
                  </pre>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <pre class="code" lang="php">
                    {`function printOwing() {
  $this->printBanner();
  $this->printDetails($this->getOutstanding());
}

function printDetails($outstanding) {
  print("name:  " . $this->name);
  print("amount " . $outstanding);
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
                    {`def printOwing(self):
    self.printBanner()

    # print details
    print("name:", self.name)
    print("amount:", self.getOutstanding())`}
                  </pre>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <pre class="code" lang="python">
                    {`def printOwing(self):
    self.printBanner()
    self.printDetails(self.getOutstanding())

def printDetails(self, outstanding):
    print("name:", self.name)
    print("amount:", outstanding)`}
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
                    {`printOwing(): void {
  printBanner();

  // Print details.
  console.log("name: " + name);
  console.log("amount: " + getOutstanding());
}`}
                  </pre>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <pre class="code" lang="typescript">
                    {`printOwing(): void {
  printBanner();
  printDetails(getOutstanding());
}

printDetails(outstanding: number): void {
  console.log("name: " + name);
  console.log("amount: " + outstanding);
}`}
                  </pre>
                </div>
              </div>
            </div>

            <h3>Tại Sao Nên Tái Cấu Trúc</h3>
            <p>
              Số dòng mã càng nhiều trong một phương thức, càng khó để hiểu
              phương thức đó làm gì. Đây là lý do chính để tái cấu trúc theo
              cách này.
            </p>
            <p>
              Ngoài việc loại bỏ những khía cạnh khó chịu trong mã nguồn của
              bạn, trích xuất phương thức cũng là một bước trong nhiều phương
              pháp tái cấu trúc khác.
            </p>
            <h3>Lợi Ích</h3>
            <ul>
              <li>
                <p>
                  Mã dễ đọc hơn! Hãy đảm bảo đặt tên cho phương thức mới theo
                  cách mô tả mục đích của nó: <code>createOrder()</code>,
                  <code>renderCustomerInfo()</code>, v.v.
                </p>
              </li>
              <li>
                <p>
                  Ít trùng lặp mã hơn. Thường thì đoạn mã trong một phương thức
                  có thể được sử dụng lại ở những nơi khác trong chương trình
                  của bạn. Vì vậy, bạn có thể thay thế các đoạn mã trùng lặp
                  bằng các lời gọi đến phương thức mới của bạn.
                </p>
              </li>
              <li>
                <p>
                  Cô lập các phần mã độc lập, nghĩa là lỗi ít có khả năng xảy ra
                  hơn (chẳng hạn nếu biến sai bị thay đổi).
                </p>
              </li>
            </ul>
            <h3>Cách Tái Cấu Trúc</h3>
            <ol>
              <li>
                <p>
                  Tạo một phương thức mới và đặt tên sao cho mục đích của nó tự
                  hiển nhiên.
                </p>
              </li>
              <li>
                <p>
                  Sao chép đoạn mã liên quan vào phương thức mới của bạn. Xóa
                  đoạn mã khỏi vị trí cũ và đặt một lời gọi đến phương thức mới
                  thay thế.
                </p>
                <p>
                  Tìm tất cả các biến được sử dụng trong đoạn mã này. Nếu chúng
                  được khai báo bên trong đoạn mã và không được sử dụng bên
                  ngoài, đơn giản là để nguyên chúng—chúng sẽ trở thành biến cục
                  bộ cho phương thức mới.
                </p>
              </li>
              <li>
                <p>
                  Nếu các biến được khai báo trước đoạn mã mà bạn đang trích
                  xuất, bạn sẽ cần truyền các biến này vào các tham số của
                  phương thức mới để sử dụng các giá trị đã được chứa trong
                  chúng. Đôi khi dễ dàng hơn để loại bỏ các biến này bằng cách
                  sử dụng{" "}
                  <a href="/refactoring/techniques/composing-methods/replace-temp-with-query">
                    Thay Thế Biến Tạm Bằng Truy Vấn
                  </a>
                  .
                </p>
              </li>
              <li>
                <p>
                  Nếu bạn thấy rằng một biến cục bộ thay đổi trong đoạn mã đã
                  trích xuất của bạn theo một cách nào đó, điều này có thể có
                  nghĩa là giá trị thay đổi này sẽ cần thiết sau đó trong phương
                  thức chính của bạn. Kiểm tra kỹ! Và nếu đúng như vậy, hãy trả
                  về giá trị của biến này cho phương thức chính để giữ cho mọi
                  thứ hoạt động.
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
              <div class="col-xs-12 col-sm-6 col-lg-3">
                <h3>Phản Tái Cấu Trúc</h3>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/techniques/composing-methods/inline-method">
                      Gộp Phương Thức
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-lg-3">
                <h3>Các tái cấu trúc tương tự</h3>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/techniques/moving-features-between-objects/move-method">
                      Di Chuyển Phương Thức
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-lg-3">
                <h3>Hỗ trợ các tái cấu trúc khác</h3>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/techniques/simplifying-method-calls/introduce-parameter-object">
                      Giới Thiệu Đối Tượng Tham Số
                    </a>
                  </div>
                </div>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/techniques/dealing-with-generalization/form-template-method">
                      Tạo Mẫu Phương Thức
                    </a>
                  </div>
                </div>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/techniques/simplifying-method-calls/parameterize-method">
                      Tham Số Hóa Phương Thức
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-lg-3">
                <h3>Loại bỏ mùi mã nguồn</h3>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/smells/dispensables/duplicate-code">
                      Mã Trùng Lặp
                    </a>
                  </div>
                </div>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/smells/bloaters/long-method">
                      Phương Thức Dài
                    </a>
                  </div>
                </div>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/smells/couplers/feature-envy">
                      Đố Kỵ Tính Năng
                    </a>
                  </div>
                </div>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/smells/oo-abusers/switch-statements">
                      Các Câu Lệnh Switch
                    </a>
                  </div>
                </div>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/smells/couplers/message-chains">
                      Chuỗi Thông Điệp
                    </a>
                  </div>
                </div>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/smells/dispensables/comments">
                      Các Bình Luận
                    </a>
                  </div>
                </div>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/smells/dispensables/data-class">
                      Lớp Dữ Liệu
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
                href="/refactoring/techniques/composing-methods/inline-method"
                class="btn btn-primary"
              >
                Gộp Phương Thức&nbsp;<span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/techniques/composing-methods"
                class="btn btn-default"
              >
                <span class="fa fa-arrow-left"></span>&nbsp;Sắp Xếp Phương Thức
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

export default ContentExtractMethod;
