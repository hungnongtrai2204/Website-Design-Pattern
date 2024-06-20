const ContentTechniques = () => {
  return (
    <main
      role="main"
      class="main-content top-content center-content"
      data-page_class=""
    >
      <div class="main-content-container center-content-container">
        <div class="page list text">
          <div class="breadcrumb">
            <a class="home" href="/">
              <i class="fa fa-home"></i>
            </a>{" "}
            /{" "}
            <a class="type" href="/refactoring">
              Tái Cấu Trúc
            </a>
          </div>
          <h1 class="title">Các Kỹ Thuật Tái Cấu Trúc</h1>

          <div
            className="section-bordered link-list"
            style={{ borderTop: "none" }}
          >
            <div className="cell-flex">
              <div className="cell-image">
                <img
                  width="160"
                  height="280"
                  src="/images/refactoring/content/catalog/composing-methods1873.png?id=953854e802753495812cb9b2686765f7"
                  //   srcset="
                  //   /images/refactoring/content/catalog/composing-methods-2x.png?id=75620eee35ec53ff9e21955cba2c70c9 2x
                  // "
                />
              </div>
              <div className="cell-text">
                <h3 id="composing-methods">
                  <a href="/refactoring/techniques/composing-methods">
                    Sắp Xếp Phương Thức
                  </a>
                </h3>
                <div className="annotation">
                  <p>
                    Phần lớn việc tái cấu trúc tập trung vào việc sắp xếp các
                    phương thức một cách chính xác. Trong hầu hết các trường
                    hợp, các phương thức quá dài là nguồn gốc của mọi vấn đề. Sự
                    phức tạp của mã nguồn bên trong các phương thức này che giấu
                    logic thực thi và làm cho phương thức cực kỳ khó hiểu — và
                    thậm chí còn khó thay đổi hơn.
                  </p>
                  <p>
                    Các kỹ thuật tái cấu trúc trong nhóm này giúp sắp xếp hợp lý
                    các phương thức, loại bỏ mã trùng lặp và mở đường cho các
                    cải tiến trong tương lai.
                  </p>
                </div>
                <div className="catalog-list">
                  <ul>
                    <li>
                      <a href="/refactoring/techniques/composing-methods/extract-method">
                        Trích Xuất Phương Thức
                      </a>
                    </li>
                    <li>
                      <a href="/refactoring/techniques/composing-methods/inline-method">
                        Gộp Phương Thức
                      </a>
                    </li>
                    <li>
                      <a href="/refactoring/techniques/composing-methods/extract-variable">
                        Trích Xuất Biến
                      </a>
                    </li>
                    <li>
                      <a href="/refactoring/techniques/composing-methods/inline-temp">
                        Gộp Biến Tạm
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="/refactoring/techniques/composing-methods/replace-temp-with-query">
                        Thay Thế Biến Tạm Bằng Truy Vấn
                      </a>
                    </li>
                    <li>
                      <a href="/refactoring/techniques/composing-methods/split-temporary-variable">
                        Tách Biến Tạm Thời
                      </a>
                    </li>
                    <li>
                      <a href="/refactoring/techniques/composing-methods/remove-assignments-to-parameters">
                        Loại Bỏ Gán Giá Trị Cho Tham Số
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="/refactoring/techniques/composing-methods/replace-method-with-method-object">
                        Thay Thế Phương Thức Bằng Đối Tượng Phương Thức
                      </a>
                    </li>
                    <li>
                      <a href="/refactoring/techniques/composing-methods/substitute-algorithm">
                        Thay Thế Thuật Toán
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div
            className="section-bordered link-list"
            style={{ borderTop: "none" }}
          >
            <div className="cell-flex">
              <div className="cell-image">
                <img
                  width="160"
                  height="280"
                  src="/images/refactoring/content/catalog/moving-features-between-objectsc45b.png?id=8ba49e26381112792e32172edf220524"
                  //   srcset="
                  //   /images/refactoring/content/catalog/moving-features-between-objects-2x.png?id=5503a838a78b344754e92cd116207d96 2x
                  // "
                />
              </div>
              <div className="cell-text">
                <h3 id="moving-features-between-objects">
                  <a href="/refactoring/techniques/moving-features-between-objects">
                    Di Chuyển Tính Năng Giữa Các Đối Tượng
                  </a>
                </h3>
                <div className="annotation">
                  <p>
                    Ngay cả khi bạn đã phân phối chức năng giữa các lớp khác
                    nhau theo cách không hoàn hảo, vẫn còn hy vọng.
                  </p>
                  <p>
                    Các kỹ thuật tái cấu trúc này cho thấy cách di chuyển chức
                    năng giữa các lớp một cách an toàn, tạo lớp mới và ẩn chi
                    tiết triển khai khỏi truy cập công khai.
                  </p>
                </div>
                <div className="catalog-list">
                  <ul>
                    <li>
                      <a href="/refactoring/techniques/moving-features-between-objects/move-method">
                        Di Chuyển Phương Thức
                      </a>
                    </li>
                    <li>
                      <a href="/refactoring/techniques/moving-features-between-objects/move-field">
                        Di chuyển trường
                      </a>
                    </li>
                    <li>
                      <a href="/refactoring/techniques/moving-features-between-objects/extract-class">
                        Trích xuất lớp
                      </a>
                    </li>
                    <li>
                      <a href="/refactoring/techniques/moving-features-between-objects/inline-class">
                        Gộp lớp
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="/refactoring/techniques/moving-features-between-objects/hide-delegate">
                        Ẩn ủy nhiệm
                      </a>
                    </li>
                    <li>
                      <a href="/refactoring/techniques/moving-features-between-objects/remove-middle-man">
                        Loại bỏ trung gian
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="/refactoring/techniques/moving-features-between-objects/introduce-foreign-method">
                        Giới thiệu phương thức ngoại lai
                      </a>
                    </li>
                    <li>
                      <a href="/refactoring/techniques/moving-features-between-objects/introduce-local-extension">
                        Giới thiệu phần mở rộng cục bộ
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div
            className="section-bordered link-list"
            style={{ borderTop: "none" }}
          >
            <div className="cell-flex">
              <div className="cell-image">
                <img
                  width="160"
                  height="280"
                  src="/images/refactoring/content/catalog/organizing-datac280.png?id=0be19b5980545dccb976d377ec731d30"
                  //   srcset="
                  //   /images/refactoring/content/catalog/organizing-data-2x.png?id=881db3197ef8ea87bd55320073462caa 2x
                  // "
                />
              </div>
              <div className="cell-text">
                <h3 id="organizing-data">
                  <a href="/refactoring/techniques/organizing-data">
                    Tổ Chức Dữ Liệu
                  </a>
                </h3>
                <div className="annotation">
                  <p>
                    Các kỹ thuật tái cấu trúc này giúp xử lý dữ liệu, thay thế
                    các kiểu dữ liệu nguyên thủy bằng các chức năng phong phú
                    của lớp. Một kết quả quan trọng khác là gỡ rối các mối liên
                    kết giữa các lớp, giúp các lớp dễ di chuyển và tái sử dụng
                    hơn.
                  </p>
                </div>
                <div className="catalog-list">
                  <ul>
                    <li>
                      <a href="/refactoring/techniques/organizing-data/change-value-to-reference">
                        Chuyển Giá Trị Thành Tham Chiếu
                      </a>
                    </li>
                    <li>
                      <a href="/refactoring/techniques/organizing-data/change-reference-to-value">
                        Chuyển Tham Chiếu Thành Giá Trị
                      </a>
                    </li>
                    <li>
                      <a href="/refactoring/techniques/organizing-data/duplicate-observed-data">
                        Sao Chép Dữ Liệu Quan Sát
                      </a>
                    </li>
                    <li>
                      <a href="/refactoring/techniques/organizing-data/self-encapsulate-field">
                        Tự Đóng Gói Trường
                      </a>
                    </li>
                    <li>
                      <a href="/refactoring/techniques/organizing-data/replace-data-value-with-object">
                        Thay Thế Giá Trị Dữ Liệu Bằng Đối Tượng
                      </a>
                    </li>
                    <li>
                      <a href="/refactoring/techniques/organizing-data/replace-array-with-object">
                        Thay Thế Mảng Bằng Đối Tượng
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="/refactoring/techniques/organizing-data/change-unidirectional-association-to-bidirectional">
                        Chuyển Mối Liên Kết Một Chiều Thành Hai Chiều
                      </a>
                    </li>
                    <li>
                      <a href="/refactoring/techniques/organizing-data/change-bidirectional-association-to-unidirectional">
                        Chuyển Mối Liên Kết Hai Chiều Thành Một Chiều
                      </a>
                    </li>
                    <li>
                      <a href="/refactoring/techniques/organizing-data/encapsulate-field">
                        Đóng Gói Trường
                      </a>
                    </li>
                    <li>
                      <a href="/refactoring/techniques/organizing-data/encapsulate-collection">
                        Đóng Gói Tập Hợp
                      </a>
                    </li>
                    <li>
                      <a href="/refactoring/techniques/organizing-data/replace-magic-number-with-symbolic-constant">
                        Thay Thế Số Ma Thuật Bằng Hằng Số Tượng Trưng
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="/refactoring/techniques/organizing-data/replace-type-code-with-class">
                        Thay Thế Mã Kiểu Bằng Lớp
                      </a>
                    </li>
                    <li>
                      <a href="/refactoring/techniques/organizing-data/replace-type-code-with-subclasses">
                        Thay Thế Mã Kiểu Bằng Lớp Con
                      </a>
                    </li>
                    <li>
                      <a href="/refactoring/techniques/organizing-data/replace-type-code-with-state-strategy">
                        Thay Thế Mã Kiểu Bằng Trạng Thái/Chiến Lược
                      </a>
                    </li>
                    <li>
                      <a href="/refactoring/techniques/organizing-data/replace-subclass-with-fields">
                        Thay Thế Lớp Con Bằng Trường
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div
            className="section-bordered link-list"
            style={{ borderTop: "none" }}
          >
            <div className="cell-flex">
              <div className="cell-image">
                <img
                  width="160"
                  height="280"
                  src="/images/refactoring/content/catalog/simplifying-conditional-expressions908f.png?id=a551572d527946cd03b647098b67776d"
                  //   srcset="
                  //   /images/refactoring/content/catalog/simplifying-conditional-expressions-2x.png?id=a6ffc35feb77eac6108ee31655ae92d1 2x
                  // "
                />
              </div>
              <div className="cell-text">
                <h3 id="simplifying-conditional-expressions">
                  <a href="/refactoring/techniques/simplifying-conditional-expressions">
                    Đơn giản hóa biểu thức điều kiện
                  </a>
                </h3>
                <div className="annotation">
                  <p>
                    Các câu lệnh điều kiện có xu hướng trở nên ngày càng phức
                    tạp về mặt logic theo thời gian và cũng có nhiều kỹ thuật để
                    đối phó với điều này.
                  </p>
                </div>
                <div className="catalog-list">
                  <ul>
                    <li>
                      <a href="/refactoring/techniques/simplifying-conditional-expressions/consolidate-conditional-expression">
                        Hợp Nhất Biểu Thức Điều Kiện
                      </a>
                    </li>
                    <li>
                      <a href="/refactoring/techniques/simplifying-conditional-expressions/consolidate-duplicate-conditional-fragments">
                        Hợp Nhất Các Đoạn Mã Điều Kiện Trùng Lặp
                      </a>
                    </li>
                    <li>
                      <a href="/refactoring/techniques/simplifying-conditional-expressions/decompose-conditional">
                        Phân Rã Điều Kiện
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="/refactoring/techniques/simplifying-conditional-expressions/replace-conditional-with-polymorphism">
                        Thay Thế Điều Kiện Bằng Đa Hình
                      </a>
                    </li>
                    <li>
                      <a href="/refactoring/techniques/simplifying-conditional-expressions/remove-control-flag">
                        Loại Bỏ Cờ Điều Khiển
                      </a>
                    </li>
                    <li>
                      <a href="/refactoring/techniques/simplifying-conditional-expressions/replace-nested-conditional-with-guard-clauses">
                        Thay thế điều kiện lồng nhau bằng mệnh đề bảo vệ
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="/refactoring/techniques/simplifying-conditional-expressions/introduce-null-object">
                        Giới thiệu đối tượng null
                      </a>
                    </li>
                    <li>
                      <a href="/refactoring/techniques/simplifying-conditional-expressions/introduce-assertion">
                        Giới thiệu khẳng định
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div
            className="section-bordered link-list"
            style={{ borderTop: "none" }}
          >
            <div className="cell-flex">
              <div className="cell-image">
                <img
                  width="160"
                  height="280"
                  src="/images/refactoring/content/catalog/simplifying-method-calls16bd.png?id=0af0ac74a5d0d7f8ac33a58b4a479ee6"
                  //   srcset="
                  //   /images/refactoring/content/catalog/simplifying-method-calls-2x.png?id=075a4082f9a85d01391184efa3c8f1a1 2x
                  // "
                />
              </div>
              <div className="cell-text">
                <h3 id="simplifying-method-calls">
                  <a href="/refactoring/techniques/simplifying-method-calls">
                    Đơn Giản Hóa Lời Gọi Phương Thức
                  </a>
                </h3>
                <div className="annotation">
                  <p>
                    Các kỹ thuật này giúp đơn giản hóa và dễ hiểu hơn các lời
                    gọi phương thức. Từ đó, đơn giản hóa giao diện tương tác
                    giữa các lớp.
                  </p>
                </div>
                <div className="catalog-list">
                  <ul>
                    <li>
                      <a href="/refactoring/techniques/simplifying-method-calls/add-parameter">
                        Thêm Tham Số
                      </a>
                    </li>
                    <li>
                      <a href="/refactoring/techniques/simplifying-method-calls/remove-parameter">
                        Loại Bỏ Tham Số
                      </a>
                    </li>
                    <li>
                      <a href="/refactoring/techniques/simplifying-method-calls/rename-method">
                        Đổi Tên Phương Thức
                      </a>
                    </li>
                    <li>
                      <a href="/refactoring/techniques/simplifying-method-calls/separate-query-from-modifier">
                        Tách Truy Vấn Khỏi Bộ Sửa Đổi
                      </a>
                    </li>
                    <li>
                      <a href="/refactoring/techniques/simplifying-method-calls/parameterize-method">
                        Tham Số Hóa Phương Thức
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="/refactoring/techniques/simplifying-method-calls/introduce-parameter-object">
                        Giới Thiệu Đối Tượng Tham Số
                      </a>
                    </li>
                    <li>
                      <a href="/refactoring/techniques/simplifying-method-calls/preserve-whole-object">
                        Bảo Toàn Toàn Bộ Đối Tượng
                      </a>
                    </li>
                    <li>
                      <a href="/refactoring/techniques/simplifying-method-calls/remove-setting-method">
                        Loại Bỏ Phương Thức Thiết Lập
                      </a>
                    </li>
                    <li>
                      <a href="/refactoring/techniques/simplifying-method-calls/replace-parameter-with-explicit-methods">
                        Thay Thế Tham Số Bằng Các Phương Thức Rõ Ràng
                      </a>
                    </li>
                    <li>
                      <a href="/refactoring/techniques/simplifying-method-calls/replace-parameter-with-method-call">
                        Thay Thế Tham Số Bằng Lời Gọi Phương Thức
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="/refactoring/techniques/simplifying-method-calls/hide-method">
                        Ẩn Phương Thức
                      </a>
                    </li>
                    <li>
                      <a href="/refactoring/techniques/simplifying-method-calls/replace-constructor-with-factory-method">
                        Thay Thế Hàm Tạo Bằng Phương Thức Factory
                      </a>
                    </li>
                    <li>
                      <a href="/refactoring/techniques/simplifying-method-calls/replace-error-code-with-exception">
                        Thay Thế Mã Lỗi Bằng Ngoại Lệ
                      </a>
                    </li>
                    <li>
                      <a href="/refactoring/techniques/simplifying-method-calls/replace-exception-with-test">
                        Thay Thế Ngoại Lệ Bằng Kiểm Tra
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div
            className="section-bordered link-list"
            style={{ borderTop: "none" }}
          >
            <div className="cell-flex">
              <div className="cell-image">
                <img
                  width="160"
                  height="280"
                  src="/images/refactoring/content/catalog/dealing-with-generalizatione7ca.png?id=56357b115153175b2eb40563d936087c"
                  //   srcset="
                  //   /images/refactoring/content/catalog/dealing-with-generalization-2x.png?id=5187a4b8d010877a25761926c2f24a3c 2x
                  // "
                />
              </div>
              <div className="cell-text">
                <h3 id="dealing-with-generalization">
                  <a href="/refactoring/techniques/dealing-with-generalization">
                    Xử lý tính tổng quát hóa
                  </a>
                </h3>
                <div className="annotation">
                  <p>
                    Tính trừu tượng có nhóm kỹ thuật tái cấu trúc riêng, chủ yếu
                    liên quan đến việc di chuyển chức năng dọc theo hệ thống
                    phân cấp kế thừa của lớp, tạo các lớp và giao diện mới, và
                    thay thế kế thừa bằng ủy nhiệm và ngược lại.
                  </p>
                </div>
                <div className="catalog-list">
                  <ul>
                    <li>
                      <a href="/refactoring/techniques/dealing-with-generalization/pull-up-field">
                        Kéo Trường Lên
                      </a>
                    </li>
                    <li>
                      <a href="/refactoring/techniques/dealing-with-generalization/pull-up-method">
                        Kéo Phương Thức Lên
                      </a>
                    </li>
                    <li>
                      <a href="/refactoring/techniques/dealing-with-generalization/pull-up-constructor-body">
                        Kéo Nội Dung Hàm Tạo Lên
                      </a>
                    </li>
                    <li>
                      <a href="/refactoring/techniques/dealing-with-generalization/push-down-field">
                        Đẩy Trường Xuống
                      </a>
                    </li>
                    <li>
                      <a href="/refactoring/techniques/dealing-with-generalization/push-down-method">
                        Đẩy Phương Thức Xuống
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="/refactoring/techniques/dealing-with-generalization/extract-subclass">
                        Trích Xuất Lớp Con
                      </a>
                    </li>
                    <li>
                      <a href="/refactoring/techniques/dealing-with-generalization/extract-superclass">
                        Trích Xuất Lớp Cha
                      </a>
                    </li>
                    <li>
                      <a href="/refactoring/techniques/dealing-with-generalization/extract-interface">
                        Trích Xuất Giao Diện
                      </a>
                    </li>
                    <li>
                      <a href="/refactoring/techniques/dealing-with-generalization/collapse-hierarchy">
                        Thu Gọn Hệ Thống Phân Cấp
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="/refactoring/techniques/dealing-with-generalization/form-template-method">
                        Tạo Phương Thức Mẫu
                      </a>
                    </li>
                    <li>
                      <a href="/refactoring/techniques/dealing-with-generalization/replace-inheritance-with-delegation">
                        Thay Thế Kế Thừa Bằng Ủy Quyền
                      </a>
                    </li>
                    <li>
                      <a href="/refactoring/techniques/dealing-with-generalization/replace-delegation-with-inheritance">
                        Thay Thế Ủy Quyền Bằng Kế Thừa
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContentTechniques;
