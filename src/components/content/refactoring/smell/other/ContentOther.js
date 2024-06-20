const ContentOther = () => {
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
            <h1 class="title">Các Mùi Mã Khác</h1>

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

            <p>Dưới đây là các mùi không thuộc vào bất kỳ danh mục rộng nào.</p>
            <div class="relations link-list">
              <div class="dl">
                <div class="dt">
                  <a href="/refactoring/smells/other/incomplete-library-class">
                    Lớp Thư Viện Không Hoàn Chỉnh
                  </a>
                </div>
                <div class="dd">
                  <p>
                    Sớm hay muộn,{" "}
                    <a href="https://en.wikipedia.org/wiki/Library_(computing)">
                      các thư viện
                    </a>{" "}
                    sẽ không đáp ứng được nhu cầu của người dùng. Giải pháp duy
                    nhất cho vấn đề này—thay đổi thư viện—thường là không thể vì
                    thư viện chỉ đọc.
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
                href="/refactoring/smells/other/incomplete-library-class"
                class="btn btn-primary"
              >
                Lớp Thư Viện Không Hoàn Chỉnh&nbsp;
                <span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/smells/couplers/middle-man"
                class="btn btn-default"
              >
                <span class="fa fa-arrow-left"></span>&nbsp;Người Trung Gian
              </a>
            </div>
          </nav>
        </div>

        <aside class="feature content-secondary"></aside>
      </div>
    </main>
  );
};

export default ContentOther;
