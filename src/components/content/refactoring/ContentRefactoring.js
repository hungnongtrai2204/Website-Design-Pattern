import "./ContentRefactoring.css";

const ContentRefactoring = () => {
  return (
    <main
      role="main"
      className="main-content top-content center-content"
      data-page_className=""
    >
      <div className="main-content-container center-content-container">
        <div className="page text">
          <div className="illustration-container" data-width="960">
            <img
              width="960"
              height="940"
              className="ref-bg"
              loading="lazy"
              src="/images/refactoring/content/refactoringcfb8.png?id=91fe4caeecfd33ec58f3ef4af10357c9"
              //   srcset="
              //   /images/refactoring/content/refactoring-2x.png?id=d3553a5da71205deb4e708ca3419005b 2x
              // "
            />

            <h1 className="ref1-h ref-abs ref-c ref-h1">Tái Cấu Trúc</h1>
            <div className="mob-image">
              <a
                href="refactoring/what-is-refactoring.html"
                title="Вступление в Рефакторинг"
              >
                <img
                  width="256"
                  height="192"
                  src="/images/refactoring/content/index/refactoring-i166e6.png?id=4ba85db5ddb3da0cd829bc7c0d2bf407"
                  //   srcset="
                  //   /images/refactoring/content/index/refactoring-i1-2x.png?id=dc9209e9ccee993f51c33697c716aa49 2x
                  // "
                  alt="Вступление в Рефакторинг"
                />
              </a>
            </div>
            <p className="ref1-p ref-abs ref-c ref-p">
              <span>
                Refactoring là quá trình cải tiến có hệ thống nhằm nâng cao
              </span>
              <span>
                code mà không tạo ra chức năng mới. Quá trình này có thể
              </span>
              <span>
                biến code lộn xộn thành code sạch và thiết kế đơn giản.
              </span>
            </p>
            <div className="ref1-b ref-abs ref-c ref-b">
              <span>
                <a
                  href="refactoring/what-is-refactoring.html"
                  className="btn btn-primary"
                >
                  <i className="fa fa-hand-o-right" aria-hidden="true"></i> Bắt
                  đầu ngay từ đầu
                </a>
              </span>
            </div>

            <h3 className="ref2-h ref-abs ref-l ref-h3">
              <i className="fa fa-trash-alt" aria-hidden="true"></i> Mã Bẩn
            </h3>
            <div className="mob-image">
              <a href="refactoring/technical-debt.html" title="Грязный код">
                <img
                  width="256"
                  height="192"
                  loading="lazy"
                  src="/images/refactoring/content/index/refactoring-i2c343.png?id=dbf9c791a67f14d41250603d0bcec6fd"
                  //   srcset="
                  //   /images/refactoring/content/index/refactoring-i2-2x.png?id=8ab15dd7177e141be3dac4199937ed9c 2x
                  // "
                  alt="Грязный код"
                />
              </a>
            </div>
            <p className="ref2-p ref-abs ref-l ref-p">
              <span>Mã bẩn là kết quả của sự thiếu kinh</span>
              <span>nghiệm kết hợp với áp lực thời gian,</span>
              <span>quản lý yếu kém và những giải pháp</span>
              <span>tắt tệ hại trong quá trình</span>
              <span>phát triển.</span>
            </p>
            <div className="ref2-b ref-abs ref-l ref-b">
              <span>
                <a
                  href="refactoring/technical-debt.html"
                  className="btn btn-primary"
                >
                  Tìm Hiểu Thêm
                </a>
              </span>
            </div>

            <h3 className="ref3-h ref-abs ref-r ref-h3">
              <i className="fa fa-bath" aria-hidden="true"></i> Mã Sạch
            </h3>
            <div className="mob-image">
              <a href="refactoring/what-is-refactoring.html" title="Чистый код">
                <img
                  width="256"
                  height="192"
                  loading="lazy"
                  src="/images/refactoring/content/index/refactoring-i3179f.png?id=e393546f4f2d0046fdbf98b75c6c35ea"
                  //   srcset="
                  //   /images/refactoring/content/index/refactoring-i3-2x.png?id=ca4e076f5522aa5d861350a7a741d1d4 2x
                  // "
                  alt="Чистый код"
                />
              </a>
            </div>
            <p className="ref3-p ref-abs ref-r ref-p">
              <span>Mã sạch là mã nguồn dễ đọc, dễ hiểu và dễ</span>
              <span>bảo trì. Mã nguồn sạch giúp quá trình phát</span>
              <span>triển phần mềm trở nên dễ dự đoán và nâng</span>
              <span>cao chất lượng của sản phẩm cuối cùng.</span>
            </p>
            <div className="ref3-b ref-abs ref-r ref-b">
              <span>
                <a
                  href="refactoring/what-is-refactoring.html"
                  className="btn btn-primary"
                >
                  Tìm Hiểu Thêm
                </a>
              </span>
            </div>

            <div className="ref4-bg ref-abs"></div>
            <h3 className="ref4-h ref-abs ref-c ref-h3">
              <i className="fa fa-clipboard-list-check" aria-hidden="true"></i>{" "}
              Quá Trình Tái Cấu Trúc
            </h3>
            <div className="mob-image">
              <a href="refactoring/how-to.html" title="Процесс рефакторинга">
                <img
                  width="256"
                  height="192"
                  loading="lazy"
                  src="/images/refactoring/content/index/refactoring-i4ab15.png?id=e4ba322684937f8c166dfd8f2d6ecfb1"
                  //   srcset="
                  //   /images/refactoring/content/index/refactoring-i4-2x.png?id=c99fcba4cd39113b3fdb09932f59d297 2x
                  // "
                  alt="Процесс рефакторинга"
                />
              </a>
            </div>
            <p className="ref4-p ref-abs ref-c ref-p">
              <span>Thực hiện tái cấu trúc từng bước và chạy kiểm</span>
              <span>thử sau mỗi thay đổi là những yếu tố quan trọng</span>
              <span>của quá trình tái cấu trúc, giúp quá trình này trở</span>
              <span>nên dễ dự đoán và an toàn.</span>
            </p>
            <div className="ref4-b ref-abs ref-c ref-b">
              <span>
                <a href="refactoring/how-to.html" className="btn btn-primary">
                  Tìm Hiểu Thêm
                </a>
              </span>
            </div>

            <h3 className="ref5-h ref-abs ref-l ref-h3">
              <i className="fa fa-ghost" aria-hidden="true"></i> Mùi Mã
            </h3>
            <div className="mob-image">
              <a href="refactoring/smells.html" title="Запахи кода">
                <img
                  width="256"
                  height="192"
                  loading="lazy"
                  src="/images/refactoring/content/index/refactoring-i5a1cd.png?id=acb5ca2349f078fa48ea57b5ad1ee0f5"
                  //   srcset="
                  //   /images/refactoring/content/index/refactoring-i5-2x.png?id=81451a200d668d4ec23de6a80b3efc80 2x
                  // "
                  alt="Запахи кода"
                />
              </a>
            </div>
            <p className="ref5-p ref-abs ref-l ref-p">
              <span>Mùi mã là các dấu hiệu cho thấy vấn đề có thể được</span>
              <span>giải quyết trong quá trình tái cấu trúc. Mùi mã</span>
              <span>dễ phát hiện và sửa chữa, nhưng chúng có thể </span>
              <span>chỉ là triệu chứng của một vấn đề sâu</span>
              <span>hơn trong mã nguồn.</span>
            </p>
            <div className="ref5-b ref-abs ref-l ref-b">
              <span>
                <a href="refactoring/smells.html" className="btn btn-primary">
                  Tìm Hiểu Thêm
                </a>
              </span>
            </div>

            <h3 className="ref6-h ref-abs ref-r ref-h3">
              <i className="fa fa-helmet-battle" aria-hidden="true"></i> Kỹ
              Thuật Tái Cấu Trúc
            </h3>
            <div className="mob-image">
              <a
                href="refactoring/techniques.html"
                title="Техники рефакторинга"
              >
                <img
                  width="256"
                  height="192"
                  loading="lazy"
                  src="/images/refactoring/content/index/refactoring-i646d6.png?id=7f2e9d6b728193f982cfc4d2dbd384d0"
                  //   srcset="
                  //   /images/refactoring/content/index/refactoring-i6-2x.png?id=7b772486dd40c7c03f5fd7c74721095c 2x
                  // "
                  alt="Техники рефакторинга"
                />
              </a>
            </div>
            <p className="ref6-p ref-abs ref-r ref-p">
              <span>Các kỹ thuật tái cấu trúc mô tả các bước tái cấu trúc</span>
              <span>thực tế. Hầu hết các kỹ thuật tái cấu trúc đều có ưu</span>
              <span>và nhược điểm riêng. Do đó, mỗi lần tái cấu trúc cần</span>
              <span>phải được cân nhắc kỹ lưỡng và thực hiện</span>
              <span>một cách thận trọng.</span>
            </p>
            <div className="ref6-b ref-abs ref-r ref-b">
              <span>
                <a
                  href="refactoring/techniques.html"
                  className="btn btn-primary"
                >
                  Tìm Hiểu Thêm
                </a>
              </span>
            </div>

            <div
              className="prom"
              data-id="Ref: Badge on Index"
              data-creative-id="standard-en"
              data-position="bottom"
            >
              <div className="ref7-bg ref-abs"></div>
              <div className="ref7-bg2 ref-abs"></div>

              <h3 className="ref7-h ref-abs ref-c ref-h3 ref-p">
                <i className="fa fa-star" aria-hidden="true"></i>
                <span className="ref7-span1">Khóa Học</span>
                <span className="ref7-span2">Cao Cấp</span>
              </h3>

              <div className="mob-image">
                <a href="refactoring/course.html" title="Курс рефакторинга">
                  <img
                    width="256"
                    height="192"
                    loading="lazy"
                    src="/images/refactoring/course/course-cover-ru.jpg"
                    alt="Курс рефакторинга"
                  />
                </a>
              </div>

              <p className="ref7-p ref-abs ref-c ref-p">
                21 mùi mã, 66 kỹ thuật tái cấu trúc <br />
                Ví dụ tương tác bằng Java/C#/PHP
                <br />
                Không giới hạn thời gian.
              </p>
              <div className="ref7-b ref-abs ref-c ref-b">
                <span>
                  <a
                    href="refactoring/course.html"
                    className="btn btn-secondary"
                  >
                    <i className="fa fa-star" aria-hidden="true"></i> Tìm hiểu
                    thêm về khóa học
                  </a>
                </span>
              </div>
              <div className="ref7-abs-link-holder ref-abs">
                <a
                  href="refactoring/course.html"
                  className="ref7-abs-link ref-abs"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContentRefactoring;
