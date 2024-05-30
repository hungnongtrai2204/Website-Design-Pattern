const ContentSmell = () => {
  return (
    <main
      role="main"
      class="main-content top-content center-content"
      data-page_class=""
    >
      <div class="main-content-container center-content-container">
        <div class="page list text">
          <div className="breadcrumb">
            <a className="home" href="/">
              <i className="fa fa-home"></i>
            </a>{" "}
            /{" "}
            <a className="type" href="/refactoring">
              Tái cấu trúc
            </a>
          </div>
          <h1 class="title">Mùi Mã</h1>

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
                  <a href="/refactoring/smells/bloaters">Mã Phình To</a>
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
                      <a href="/refactoring/smells/long-method">
                        Phương Thức Dài
                      </a>
                    </li>
                    <li>
                      <a href="/refactoring/smells/large-class">Lớp Lớn</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="/refactoring/smells/primitive-obsession">
                        Ám Ảnh Nguyên Thủy
                      </a>
                    </li>
                    <li>
                      <a href="/refactoring/smells/long-parameter-list">
                        Danh Sách Tham Số Dài
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="/refactoring/smells/data-clumps">Cụm Dữ Liệu</a>
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
                  <a href="/refactoring/smells/oo-abusers">
                    Lạm Dụng Hướng Đối Tượng
                  </a>
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
                      <a href="/refactoring/smells/alternative-classNamees-with-different-interfaces">
                        Các Lớp Thay Thế Với Giao Diện Khác Nhau
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="/refactoring/smells/refused-bequest">
                        Từ Chối Thừa Kế
                      </a>
                    </li>
                    <li>
                      <a href="/refactoring/smells/switch-statements">
                        Câu Lệnh Switch
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="/refactoring/smells/temporary-field">
                        Trường Tạm Thời
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
                  src="/images/refactoring/content/catalog/change-preventers1331.png?id=db5f332e55fd4b993e15c419baf1db41"
                  //   srcset="
                  //   /images/refactoring/content/catalog/change-preventers-2x.png?id=94d4444b1a3414ac3704f4ab53062f08 2x
                  // "
                />
              </div>
              <div className="cell-text">
                <h3 id="change-preventers">
                  <a href="/refactoring/smells/change-preventers">
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
                      <a href="/refactoring/smells/divergent-change">
                        Thay Đổi Phân Kỳ
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="/refactoring/smells/parallel-inheritance-hierarchies">
                        Cấu Trúc Kế Thừa Song Song
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="/refactoring/smells/shotgun-surgery">
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
                  <a href="/refactoring/smells/dispensables">
                    Thành Phần Dư Thừa
                  </a>
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
                      <a href="/refactoring/smells/comments">Chú Thích</a>
                    </li>
                    <li>
                      <a href="/refactoring/smells/duplicate-code">
                        Mã Trùng Lặp
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="/refactoring/smells/data-class">Lớp Dữ Liệu</a>
                    </li>
                    <li>
                      <a href="/refactoring/smells/dead-code">Mã Chết</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="/refactoring/smells/lazy-class">
                        Lớp Lười Biếng
                      </a>
                    </li>
                    <li>
                      <a href="/refactoring/smells/speculative-generality">
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
                  <a href="/refactoring/smells/couplers">
                    Các Yếu Tố Liên Kết Quá Mức
                  </a>
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
                      <a href="/refactoring/smells/feature-envy">
                        Ganh Tỵ Tính Năng
                      </a>
                    </li>
                    <li>
                      <a href="/refactoring/smells/inappropriate-intimacy">
                        Quan Hệ Quá Gần Gũi
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="/refactoring/smells/incomplete-library-class">
                        Lớp Thư Viện Không Hoàn Chỉnh
                      </a>
                    </li>
                    <li>
                      <a href="/refactoring/smells/message-chains">
                        Chuỗi Thông Điệp
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="/refactoring/smells/middle-man">
                        Người Trung Gian
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

export default ContentSmell;
