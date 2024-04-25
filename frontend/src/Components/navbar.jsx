const Navbar = ({ filterItem, menuList, list }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <nav className="navbar">
        <div className="btn-group">
          {menuList &&
            menuList.map((curElem, indx) => {
              return (
                <button
                  key={indx}
                  className="btn-group__item"
                  onClick={() => filterItem(curElem)}
                >
                  {curElem}
                </button>
              );
            })}
          {list &&
            list.map((navItem, indx) => {
              return (
                <button
                  key={indx}
                  className="btn-group__item"
                  onClick={navItem.onClick}
                >
                  {navItem.innertext}
                </button>
              );
            })}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
