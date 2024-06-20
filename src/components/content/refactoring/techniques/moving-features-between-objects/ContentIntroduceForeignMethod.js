const ContentIntroduceForeignMethod = () => {
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
              <a
                class="type"
                href="/refactoring/techniques/moving-features-between-objects"
              >
                Di Chuyển Chức Năng Giữa Các Đối Tượng
              </a>
            </div>
            <h1 class="title">Giới Thiệu Phương Thức Ngoại Lai</h1>

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
                  Một lớp tiện ích không chứa phương thức mà bạn cần và bạn
                  không thể thêm phương thức vào lớp đó.
                </p>
              </div>
              <div class="after">
                <h3>Giải Pháp</h3>
                <p>
                  Thêm phương thức vào một lớp khách hàng và truyền một đối
                  tượng của lớp tiện ích vào đó như một tham số.
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
                    {`class Report {
  // ...
  void sendReport() {
    Date nextDay = new Date(previousEnd.getYear(),
      previousEnd.getMonth(), previousEnd.getDate() + 1);
    // ...
  }
}`}
                  </pre>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <pre class="code" lang="java">
                    {`class Report {
  // ...
  void sendReport() {
    Date newStart = nextDay(previousEnd);
    // ...
  }
  private static Date nextDay(Date arg) {
    return new Date(arg.getYear(), arg.getMonth(), arg.getDate() + 1);
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
                    {`class Report 
{
  // ...
  void SendReport() 
  {
    DateTime nextDay = previousEnd.AddDays(1);
    // ...
  }
}`}
                  </pre>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <pre class="code" lang="csharp">
                    {`class Report 
{
  // ...
  void SendReport() 
  {
    DateTime nextDay = NextDay(previousEnd);
    // ...
  }
  private static DateTime NextDay(DateTime date) 
  {
    return date.AddDays(1);
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
                    {`class Report {
  // ...
  public function sendReport() {
    $previousDate = clone $this->previousDate;
    $paymentDate = $previousDate->modify("+7 days");
    // ...
  }
}`}
                  </pre>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <pre class="code" lang="php">
                    {`class Report {
  // ...
  public function sendReport() {
    $paymentDate = self::nextWeek($this->previousDate);
    // ...
  }
  /**
   * Foreign method. Should be in Date.
   */
  private static function nextWeek(DateTime $arg) {
    $previousDate = clone $arg;
    return $previousDate->modify("+7 days");
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
                    {`class Report:
    # ...
    def sendReport(self):
        nextDay = Date(self.previousEnd.getYear(),
            self.previousEnd.getMonth(), self.previousEnd.getDate() + 1)
        # ...`}
                  </pre>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <pre class="code" lang="python">
                    {`class Report:
    # ...
    def sendReport(self):
        newStart = self._nextDay(self.previousEnd)
        # ...
        
    def _nextDay(self, arg):
        return Date(arg.getYear(), arg.getMonth(), arg.getDate() + 1)`}
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
                    {`class Report {
  // ...
  sendReport(): void {
    let nextDay: Date = new Date(previousEnd.getYear(),
      previousEnd.getMonth(), previousEnd.getDate() + 1);
    // ...
  }
}`}
                  </pre>
                </div>
                <div class="after">
                  <div class="ba">After</div>
                  <pre class="code" lang="typescript">
                    {`class Report {
  // ...
  sendReport() {
    let newStart: Date = nextDay(previousEnd);
    // ...
  }
  private static nextDay(arg: Date): Date {
    return new Date(arg.getFullYear(), arg.getMonth(), arg.getDate() + 1);
  }
}`}
                  </pre>
                </div>
              </div>
            </div>

            <h3>Lý Do Tái Cấu Trúc</h3>
            <p>
              Bạn có đoạn mã sử dụng dữ liệu và phương thức của một lớp cụ thể.
              Bạn nhận ra rằng mã này sẽ nhìn và hoạt động tốt hơn khi nằm trong
              một phương thức mới trong lớp đó. Nhưng bạn không thể thêm phương
              thức vào lớp vì, ví dụ, lớp này nằm trong một thư viện của bên thứ
              ba.
            </p>
            <p>
              Kỹ thuật tái cấu trúc này mang lại lợi ích lớn khi đoạn mã mà bạn
              muốn di chuyển vào phương thức được lặp lại nhiều lần ở các nơi
              khác nhau trong chương trình của bạn.
            </p>
            <p>
              Vì bạn đang truyền một đối tượng của lớp tiện ích vào các tham số
              của phương thức mới, bạn có quyền truy cập vào tất cả các trường
              của nó. Bên trong phương thức, bạn có thể làm hầu hết mọi thứ bạn
              muốn, như thể phương thức này là một phần của lớp tiện ích.
            </p>
            <h3>Lợi Ích</h3>
            <ul>
              <li>
                Loại bỏ sự lặp lại mã. Nếu đoạn mã của bạn được lặp lại ở nhiều
                nơi, bạn có thể thay thế các đoạn mã này bằng một lời gọi phương
                thức. Điều này tốt hơn là sự lặp lại ngay cả khi phương thức
                ngoại lai nằm ở một nơi không tối ưu.
              </li>
            </ul>
            <h3>Nhược Điểm</h3>
            <ul>
              <li>
                Lý do tại sao có phương thức của một lớp tiện ích trong một lớp
                khách hàng sẽ không luôn rõ ràng đối với người bảo trì mã sau
                bạn. Nếu phương thức có thể được sử dụng trong các lớp khác, bạn
                có thể tạo lợi ích bằng cách tạo một lớp bao bọc cho lớp tiện
                ích và đặt phương thức ở đó. Điều này cũng có lợi khi có nhiều
                phương thức tiện ích như vậy.{" "}
                <a href="/refactoring/techniques/moving-features-between-objects/introduce-local-extension">
                  Giới Thiệu Phần Mở Rộng Cục Bộ
                </a>{" "}
                có thể giúp bạn với điều này.
              </li>
            </ul>
            <h3>Cách Tái Cấu Trúc</h3>
            <ol>
              <li>
                <p>Tạo một phương thức mới trong lớp khách hàng.</p>
              </li>
              <li>
                <p>
                  Trong phương thức này, tạo một tham số để đối tượng của lớp
                  tiện ích sẽ được truyền vào. Nếu đối tượng này có thể được lấy
                  từ lớp khách hàng, bạn không cần tạo tham số như vậy.
                </p>
              </li>
              <li>
                <p>
                  Trích xuất các đoạn mã liên quan vào phương thức này và thay
                  thế chúng bằng các lời gọi phương thức.
                </p>
              </li>
              <li>
                <p>
                  Hãy chắc chắn để lại thẻ <em>Foreign method</em> trong phần
                  bình luận cho phương thức cùng với lời khuyên để đặt phương
                  thức này vào một lớp tiện ích nếu điều đó trở nên khả thi sau
                  này. Điều này sẽ giúp dễ dàng hiểu tại sao phương thức này nằm
                  trong lớp cụ thể này đối với những người sẽ bảo trì phần mềm
                  trong tương lai.
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
                <h3>Tái Cấu Trúc Tương Tự</h3>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/techniques/moving-features-between-objects/introduce-local-extension">
                      Giới Thiệu Phần Mở Rộng Cục Bộ
                    </a>
                  </div>
                  <div class="dd">
                    <p>
                      Di chuyển tất cả các phương thức mở rộng vào một lớp riêng
                      biệt, là lớp bao bọc hoặc lớp con của một số lớp dịch vụ.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-lg-6">
                <h3>Loại Bỏ Mùi Code</h3>
                <div class="dl">
                  <div class="dt">
                    <a href="/refactoring/smells/other/incomplete-library-class">
                      Lớp Thư Viện Không Hoàn Chỉnh
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
                href="/refactoring/techniques/moving-features-between-objects/introduce-local-extension"
                class="btn btn-primary"
              >
                Giới Thiệu Mở Rộng Địa Phương&nbsp;
                <span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/techniques/moving-features-between-objects/remove-middle-man"
                class="btn btn-default"
              >
                <span class="fa fa-arrow-left"></span>&nbsp;Xóa Trung Gian
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

export default ContentIntroduceForeignMethod;
