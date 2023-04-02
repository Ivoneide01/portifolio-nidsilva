import DarkMode from "./modules/dark-mode.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initMenuLi from "./modules/menu-li.js";
import initTyping from "./modules/typing.js";
import Portfolio from "./modules/portfolio.js";
import initAnimationScroll from "./modules/animation-scroll.js";
import initScrollSuave from "./modules/scroll-suve.js";
import initFuncionamento from "./modules/funcionamento.js";

const darkmode = new DarkMode('.sec', '.toggle', '.toggle img')
darkmode.init();

const portfolio = new Portfolio('.zoom-text', '.img-container', '.img_gallery','.image-view','next-btn', 'prev-btn', 'close', '.image-box')
portfolio.init();

initMenuMobile()
initMenuLi()
initTyping()
initAnimationScroll()
initScrollSuave()
initFuncionamento()

