const ContentBloater = () => {
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
            <h1 class="title">Mã Phình To</h1>

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
              Mã phình to (Bloaters) là các đoạn mã, phương thức và lớp đã tăng
              lên kích thước khổng lồ đến mức khó làm việc với chúng. Thông
              thường, những "mùi" mã này không xuất hiện ngay lập tức mà tích
              lũy dần dần theo thời gian khi chương trình phát triển (và đặc
              biệt là khi không ai nỗ lực loại bỏ chúng).
            </p>
            <div class="relations link-list">
              <div class="dl">
                <div class="dt">
                  <a href="/refactoring/smells/bloaters/long-method">
                    Phương Thức Dài
                  </a>
                </div>
                <div class="dd">
                  <p>
                    Một phương thức chứa quá nhiều dòng code. Thông thường, bất
                    kỳ phương thức nào dài hơn mười dòng đều nên khiến bạn bắt
                    đầu đặt câu hỏi.
                  </p>
                </div>
              </div>
              <div class="dl">
                <div class="dt">
                  <a href="/refactoring/smells/bloaters/large-class">Lớp Lớn</a>
                </div>
                <div class="dd">
                  <p>
                    Một lớp chứa quá nhiều trường (fields), phương thức
                    (methods) và dòng code.
                  </p>
                </div>
              </div>
              <div class="dl">
                <div class="dt">
                  <a href="/refactoring/smells/bloaters/primitive-obsession">
                    Ám Ảnh Nguyên Thủy
                  </a>
                </div>
                <div class="dd">
                  <ul>
                    <li>
                      Sử dụng các kiểu dữ liệu nguyên thủy (như số, chuỗi,
                      boolean) thay vì các đối tượng nhỏ để thực hiện các tác vụ
                      đơn giản (ví dụ: đơn vị tiền tệ, phạm vi, chuỗi đặc biệt
                      cho số điện thoại, v.v.).
                    </li>
                    <li>
                      Sử dụng các hằng số để mã hóa thông tin (ví dụ: hằng số{" "}
                      <code>USER_ADMIN_ROLE = 1</code> để chỉ người dùng có
                      quyền quản trị).
                    </li>
                    <li>
                      Sử dụng các chuỗi hằng số làm tên trường trong các mảng dữ
                      liệu.
                    </li>
                  </ul>
                </div>
              </div>
              <div class="dl">
                <div class="dt">
                  <a href="/refactoring/smells/bloaters/long-parameter-list">
                    Danh Sách Tham Số Dài
                  </a>
                </div>
                <div class="dd">
                  <p>Một phương thức có nhiều hơn ba hoặc bốn tham số.</p>
                </div>
              </div>
              <div class="dl">
                <div class="dt">
                  <a href="/refactoring/smells/bloaters/data-clumps">
                    Cụm Dữ Liệu
                  </a>
                </div>
                <div class="dd">
                  <p>
                    Đôi khi, các phần khác nhau của mã chứa các nhóm biến giống
                    hệt nhau (ví dụ: các tham số để kết nối cơ sở dữ liệu).
                    Những cụm biến này nên được chuyển thành các lớp riêng biệt
                    để tăng tính đóng gói và tái sử dụng mã.
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
                href="/refactoring/smells/bloaters/long-method"
                class="btn btn-primary"
              >
                Phương Thức Dài&nbsp;<span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>TRỞ LẠI</h4>
              <a rel="prev" href="/refactoring/smells" class="btn btn-default">
                <span class="fa fa-arrow-left"></span>&nbsp;Mùi Mã
              </a>
            </div>
          </nav>
        </div>

        <aside class="feature content-secondary"></aside>
      </div>
    </main>
  );
};

export default ContentBloater;
