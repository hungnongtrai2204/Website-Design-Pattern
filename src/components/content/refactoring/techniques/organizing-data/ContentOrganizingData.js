const ContentOrganizingData = () => {
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
            <h1 class="title">Tổ Chức Dữ Liệu</h1>

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
              Các kỹ thuật tái cấu trúc này giúp xử lý dữ liệu, thay thế các giá
              trị nguyên thủy bằng chức năng phong phú của lớp.
            </p>
            <p>
              Kết quả quan trọng khác là gỡ rối các liên kết giữa các lớp, giúp
              các lớp trở nên di động và có thể tái sử dụng hơn.
            </p>
            <div class="relations link-list">
              <div class="dl">
                <div class="dt">
                  <a href="/refactoring/techniques/organizing-data/self-encapsulate-field">
                    Tự Bao Gói Trường
                  </a>
                </div>
                <div class="dd">
                  <p>
                    <strong>Vấn Đề:</strong> Bạn sử dụng truy cập trực tiếp vào
                    các trường riêng tư trong một lớp.
                  </p>
                  <p>
                    <strong>Giải Pháp:</strong> Tạo getter và setter cho trường,
                    và chỉ sử dụng chúng để truy cập vào trường.
                  </p>
                </div>
              </div>
              <div class="dl">
                <div class="dt">
                  <a href="/refactoring/techniques/organizing-data/replace-data-value-with-object">
                    Thay Giá Trị Dữ Liệu Bằng Đối Tượng
                  </a>
                </div>
                <div class="dd">
                  <p>
                    <strong>Vấn Đề:</strong> Một lớp (hoặc nhóm lớp) chứa một
                    trường dữ liệu. Trường này có hành vi riêng và dữ liệu liên
                    kết.
                  </p>
                  <p>
                    <strong>Giải Pháp:</strong> Tạo một lớp mới, đặt trường cũ
                    và hành vi của nó vào lớp này, và lưu trữ đối tượng của lớp
                    này trong lớp gốc.
                  </p>
                </div>
              </div>
              <div class="dl">
                <div class="dt">
                  <a href="/refactoring/techniques/organizing-data/change-value-to-reference">
                    Thay Đổi Giá Trị Thành Tham Chiếu
                  </a>
                </div>
                <div class="dd">
                  <p>
                    <strong>Vấn Đề:</strong> Bạn có nhiều thể hiện giống nhau
                    của một lớp mà bạn cần thay thế bằng một đối tượng duy nhất.
                  </p>
                  <p>
                    <strong>Giải Pháp:</strong> Chuyển đổi các đối tượng giống
                    nhau thành một đối tượng tham chiếu duy nhất.
                  </p>
                </div>
              </div>
              <div class="dl">
                <div class="dt">
                  <a href="/refactoring/techniques/organizing-data/change-reference-to-value">
                    Thay Đổi Tham Chiếu Thành Giá Trị
                  </a>
                </div>
                <div class="dd">
                  <p>
                    <strong>Vấn Đề:</strong> Bạn có một đối tượng tham chiếu quá
                    nhỏ và thay đổi không thường xuyên để biện minh cho việc
                    quản lý vòng đời của nó.
                  </p>
                  <p>
                    <strong>Giải Pháp:</strong> Biến nó thành một đối tượng giá
                    trị.
                  </p>
                </div>
              </div>
              <div class="dl">
                <div class="dt">
                  <a href="/refactoring/techniques/organizing-data/replace-array-with-object">
                    Thay Mảng Bằng Đối Tượng
                  </a>
                </div>
                <div class="dd">
                  <p>
                    <strong>Vấn Đề:</strong> Bạn có một mảng chứa các loại dữ
                    liệu khác nhau.
                  </p>
                  <p>
                    <strong>Giải Pháp:</strong> Thay thế mảng bằng một đối tượng
                    có các trường riêng biệt cho từng phần tử.
                  </p>
                </div>
              </div>
              <div class="dl">
                <div class="dt">
                  <a href="/refactoring/techniques/organizing-data/duplicate-observed-data">
                    Nhân Đôi Dữ Liệu Quan Sát
                  </a>
                </div>
                <div class="dd">
                  <p>
                    <strong>Vấn Đề:</strong> Dữ liệu miền được lưu trữ trong các
                    lớp chịu trách nhiệm cho giao diện người dùng (GUI)?
                  </p>
                  <p>
                    <strong>Giải Pháp:</strong> Tách dữ liệu vào các lớp riêng
                    biệt, đảm bảo kết nối và đồng bộ hóa giữa lớp miền và GUI.
                  </p>
                </div>
              </div>
              <div class="dl">
                <div class="dt">
                  <a href="/refactoring/techniques/organizing-data/change-unidirectional-association-to-bidirectional">
                    Thay Đổi Liên Kết Một Chiều Thành Hai Chiều
                  </a>
                </div>
                <div class="dd">
                  <p>
                    <strong>Vấn Đề:</strong> Bạn có hai lớp mà mỗi lớp cần sử
                    dụng các tính năng của lớp kia, nhưng liên kết giữa chúng
                    chỉ là một chiều.
                  </p>
                  <p>
                    <strong>Giải Pháp:</strong> Thêm liên kết bị thiếu vào lớp
                    cần nó.
                  </p>
                </div>
              </div>
              <div class="dl">
                <div class="dt">
                  <a href="/refactoring/techniques/organizing-data/change-bidirectional-association-to-unidirectional">
                    Thay Đổi Liên Kết Hai Chiều Thành Một Chiều
                  </a>
                </div>
                <div class="dd">
                  <p>
                    <strong>Vấn Đề:</strong> Bạn có một liên kết hai chiều giữa
                    các lớp, nhưng một trong các lớp không sử dụng các tính năng
                    của lớp kia.
                  </p>
                  <p>
                    <strong>Giải Pháp:</strong> Loại bỏ liên kết không sử dụng.
                  </p>
                </div>
              </div>
              <div class="dl">
                <div class="dt">
                  <a href="/refactoring/techniques/organizing-data/replace-magic-number-with-symbolic-constant">
                    Thay Số Ma Thuật Bằng Hằng Số Ký Hiệu
                  </a>
                </div>
                <div class="dd">
                  <p>
                    <strong>Vấn Đề:</strong> Mã của bạn sử dụng một số có ý
                    nghĩa nhất định.
                  </p>
                  <p>
                    <strong>Giải Pháp:</strong> Thay thế số này bằng một hằng số
                    có tên đọc hiểu giải thích ý nghĩa của số.
                  </p>
                </div>
              </div>
              <div class="dl">
                <div class="dt">
                  <a href="/refactoring/techniques/organizing-data/encapsulate-field">
                    Bao Gói Trường
                  </a>
                </div>
                <div class="dd">
                  <p>
                    <strong>Vấn Đề:</strong> Bạn có một trường công khai.
                  </p>
                  <p>
                    <strong>Giải Pháp:</strong> Làm cho trường này trở thành
                    riêng tư và tạo các phương thức truy cập cho nó.
                  </p>
                </div>
              </div>
              <div class="dl">
                <div class="dt">
                  <a href="/refactoring/techniques/organizing-data/encapsulate-collection">
                    Bao Gói Bộ Sưu Tập
                  </a>
                </div>
                <div class="dd">
                  <p>
                    <strong>Vấn Đề:</strong> Một lớp chứa một trường bộ sưu tập
                    và một getter và setter đơn giản để làm việc với bộ sưu tập.
                  </p>
                  <p>
                    <strong>Giải Pháp:</strong> Làm cho giá trị getter trả về
                    chỉ đọc và tạo các phương thức để thêm/xóa các phần tử của
                    bộ sưu tập.
                  </p>
                </div>
              </div>
              <div class="dl">
                <div class="dt">
                  <a href="/refactoring/techniques/organizing-data/replace-type-code-with-class">
                    Thay Mã Loại Bằng Lớp
                  </a>
                </div>
                <div class="dd">
                  <p>
                    <strong>Vấn Đề:</strong> Một lớp có một trường chứa mã loại.
                    Các giá trị của loại này không được sử dụng trong các điều
                    kiện vận hành và không ảnh hưởng đến hành vi của chương
                    trình.
                  </p>
                  <p>
                    <strong>Giải Pháp:</strong> Tạo một lớp mới và sử dụng các
                    đối tượng của nó thay cho các giá trị mã loại.
                  </p>
                </div>
              </div>
              <div class="dl">
                <div class="dt">
                  <a href="/refactoring/techniques/organizing-data/replace-type-code-with-subclasses">
                    Thay Mã Loại Bằng Các Lớp Con
                  </a>
                </div>
                <div class="dd">
                  <p>
                    <strong>Vấn Đề:</strong> Bạn có một mã loại ảnh hưởng trực
                    tiếp đến hành vi của chương trình (các giá trị của trường
                    này kích hoạt các đoạn mã khác nhau trong điều kiện).
                  </p>
                  <p>
                    <strong>Giải Pháp:</strong> Tạo các lớp con cho mỗi giá trị
                    của mã loại. Sau đó trích xuất các hành vi liên quan từ lớp
                    gốc vào các lớp con này. Thay thế mã điều khiển bằng đa
                    hình.
                  </p>
                </div>
              </div>
              <div class="dl">
                <div class="dt">
                  <a href="/refactoring/techniques/organizing-data/replace-type-code-with-state-strategy">
                    Thay Mã Loại Bằng Trạng Thái/Chiến Lược
                  </a>
                </div>
                <div class="dd">
                  <p>
                    <strong>Vấn Đề:</strong> Bạn có một mã loại ảnh hưởng đến
                    hành vi nhưng bạn không thể sử dụng các lớp con để loại bỏ
                    nó.
                  </p>
                  <p>
                    <strong>Giải Pháp:</strong> Thay mã loại bằng một đối tượng
                    trạng thái. Nếu cần thiết phải thay thế một giá trị trường
                    bằng mã loại, một đối tượng trạng thái khác sẽ được "cắm
                    vào".
                  </p>
                </div>
              </div>
              <div class="dl">
                <div class="dt">
                  <a href="/refactoring/techniques/organizing-data/replace-subclass-with-fields">
                    Thay Lớp Con Bằng Các Trường
                  </a>
                </div>
                <div class="dd">
                  <p>
                    <strong>Vấn Đề:</strong> Bạn có các lớp con chỉ khác nhau ở
                    các phương thức (trả về hằng số).
                  </p>
                  <p>
                    <strong>Giải Pháp:</strong> Thay thế các phương thức bằng
                    các trường trong lớp cha và xóa các lớp con.
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
                href="/refactoring/techniques/organizing-data/self-encapsulate-field"
                class="btn btn-primary"
              >
                Tự Bao Gói Trường&nbsp;
                <span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/techniques/moving-features-between-objects/introduce-local-extension"
                class="btn btn-default"
              >
                <span class="fa fa-arrow-left"></span>&nbsp;Giới Thiệu Phần Mở
                Rộng Cục Bộ
              </a>
            </div>
          </nav>
        </div>

        <aside class="feature content-secondary"></aside>
      </div>
    </main>
  );
};

export default ContentOrganizingData;
