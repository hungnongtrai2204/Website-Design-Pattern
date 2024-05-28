import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  // console.log(location.pathname.includes("store"));
  return (
    <aside className="sidebar main-menu nano">
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
                    Khóa Học Tái Cấu Trúc
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
                  className={
                    location.pathname.includes("refactoring")
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
                      <a href="ru/refactoring/when.html">
                        Khi nào cần tái cấu trúc
                      </a>
                    </li>
                    <li className="">
                      <a href="ru/refactoring/how-to.html">Cách tái cấu trúc</a>
                    </li>
                  </ul>
                </li>
                <li className="">
                  <a href="ru/refactoring/catalog.html"> Mục lục </a>
                </li>
                <li className="">
                  <a href="ru/refactoring/smells.html"> Mùi Mã </a>

                  <ul>
                    <li className="">
                      <a href="ru/refactoring/smells/bloaters.html">
                        Раздувальщики
                      </a>

                      <ul>
                        <li className="">
                          <a href="ru/smells/long-method.html">Длинный метод</a>
                        </li>
                        <li className="">
                          <a href="ru/smells/large-className.html">
                            Большой класс
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/smells/primitive-obsession.html">
                            Одержимость элементарными типами
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/smells/long-parameter-list.html">
                            Длинный список параметров
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/smells/data-clumps.html">Группы данных</a>
                        </li>
                      </ul>
                    </li>
                    <li className="">
                      <a href="ru/refactoring/smells/oo-abusers.html">
                        Нарушители объектно-ориентированного дизайна
                      </a>

                      <ul>
                        <li className="">
                          <a href="ru/smells/switch-statements.html">
                            Операторы switch
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/smells/temporary-field.html">
                            Временное поле
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/smells/refused-bequest.html">
                            Отказ от наследства
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/smells/alternative-classNamees-with-different-interfaces.html">
                            Альтернативные классы с разными интерфейсами
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="">
                      <a href="ru/refactoring/smells/change-preventers.html">
                        Утяжелители изменений
                      </a>

                      <ul>
                        <li className="">
                          <a href="ru/smells/divergent-change.html">
                            Расходящиеся модификации
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/smells/shotgun-surgery.html">
                            Стрельба дробью
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/smells/parallel-inheritance-hierarchies.html">
                            Параллельные иерархии наследования
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="">
                      <a href="ru/refactoring/smells/dispensables.html">
                        Замусориватели
                      </a>

                      <ul>
                        <li className="">
                          <a href="ru/smells/comments.html"> Комментарии </a>
                        </li>
                        <li className="">
                          <a href="ru/smells/duplicate-code.html">
                            Дублирование кода
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/smells/lazy-className.html">
                            Ленивый класс
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/smells/data-className.html">
                            Класс данных
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/smells/dead-code.html"> Мёртвый код </a>
                        </li>
                        <li className="">
                          <a href="ru/smells/speculative-generality.html">
                            Теоретическая общность
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="">
                      <a href="ru/refactoring/smells/couplers.html">
                        Опутыватели связями
                      </a>

                      <ul>
                        <li className="">
                          <a href="ru/smells/feature-envy.html">
                            Завистливые функции
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/smells/inappropriate-intimacy.html">
                            Неуместная близость
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/smells/message-chains.html">
                            Цепочка вызовов
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/smells/middle-man.html"> Посредник </a>
                        </li>
                      </ul>
                    </li>
                    <li className="">
                      <a href="ru/refactoring/smells/other.html">
                        Остальные запахи
                      </a>

                      <ul>
                        <li className="">
                          <a href="ru/smells/incomplete-library-className.html">
                            Неполнота библиотечного класса
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="">
                  <a href="ru/refactoring/techniques.html"> Tái cấu trúc </a>

                  <ul>
                    <li className="">
                      <a href="ru/refactoring/techniques/composing-methods.html">
                        Составление методов
                      </a>

                      <ul>
                        <li className="">
                          <a href="ru/extract-method.html">Извлечение метода</a>
                        </li>
                        <li className="">
                          <a href="ru/inline-method.html">Встраивание метода</a>
                        </li>
                        <li className="">
                          <a href="ru/extract-variable.html">
                            Извлечение переменной
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/inline-temp.html">
                            Встраивание переменной
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/replace-temp-with-query.html">
                            Замена переменной вызовом метода
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/split-temporary-variable.html">
                            Расщепление переменной
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/remove-assignments-to-parameters.html">
                            Удаление присваиваний параметрам
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/replace-method-with-method-object.html">
                            Замена метода объектом методов
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/substitute-algorithm.html">
                            Замена алгоритма
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="">
                      <a href="ru/refactoring/techniques/moving-features-between-objects.html">
                        Перемещение функций между объектами
                      </a>

                      <ul>
                        <li className="">
                          <a href="ru/move-method.html">Перемещение метода</a>
                        </li>
                        <li className="">
                          <a href="ru/move-field.html"> Перемещение поля </a>
                        </li>
                        <li className="">
                          <a href="ru/extract-className.html">
                            Извлечение класса
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/inline-className.html">
                            Встраивание класса
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/hide-delegate.html">
                            Сокрытие делегирования
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/remove-middle-man.html">
                            Удаление посредника
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/introduce-foreign-method.html">
                            Введение внешнего метода
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/introduce-local-extension.html">
                            Введение локального расширения
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="">
                      <a href="ru/refactoring/techniques/organizing-data.html">
                        Организация данных
                      </a>

                      <ul>
                        <li className="">
                          <a href="ru/self-encapsulate-field.html">
                            Самоинкапсуляция поля
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/replace-data-value-with-object.html">
                            Замена простого поля объектом
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/change-value-to-reference.html">
                            Замена значения ссылкой
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/change-reference-to-value.html">
                            Замена ссылки значением
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/replace-array-with-object.html">
                            Замена поля-массива объектом
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/duplicate-observed-data.html">
                            Дублирование видимых данных
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/change-unidirectional-association-to-bidirectional.html">
                            Замена однонаправленной связи двунаправленной
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/change-bidirectional-association-to-unidirectional.html">
                            Замена двунаправленной связи однонаправленной
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/replace-magic-number-with-symbolic-constant.html">
                            Замена магического числа символьной константой
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/encapsulate-field.html">
                            Инкапсуляция поля
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/encapsulate-collection.html">
                            Инкапсуляция коллекции
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/replace-type-code-with-className.html">
                            Замена кодирования типа классом
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/replace-type-code-with-subclassNamees.html">
                            Замена кодирования типа подклассами
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/replace-type-code-with-state-strategy.html">
                            Замена кодирования типа состоянием/стратегией
                          </a>
                        </li>
                        <li className="">
                          <a href="ru/replace-subclassName-with-fields.html">
                            Замена подкласса полями
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="">
                      <a href="ru/refactoring/techniques/simplifying-conditional-expressions.html">
                        Упрощение условных выражений
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
