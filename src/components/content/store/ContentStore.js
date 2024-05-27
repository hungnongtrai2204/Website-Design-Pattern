const ContentStore = () => {
  return (
    <main
      role="main"
      className="main-content top-content center-content"
      // data-page_className=""
    >
      <div className="main-content-container center-content-container">
        <article className="page text">
          <h1 className="title text-center">Các sản phẩm của chúng tôi!</h1>

          <div
            style={{
              textAlign: "center",
              margin: "0 0 2rem",
              fontSize: "1.2rem",
            }}
          >
            <span
              style={{
                padding: "2px 5px",
                backgroundColor: "purple",
                fontWeight: "bold",
                color: "white",
                borderRadius: "3px",
              }}
            >
              Mới!
            </span>{" "}
            Một chiết khấu theo số lượng được áp dụng khi mua 5 bản trở lên.
            <br />
            Bạn có thể đặt hàng các sản phẩm như một món quà cho người khác, lên
            lịch giao hàng, v.v.
            <br />
            Bạn cũng có thể dễ dàng đặt hàng cho toàn bộ nhóm của bạn. Điều này
            sẽ cho phép bạn theo dõi tiến độ của họ.
          </div>

          <div className="store-products d-md-flex">
            <div className="product-block">
              <div className="image">
                <div className="image3d-course-left">
                  <div
                    className="image3d-cover"
                    style={{ background: "#ee2a30" }}
                  >
                    <a href="/store/course">
                      <img
                        src="../images/refactoring/course/store-cover-en.jpg"
                        width="300"
                        height="375"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="buy-widget">
                <div className="price-tag price-tag-hg compact">
                  <span className="old-price font-money">$40.00</span>
                  <span className="new-price font-money">
                    <span className="offer-text">GIẢM GIÁ</span>
                    $14.95
                  </span>
                </div>
                <a
                  className="btn btn-hg btn-secondary btn-buy do-checkout"
                  data-product="Dive Into Refactoring"
                  href="refactoring/course.html#buy-now"
                >
                  <i className="fa fa-shopping-cart"></i> Mua ngay
                </a>
              </div>
              <div className="more-info">
                <a
                  className="btn btn-block btn-outline-primary"
                  href="/store/course"
                >
                  <i className="fa fa-info-circle" aria-hidden="true"></i> Tìm
                  hiểu thêm
                </a>
              </div>
            </div>
            <div className="product-block">
              <div className="image">
                <div className="image3d-book-right">
                  <div
                    className="image3d-cover"
                    style={{ background: "#0b3752" }}
                  >
                    <a href="/store/book">
                      <img
                        width="250"
                        height="375"
                        src="../images/patterns/book/web-cover-en.png"
                        srcSet="
                        /images/patterns/book/web-cover-en-2x.png 2x,
                        /images/patterns/book/web-cover-en-3x.png 3x
                      "
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="buy-widget">
                <div className="price-tag price-tag-hg compact">
                  <span className="old-price font-money">$30.00</span>
                  <span className="new-price font-money">
                    <span className="offer-text">GIẢM GIÁ</span>
                    $8.95
                  </span>
                </div>
                <a
                  className="btn btn-hg btn-secondary btn-buy do-checkout"
                  data-product="Dive Into Design Patterns"
                  href="design-patterns/book.html#buy-now"
                >
                  <i className="fa fa-shopping-cart"></i> Mua ngay
                </a>
              </div>
              <div className="more-info">
                <a
                  className="btn btn-block btn-outline-primary"
                  href="/store/book"
                >
                  <i className="fa fa-info-circle" aria-hidden="true"></i> Tìm
                  hiểu thêm
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
};

export default ContentStore;
