const ContentMovingFeaturesBetweenObjects = () => {
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
            <h1 class="title">Di Chuyển Chức Năng Giữa Các Đối Tượng</h1>

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
              Ngay cả khi bạn đã phân phối chức năng giữa các lớp khác nhau theo
              cách chưa hoàn hảo, vẫn còn hy vọng.
            </p>
            <p>
              Các kỹ thuật tái cấu trúc này cho thấy cách di chuyển chức năng an
              toàn giữa các lớp, tạo các lớp mới và ẩn chi tiết triển khai khỏi
              truy cập công khai.
            </p>
            <div class="relations link-list">
              <div class="dl">
                <div class="dt">
                  <a href="/refactoring/techniques/moving-features-between-objects/move-method">
                    Di Chuyển Phương Thức
                  </a>
                </div>
                <div class="dd">
                  <p>
                    <strong>Vấn Đề:</strong> Một phương thức được sử dụng nhiều
                    hơn trong một lớp khác so với lớp của nó.
                  </p>
                  <p>
                    <strong>Giải Pháp:</strong> Tạo một phương thức mới trong
                    lớp sử dụng phương thức nhiều nhất, sau đó di chuyển mã từ
                    phương thức cũ sang đó. Biến mã của phương thức gốc thành
                    một tham chiếu đến phương thức mới trong lớp khác hoặc xóa
                    hoàn toàn phương thức đó.
                  </p>
                </div>
              </div>
              <div class="dl">
                <div class="dt">
                  <a href="/refactoring/techniques/moving-features-between-objects/move-field">
                    Di Chuyển Trường
                  </a>
                </div>
                <div class="dd">
                  <p>
                    <strong>Vấn Đề:</strong> Một trường được sử dụng nhiều hơn
                    trong một lớp khác so với lớp của nó.
                  </p>
                  <p>
                    <strong>Giải Pháp:</strong> Tạo một trường trong lớp mới và
                    chuyển hướng tất cả các người dùng của trường cũ đến trường
                    đó.
                  </p>
                </div>
              </div>
              <div class="dl">
                <div class="dt">
                  <a href="/refactoring/techniques/moving-features-between-objects/extract-class">
                    Trích Xuất Lớp
                  </a>
                </div>
                <div class="dd">
                  <p>
                    <strong>Vấn Đề:</strong> Khi một lớp làm công việc của hai
                    lớp, kết quả sẽ khó xử.
                  </p>
                  <p>
                    <strong>Giải Pháp:</strong> Thay vào đó, tạo một lớp mới và
                    đặt các trường và phương thức chịu trách nhiệm cho chức năng
                    tương ứng vào đó.
                  </p>
                </div>
              </div>
              <div class="dl">
                <div class="dt">
                  <a href="/refactoring/techniques/moving-features-between-objects/inline-class">
                    Lồng Lớp
                  </a>
                </div>
                <div class="dd">
                  <p>
                    <strong>Vấn Đề:</strong> Một lớp hầu như không làm gì và
                    không chịu trách nhiệm cho bất cứ điều gì, và không có trách
                    nhiệm bổ sung nào được dự định cho nó.
                  </p>
                  <p>
                    <strong>Giải Pháp:</strong> Di chuyển tất cả các tính năng
                    từ lớp này sang lớp khác.
                  </p>
                </div>
              </div>
              <div class="dl">
                <div class="dt">
                  <a href="/refactoring/techniques/moving-features-between-objects/hide-delegate">
                    Ẩn Đại Diện
                  </a>
                </div>
                <div class="dd">
                  <p>
                    <strong>Vấn Đề:</strong> Khách hàng lấy đối tượng B từ một
                    trường hoặc phương thức của đối tượng A. Sau đó, khách hàng
                    gọi một phương thức của đối tượng B.
                  </p>
                  <p>
                    <strong>Giải Pháp:</strong> Tạo một phương thức mới trong
                    lớp A mà ủy nhiệm cuộc gọi cho đối tượng B. Bây giờ khách
                    hàng không biết về, hoặc phụ thuộc vào, lớp B.
                  </p>
                </div>
              </div>
              <div class="dl">
                <div class="dt">
                  <a href="/refactoring/techniques/moving-features-between-objects/remove-middle-man">
                    Xóa Trung Gian
                  </a>
                </div>
                <div class="dd">
                  <p>
                    <strong>Vấn Đề:</strong> Một lớp có quá nhiều phương thức
                    chỉ đơn giản ủy nhiệm cho các đối tượng khác.
                  </p>
                  <p>
                    <strong>Giải Pháp:</strong> Xóa các phương thức này và buộc
                    khách hàng gọi trực tiếp các phương thức kết thúc.
                  </p>
                </div>
              </div>
              <div class="dl">
                <div class="dt">
                  <a href="/refactoring/techniques/moving-features-between-objects/introduce-foreign-method">
                    Giới Thiệu Phương Thức Ngoại Lai
                  </a>
                </div>
                <div class="dd">
                  <p>
                    <strong>Vấn Đề:</strong> Một lớp tiện ích không chứa phương
                    thức mà bạn cần và bạn không thể thêm phương thức vào lớp
                    đó.
                  </p>
                  <p>
                    <strong>Giải Pháp:</strong> Thêm phương thức vào lớp khách
                    hàng và chuyển một đối tượng của lớp tiện ích vào nó như là
                    một tham số.
                  </p>
                </div>
              </div>
              <div class="dl">
                <div class="dt">
                  <a href="/refactoring/techniques/moving-features-between-objects/introduce-local-extension">
                    Giới Thiệu Mở Rộng Địa Phương
                  </a>
                </div>
                <div class="dd">
                  <p>
                    <strong>Vấn Đề:</strong> Một lớp tiện ích không chứa một số
                    phương thức mà bạn cần. Nhưng bạn không thể thêm các phương
                    thức này vào lớp đó.
                  </p>
                  <p>
                    <strong>Giải Pháp:</strong> Tạo một lớp mới chứa các phương
                    thức và làm cho nó trở thành lớp con hoặc bộ bao của lớp
                    tiện ích đó.
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
                href="/refactoring/techniques/moving-features-between-objects/move-method"
                class="btn btn-primary"
              >
                Di Chuyển Phương Thức&nbsp;
                <span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/techniques/composing-methods/substitute-algorithm"
                class="btn btn-default"
              >
                <span class="fa fa-arrow-left"></span>&nbsp;Thay Thế Thuật Toán
              </a>
            </div>
          </nav>
        </div>

        <aside class="feature content-secondary"></aside>
      </div>
    </main>
  );
};

export default ContentMovingFeaturesBetweenObjects;
