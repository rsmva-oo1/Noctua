/* ════════════════════════════════════════════
   DATA & CONFIG
════════════════════════════════════════════ */
const MENU_DATA = [
  {id:1, name:'Oshpaz Maxsus Steak', cat:'Main Course', price:85000, rate:4.9, img:'bg-1', desc:'Yumshoq mol goʻshti, maxsus oshpaz sousi va garnir bilan.', badge:'chef'},
  {id:2, name:'Sezar Salati', cat:'Appetizers', price:45000, rate:4.7, img:'bg-2', desc:'Klassik Sezar salati, qovurilgan tovuq va maxsus grenkalar bilan.', badge:'new'},
  // ... qolgan barcha MENU_DATA elementlari
];

/* ════════════════════════════════════════════
   STATE
════════════════════════════════════════════ */
let cart = JSON.parse(localStorage.getItem('noctua_cart')) || [];
let currentCat = 'all';
let currentSort = 'default';
let isListView = false;

/* ════════════════════════════════════════════
   CORE FUNCTIONS (Menu, Cart, Modal, UI)
════════════════════════════════════════════ */

const Menu = {
  init() {
    this.render();
    this.bindCats();
  },
  render() {
    // Menyu elementlarini generatsiya qilish logikasi
  },
  // ... boshqa funksiyalar (bindCats, filter, sort)
};

const Cart = {
  // Savat bilan ishlash funksiyalari (add, remove, update, open, close)
};

const Modal = {
  // Modal oynasi funksiyalari (open, close, chgQty)
};

/* ════════════════════════════════════════════
   UI EFFECTS (Cursor, Scroll, Search)
════════════════════════════════════════════ */

// Custom Cursor
const cur1 = document.getElementById('cur1');
const cur2 = document.getElementById('cur2');
document.addEventListener('mousemove', e => {
  cur1.style.left = cur2.style.left = e.clientX + 'px';
  cur1.style.top = cur2.style.top = e.clientY + 'px';
});

// Scroll Event
window.addEventListener('scroll', () => {
  const nav = document.getElementById('mainNav');
  if (window.scrollY > 50) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
});

/* ════════════════════════════════════════════
   EVENTS & INIT
════════════════════════════════════════════ */
document.getElementById('navCart').addEventListener('click', Cart.open);
document.getElementById('cartX').addEventListener('click', Cart.close);
// ... barcha event listenerlar va init chaqiriqlari

Menu.init();
AOS.init();

// Page load animation
document.getElementById('veil').style.opacity = '1';
setTimeout(() => {
  document.getElementById('veil').style.opacity = '0';
}, 600);
