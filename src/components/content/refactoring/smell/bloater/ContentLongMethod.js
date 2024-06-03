const ContentLongMethod = () => {
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
              </a>{" "}
              /{" "}
              <a class="type" href="/refactoring/smells">
                Mùi Mã
              </a>{" "}
              /{" "}
              <a class="type" href="/refactoring/smells/bloaters">
                Mã Phình To
              </a>
            </div>
            <h1 class="title">Phương Thức Dài</h1>

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

            {/* <div class="aka">
              Также известен как:
              <span style={{ display: "inline-block" }}>Long Method</span>
            </div> */}

            <h3>Dấu Hiệu Và Triệu Chứng</h3>
            <p>
              Một phương thức chứa quá nhiều dòng mã. Thông thường, bất kỳ
              phương thức nào có độ dài vượt quá mười dòng đều là dấu hiệu cho
              thấy bạn nên xem xét kỹ hơn và đặt câu hỏi về thiết kế của phương
              thức đó.
            </p>
            <figure class="image">
              <img
                width="500"
                height="300"
                src="/images/refactoring/content/smells/long-method-012095.png?id=ba3b4a6d8ef25a8f676543cee5e1e019"
                srcset="
                /images/refactoring/content/smells/long-method-01-2x.png?id=fd9479c2221526f284c9b14fb94f9169 2x
              "
              />
            </figure>
            <h3>Nguyên Nhân Của Vấn Đề</h3>
            <p>
              Giống như khách sạn California, luôn có thứ gì đó được thêm vào
              một phương thức nhưng không có gì bị lấy ra. Vì việc viết mã dễ
              dàng hơn so với việc đọc nó, nên "mùi" này không được chú ý cho
              đến khi phương thức biến thành một con thú xấu xí, quá khổ.
            </p>
            <p>
              Về mặt tâm lý, việc tạo một phương thức mới thường khó hơn so với
              việc thêm vào một phương thức hiện có: "Nhưng chỉ có hai dòng,
              không cần phải tạo ra cả một phương thức chỉ cho việc đó..." Điều
              này có nghĩa là một dòng khác được thêm vào và sau đó là một dòng
              nữa, tạo ra một mớ bòng bong của mã spaghetti.
            </p>

            <h3>Cách Xử Lý</h3>
            <p>
              Một nguyên tắc nhỏ là nếu bạn cảm thấy cần phải chú thích một đoạn
              mã bên trong một phương thức, bạn nên lấy đoạn mã đó và đặt nó vào
              một phương thức mới. Ngay cả một dòng đơn lẻ cũng có thể và nên
              được tách thành một phương thức riêng biệt, nếu nó cần giải thích.
              Và nếu phương thức có tên mô tả, không ai cần phải xem mã để biết
              nó làm gì.
            </p>
            <figure class="image">
              <img
                width="500"
                height="300"
                src="/images/refactoring/content/smells/long-method-027655.png?id=274350a92b305ae79848ab40b3bdb0cb"
                srcset="
                /images/refactoring/content/smells/long-method-02-2x.png?id=beba19e840bf4763e85f006ef79cc89c 2x
              "
                loading="lazy"
              />
            </figure>
            <ul>
              <li>
                <p>
                  Để giảm độ dài thân phương thức, sử dụng kỹ thuật{" "}
                  <a href="/refactorings/composing-method/extract-method">
                    Trích Xuất Phương Thức
                  </a>
                  .
                </p>
              </li>
              <li>
                <p>
                  Nếu biến cục bộ và tham số cản trở việc trích xuất phương
                  thức, sử dụng{" "}
                  <a href="/refactorings/composing-method/replace-temp-with-query">
                    Thay Thế Biến Tạm Bằng Truy Vấn
                  </a>
                  ,{" "}
                  <a href="/refactorings/simplifying-method-calls/introduce-parameter-object">
                    Giới Thiệu Đối Tượng Tham Số
                  </a>{" "}
                  hoặc{" "}
                  <a href="/refactorings/simplifying-method-calls/preserve-whole-object">
                    Bảo Toàn Toàn Bộ Đối Tượng
                  </a>
                  .
                </p>
              </li>
              <li>
                <p>
                  Nếu các cách trên không hiệu quả, hãy thử chuyển toàn bộ
                  phương thức sang một đối tượng riêng biệt bằng kỹ thuật{" "}
                  <a href="../replace-method-with-method-object.html">
                    замены метода объектом методов
                  </a>
                  .
                </p>
              </li>
              <li>
                <p>
                  Условные операторы и циклы свидетельствуют о возможности
                  выделения кода в отдельный метод. Для работы с условными
                  выражениями подходит
                  <a href="../decompose-conditional.html">
                    декомпозиция условных операторов
                  </a>
                  . Для работы с циклом —
                  <a href="../extract-method.html">извлечение метода</a>.
                </p>
              </li>
            </ul>
            <h3>Выигрыш</h3>
            <ul>
              <li>
                <p>
                  Из всех видов объектного кода дольше всего выживают классы с
                  короткими методами. Чем длиннее ваш метод или функция, тем
                  труднее будет её понять и поддерживать.
                </p>
              </li>
              <li>
                <p>
                  Кроме того, в длинных методах зачастую можно обнаружить
                  «залежи» дублирования кода.
                </p>
              </li>
            </ul>
            <figure class="image">
              <img
                width="500"
                height="300"
                src="/images/refactoring/content/smells/long-method-03ca39.png?id=82ce2d388aa14bdae4e8f62b875f0259"
                srcset="
                /images/refactoring/content/smells/long-method-03-2x.png?id=ba563da468cf42a704ff53da2e89b6d5 2x
              "
                loading="lazy"
              />
            </figure>
            <h3>Производительность</h3>
            <p>
              Многие волнуются, что увеличение числа методов может плохо
              сказаться на производительности. В абсолютном большинстве случаев,
              это не является реальной проблемой, так что
              <strong>просто перестаньте об этом думать.</strong>
            </p>
            <p>
              Имея чистый и понятный код, вы с большей вероятностью натолкнётесь
              на отличный способ реструктуризировать код программы и увеличить
              реальную производительность, если такая надобность вообще будет.
            </p>

            <div
              class="prom banner-content banner banner-striped banner-with-image"
              data-id="Ref: Part of the ebook"
              data-creative-id="animated-ru"
              data-position="content_bottom"
            >
              <div class="banner-image">
                <a href="../refactoring/course.html">
                  <video
                    id="banner-zzz"
                    loop
                    muted
                    playsinline
                    width="200"
                    height="200"
                  >
                    <source
                      src="/images/refactoring/banners/tired-of-reading-banner-1xdc3d.mp4?id=7fa8f9682afda143c2a491c6ab1c1e56"
                      type="video/mp4"
                    />
                    <source
                      src="/images/refactoring/banners/tired-of-reading-banner3c9b.png?id=1721d160ff9c84cbf8912f5d282e2bb4"
                      type="image/png"
                    />
                    Your browser does not support HTML video.
                  </video>
                </a>
              </div>
              {/* <script>
              if (/CPU (?:iPhone )?OS [1-9]_/.test(navigator.userAgent)) {
                // Don't autoplay on old iOS, since it doesn not support playsinline.
              } else {
                document.getElementById("banner-zzz").play();
              }
            </script> */}

              <div class="banner-text">
                <h3 class="title">Устали читать?</h3>
                <p class="big">
                  Сбегайте за подушкой, у нас тут контента на
                  <span class="blue">7 часов</span> чтения.
                </p>
                <p>
                  Или попробуйте наш интерактивный курс. Он гораздо более
                  интересный, чем банальный текст.
                </p>
                <a class="btn btn-secondary" href="../refactoring/course.html">
                  <i class="fa fa-star" aria-hidden="true"></i> Узнать больше…
                </a>
              </div>
            </div>
          </article>

          <nav class="prev-next">
            <div class="next">
              <h4>Читаем дальше</h4>
              <a rel="next" href="large-class.html" class="btn btn-primary">
                Большой класс&nbsp;<span class="fa fa-arrow-right"></span>
              </a>
            </div>
            <div class="prev">
              <h4>Вернуться назад</h4>
              <a
                rel="prev"
                href="../refactoring/smells/bloaters.html"
                class="btn btn-default"
              >
                <span class="fa fa-arrow-left"></span>&nbsp;Раздувальщики
              </a>
            </div>
          </nav>
        </div>

        <aside class="feature content-secondary">
          <div
            class="prom banner-sidebar"
            data-id="Ref: Sidebar"
            data-creative-id="standard-sidebar-ru"
            data-position="sidebar"
          >
            <div class="ban">
              <div class="image product-image">
                <span class="banner-discount">Скидки!</span>
                <a href="../refactoring/course.html">
                  <img
                    width="300"
                    height="300"
                    loading="lazy"
                    src="/images/refactoring/course/course-cover-en1b63.jpg?id=e9d6b4015f4c6c48cf06f7479874d8d7"
                  />
                </a>
              </div>
              <div class="banner-text banner-text-ru">
                <p class="text-center">
                  Этот запах кода — малая часть интерактивного
                  <b>онлайн курса по рефакторингу</b>.
                </p>
                <a
                  href="../refactoring/course.html"
                  class="btn btn-secondary btn-block"
                >
                  <i class="fa fa-star" aria-hidden="true"></i> Узнать больше…
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default ContentLongMethod;
