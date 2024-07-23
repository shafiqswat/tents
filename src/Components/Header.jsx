/** @format */

import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  useEffect(() => {
    function calcWidth() {
      const siteMenuArea = document.querySelector("#site-menu-area");
      const more = document.querySelector("#site-menu-area .more");
      const siteMenu = document.querySelector(".site-menu");

      if (!siteMenuArea || !more || !siteMenu) return;

      let navWidth = 1;
      const moreWidth = more.offsetWidth;
      const menuItems = document.querySelectorAll(
        "#site-menu-area > li:not(.more)"
      );

      menuItems.forEach((item) => {
        navWidth += item.offsetWidth;
      });

      const availableSpace = siteMenu.offsetWidth - moreWidth;

      if (navWidth > availableSpace) {
        const lastItem = menuItems[menuItems.length - 1];
        if (lastItem) {
          lastItem.setAttribute("data-width", lastItem.offsetWidth);
          more.querySelector(".more-ul").prepend(lastItem);
          calcWidth();
        }
      } else {
        const firstMoreElement = more.querySelector("li");
        if (
          firstMoreElement &&
          navWidth + parseInt(firstMoreElement.getAttribute("data-width")) <
            availableSpace
        ) {
          siteMenuArea.insertBefore(firstMoreElement, more);
        }
      }

      more.style.display =
        more.querySelectorAll("li").length > 0 ? "inline-block" : "none";
    }

    function handleResize() {
      calcWidth();
    }

    function handleLinkClick() {
      document.querySelector(".site-menu-float").style.display = "none";
    }

    window.addEventListener("resize", handleResize);
    calcWidth();
    document
      .querySelector(".site-menu")
      .classList.remove("site-menu-prevent-overflow-onload");

    const submenuLinks = document.querySelectorAll(
      ".site-menu ul li:has(ul) > a"
    );
    submenuLinks.forEach((link) => link.classList.add("site-menu-has-sub"));

    const floatMenuLinks = document.querySelectorAll(
      ".site-menu-float ul li a"
    );
    floatMenuLinks.forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      floatMenuLinks.forEach((link) => {
        link.removeEventListener("click", handleLinkClick);
      });
    };
  }, []);
  return (
    <div className='header-wrapper'>
      <div className='header-wrapper-background'>
        <div className='header flex-row-reverse'>
          <div className='header-logo header-logo-lc-mc mc-35 lc-25 sc-hide mc-show lc-show'>
            <NavLink to='/'>
              <img
                id='image-lc'
                src='/images/logo.jpg'
                alt='logo'
              />
            </NavLink>
          </div>
          <div className='header-logo sc-120 sc-show mc-hide lc-hide'>
            <NavLink to='/'>
              <img
                id='image-sc'
                src='/images/logo.jpg'
                alt='القصيم بريده عنيزه  - سواتر الرياض'
              />
            </NavLink>
          </div>
          <nav
            className='site-menu sc-120 mc-85 lc-95 sc-hide mc-show lc-show site-menu-prevent-overflow-onload'
            role='navigation'>
            <ul id='site-menu-area'>
              <li>
                <NavLink
                  to='/'
                  className='nav-home-link'>
                  <span className='typcn typcn-large typcn-home nav-home-icon'></span>
                </NavLink>
              </li>
              <li>
                <NavLink to='/alriyad'>القصيم بريده عنيزه</NavLink>
                <ul>
                  <li>
                    <NavLink to='/alriyad/sayaarat'>مظلات سيارات</NavLink>
                  </li>
                  <li>
                    <NavLink to='/alriyad/hadayiq'>مظلات حدائق</NavLink>
                  </li>
                  <li>
                    <NavLink to='/alriyad/masabih'>مظلات مسابح</NavLink>
                  </li>
                  <li>
                    <NavLink to='/alriyad/madakhil'>مظلات مداخل</NavLink>
                  </li>
                  <li>
                    <NavLink to='/alriyad/likasan'>مظلات لكسان</NavLink>
                  </li>
                  <li>
                    <NavLink to='/alriyad/madaris'>مظلات مدارس</NavLink>
                  </li>
                  <li>
                    <NavLink to='/alriyad/aswaq'>مظلات اسواق</NavLink>
                  </li>
                  <li>
                    <NavLink to='/alriyad/masajid'>مظلات مساجد</NavLink>
                  </li>
                  <li>
                    <NavLink to='/alriyad/qumash'>مظلات قماش pvc</NavLink>
                  </li>
                  <li>
                    <NavLink to='/alriyad/shinku'>مظلات شينكو</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to='/sawatiralriyad'>القصيم بريده عنيزه</NavLink>
                <ul>
                  <li>
                    <NavLink to='/sawatiralriyad/hadid'>سواتر حديد</NavLink>
                  </li>
                  <li>
                    <NavLink to='/sawatiralriyad/qumash1'>سواتر قماش</NavLink>
                  </li>
                  <li>
                    <NavLink to='/sawatiralriyad/bilastik'>
                      سواتر بلاستيك
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='/sawatiralriyad/likasan1'>سواتر لكسان</NavLink>
                  </li>
                  <li>
                    <NavLink to='/sawatiralriyad/masabih1'>سواتر مسابح</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to='/manatiqalsueudia'>مظلات مناطق السعودية</NavLink>
              </li>
              <li>
                <NavLink to='/hanajiralriyad'>هناجر الرياض</NavLink>
              </li>
              <li>
                <NavLink to='/jalasatwaburjulat'>مظلات جلسات وبرجولات</NavLink>
              </li>
              <li>
                <NavLink to='/shubukalriyad'>شبوك القصيم بريده عنيزه</NavLink>
              </li>
              <li>
                <NavLink to='/biutshaer'>بيوت شعر</NavLink>
              </li>
              <li>
                <NavLink to='/aitasilbina'>اتصل بنا</NavLink>
              </li>
              <li>
                <NavLink to='/wasawatirfialriyad'>
                  مظلات وسواتر في القصيم بريده عنيزه
                </NavLink>
              </li>
              <li
                className='more hidden'
                data-width='50'>
                <NavLink
                  to='/almazid'
                  rel='more-button'>
                  المزيد
                </NavLink>
                <ul className='more-ul'></ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className='toolbar-option-wrapper'>
        <div className='toolbar-option flex-row sc-120 mc-85 lc-95'>
          <div className='sc-120 mc-40 lc-40'>
            <div>
              <form
                method='get'
                id='searchForm'>
                <input
                  type='hidden'
                  name='app'
                  value='search.run'
                />
                <input
                  type='text'
                  className='search-form'
                  name='q'
                  placeholder='بحث : الكلمات المفتاحية #الهاش_تاج'
                  pattern='.{2,}'
                  required
                />
              </form>
              <div className='autocomplete-suggestions'></div>
            </div>
          </div>
          <div className='sc-120 sc-show mc-hide lc-hide toolbar-option-separator'></div>
          {/* header mobile menu */}
          <div className='sc-10 sc-show mc-hide lc-hide'>
            <div
              className='site-menu-float-button typcn typcn-large typcn-th-menu'
              onClick={() =>
                (document.querySelector(".site-menu-float").style.display =
                  "block")
              }></div>
          </div>
          <div className='site-menu-float sc-hide mc-hide lc-hide'>
            <span
              className='typcn typcn-large typcn-delete site-menu-float-close-icon'
              onClick={() =>
                (document.querySelector(".site-menu-float").style.display =
                  "none")
              }></span>
            <ul>
              <li>
                <NavLink
                  to='/'
                  className='nav-home-link'>
                  الرئيسية
                </NavLink>
              </li>
              <li>
                <NavLink to='/alriyad'>القصيم بريده عنيزه</NavLink>
                <ul>
                  <li>
                    <NavLink to='/alriyad/sayaarat'>مظلات سيارات</NavLink>
                  </li>
                  <li>
                    <NavLink to='/alriyad/hadayiq'>مظلات حدائق</NavLink>
                  </li>
                  <li>
                    <NavLink to='/alriyad/masabih'>مظلات مسابح</NavLink>
                  </li>
                  <li>
                    <NavLink to='/alriyad/madakhil'>مظلات مداخل</NavLink>
                  </li>
                  <li>
                    <NavLink to='/alriyad/likasan'>مظلات لكسان</NavLink>
                  </li>
                  <li>
                    <NavLink to='/alriyad/madaris'>مظلات مدارس</NavLink>
                  </li>
                  <li>
                    <NavLink to='/alriyad/aswaq'>مظلات اسواق</NavLink>
                  </li>
                  <li>
                    <NavLink to='/alriyad/masajid'>مظلات مساجد</NavLink>
                  </li>
                  <li>
                    <NavLink to='/alriyad/qumash'>مظلات قماش pvc</NavLink>
                  </li>
                  <li>
                    <NavLink to='/alriyad/shinku'>مظلات شينكو</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to='/sawatiralriyad'>القصيم بريده عنيزه</NavLink>
                <ul>
                  <li>
                    <NavLink to='/sawatiralriyad/hadid'>سواتر حديد</NavLink>
                  </li>
                  <li>
                    <NavLink to='/sawatiralriyad/qumash1'>سواتر قماش</NavLink>
                  </li>
                  <li>
                    <NavLink to='/sawatiralriyad/bilastik'>
                      سواتر بلاستيك
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='/sawatiralriyad/likasan1'>سواتر لكسان</NavLink>
                  </li>
                  <li>
                    <NavLink to='/sawatiralriyad/masabih1'>سواتر مسابح</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to='/manatiqalsueudia'>مظلات مناطق السعودية</NavLink>
              </li>
              <li>
                <NavLink to='/hanajiralriyad'>هناجر الرياض</NavLink>
              </li>
              <li>
                <NavLink to='/jalasatwaburjulat'>مظلات جلسات وبرجولات</NavLink>
              </li>
              <li>
                <NavLink to='/shubukalriyad'>شبوك القصيم بريده عنيزه</NavLink>
              </li>
              <li>
                <NavLink to='/biutshaer'>بيوت شعر</NavLink>
              </li>
              <li>
                <NavLink to='/aitasilbina'>اتصل بنا</NavLink>
              </li>
              <li>
                <NavLink to='/wasawatirfialriyad'>
                  مظلات وسواتر في القصيم بريده عنيزه
                </NavLink>
              </li>
            </ul>
          </div>
          {/* end header mobile menu */}
          <div className='sc-110 mc-80 lc-80 flex-row-reverse'>
            <span className='flex-row-reverse'>
              <a
                href='https://www.instagram.com/mazlatswater/'
                target='blank'>
                <img
                  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKAQMAAAC3/F3+AAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAApJREFUCNdjwAsAAB4AAdpxxYoAAAAASUVORK5CYII='
                  alt='instagram'
                  className='socialicon socialicon-instagram'
                />
              </a>

              <a
                href='https://www.facebook.com/share/E42VrQoFkhzNf7Fx/?mibextid=qi2Omg'
                target='_blank'>
                <img
                  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKAQMAAAC3/F3+AAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAApJREFUCNdjwAsAAB4AAdpxxYoAAAAASUVORK5CYII='
                  alt='facebook'
                  className='socialicon socialicon-facebook'
                />
              </a>
              <a
                href='https://x.com/badshazada73090?t=Q5G6bA1rCmNqmWLVfPht8g&s=09'
                target='_blank'>
                <img
                  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKAQMAAAC3/F3+AAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAApJREFUCNdjwAsAAB4AAdpxxYoAAAAASUVORK5CYII='
                  alt='twitter'
                  className='socialicon socialicon-twitter'
                />
              </a>
              <a
                href='https://wa.me/966500173090'
                target='_blank'>
                <img
                  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKAQMAAAC3/F3+AAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAApJREFUCNdjwAsAAB4AAdpxxYoAAAAASUVORK5CYII='
                  alt='twitter'
                  className='socialicon socialicon-whatsapp'
                />
              </a>
              <a
                href='https://www.tiktok.com/@sameirbadshakhan35?_t=8ndRCeRzc4z&_r=1'
                target='blank'>
                <img
                  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKAQMAAAC3/F3+AAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAApJREFUCNdjwAsAAB4AAdpxxYoAAAAASUVORK5CYII='
                  alt='youtube'
                  className='socialicon socialicon-youtube'
                />
              </a>
              <a
                href='https://www.linkedin.com/in/muhammad-shafiq-419a4327b/'
                target='blank'>
                <img
                  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKAQMAAAC3/F3+AAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAApJREFUCNdjwAsAAB4AAdpxxYoAAAAASUVORK5CYII='
                  alt='linkedin'
                  className='socialicon socialicon-linkedin'
                />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
