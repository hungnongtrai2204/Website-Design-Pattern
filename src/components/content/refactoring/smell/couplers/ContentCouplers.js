const ContentCouplers = () => {
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
            <h1 class="title">Các Yếu Tố Liên Kết Quá Mức</h1>

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
              Tất cả các "mùi" trong nhóm này góp phần làm tăng mức độ ghép nối
              quá mức giữa các lớp hoặc cho thấy điều gì xảy ra khi ghép nối
              được thay thế bằng sự ủy quyền quá mức.
            </p>
            <div class="relations link-list">
              <div class="dl">
                <div class="dt">
                  <a href="/refactoring/smells/couplers/feature-envy">
                    Thèm Khát Tính Năng
                  </a>
                </div>
                <div class="dd">
                  <p>
                    Một phương thức truy cập dữ liệu của một đối tượng khác
                    nhiều hơn dữ liệu của chính nó.
                  </p>
                </div>
              </div>
              <div class="dl">
                <div class="dt">
                  <a href="/refactoring/smells/couplers/inappropriate-intimacy">
                    Thân Mật Không Thích Hợp
                  </a>
                </div>
                <div class="dd">
                  <p>
                    Một lớp sử dụng các trường nội bộ và phương thức của lớp
                    khác.
                  </p>
                </div>
              </div>
              <div class="dl">
                <div class="dt">
                  <a href="/refactoring/smells/couplers/message-chains">
                    Chuỗi Thông Điệp
                  </a>
                </div>
                <div class="dd">
                  <p>
                    Trong mã, bạn thấy một loạt các lệnh gọi giống như{" "}
                    <code>$a->b()->c()->d()</code>
                  </p>
                </div>
              </div>
              <div class="dl">
                <div class="dt">
                  <a href="/refactoring/smells/couplers/middle-man">
                    Người Trung Gian
                  </a>
                </div>
                <div class="dd">
                  <p>
                    Nếu một lớp chỉ thực hiện một hành động, ủy nhiệm công việc
                    cho lớp khác, tại sao nó lại tồn tại?
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
                href="/refactoring/smells/couplers/feature-envy"
                class="btn btn-primary"
              >
                Thèm Khát Tính Năng&nbsp;<span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/smells/dispensables/speculative-generality"
                class="btn btn-default"
              >
                <span class="fa fa-arrow-left"></span>&nbsp;Tổng Quát Hóa Đầu Cơ
              </a>
            </div>
          </nav>
        </div>

        <aside class="feature content-secondary"></aside>
      </div>
    </main>
  );
};

export default ContentCouplers;
