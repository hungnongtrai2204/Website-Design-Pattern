const ContentHowTo = () => {
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
            <h1 className="title">Cách tái cấu trúc</h1>

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

            <p>
              Việc tái cấu trúc nên được thực hiện như một chuỗi các thay đổi
              nhỏ, mỗi thay đổi làm cho mã nguồn hiện có tốt hơn một chút trong
              khi vẫn giữ cho chương trình hoạt động bình thường.
            </p>
            {/* <figure className="image">
              <img src="/images/content-public/process-ukbaa9.svg" />
            </figure> */}
            <h2>
              <i className="fa fa-clipboard-list-check" aria-hidden="true"></i>{" "}
              Danh sách kiểm tra tái cấu trúc đúng cách
            </h2>
            <h4>
              <i className="fa fa-check-square" aria-hidden="true"></i> Mã nguồn
              nên trở nên sạch hơn sau khi tái cấu trúc.
            </h4>
            <p>
              Nếu mã nguồn vẫn bẩn sau khi tái cấu trúc... xin lỗi, nhưng bạn
              vừa lãng phí một giờ cuộc đời. Hãy cố gắng tìm hiểu lý do tại sao
              điều này lại xảy ra.
            </p>
            <p>
              Điều này thường xảy ra khi bạn rời xa việc tái cấu trúc với các
              thay đổi nhỏ và kết hợp một loạt các lần tái cấu trúc thành một
              thay đổi lớn. Vì vậy, rất dễ bị lạc lối, đặc biệt là khi bạn có
              giới hạn thời gian.
            </p>
            <p>
              Nhưng nó cũng có thể xảy ra khi làm việc với mã nguồn cực kỳ cẩu
              thả. Dù bạn cải thiện điều gì, tổng thể mã nguồn vẫn là một thảm
              họa.
            </p>
            <p>
              Trong trường hợp này, đáng để suy nghĩ về việc viết lại hoàn toàn
              các phần của mã nguồn. Nhưng trước đó, bạn nên viết các bài kiểm
              tra và dành ra một khoảng thời gian kha khá. Nếu không, bạn sẽ kết
              thúc với loại kết quả mà chúng ta đã nói ở đoạn đầu tiên.
            </p>
            <h4>
              <i className="fa fa-check-square" aria-hidden="true"></i> Không
              nên tạo chức năng mới trong quá trình tái cấu trúc.
            </h4>
            <p>
              Đừng trộn lẫn việc tái cấu trúc và phát triển trực tiếp các tính
              năng mới. Cố gắng tách biệt các quá trình này ít nhất là trong
              phạm vi các lần commit riêng lẻ.
            </p>
            <h4>
              <i className="fa fa-check-square" aria-hidden="true"></i> Tất cả
              các bài kiểm tra hiện có phải vượt qua sau khi tái cấu trúc.
            </h4>
            <p>
              Có hai trường hợp các bài kiểm thử có thể thất bại sau khi tái cấu
              trúc:
            </p>
            <ul>
              <li>
                <p>
                  <strong>Bạn đã mắc lỗi trong quá trình tái cấu trúc.</strong>{" "}
                  Trường hợp này rất rõ ràng: hãy tiếp tục và sửa lỗi.
                </p>
              </li>
              <li>
                <p>
                  <strong>Các bài kiểm thử của bạn ở mức quá thấp.</strong>
                  Ví dụ: bạn đã kiểm tra các phương thức private của các lớp.
                </p>
                <p>
                  Trong trường hợp này, các bài kiểm thử là nguyên nhân. Bạn có
                  thể tái cấu trúc lại các bài kiểm tra hoặc viết một bộ bài
                  kiểm tra cấp cao hơn hoàn toàn mới. Một cách tuyệt vời để
                  tránh tình huống kiểu này là viết các bài kiểm tra theo{" "}
                  <a href="https://en.wikipedia.org/wiki/Behavior-driven_development">
                    phong cách BDD
                  </a>
                  .
                </p>
              </li>
            </ul>
          </article>

          <nav className="prev-next">
            <div className="next">
              <h4>ĐỌC TIẾP</h4>
              <a
                rel="next"
                href="/refactoring/smells"
                className="btn btn-primary"
              >
                Mùi mã&nbsp;
                <span className="fa fa-arrow-right"></span>
              </a>
            </div>
            <div className="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/when"
                className="btn btn-default"
              >
                <span className="fa fa-arrow-left"></span>&nbsp;Khi nào cần tái
                cấu trúc
              </a>
            </div>
          </nav>
        </div>

        <aside className="feature content-secondary"></aside>
      </div>
    </main>
  );
};
export default ContentHowTo;
