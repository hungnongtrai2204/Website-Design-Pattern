const ContentDispensables = () => {
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
            <h1 class="title">Thành Phần Dư Thừa</h1>

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
              Một thành phần không cần thiết là thứ vô nghĩa và không cần thiết
              mà sự vắng mặt của nó sẽ làm cho mã nguồn trở nên sạch sẽ hơn,
              hiệu quả hơn và dễ hiểu hơn.
            </p>
            <div class="relations link-list">
              <div class="dl">
                <div class="dt">
                  <a href="/refactoring/smells/dispensables/comments">
                    Nhận Xét
                  </a>
                </div>
                <div class="dd">
                  <p>
                    Một phương thức được lấp đầy bằng các nhận xét giải thích.
                  </p>
                </div>
              </div>
              <div class="dl">
                <div class="dt">
                  <a href="/refactoring/smells/dispensables/duplicate-code">
                    Mã Nguồn Trùng Lặp
                  </a>
                </div>
                <div class="dd">
                  <p>Hai đoạn mã trông gần như giống hệt nhau.</p>
                </div>
              </div>
              <div class="dl">
                <div class="dt">
                  <a href="/refactoring/smells/dispensables/lazy-class">
                    Lớp Lười Biếng
                  </a>
                </div>
                <div class="dd">
                  <p>
                    Việc hiểu và duy trì các lớp luôn tốn thời gian và tiền bạc.
                    Vì vậy, nếu một lớp không làm đủ để xứng đáng với sự chú ý
                    của bạn, nó nên bị xóa.
                  </p>
                </div>
              </div>
              <div class="dl">
                <div class="dt">
                  <a href="/refactoring/smells/dispensables/data-class">
                    Lớp Dữ Liệu
                  </a>
                </div>
                <div class="dd">
                  <p>
                    Lớp dữ liệu là một lớp chỉ chứa các trường và các phương
                    thức truy cập cơ bản (getters và setters). Đây chỉ đơn giản
                    là các container cho dữ liệu được sử dụng bởi các lớp khác.
                    Những lớp này không chứa bất kỳ chức năng bổ sung nào và
                    không thể tự hoạt động trên dữ liệu mà chúng sở hữu.
                  </p>
                </div>
              </div>
              <div class="dl">
                <div class="dt">
                  <a href="/refactoring/smells/dispensables/dead-code">
                    Mã Chết
                  </a>
                </div>
                <div class="dd">
                  <p>
                    Một biến, tham số, trường, phương thức hoặc lớp không còn
                    được sử dụng (thường là do nó đã lỗi thời).
                  </p>
                </div>
              </div>
              <div class="dl">
                <div class="dt">
                  <a href="/refactoring/smells/dispensables/speculative-generality">
                    Tổng Quát Hóa Đầu Cơ
                  </a>
                </div>
                <div class="dd">
                  <p>
                    Có một lớp, phương thức, trường hoặc tham số không được sử
                    dụng.
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
                href="/refactoring/smells/dispensables/comments"
                class="btn btn-primary"
              >
                Nhận Xét&nbsp;
                <span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/smells/change-preventers/parallel-inheritance-hierarchies"
                class="btn btn-default"
              >
                <span class="fa fa-arrow-left"></span>&nbsp;Hệ Thống Kế Thừa
                Song Song
              </a>
            </div>
          </nav>
        </div>

        <aside class="feature content-secondary"></aside>
      </div>
    </main>
  );
};
export default ContentDispensables;
