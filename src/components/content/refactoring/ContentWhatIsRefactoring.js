import "./ContentWhatIsRefactoring.css";

const ContentWhatIsRefactoring = () => {
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
                Tái Cấu Trúc
              </a>
            </div>
            <h1 className="title">Mã Sạch</h1>

            <p>
              Mục đích chính của việc tái cấu trúc là đối phó với nợ kỹ thuật.
              Nó chuyển đổi một mớ hỗn độn thành mã nguồn sạch và thiết kế đơn
              giản.
            </p>
            <p>
              Tuyệt vời! Nhưng mã sạch là gì? Dưới đây là một số đặc điểm của
              nó:
            </p>
            <h4>
              <i className="fa fa-shower" aria-hidden="true"></i> Mã sạch là dễ
              hiểu đối với các lập trình viên khác.
            </h4>
            <p>
              Và tôi không nói về các thuật toán siêu phức tạp. Việc đặt tên
              biến kém, các lớp và phương thức quá lớn, các con số ma thuật
              (magic number) - bạn cứ liệt kê ra - tất cả những điều đó làm cho
              mã nguồn trở nên cẩu thả và khó nắm bắt.
            </p>
            <h4>
              <i className="fa fa-shower" aria-hidden="true"></i> Mã sạch không
              chứa mã trùng lặp.
            </h4>
            <p>
              Mỗi khi bạn phải thay đổi trong đoạn mã trùng lặp, bạn phải nhớ
              thực hiện thay đổi tương tự cho mọi phiên bản của nó. Điều này làm
              tăng gánh nặng nhận thức và làm chậm tiến độ.
            </p>
            <h4>
              <i className="fa fa-shower" aria-hidden="true"></i> Mã sạch chứa
              số lượng tối thiểu các lớp và các thành phần chuyển động khác.
            </h4>
            <p>
              Ít mã nguồn đồng nghĩa với việc ít thứ cần ghi nhớ trong đầu. Ít
              mã nguồn cũng đồng nghĩa với việc bảo trì ít hơn. Ít mã nguồn hơn
              tức là ít lỗi hơn. Mã nguồn là một gánh nặng, hãy giữ cho nó ngắn
              gọn và đơn giản.
            </p>
            <h4>
              <i className="fa fa-shower" aria-hidden="true"></i> Mã sạch vượt
              qua tất cả các bài kiểm tra.
            </h4>
            <p>
              Bạn biết mã nguồn của mình "bẩn" khi chỉ có 95% số bài kiểm tra
              của bạn vượt qua. Và bạn biết mình gặp rắc rối lớn khi độ bao phủ
              kiểm thử (test coverage) của bạn bằng 0%.
            </p>
            <h4>
              <i className="fa fa-shower" aria-hidden="true"></i> Mã nguồn sạch
              dễ bảo trì và tiết kiệm chi phí hơn!
            </h4>
          </article>

          <nav className="prev-next">
            <div className="next">
              <h4>ĐỌC TIẾP</h4>
              <a
                rel="next"
                href="/refactoring/technical-debt"
                className="btn btn-primary"
              >
                Nợ kỹ thuật&nbsp;<span className="fa fa-arrow-right"></span>
              </a>
            </div>
            <div className="prev">
              <h4>TRỞ LẠI</h4>
              <a rel="prev" href="/refactoring" className="btn btn-default">
                <span className="fa fa-arrow-left"></span>&nbsp;Tái cấu trúc
              </a>
            </div>
          </nav>
        </div>

        <aside className="feature content-secondary"></aside>
      </div>
    </main>
  );
};

export default ContentWhatIsRefactoring;
