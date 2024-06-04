const ContentLongMethod = () => {
  return (
    <main
      role="main"
      class="main-content top-content center-content"
      data-page_class=""
    >
      <div class="main-content-container center-content-container">
        <div class="page text">
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
              <a class="type" href="/refactoring/smells">
                Mùi Mã
              </a>{" "}
              /{" "}
              <a class="type" href="/refactoring/smells/bloaters">
                Mã Phình To
              </a>
            </div>
            <h1 class="title">Phương Thức Dài</h1>

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

            {/* <div class="aka">
              Также известен как:
              <span style={{ display: "inline-block" }}>Long Method</span>
            </div> */}

            <h3>Dấu Hiệu Và Triệu Chứng</h3>
            <p>
              Một phương thức chứa quá nhiều dòng mã. Thông thường, bất kỳ
              phương thức nào có độ dài vượt quá mười dòng đều là dấu hiệu cho
              thấy bạn nên xem xét kỹ hơn và đặt câu hỏi về thiết kế của phương
              thức đó.
            </p>
            <figure class="image">
              <img
                width="500"
                height="300"
                src="/images/refactoring/content/smells/long-method-012095.png?id=ba3b4a6d8ef25a8f676543cee5e1e019"
                srcset="
                /images/refactoring/content/smells/long-method-01-2x.png?id=fd9479c2221526f284c9b14fb94f9169 2x
              "
              />
            </figure>
            <h3>Nguyên Nhân Của Vấn Đề</h3>
            <p>
              Giống như khách sạn California, luôn có thứ gì đó được thêm vào
              một phương thức nhưng không có gì bị lấy ra. Vì việc viết mã dễ
              dàng hơn so với việc đọc nó, nên "mùi" này không được chú ý cho
              đến khi phương thức biến thành một con thú xấu xí, quá khổ.
            </p>
            <p>
              Về mặt tâm lý, việc tạo một phương thức mới thường khó hơn so với
              việc thêm vào một phương thức hiện có: "Nhưng chỉ có hai dòng,
              không cần phải tạo ra cả một phương thức chỉ cho việc đó..." Điều
              này có nghĩa là một dòng khác được thêm vào và sau đó là một dòng
              nữa, tạo ra một mớ bòng bong của mã spaghetti.
            </p>

            <h3>Cách Xử Lý</h3>
            <p>
              Một nguyên tắc nhỏ là nếu bạn cảm thấy cần phải chú thích một đoạn
              mã bên trong một phương thức, bạn nên lấy đoạn mã đó và đặt nó vào
              một phương thức mới. Ngay cả một dòng đơn lẻ cũng có thể và nên
              được tách thành một phương thức riêng biệt, nếu nó cần giải thích.
              Và nếu phương thức có tên mô tả, không ai cần phải xem mã để biết
              nó làm gì.
            </p>
            <figure class="image">
              <img
                width="500"
                height="300"
                src="/images/refactoring/content/smells/long-method-027655.png?id=274350a92b305ae79848ab40b3bdb0cb"
                srcset="
                /images/refactoring/content/smells/long-method-02-2x.png?id=beba19e840bf4763e85f006ef79cc89c 2x
              "
                loading="lazy"
              />
            </figure>
            <ul>
              <li>
                <p>
                  Để giảm độ dài thân phương thức, sử dụng kỹ thuật{" "}
                  <a href="/refactorings/composing-method/extract-method">
                    Trích Xuất Phương Thức
                  </a>
                  .
                </p>
              </li>
              <li>
                <p>
                  Nếu biến cục bộ và tham số cản trở việc trích xuất phương
                  thức, sử dụng{" "}
                  <a href="/refactorings/composing-method/replace-temp-with-query">
                    Thay Thế Biến Tạm Bằng Truy Vấn
                  </a>
                  ,{" "}
                  <a href="/refactorings/simplifying-method-calls/introduce-parameter-object">
                    Giới Thiệu Đối Tượng Tham Số
                  </a>{" "}
                  hoặc{" "}
                  <a href="/refactorings/simplifying-method-calls/preserve-whole-object">
                    Bảo Toàn Toàn Bộ Đối Tượng
                  </a>
                  .
                </p>
              </li>
              <li>
                <p>
                  Nếu các cách trên không hiệu quả, hãy thử chuyển toàn bộ
                  phương thức sang một đối tượng riêng biệt bằng kỹ thuật{" "}
                  <a href="/refactorings/composing-method/replace-method-with-method-object.html">
                  Thay Thế Phương Thức Bằng Đối Tượng Phương Thức
                  </a>
                  .
                </p>
              </li>
              <li>
                <p>
                Các toán tử điều kiện và vòng lặp thường là dấu hiệu cho thấy mã có thể được chuyển sang phương thức riêng biệt. Với câu lệnh điều kiện, sử dụng{" "}
                  <a href="/refactorings/simplifying-method-calls/decompose-conditional">
                  Phân Rã Điều Kiện
                  </a>
                  . Nếu vòng lặp cản trở, sử dụng{" "}
                  <a href="/refactorings/composing-method/extract-method">Trích Xuất Phương Thức</a>.
                </p>
              </li>
            </ul>
            <h3>Lợi Ích</h3>
            <ul>
              <li>
                <p>
                Trong tất cả các loại mã hướng đối tượng, các lớp có phương thức ngắn sẽ tồn tại lâu nhất. Phương thức hoặc hàm càng dài thì càng khó hiểu và bảo trì.


                </p>
              </li>
              <li>
                <p>
                Ngoài ra, các phương thức dài cung cấp nơi ẩn náu hoàn hảo cho mã trùng lặp không mong muốn.
                </p>
              </li>
            </ul>
            <figure class="image">
              <img
                width="500"
                height="300"
                src="/images/refactoring/content/smells/long-method-03ca39.png?id=82ce2d388aa14bdae4e8f62b875f0259"
                srcset="
                /images/refactoring/content/smells/long-method-03-2x.png?id=ba563da468cf42a704ff53da2e89b6d5 2x
              "
                loading="lazy"
              />
            </figure>
            <h3>Hiệu Năng</h3>
            <p>
            Liệu việc tăng số lượng phương thức có làm giảm hiệu suất như nhiều người vẫn tuyên bố không? Trong hầu hết các trường hợp, tác động là không đáng kể đến mức không cần phải lo lắng.
            </p>
            <p>
            Hơn nữa, giờ đây khi bạn đã có mã nguồn rõ ràng và dễ hiểu, bạn sẽ dễ dàng tìm ra những phương pháp thực sự hiệu quả để tái cấu trúc mã và đạt được những cải thiện hiệu năng thực sự nếu cần.
            </p>

            <div
              class="prom banner-content banner banner-striped banner-with-image"
              data-id="Ref: Part of the ebook"
              data-creative-id="animated-ru"
              data-position="content_bottom"
            >
              <div class="banner-image">
                <a href="/store/course">
                  <video
                    id="banner-zzz"
                    loop
                    autoPlay
                    muted
                    playsinline
                    width="200"
                    height="200"
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
                Không có gì lạ, phải mất {" "}
                  <span class="blue">7 giờ</span> để đọc hết tất cả các văn bản ở đây.
                </p>
                <p>
                Hãy thử khóa học tương tác của chúng tôi về tái cấu trúc. Nó cung cấp một cách tiếp cận bớt tẻ nhạt hơn để học những kiến thức mới.
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
              <a rel="next" href="/refactoring/smells/bloaters/large-class" class="btn btn-primary">
                Lớp Lớn&nbsp;<span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/smells/bloaters"
                class="btn btn-default"
              >
                <span class="fa fa-arrow-left"></span>&nbsp;Mã Phình To
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
                Mùi mã này là một phần của{" "}
                  <b>Khóa Học Tái Cấu Trúc</b>{" "}lớn hơn nhiều..
                </p>
                <a
                  href="/store/course"
                  class="btn btn-secondary btn-block"
                >
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

export default ContentLongMethod;
