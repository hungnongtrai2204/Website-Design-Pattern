const ContentTechnicalDebt = () => {
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
            <h1 className="title">Nợ kỹ thuật</h1>

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
              Mọi người đều cố gắng hết sức để viết mã nguồn xuất sắc ngay từ
              đầu. Có lẽ không có lập trình viên nào cố ý viết mã nguồn bẩn làm
              tổn hại đến dự án. Nhưng tại thời điểm nào thì mã nguồn sạch trở
              nên bẩn?
            </p>
            <p>
              Phép ẩn dụ "nợ kỹ thuật" liên quan đến mã nguồn bẩn ban đầu được
              đề xuất bởi{"  "}
              <a href="http://wiki.c2.com/?WardExplainsDebtMetaphor">
                Ward Cunningham
              </a>
              .
            </p>
            <p>
              Nếu bạn vay tiền từ ngân hàng, điều này cho phép bạn mua hàng
              nhanh hơn. Bạn trả thêm để đẩy nhanh quá trình - bạn không chỉ trả
              số tiền gốc mà còn phải trả thêm lãi suất cho khoản vay. Khỏi phải
              nói, bạn thậm chí có thể tích lũy quá nhiều lãi đến mức số tiền
              lãi vượt quá tổng thu nhập của bạn, khiến việc trả nợ đầy đủ trở
              nên bất khả thi.
            </p>
            <p>
              Điều tương tự cũng có thể xảy ra với mã nguồn. Bạn có thể tạm thời
              tăng tốc mà không cần viết bài kiểm tra cho các tính năng mới,
              nhưng điều này sẽ dần dần làm chậm tiến độ của bạn mỗi ngày cho
              đến khi bạn cuối cùng phải trả hết "nợ" bằng cách viết các bài
              kiểm tra.
            </p>
            <h2>Nguyên nhân của nợ kỹ thuật</h2>
            <h4>
              <i className="fa fa-badge-percent" aria-hidden="true"></i> Áp lực
              kinh doanh
            </h4>
            <p>
              Đôi khi hoàn cảnh kinh doanh có thể buộc bạn phải tung ra các tính
              năng trước khi chúng hoàn toàn hoàn thiện. Trong trường hợp này,
              các bản vá và giải pháp tạm thời (kludge) sẽ xuất hiện trong mã
              nguồn để che giấu các phần chưa hoàn thành của dự án.
            </p>
            <h4>
              <i className="fa fa-badge-percent" aria-hidden="true"></i> Thiếu
              hiểu biết về hậu quả của nợ kỹ thuật
            </h4>
            <p>
              Đôi khi nhà tuyển dụng của bạn có thể không hiểu rằng nợ kỹ thuật
              có "lãi suất", thể hiện ở việc làm chậm tiến độ phát triển khi nợ
              tích lũy. Điều này có thể khiến việc dành thời gian của nhóm cho
              việc tái cấu trúc trở nên quá khó khăn vì ban quản lý không thấy
              được giá trị của nó.
            </p>
            <h4>
              <i className="fa fa-badge-percent" aria-hidden="true"></i> Không
              giải quyết được sự liên kết chặt chẽ quá mức giữa các thành phần
            </h4>
            <p>
              Đây là lúc dự án giống như một khối đá nguyên khối hơn là một sản
              phẩm kết hợp từ các mô-đun riêng lẻ. Trong trường hợp này, bất kỳ
              thay đổi nào đối với một phần của dự án sẽ ảnh hưởng đến các phần
              khác. Việc phát triển theo nhóm trở nên khó khăn hơn vì khó có thể
              cô lập công việc của từng thành viên.
            </p>
            <h4>
              <i className="fa fa-badge-percent" aria-hidden="true"></i> Thiếu
              các bài kiểm thử
            </h4>
            <p>
              Việc thiếu phản hồi ngay lập tức khuyến khích các giải pháp nhanh
              chóng nhưng mạo hiểm hoặc các bản vá tạm thời (kludge). Trong
              trường hợp xấu nhất, những thay đổi này được triển khai trực tiếp
              vào môi trường sản xuất mà không qua bất kỳ kiểm thử nào trước đó.
              Hậu quả có thể rất thảm khốc. Ví dụ, một hotfix tưởng chừng như vô
              hại có thể gửi email thử nghiệm kỳ lạ đến hàng nghìn khách hàng
              hoặc thậm chí tệ hơn, xóa hoặc làm hỏng toàn bộ cơ sở dữ liệu.
            </p>
            <h4>
              <i className="fa fa-badge-percent" aria-hidden="true"></i> Thiếu
              tài liệu
            </h4>
            <p>
              Điều này làm chậm quá trình giới thiệu người mới vào dự án và có
              thể làm ngừng trệ quá trình phát triển nếu những người chủ chốt
              rời khỏi dự án.
            </p>
            <h4>
              <i className="fa fa-badge-percent" aria-hidden="true"></i> Thiếu
              sự tương tác giữa các thành viên trong nhóm
            </h4>
            <p>
              Nếu cơ sở kiến thức không được phân phối rộng rãi trong toàn công
              ty, mọi người sẽ làm việc với một sự hiểu biết lỗi thời về các quy
              trình và thông tin về dự án. Tình huống này có thể trở nên trầm
              trọng hơn khi các nhà phát triển mới vào nghề được đào tạo không
              chính xác bởi những người hướng dẫn của họ.
            </p>
            <h4>
              <i className="fa fa-badge-percent" aria-hidden="true"></i> Phát
              triển đồng thời dài hạn trên nhiều nhánh
            </h4>
            <p>
              Điều này có thể dẫn đến tích lũy nợ kỹ thuật, sau đó sẽ tăng lên
              khi các thay đổi được hợp nhất. Càng nhiều thay đổi được thực hiện
              riêng lẻ, tổng nợ kỹ thuật càng lớn.
            </p>
            <h4>
              <i className="fa fa-badge-percent" aria-hidden="true"></i> Trì
              hoãn tái cấu trúc
            </h4>
            <p>
              Các yêu cầu của dự án liên tục thay đổi và đến một lúc nào đó, có
              thể rõ ràng là một số phần của mã nguồn đã lỗi thời, trở nên cồng
              kềnh và phải được thiết kế lại để đáp ứng các yêu cầu mới.
            </p>
            <p>
              Mặt khác, các lập trình viên của dự án vẫn viết mã mới mỗi ngày,
              và mã mới này phải tương tác với các phần đã lỗi thời. Do đó, việc
              trì hoãn tái cấu trúc càng lâu thì càng có nhiều mã nguồn phụ
              thuộc phải được làm lại trong tương lai.
            </p>
            <h4>
              <i className="fa fa-badge-percent" aria-hidden="true"></i> Thiếu
              giám sát tuân thủ
            </h4>
            <p>
              Điều này xảy ra khi mọi người làm việc trên dự án viết mã theo
              cách họ thấy phù hợp (tức là giống như cách họ đã viết dự án trước
              đó).
            </p>
            <h4>
              <i className="fa fa-badge-percent" aria-hidden="true"></i>
              Thiếu năng lực
            </h4>
            <p>
              Đây là khi lập trình viên không biết cách viết mã nguồn tử tế.
            </p>
          </article>

          <nav className="prev-next">
            <div className="next">
              <h4>ĐỌC TIẾP</h4>
              <a
                rel="next"
                href="/refactoring/when"
                className="btn btn-primary"
              >
                Khi nào cần tái cấu trúc&nbsp;
                <span className="fa fa-arrow-right"></span>
              </a>
            </div>
            <div className="prev">
              <h4>TRỞ LẠI</h4>
              <a
                rel="prev"
                href="/refactoring/what-is-refactoring"
                className="btn btn-default"
              >
                <span className="fa fa-arrow-left"></span>&nbsp;Mã Sạch
              </a>
            </div>
          </nav>
        </div>

        <aside className="feature content-secondary"></aside>
      </div>
    </main>
  );
};

export default ContentTechnicalDebt;
