import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  // console.log(location.pathname.includes("store"));
  return (
    <aside className="sidebar main-menu nano" style={{ overflow: "scroll" }}>
      <a href="#menu-close" className="navigation-toggle">
        <i className="fa fa-fw fa-times"></i>
      </a>
      <div className="nano-content">
        <div
          className="main-menu-lang d-none d-lg-flex main-menu-lang-count-8"
          style={{ opacity: "1" }}
        >
          <a
            href="index.html"
            className="locale-link locale-link-en"
            data-locale="en"
            title="English"
          >
            <span className="d-lg-none">English</span>
            <span className="d-none d-lg-inline">English</span>
          </a>
          <a
            href="es.html"
            className="locale-link locale-link-es"
            data-locale="es"
            title="Español"
          >
            <span className="d-lg-none">Español</span>
            <span className="d-none d-lg-inline">Español</span>
          </a>
          <a
            href="fr.html"
            className="locale-link locale-link-fr"
            data-locale="fr"
            title="Français"
          >
            <span className="d-lg-none">Français</span>
            <span className="d-none d-lg-inline">Français</span>
          </a>
          <a
            href="pl.html"
            className="locale-link locale-link-pl"
            data-locale="pl"
            title="Polski"
          >
            <span className="d-lg-none">Polski</span>
            <span className="d-none d-lg-inline">Polski</span>
          </a>
          <a
            href="pt-br.html"
            className="locale-link locale-link-pt-br"
            data-locale="pt-br"
            title="Português Brasileiro"
          >
            <span className="d-lg-none">Português Brasileiro</span>
            <span className="d-none d-lg-inline">Português-Br</span>
          </a>
          <a
            href="ru.html"
            className="locale-link locale-link-ru active"
            data-locale="ru"
            title="Русский"
          >
            <span className="d-lg-none">Tiếng Việt</span>
            <span className="d-none d-lg-inline">Tiếng Việt</span>
          </a>
          <a
            href="uk.html"
            className="locale-link locale-link-uk"
            data-locale="uk"
            title="Українська"
          >
            <span className="d-lg-none">Українська</span>
            <span className="d-none d-lg-inline">Українська</span>
          </a>
          <a
            href="https://refactoringguru.cn/"
            className="locale-link locale-link-zh"
            data-locale="zh"
            title="中文"
          >
            <span className="d-lg-none">中文</span>
            <span className="d-none d-lg-inline">中文</span>
          </a>
        </div>

        <a className="menu-brand" href="ru.html">
          <img
            width="200"
            height="241"
            loading="lazy"
            alt="Refactoring.Guru"
            src="/images/content-public/logos/logo-militaryd1c3.png?id=3eaf203cb26279327252e2c5f5d37c7f"
            //       srcset="
            //   /images/content-public/logos/logo-military-2x.png?id=5af1a599d8a4170c9a42e6fa18148b98 2x
            // "
          />
        </a>
        <div>
          <a className="russia-stop" href="ru/help-ukraine.html">
            HELP UKRAINE
            <br />
            <b>STOP RUSSIA</b>
          </a>
        </div>

        <div className="menu-container" style={{ position: "relative" }}>
          <ul className="menu-list trail active">
            <li
              // className="featured"
              // className=""
              // className="featured trail active"
              className={
                location.pathname.includes("store")
                  ? "featured trail active"
                  : ""
              }
            >
              <a href="/store">
                <i className="fa fa-fw fa-star" aria-hidden="true"></i> Nội Dung
                Cao Cấp
              </a>

              <ul>
                <li
                  // className="featured menu-fs15"
                  className={
                    location.pathname.includes("book")
                      ? "featured menu-fs15 trail active"
                      : "featured menu-fs15"
                  }
                >
                  <a href="/store/book">
                    <i className="fa fa-fw fa-book" aria-hidden="true"></i>{" "}
                    eBook Mẫu Thiết Kế
                  </a>
                </li>
                <li
                  className={
                    location.pathname.includes("course")
                      ? "featured menu-fs15 trail active"
                      : "featured menu-fs15"
                  }
                >
                  <a href="/store/course">
                    <i
                      className="fa fa-fw fa-graduation-cap"
                      aria-hidden="true"
                    ></i>{" "}
                    Học Tái Cấu Trúc
                  </a>
                </li>
              </ul>
            </li>
            <li
              className={
                location.pathname.includes("refactoring")
                  ? "featured trail active"
                  : ""
              }
            >
              <a href="/refactoring">
                <i className="fa fa-fw fa-scissors" aria-hidden="true"></i> Tái
                Cấu Trúc
              </a>

              <ul>
                <li
                  // className={
                  //   location.pathname.includes("refactoring")
                  //     ? "featured menu-fs15 trail "
                  //     : "featured menu-fs15"
                  // }
                  className={
                    location.pathname.includes("what-is-refactoring") ||
                    location.pathname.includes("technical-debt") ||
                    location.pathname.includes("when") ||
                    location.pathname.includes("how-to")
                      ? "featured menu-fs15 trail "
                      : "featured menu-fs15"
                  }
                >
                  <a href="/refactoring/what-is-refactoring">
                    Tái cấu trúc là gì
                  </a>

                  <ul>
                    <li
                      className={
                        location.pathname.includes("what-is-refactoring")
                          ? "featured menu-fs15 trail active"
                          : "featured menu-fs15"
                      }
                    >
                      <a href="/refactoring/what-is-refactoring">Mã Sạch</a>
                    </li>
                    <li
                      className={
                        location.pathname.includes("technical-debt")
                          ? "featured menu-fs15 trail active"
                          : "featured menu-fs15"
                      }
                    >
                      <a href="/refactoring/technical-debt">Nợ kỹ thuật</a>
                    </li>
                    <li
                      className={
                        location.pathname.includes("when")
                          ? "featured menu-fs15 trail active"
                          : "featured menu-fs15"
                      }
                    >
                      <a href="/refactoring/when">Khi nào cần tái cấu trúc</a>
                    </li>
                    <li
                      className={
                        location.pathname.includes("how-to")
                          ? "featured menu-fs15 trail active"
                          : "featured menu-fs15"
                      }
                    >
                      <a href="/refactoring/how-to">Cách tái cấu trúc</a>
                    </li>
                  </ul>
                </li>
                <li
                  className={
                    location.pathname.includes("catalog")
                      ? "featured menu-fs15 trail active"
                      : "featured menu-fs15"
                  }
                >
                  <a href="/refactoring/catalog"> Danh mục </a>
                </li>
                <li
                  className={
                    location.pathname.includes("smells")
                      ? `featured menu-fs15 trail ${
                          location.pathname == "/refactoring/smells"
                            ? "active"
                            : ""
                        }`
                      : "featured menu-fs15"
                  }
                >
                  <a href="/refactoring/smells"> Mùi Mã </a>

                  <ul>
                    <li
                      className={
                        location.pathname.includes("bloaters")
                          ? `featured menu-fs15 trail ${
                              location.pathname ==
                              "/refactoring/smells/bloaters"
                                ? "active"
                                : ""
                            }`
                          : "featured menu-fs15"
                      }
                    >
                      <a href="/refactoring/smells/bloaters">Mã Phình To</a>

                      <ul>
                        <li
                          className={
                            location.pathname.includes("long-method")
                              ? "featured menu-fs15 trail active"
                              : "featured menu-fs15"
                          }
                        >
                          <a href="/refactoring/smells/bloaters/long-method">
                            Phương Thức Dài
                          </a>
                        </li>
                        <li
                          className={
                            location.pathname.includes("large-class")
                              ? "featured menu-fs15 trail active"
                              : "featured menu-fs15"
                          }
                        >
                          <a href="/refactoring/smells/bloaters/large-class">
                            Lớp Lớn
                          </a>
                        </li>
                        <li
                          className={
                            location.pathname.includes("primitive-obsession")
                              ? "featured menu-fs15 trail active"
                              : "featured menu-fs15"
                          }
                        >
                          <a href="/refactoring/smells/bloaters/primitive-obsession">
                            Ám Ảnh Nguyên Thủy
                          </a>
                        </li>
                        <li
                          className={
                            location.pathname.includes("long-parameter-list")
                              ? "featured menu-fs15 trail active"
                              : "featured menu-fs15"
                          }
                        >
                          <a href="/refactoring/smells/bloaters/long-parameter-list">
                            Danh Sách Tham Số Dài
                          </a>
                        </li>
                        <li
                          className={
                            location.pathname.includes("data-clumps")
                              ? "featured menu-fs15 trail active"
                              : "featured menu-fs15"
                          }
                        >
                          <a href="/refactoring/smells/bloaters/data-clumps">
                            Cụm Dữ Liệu
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      className={
                        location.pathname.includes("oo-abusers")
                          ? `featured menu-fs15 trail ${
                              location.pathname ==
                              "/refactoring/smells/oo-abusers"
                                ? "active"
                                : ""
                            }`
                          : "featured menu-fs15"
                      }
                    >
                      <a href="/refactoring/smells/oo-abusers">
                        Lạm Dụng Hướng Đối Tượng
                      </a>

                      <ul>
                        <li
                          className={
                            location.pathname.includes("switch-statements")
                              ? "featured menu-fs15 trail active"
                              : "featured menu-fs15"
                          }
                        >
                          <a href="/refactoring/smells/oo-abusers/switch-statements">
                            Câu lệnh Switch
                          </a>
                        </li>
                        <li
                          className={
                            location.pathname.includes("temporary-field")
                              ? "featured menu-fs15 trail active"
                              : "featured menu-fs15"
                          }
                        >
                          <a href="/refactoring/smells/oo-abusers/temporary-field">
                            Trường Tạm Thời
                          </a>
                        </li>
                        <li
                          className={
                            location.pathname.includes("refused-bequest")
                              ? "featured menu-fs15 trail active"
                              : "featured menu-fs15"
                          }
                        >
                          <a href="/refactoring/smells/oo-abusers/refused-bequest">
                            Từ Chối Thừa Kế
                          </a>
                        </li>
                        <li
                          className={
                            location.pathname.includes(
                              "alternative-classes-with-different-interfaces"
                            )
                              ? "featured menu-fs15 trail active"
                              : "featured menu-fs15"
                          }
                        >
                          <a href="/refactoring/smells/oo-abusers/alternative-classes-with-different-interfaces">
                            Các Lớp Thay Thế Với Giao Diện Khác Nhau
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      className={
                        location.pathname.includes("change-preventers")
                          ? `featured menu-fs15 trail ${
                              location.pathname ==
                              "/refactoring/smells/change-preventers"
                                ? "active"
                                : ""
                            }`
                          : "featured menu-fs15"
                      }
                    >
                      <a href="/refactoring/smells/change-preventers">
                        Các Yếu Tố Ngăn Cản Thay Đổi
                      </a>

                      <ul>
                        <li
                          className={
                            location.pathname.includes("divergent-change")
                              ? "featured menu-fs15 trail active"
                              : "featured menu-fs15"
                          }
                        >
                          <a href="/refactoring/smells/change-preventers/divergent-change">
                            Thay Đổi Phân Kỳ
                          </a>
                        </li>
                        <li
                          className={
                            location.pathname.includes("shotgun-surgery")
                              ? "featured menu-fs15 trail active"
                              : "featured menu-fs15"
                          }
                        >
                          <a href="/refactoring/smells/change-preventers/shotgun-surgery">
                            Phẫu Thuật Súng Ngắn
                          </a>
                        </li>
                        <li
                          className={
                            location.pathname.includes(
                              "parallel-inheritance-hierarchies"
                            )
                              ? "featured menu-fs15 trail active"
                              : "featured menu-fs15"
                          }
                        >
                          <a href="/refactoring/smells/change-preventers/parallel-inheritance-hierarchies">
                            Hệ Thống Kế Thừa Song Song
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      className={
                        location.pathname.includes("dispensables")
                          ? `featured menu-fs15 trail ${
                              location.pathname ==
                              "/refactoring/smells/dispensables"
                                ? "active"
                                : ""
                            }`
                          : "featured menu-fs15"
                      }
                    >
                      <a href="/refactoring/smells/dispensables">
                        Thành Phần Dư Thừa
                      </a>

                      <ul>
                        <li
                          className={
                            location.pathname.includes("comments")
                              ? "featured menu-fs15 trail active"
                              : "featured menu-fs15"
                          }
                        >
                          <a href="/refactoring/smells/dispensables/comments">
                            {" "}
                            Nhận Xét{" "}
                          </a>
                        </li>
                        <li
                          className={
                            location.pathname.includes("duplicate-code")
                              ? "featured menu-fs15 trail active"
                              : "featured menu-fs15"
                          }
                        >
                          <a href="/refactoring/smells/dispensables/duplicate-code">
                            Mã Nguồn Trùng Lặp
                          </a>
                        </li>
                        <li
                          className={
                            location.pathname.includes("lazy-class")
                              ? "featured menu-fs15 trail active"
                              : "featured menu-fs15"
                          }
                        >
                          <a href="/refactoring/smells/dispensables/lazy-class">
                            Lớp Lười Biếng
                          </a>
                        </li>
                        <li
                          className={
                            location.pathname.includes("data-class")
                              ? "featured menu-fs15 trail active"
                              : "featured menu-fs15"
                          }
                        >
                          <a href="/refactoring/smells/dispensables/data-class">
                            Lớp Dữ Liệu
                          </a>
                        </li>
                        <li
                          className={
                            location.pathname.includes("dead-code")
                              ? "featured menu-fs15 trail active"
                              : "featured menu-fs15"
                          }
                        >
                          <a href="/refactoring/smells/dispensables/dead-code">
                            {" "}
                            Mã Chết
                          </a>
                        </li>
                        <li
                          className={
                            location.pathname.includes("speculative-generality")
                              ? "featured menu-fs15 trail active"
                              : "featured menu-fs15"
                          }
                        >
                          <a href="/refactoring/smells/dispensables/speculative-generality">
                            Tổng Quát Hóa Đầu Cơ
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      className={
                        location.pathname.includes("couplers")
                          ? `featured menu-fs15 trail ${
                              location.pathname ==
                              "/refactoring/smells/couplers"
                                ? "active"
                                : ""
                            }`
                          : "featured menu-fs15"
                      }
                    >
                      <a href="/refactoring/smells/couplers">
                        Các Yếu Tố Liên Kết Quá Mức
                      </a>

                      <ul>
                        <li
                          className={
                            location.pathname.includes("feature-envy")
                              ? "featured menu-fs15 trail active"
                              : "featured menu-fs15"
                          }
                        >
                          <a href="/refactoring/smells/couplers/feature-envy">
                            Thèm Khát Tính Năng
                          </a>
                        </li>
                        <li
                          className={
                            location.pathname.includes("inappropriate-intimacy")
                              ? "featured menu-fs15 trail active"
                              : "featured menu-fs15"
                          }
                        >
                          <a href="/refactoring/smells/couplers/inappropriate-intimacy">
                            Thân Mật Không Thích Hợp
                          </a>
                        </li>
                        <li
                          className={
                            location.pathname.includes("message-chains")
                              ? "featured menu-fs15 trail active"
                              : "featured menu-fs15"
                          }
                        >
                          <a href="/refactoring/smells/couplers/message-chains">
                            Chuỗi Thông Điệp
                          </a>
                        </li>
                        <li
                          className={
                            location.pathname.includes("middle-man")
                              ? "featured menu-fs15 trail active"
                              : "featured menu-fs15"
                          }
                        >
                          <a href="/refactoring/smells/couplers/middle-man">
                            {" "}
                            Người Trung Gian{" "}
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      className={
                        location.pathname.includes("other")
                          ? `featured menu-fs15 trail ${
                              location.pathname == "/refactoring/smells/other"
                                ? "active"
                                : ""
                            }`
                          : "featured menu-fs15"
                      }
                    >
                      <a href="/refactoring/smells/other">Các Mùi Mã Khác</a>

                      <ul>
                        <li
                          className={
                            location.pathname.includes(
                              "incomplete-library-class"
                            )
                              ? "featured menu-fs15 trail active"
                              : "featured menu-fs15"
                          }
                        >
                          <a href="/refactoring/smells/other/incomplete-library-class">
                            Lớp Thư Viện Không Hoàn Chỉnh
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li
                  className={
                    location.pathname.includes("techniques")
                      ? `featured menu-fs15 trail ${
                          location.pathname == "/refactoring/techniques"
                            ? "active"
                            : ""
                        }`
                      : "featured menu-fs15"
                  }
                >
                  <a href="/refactoring/techniques"> Tái cấu trúc </a>

                  <ul>
                    <li
                      className={
                        location.pathname.includes("composing-methods")
                          ? `featured menu-fs15 trail ${
                              location.pathname ==
                              "/refactoring/techniques/composing-methods"
                                ? "active"
                                : ""
                            }`
                          : "featured menu-fs15"
                      }
                    >
                      <a href="/refactoring/techniques/composing-methods">
                        Sắp Xếp Phương Thức
                      </a>

                      <ul>
                        <li
                          className={
                            location.pathname.includes("extract-method")
                              ? "featured menu-fs15 trail active"
                              : "featured menu-fs15"
                          }
                        >
                          <a href="/refactoring/techniques/composing-methods/extract-method">
                            Trích Xuất Phương Thức
                          </a>
                        </li>
                        <li
                          className={
                            location.pathname.includes("inline-method")
                              ? "featured menu-fs15 trail active"
                              : "featured menu-fs15"
                          }
                        >
                          <a href="/refactoring/techniques/composing-methods/inline-method">
                            Gộp Phương Thức
                          </a>
                        </li>
                        <li
                          className={
                            location.pathname.includes("extract-variable")
                              ? "featured menu-fs15 trail active"
                              : "featured menu-fs15"
                          }
                        >
                          <a href="/refactoring/techniques/composing-methods/extract-variable">
                            Trích Xuất Biến
                          </a>
                        </li>
                        <li
                          className={
                            location.pathname.includes("inline-temp")
                              ? "featured menu-fs15 trail active"
                              : "featured menu-fs15"
                          }
                        >
                          <a href="/refactoring/techniques/composing-methods/inline-temp">
                            Gộp Biến Tạm
                          </a>
                        </li>
                        <li
                          className={
                            location.pathname.includes(
                              "replace-temp-with-query"
                            )
                              ? "featured menu-fs15 trail active"
                              : "featured menu-fs15"
                          }
                        >
                          <a href="/refactoring/techniques/composing-methods/replace-temp-with-query">
                            Thay Thế Biến Tạm Bằng Truy Vấn
                          </a>
                        </li>
                        <li
                          className={
                            location.pathname.includes(
                              "split-temporary-variable"
                            )
                              ? "featured menu-fs15 trail active"
                              : "featured menu-fs15"
                          }
                        >
                          <a href="/refactoring/techniques/composing-methods/split-temporary-variable">
                            Chia Biến Tạm Thời
                          </a>
                        </li>
                        <li
                          className={
                            location.pathname.includes(
                              "remove-assignments-to-parameters"
                            )
                              ? "featured menu-fs15 trail active"
                              : "featured menu-fs15"
                          }
                        >
                          <a href="/refactoring/techniques/composing-methods/remove-assignments-to-parameters">
                            Loại Bỏ Gán Giá Trị Cho Tham Số
                          </a>
                        </li>
                        <li
                          className={
                            location.pathname.includes(
                              "replace-method-with-method-object"
                            )
                              ? "featured menu-fs15 trail active"
                              : "featured menu-fs15"
                          }
                        >
                          <a href="/refactoring/techniques/composing-methods/replace-method-with-method-object">
                            Thay Thế Phương Thức Bằng Đối Tượng Phương Thức
                          </a>
                        </li>
                        <li
                          className={
                            location.pathname.includes("substitute-algorithm")
                              ? "featured menu-fs15 trail active"
                              : "featured menu-fs15"
                          }
                        >
                          <a href="/refactoring/techniques/composing-methods/substitute-algorithm">
                            Thay Thế Thuật Toán
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      className={
                        location.pathname.includes(
                          "moving-features-between-objects"
                        )
                          ? `featured menu-fs15 trail ${
                              location.pathname ==
                              "/refactoring/techniques/moving-features-between-objects"
                                ? "active"
                                : ""
                            }`
                          : "featured menu-fs15"
                      }
                    >
                      <a href="/refactoring/techniques/moving-features-between-objects">
                        Di Chuyển Chức Năng Giữa Các Đối Tượng
                      </a>

                      <ul>
                        <li
                          className={
                            location.pathname.includes("move-method")
                              ? "featured menu-fs15 trail active"
                              : "featured menu-fs15"
                          }
                        >
                          <a href="/refactoring/techniques/moving-features-between-objects/move-method">
                            Di Chuyển Phương Thức
                          </a>
                        </li>
                        <li
                          className={
                            location.pathname.includes("move-field")
                              ? "featured menu-fs15 trail active"
                              : "featured menu-fs15"
                          }
                        >
                          <a href="/refactoring/techniques/moving-features-between-objects/move-field">
                            {" "}
                            Di Chuyển Trường{" "}
                          </a>
                        </li>
                        <li
                          className={
                            location.pathname.includes("extract-class")
                              ? "featured menu-fs15 trail active"
                              : "featured menu-fs15"
                          }
                        >
                          <a href="/refactoring/techniques/moving-features-between-objects/extract-class">
                            Trích Xuất Lớp
                          </a>
                        </li>
                        <li
                          className={
                            location.pathname.includes("inline-class")
                              ? "featured menu-fs15 trail active"
                              : "featured menu-fs15"
                          }
                        >
                          <a href="/refactoring/techniques/moving-features-between-objects/inline-class">
                            Lồng Lớp
                          </a>
                        </li>
                        <li
                          className={
                            location.pathname.includes("hide-delegate")
                              ? "featured menu-fs15 trail active"
                              : "featured menu-fs15"
                          }
                        >
                          <a href="/refactoring/techniques/moving-features-between-objects/hide-delegate">
                            Ẩn Đại Diện
                          </a>
                        </li>
                        <li
                          className={
                            location.pathname.includes("remove-middle-man")
                              ? "featured menu-fs15 trail active"
                              : "featured menu-fs15"
                          }
                        >
                          <a href="/refactoring/techniques/moving-features-between-objects/remove-middle-man">
                            Xóa Trung Gian
                          </a>
                        </li>
                        <li
                          className={
                            location.pathname.includes(
                              "introduce-foreign-method"
                            )
                              ? "featured menu-fs15 trail active"
                              : "featured menu-fs15"
                          }
                        >
                          <a href="/refactoring/techniques/moving-features-between-objects/introduce-foreign-method">
                            Giới Thiệu Phương Thức Ngoại Lai
                          </a>
                        </li>
                        <li
                          className={
                            location.pathname.includes(
                              "introduce-local-extension"
                            )
                              ? "featured menu-fs15 trail active"
                              : "featured menu-fs15"
                          }
                        >
                          <a href="/refactoring/techniques/moving-features-between-objects/introduce-local-extension">
                            Giới Thiệu Mở Rộng Địa Phương
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      className={
                        location.pathname.includes("organizing-data")
                          ? `featured menu-fs15 trail ${
                              location.pathname ==
                              "/refactoring/techniques/organizing-data"
                                ? "active"
                                : ""
                            }`
                          : "featured menu-fs15"
                      }
                    >
                      <a href="/refactoring/techniques/organizing-data">
                        Tổ Chức Dữ Liệu
                      </a>

                      <ul>
                        <li
                          className={
                            location.pathname.includes("self-encapsulate-field")
                              ? "featured menu-fs15 trail active"
                              : "featured menu-fs15"
                          }
                        >
                          <a href="/refactoring/techniques/organizing-data/self-encapsulate-field">
                            Tự Bao Gói Trường
                          </a>
                        </li>
                        <li
                          className={
                            location.pathname.includes(
                              "replace-data-value-with-object"
                            )
                              ? "featured menu-fs15 trail active"
                              : "featured menu-fs15"
                          }
                        >
                          <a href="/refactoring/techniques/organizing-data/replace-data-value-with-object">
                            Thay Giá Trị Dữ Liệu Bằng Đối Tượng
                          </a>
                        </li>
                        <li
                          className={
                            location.pathname.includes(
                              "change-value-to-reference"
                            )
                              ? "featured menu-fs15 trail active"
                              : "featured menu-fs15"
                          }
                        >
                          <a href="/refactoring/techniques/organizing-data/change-value-to-reference">
                            Thay Đổi Giá Trị Thành Tham Chiếu
                          </a>
                        </li>
                        <li
                          className={
                            location.pathname.includes(
                              "change-reference-to-value"
                            )
                              ? "featured menu-fs15 trail active"
                              : "featured menu-fs15"
                          }
                        >
                          <a href="/refactoring/techniques/organizing-data/change-reference-to-value">
                            Thay Đổi Tham Chiếu Thành Giá Trị
                          </a>
                        </li>
                        <li
                          className={
                            location.pathname.includes(
                              "replace-array-with-object"
                            )
                              ? "featured menu-fs15 trail active"
                              : "featured menu-fs15"
                          }
                        >
                          <a href="/refactoring/techniques/organizing-data/replace-array-with-object">
                            Thay Mảng Bằng Đối Tượng
                          </a>
                        </li>
                        <li
                          className={
                            location.pathname.includes(
                              "duplicate-observed-data"
                            )
                              ? "featured menu-fs15 trail active"
                              : "featured menu-fs15"
                          }
                        >
                          <a href="/refactoring/techniques/organizing-data/duplicate-observed-data">
                            Nhân Đôi Dữ Liệu Quan Sát
                          </a>
                        </li>
                        <li
                          className={
                            location.pathname.includes(
                              "change-unidirectional-association-to-bidirectional"
                            )
                              ? "featured menu-fs15 trail active"
                              : "featured menu-fs15"
                          }
                        >
                          <a href="/refactoring/techniques/organizing-data/change-unidirectional-association-to-bidirectional">
                            Thay Đổi Liên Kết Một Chiều Thành Hai Chiều
                          </a>
                        </li>
                        <li
                          className={
                            location.pathname.includes(
                              "change-bidirectional-association-to-unidirectional"
                            )
                              ? "featured menu-fs15 trail active"
                              : "featured menu-fs15"
                          }
                        >
                          <a href="/refactoring/techniques/organizing-data/change-bidirectional-association-to-unidirectional">
                            Thay Đổi Liên Kết Hai Chiều Thành Một Chiều
                          </a>
                        </li>
                        <li
                          className={
                            location.pathname.includes(
                              "replace-magic-number-with-symbolic-constant"
                            )
                              ? "featured menu-fs15 trail active"
                              : "featured menu-fs15"
                          }
                        >
                          <a href="/refactoring/techniques/organizing-data/replace-magic-number-with-symbolic-constant">
                            Thay Số Ma Thuật Bằng Hằng Số Ký Hiệu
                          </a>
                        </li>
                        <li
                          className={
                            location.pathname.includes("encapsulate-field")
                              ? "featured menu-fs15 trail active"
                              : "featured menu-fs15"
                          }
                        >
                          <a href="/refactoring/techniques/organizing-data/encapsulate-field">
                            Bao Gói Trường
                          </a>
                        </li>
                        <li
                          className={
                            location.pathname.includes("encapsulate-collection")
                              ? "featured menu-fs15 trail active"
                              : "featured menu-fs15"
                          }
                        >
                          <a href="/refactoring/techniques/organizing-data/encapsulate-collection">
                            Bao Gói Bộ Sưu Tập
                          </a>
                        </li>
                        <li
                          className={
                            location.pathname.includes(
                              "replace-type-code-with-class"
                            )
                              ? "featured menu-fs15 trail active"
                              : "featured menu-fs15"
                          }
                        >
                          <a href="/refactoring/techniques/organizing-data/replace-type-code-with-class">
                            Thay Mã Loại Bằng Lớp
                          </a>
                        </li>
                        <li
                          className={
                            location.pathname.includes(
                              "replace-type-code-with-subclasses"
                            )
                              ? "featured menu-fs15 trail active"
                              : "featured menu-fs15"
                          }
                        >
                          <a href="/refactoring/techniques/organizing-data/replace-type-code-with-subclasses">
                            Thay Mã Loại Bằng Các Lớp Con
                          </a>
                        </li>
                        <li
                          className={
                            location.pathname.includes(
                              "replace-type-code-with-state-strategy"
                            )
                              ? "featured menu-fs15 trail active"
                              : "featured menu-fs15"
                          }
                        >
                          <a href="/refactoring/techniques/organizing-data/replace-type-code-with-state-strategy">
                            Thay Mã Loại Bằng Trạng Thái/Chiến Lược
                          </a>
                        </li>
                        <li
                          className={
                            location.pathname.includes(
                              "replace-subclass-with-fields"
                            )
                              ? "featured menu-fs15 trail active"
                              : "featured menu-fs15"
                          }
                        >
                          <a href="/refactoring/techniques/organizing-data/replace-subclass-with-fields">
                            Thay Lớp Con Bằng Các Trường
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      className={
                        location.pathname.includes(
                          "simplifying-conditional-expressions"
                        )
                          ? `featured menu-fs15 trail ${
                              location.pathname ==
                              "/refactoring/techniques/simplifying-conditional-expressions"
                                ? "active"
                                : ""
                            }`
                          : "featured menu-fs15"
                      }
                    >
                      <a href="/refactoring/techniques/simplifying-conditional-expressions">
                        Đơn giản hóa biểu thức điều kiện
                      </a>

                      <ul>
                        <li className="">
                          <a href="ru/decompose-conditional.html">
                            Разбиение условного оператора
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/consolidate-conditional-expression.html">
                            Объединение условных операторов
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/consolidate-duplicate-conditional-fragments.html">
                            Объединение дублирующихся фрагментов в условных
                            операторах
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/remove-control-flag.html">
                            Удаление управляющего флага
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/replace-nested-conditional-with-guard-clauses.html">
                            Замена вложенных условных операторов граничным
                            оператором
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/replace-conditional-with-polymorphism.html">
                            Замена условного оператора полиморфизмом
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/introduce-null-object.html">
                            Введение Null-объекта
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/introduce-assertion.html">
                            Введение проверки утверждения
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="">
                      <a href="ru/refactoring/techniques/simplifying-method-calls.html">
                        Упрощение вызовов методов
                      </a>

                      <ul>
                        <li className="">
                          <a href="ru/rename-method.html">
                            Переименование метода
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/add-parameter.html">
                            Добавление параметра
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/remove-parameter.html">
                            Удаление параметра
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/separate-query-from-modifier.html">
                            Разделение запроса и модификатора
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/parameterize-method.html">
                            Параметризация метода
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/replace-parameter-with-explicit-methods.html">
                            Замена параметра набором специализированных методов
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/preserve-whole-object.html">
                            Передача всего объекта
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/replace-parameter-with-method-call.html">
                            Замена параметра вызовом метода
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/introduce-parameter-object.html">
                            Замена параметров объектом
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/remove-setting-method.html">
                            Удаление сеттера
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/hide-method.html"> Сокрытие метода </a>
                        </li>
                        <li className="">
                          <a href="ru/replace-constructor-with-factory-method.html">
                            Замена конструктора фабричным методом
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/replace-error-code-with-exception.html">
                            Замена кода ошибки исключением
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/replace-exception-with-test.html">
                            Замена исключения проверкой условия
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="">
                      <a href="ru/refactoring/techniques/dealing-with-generalization.html">
                        Решение задач обобщения
                      </a>

                      <ul>
                        <li className="">
                          <a href="ru/pull-up-field.html"> Подъём поля </a>
                        </li>
                        <li className="">
                          <a href="ru/pull-up-method.html"> Подъём метода </a>
                        </li>
                        <li className="">
                          <a href="ru/pull-up-constructor-body.html">
                            Подъём тела конструктора
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/push-down-method.html">Спуск метода</a>
                        </li>
                        <li className="">
                          <a href="ru/push-down-field.html"> Спуск поля </a>
                        </li>
                        <li className="">
                          <a href="ru/extract-subclassName.html">
                            Извлечение подкласса
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/extract-superclassName.html">
                            Извлечение суперкласса
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/extract-interface.html">
                            Извлечение интерфейса
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/collapse-hierarchy.html">
                            Свёртывание иерархии
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/form-template-method.html">
                            Создание шаблонного метода
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/replace-inheritance-with-delegation.html">
                            Замена наследования делегированием
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/replace-delegation-with-inheritance.html">
                            Замена делегирования наследованием
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="">
              <a href="ru/design-patterns.html">
                <i className="fa fa-fw fa-puzzle-piece" aria-hidden="true"></i>{" "}
                Mẫu Thiết Kế
              </a>

              <ul>
                <li className="">
                  <a href="ru/design-patterns/what-is-pattern.html">
                    Введение в паттерны
                  </a>

                  <ul>
                    <li className="">
                      <a href="ru/design-patterns/what-is-pattern.html">
                        Что такое Паттерн?
                      </a>
                    </li>
                    <li className="">
                      <a href="ru/design-patterns/history.html">
                        История паттернов
                      </a>
                    </li>
                    <li className="">
                      <a href="ru/design-patterns/why-learn-patterns.html">
                        Зачем знать паттерны?
                      </a>
                    </li>
                    <li className="">
                      <a href="ru/design-patterns/criticism.html">
                        Критика паттернов
                      </a>
                    </li>
                    <li className="">
                      <a href="ru/design-patterns/classNameification.html">
                        Классификация паттернов
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="">
                  <a href="ru/design-patterns/catalog.html"> Каталог </a>
                </li>
                <li className="menu-third-level">
                  <a href="ru/design-patterns/creational-patterns.html">
                    Порождающие
                  </a>

                  <ul>
                    <li className="">
                      <a href="ru/design-patterns/factory-method.html">
                        Фабричный метод
                      </a>
                    </li>
                    <li className="">
                      <a href="ru/design-patterns/abstract-factory.html">
                        Абстрактная фабрика
                      </a>
                    </li>
                    <li className="">
                      <a href="ru/design-patterns/builder.html">Строитель</a>
                    </li>
                    <li className="">
                      <a href="ru/design-patterns/prototype.html">Прототип</a>
                    </li>
                    <li className="">
                      <a href="ru/design-patterns/singleton.html">Одиночка</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-third-level">
                  <a href="ru/design-patterns/structural-patterns.html">
                    Структурные
                  </a>

                  <ul>
                    <li className="">
                      <a href="ru/design-patterns/adapter.html"> Адаптер </a>
                    </li>
                    <li className="">
                      <a href="ru/design-patterns/bridge.html"> Мост </a>
                    </li>
                    <li className="">
                      <a href="ru/design-patterns/composite.html">
                        Компоновщик
                      </a>
                    </li>
                    <li className="">
                      <a href="ru/design-patterns/decorator.html">Декоратор</a>
                    </li>
                    <li className="">
                      <a href="ru/design-patterns/facade.html"> Фасад </a>
                    </li>
                    <li className="">
                      <a href="ru/design-patterns/flyweight.html">Легковес</a>
                    </li>
                    <li className="">
                      <a href="ru/design-patterns/proxy.html">Заместитель</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-third-level">
                  <a href="ru/design-patterns/behavioral-patterns.html">
                    Поведенческие
                  </a>

                  <ul>
                    <li className="">
                      <a href="ru/design-patterns/chain-of-responsibility.html">
                        Цепочка обязанностей
                      </a>
                    </li>
                    <li className="">
                      <a href="ru/design-patterns/command.html"> Команда </a>
                    </li>
                    <li className="">
                      <a href="ru/design-patterns/iterator.html">Итератор</a>
                    </li>
                    <li className="">
                      <a href="ru/design-patterns/mediator.html">Посредник</a>
                    </li>
                    <li className="">
                      <a href="ru/design-patterns/memento.html"> Снимок </a>
                    </li>
                    <li className="">
                      <a href="ru/design-patterns/observer.html">Наблюдатель</a>
                    </li>
                    <li className="">
                      <a href="ru/design-patterns/state.html"> Состояние </a>
                    </li>
                    <li className="">
                      <a href="ru/design-patterns/strategy.html">Стратегия</a>
                    </li>
                    <li className="">
                      <a href="ru/design-patterns/template-method.html">
                        Шаблонный метод
                      </a>
                    </li>
                    <li className="">
                      <a href="ru/design-patterns/visitor.html">Посетитель</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-code-examples">
                  <a href="ru/design-patterns/examples.html">Примеры кода</a>

                  <ul>
                    <li className="menu-code-examples-item">
                      <a href="ru/design-patterns/csharp.html"> C# </a>
                    </li>
                    <li className="menu-code-examples-item">
                      <a href="ru/design-patterns/cpp.html"> C++ </a>
                    </li>
                    <li className="menu-code-examples-item">
                      <a href="ru/design-patterns/go.html"> Go </a>
                    </li>
                    <li className="menu-code-examples-item">
                      <a href="ru/design-patterns/java.html"> Java </a>
                    </li>
                    <li className="menu-code-examples-item">
                      <a href="ru/design-patterns/php.html"> PHP </a>
                    </li>
                    <li className="menu-code-examples-item">
                      <a href="ru/design-patterns/python.html"> Python </a>
                    </li>
                    <li className="menu-code-examples-item">
                      <a href="ru/design-patterns/ruby.html"> Ruby </a>
                    </li>
                    <li className="menu-code-examples-item">
                      <a href="ru/design-patterns/swift.html"> Swift </a>
                    </li>
                    <li className="menu-code-examples-item">
                      <a href="ru/design-patterns/typescript.html">
                        TypeScript
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="sidebar-controls">
          <div className="sidebar-controls-container">
            <a href="ru/login.html" title="Đăng Nhập">
              <i className="fa fa-fw fa-fw fa-user"></i> Đăng nhập
            </a>
            <a
              href="https://feedback.refactoring.guru/communities/1-russkij-russian"
              className="userecho-public"
              rel="nofollow"
              title="Liên hệ chúng tôi"
            >
              <i className="fa fa-fw fa-fw fa-envelope" aria-hidden="true"></i>
              Liên hệ
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
