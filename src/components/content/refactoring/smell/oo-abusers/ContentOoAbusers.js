const ContentOoAbusers = () => {
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
              </a>
            </div>
            <h1 class="title">Lạm dụng Hướng Đối Tượng</h1>

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

            <p>
              Tất cả những mùi hôi này đều là sự áp dụng không đầy đủ hoặc không
              chính xác các nguyên tắc lập trình hướng đối tượng.
            </p>
            <div class="relations link-list">
              <div class="dl">
                <div class="dt">
                  <a href="/refactoring/smells/oo-abusers/switch-statements">
                    Câu lệnh Switch
                  </a>
                </div>
                <div class="dd">
                  <p>
                    Bạn có một toán tử <code>switch</code> phức tạp hoặc một
                    chuỗi các câu lệnh <code>if</code>.
                  </p>
                </div>
              </div>
              <div class="dl">
                <div class="dt">
                  <a href="/refactoring/smells/oo-abusers/temporary-field">
                    Trường Tạm Thời
                  </a>
                </div>
                <div class="dd">
                  <p>
                    Các trường tạm thời chỉ nhận giá trị (và do đó cần thiết cho
                    các đối tượng) dưới một số hoàn cảnh nhất định. Ngoài những
                    hoàn cảnh đó, chúng trống rỗng.
                  </p>
                </div>
              </div>
              <div class="dl">
                <div class="dt">
                  <a href="/refactoring/smells/oo-abusers/refused-bequest">
                    Từ Chối Thừa Kế
                  </a>
                </div>
                <div class="dd">
                  <p>
                    Nếu một lớp con chỉ sử dụng một số phương thức và thuộc tính
                    được kế thừa từ lớp cha của nó, thì hệ thống phân cấp bị
                    lệch. Các phương thức không cần thiết có thể đơn giản không
                    được sử dụng hoặc bị định nghĩa lại và phát sinh ngoại lệ.
                  </p>
                </div>
              </div>
              <div class="dl">
                <div class="dt">
                  <a href="/refactoring/smells/oo-abusers/alternative-classes-with-different-interfaces">
                    Các Lớp Thay Thế Với Giao Diện Khác Nhau
                  </a>
                </div>
                <div class="dd">
                  <p>
                    Hai lớp thực hiện các chức năng giống hệt nhau nhưng có tên
                    phương thức khác nhau.
                  </p>
                </div>
              </div>
            </div>
          </article>

          <nav class="prev-next">
            <div class="next">
              <h4>ĐỌC TIẾP</h4>
              <a
                rel="next"
                href="/refactoring/smells/oo-abusers/switch-statements"
                class="btn btn-primary"
              >
                Câu Lệnh Switch&nbsp;
                <span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/smells/bloaters/data-clumps"
                class="btn btn-default"
              >
                <span class="fa fa-arrow-left"></span>&nbsp;Cụm Dữ Liệu
              </a>
            </div>
          </nav>
        </div>

        <aside class="feature content-secondary"></aside>
      </div>
    </main>
  );
};

export default ContentOoAbusers;
