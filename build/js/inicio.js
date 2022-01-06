import{t1}from"./animaciones/telon.js";import{text}from"./animaciones/baffle.js";import{toggle_btn}from"./variables.js";function iniciarApp(){t1.reverse(),toggle_btn.addEventListener("click",(()=>{t1.reversed(!t1.reversed())})),text.start(),text.reveal(4e3)}document.addEventListener("DOMContentLoaded",iniciarApp);
//# sourceMappingURL=inicio.js.map
