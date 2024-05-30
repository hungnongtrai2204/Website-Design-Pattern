const ContentWhen = () => {
  return (
    <main
      role="main"
      className="main-content top-content center-content"
      data-page_class=""
    >
      <div className="main-content-container center-content-container">
        <div className="page text">
          <article>
            <div className="breadcrumb">
              <a className="home" href="/">
                <i className="fa fa-home" aria-hidden="true"></i>
              </a>{" "}
              /{" "}
              <a className="type" href="/refactoring">
                Tái cấu trúc
              </a>
            </div>
            <h1 className="title">Khi nào cần tái cấu trúc</h1>

            {/* <script type="text/javascript">
            // Shorten examples titles for users.
            var h1 = document.getElementsByTagName("H1")[0];
            if (h1.offsetHeight > 160) {
              h1.classNameName += " smaller";
            }

            // Small beautification for pattern examples.
            var title = h1.innerHTML;
            title = title.replace(
              /^(Java|C\+\+|C#|PHP|Python|Ruby|Delphi): (.*)$/,
              "<strong>$1:</strong> $2"
            );
            h1.innerHTML = title;
          </script> */}

            <div style={{ float: "right", marginLeft: "10px" }}>
              <figure className="image">
                <img src="/images/content-public/r1198e.svg?id=0a20f72cdd91691d0e6b29f2c5519e4c" />
              </figure>
            </div>
            <h4>Quy tắc số ba</h4>
            <ol>
              <li>
                <p>
                  Khi bạn làm điều gì đó lần đầu tiên, chỉ cần hoàn thành nó.
                </p>
              </li>
              <li>
                <p>
                  Khi bạn làm điều gì đó tương tự lần thứ hai, hãy ngần ngại vì
                  phải lặp lại nhưng vẫn cứ làm như vậy.
                </p>
              </li>
              <li>
                <p>
                  Khi bạn làm điều gì đó lần thứ ba, hãy bắt đầu tái cấu trúc.
                </p>
              </li>
            </ol>
            <div style={{ float: "right", marginLeft: "10px" }}>
              <figure className="image">
                <img
                  src="/images/content-public/r2d073.svg?id=5b3806c58901d111cee12fb60df9e0ac"
                  loading="lazy"
                />
              </figure>
            </div>
            <h4>Khi thêm một tính năng</h4>
            <ul>
              <li>
                <p>
                  Tái cấu trúc giúp bạn hiểu mã nguồn của người khác. Nếu bạn
                  phải làm việc với mã nguồn bẩn của người khác, hãy thử tái cấu
                  trúc nó trước. Mã nguồn sạch dễ nắm bắt hơn nhiều. Bạn sẽ cải
                  thiện nó không chỉ cho bản thân mà còn cho những người sử dụng
                  nó sau bạn.
                </p>
              </li>
              <li>
                <p>
                  Tái cấu trúc giúp dễ dàng thêm các tính năng mới hơn. Việc
                  thực hiện các thay đổi trong mã nguồn sạch sẽ dễ dàng hơn
                  nhiều.
                </p>
              </li>
            </ul>
            <div style={{ float: "right", marginLeft: "10px" }}>
              <figure className="image">
                <img
                  src="/images/content-public/r37b3a.svg?id=b3ab8426bd85943ecedccbaf02181342"
                  loading="lazy"
                />
              </figure>
            </div>
            <h4>Khi sửa lỗi</h4>
            <p>
              Các lỗi trong mã nguồn cũng giống như các lỗi trong đời thực:
              chúng sống ở những nơi tối tăm, bẩn thỉu nhất trong mã nguồn. Hãy
              dọn dẹp mã nguồn của bạn và các lỗi sẽ tự động lộ diện.
            </p>
            <p>
              Các nhà quản lý đánh giá cao việc tái cấu trúc chủ động vì nó loại
              bỏ sự cần thiết phải thực hiện các nhiệm vụ tái cấu trúc đặc biệt
              sau này. Sếp vui vẻ thì lập trình viên cũng vui vẻ!
            </p>
            <div style={{ float: "right", marginLeft: "10px" }}>
              <figure className="image">
                <img
                  src="/images/content-public/r4d93f.svg?id=68c5945ac20e360e480c1254ac94be82"
                  loading="lazy"
                />
              </figure>
            </div>
            <h4>Trong quá trình xem xét mã nguồn</h4>
            <p>
              Việc xem xét mã nguồn có thể là cơ hội cuối cùng để dọn dẹp mã
              trước khi nó được công khai.
            </p>
            <p>
              Tốt nhất là thực hiện các đánh giá như vậy theo cặp với tác giả.
              Bằng cách này, bạn có thể nhanh chóng khắc phục các vấn đề đơn
              giản và ước lượng thời gian để sửa chữa những vấn đề khó khăn hơn.
            </p>
          </article>

          <nav className="prev-next">
            <div className="next">
              <h4>ĐỌC TIẾP</h4>
              <a
                rel="next"
                href="/refactoring/how-to"
                className="btn btn-primary"
              >
                Cách tái cấu trúc&nbsp;
                <span className="fa fa-arrow-right"></span>
              </a>
            </div>
            <div className="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/technical-debt"
                className="btn btn-default"
              >
                <span className="fa fa-arrow-left"></span>&nbsp;Nợ kỹ thuật
              </a>
            </div>
          </nav>
        </div>

        <aside className="feature content-secondary"></aside>
      </div>
    </main>
  );
};

export default ContentWhen;
