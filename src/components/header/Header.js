const Header = () => {
  return (
    <div
      className="announcement-block prom"
      style={{ background: "black" }}
      data-id="DIDP-announcement"
      data-creative-id="ru"
      data-position="top"
    >
      <div className="announcement-block-inner">
        {/* САЙТ ЗАБЛОКИРОВАН РОСКОМНАДЗОРОМ{" "} */}
        <span style={{ color: "red", fontWeight: "bold" }}>
          GIẢM GIÁ MÙA XUÂN
        </span>{" "}
        <a href="https://feedback.refactoring.guru/ru/communities/1/topics/4116-sajt-zablokirovan-v-rossii">
          Mua Ngay »
        </a>
      </div>
    </div>
  );
};

export default Header;
