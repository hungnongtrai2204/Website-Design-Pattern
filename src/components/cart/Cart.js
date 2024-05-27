const Cart = () => {
  return (
    <div className="cart-placeholder">
      <div className="cart-block-container" style={{ display: "none" }}>
        <div className="cart-block btn-group">
          <a href="#checkout" className="btn cart open-checkout">
            <span className="cart-text"></span>&nbsp;
            <strong className="cart-total font-money"></strong>{" "}
          </a>
          <a
            href="#checkout"
            className="btn btn-secondary checkout open-checkout"
          >
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            <span className="btn-text-span d-none d-sm-inline-block d-lg-none d-hg-inline-block"></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cart;
