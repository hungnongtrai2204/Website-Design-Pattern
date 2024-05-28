const ContentTechnicalDebt = () => {
  return (
    <main
      role="main"
      class="main-content top-content center-content"
      data-page_class=""
    >
      <div class="main-content-container center-content-container">
        <div class="page text">
          <article>
            <div class="breadcrumb">
              <a class="home" href="/">
                <i class="fa fa-home" aria-hidden="true"></i>
              </a>{" "}
              /{" "}
              <a class="type" href="/refactoring">
                Tái Cấu Trúc
              </a>
            </div>
            <h1 class="title">Nợ kỹ thuật</h1>

            {/* <script type="text/javascript">
            // Shorten examples titles for users.
            var h1 = document.getElementsByTagName("H1")[0];
            if (h1.offsetHeight > 160) {
              h1.className += " smaller";
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
            Nếu bạn vay tiền từ ngân hàng, điều này cho phép bạn mua hàng nhanh hơn. Bạn trả thêm để đẩy nhanh quá trình - bạn không chỉ trả số tiền gốc mà còn phải trả thêm lãi suất cho khoản vay. Khỏi phải nói, bạn thậm chí có thể tích lũy quá nhiều lãi đến mức số tiền lãi vượt quá tổng thu nhập của bạn, khiến việc trả nợ đầy đủ trở nên bất khả thi.
            </p>
            <p>
              Также, вы можете взять несколько кредитов одновременно. Более того
              - вы можете набрать столько кредитов, что сумма процентов
              перевесит ваш совокупный доход и сделает полное погашение
              невозможным.
            </p>
            <p>
              То же происходит и с кодом. Сегодня вы временно ускоритесь, не
              написав тесты для новой фичи. Но каждый день пока эту фичу
              приходится тестировать руками, замедляет ваш общий прогресс. В
              какой-то момент, сумма этого времени превысит ту, которую вы бы
              потратили на изначальное написание теста.
            </p>
            <h2>Причины появления технического долга</h2>
            <h4>
              <i class="fa fa-badge-percent" aria-hidden="true"></i> Давление со
              стороны бизнеса
            </h4>
            <p>
              Появляется когда бизнес заставляет выкатить фичи раньше, чем они
              будут полностью доделаны. В этом случае, в коде появляются
              заплатки и «костыли», которые скрывают недоделанные части проекта.
            </p>
            <h4>
              <i class="fa fa-badge-percent" aria-hidden="true"></i>
              Отсутствие понимания последствий технического долга
            </h4>
            <p>
              Появляется когда бизнес не понимает, что технический долг
              «начисляет проценты» в виде замедления темпов разработки по мере
              накопления долга. Из-за этого слишком сложно выделить время
              команды на рефакторинг, так как руководство не видит в этом
              ценности.
            </p>
            <h4>
              <i class="fa fa-badge-percent" aria-hidden="true"></i>
              Отсутствие борьбы с жёсткой связанностью компонентов
            </h4>
            <p>
              Это когда проект напоминает монолит, а не связь отдельных модулей.
              В этом случае любые изменения одной части проекта затрагивают
              другие. Командная разработка затруднена, так как сложно
              изолировать участки работы отдельных людей.
            </p>
            <h4>
              <i class="fa fa-badge-percent" aria-hidden="true"></i>
              Отсутствие авто-тестов
            </h4>
            <p>
              Отсутствие немедленной обратной связи поощряет быстрые, но
              рискованные исправления и «костыли», иногда прямо на продакшене.
              Эффекты от этого бывают катастрофические. Например, невинный
              хот-фикс рассылает тестовое письмо по всей базе клиентов или
              удаляет реальные данные клиентов в базе данных.
            </p>
            <h4>
              <i class="fa fa-badge-percent" aria-hidden="true"></i>
              Отсутствие документации
            </h4>
            <p>
              Отсутствующая либо устарелая документация замедляет введение новых
              людей в проект. Такой проект рискует полностью застопориться, если
              ключевые сотрудники уволятся.
            </p>
            <h4>
              <i class="fa fa-badge-percent" aria-hidden="true"></i>
              Отсутствие взаимодействия между членами команды
            </h4>
            <p>
              Когда база знаний не распространяется по организации, люди
              работают с устаревшим пониманием процессов и деталей проекта.
              Положение усугубляется, когда младшие разработчики неправильно
              обучаются их наставниками.
            </p>
            <h4>
              <i class="fa fa-badge-percent" aria-hidden="true"></i>
              Долговременная одновременная разработка в нескольких ветках
            </h4>
            <p>
              Может вызвать накопление технического долга, который необходимо
              восполнить при слиянии изменений воедино. Чем больше изменений,
              которые сделаны изолировано, тем больше итоговый технический долг.
            </p>
            <h4>
              <i class="fa fa-badge-percent" aria-hidden="true"></i>
              Отложенный рефакторинг
            </h4>
            <p>
              Требования к проекту постоянно изменяются и в определённый момент,
              может стать очевидным, что части кода устарели, стали громоздкими
              и должны быть переработаны под новые требования.
            </p>
            <p>
              С другой стороны, программисты проекта каждый день пишут новый
              код, работающий с устаревшими частями. Поэтому чем дольше
              задерживается рефакторинг, тем больше зависимого кода придётся
              перелопачивать в будущем.
            </p>
            <h4>
              <i class="fa fa-badge-percent" aria-hidden="true"></i>
              Отсутствие контроля за соблюдением стандартов
            </h4>
            <p>
              Каждый участник проекта пишет код так, как считает правильным
              (так, как он писал на прошлом проекте). В итоге код проекта
              превращается в салат из стилей кодирования, затрудняя понимание
              кода для всех членов команды.
            </p>
            <h4>
              <i class="fa fa-badge-percent" aria-hidden="true"></i>
              Отсутствие компетенции
            </h4>
            <p>Когда разработчик просто не умеет писать качественный код.</p>
          </article>

          <nav class="prev-next">
            <div class="next">
              <h4>Читаем дальше</h4>
              <a rel="next" href="when.html" class="btn btn-primary">
                Когда рефакторить&nbsp;<span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>Вернуться назад</h4>
              <a
                rel="prev"
                href="what-is-refactoring.html"
                class="btn btn-default"
              >
                <span class="fa fa-arrow-left"></span>&nbsp;Чистый код
              </a>
            </div>
          </nav>
        </div>

        <aside class="feature content-secondary"></aside>
      </div>
    </main>
  );
};

export default ContentTechnicalDebt;
