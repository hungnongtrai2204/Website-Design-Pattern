const ContentComposingMethods = () => {
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
                <i class="fa fa-home"></i>
              </a>{" "}
              /{" "}
              <a class="type" href="/refactoring">
                Tái Cấu Trúc
              </a>{" "}
              /{" "}
              <a class="type" href="/refactoring/techniques">
                Các Kỹ Thuật
              </a>
            </div>
            <h1 class="title">Tạo Phương Thức</h1>

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
              Phần lớn công việc tái cấu trúc mã nguồn tập trung vào việc tạo
              phương thức một cách đúng đắn. Trong hầu hết các trường hợp, các
              phương thức quá dài là nguyên nhân gốc rễ của mọi vấn đề. Sự phức
              tạp của mã bên trong các phương thức này che giấu logic thực thi
              và làm cho phương thức cực kỳ khó hiểu—và thậm chí khó thay đổi
              hơn.
            </p>
            <p>
              Các kỹ thuật tái cấu trúc mã trong nhóm này làm đơn giản hóa các
              phương thức, loại bỏ mã trùng lặp và mở đường cho các cải tiến
              trong tương lai.
            </p>
            <div class="relations link-list">
              <div class="dl">
                <div class="dt">
                  <a href="/refactoring/techniques/composing-methods/extract-method">
                    Trích Xuất Phương Thức
                  </a>
                </div>
                <div class="dd">
                  <p>
                    <strong>Vấn đề:</strong> Bạn có một đoạn mã có thể được nhóm
                    lại với nhau.
                  </p>
                  <p>
                    <strong>Giải pháp:</strong> Chuyển đoạn mã này sang một
                    phương thức mới riêng biệt và thay thế đoạn mã cũ bằng một
                    lời gọi đến phương thức mới.
                  </p>
                </div>
              </div>
              <div class="dl">
                <div class="dt">
                  <a href="/refactoring/techniques/composing-methods/inline-method">
                    Gộp Phương Thức
                  </a>
                </div>
                <div class="dd">
                  <p>
                    <strong>Vấn đề:</strong> Khi nội dung của phương thức rõ
                    ràng hơn bản thân phương thức, hãy sử dụng kỹ thuật này.
                  </p>
                  <p>
                    <strong>Giải pháp:</strong> Thay thế các lời gọi đến phương
                    thức bằng nội dung của phương thức và xóa phương thức đó.
                  </p>
                </div>
              </div>
              <div class="dl">
                <div class="dt">
                  <a href="/refactoring/techniques/composing-methods/extract-variable">
                    Trích Xuất Biến
                  </a>
                </div>
                <div class="dd">
                  <p>
                    <strong>Vấn đề:</strong> Bạn có một biểu thức khó hiểu.
                  </p>
                  <p>
                    <strong>Giải pháp:</strong> Đặt kết quả của biểu thức hoặc
                    các phần của nó vào các biến riêng lẻ có tên rõ ràng.
                  </p>
                </div>
              </div>
              <div class="dl">
                <div class="dt">
                  <a href="/refactoring/techniques/composing-methods/inline-temp">
                    Gộp Biến Tạm
                  </a>
                </div>
                <div class="dd">
                  <p>
                    <strong>Vấn đề:</strong> Bạn có một biến tạm thời được gán
                    kết quả của một biểu thức đơn giản và không làm gì thêm.
                  </p>
                  <p>
                    <strong>Giải pháp:</strong> Thay thế các tham chiếu đến biến
                    bằng chính biểu thức đó.
                  </p>
                </div>
              </div>
              <div class="dl">
                <div class="dt">
                  <a href="/refactoring/techniques/composing-methods/replace-temp-with-query">
                    Thay Thế Biến Tạm Bằng Truy Vấn
                  </a>
                </div>
                <div class="dd">
                  <p>
                    <strong>Vấn đề:</strong> Bạn đặt kết quả của một biểu thức
                    vào một biến cục bộ để sử dụng sau trong mã của mình.
                  </p>
                  <p>
                    <strong>Giải pháp:</strong> Chuyển toàn bộ biểu thức vào một
                    phương thức riêng và trả về kết quả từ đó. Truy vấn phương
                    thức thay vì sử dụng biến. Kết hợp phương thức mới này trong
                    các phương thức khác nếu cần.
                  </p>
                </div>
              </div>
              <div class="dl">
                <div class="dt">
                  <a href="/refactoring/techniques/composing-methods/split-temporary-variable">
                    Chia Biến Tạm Thời
                  </a>
                </div>
                <div class="dd">
                  <p>
                    <strong>Vấn đề:</strong> Bạn có một biến cục bộ được sử dụng
                    để lưu trữ các giá trị trung gian khác nhau trong một phương
                    thức (ngoại trừ các biến vòng lặp).
                  </p>
                  <p>
                    <strong>Giải pháp:</strong> Sử dụng các biến khác nhau cho
                    các giá trị khác nhau. Mỗi biến nên chịu trách nhiệm cho chỉ
                    một điều cụ thể.
                  </p>
                </div>
              </div>
              <div class="dl">
                <div class="dt">
                  <a href="/refactoring/techniques/composing-methods/remove-assignments-to-parameters">
                    Loại Bỏ Gán Giá Trị Cho Tham Số
                  </a>
                </div>
                <div class="dd">
                  <p>
                    <strong>Vấn đề:</strong> Một giá trị nào đó được gán cho một
                    tham số trong thân phương thức.
                  </p>
                  <p>
                    <strong>Giải pháp:</strong> Sử dụng một biến cục bộ thay vì
                    tham số.
                  </p>
                </div>
              </div>
              <div class="dl">
                <div class="dt">
                  <a href="/refactoring/techniques/composing-methods/replace-method-with-method-object">
                    Thay Thế Phương Thức Bằng Đối Tượng Phương Thức
                  </a>
                </div>
                <div class="dd">
                  <p>
                    <strong>Vấn đề:</strong> Bạn có một phương thức dài mà các
                    biến cục bộ của nó được liên kết chặt chẽ đến mức bạn không
                    thể áp dụng Trích Xuất Phương Thức.
                  </p>
                  <p>
                    <strong>Giải pháp:</strong> Biến phương thức thành một lớp
                    riêng để các biến cục bộ trở thành các trường của lớp. Sau
                    đó bạn có thể chia phương thức thành nhiều phương thức trong
                    cùng một lớp. части.
                  </p>
                </div>
              </div>
              <div class="dl">
                <div class="dt">
                  <a href="/refactoring/techniques/composing-methods/substitute-algorithm">
                    Thay Thế Thuật Toán
                  </a>
                </div>
                <div class="dd">
                  <p>
                    <strong>Vấn đề:</strong> Bạn muốn thay thế một thuật toán
                    hiện tại bằng một thuật toán mới?
                  </p>
                  <p>
                    <strong>Giải pháp:</strong> Thay thế thân phương thức thực
                    hiện thuật toán bằng thuật toán mới.
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
                href="/refactoring/techniques/composing-methods/extract-method"
                class="btn btn-primary"
              >
                Trích Xuất Phương Thức&nbsp;
                <span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/techniques"
                class="btn btn-default"
              >
                <span class="fa fa-arrow-left"></span>&nbsp;Các Kỹ Thuật
              </a>
            </div>
          </nav>
        </div>

        <aside class="feature content-secondary"></aside>
      </div>
    </main>
  );
};

export default ContentComposingMethods;
