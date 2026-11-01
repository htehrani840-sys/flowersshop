/* هدر و فوتر مشترک همه صفحه‌ها - فقط اینجا را ویرایش کنید */
const BASE = "images/";
const HEADER_HTML = `
<header>
  <a href="index.html" class="logo" aria-label="Roseland"><img src="${BASE}logo.png" alt="Roseland"></a>
  <nav class="main">
    <a href="index.html" data-page="index.html">صفحه اصلی</a>
    <div class="dd">
      <button type="button" class="ddbtn" aria-expanded="false" aria-haspopup="true">مناسبت ها <i class="arr"></i></button>
      <ul class="ddmenu">
        <li><a href="monasebatha.html?occ=birthday"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20h16M5 20v-6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6M12 12V8M12 5.5c.8-.8.8-1.7 0-2.5-.8.8-.8 1.7 0 2.5zM5 16c2 1.5 3.5-1.5 7 0s5 1.5 7 0"/></svg>تولد</a></li>
        <li><a href="monasebatha.html?occ=wedding"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="8" cy="7" r="2.5"/><circle cx="16" cy="7" r="2.5"/><path d="M4 21v-6a4 4 0 0 1 8 0v6M12 21v-6a4 4 0 0 1 8 0v6"/></svg>عروسی</a></li>
        <li><a href="monasebatha.html?occ=anniversary"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="15" r="5"/><circle cx="15" cy="15" r="5"/><path d="m10 6 2-3 2 3-2 2z"/></svg>سالگرد ازدواج</a></li>
        <li><a href="monasebatha.html?occ=valentine"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/></svg>ولنتاین</a></li>
        <li><a href="monasebatha.html?occ=mothersday"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 11s-3-1.8-3-4.2a1.8 1.8 0 0 1 3-1.3 1.8 1.8 0 0 1 3 1.3C15 9.2 12 11 12 11zM3 17l4-2 4 1.5h3.5a1.5 1.5 0 0 1 0 3H10M14.5 17.5 21 15v4l-6 2-8-2"/></svg>روز مادر</a></li>
        <li><a href="monasebatha.html?occ=worship"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 21V9l8-5 8 5v12M12 11v6M9 14h6"/></svg>عیادت</a></li>
      </ul>
    </div>
    <div class="dd">
      <button type="button" class="ddbtn" aria-expanded="false" aria-haspopup="true">دسته بندی <i class="arr"></i></button>
      <ul class="ddmenu">
        <li><a href="categories.html?cat=bouquet">دسته گل</a></li>
        <li><a href="categories.html?cat=box">باکس گل</a></li>
        <li><a href="categories.html?cat=wreath">تاج گل</a></li>
        <li><a href="categories.html?cat=basket">سبد گل</a></li>
        <li><a href="categories.html?cat=vase">جام گل</a></li>
        <li><a href="categories.html?cat=plant">گل آپارتمانی</a></li>
      </ul>
    </div>
    <a href="blog.html" data-page="blog.html">بلاگ</a>
    <a href="contact.html" data-page="contact.html">تماس با ما</a>
    <a href="about.html" data-page="about.html">درباره ما</a>
  </nav>
  <div class="icons">
    <button type="button" class="iconbtn burger" id="burger" aria-label="منو" aria-expanded="false" aria-controls="mm">
    <svg viewBox="0 0 24 24" class="b-open"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
    <svg viewBox="0 0 24 24" class="b-close"><path d="M6 6l12 12M18 6 6 18"/></svg>
    </button>
    <button type="button" class="iconbtn" id="loginBtn" aria-label="ورود" aria-haspopup="dialog"><svg viewBox="0 0 24 24"><path d="M10 4h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-8M3 12h11m0 0-4-4m4 4-4 4"/></svg></button>
    <a href="cart.html" class="cartlink" aria-label="سبد خرید"><svg viewBox="0 0 24 24"><path d="M3 9h18l-2 11H5L3 9zM8 9l3-5M16 9l-3-5"/></svg><span id="cartBadge" class="badge" hidden></span></a>
  </div>
</header>`;
const FOOTER_HTML = `
<footer class="site-footer">
  <div class="foot-inner">
    <nav class="foot-col" aria-label="دسترسی سریع">
      <h4>دسترسی سریع</h4>
      <a href="#">تولد</a><a href="#">روز مادر</a><a href="#">سالگرد ازدواج</a>
      <a href="#">ولنتاین</a><a href="#">عروسی</a><a href="#">عیادت</a>
    </nav>
    <nav class="foot-col" aria-label="دسته بندی">
      <h4>دسته بندی</h4>
      <a href="#">باکس گل</a><a href="#">دسته گل</a><a href="#">تاج گل</a>
      <a href="#">سبد گل</a><a href="#">جام گل</a><a href="#">گل آپارتمانی</a>
    </nav>
    <address class="foot-contact">
      <p>آدرس : تهران‌پارس فلکه اول جنب بانک پارسیان پلاک 21</p>
      <p>شماره تماس : 77875467</p>
      <p>ایمیل: roseland@gmail.com</p>
      <p>آیدی تلگرام : @roselanddd</p>
    </address>
    <div class="foot-social">
      <h4>ارتباط با ما :</h4>
      <div class="soc">
        <a href="#" aria-label="تلگرام"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="#2AABEE"/><path d="m5.5 11.6 11.2-4.3c.5-.2 1 .1.8.9l-1.9 9c-.1.6-.5.8-1 .5l-2.9-2.1-1.4 1.4c-.2.2-.3.3-.6.3l.2-3 5.4-4.9c.2-.2 0-.3-.4-.1l-6.7 4.2-2.9-.9c-.6-.2-.6-.6.2-.9z" fill="#fff"/></svg></a>
        <a href="#" aria-label="اینستاگرام"><svg viewBox="0 0 24 24"><defs><linearGradient id="ig" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#feda75"/><stop offset=".4" stop-color="#d62976"/><stop offset="1" stop-color="#4f5bd5"/></linearGradient></defs><circle cx="12" cy="12" r="11" fill="url(#ig)"/><rect x="6.5" y="6.5" width="11" height="11" rx="3.2" fill="none" stroke="#fff" stroke-width="1.5"/><circle cx="12" cy="12" r="2.6" fill="none" stroke="#fff" stroke-width="1.5"/><circle cx="15.4" cy="8.6" r=".9" fill="#fff"/></svg></a>
        <a href="#" aria-label="واتساپ"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="#25D366"/><path d="M12 6.2a5.8 5.8 0 0 0-5 8.7l-.8 2.9 3-.8A5.8 5.8 0 1 0 12 6.2z" fill="none" stroke="#fff" stroke-width="1.5"/><path d="M10 9.6c.2 1.7 1.9 3.3 3.7 3.8l.9-.9-1.2-.8-.6.5c-.8-.3-1.4-.9-1.7-1.7l.5-.6-.8-1.2z" fill="#fff"/></svg></a>
        <a href="#" aria-label="ایمیل"><svg viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2" fill="#E0A458"/><path d="m2.5 6 9.5 7 9.5-7" fill="none" stroke="#fff" stroke-width="1.6"/></svg></a>
      </div>
    </div>
    <div class="foot-sign"><img src="${BASE}signature.png" alt="Roseland"></div>
  </div>
</footer>`;

document.getElementById("site-header").innerHTML = HEADER_HTML;
document.getElementById("site-footer").innerHTML = FOOTER_HTML;

/* لینک صفحه فعلی را در منو پررنگ می‌کند */
const here = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll("nav.main a[data-page]").forEach(a => {
  if (a.dataset.page === here) a.classList.add("active");
});

/* ===== سبد خرید (localStorage) ===== */
const CART_KEY = "roseland_cart";
function getCart(){ try{ return JSON.parse(localStorage.getItem(CART_KEY)) || []; }catch(e){ return []; } }
function saveCart(c){ try{ localStorage.setItem(CART_KEY, JSON.stringify(c)); }catch(e){} updateBadge(); }
function addToCart(item){
  const c = getCart();
  const key = item.id + "|" + (item.color || "");
  const f = c.find(x => x.key === key);
  if(f) f.qty += item.qty; else c.push({...item, key});
  saveCart(c);
}
function updateBadge(){
  const b = document.getElementById("cartBadge"); if(!b) return;
  const n = getCart().reduce((s,x)=>s+x.qty,0);
  b.textContent = n.toLocaleString("fa-IR"); b.hidden = !n;
}
updateBadge();

/* ===== اطلاعات کاربر (localStorage) ===== */
function getUser(){ try{ return JSON.parse(localStorage.getItem("roseland_user")) || {}; }catch(e){ return {}; } }
function saveUser(u){ try{ localStorage.setItem("roseland_user", JSON.stringify(u)); }catch(e){} }

/* ===== پنل ورود (از بالا به پایین باز می‌شود) ===== */
(function(){
  const q = id => document.getElementById(id);
  const fa2en = s => s.replace(/[۰-۹]/g, d=>"۰۱۲۳۴۵۶۷۸۹".indexOf(d)).replace(/[٠-٩]/g, d=>"٠١٢٣٤٥٦٧٨٩".indexOf(d));

  document.body.insertAdjacentHTML("beforeend", `
  <div class="lg-back" id="lgBack"></div>
  <div class="lg" id="lg" role="dialog" aria-modal="true" aria-labelledby="lgTitle" aria-hidden="true">
    <button type="button" class="lg-x" id="lgClose" aria-label="بستن">✕</button>

    <div class="lg-form">
      <div class="lg-logo">ROSELAND</div>
      <h2 id="lgTitle">ورود به <b>Roseland</b></h2>
      <p class="lg-sub">خوشحالیم دوباره شما را می بینیم</p>

      <form id="lgPhone" class="lg-view" novalidate>
        <label for="lgTel">شماره موبایل :</label>
        <div class="lg-field">
          <input id="lgTel" type="tel" dir="ltr" inputmode="numeric" placeholder="ex)09120164667" autocomplete="tel">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h3l2 5-2 1.5a11 11 0 0 0 5.5 5.5L16 13l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 4 5a2 2 0 0 1 2-2z"/></svg>
        </div>
        <em class="lg-err" id="lgErr"></em>
        <button type="submit" class="lg-btn">دریافت کد تایید</button>
      </form>

      <form id="lgCode" class="lg-view" hidden novalidate>
        <p class="lg-info" id="lgInfo"></p>
        <label for="lgCodeIn">کد تایید :</label>
        <div class="lg-field"><input id="lgCodeIn" type="text" dir="ltr" inputmode="numeric" maxlength="5" placeholder="۵ رقم" autocomplete="one-time-code"></div>
        <em class="lg-err" id="lgErr2"></em>
        <button type="submit" class="lg-btn">ورود</button>
        <button type="button" class="lg-link" id="lgBackPhone">ویرایش شماره</button>
      </form>

      <form id="lgAcc" class="lg-view" hidden novalidate>
        <label for="lgUser">نام کاربری یا ایمیل :</label>
        <div class="lg-field"><input id="lgUser" type="text" dir="ltr" autocomplete="username"></div>
        <label for="lgPass">رمز عبور :</label>
        <div class="lg-field"><input id="lgPass" type="password" dir="ltr" autocomplete="current-password"></div>
        <em class="lg-err" id="lgErr3"></em>
        <button type="submit" class="lg-btn">ورود</button>
        <button type="button" class="lg-link" id="lgBackPhone2">ورود با شماره موبایل</button>
      </form>

      <div class="lg-or"><span>یا</span></div>
      <button type="button" class="lg-link" id="lgAccBtn">ورود با حساب کاربری</button>
      <div class="lg-or lg-or-plain"></div>
      <p class="lg-reg">حساب کاربری ندارید ؟ <button type="button" class="lg-link" id="lgReg">ثبت نام</button></p>
    </div>

    <div class="lg-pic" id="lgPic" role="img" aria-label="رز جاودان"></div>
  </div>`);
  q("lgPic").style.backgroundImage = `url("${BASE}عکس صفحه لاگین.png")`;

  const lg = q("lg"), back = q("lgBack");
  let last = null;
  function show(id){ ["lgPhone","lgCode","lgAcc"].forEach(v=>q(v).hidden = v!==id);
    q("lgAccBtn").hidden = id==="lgAcc"; }
  function open(){
    last = document.activeElement;
    lg.classList.add("open"); back.classList.add("open");
    lg.setAttribute("aria-hidden","false"); document.body.classList.add("lg-lock");
    show("lgPhone"); setTimeout(()=>q("lgTel").focus(), 400);
  }
  function close(){
    lg.classList.remove("open"); back.classList.remove("open");
    lg.setAttribute("aria-hidden","true"); document.body.classList.remove("lg-lock");
    if(last) last.focus();
  }
q("loginBtn").onclick = () => { getUser().loggedIn ? (location.href = "account.html") : open(); };  q("lgClose").onclick = close;
  back.onclick = close;
  document.addEventListener("keydown", e=>{ if(e.key==="Escape" && lg.classList.contains("open")) close(); });

  q("lgPhone").addEventListener("submit", e=>{
    e.preventDefault();
    const v = fa2en(q("lgTel").value.trim());
    if(!/^09\d{9}$/.test(v)){ q("lgErr").textContent = "شماره موبایل معتبر نیست (مثال: 09120164667)."; q("lgTel").focus(); return; }
    q("lgErr").textContent = "";
    q("lgInfo").textContent = `کد تایید به ${v} ارسال شد (نمایشی).`;
    show("lgCode"); q("lgCodeIn").focus();
  });
  q("lgCode").addEventListener("submit", e=>{
    e.preventDefault();
    if(!/^\d{5}$/.test(fa2en(q("lgCodeIn").value.trim()))){ q("lgErr2").textContent = "کد ۵ رقمی را وارد کنید."; return; }
    const u = getUser();
    saveUser({...u, phone: u.phone || fa2en(q("lgTel").value.trim()), loggedIn:true});
    q("lgErr2").textContent = "ورود انجام شد (نمایشی).";
    setTimeout(()=>{ u.name ? close() : (location.href = "account.html"); }, 900);
  });
  q("lgAcc").addEventListener("submit", e=>{
    e.preventDefault();
    if(!q("lgUser").value.trim() || !q("lgPass").value){ q("lgErr3").textContent = "نام کاربری و رمز عبور را وارد کنید."; return; }
    q("lgErr3").textContent = "ورود انجام شد (نمایشی)."; setTimeout(close, 1200);
  });
  q("lgBackPhone").onclick = () => { show("lgPhone"); q("lgTel").focus(); };
  q("lgBackPhone2").onclick = () => { show("lgPhone"); q("lgTel").focus(); };
  q("lgAccBtn").onclick = () => { show("lgAcc"); q("lgUser").focus(); };
  q("lgReg").onclick = () => { show("lgPhone"); q("lgErr").textContent = "برای ثبت نام، شماره موبایل خود را وارد کنید."; q("lgTel").focus(); };
})();
/* ===== منوی همبرگری موبایل ===== */
(function(){
  const burger = document.getElementById("burger");
  if(!burger) return;

  const OCC = [["birthday","تولد"],["wedding","عروسی"],["anniversary","سالگرد ازدواج"],["valentine","ولنتاین"],["mothersday","روز مادر"],["worship","عیادت"]];
  const CAT = [["bouquet","دسته گل"],["box","باکس گل"],["wreath","تاج گل"],["basket","سبد گل"],["vase","جام گل"],["plant","گل آپارتمانی"]];
  const ic = d => `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${d}"/></svg>`;
  const I = {
    home:"M3 11l9-8 9 8M5 10v10h5v-6h4v6h5V10",
    gift:"M4 10h16v10H4zM3 7h18v3H3zM12 7v13M12 7c-2-3-5-3-5-1s3 1 5 1zM12 7c2-3 5-3 5-1s-3 1-5 1z",
    flower:"M12 21v-7M12 14c-3 0-5-2-5-5 3 0 5 2 5 5zM12 14c3 0 5-2 5-5-3 0-5 2-5 5zM12 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
    blog:"M6 3h9l4 4v14H6zM15 3v4h4M9 12h7M9 16h7",
    about:"M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM3 20v-1a5 5 0 0 1 10 0v1M16 11a2.5 2.5 0 1 0 0-5M17 14a4.5 4.5 0 0 1 4 4.5V20",
    phone:"M6 3h3l2 5-2 1.5a11 11 0 0 0 5.5 5.5L16 13l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 4 5a2 2 0 0 1 2-2z",
    cart:"M3 9h18l-2 11H5L3 9zM8 9l3-5M16 9l-3-5",
    user:"M10 4h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-8M3 12h11m0 0-4-4m4 4-4 4"
  };
  const sub = (title, icon, list, page, key) => `
    <li class="mm-sub">
      <button type="button" class="mm-btn" aria-expanded="false">${ic(icon)}<span>${title}</span><i class="mm-arr"></i></button>
      <ul class="mm-list">${list.map(([k,n])=>`<li><a href="${page}?${key}=${k}">${n}</a></li>`).join("")}</ul>
    </li>`;

  document.body.insertAdjacentHTML("beforeend", `
  <div class="mm-back" id="mmBack"></div>
  <nav class="mm" id="mm" aria-label="منوی اصلی" aria-hidden="true">
    <ul>
      <li><a href="index.html">${ic(I.home)}<span>صفحه اصلی</span></a></li>
      ${sub("مناسبت ها", I.gift, OCC, "monasebatha.html", "occ")}
      ${sub("دسته بندی ها", I.flower, CAT, "categories.html", "cat")}
      <li><a href="blog.html">${ic(I.blog)}<span>بلاگ</span></a></li>
      <li><a href="about.html">${ic(I.about)}<span>درباره ما</span></a></li>
      <li><a href="contact.html">${ic(I.phone)}<span>تماس با ما</span></a></li>
      <li class="mm-dot"><a href="cart.html">${ic(I.cart)}<span>سبد خرید</span></a></li>
      <li><button type="button" class="mm-btn" id="mmAcc">${ic(I.user)}<span>حساب کاربری</span></button></li>
    </ul>
  </nav>`);

  const mm = document.getElementById("mm"), back = document.getElementById("mmBack");
  const hdr = document.querySelector("header");

  function setOpen(o){
    if(o) document.documentElement.style.setProperty("--hh", hdr.offsetHeight + "px");
    mm.classList.toggle("open", o);
    back.classList.toggle("open", o);
    burger.classList.toggle("on", o);
    burger.setAttribute("aria-expanded", o);
    mm.setAttribute("aria-hidden", !o);
    document.body.classList.toggle("mm-lock", o);
  }
  burger.addEventListener("click", () => setOpen(!mm.classList.contains("open")));
  back.addEventListener("click", () => setOpen(false));
  document.addEventListener("keydown", e => { if(e.key === "Escape") setOpen(false); });
  window.addEventListener("resize", () => { if(innerWidth > 860) setOpen(false); });

  mm.addEventListener("click", e => {
    const b = e.target.closest(".mm-btn");
    if(b && b.id === "mmAcc"){ setOpen(false); const l = document.getElementById("loginBtn"); if(l) l.click(); return; }
    if(b){
      const li = b.parentElement, open = !li.classList.contains("open");
      mm.querySelectorAll(".mm-sub.open").forEach(x => { x.classList.remove("open"); x.querySelector(".mm-btn").setAttribute("aria-expanded","false"); });
      li.classList.toggle("open", open);
      b.setAttribute("aria-expanded", open);
      return;
    }
    if(e.target.closest("a")) setOpen(false);
  });
})();

/* منوهای کشویی هدر */
function closeDD(){ document.querySelectorAll(".dd.open").forEach(d=>{ d.classList.remove("open"); d.querySelector(".ddbtn").setAttribute("aria-expanded","false"); }); }
document.querySelectorAll(".dd").forEach(dd=>{
  const b = dd.querySelector(".ddbtn");
  b.addEventListener("click", e=>{
    e.stopPropagation();
    const willOpen = !dd.classList.contains("open");
    closeDD();
    dd.classList.toggle("open", willOpen);
    b.setAttribute("aria-expanded", willOpen);
  });
});
document.addEventListener("click", closeDD);
document.addEventListener("keydown", e=>{ if(e.key === "Escape") closeDD(); });