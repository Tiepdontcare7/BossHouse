import classNames from "classnames/bind";
import styles from "./header.module.css";
import { useRef } from "react";

const css = classNames.bind(styles);

const Header = () => {
  const searchBtn = useRef(null);
  const searchForm = useRef(null);

  const handleClick = () => {
    // console.log(searchForm.current);
    // if(searchForm.current) searchForm.current?.classList.toggle('active')

    if(searchForm.current.style.display == "flex") {
        searchForm.current.style.display = "none"
    }else{
        searchForm.current.style.display = "flex"
    }
  };
  return (
    <div>
      <header>
        <aside className={css("site-off", "desktop-hide")}>
          <div className={css("off-canvas")}>
            <div className={css("canvas-head", "flexitem")}>
              <div className={css("logo")}>
                <a href="#">
                  <span className={css("circle")}></span>.PetHouse
                </a>
              </div>
              <a href="#" className={css("t-close", "flexcenter")}>
                <i className="ri-close-line"></i>
              </a>
            </div>
            <div className={css("departments")}></div>
            <nav></nav>
            <div className={css("thetop-nav")}></div>
          </div>
        </aside>

        <div className={css("header-top", "mobile-hide")}>
          <div className={css("container")}>
            <div className={css("wrapper", "flexitem")}>
              <div className={css("left")}>
                <ul className={css("flexitem", "main-links")}>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Featured Products</a>
                  </li>
                  <li>
                    <a href="#">Wishlist</a>
                  </li>
                </ul>
              </div>
              <div className={css("right")}>
                <ul className={css("flexitem", "main-links")}>
                  <li>
                    <a href="#">Sign Up</a>
                  </li>
                  <li>
                    <a href="#">My Account</a>
                  </li>
                  <li>
                    <a href="#">Order Tracking</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- header-top --> */}

        <div className={css("header-nav")}>
          <div className={css("container")}>
            <div className={css("wrapper", "flexitem")}>
              <a href="#" className={css("trigger", "desktop-hide")}>
                <span className="i ri-menu-2-line"></span>
              </a>
              <div className={css("left", "flexitem")}>
                <div className={css("logo")}>
                  <a href="">
                    <span className={css("circle")}></span>.PetHouse
                  </a>
                </div>
                <nav className={css("mobile-hide")}>
                  <ul className={css("flexitem", "second-links")}>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Shop</a>
                    </li>
                    <li className={css("has-child")}>
                      <a href="#">
                        Pet
                        <div className={css("icon-small")}>
                          <i className="ri-arrow-down-s-line"></i>
                        </div>
                      </a>
                      <div className={css("mega")}>
                        <div className={css("container")}>
                          <div className={css("wrapper")}>
                            <div className={css("flexcol")}>
                              <div className={css("row")}>
                                <h4>Dogs</h4>
                                <ul>
                                  <li>
                                    <a href="#">Poodle Dog</a>
                                  </li>
                                  <li>
                                    <a href="#">Pomeranian Dogs</a>
                                  </li>
                                  <li>
                                    <a href="#">Corgi Dog</a>
                                  </li>
                                  <li>
                                    <a href="#">Shiba Dog</a>
                                  </li>
                                  <li>
                                    <a href="#">Akita Dog</a>
                                  </li>
                                  <li>
                                    <a href="#">Chihuahua Dog</a>
                                  </li>
                                  <li>
                                    <a href="#">Husky Dog</a>
                                  </li>
                                  <li>
                                    <a href="#">Samoyed</a>
                                  </li>
                                  <li>
                                    <a href="#">Golden Dog</a>
                                  </li>
                                  <li>
                                    <a href="#">Labrador Dog</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className={css("flexcol")}>
                              <div className={css("row")}>
                                <h4>Ornamental Cat</h4>
                                <ul>
                                  <li>
                                    <a href="#">British Shorthair Cat</a>
                                  </li>
                                  <li>
                                    <a href="#">British LongHair Cat</a>
                                  </li>
                                  <li>
                                    <a href="#">Abrabic Cat</a>
                                  </li>
                                  <li>
                                    <a href="#">Bengal Cat</a>
                                  </li>
                                  <li>
                                    <a href="#">Munchkins</a>
                                  </li>
                                  <li>
                                    <a href="#">Scottish Fold-Eared Cat</a>
                                  </li>
                                  <li>
                                    <a href="#">Siam</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className={css("flexcol")}>
                              <div className={css("row")}>
                                <h4>Dog Stuff</h4>
                                <ul>
                                  <li>
                                    <a href="#">Dog's Food</a>
                                  </li>
                                  <li>
                                    <a href="#">Dog Clothes</a>
                                  </li>
                                  <li>
                                    <a href="#">Kennel</a>
                                  </li>
                                  <li>
                                    <a href="#">Medicine For Dogs</a>
                                  </li>
                                  <li>
                                    <a href="#">Toys For Dogs</a>
                                  </li>
                                  <li>
                                    <a href="#">Milk For Dogs</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className={css("flexcol")}>
                              <div className={css("row")}>
                                <h4>Cat Stuff</h4>
                                <ul className={css("women-brands")}>
                                  <li>
                                    <a href="#">Cat Food</a>
                                  </li>
                                  <li>
                                    <a href="#">Cat Litter</a>
                                  </li>
                                  <li>
                                    <a href="#">House For Cats</a>
                                  </li>
                                  <li>
                                    <a href="#">Cat Veterinary Medicine</a>
                                  </li>
                                  <li>
                                    <a href="#">Cat Care</a>
                                  </li>
                                  <li>
                                    <a href="#">Cat Food</a>
                                  </li>
                                  <li>
                                    <a href="#">Cat Litter</a>
                                  </li>
                                  <li>
                                    <a href="#">House For Cats</a>
                                  </li>
                                  <li>
                                    <a href="#">Cat Veterinary Medicine</a>
                                  </li>
                                  <li>
                                    <a href="#">Cat Care</a>
                                  </li>
                                </ul>
                                <a href="#" className={css("view-all")}>
                                  View all brands{" "}
                                  <i className="ri-arrow-right-line"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">
                        Sale
                        <div className={css("fly-item")}>
                          <span>New!</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className={css("right")}>
                <ul className={css("flexitem", "second-links")}>
                  <li className="">
                    <a href="#" onClick={handleClick}>
                      <div
                        ref={searchBtn}
                        id="search-btn"
                        className={css("icon-large")}
                      >
                        <i className="ri-search-line"></i>
                      </div>
                    </a>
                  </li>

                  <form
                    ref={searchForm}
                    action=""
                    className={css("search-form")}
                  >
                    <input
                      type="search"
                      className={css("search-box")}
                      placeholder="Search for products"
                    />
                    <label className={css("icon-search")}>
                      <i className="ri-search-line"></i>
                    </label>
                  </form>

                  <li className={css("mobile-hide")}>
                    <a href="#">
                      <div className={css("icon-large")}>
                        <i className="ri-heart-line"></i>
                      </div>
                      <div className={css("fly-item")}>
                        <span className={css("item-number")}>0</span>
                      </div>
                    </a>
                  </li>
                  <li className={css("mobile-hide")}>
                    <a href="#" className={css("iscart")}>
                      <div className={css("icon-large")}>
                        <i className="ri-shopping-cart-line"></i>
                        <div className={css("fly-item")}>
                          <span className={css("item-number")}>0</span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- header-nav --> */}
      </header>
    </div>
  );
};

export default Header;
