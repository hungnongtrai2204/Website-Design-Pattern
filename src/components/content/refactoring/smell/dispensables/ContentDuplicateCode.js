const ContentDuplicateCode = () => {
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
              <a class="type" href="/refactoring/smells/dispensables">
                Thành Phần Dư Thừa
              </a>
            </div>
            <h1 class="title">Mã Nguồn Trùng Lặp</h1>

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
              <span style="display: inline-block">Duplicate Code</span>
            </div> */}

            <h3>Dấu Hiệu và Triệu Chứng</h3>
            <p>Hai đoạn mã trông gần như giống hệt nhau.</p>
            <figure class="image">
              <img
                width="500"
                height="300"
                src="/images/refactoring/content/smells/duplicate-code-013568.png?id=16fe591195fa50073551852b3d44844e"
                //     srcset="
                //   /images/refactoring/content/smells/duplicate-code-01-2x.png?id=9e462bc4bd52927cf45cfc7dbc5907af 2x
                // "
              />
            </figure>
            <h3>Nguyên nhân của vấn đề</h3>
            <p>
              Sự trùng lặp thường xảy ra khi nhiều lập trình viên đang làm việc
              trên các phần khác nhau của cùng một chương trình cùng một lúc. Vì
              họ đang làm việc trên các nhiệm vụ khác nhau, họ có thể không biết
              rằng đồng nghiệp của họ đã viết sẵn đoạn mã tương tự mà có thể
              được tái sử dụng cho nhu cầu của họ.
            </p>
            <p>
              Cũng có sự trùng lặp tinh vi hơn, khi các phần cụ thể của mã trông
              khác nhau nhưng thực tế lại thực hiện cùng một công việc. Loại
              trùng lặp này rất khó phát hiện và sửa chữa.
            </p>
            <p>
              Đôi khi sự trùng lặp là có chủ ý. Khi gấp rút để kịp thời hạn và
              đoạn mã hiện có “gần như đúng” cho công việc, các lập trình viên
              mới vào nghề có thể không cưỡng lại được sự cám dỗ của việc sao
              chép và dán đoạn mã liên quan. Và trong một số trường hợp, lập
              trình viên đơn giản là quá lười biếng để dọn dẹp mã.
            </p>
            <h3>Xử lý</h3>
            <ul>
              <li>
                <p>
                  Xử lý Nếu cùng một đoạn mã được tìm thấy trong hai hoặc nhiều
                  phương thức trong cùng một lớp: sử dụng kỹ thuật{" "}
                  <a href="/refactoring/techniques/composing-methods/extract-method">
                    Trích xuất Phương thức
                  </a>{" "}
                  và đặt các lời gọi đến phương thức mới ở cả hai vị trí.
                </p>
                <figure class="image">
                  <img
                    width="500"
                    height="300"
                    src="/images/refactoring/content/smells/duplicate-code-020123.png?id=50d92af3defe2c2688f66cde102c9c09"
                    //     srcset="
                    //   /images/refactoring/content/smells/duplicate-code-02-2x.png?id=5b9325ca1b0369ec3423808380fa9022 2x
                    // "
                    loading="lazy"
                  />
                </figure>
              </li>
              <li>
                <p>
                  Nếu cùng một đoạn mã được tìm thấy trong hai lớp con cùng cấp:
                </p>
                <ul>
                  <li>
                    <p>
                      Sử dụng{" "}
                      <a href="/refactoring/techniques/composing-methods/extract-method">
                        Trích xuất phương thức
                      </a>{" "}
                      cho cả hai lớp, sau đó{" "}
                      <a href="/refactoring/techniques/dealing-with-generalization/pull-up-field">
                        Kéo trường lên
                      </a>{" "}
                      cho các trường được sử dụng trong phương thức mà bạn đang
                      kéo lên.
                    </p>
                  </li>
                  <li>
                    <p>
                      Nếu mã trùng lặp nằm trong hàm tạo, sử dụng{" "}
                      <a href="/refactoring/techniques/dealing-with-generalization/pull-up-constructor-body">
                        Kéo nội dung hàm tạo lên
                      </a>
                      .
                    </p>
                  </li>
                  <li>
                    <p>
                      Nếu mã trùng lặp tương tự nhau nhưng không hoàn toàn giống
                      nhau, sử dụng{" "}
                      <a href="/refactoring/techniques/dealing-with-generalization/form-template-method">
                        Tạo phương thức mẫu
                      </a>
                      .
                    </p>
                  </li>
                  <li>
                    <p>
                      Nếu hai phương thức làm cùng một việc nhưng sử dụng các
                      thuật toán khác nhau, hãy chọn thuật toán tốt nhất và áp
                      dụng{" "}
                      <a href="/refactoring/techniques/composing-methods/substitute-algorithm">
                        Thay thế thuật toán
                      </a>
                      .
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <p>Nếu tìm thấy mã nguồn trùng lặp trong hai lớp khác nhau:</p>
                <ul>
                  <li>
                    <p>
                      Nếu các lớp này không phải là một phần của một hệ thống
                      phân cấp, hãy sử dụng{" "}
                      <a href="/refactoring/techniques/dealing-with-generalization/extract-superclass">
                        Trích Xuất Lớp Cha
                      </a>{" "}
                      để tạo ra một lớp cha chung cho các lớp này nhằm duy trì
                      tất cả các chức năng trước đây.
                    </p>
                  </li>
                  <li>
                    <p>
                      Nếu khó hoặc không thể tạo một lớp cha, hãy sử dụng{" "}
                      <a href="/refactoring/techniques/moving-features-between-objects/extract-class">
                        Trích Xuất Lớp
                      </a>{" "}
                      trong một lớp và sử dụng thành phần mới này trong lớp còn
                      lại.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <p>
                  Nếu có một số lượng lớn biểu thức điều kiện và thực hiện cùng
                  một đoạn mã (chỉ khác nhau ở điều kiện), hãy hợp nhất các biểu
                  thức này thành một điều kiện duy nhất bằng cách sử dụng{" "}
                  <a href="/refactoring/techniques/simplifying-conditional-expressions/consolidate-conditional-expression">
                    Hợp Nhất Biểu Thức Điều Kiện
                  </a>{" "}
                  và sử dụng{" "}
                  <a href="/refactoring/techniques/composing-methods/extract-method">
                    Trích Xuất Phương Thức
                  </a>{" "}
                  để đặt điều kiện trong một phương thức riêng với tên dễ hiểu.
                </p>
              </li>
              <li>
                <p>
                  Nếu cùng một đoạn mã được thực hiện trong tất cả các nhánh của
                  một biểu thức điều kiện: đặt đoạn mã giống nhau này ra ngoài
                  cây điều kiện bằng cách sử dụng{" "}
                  <a href="/refactoring/techniques/simplifying-conditional-expressions/consolidate-duplicate-conditional-fragments">
                    Hợp Nhất Các Mảnh Điều Kiện Trùng Lặp
                  </a>
                  .
                </p>
              </li>
            </ul>
            <h3>Lợi ích</h3>
            <ul>
              <li>
                <p>
                  Việc hợp nhất mã nguồn trùng lặp sẽ đơn giản hóa cấu trúc mã
                  của bạn và làm cho nó ngắn hơn.
                </p>
              </li>
              <li>
                <p>
                  Sự đơn giản hóa + ngắn gọn = mã nguồn dễ đơn giản hóa hơn và
                  rẻ hơn để hỗ trợ.
                </p>
              </li>
            </ul>
            <figure class="image">
              <img
                width="500"
                height="300"
                src="/images/refactoring/content/smells/duplicate-code-038497.png?id=bd88b98ff5e5e1b5a4019cb0a50df9f5"
                //     srcset="
                //   /images/refactoring/content/smells/duplicate-code-03-2x.png?id=33df6a84eddb7c888f6757d4d80d5e20 2x
                // "
                loading="lazy"
              />
            </figure>
            <h3>Khi Nào Nên Bỏ Qua</h3>
            <ul>
              <li>
                Trong một số trường hợp rất hiếm, việc hợp nhất hai đoạn mã
                giống hệt nhau có thể làm cho mã nguồn trở nên kém trực quan và
                rõ ràng hơn.
              </li>
            </ul>

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
                href="/refactoring/smells/dispensables/lazy-class"
                class="btn btn-primary"
              >
                Lớp Lười Biếng&nbsp;
                <span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/smells/dispensables/comments"
                class="btn btn-default"
              >
                <span class="fa fa-arrow-left"></span>&nbsp;Nhận Xét
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

export default ContentDuplicateCode;
