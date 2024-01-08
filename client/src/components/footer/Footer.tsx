import classNames from 'classnames/bind';
import styles from './footer.module.css'

const css = classNames.bind(styles)

const Footer = () => {
  return <div>
        <footer className={css("footer")}>
            <div className={css("footer-top", "section")}>
                <div className={css("container")}>
                <div className={css("footer-brand")}>
                    <div className={css("logo")}><a href="#"><span className={css("circle")}></span>.PetHouse</a></div>
                    <p className={css("footer-text")}>
                    If you have any question, please contact us at
                    <a href="mailto:support@gmail.com" className={css("link")}>support@gmail.com </a>
                    </p>
                    <ul className={css("contact-list")}>
                        <li className={css("contact-item")}>
                            <i className="ri-map-pin-fill"></i>

                            <address className={css("address")}>
                            30 Khuong Ha, Khuong Dinh, Thanh Xuan, Ha Noi
                            </address>
                        </li>

                        <li className={css("contact-item")}>
                            <i className="ri-phone-fill"></i>

                            <a href="tel:+16234567891011" className={css("contact-link")}
                            >(+1)-6234-56-789-1011</a>
                        </li>
                    </ul>

                    <ul className={css("social-list")}>
                    <li>
                        <a href="#" className={css("social-link")}>
                            <i className="ri-facebook-circle-fill"></i>
                        </a>
                    </li>

                    <li>
                        <a href="#" className={css("social-link")}>
                            <i className="ri-twitter-fill"></i>
                        </a>
                    </li>

                    <li>
                        <a href="#" className={css("social-link")}>
                            <i className="ri-instagram-fill"></i>
                        </a>
                    </li>

                    <li>
                        <a href="#" className={css("social-link")}>
                            <i className="ri-pinterest-fill"></i>
                        </a>
                    </li>
                    </ul>
                </div>

                <ul className={css("footer-list")}>
                    <li>
                        <p className={css("footer-list-title")}>Corporate</p>
                    </li>

                    <li>
                        <a href="#" className={css("footer-link")}>Careers</a>
                    </li>

                    <li>
                        <a href="#" className={css("footer-link")}>About Us</a>
                    </li>

                    <li>
                        <a href="#" className={css("footer-link")}>Contact Us</a>
                    </li>

                    <li>
                        <a href="#" className={css("footer-link")}>FAQs</a>
                    </li>

                    <li>
                        <a href="#" className={css("footer-link")}>Vendors</a>
                    </li>

                    <li>
                        <a href="#" className={css("footer-link")}>Affiliate Program</a>
                    </li>
                </ul>

                <ul className={css("footer-list")}>
                    <li>
                        <p className={css("footer-list-title")}>Information</p>
                    </li>

                    <li>
                        <a href="#" className={css("footer-link")}>Online Store</a>
                    </li>

                    <li>
                        <a href="#" className={css("footer-link")}>Privacy Policy</a>
                    </li>

                    <li>
                        <a href="#" className={css("footer-link")}>Refund Policy</a>
                    </li>

                    <li>
                        <a href="#" className={css("footer-link")}>Shipping Policy</a>
                    </li>

                    <li>
                        <a href="#" className={css("footer-link")}>Terms of Service</a>
                    </li>

                    <li>
                        <a href="#" className={css("footer-link")}>Track Order</a>
                    </li>
                </ul>

                <ul className={css("footer-list")}>
                    <li>
                        <p className={css("footer-list-title")}>Services</p>
                    </li>

                    <li>
                        <a href="#" className={css("footer-link")}>Grooming</a>
                    </li>

                    <li>
                        <a href="#" className={css("footer-link")}>Positive Dog Training</a>
                    </li>

                    <li>
                        <a href="#" className={css("footer-link")}>Veterinary Services</a>
                    </li>

                    <li>
                        <a href="#" className={css("footer-link")}>Petco Insurance</a>
                    </li>

                    <li>
                        <a href="#" className={css("footer-link")}>Pet Adoption</a>
                    </li>

                    <li>
                        <a href="#" className={css("footer-link")}>Resource Center</a>
                    </li>
                </ul>
                </div>
            </div>

            <div className={css("footer-bottom")}>
                <div className={css("container")}>
                <p className={css("copyright")}>
                    &copy; 2022 Made with ♥ by
                    <a href="#" className={css("copyright-link")}>codewithsadee.</a>
                </p>

                <img
                    src="./assets/images/payment.png"
                    width="397"
                    height="32"
                    loading="lazy"
                    alt="payment method"
                    className={css()}
                />
                </div>
            </div>
        </footer>
        {/* footer */}

        <div className={css("menu-bottom" ,"desktop-hide")}>
            <div className={css("container")}>
                <div className={css("wrapper")}>
                    <nav>
                        <ul className={css("flexitem")}>
                            <li>
                                <a href="#">
                                    <i className="ri-bar-chart-line"></i>
                                    <span>Trending</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="ri-user-6-line"></i>
                                    <span>Account</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="ri-heart-line"></i>
                                    <span>Wishlist</span>
                                </a>
                            </li>
                            <li>
                                <a href="#0" className={css("t-search")}>
                                    <i className="ri-search-line"></i>
                                    <span>Search</span>
                                </a>
                            </li>
                            <li>
                                <a href="#0">
                                    <i className="ri-shopping-cart-line"></i>
                                    <span>Cart</span>
                                    <div className={css("fly-item")}><span className="item-number">0</span></div>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        {/* <!-- menu bottom --> */}

        <div className={css("search-bottom" ,"destop-hide")}>
            <div className={css("container")}>
                <div className={css("wrapper")}>
                    <form action="" className={css("search")}>
                        <a href="#" className={css("t-close" ,"search-close" ,"flexcenter")}><i className="ri-close-line"></i></a>
                        <span className={css("icon-large")}><i className="ri-search-line"></i></span>
                        <input type="search" placeholder="Search" required />
                        <button type="submit">Search</button>
                    </form>
                </div>
            </div>
        </div>
        {/* <!-- search bottom --> */}

        <div className={css("overlay")}></div>
  </div>;
};

export default Footer;
