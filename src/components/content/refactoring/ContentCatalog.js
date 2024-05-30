const ContentCatalog = () => {
  return (
    <main
      role="main"
      className="main-content top-content center-content"
      data-page_class=""
    >
      <div className="main-content-container center-content-container">
        <div className="page list text">
          <div className="breadcrumb">
            <a className="home" href="/">
              <i className="fa fa-home"></i>
            </a>{" "}
            /{" "}
            <a className="type" href="/refactoring">
              Tái cấu trúc
            </a>
          </div>
          <h1 className="title">Danh mục các kỹ thuật tái cấu trúc</h1>

          <h2 id="code-smells">Mùi Mã</h2>

          <p>
            — Cái gì? Làm sao mã nguồn lại có thể "bốc mùi" được chứ??
            <br />— Chà, nó không có mũi... nhưng nó chắc chắn có thể bốc mùi!
          </p>

          <div className="section-bordered link-list">
            <div className="cell-flex">
              <div className="cell-image">
                <img
                  width="160"
                  height="280"
                  src="/images/refactoring/content/catalog/bloatersae0b.png?id=32a44a371122874ebd1e8a2cbb9202b9"
                  //   srcset="
                  //   /images/refactoring/content/catalog/bloaters-2x.png?id=21e2800a3c877cc37b95103bcf6ec5df 2x
                  // "
                />
              </div>
              <div className="cell-text">
                <h3 id="bloaters">
                  <a href="/smells/bloaters">Mã Phình To</a>
                </h3>

                <div className="annotation">
                  <p>
                    Mã phình to là các đoạn mã, phương thức và lớp đã tăng lên
                    kích thước khổng lồ đến mức khó làm việc với chúng. Thông
                    thường, những mùi mã này không xuất hiện ngay lập tức, mà
                    chúng tích tụ dần dần theo thời gian khi chương trình phát
                    triển (và đặc biệt là khi không ai nỗ lực loại bỏ chúng).
                  </p>
                </div>

                <div className="catalog-list">
                  <ul>
                    <li>
                      <a href="/smells/long-method">Phương Thức Dài</a>
                    </li>
                    <li>
                      <a href="/smells/large-class">Lớp Lớn</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="/smells/primitive-obsession">
                        Ám Ảnh Nguyên Thủy
                      </a>
                    </li>
                    <li>
                      <a href="/smells/long-parameter-list">
                        Danh Sách Tham Số Dài
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="/smells/data-clumps">Cụm Dữ Liệu</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="section-bordered link-list">
            <div className="cell-flex">
              <div className="cell-image">
                <img
                  width="160"
                  height="280"
                  src="/images/refactoring/content/catalog/oo-abusersd646.png?id=dee31050499d8d6b5a2d5b2e84e68cc8"
                  //   srcset="
                  //   /images/refactoring/content/catalog/oo-abusers-2x.png?id=d42468d27ca548c870a47b2ed08c0a16 2x
                  // "
                />
              </div>
              <div className="cell-text">
                <h3 id="oo-abusers">
                  <a href="/smells/oo-abusers">Lạm Dụng Hướng Đối Tượng</a>
                </h3>
                <div className="annotation">
                  <p>
                    Tất cả những mùi mã (code smell) này đều là do việc áp dụng
                    không đầy đủ hoặc không chính xác các nguyên tắc của lập
                    trình hướng đối tượng (OOP).
                  </p>
                </div>
                <div className="catalog-list">
                  <ul>
                    <li>
                      <a href="/smells/alternative-classNamees-with-different-interfaces">
                        Các Lớp Thay Thế Với Giao Diện Khác Nhau
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="/smells/refused-bequest">Từ Chối Thừa Kế</a>
                    </li>
                    <li>
                      <a href="/smells/switch-statements">Câu Lệnh Switch</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="/smells/temporary-field">Trường Tạm Thời</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="section-bordered link-list">
            <div className="cell-flex">
              <div className="cell-image">
                <img
                  width="160"
                  height="280"
                  src="/images/refactoring/content/catalog/change-preventers1331.png?id=db5f332e55fd4b993e15c419baf1db41"
                  //   srcset="
                  //   /images/refactoring/content/catalog/change-preventers-2x.png?id=94d4444b1a3414ac3704f4ab53062f08 2x
                  // "
                />
              </div>
              <div className="cell-text">
                <h3 id="change-preventers">
                  <a href="/smells/change-preventers">
                    Các Yếu Tố Ngăn Cản Thay Đổi
                  </a>
                </h3>
                <div className="annotation">
                  <p>
                    Các yếu tố ngăn cản thay đổi (Change Preventers) là những
                    mùi mã (code smells) cho thấy việc thay đổi một phần của mã
                    nguồn sẽ yêu cầu phải thay đổi nhiều nơi khác trong hệ
                    thống. Điều này làm cho việc phát triển chương trình trở nên
                    phức tạp và tốn kém hơn nhiều.
                  </p>
                </div>
                <div className="catalog-list">
                  <ul>
                    <li>
                      <a href="/smells/divergent-change">Thay Đổi Phân Kỳ</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="/smells/parallel-inheritance-hierarchies">
                        Cấu Trúc Kế Thừa Song Song
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="/smells/shotgun-surgery">
                        Phẫu Thuật Bằng Súng Săn
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="section-bordered link-list">
            <div className="cell-flex">
              <div className="cell-image">
                <img
                  width="160"
                  height="280"
                  src="/images/refactoring/content/catalog/dispensables12b8.png?id=b1072dc9efcf8c0374ddbd7e0b8d496f"
                  //   srcset="
                  //   /images/refactoring/content/catalog/dispensables-2x.png?id=a316a726f68f8778cdfd38e850d00b8b 2x
                  // "
                />
              </div>
              <div className="cell-text">
                <h3 id="dispensables">
                  <a href="/smells/dispensables">Thành Phần Dư Thừa</a>
                </h3>
                <div className="annotation">
                  <p>
                    Thành phần dư thừa là những thành phần không có mục đích rõ
                    ràng và không cần thiết, sự vắng mặt của chúng sẽ làm cho mã
                    nguồn sạch hơn, hiệu quả hơn và dễ hiểu hơn.
                  </p>
                </div>
                <div className="catalog-list">
                  <ul>
                    <li>
                      <a href="/smells/comments">Chú Thích</a>
                    </li>
                    <li>
                      <a href="/smells/duplicate-code">Mã Trùng Lặp</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="/smells/data-class">Lớp Dữ Liệu</a>
                    </li>
                    <li>
                      <a href="/smells/dead-code">Mã Chết</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="/smells/lazy-class">Lớp Lười Biếng</a>
                    </li>
                    <li>
                      <a href="/smells/speculative-generality">
                        Tính Tổng Quát Phỏng Đoán
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div
            className="section-bordered link-list"
            style={{
              borderBottom: "none",
            }}
          >
            <div className="cell-flex">
              <div className="cell-image">
                <img
                  width="160"
                  height="280"
                  src="/images/refactoring/content/catalog/couplers15c1.png?id=1a0e96c005372053d5823ccb5282ae7d"
                  //   srcset="
                  //   /images/refactoring/content/catalog/couplers-2x.png?id=86e33d80273d564bd4d48a554167a7c9 2x
                  // "
                />
              </div>
              <div className="cell-text">
                <h3 id="couplers">
                  <a href="/smells/couplers">Các Yếu Tố Liên Kết Quá Mức</a>
                </h3>
                <div className="annotation">
                  <p>
                    Tất cả các mùi mã trong nhóm này đều góp phần vào việc liên
                    kết quá mức giữa các lớp hoặc cho thấy điều gì sẽ xảy ra nếu
                    việc liên kết được thay thế bằng ủy quyền quá mức.
                  </p>
                </div>
                <div className="catalog-list">
                  <ul>
                    <li>
                      <a href="/smells/feature-envy">Ganh Tỵ Tính Năng</a>
                    </li>
                    <li>
                      <a href="/smells/inappropriate-intimacy">
                        Quan Hệ Quá Gần Gũi
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="/smells/incomplete-library-class">
                        Lớp Thư Viện Không Hoàn Chỉnh
                      </a>
                    </li>
                    <li>
                      <a href="/smells/message-chains">Chuỗi Thông Điệp</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="/smells/middle-man">Người Trung Gian</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2 id="refactoring" className="h1">
            Các Kỹ Thuật Tái Cấu Trúc
          </h2>

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
                  <a href="/techniques/composing-methods">
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
                      <a href="/extract-method">Trích Xuất Phương Thức</a>
                    </li>
                    <li>
                      <a href="/inline-method">Gộp Phương Thức</a>
                    </li>
                    <li>
                      <a href="/extract-variable">Trích Xuất Biến</a>
                    </li>
                    <li>
                      <a href="/inline-temp">Gộp Biến Tạm</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="/replace-temp-with-query">
                        Thay Thế Biến Tạm Bằng Truy Vấn
                      </a>
                    </li>
                    <li>
                      <a href="/split-temporary-variable">Tách Biến Tạm Thời</a>
                    </li>
                    <li>
                      <a href="/remove-assignments-to-parameters">
                        Loại Bỏ Gán Giá Trị Cho Tham Số
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="/replace-method-with-method-object">
                        Thay Thế Phương Thức Bằng Đối Tượng Phương Thức
                      </a>
                    </li>
                    <li>
                      <a href="/substitute-algorithm">Thay Thế Thuật Toán</a>
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
                  <a href="techniques/moving-features-between-objects.html">
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
                      <a href="/move-method">Di Chuyển Phương Thức</a>
                    </li>
                    <li>
                      <a href="/move-field">Di chuyển trường</a>
                    </li>
                    <li>
                      <a href="/extract-class">Trích xuất lớp</a>
                    </li>
                    <li>
                      <a href="/inline-class">Gộp lớp</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="/hide-delegate">Ẩn ủy nhiệm</a>
                    </li>
                    <li>
                      <a href="/remove-middle-man">Loại bỏ trung gian</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="/introduce-foreign-method">
                        Giới thiệu phương thức ngoại lai
                      </a>
                    </li>
                    <li>
                      <a href="/introduce-local-extension">
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
                  <a href="/techniques/organizing-data">Tổ Chức Dữ Liệu</a>
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
                      <a href="/change-value-to-reference">
                        Chuyển Giá Trị Thành Tham Chiếu
                      </a>
                    </li>
                    <li>
                      <a href="/change-reference-to-value">
                        Chuyển Tham Chiếu Thành Giá Trị
                      </a>
                    </li>
                    <li>
                      <a href="/duplicate-observed-data">
                        Sao Chép Dữ Liệu Quan Sát
                      </a>
                    </li>
                    <li>
                      <a href="/self-encapsulate-field">Tự Đóng Gói Trường</a>
                    </li>
                    <li>
                      <a href="/replace-data-value-with-object">
                        Thay Thế Giá Trị Dữ Liệu Bằng Đối Tượng
                      </a>
                    </li>
                    <li>
                      <a href="/replace-array-with-object">
                        Thay Thế Mảng Bằng Đối Tượng
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="/change-unidirectional-association-to-bidirectional">
                        Chuyển Mối Liên Kết Một Chiều Thành Hai Chiều
                      </a>
                    </li>
                    <li>
                      <a href="/change-bidirectional-association-to-unidirectional">
                        Chuyển Mối Liên Kết Hai Chiều Thành Một Chiều
                      </a>
                    </li>
                    <li>
                      <a href="/encapsulate-field">Đóng Gói Trường</a>
                    </li>
                    <li>
                      <a href="/encapsulate-collection">Đóng Gói Tập Hợp</a>
                    </li>
                    <li>
                      <a href="/replace-magic-number-with-symbolic-constant">
                        Thay Thế Số Ma Thuật Bằng Hằng Số Tượng Trưng
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="/replace-type-code-with-class">
                        Thay Thế Mã Kiểu Bằng Lớp
                      </a>
                    </li>
                    <li>
                      <a href="/replace-type-code-with-subclasses">
                        Thay Thế Mã Kiểu Bằng Lớp Con
                      </a>
                    </li>
                    <li>
                      <a href="/replace-type-code-with-state-strategy">
                        Thay Thế Mã Kiểu Bằng Trạng Thái/Chiến Lược
                      </a>
                    </li>
                    <li>
                      <a href="/replace-subclass-with-fields">
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
                  <a href="/techniques/simplifying-conditional-expressions">
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
                      <a href="/consolidate-conditional-expression">
                        Hợp Nhất Biểu Thức Điều Kiện
                      </a>
                    </li>
                    <li>
                      <a href="/consolidate-duplicate-conditional-fragments">
                        Hợp Nhất Các Đoạn Mã Điều Kiện Trùng Lặp
                      </a>
                    </li>
                    <li>
                      <a href="/decompose-conditional">Phân Rã Điều Kiện</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="/replace-conditional-with-polymorphism">
                        Thay Thế Điều Kiện Bằng Đa Hình
                      </a>
                    </li>
                    <li>
                      <a href="/remove-control-flag">Loại Bỏ Cờ Điều Khiển</a>
                    </li>
                    <li>
                      <a href="/replace-nested-conditional-with-guard-clauses">
                        Thay thế điều kiện lồng nhau bằng mệnh đề bảo vệ
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="/introduce-null-object">
                        Giới thiệu đối tượng null
                      </a>
                    </li>
                    <li>
                      <a href="/introduce-assertion">Giới thiệu khẳng định</a>
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
                  <a href="/techniques/simplifying-method-calls">
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
                      <a href="/add-parameter">Thêm Tham Số</a>
                    </li>
                    <li>
                      <a href="/remove-parameter">Loại Bỏ Tham Số</a>
                    </li>
                    <li>
                      <a href="/rename-method">Đổi Tên Phương Thức</a>
                    </li>
                    <li>
                      <a href="/separate-query-from-modifier">
                        Tách Truy Vấn Khỏi Bộ Sửa Đổi
                      </a>
                    </li>
                    <li>
                      <a href="/parameterize-method">Tham Số Hóa Phương Thức</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="/introduce-parameter-object">
                        Giới Thiệu Đối Tượng Tham Số
                      </a>
                    </li>
                    <li>
                      <a href="/preserve-whole-object">
                        Bảo Toàn Toàn Bộ Đối Tượng
                      </a>
                    </li>
                    <li>
                      <a href="/remove-setting-method">
                        Loại Bỏ Phương Thức Thiết Lập
                      </a>
                    </li>
                    <li>
                      <a href="/replace-parameter-with-explicit-methods">
                        Thay Thế Tham Số Bằng Các Phương Thức Rõ Ràng
                      </a>
                    </li>
                    <li>
                      <a href="/replace-parameter-with-method-call">
                        Thay Thế Tham Số Bằng Lời Gọi Phương Thức
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="/hide-method">Ẩn Phương Thức</a>
                    </li>
                    <li>
                      <a href="/replace-constructor-with-factory-method">
                        Thay Thế Hàm Tạo Bằng Phương Thức Factory
                      </a>
                    </li>
                    <li>
                      <a href="/replace-error-code-with-exception">
                        Thay Thế Mã Lỗi Bằng Ngoại Lệ
                      </a>
                    </li>
                    <li>
                      <a href="/replace-exception-with-test">
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
                  <a href="/techniques/dealing-with-generalization">
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
                      <a href="/pull-up-field">Kéo Trường Lên</a>
                    </li>
                    <li>
                      <a href="/pull-up-method">Kéo Phương Thức Lên</a>
                    </li>
                    <li>
                      <a href="/pull-up-constructor-body">
                        Kéo Nội Dung Hàm Tạo Lên
                      </a>
                    </li>
                    <li>
                      <a href="/push-down-field">Đẩy Trường Xuống</a>
                    </li>
                    <li>
                      <a href="/push-down-method">Đẩy Phương Thức Xuống</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="/extract-subclass">Trích Xuất Lớp Con</a>
                    </li>
                    <li>
                      <a href="/extract-superclass">Trích Xuất Lớp Cha</a>
                    </li>
                    <li>
                      <a href="/extract-interface">Trích Xuất Giao Diện</a>
                    </li>
                    <li>
                      <a href="/collapse-hierarchy">
                        Thu Gọn Hệ Thống Phân Cấp
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="/form-template-method">Tạo Phương Thức Mẫu</a>
                    </li>
                    <li>
                      <a href="/replace-inheritance-with-delegation">
                        Thay Thế Kế Thừa Bằng Ủy Quyền
                      </a>
                    </li>
                    <li>
                      <a href="/replace-delegation-with-inheritance">
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

export default ContentCatalog;
