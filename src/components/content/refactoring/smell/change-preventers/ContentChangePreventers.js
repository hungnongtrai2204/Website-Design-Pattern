const ContentChangePreventers = () => {
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
            <h1 class="title">Các Yếu Tố Ngăn Cản Thay Đổi</h1>

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
              Những mùi hôi này có nghĩa là nếu bạn cần thay đổi một thứ gì đó ở
              một nơi trong mã nguồn của bạn, bạn phải thực hiện nhiều thay đổi
              ở những nơi khác. Kết quả là việc phát triển chương trình trở nên
              phức tạp và tốn kém hơn rất nhiều.
            </p>
            <div class="relations link-list">
              <div class="dl">
                <div class="dt">
                  <a href="/refactoring/smells/change-preventers/divergent-change">
                    Thay Đổi Phân Kỳ
                  </a>
                </div>
                <div class="dd">
                  <p>
                    Bạn thấy mình phải thay đổi nhiều phương thức không liên
                    quan khi thực hiện các thay đổi cho một lớp. Ví dụ, khi thêm
                    một loại sản phẩm mới, bạn phải thay đổi các phương thức tìm
                    kiếm, hiển thị và đặt hàng sản phẩm.
                  </p>
                </div>
              </div>
              <div class="dl">
                <div class="dt">
                  <a href="/refactoring/smells/change-preventers/shotgun-surgery">
                    Phẫu Thuật Súng Ngắn
                  </a>
                </div>
                <div class="dd">
                  <p>
                    Việc thực hiện bất kỳ sửa đổi nào yêu cầu bạn phải thực hiện
                    nhiều thay đổi nhỏ trong nhiều lớp khác nhau.
                  </p>
                </div>
              </div>
              <div class="dl">
                <div class="dt">
                  <a href="/refactoring/smells/change-preventers/parallel-inheritance-hierarchies">
                    Hệ Thống Kế Thừa Song Song
                  </a>
                </div>
                <div class="dd">
                  <p>
                    Mỗi khi bạn tạo một lớp con cho một lớp, bạn thấy mình cần
                    tạo một lớp con cho một lớp khác.
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
                href="/refactoring/smells/change-preventers/divergent-change"
                class="btn btn-primary"
              >
                Thay Đổi Phân Kỳ&nbsp;
                <span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/smells/oo-abusers/alternative-classes-with-different-interfaces"
                class="btn btn-default"
              >
                <span class="fa fa-arrow-left"></span>&nbsp;Các Lớp Thay Thế Với
                Giao Diện Khác Nhau
              </a>
            </div>
          </nav>
        </div>

        <aside class="feature content-secondary"></aside>
      </div>
    </main>
  );
};

export default ContentChangePreventers;
