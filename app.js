/**
 * VAT Invoice Studio
 * Hierarchy:
 * - Main: Wholesale | Retail
 * - Sub: Wholesale Accessories | Wholesale Devices | Retail Accessories | Retail Devices
 */

// Master Store Directory from Shop Details.xlsx
const STORES = [
  {
    id: 1,
    name: "I Digital Fun – Portlaoise (Head Office)",
    city: "Portlaoise, Co. Laois",
    address: "Unit 3 Kealew Business Park, Mountrath Rd, Portlaoise, Co. Laois, R32 W0DT",
    phone: "+353 (0)57 868 2426",
    email: "INFO@IDFLMOBILE.COM",
    vat: "IE33845510H",
    brand: "IDFL"
  },
  {
    id: 2,
    name: "I Digital Fun – Tullamore",
    city: "Tullamore, Co. Offaly",
    address: "3 Patrick Street, Tullamore, Co. Offaly, R35 R657",
    phone: "+353 (0)87 118 9894",
    email: "INFO@IDFLMOBILE.COM",
    vat: "IE33845510H",
    brand: "IDFL"
  },
  {
    id: 3,
    name: "I Digital Fun – Mullingar",
    city: "Mullingar, Co. Westmeath",
    address: "Unit 9, Harbour Place Shopping Centre, Harbour St, Mullingar, Co. Westmeath, N91 RY26",
    phone: "+353 (0)87 168 6903",
    email: "INFO@IDFLMOBILE.COM",
    vat: "IE33845510H",
    brand: "IDFL"
  },
  {
    id: 4,
    name: "I Digital Fun – Bridgewater (Arklow)",
    city: "Arklow, Co. Wicklow",
    address: "4A The Bridgewater Shopping Centre, North Quay, Arklow, Co. Wicklow, Y14 TD79",
    phone: "+353 (0)87 477 8512",
    email: "INFO@IDFLMOBILE.COM",
    vat: "IE33845510H",
    brand: "IDFL"
  },
  {
    id: 5,
    name: "I Digital Fun – Thurles",
    city: "Thurles, Co. Tipperary",
    address: "Unit 10A, Thurles Shopping Centre, Slievenamon Road, Thurles, Co. Tipperary, E41 E674",
    phone: "+353 (0)87 314 1419",
    email: "INFO@IDFLMOBILE.COM",
    vat: "IE33845510H",
    brand: "IDFL"
  },
  {
    id: 6,
    name: "I Digital Fun – Limerick",
    city: "Limerick, Co. Limerick",
    address: "Parkway Shopping Centre, Dublin Road, Limerick, Co. Limerick",
    phone: "+353 (0)57 868 2426",
    email: "INFO@IDFLMOBILE.COM",
    vat: "IE33845510H",
    brand: "IDFL"
  },
  {
    id: 7,
    name: "I Digital Fun – Newbridge",
    city: "Newbridge, Co. Kildare",
    address: "Whitewater Shopping Centre, Newbridge, Co. Kildare",
    phone: "+353 (0)57 868 2426",
    email: "INFO@IDFLMOBILE.COM",
    vat: "IE33845510H",
    brand: "IDFL"
  },
  {
    id: 8,
    name: "I Digital Fun – Maynooth",
    city: "Maynooth, Co. Kildare",
    address: "Unit 15, Manor Mill Shopping Centre, Maynooth, Co. Kildare",
    phone: "+353 (0)87 715 5040",
    email: "INFO@IDFLMOBILE.COM",
    vat: "IE33845510H",
    brand: "IDFL"
  },
  {
    id: 9,
    name: "I Digital Fun – Letterkenny",
    city: "Letterkenny, Co. Donegal",
    address: "Letterkenny Shopping Centre, Letterkenny, Co. Donegal",
    phone: "+353 (0)57 868 2426",
    email: "INFO@IDFLMOBILE.COM",
    vat: "IE33845510H",
    brand: "IDFL"
  },
  {
    id: 10,
    name: "I Digital Fun – Killarney (Repair Shop)",
    city: "Killarney, Co. Kerry",
    address: "Killarney Outlet Centre, Killarney, Co. Kerry",
    phone: "+353 (0)57 868 2426",
    email: "INFO@IDFLMOBILE.COM",
    vat: "IE33845510H",
    brand: "IDFL"
  },
  {
    id: 11,
    name: "I Digital Fun – Tralee",
    city: "Tralee, Co. Kerry",
    address: "Manorwest Shopping Centre, Tralee, Co. Kerry",
    phone: "+353 (0)87 118 9894",
    email: "INFO@IDFLMOBILE.COM",
    vat: "IE33845510H",
    brand: "IDFL"
  },
  {
    id: 12,
    name: "Get Connected – Tralee",
    city: "Tralee, Co. Kerry",
    address: "Unit 20, Manor West Shopping Centre, Cloonalour, Tralee, Co. Kerry",
    phone: "+353 (0)57 868 2426",
    email: "getconnectedire@gmail.com",
    vat: "IE9692928",
    brand: "GC"
  },
  {
    id: 13,
    name: "Get Connected – Kilkenny",
    city: "Kilkenny, Co. Kilkenny",
    address: "MacDonagh Junction Shopping Centre, Kilkenny, Co. Kilkenny",
    phone: "+353 (0)87 477 8010",
    email: "getconnectedire@gmail.com",
    vat: "IE9692928",
    brand: "GC"
  }
];

// Wholesale invoices use a separate customer directory. Retail branches must
// never appear as wholesale customers by accident.
const WHOLESALE_CUSTOMERS = [
  { id: 'variety-world', name: 'Variety World', address: 'Lyster Square, Portlaoise, R32P796', phone: '+353 862037780', email: 'annietariq2011@gmail.com', vatNo: '4063008G' },
  { id: 'phone-kiosk-cork', name: 'Phone Kiosk Cork', address: 'Phone Kiosk, Paul Street Shopping Centre, Cork City, T12 FP83', phone: '', email: '', vatNo: '' },
  { id: 'fone-dealz-kerry', name: 'Fone Dealz Kerry', address: 'Fone Dealz, 37 Upper Castle Street, Tralee, Co. Kerry, V92 PK83', phone: '', email: '', vatNo: '' },
  { id: 'quality-tech', name: 'Quality Tech', address: 'Muhammad Shaheryar Niazi, Quality Tech, 100 Main Street, Midleton, Co. Cork, P25 R578', phone: '+353 89 966 02908', email: '', vatNo: '' },
  { id: 'fonefix-pc-killarney', name: 'FoneFix & PC Ltd — Mansoor', address: 'Mansoor, Fonefix & PC, 28 High Street, Killarney, Co. Kerry, V93 KD81', phone: '+353 87 147 0087', email: '', vatNo: '' },
  { id: 'zaid-amjad', name: 'Zaid Amjad', address: '32A Strand Street, Kanturk, Co. Cork, P51 NXA7', phone: '+353 83 869 9437', email: '', vatNo: '' },
  { id: 'itech-letterkenny', name: 'iTech Letterkenny', address: 'iTech Store Phones & Laptops, 12B Upper Port Road, Letterkenny, Co. Donegal, F92 Y165', phone: '+353 85 848 1949', email: '', vatNo: '' },
  { id: 'lukman-mallow', name: 'Lukman Mallow', address: "Lukman, IGenius, 18 William O'Brien Street, Mallow, County Cork, P51 H7KV", phone: '+447453000940', email: '', vatNo: '' },
  { id: 'lee-bray', name: 'Lee Bray', address: 'Lee, Unit 1, 1 Albert Walk, Bray, Co. Wicklow, A98 TY00', phone: '', email: '', vatNo: '' },
  { id: 'revive-belmulet', name: 'Revive', address: 'Mohammed Khaliq, Carter Square, Belmullet, Co. Mayo, F26 NH84', phone: '+353 89 976 8130', email: '', vatNo: '' },
  { id: 'phonecare-banagher', name: 'Phonecare Banagher', address: 'Main Street, Banagher, County Offaly, R42 HC85', phone: '+353 85 102 6386', email: '', vatNo: '' },
  { id: 'carrick-gadgets', name: 'Carrick Gadgets', address: 'MobiWorld, River Street, Clara, Co. Offaly, R35 HX30. Confirm before posting.', phone: '', email: '', vatNo: '' },
  { id: 'fonefix-gadgets-duleek', name: 'Fonefix & Gadgets Duleek', address: 'Fonefix & Gadgets, Main Street, Duleek, Co. Meath, A92 YH79', phone: '+353 83 834 7092', email: '', vatNo: '' },
  { id: 'mobile-king-mullingar', name: 'Mobile King', address: '18 Harbour Place Shopping Centre, Mullingar', phone: '089 988 8011', email: '', vatNo: '' },
  { id: 'mobile-kingdom', name: 'Mobile Kingdom', address: '10 Oliver Plunkett Street, Mullingar, N91 XT50', phone: '089 988 9047', email: '', vatNo: '' },
  { id: 'hamil-little-ireland', name: 'Hamil Little Ireland', address: "10 William Street, Prior's-Land, Limerick, V94 FD73", phone: '', email: '', vatNo: '' },
  { id: 'phonezay-dundalk', name: 'Phonezay Dundalk', address: '23 Clanbrassil Street, Dundalk, Co. Louth, A91 Y864', phone: '', email: '', vatNo: '' },
  { id: 'asim-ipoint-dundalk', name: 'Asim iPoint Dundalk', address: "iPoint Dundalk, Unit 10 Williamson's Mall, Francis Street, Dundalk, County Louth, A91 NA43", phone: '', email: '', vatNo: '' },
  { id: 'farhad-waterford', name: 'Farhad Waterford', address: '22 Michael Street, Waterford, X91 NV96', phone: '', email: '', vatNo: '' },
  { id: 'ishine-dublin', name: 'iShine — Asif Khan', address: 'iShine, Unit 33, D1 Slaney Road, Glasnevin, Dublin 11, D11 VA40', phone: '353838060333', email: '', vatNo: '' }
];

const WHOLESALE_SELLERS = {
  GC: {
    name: 'Get Connected',
    logo: 'assets/get-connected-banner-text.png',
    brandText: '',
    address: 'Unit 3 Kealew Business Park, Mountrath Road, Portlaoise, Co. Laois, R32 W0DT',
    phone: '+353 (0)85 740 3331',
    email: 'getconnectedire@gmail.com',
    vat: 'IE9692928'
  },
  IDFL: {
    name: 'I Digital Fun',
    logo: 'assets/idfl-logo.png',
    brandText: 'I DIGITAL FUN',
    address: 'Unit 3 Kealew Business Park, Mountrath Road, Portlaoise, Co. Laois, R32 W0DT',
    phone: '057 868 2426',
    email: 'INFO@IDFLMOBILE.COM',
    vat: 'IE33845510H'
  }
};

const WHOLESALE_CUSTOMERS_STORAGE_KEY = 'vat-invoice-wholesale-customers-v1';

// 4 Preset Catalogs
const CATALOGS = {
  wsAccessories: [
    { desc: "Gerlax GA-25YPS Charger (Bulk 50pk)", qty: 50, amount: 4.00 },
    { desc: "GSK9 Mini Smart Watch", qty: 6, amount: 24.925 },
    { desc: "Hoco CA202 Infrared Induction Wireless Charger", qty: 6, amount: 9.95 },
    { desc: "Hoco X91 Type-C to Type-C Cable 3m", qty: 10, amount: 2.49 },
    { desc: "Hoco X91 Type-C to Lightning Cable 3m", qty: 10, amount: 2.49 },
    { desc: "Smart Case 10th 2022 (Assorted Colours)", qty: 5, amount: 5.95 },
    { desc: "Borofone BC48 Wireless Transmitter", qty: 10, amount: 5.95 },
    { desc: "Apple Pamper Watch Case 40mm", qty: 20, amount: 0.90 },
    { desc: "Apple Pamper Watch Case 41mm", qty: 20, amount: 0.90 },
    { desc: "Hoco X93 Fast Data Cable Type-C to Type-C", qty: 10, amount: 2.45 },
    { desc: "Hoco X93 Fast Data Cable Type-C to Lightning", qty: 10, amount: 2.45 },
    { desc: "Hoco CA52 Air Outlet Magnetic In-Car Holder", qty: 7, amount: 2.95 }
  ],
  wsDevices: [
    { model: "Apple iPhone 11 64GB (10 Unit Bulk Lot)", specs: "Grade A Unlocked", qty: 10, amount: 195.00 },
    { model: "Apple iPhone 12 128GB (5 Unit Bulk Lot)", specs: "Grade A Unlocked", qty: 5, amount: 285.00 },
    { model: "Apple iPhone 13 128GB (5 Unit Bulk Lot)", specs: "Grade A Unlocked", qty: 5, amount: 375.00 },
    { model: "Samsung Galaxy A14 64GB (10 Unit Bulk Lot)", specs: "Brand New Sealed", qty: 10, amount: 115.00 },
    { model: "Samsung Galaxy A54 5G (5 Unit Bulk Lot)", specs: "Brand New Sealed", qty: 5, amount: 240.00 },
    { model: "Apple iPad 10th Gen 64GB WiFi (5 Unit Bulk Lot)", specs: "Grade A Boxed", qty: 5, amount: 310.00 }
  ],
  rtAccessories: [
    { sku: "00SSTG002", desc: "TG Samsung A10/A20/A30/A50/A51", grossPrice: 15.00 },
    { sku: "00IPTG001", desc: "Tempered Glass Screen Protector - iPhone Series", grossPrice: 15.00 },
    { sku: "00CHG020", desc: "20W PD USB-C Fast Charging Adapter", grossPrice: 15.00 },
    { sku: "00CBL001", desc: "Type-C to Lightning Fast Cable 1m", grossPrice: 10.00 },
    { sku: "00CBL002", desc: "Type-C to Type-C Fast Cable 1m", grossPrice: 10.00 },
    { sku: "00CAS001", desc: "Shockproof Clear Hybrid Armor Case", grossPrice: 15.00 },
    { sku: "00HLD001", desc: "Magnetic MagSafe Fast Wireless Car Mount", grossPrice: 25.00 },
    { sku: "00AUD001", desc: "TWS True Wireless Bluetooth Earbuds Pro", grossPrice: 30.00 }
  ],
  rtDevices: [
    { desc: "356789104523901 - Apple iPhone 11 64GB Black", grade: "Grade A", grossPrice: 249.00 },
    { desc: "358901237645129 - Apple iPhone 12 128GB Blue", grade: "Grade A", grossPrice: 349.00 },
    { desc: "359012348756230 - Apple iPhone 13 128GB Midnight", grade: "Grade A", grossPrice: 449.00 },
    { desc: "354567890123456 - Samsung Galaxy A14 64GB Black", grade: "Brand New", grossPrice: 149.00 },
    { desc: "357890123456789 - Samsung Galaxy A54 5G 128GB Lime", grade: "Brand New", grossPrice: 299.00 },
    { desc: "DMPX89012345 - Apple iPad 10th Gen 64GB WiFi Silver", grade: "Grade A", grossPrice: 389.00 }
  ]
};

// Application State
const state = {
  activeMain: 'wholesale', // 'wholesale' or 'retail'
  activeSub: 'ws_acc',     // 'ws_acc', 'ws_dev', 'rt_acc', 'rt_dev'
  scannedItemsBuffer: [],
  profiles: {
    ws_acc: {
      pricingMode: 'net',
      sellerBrand: 'GC',
      selectedCustomerId: 'variety-world',
      invoiceNo: '223802',
      date: '2024-02-14',
      paymentMethod: 'Card',
      billTo: {
        name: 'Variety World',
        address: 'Lyster Square, Portlaoise, R32P796',
        phone: '+353 862037780',
        email: 'annietariq2011@gmail.com',
        vatNo: '4063008G'
      },
      items: [],
      taxRate: 23.00,
      otherCosts: 0.00
    },
    ws_dev: {
      pricingMode: 'net',
      sellerBrand: 'GC',
      selectedCustomerId: '',
      invoiceNo: 'GC-DEV-8821',
      date: '2024-02-14',
      paymentMethod: 'Bank Transfer',
      billTo: {
        name: 'Smart Phone Hub Ltd',
        address: 'Main Street, Portlaoise, Co. Laois',
        phone: '+353 87 998 1122',
        email: 'accounts@smartphonehub.ie',
        vatNo: 'IE3920194B'
      },
      items: [],
      taxRate: 23.00,
      otherCosts: 0.00
    },
    rt_acc: {
      pricingMode: 'gross',
      reference: 'SALE/POS250582',
      date: '2026-08-24',
      selectedStoreId: 5,
      activeBrand: 'IDFL',
      billFrom: {
        name: 'I Digital Fun Thurles',
        address: 'Thurles Shopping Centre, Unit 10 Slievenamon Rd, Thurles, Co. Tipperary, E41 E674',
        phone: '+353 (0)87 314 1419',
        email: 'INFO@IDFLMOBILE.COM'
      },
      billTo: {
        name: 'Nigel Quinn',
        email: 'nigel.quinn@hotmail.com',
        phone: '',
        address: ''
      },
      items: [],
      taxRate: 23.00,
      otherCosts: 0.00
    },
    rt_dev: {
      pricingMode: 'gross',
      reference: 'SALE/POS994120',
      date: '2026-08-24',
      selectedStoreId: 5,
      activeBrand: 'IDFL',
      billFrom: {
        name: 'I Digital Fun Thurles',
        address: 'Thurles Shopping Centre, Unit 10 Slievenamon Rd, Thurles, Co. Tipperary, E41 E674',
        phone: '+353 (0)87 314 1419',
        email: 'INFO@IDFLMOBILE.COM'
      },
      billTo: {
        name: "Sean O'Connor",
        email: 'sean.oconnor@gmail.com',
        phone: '085 123 4567',
        address: '14 Elm Court, Portlaoise, Co. Laois'
      },
      items: [],
      taxRate: 23.00,
      otherCosts: 0.00
    }
  },
  savedInvoices: []
};

const INVOICE_HISTORY_STORAGE_KEY = 'vat_invoices_history_v3';
let invoiceCloudReady = false;
let invoiceCloudUnsubscribe = null;

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  loadSavedInvoicesFromStorage();
  populateStoreDropdowns();
  loadAllSampleData();
  setupEventListeners();
  setupScannerHandlers();
  switchHierarchy('wholesale', 'ws_acc');
  bootInvoiceCloud();
});

// Format Date as DD/MM/YYYY
function formatDateDisplay(isoDate) {
  if (!isoDate) return '';
  const parts = isoDate.split('-');
  if (parts.length === 3) return `${parts[2]}/${parts[1]}/${parts[0]}`;
  return isoDate;
}

// Format Euro Currency
function formatEuro(num) {
  const val = Number(num) || 0;
  return '€ ' + val.toFixed(2);
}

function parseNum(val) {
  if (typeof val === 'number') return val;
  if (!val) return 0;
  const clean = String(val).replace(/[^0-9.-]/g, '');
  return parseFloat(clean) || 0;
}

function round2(num) {
  return Math.round((Number(num) + Number.EPSILON) * 100) / 100;
}

function getTaxRate(profileOrKey) {
  const profile = typeof profileOrKey === 'string' ? state.profiles[profileOrKey] : profileOrKey;
  const rate = parseNum(profile?.taxRate);
  return Number.isFinite(rate) && rate >= 0 ? rate : 23;
}

function getWholesaleSeller(profileKey) {
  return WHOLESALE_SELLERS[state.profiles[profileKey]?.sellerBrand] || WHOLESALE_SELLERS.GC;
}

function formatAddressForInvoice(address) {
  return String(address || '')
    .replace(/\r\n?/g, '\n')
    .split('\n')
    .flatMap(line => line.split(/\s*,\s*/))
    .map(line => line.trim())
    .filter(Boolean)
    .join('\n');
}

function syncItemPricePair(profile, item) {
  const multiplier = 1 + (getTaxRate(profile) / 100);
  if (profile.pricingMode === 'gross') {
    item.grossPrice = parseNum(item.grossPrice);
    item.amount = round2(item.grossPrice / multiplier);
  } else {
    item.amount = parseNum(item.amount);
    item.grossPrice = round2(item.amount * multiplier);
  }
}

function renderWholesaleSellerHeader(profileKey) {
  const seller = getWholesaleSeller(profileKey);
  const domPrefix = profileKey === 'ws_acc' ? 'ws-acc' : 'ws-dev';
  const logo = document.getElementById(`${domPrefix}-logo-img`);
  const brand = document.getElementById(`${domPrefix}-brand-text`);
  const contact = document.getElementById(`${domPrefix}-header-contact`);

  if (logo) {
    logo.src = seller.logo;
    logo.alt = seller.name;
    logo.className = `${seller.brandText ? 'h-10' : 'h-9'} object-contain drop-shadow-md`;
  }
  if (brand) brand.textContent = seller.brandText;
  if (contact) {
    contact.innerHTML = `
      <div>${escapeHtml(seller.address)}</div>
      <div>
        <span>CONTACT: ${escapeHtml(seller.phone)}</span>
        <span class="sep">•</span>
        <span>EMAIL: ${escapeHtml(seller.email)}</span>
        <span class="sep">•</span>
        <span>VAT: ${escapeHtml(seller.vat)}</span>
      </div>`;
  }
  const payee = document.getElementById(`${domPrefix}-payee`);
  if (payee) payee.textContent = `Make all payments payable to ${seller.name}`;
  const terms = document.getElementById(`${domPrefix}-seller-terms`);
  if (terms) terms.textContent = `${seller.name} wholesale terms: Tested and certified handset lots`;
}

function getCustomWholesaleCustomers() {
  try {
    const saved = JSON.parse(localStorage.getItem(WHOLESALE_CUSTOMERS_STORAGE_KEY) || '[]');
    return Array.isArray(saved) ? saved.filter(customer => customer && customer.id && customer.name) : [];
  } catch (_) {
    return [];
  }
}

function getWholesaleCustomers() {
  return [...WHOLESALE_CUSTOMERS, ...getCustomWholesaleCustomers()];
}

function populateWholesaleCustomerSelect(select, profileKey) {
  if (!select) return;
  const profile = state.profiles[profileKey];
  const selectedId = profile.selectedCustomerId || '';
  select.innerHTML = '<option value="">-- Select customer preset --</option>';
  getWholesaleCustomers().forEach(customer => {
    const option = document.createElement('option');
    option.value = customer.id;
    option.textContent = customer.name;
    option.selected = customer.id === selectedId;
    select.appendChild(option);
  });
}

function populateWholesaleSellerSelect(select, profileKey) {
  if (!select) return;
  const sellerBrand = state.profiles[profileKey].sellerBrand || 'GC';
  select.innerHTML = '';
  Object.entries(WHOLESALE_SELLERS).forEach(([key, seller]) => {
    const option = document.createElement('option');
    option.value = key;
    option.textContent = seller.name;
    option.selected = key === sellerBrand;
    select.appendChild(option);
  });
}

// Populate Store Selectors
function populateStoreDropdowns() {
  const rAccStore = document.getElementById('rt-acc-store-select');
  const rDevStore = document.getElementById('rt-dev-store-select');
  const wsAccStore = document.getElementById('ws-acc-store-select');
  const wsDevStore = document.getElementById('ws-dev-store-select');

  [rAccStore, rDevStore].forEach(sel => {
    if (sel) {
      sel.innerHTML = '<option value="">-- Choose Branch (13 Stores) --</option>';
      STORES.forEach(s => {
        const opt = document.createElement('option');
        opt.value = s.id;
        opt.textContent = `${s.name} (${s.city})`;
        if (s.id === 5) opt.selected = true;
        sel.appendChild(opt);
      });
    }
  });

  populateWholesaleCustomerSelect(wsAccStore, 'ws_acc');
  populateWholesaleCustomerSelect(wsDevStore, 'ws_dev');
  populateWholesaleSellerSelect(document.getElementById('ws-acc-seller-select'), 'ws_acc');
  populateWholesaleSellerSelect(document.getElementById('ws-dev-seller-select'), 'ws_dev');
}

// Load Samples
function loadAllSampleData() {
  const wsAccessoriesMultiplier = 1 + (getTaxRate('ws_acc') / 100);
  const wsDevicesMultiplier = 1 + (getTaxRate('ws_dev') / 100);
  state.profiles.ws_acc.items = CATALOGS.wsAccessories.map(it => ({
    desc: it.desc,
    qty: it.qty,
    amount: it.amount,
    grossPrice: round2(it.amount * wsAccessoriesMultiplier)
  }));
  state.profiles.ws_dev.items = CATALOGS.wsDevices.map(it => ({
    model: it.model,
    specs: it.specs,
    qty: it.qty,
    amount: it.amount,
    grossPrice: round2(it.amount * wsDevicesMultiplier)
  }));
  state.profiles.rt_acc.items = [
    { sku: '00SSTG002', desc: '00SSTG002 - TG Samsung A10/A20/A30/A50/A51', qty: 1, grossPrice: 15.00, amount: 12.20 }
  ];
  state.profiles.rt_dev.items = [
    { desc: '359012348756230 - Apple iPhone 13 128GB Midnight', grade: 'Brand New', qty: 1, grossPrice: 449.00, amount: 365.04 }
  ];
}

// Hierarchy Switcher: Main (Wholesale / Retail) -> Sub (Accessories / Devices)
function switchHierarchy(mainCat, subCat = null) {
  state.activeMain = mainCat;
  if (!subCat) {
    subCat = mainCat === 'wholesale' ? 'ws_acc' : 'rt_acc';
  }
  state.activeSub = subCat;

  // Main buttons styling
  const btnWs = document.getElementById('main-btn-wholesale');
  const btnRt = document.getElementById('main-btn-retail');
  if (btnWs) btnWs.className = `main-cat-btn px-3.5 py-1.5 text-xs flex items-center gap-1.5 ${mainCat === 'wholesale' ? 'active-main' : ''}`;
  if (btnRt) btnRt.className = `main-cat-btn px-3.5 py-1.5 text-xs flex items-center gap-1.5 ${mainCat === 'retail' ? 'active-main' : ''}`;

  // Sub nav groups
  const snWs = document.getElementById('sub-nav-wholesale');
  const snRt = document.getElementById('sub-nav-retail');
  if (snWs) {
    if (mainCat === 'wholesale') {
      snWs.classList.remove('hidden');
      snWs.classList.add('inline-flex');
    } else {
      snWs.classList.add('hidden');
      snWs.classList.remove('inline-flex');
    }
  }
  if (snRt) {
    if (mainCat === 'retail') {
      snRt.classList.remove('hidden');
      snRt.classList.add('inline-flex');
    } else {
      snRt.classList.add('hidden');
      snRt.classList.remove('inline-flex');
    }
  }

  // Sub buttons & Canvas & Controls
  ['ws_acc', 'ws_dev', 'rt_acc', 'rt_dev'].forEach(k => {
    const btn = document.getElementById(`sub-btn-${k}`);
    const canvas = document.getElementById(`canvas-${k}`);
    const controls = document.getElementById(`controls-${k}`);
    
    if (k === subCat) {
      if (btn) btn.className = `sub-tab-btn active-sub active-sub-${k} px-3 py-1 text-xs flex items-center gap-1`;
      canvas?.classList.remove('hidden');
      if (controls) {
        controls.classList.remove('hidden');
        controls.classList.add('flex');
      }
    } else {
      if (btn) btn.className = 'sub-tab-btn px-3 py-1 text-xs flex items-center gap-1';
      canvas?.classList.add('hidden');
      if (controls) {
        controls.classList.add('hidden');
        controls.classList.remove('flex');
      }
    }
  });

  renderActiveProfile();
}

// Exact Irish VAT Math
function calculateProfileTotals(profileKey) {
  const prof = state.profiles[profileKey];
  const taxRate = getTaxRate(prof);
  const taxMultiplier = 1 + (taxRate / 100);
  const otherCosts = parseNum(prof.otherCosts) || 0;
  const isGross = prof.pricingMode === 'gross';

  let subtotal = 0;
  let totalGross = 0;

  if (isGross) {
    prof.items.forEach(it => {
      const qty = parseNum(it.qty) || 1;
      let gross = parseNum(it.grossPrice);
      if (gross === 0 && it.amount) {
        gross = round2(parseNum(it.amount) * taxMultiplier);
        it.grossPrice = gross;
      }
      const lineGross = round2(qty * gross);
      const lineNet = round2(lineGross / taxMultiplier);
      it.lineTotal = lineNet;
      subtotal += lineNet;
      totalGross += lineGross;
    });

    subtotal = round2(subtotal);
    totalGross = round2(totalGross);
    const vatAmount = round2(totalGross - subtotal);
    const totalDue = round2(subtotal + vatAmount + otherCosts);
    return { subtotal, taxRate, vatAmount, otherCosts, totalDue, totalGross };
  } else {
    prof.items.forEach(it => {
      const qty = parseNum(it.qty) || 1;
      let net = parseNum(it.amount);
      if (net === 0 && it.grossPrice) {
        net = round2(parseNum(it.grossPrice) / taxMultiplier);
        it.amount = net;
      }
      const lineTotal = round2(qty * net);
      it.lineTotal = lineTotal;
      subtotal += lineTotal;
    });

    subtotal = round2(subtotal);
    const vatAmount = round2(subtotal * (taxRate / 100));
    const totalDue = round2(subtotal + vatAmount + otherCosts);
    totalGross = totalDue - otherCosts;
    return { subtotal, taxRate, vatAmount, otherCosts, totalDue, totalGross };
  }
}

function applyTaxRate(profileKey, value) {
  const profile = state.profiles[profileKey];
  if (!profile) return;

  profile.taxRate = Math.max(0, parseNum(value));
  profile.items.forEach(item => syncItemPricePair(profile, item));

  renderActiveProfile();
  showToast(`VAT rate set to ${getTaxRate(profile).toFixed(2)}%`);
}

function previewTaxRate(profileKey, value) {
  const profile = state.profiles[profileKey];
  if (!profile) return;
  profile.taxRate = Math.max(0, parseNum(value));
  updateSummaryDisplays(profileKey, calculateProfileTotals(profileKey));
}

function wireTaxRateInput(profileKey) {
  const input = document.getElementById(`${profileKey}-taxrate-input`);
  if (!input) return;
  input.addEventListener('input', event => previewTaxRate(profileKey, event.target.value));
  input.addEventListener('change', event => applyTaxRate(profileKey, event.target.value));
}

function togglePricingMode(profileKey) {
  const prof = state.profiles[profileKey];
  if (!prof) return;
  prof.pricingMode = prof.pricingMode === 'gross' ? 'net' : 'gross';
  prof.items.forEach(item => syncItemPricePair(prof, item));
  renderActiveProfile();
  showToast(`Pricing mode: ${prof.pricingMode === 'gross' ? '🏷️ Shelf Price (Inc VAT)' : '📊 Net Price (Ex VAT)'}`);
}

// Master Render
function renderActiveProfile() {
  const p = state.activeSub;
  if (p === 'ws_acc') renderWholesaleAccessories();
  else if (p === 'ws_dev') renderWholesaleDevices();
  else if (p === 'rt_acc') renderRetailAccessories();
  else if (p === 'rt_dev') renderRetailDevices();
}

function adjustInputWidth(el) {
  if (!el) return;
  const len = Math.max((el.value || '').length, (el.placeholder || '').length, 14);
  el.style.width = (len + 2) + 'ch';
}

// 1. Render Wholesale Accessories
function renderWholesaleAccessories() {
  const data = state.profiles.ws_acc;
  const calc = calculateProfileTotals('ws_acc');
  const isGross = data.pricingMode === 'gross';
  const taxRate = getTaxRate(data);

  renderWholesaleSellerHeader('ws_acc');
  populateWholesaleCustomerSelect(document.getElementById('ws-acc-store-select'), 'ws_acc');
  populateWholesaleSellerSelect(document.getElementById('ws-acc-seller-select'), 'ws_acc');

  document.getElementById('ws-acc-disp-date').textContent = formatDateDisplay(data.date);
  document.getElementById('ws-acc-input-date').value = data.date;
  const invNoEl = document.getElementById('ws-acc-input-invoiceno');
  if (invNoEl) { invNoEl.value = data.invoiceNo; adjustInputWidth(invNoEl); }
  document.getElementById('ws-acc-input-payment').value = data.paymentMethod;

  document.getElementById('ws-acc-billto-name').value = data.billTo.name || '';
  document.getElementById('ws-acc-billto-address').value = formatAddressForInvoice(data.billTo.address);
  document.getElementById('ws-acc-billto-phone').value = data.billTo.phone || '';
  document.getElementById('ws-acc-billto-email').value = data.billTo.email || '';
  document.getElementById('ws-acc-billto-vat').value = data.billTo.vatNo || '';

  const tbody = document.getElementById('ws-acc-items-tbody');
  tbody.innerHTML = '';

  data.items.forEach((item, index) => {
    const tr = document.createElement('tr');
    tr.className = 'item-row';
    const grossVal = Number(item.grossPrice || (item.amount ? round2(item.amount * (1 + taxRate/100)) : 0)).toFixed(2);
    const netVal = Number(item.amount || (item.grossPrice ? round2(item.grossPrice / (1 + taxRate/100)) : 0)).toFixed(2);

    tr.innerHTML = `
      <td class="row-actions-cell no-print">
        <div class="row-actions">
          <button onclick="deleteRow('ws_acc', ${index})" title="Delete" class="text-rose-500 hover:text-rose-700 p-0.5">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
          </button>
          <button onclick="duplicateRow('ws_acc', ${index})" title="Duplicate" class="text-blue-500 hover:text-blue-700 p-0.5">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
          </button>
        </div>
      </td>
      <td style="width: 58%;">
        <input type="text" class="editable-cell-input font-medium" value="${escapeHtml(item.desc)}" 
               oninput="updateItemField('ws_acc', ${index}, 'desc', this.value)" placeholder="Item Description">
      </td>
      <td style="width: 10%; text-align: center;">
        <input type="number" step="1" min="1" class="editable-cell-input text-center mono font-medium" 
               value="${item.qty}" oninput="updateItemCalcField('ws_acc', ${index}, 'qty', this.value)">
      </td>
      <td style="width: 16%; text-align: right; white-space: nowrap;">
        <div class="money-cell">
          <span class="money-sym">€</span>
          <span class="print-only money-num" id="ws_acc-printamt-${index}">${netVal}</span>
          ${isGross ? `
            <input type="number" step="0.01" min="0" class="money-input no-print" 
                   value="${grossVal}" oninput="updateItemGrossField('ws_acc', ${index}, this.value)" title="Shelf Price Inc VAT">
          ` : `
            <input type="number" step="0.01" min="0" class="money-input no-print" 
                   value="${netVal}" oninput="updateItemNetField('ws_acc', ${index}, this.value)" title="Net Price Ex VAT">
          `}
        </div>
        <div class="no-print text-[9px] text-slate-500 font-mono text-right" id="ws_acc-helper-${index}">
          ${isGross ? `ex VAT: €${netVal}` : `inc VAT: €${grossVal}`}
        </div>
      </td>
      <td style="width: 16%; text-align: right; white-space: nowrap;" id="ws_acc-linetotal-${index}">
        <div class="money-cell">
          <span class="money-sym">€</span>
          <span class="money-num">${Number(item.lineTotal).toFixed(2)}</span>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });

  updateSummaryDisplays('ws_acc', calc);
}

// 2. Render Wholesale Devices
function renderWholesaleDevices() {
  const data = state.profiles.ws_dev;
  const calc = calculateProfileTotals('ws_dev');
  const isGross = data.pricingMode === 'gross';
  const taxRate = getTaxRate(data);

  renderWholesaleSellerHeader('ws_dev');
  populateWholesaleCustomerSelect(document.getElementById('ws-dev-store-select'), 'ws_dev');
  populateWholesaleSellerSelect(document.getElementById('ws-dev-seller-select'), 'ws_dev');

  document.getElementById('ws-dev-disp-date').textContent = formatDateDisplay(data.date);
  document.getElementById('ws-dev-input-date').value = data.date;
  const invNoEl = document.getElementById('ws-dev-input-invoiceno');
  if (invNoEl) { invNoEl.value = data.invoiceNo; adjustInputWidth(invNoEl); }
  document.getElementById('ws-dev-input-payment').value = data.paymentMethod;

  document.getElementById('ws-dev-billto-name').value = data.billTo.name || '';
  document.getElementById('ws-dev-billto-address').value = formatAddressForInvoice(data.billTo.address);
  document.getElementById('ws-dev-billto-phone').value = data.billTo.phone || '';
  document.getElementById('ws-dev-billto-email').value = data.billTo.email || '';
  document.getElementById('ws-dev-billto-vat').value = data.billTo.vatNo || '';

  const tbody = document.getElementById('ws-dev-items-tbody');
  tbody.innerHTML = '';

  data.items.forEach((item, index) => {
    const tr = document.createElement('tr');
    tr.className = 'item-row';
    const grossVal = Number(item.grossPrice || (item.amount ? round2(item.amount * (1 + taxRate/100)) : 0)).toFixed(2);
    const netVal = Number(item.amount || (item.grossPrice ? round2(item.grossPrice / (1 + taxRate/100)) : 0)).toFixed(2);

    tr.innerHTML = `
      <td class="row-actions-cell no-print">
        <div class="row-actions">
          <button onclick="deleteRow('ws_dev', ${index})" title="Delete" class="text-rose-500 hover:text-rose-700 p-0.5">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
          </button>
          <button onclick="duplicateRow('ws_dev', ${index})" title="Duplicate" class="text-blue-500 hover:text-blue-700 p-0.5">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
          </button>
        </div>
      </td>
      <td style="width: 38%;">
        <input type="text" class="editable-cell-input font-medium" value="${escapeHtml(item.model || item.desc)}" 
               oninput="updateItemField('ws_dev', ${index}, 'model', this.value)" placeholder="Device Model Lot">
      </td>
      <td style="width: 20%;">
        <input type="text" class="editable-cell-input text-teal-800 font-mono text-[10.5px]" value="${escapeHtml(item.specs || 'Grade A')}" 
               oninput="updateItemField('ws_dev', ${index}, 'specs', this.value)" placeholder="Specs / Batch">
      </td>
      <td style="width: 10%; text-align: center;">
        <input type="number" step="1" min="1" class="editable-cell-input text-center mono font-medium" 
               value="${item.qty}" oninput="updateItemCalcField('ws_dev', ${index}, 'qty', this.value)">
      </td>
      <td style="width: 16%; text-align: right; white-space: nowrap;">
        <div class="money-cell">
          <span class="money-sym">€</span>
          <span class="print-only money-num" id="ws_dev-printamt-${index}">${netVal}</span>
          ${isGross ? `
            <input type="number" step="0.01" min="0" class="money-input no-print" 
                   value="${grossVal}" oninput="updateItemGrossField('ws_dev', ${index}, this.value)" title="Shelf Price Inc VAT">
          ` : `
            <input type="number" step="0.01" min="0" class="money-input no-print" 
                   value="${netVal}" oninput="updateItemNetField('ws_dev', ${index}, this.value)" title="Net Price Ex VAT">
          `}
        </div>
        <div class="no-print text-[9px] text-slate-500 font-mono text-right" id="ws_dev-helper-${index}">
          ${isGross ? `ex VAT: €${netVal}` : `inc VAT: €${grossVal}`}
        </div>
      </td>
      <td style="width: 16%; text-align: right; white-space: nowrap;" id="ws_dev-linetotal-${index}">
        <div class="money-cell">
          <span class="money-sym">€</span>
          <span class="money-num">${Number(item.lineTotal).toFixed(2)}</span>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });

  updateSummaryDisplays('ws_dev', calc);
}

// 3. Render Retail Accessories
function renderRetailAccessories() {
  const data = state.profiles.rt_acc;
  const calc = calculateProfileTotals('rt_acc');
  const isGross = data.pricingMode === 'gross';
  const taxRate = getTaxRate(data);

  const isGC = data.activeBrand === 'GC';
  const headerElem = document.getElementById('rt-acc-header-banner');
  const logoElem = document.getElementById('rt-acc-logo-img');
  const brandTextElem = document.getElementById('rt-acc-brand-text');
  const contactTextElem = document.getElementById('rt-acc-header-contact');
  const noticeContactElem = document.getElementById('rt-acc-notice-contact');

  if (isGC) {
    headerElem.className = 'banner-rt-acc';
    logoElem.src = 'assets/get-connected-banner-text.png';
    logoElem.className = 'h-9 object-contain drop-shadow-md';
    brandTextElem.textContent = '';
    contactTextElem.innerHTML = `
      <div>Unit 3 Kewlew Business park, Mountrath Rd, Portlaoise, Co. Laois, R32 W0DT</div>
      <div>
        <span>CONTACT: +353(0)857403331</span>
        <span class="sep">•</span>
        <span>EMAIL: getconnectedire@gmail.com</span>
        <span class="sep">•</span>
        <span>VAT: IE9692928</span>
      </div>
    `;
    if (noticeContactElem) noticeContactElem.textContent = 'CONTACT: +353(0)857403331    EMAIL: getconnectedire@gmail.com';
  } else {
    headerElem.className = 'banner-rt-acc';
    logoElem.src = 'assets/idfl-logo.png';
    logoElem.className = 'h-10 object-contain drop-shadow-md';
    brandTextElem.textContent = 'I DIGITAL FUN';
    contactTextElem.innerHTML = `
      <div>Unit 3 Kewlew Business park, Mountrath Rd, Portlaoise, Co. Laois, R32 W0DT</div>
      <div>
        <span>CONTACT: 057 868 2426</span>
        <span class="sep">•</span>
        <span>EMAIL: INFO@IDFLMOBILE.COM</span>
        <span class="sep">•</span>
        <span>VAT: IE33845510H</span>
      </div>
    `;
    if (noticeContactElem) noticeContactElem.textContent = 'CONTACT: 057 868 2426    EMAIL: INFO@IDFLMOBILE.COM';
  }

  const refEl = document.getElementById('rt-acc-input-ref');
  if (refEl) { refEl.value = data.reference; adjustInputWidth(refEl); }
  document.getElementById('rt-acc-disp-date').textContent = formatDateDisplay(data.date);
  document.getElementById('rt-acc-input-date').value = data.date;

  document.getElementById('rt-acc-billfrom-name').value = data.billFrom.name || '';
  document.getElementById('rt-acc-billfrom-address').value = data.billFrom.address || '';
  document.getElementById('rt-acc-billfrom-phone').value = data.billFrom.phone || '';

  document.getElementById('rt-acc-billto-name').value = data.billTo.name || '';
  document.getElementById('rt-acc-billto-email').value = data.billTo.email || '';
  document.getElementById('rt-acc-billto-phone').value = data.billTo.phone || '';

  const tbody = document.getElementById('rt-acc-items-tbody');
  tbody.innerHTML = '';

  data.items.forEach((item, index) => {
    const tr = document.createElement('tr');
    tr.className = 'item-row';
    const grossVal = Number(item.grossPrice || (item.amount ? round2(item.amount * (1 + taxRate/100)) : 0)).toFixed(2);
    const netVal = Number(item.amount || (item.grossPrice ? round2(item.grossPrice / (1 + taxRate/100)) : 0)).toFixed(2);

    tr.innerHTML = `
      <td class="row-actions-cell no-print">
        <div class="row-actions">
          <button onclick="deleteRow('rt_acc', ${index})" title="Delete" class="text-rose-500 hover:text-rose-700 p-0.5">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
          </button>
          <button onclick="duplicateRow('rt_acc', ${index})" title="Duplicate" class="text-blue-500 hover:text-blue-700 p-0.5">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
          </button>
        </div>
      </td>
      <td style="width: 58%;">
        <input type="text" class="editable-cell-input font-medium" value="${escapeHtml(item.desc)}" 
               oninput="updateItemField('rt_acc', ${index}, 'desc', this.value)" placeholder="Item Description">
      </td>
      <td style="width: 10%; text-align: center;">
        <input type="number" step="1" min="1" class="editable-cell-input text-center mono font-medium" 
               value="${item.qty}" oninput="updateItemCalcField('rt_acc', ${index}, 'qty', this.value)">
      </td>
      <td style="width: 16%; text-align: right; white-space: nowrap;">
        <div class="money-cell">
          <span class="money-sym">€</span>
          <span class="print-only money-num" id="rt_acc-printamt-${index}">${netVal}</span>
          ${isGross ? `
            <input type="number" step="0.01" min="0" class="money-input no-print" 
                   value="${grossVal}" oninput="updateItemGrossField('rt_acc', ${index}, this.value)" title="Shelf Price Inc 23% VAT">
          ` : `
            <input type="number" step="0.01" min="0" class="money-input no-print" 
                   value="${netVal}" oninput="updateItemNetField('rt_acc', ${index}, this.value)" title="Net Price Ex VAT">
          `}
        </div>
        <div class="no-print text-[9px] text-slate-500 font-mono text-right" id="rt_acc-helper-${index}">
          ${isGross ? `ex VAT: €${netVal}` : `inc VAT: €${grossVal}`}
        </div>
      </td>
      <td style="width: 16%; text-align: right; white-space: nowrap;" id="rt_acc-linetotal-${index}">
        <div class="money-cell">
          <span class="money-sym">€</span>
          <span class="money-num">${Number(item.lineTotal).toFixed(2)}</span>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });

  updateSummaryDisplays('rt_acc', calc);
}

// 4. Render Retail Devices
function renderRetailDevices() {
  const data = state.profiles.rt_dev;
  const calc = calculateProfileTotals('rt_dev');
  const isGross = data.pricingMode === 'gross';
  const taxRate = getTaxRate(data);

  const isGC = data.activeBrand === 'GC';
  const headerElem = document.getElementById('rt-dev-header-banner');
  const logoElem = document.getElementById('rt-dev-logo-img');
  const brandTextElem = document.getElementById('rt-dev-brand-text');
  const contactTextElem = document.getElementById('rt-dev-header-contact');

  if (isGC) {
    headerElem.className = 'banner-rt-dev';
    logoElem.src = 'assets/get-connected-banner-text.png';
    logoElem.className = 'h-9 object-contain drop-shadow-md';
    brandTextElem.textContent = '';
    contactTextElem.innerHTML = `
      <div>Unit 3 Kewlew Business park, Mountrath Rd, Portlaoise, Co. Laois, R32 W0DT</div>
      <div>
        <span>CONTACT: +353(0)857403331</span>
        <span class="sep">•</span>
        <span>EMAIL: getconnectedire@gmail.com</span>
        <span class="sep">•</span>
        <span>VAT: IE9692928</span>
      </div>
    `;
  } else {
    headerElem.className = 'banner-rt-dev';
    logoElem.src = 'assets/idfl-logo.png';
    logoElem.className = 'h-10 object-contain drop-shadow-md';
    brandTextElem.textContent = 'I DIGITAL FUN';
    contactTextElem.innerHTML = `
      <div>Unit 3 Kewlew Business park, Mountrath Rd, Portlaoise, Co. Laois, R32 W0DT</div>
      <div>
        <span>CONTACT: 057 868 2426</span>
        <span class="sep">•</span>
        <span>EMAIL: INFO@IDFLMOBILE.COM</span>
        <span class="sep">•</span>
        <span>VAT: IE33845510H</span>
      </div>
    `;
  }

  const refEl = document.getElementById('rt-dev-input-ref');
  if (refEl) { refEl.value = data.reference; adjustInputWidth(refEl); }
  document.getElementById('rt-dev-disp-date').textContent = formatDateDisplay(data.date);
  document.getElementById('rt-dev-input-date').value = data.date;

  document.getElementById('rt-dev-billfrom-name').value = data.billFrom.name || '';
  document.getElementById('rt-dev-billfrom-address').value = data.billFrom.address || '';
  document.getElementById('rt-dev-billfrom-phone').value = data.billFrom.phone || '';

  document.getElementById('rt-dev-billto-name').value = data.billTo.name || '';
  document.getElementById('rt-dev-billto-email').value = data.billTo.email || '';
  document.getElementById('rt-dev-billto-phone').value = data.billTo.phone || '';
  document.getElementById('rt-dev-billto-address').value = data.billTo.address || '';

  const tbody = document.getElementById('rt-dev-items-tbody');
  tbody.innerHTML = '';

  data.items.forEach((item, index) => {
    const tr = document.createElement('tr');
    tr.className = 'item-row';
    const grossVal = Number(item.grossPrice || (item.amount ? round2(item.amount * (1 + taxRate/100)) : 0)).toFixed(2);
    const netVal = Number(item.amount || (item.grossPrice ? round2(item.grossPrice / (1 + taxRate/100)) : 0)).toFixed(2);
    
    let itemDesc = item.desc;
    if (!itemDesc) {
      if (item.imei && item.model) {
        itemDesc = `${item.imei} - ${item.model}`;
      } else if (item.imei) {
        itemDesc = item.imei;
      } else {
        itemDesc = item.model || '';
      }
    }

    tr.innerHTML = `
      <td class="row-actions-cell no-print">
        <div class="row-actions">
          <button onclick="deleteRow('rt_dev', ${index})" title="Delete" class="text-rose-500 hover:text-rose-700 p-0.5">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
          </button>
          <button onclick="duplicateRow('rt_dev', ${index})" title="Duplicate" class="text-blue-500 hover:text-blue-700 p-0.5">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
          </button>
        </div>
      </td>
      <td style="width: 58%; vertical-align: top;">
        <textarea rows="2" class="editable-cell-input font-medium text-[11px] resize-none w-full" 
                  style="line-height: 1.35; padding: 2px 4px; overflow: hidden; white-space: normal; word-break: break-word;"
                  oninput="updateItemField('rt_dev', ${index}, 'desc', this.value)" placeholder="IMEI - Device Name">${escapeHtml(itemDesc)}</textarea>
      </td>
      <td style="width: 16%; vertical-align: top;">
        <input type="text" class="editable-cell-input text-[11px]" value="${escapeHtml(item.grade || 'Brand New')}" 
               oninput="updateItemField('rt_dev', ${index}, 'grade', this.value)" placeholder="Condition Grade">
      </td>
      <td style="width: 13%; text-align: right; white-space: nowrap; vertical-align: top;">
        <div class="money-cell" style="width: 82px;">
          <span class="money-sym">€</span>
          <span class="print-only money-num" id="rt_dev-printamt-${index}">${netVal}</span>
          ${isGross ? `
            <input type="number" step="0.01" min="0" class="money-input no-print" 
                   value="${grossVal}" oninput="updateItemGrossField('rt_dev', ${index}, this.value)" title="Shelf Price Inc 23% VAT">
          ` : `
            <input type="number" step="0.01" min="0" class="money-input no-print" 
                   value="${netVal}" oninput="updateItemNetField('rt_dev', ${index}, this.value)" title="Net Price Ex VAT">
          `}
        </div>
        <div class="no-print text-[9px] text-slate-500 font-mono text-right" id="rt_dev-helper-${index}">
          ${isGross ? `ex VAT: €${netVal}` : `inc VAT: €${grossVal}`}
        </div>
      </td>
      <td style="width: 13%; text-align: right; white-space: nowrap; vertical-align: top;" id="rt_dev-linetotal-${index}">
        <div class="money-cell" style="width: 82px;">
          <span class="money-sym">€</span>
          <span class="money-num">${Number(item.lineTotal).toFixed(2)}</span>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });

  updateSummaryDisplays('rt_dev', calc);
}

// Summary display updater
function updateSummaryDisplays(profileKey, calc) {
  if (!calc) calc = calculateProfileTotals(profileKey);

  const subtotalElem = document.getElementById(`${profileKey}-subtotal-val`);
  const taxrateElem = document.getElementById(`${profileKey}-taxrate-input`);
  const vatElem = document.getElementById(`${profileKey}-vat-val`);
  const otherElem = document.getElementById(`${profileKey}-other-input`);
  const totalElem = document.getElementById(`${profileKey}-totaldue-val`);

  if (subtotalElem) subtotalElem.textContent = Number(calc.subtotal).toFixed(2);
  if (taxrateElem) taxrateElem.value = Number(calc.taxRate).toFixed(2);
  if (vatElem) vatElem.textContent = Number(calc.vatAmount).toFixed(2);
  if (otherElem) otherElem.value = Number(calc.otherCosts).toFixed(2);
  if (totalElem) totalElem.textContent = Number(calc.totalDue).toFixed(2);
}

// In place updates
function updateItemField(profileKey, index, field, value) {
  const prof = state.profiles[profileKey];
  if (prof && prof.items[index]) {
    prof.items[index][field] = value;
  }
}

function updateItemNetField(profileKey, index, value) {
  const prof = state.profiles[profileKey];
  if (!prof || !prof.items[index]) return;
  const net = parseNum(value);
  const taxRate = getTaxRate(prof);
  const gross = round2(net * (1 + taxRate / 100));
  prof.items[index].amount = net;
  prof.items[index].grossPrice = gross;

  const calc = calculateProfileTotals(profileKey);
  const item = prof.items[index];

  const helper = document.getElementById(`${profileKey}-helper-${index}`);
  if (helper) helper.textContent = `inc VAT: €${gross.toFixed(2)}`;

  const printAmt = document.getElementById(`${profileKey}-printamt-${index}`);
  if (printAmt) printAmt.textContent = net.toFixed(2);

  const linetotalCell = document.getElementById(`${profileKey}-linetotal-${index}`);
  if (linetotalCell) {
    const widthStyle = profileKey === 'rt_dev' ? 'style="width: 82px;"' : '';
    linetotalCell.innerHTML = `
      <div class="money-cell" ${widthStyle}>
        <span class="money-sym">€</span>
        <span class="money-num">${Number(item.lineTotal).toFixed(2)}</span>
      </div>
    `;
  }

  updateSummaryDisplays(profileKey, calc);
}

function updateItemGrossField(profileKey, index, value) {
  const prof = state.profiles[profileKey];
  if (!prof || !prof.items[index]) return;
  const gross = parseNum(value);
  const taxRate = getTaxRate(prof);
  const net = round2(gross / (1 + taxRate / 100));
  prof.items[index].grossPrice = gross;
  prof.items[index].amount = net;

  const calc = calculateProfileTotals(profileKey);
  const item = prof.items[index];

  const helper = document.getElementById(`${profileKey}-helper-${index}`);
  if (helper) helper.textContent = `ex VAT: €${net.toFixed(2)}`;

  const printAmt = document.getElementById(`${profileKey}-printamt-${index}`);
  if (printAmt) printAmt.textContent = net.toFixed(2);

  const linetotalCell = document.getElementById(`${profileKey}-linetotal-${index}`);
  if (linetotalCell) {
    const widthStyle = profileKey === 'rt_dev' ? 'style="width: 82px;"' : '';
    linetotalCell.innerHTML = `
      <div class="money-cell" ${widthStyle}>
        <span class="money-sym">€</span>
        <span class="money-num">${Number(item.lineTotal).toFixed(2)}</span>
      </div>
    `;
  }

  updateSummaryDisplays(profileKey, calc);
}

function updateItemCalcField(profileKey, index, field, value) {
  const prof = state.profiles[profileKey];
  if (!prof || !prof.items[index]) return;
  prof.items[index][field] = parseNum(value);

  const calc = calculateProfileTotals(profileKey);
  const item = prof.items[index];
  const isGross = prof.pricingMode === 'gross';
  const taxRate = getTaxRate(prof);
  const net = Number(item.amount || (item.grossPrice ? round2(item.grossPrice / (1 + taxRate/100)) : 0));
  const gross = Number(item.grossPrice || (item.amount ? round2(item.amount * (1 + taxRate/100)) : 0));

  const helper = document.getElementById(`${profileKey}-helper-${index}`);
  if (helper) helper.textContent = isGross ? `ex VAT: €${net.toFixed(2)}` : `inc VAT: €${gross.toFixed(2)}`;

  const printAmt = document.getElementById(`${profileKey}-printamt-${index}`);
  if (printAmt) printAmt.textContent = net.toFixed(2);

  const linetotalCell = document.getElementById(`${profileKey}-linetotal-${index}`);
  if (linetotalCell) {
    const widthStyle = profileKey === 'rt_dev' ? 'style="width: 82px;"' : '';
    linetotalCell.innerHTML = `
      <div class="money-cell" ${widthStyle}>
        <span class="money-sym">€</span>
        <span class="money-num">${Number(item.lineTotal).toFixed(2)}</span>
      </div>
    `;
  }

  updateSummaryDisplays(profileKey, calc);
}

function addFromShelfPrice(profileKey) {
  const inputElem = document.getElementById(profileKey === 'rt_acc' ? 'rt-acc-shelf-calc-input' : 'rt-dev-shelf-calc-input');
  if (!inputElem) return;
  const gross = parseNum(inputElem.value);
  if (gross <= 0) {
    alert('Please enter a valid shelf price (e.g. 15.00)');
    return;
  }
  const taxRate = getTaxRate(profileKey);
  const net = round2(gross / (1 + taxRate / 100));

  if (profileKey === 'rt_acc') {
    addRow('rt_acc', { sku: '00ACC', desc: 'Retail Accessory', qty: 1, grossPrice: gross, amount: net });
  } else {
    addRow('rt_dev', { model: 'Retail Device', imei: '', grade: 'Grade A', warranty: '12 Months', qty: 1, grossPrice: gross, amount: net });
  }
  inputElem.value = '';
  showToast(`Added Net €${net.toFixed(2)} (from Shelf €${gross.toFixed(2)})`);
}

// Add/Delete Row Handlers
function addRow(profileKey, customItem = null) {
  const prof = state.profiles[profileKey];
  if (!prof) return;

  let newItem;
  if (customItem) {
    newItem = JSON.parse(JSON.stringify(customItem));
  } else {
    if (profileKey === 'ws_acc') {
      newItem = { desc: 'New Wholesale Accessory', qty: 1, amount: 0, grossPrice: 0 };
    } else if (profileKey === 'ws_dev') {
      newItem = { model: 'New Handset Lot', specs: 'Grade A', qty: 1, amount: 0, grossPrice: 0 };
    } else if (profileKey === 'rt_acc') {
      newItem = { sku: 'ACC-NEW', desc: 'New Retail Accessory', qty: 1, grossPrice: 0, amount: 0 };
    } else if (profileKey === 'rt_dev') {
      newItem = { desc: '', model: 'New Retail Device', imei: '', grade: 'Brand New', qty: 1, grossPrice: 0, amount: 0 };
    }
  }

  if (!newItem) return;
  syncItemPricePair(prof, newItem);
  prof.items.push(newItem);

  renderActiveProfile();
  showToast('Row added');
}

function deleteRow(profileKey, index) {
  const prof = state.profiles[profileKey];
  if (!prof || !prof.items[index]) return;
  prof.items.splice(index, 1);
  renderActiveProfile();
}

function duplicateRow(profileKey, index) {
  const prof = state.profiles[profileKey];
  if (!prof || !prof.items[index]) return;
  prof.items.splice(index + 1, 0, JSON.parse(JSON.stringify(prof.items[index])));
  renderActiveProfile();
  showToast('Row duplicated');
}

function addFromCatalog(catalogKey, index) {
  const cat = CATALOGS[catalogKey];
  if (!cat || !cat[index]) return;
  const item = cat[index];

  if (catalogKey === 'wsAccessories') addRow('ws_acc', item);
  else if (catalogKey === 'wsDevices') addRow('ws_dev', item);
  else if (catalogKey === 'rtAccessories') addRow('rt_acc', item);
  else if (catalogKey === 'rtDevices') addRow('rt_dev', item);
}

function onStoreSelectChanged(profileKey, storeId) {
  if (profileKey.startsWith('rt_')) {
    const store = STORES.find(s => s.id === Number(storeId));
    if (!store) return;
    state.profiles[profileKey].selectedStoreId = store.id;
    state.profiles[profileKey].activeBrand = store.brand;
    state.profiles[profileKey].billFrom = {
      name: store.name,
      address: store.address,
      phone: store.phone,
      email: store.email
    };
    renderActiveProfile();
    showToast(`Branch selected: ${store.name}`);
  } else {
    const customer = getWholesaleCustomers().find(entry => entry.id === storeId);
    if (!customer) return;
    state.profiles[profileKey].selectedCustomerId = customer.id;
    state.profiles[profileKey].billTo = {
      name: customer.name,
      address: formatAddressForInvoice(customer.address),
      phone: customer.phone || '',
      email: customer.email || '',
      vatNo: customer.vatNo || ''
    };
    renderActiveProfile();
    showToast(`Customer preset: ${customer.name}`);
  }
}

function onWholesaleSellerChanged(profileKey, sellerBrand) {
  const profile = state.profiles[profileKey];
  if (!profile || !WHOLESALE_SELLERS[sellerBrand]) return;
  profile.sellerBrand = sellerBrand;
  renderActiveProfile();
  showToast(`Invoice from: ${WHOLESALE_SELLERS[sellerBrand].name}`);
}

function currentWholesaleCustomer(profileKey) {
  const profile = state.profiles[profileKey];
  const domPrefix = profileKey === 'ws_acc' ? 'ws-acc' : 'ws-dev';
  return {
    name: document.getElementById(`${domPrefix}-billto-name`)?.value.trim() || profile.billTo.name || 'New customer',
    address: document.getElementById(`${domPrefix}-billto-address`)?.value.trim() || profile.billTo.address || '',
    phone: document.getElementById(`${domPrefix}-billto-phone`)?.value.trim() || profile.billTo.phone || '',
    email: document.getElementById(`${domPrefix}-billto-email`)?.value.trim() || profile.billTo.email || '',
    vatNo: document.getElementById(`${domPrefix}-billto-vat`)?.value.trim() || profile.billTo.vatNo || ''
  };
}

function saveCurrentWholesaleCustomer(profileKey) {
  const customer = currentWholesaleCustomer(profileKey);
  if (!customer.name) {
    alert('Enter the customer name before saving this preset.');
    return;
  }
  const saved = getCustomWholesaleCustomers();
  const existingIndex = saved.findIndex(entry => entry.name.toLowerCase() === customer.name.toLowerCase());
  const record = {
    ...customer,
    id: existingIndex >= 0 ? saved[existingIndex].id : `custom-${Date.now()}`
  };
  if (existingIndex >= 0) saved[existingIndex] = record;
  else saved.push(record);
  localStorage.setItem(WHOLESALE_CUSTOMERS_STORAGE_KEY, JSON.stringify(saved));
  state.profiles[profileKey].selectedCustomerId = record.id;
  state.profiles[profileKey].billTo = { ...record };
  populateWholesaleCustomerSelect(document.getElementById(profileKey === 'ws_acc' ? 'ws-acc-store-select' : 'ws-dev-store-select'), profileKey);
  showToast(`Saved customer: ${record.name}`);
}

function deleteSelectedWholesaleCustomer(profileKey) {
  const profile = state.profiles[profileKey];
  const selectedId = profile?.selectedCustomerId;
  if (!selectedId || !selectedId.startsWith('custom-')) {
    alert('Only customer presets you added can be removed.');
    return;
  }
  const saved = getCustomWholesaleCustomers().filter(entry => entry.id !== selectedId);
  localStorage.setItem(WHOLESALE_CUSTOMERS_STORAGE_KEY, JSON.stringify(saved));
  profile.selectedCustomerId = '';
  populateWholesaleCustomerSelect(document.getElementById(profileKey === 'ws_acc' ? 'ws-acc-store-select' : 'ws-dev-store-select'), profileKey);
  showToast('Saved customer removed');
}

function setQuickTaxRate(rate) {
  applyTaxRate(state.activeSub, rate);
}

function generateNewInvoiceNumber() {
  const rand = Math.floor(100000 + Math.random() * 900000);
  const p = state.activeSub;
  const prof = state.profiles[p];

  if (p === 'ws_acc') {
    prof.invoiceNo = String(rand);
    const el = document.getElementById('ws-acc-input-invoiceno');
    if (el) { el.value = rand; adjustInputWidth(el); }
  } else if (p === 'ws_dev') {
    prof.invoiceNo = `GC-DEV-${rand}`;
    const el = document.getElementById('ws-dev-input-invoiceno');
    if (el) { el.value = `GC-DEV-${rand}`; adjustInputWidth(el); }
  } else if (p === 'rt_acc') {
    prof.reference = `SALE/POS${rand}`;
    const el = document.getElementById('rt-acc-input-ref');
    if (el) { el.value = `SALE/POS${rand}`; adjustInputWidth(el); }
  } else if (p === 'rt_dev') {
    prof.reference = `SALE/POS${rand}`;
    const el = document.getElementById('rt-dev-input-ref');
    if (el) { el.value = `SALE/POS${rand}`; adjustInputWidth(el); }
  }
  showToast(`Generated # ${rand}`);
}

function resetCurrentInvoice() {
  if (confirm('Are you sure you want to reset the current invoice?')) {
    const prof = state.profiles[state.activeSub];
    prof.items = [];
    prof.otherCosts = 0;
    renderActiveProfile();
    showToast('Invoice cleared');
  }
}

// Scanner Handlers
function setupScannerHandlers() {
  const dropZone = document.getElementById('scanner-drop-zone');
  const fileInput = document.getElementById('scanner-file-input');

  if (dropZone && fileInput) {
    dropZone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropZone.classList.add('dragover');
    });

    dropZone.addEventListener('dragleave', () => {
      dropZone.classList.remove('dragover');
    });

    dropZone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropZone.classList.remove('dragover');
      if (e.dataTransfer.files.length > 0) processUploadedFile(e.dataTransfer.files[0]);
    });

    fileInput.addEventListener('change', (e) => {
      if (e.target.files.length > 0) processUploadedFile(e.target.files[0]);
    });
  }
}

function openScannerModal() {
  const select = document.getElementById('scanner-target-profile');
  if (select) select.value = state.activeSub;
  const m = document.getElementById('scanner-modal');
  if (m) {
    m.classList.remove('hidden');
    m.classList.add('flex');
  }
}

function closeScannerModal() {
  const m = document.getElementById('scanner-modal');
  if (m) {
    m.classList.add('hidden');
    m.classList.remove('flex');
  }
}

function getScannerTargetProfile() {
  return document.getElementById('scanner-target-profile')?.value || state.activeSub;
}

function scannerGrossToNet(gross) {
  const profile = state.profiles[getScannerTargetProfile()] || state.profiles[state.activeSub];
  return round2(parseNum(gross) / (1 + (getTaxRate(profile) / 100)));
}

function updateScannedItemGross(index, value) {
  const item = state.scannedItemsBuffer[index];
  if (!item) return;
  item.grossPrice = parseNum(value);
  item.amount = scannerGrossToNet(item.grossPrice);
}

async function processUploadedFile(file) {
  const statusElem = document.getElementById('scanner-status');
  const previewDiv = document.getElementById('scanner-preview-area');
  const fileNameElem = document.getElementById('scanner-filename');

  if (!file) return;

  fileNameElem.textContent = `${file.name} (${Math.round(file.size / 1024)} KB)`;
  statusElem.classList.remove('hidden');
  previewDiv.classList.add('hidden');
  statusElem.textContent = 'Analyzing document content...';

  try {
    if (file.name.endsWith('.xlsx') || file.name.endsWith('.xls') || file.name.endsWith('.csv')) {
      statusElem.textContent = 'Parsing Excel spreadsheet...';
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = new Uint8Array(e.target.result);
          const workbook = XLSX.read(data, { type: 'array' });
          const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
          const rows = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });
          parseTableRows(rows);
        } catch (err) {
          statusElem.textContent = 'Error parsing Excel: ' + err.message;
        }
      };
      reader.readAsArrayBuffer(file);
    } else if (file.type.startsWith('image/')) {
      statusElem.textContent = 'Extracting text and prices with AI OCR...';
      if (typeof Tesseract === 'undefined') {
        statusElem.textContent = 'OCR library loading... Please wait 2 seconds.';
        return;
      }
      
      const res = await Tesseract.recognize(file, 'eng', {
        logger: m => {
          if (m.status === 'recognizing text') {
            statusElem.textContent = `AI Scanning Photo: ${Math.round(m.progress * 100)}%`;
          }
        }
      });

      statusElem.textContent = 'Text extracted! Identifying invoice rows...';
      parseOCRText(res.data.text);
    } else {
      statusElem.textContent = 'Unsupported format. Please upload JPG/PNG photo or Excel XLSX.';
    }
  } catch (err) {
    statusElem.textContent = 'Failed to process: ' + err.message;
  }
}

function parseOCRText(text) {
  const lines = text.split(/\r?\n/).map(l => l.trim()).filter(l => l.length > 0);
  const items = [];

  lines.forEach(line => {
    const priceMatch = line.match(/(?:€|EUR)?\s*(\d+[.,]\d{2})/i) || line.match(/\b(\d+)\s*(?:€|EUR)/i);
    const qtyMatch = line.match(/\b(\d+)\s*(?:x|pcs|pk|qty)?\b/i);

    if (priceMatch) {
      const price = parseFloat(priceMatch[1].replace(',', '.'));
      let qty = qtyMatch ? parseInt(qtyMatch[1], 10) : 1;
      if (qty > 1000) qty = 1;

      let desc = line.replace(priceMatch[0], '').replace(/(?:€|EUR)/gi, '').trim();
      if (desc.length < 3) desc = 'Scanned Product / Item';

      items.push({
        desc: desc,
        qty: qty,
        grossPrice: price,
        amount: scannerGrossToNet(price)
      });
    }
  });

  if (items.length === 0) {
    lines.slice(0, 8).forEach(l => {
      items.push({ desc: l, qty: 1, grossPrice: 15.00, amount: scannerGrossToNet(15) });
    });
  }

  showParsedPreview(items);
}

function parseTableRows(rows) {
  const items = [];
  rows.forEach(row => {
    if (!row || row.length === 0) return;
    let desc = '';
    let qty = 1;
    let price = 0;

    row.forEach(cell => {
      if (typeof cell === 'string' && cell.length > 2 && isNaN(cell)) {
        if (!desc || cell.length > desc.length) desc = cell;
      } else if (typeof cell === 'number' || (!isNaN(cell) && String(cell).trim() !== '')) {
        const num = parseFloat(cell);
        if (num > 0) {
          if (num % 1 === 0 && num < 100 && qty === 1) qty = num;
          else price = num;
        }
      }
    });

    if (desc && desc.toLowerCase() !== 'item description' && desc.toLowerCase() !== 'subtotal' && desc.toLowerCase() !== 'total') {
      if (price === 0) price = 15.00;
      items.push({
        desc: desc,
        qty: qty,
        grossPrice: price,
        amount: scannerGrossToNet(price)
      });
    }
  });

  showParsedPreview(items);
}

function showParsedPreview(items) {
  state.scannedItemsBuffer = items;
  const statusElem = document.getElementById('scanner-status');
  const previewDiv = document.getElementById('scanner-preview-area');
  const tbody = document.getElementById('scanner-preview-tbody');

  statusElem.classList.add('hidden');
  previewDiv.classList.remove('hidden');
  tbody.innerHTML = '';

  items.forEach((item, index) => {
    const tr = document.createElement('tr');
    tr.className = 'border-b border-slate-700/60 text-xs';
    tr.innerHTML = `
      <td class="p-2">
        <input type="text" class="w-full bg-slate-900 border border-slate-700 rounded p-1 text-slate-100" value="${escapeHtml(item.desc)}"
               oninput="state.scannedItemsBuffer[${index}].desc = this.value">
      </td>
      <td class="p-2 text-center" style="width: 70px;">
        <input type="number" class="w-full bg-slate-900 border border-slate-700 rounded p-1 text-center text-slate-100 mono" value="${item.qty}"
               oninput="state.scannedItemsBuffer[${index}].qty = parseNum(this.value)">
      </td>
      <td class="p-2 text-right" style="width: 100px;">
        <input type="number" step="0.01" class="w-full bg-slate-900 border border-slate-700 rounded p-1 text-right text-slate-100 mono" value="${Number(item.grossPrice || item.amount).toFixed(2)}"
               oninput="updateScannedItemGross(${index}, this.value)">
      </td>
      <td class="p-2 text-center" style="width: 40px;">
        <button onclick="deleteBufferRow(${index})" class="text-rose-400 hover:text-rose-300">✕</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function deleteBufferRow(index) {
  state.scannedItemsBuffer.splice(index, 1);
  showParsedPreview(state.scannedItemsBuffer);
}

function parseClipboardText() {
  const raw = document.getElementById('scanner-clipboard-input').value;
  if (!raw.trim()) {
    alert('Please paste some Excel rows or text first.');
    return;
  }
  const lines = raw.split(/\r?\n/).filter(l => l.trim().length > 0);
  const rows = lines.map(l => l.split(/\t|,/));
  parseTableRows(rows);
}

function applyScannedItemsToProfile() {
  const targetProfile = document.getElementById('scanner-target-profile').value;
  const prof = state.profiles[targetProfile];
  if (!prof) return;

  if (state.scannedItemsBuffer.length === 0) {
    alert('No items found to import.');
    return;
  }

  state.scannedItemsBuffer.forEach(it => {
    const scannedGross = parseNum(it.grossPrice || 0);
    const scannedNet = scannedGross ? round2(scannedGross / (1 + (getTaxRate(prof) / 100))) : parseNum(it.amount);
    let newItem;
    if (targetProfile === 'ws_acc') {
      newItem = { desc: it.desc, qty: it.qty || 1, amount: scannedNet, grossPrice: scannedGross };
    } else if (targetProfile === 'ws_dev') {
      newItem = { model: it.desc, specs: 'Grade A', qty: it.qty || 1, amount: scannedNet, grossPrice: scannedGross };
    } else if (targetProfile === 'rt_dev') {
      newItem = { model: it.desc, imei: '', grade: 'Grade A', warranty: '12 Months', qty: it.qty || 1, grossPrice: scannedGross, amount: scannedNet };
    } else {
      newItem = { sku: '00ACC', desc: it.desc, qty: it.qty || 1, grossPrice: scannedGross, amount: scannedNet };
    }
    syncItemPricePair(prof, newItem);
    prof.items.push(newItem);
  });

  const mainCat = targetProfile.startsWith('ws_') ? 'wholesale' : 'retail';
  switchHierarchy(mainCat, targetProfile);
  closeScannerModal();
  showToast(`✨ Imported ${state.scannedItemsBuffer.length} items!`);
}

// Local + Firebase invoice history
function invoiceHistoryKey(record) {
  return `${record?.subCat || ''}|${String(record?.invoiceNo || record?.id || '').trim().toLowerCase()}`;
}

function invoiceHistoryTimestamp(record) {
  const timestamp = Date.parse(record?.timestamp || '') || 0;
  return timestamp || Date.parse(record?.date || '') || 0;
}

function toInvoiceArray(value) {
  if (Array.isArray(value)) return value.filter(record => record && record.id);
  if (value && typeof value === 'object') return Object.values(value).filter(record => record && record.id);
  return [];
}

function mergeInvoiceHistory(...collections) {
  const byKey = new Map();
  collections.flatMap(toInvoiceArray).forEach(record => {
    const key = invoiceHistoryKey(record);
    const existing = byKey.get(key);
    if (!existing || invoiceHistoryTimestamp(record) >= invoiceHistoryTimestamp(existing)) {
      byKey.set(key, record);
    }
  });
  return [...byKey.values()].sort((a, b) => invoiceHistoryTimestamp(b) - invoiceHistoryTimestamp(a));
}

function invoiceHistoryPayload() {
  const invoices = {};
  state.savedInvoices.forEach(record => { invoices[record.id] = record; });
  return { updatedAt: new Date().toISOString(), invoices };
}

function saveInvoiceHistoryLocally() {
  localStorage.setItem(INVOICE_HISTORY_STORAGE_KEY, JSON.stringify(state.savedInvoices));
}

function updateInvoiceCloudUI(message = null) {
  const button = document.getElementById('invoice-cloud-auth-button');
  const status = document.getElementById('invoice-cloud-status');
  const cloud = window.VatInvoiceCloud;
  const user = cloud?.currentUser?.();
  const approved = cloud?.allowed?.(user);

  if (button) button.innerHTML = approved
    ? '<span>☁️</span><span>Cloud history signed in</span>'
    : '<span>☁️</span><span>Sign in to save history</span>';
  if (status) {
    status.textContent = message || (invoiceCloudReady
      ? 'Cloud history protected'
      : approved
        ? 'Connecting to cloud…'
        : 'Local history');
  }
}

function waitForInvoiceCloud() {
  if (window.VatInvoiceCloud) return Promise.resolve(window.VatInvoiceCloud);
  return new Promise(resolve => {
    window.addEventListener('vat-invoice-cloud-ready', () => resolve(window.VatInvoiceCloud), { once: true });
  });
}

async function syncInvoiceHistoryToCloud({ quiet = false } = {}) {
  const cloud = window.VatInvoiceCloud;
  if (!invoiceCloudReady || !cloud?.allowed?.(cloud.currentUser?.())) return false;
  try {
    await cloud.write(invoiceHistoryPayload());
    updateInvoiceCloudUI('Cloud history protected');
    if (!quiet) showToast('Invoice history saved securely to Firebase');
    return true;
  } catch (error) {
    console.error('Cloud invoice history error:', error);
    updateInvoiceCloudUI('Local copy saved — cloud needs attention');
    if (!quiet) showToast('Saved locally. Cloud history could not update yet.');
    return false;
  }
}

async function bootInvoiceCloud() {
  try {
    const cloud = await waitForInvoiceCloud();
    updateInvoiceCloudUI();
    cloud.observeAuth(async user => {
      invoiceCloudUnsubscribe?.();
      invoiceCloudUnsubscribe = null;
      invoiceCloudReady = false;

      if (!cloud.allowed(user)) {
        updateInvoiceCloudUI(user ? 'Use the approved Google account' : 'Local history');
        return;
      }

      updateInvoiceCloudUI('Merging local and cloud history…');
      try {
        const remotePayload = await cloud.read();
        const merged = mergeInvoiceHistory(state.savedInvoices, remotePayload?.invoices || remotePayload);
        state.savedInvoices = merged;
        saveInvoiceHistoryLocally();
        renderSavedInvoicesModal();
        invoiceCloudReady = true;

        // The merged copy is written once on sign-in. This preserves drafts
        // created on this computer before cloud history was enabled.
        await cloud.write(invoiceHistoryPayload());

        invoiceCloudUnsubscribe = cloud.subscribe(payload => {
          const remoteInvoices = toInvoiceArray(payload?.invoices || payload);
          state.savedInvoices = mergeInvoiceHistory(remoteInvoices);
          saveInvoiceHistoryLocally();
          renderSavedInvoicesModal();
          updateInvoiceCloudUI('Cloud history protected');
        }, error => {
          console.error('Cloud invoice history listener error:', error);
          updateInvoiceCloudUI('Local copy saved — cloud needs attention');
        });
        updateInvoiceCloudUI('Cloud history protected');
        showToast('Local drafts and Firebase history are merged');
      } catch (error) {
        console.error('Cloud invoice history setup error:', error);
        updateInvoiceCloudUI('Local copy saved — create Firebase Database');
      }
    });
  } catch (error) {
    console.error('Firebase setup error:', error);
    updateInvoiceCloudUI('Local history');
  }
}

async function toggleInvoiceCloudSignIn() {
  const cloud = await waitForInvoiceCloud();
  const user = cloud.currentUser?.();
  if (cloud.allowed(user)) {
    await cloud.signOut();
    showToast('Signed out — your local history remains on this device');
    return;
  }
  try {
    await cloud.signIn();
  } catch (error) {
    console.error('Google sign-in error:', error);
    showToast('Google sign-in was not completed. Check the authorised website address in Firebase.');
  }
}

function saveCurrentInvoice() {
  const p = state.activeSub;
  const prof = state.profiles[p];
  const calc = calculateProfileTotals(p);
  const invoiceNo = String(prof.invoiceNo || prof.reference || 'INV-' + Math.floor(100000 + Math.random() * 900000)).trim();
  const clientName = prof.billTo?.name || 'Customer';

  // Check if an invoice with same number & subcategory already exists in saved drafts
  const existingIndex = state.savedInvoices.findIndex(r => 
    r.subCat === p && String(r.invoiceNo).trim().toLowerCase() === invoiceNo.toLowerCase()
  );

  const record = {
    id: existingIndex >= 0 ? state.savedInvoices[existingIndex].id : ('INV_' + Date.now()),
    mainCat: state.activeMain,
    subCat: p,
    invoiceNo: invoiceNo,
    clientName: clientName,
    date: prof.date,
    total: calc.totalDue,
    data: JSON.parse(JSON.stringify(prof)),
    timestamp: new Date().toISOString()
  };

  if (existingIndex >= 0) {
    state.savedInvoices[existingIndex] = record;
    showToast(`Updated existing draft: #${invoiceNo}`);
  } else {
    state.savedInvoices.unshift(record);
    showToast(`Saved new draft: #${invoiceNo}`);
  }

  saveInvoiceHistoryLocally();
  renderSavedInvoicesModal();
  void syncInvoiceHistoryToCloud();
}

function loadSavedInvoicesFromStorage() {
  try {
    const raw = localStorage.getItem(INVOICE_HISTORY_STORAGE_KEY);
    if (raw) state.savedInvoices = mergeInvoiceHistory(JSON.parse(raw));
  } catch (e) {
    console.error('History error:', e);
  }
}

function loadInvoiceRecord(id) {
  const rec = state.savedInvoices.find(r => r.id === id);
  if (!rec) return;

  state.profiles[rec.subCat] = JSON.parse(JSON.stringify(rec.data));
  switchHierarchy(rec.mainCat || (rec.subCat.startsWith('ws_') ? 'wholesale' : 'retail'), rec.subCat);
  closeSavedModal();
  showToast(`Loaded invoice ${rec.invoiceNo}`);
}

function deleteSavedInvoiceRecord(id, e) {
  if (e) e.stopPropagation();
  state.savedInvoices = state.savedInvoices.filter(r => r.id !== id);
  saveInvoiceHistoryLocally();
  renderSavedInvoicesModal();
  void syncInvoiceHistoryToCloud();
  showToast('Invoice deleted from history');
}

function getInvoiceFormattedName() {
  const p = state.activeSub;
  const prof = state.profiles[p];

  let storeName = '';
  let customerName = '';

  if (p === 'rt_acc') {
    storeName = document.getElementById('rt-acc-billfrom-name')?.value || prof.billFrom?.name || 'Thurles';
    customerName = document.getElementById('rt-acc-billto-name')?.value || prof.billTo?.name || 'Customer';
  } else if (p === 'rt_dev') {
    storeName = document.getElementById('rt-dev-billfrom-name')?.value || prof.billFrom?.name || 'Thurles';
    customerName = document.getElementById('rt-dev-billto-name')?.value || prof.billTo?.name || 'Customer';
  } else if (p === 'ws_acc') {
    storeName = 'Get Connected';
    customerName = document.getElementById('ws-acc-billto-name')?.value || prof.billTo?.name || 'Customer';
  } else if (p === 'ws_dev') {
    storeName = 'Get Connected';
    customerName = document.getElementById('ws-dev-billto-name')?.value || prof.billTo?.name || 'Customer';
  }

  // Extract clean store name (e.g. "I Digital Fun – Thurles" -> "Thurles")
  let cleanStore = storeName.trim();
  if (typeof STORES !== 'undefined' && Array.isArray(STORES)) {
    for (const s of STORES) {
      if (cleanStore.toLowerCase().includes(s.name.toLowerCase()) || 
          cleanStore.toLowerCase().includes(s.city.split(',')[0].toLowerCase())) {
        cleanStore = s.city.split(',')[0].trim();
        break;
      }
    }
  }

  cleanStore = cleanStore.replace(/^I\s*Digital\s*Fun\s*[-–—]?\s*/i, '').trim();
  cleanStore = cleanStore.replace(/\s*\([^)]*\)$/, '').trim();
  if (!cleanStore) cleanStore = storeName.trim() || 'Store';
  
  let cleanCustomer = customerName.trim() || 'Customer';

  return `VAT Invoice (${cleanStore}) - ${cleanCustomer}`;
}

function exportInvoiceCSV() {
  const p = state.activeSub;
  const prof = state.profiles[p];
  const calc = calculateProfileTotals(p);
  const fileName = getInvoiceFormattedName();
  
  let csv = 'Item Description,Quantity,Amount (EUR),Total (EUR)\r\n';
  prof.items.forEach(it => {
    const title = it.model || it.desc || 'Item';
    csv += `"${title.replace(/"/g, '""')}",${it.qty || 1},${Number(it.amount || it.grossPrice || 0).toFixed(2)},${Number(it.lineTotal || 0).toFixed(2)}\r\n`;
  });
  csv += `\r\nSubtotal,,,${calc.subtotal.toFixed(2)}\r\n`;
  csv += `Tax Rate (%),,,${calc.taxRate.toFixed(2)}%\r\n`;
  csv += `VAT Amount,,,${calc.vatAmount.toFixed(2)}\r\n`;
  csv += `Other Costs,,,${calc.otherCosts.toFixed(2)}\r\n`;
  csv += `Total Due,,,${calc.totalDue.toFixed(2)}\r\n`;

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${fileName}.csv`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('Exported CSV');
}

function exportInvoiceJSON() {
  const p = state.activeSub;
  const prof = state.profiles[p];
  const fileName = getInvoiceFormattedName();
  const jsonStr = JSON.stringify({ mainCat: state.activeMain, subCat: p, exportedAt: new Date(), ...prof }, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${fileName}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('Exported JSON');
}

function importInvoiceJSON(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const obj = JSON.parse(e.target.result);
      const targetSub = obj.subCat || 'ws_acc';
      state.profiles[targetSub] = { ...state.profiles[targetSub], ...obj };
      switchHierarchy(obj.mainCat || (targetSub.startsWith('ws_') ? 'wholesale' : 'retail'), targetSub);
      showToast('Invoice imported successfully!');
    } catch (err) {
      alert('Invalid JSON file');
    }
  };
  reader.readAsText(file);
}

function triggerPrint() {
  const originalTitle = document.title;
  const pdfName = getInvoiceFormattedName();

  document.title = pdfName;
  window.print();

  setTimeout(() => {
    document.title = originalTitle;
  }, 1200);
}

function showToast(msg) {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast-msg';
  toast.innerHTML = `
    <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
    <span>${escapeHtml(msg)}</span>
  `;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.25s ease';
    setTimeout(() => toast.remove(), 250);
  }, 2400);
}

function openSavedModal() {
  renderSavedInvoicesModal();
  const m = document.getElementById('saved-invoices-modal');
  if (m) {
    m.classList.remove('hidden');
    m.classList.add('flex');
  }
}

function closeSavedModal() {
  const m = document.getElementById('saved-invoices-modal');
  if (m) {
    m.classList.add('hidden');
    m.classList.remove('flex');
  }
}

function renderSavedInvoicesModal() {
  const list = document.getElementById('saved-invoices-list');
  if (!list) return;
  
  if (state.savedInvoices.length === 0) {
    list.innerHTML = '<div class="text-center text-gray-400 py-8 text-sm">No saved invoices yet. Click "Save Draft" to save.</div>';
    return;
  }

  list.innerHTML = '';
  state.savedInvoices.forEach(inv => {
    const div = document.createElement('div');
    div.className = 'flex items-center justify-between p-3 bg-slate-800 hover:bg-slate-700/80 rounded-lg cursor-pointer transition border border-slate-700';
    div.onclick = () => loadInvoiceRecord(inv.id);
    div.innerHTML = `
      <div class="flex items-center gap-3">
        <span class="px-2 py-0.5 text-xs font-semibold rounded bg-blue-500/20 text-blue-300 border border-blue-500/30 uppercase">
          ${inv.subCat.replace('_', ' ')}
        </span>
        <div>
          <div class="font-semibold text-white text-sm">${escapeHtml(inv.invoiceNo)} - ${escapeHtml(inv.clientName)}</div>
          <div class="text-xs text-slate-400">${inv.date} • Total: ${formatEuro(inv.total)}</div>
        </div>
      </div>
      <button onclick="deleteSavedInvoiceRecord('${inv.id}', event)" title="Delete" class="text-slate-400 hover:text-rose-400 p-1.5 rounded hover:bg-slate-600/50">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
      </button>
    `;
    list.appendChild(div);
  });
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}

// Event Listeners
function setupEventListeners() {
  // Wholesale Accessories
  document.getElementById('ws-acc-input-date')?.addEventListener('change', (e) => {
    state.profiles.ws_acc.date = e.target.value;
    document.getElementById('ws-acc-disp-date').textContent = formatDateDisplay(e.target.value);
  });
  document.getElementById('ws-acc-input-invoiceno')?.addEventListener('input', (e) => { state.profiles.ws_acc.invoiceNo = e.target.value; adjustInputWidth(e.target); });
  document.getElementById('ws-acc-input-payment')?.addEventListener('input', (e) => { state.profiles.ws_acc.paymentMethod = e.target.value; });
  document.getElementById('ws-acc-billto-name')?.addEventListener('input', (e) => { state.profiles.ws_acc.billTo.name = e.target.value; });
  document.getElementById('ws-acc-billto-address')?.addEventListener('input', (e) => { state.profiles.ws_acc.billTo.address = e.target.value; });
  document.getElementById('ws-acc-billto-phone')?.addEventListener('input', (e) => { state.profiles.ws_acc.billTo.phone = e.target.value; });
  document.getElementById('ws-acc-billto-email')?.addEventListener('input', (e) => { state.profiles.ws_acc.billTo.email = e.target.value; });
  document.getElementById('ws-acc-billto-vat')?.addEventListener('input', (e) => { state.profiles.ws_acc.billTo.vatNo = e.target.value; });
  wireTaxRateInput('ws_acc');
  document.getElementById('ws_acc-other-input')?.addEventListener('input', (e) => { state.profiles.ws_acc.otherCosts = parseNum(e.target.value); updateSummaryDisplays('ws_acc'); });

  // Wholesale Devices
  document.getElementById('ws-dev-input-date')?.addEventListener('change', (e) => {
    state.profiles.ws_dev.date = e.target.value;
    document.getElementById('ws-dev-disp-date').textContent = formatDateDisplay(e.target.value);
  });
  document.getElementById('ws-dev-input-invoiceno')?.addEventListener('input', (e) => { state.profiles.ws_dev.invoiceNo = e.target.value; adjustInputWidth(e.target); });
  document.getElementById('ws-dev-input-payment')?.addEventListener('input', (e) => { state.profiles.ws_dev.paymentMethod = e.target.value; });
  document.getElementById('ws-dev-billto-name')?.addEventListener('input', (e) => { state.profiles.ws_dev.billTo.name = e.target.value; });
  document.getElementById('ws-dev-billto-address')?.addEventListener('input', (e) => { state.profiles.ws_dev.billTo.address = e.target.value; });
  document.getElementById('ws-dev-billto-phone')?.addEventListener('input', (e) => { state.profiles.ws_dev.billTo.phone = e.target.value; });
  document.getElementById('ws-dev-billto-email')?.addEventListener('input', (e) => { state.profiles.ws_dev.billTo.email = e.target.value; });
  document.getElementById('ws-dev-billto-vat')?.addEventListener('input', (e) => { state.profiles.ws_dev.billTo.vatNo = e.target.value; });
  wireTaxRateInput('ws_dev');
  document.getElementById('ws_dev-other-input')?.addEventListener('input', (e) => { state.profiles.ws_dev.otherCosts = parseNum(e.target.value); updateSummaryDisplays('ws_dev'); });

  // Retail Accessories
  document.getElementById('rt-acc-input-date')?.addEventListener('change', (e) => {
    state.profiles.rt_acc.date = e.target.value;
    document.getElementById('rt-acc-disp-date').textContent = formatDateDisplay(e.target.value);
  });
  document.getElementById('rt-acc-input-ref')?.addEventListener('input', (e) => { state.profiles.rt_acc.reference = e.target.value; adjustInputWidth(e.target); });
  document.getElementById('rt-acc-billfrom-name')?.addEventListener('input', (e) => { state.profiles.rt_acc.billFrom.name = e.target.value; });
  document.getElementById('rt-acc-billfrom-address')?.addEventListener('input', (e) => { state.profiles.rt_acc.billFrom.address = e.target.value; });
  document.getElementById('rt-acc-billfrom-phone')?.addEventListener('input', (e) => { state.profiles.rt_acc.billFrom.phone = e.target.value; });
  document.getElementById('rt-acc-billto-name')?.addEventListener('input', (e) => { state.profiles.rt_acc.billTo.name = e.target.value; });
  document.getElementById('rt-acc-billto-email')?.addEventListener('input', (e) => { state.profiles.rt_acc.billTo.email = e.target.value; });
  document.getElementById('rt-acc-billto-phone')?.addEventListener('input', (e) => { state.profiles.rt_acc.billTo.phone = e.target.value; });
  wireTaxRateInput('rt_acc');
  document.getElementById('rt_acc-other-input')?.addEventListener('input', (e) => { state.profiles.rt_acc.otherCosts = parseNum(e.target.value); updateSummaryDisplays('rt_acc'); });

  // Retail Devices
  document.getElementById('rt-dev-input-date')?.addEventListener('change', (e) => {
    state.profiles.rt_dev.date = e.target.value;
    document.getElementById('rt-dev-disp-date').textContent = formatDateDisplay(e.target.value);
  });
  document.getElementById('rt-dev-input-ref')?.addEventListener('input', (e) => { state.profiles.rt_dev.reference = e.target.value; adjustInputWidth(e.target); });
  document.getElementById('rt-dev-billfrom-name')?.addEventListener('input', (e) => { state.profiles.rt_dev.billFrom.name = e.target.value; });
  document.getElementById('rt-dev-billfrom-address')?.addEventListener('input', (e) => { state.profiles.rt_dev.billFrom.address = e.target.value; });
  document.getElementById('rt-dev-billfrom-phone')?.addEventListener('input', (e) => { state.profiles.rt_dev.billFrom.phone = e.target.value; });
  document.getElementById('rt-dev-billto-name')?.addEventListener('input', (e) => { state.profiles.rt_dev.billTo.name = e.target.value; });
  document.getElementById('rt-dev-billto-email')?.addEventListener('input', (e) => { state.profiles.rt_dev.billTo.email = e.target.value; });
  document.getElementById('rt-dev-billto-phone')?.addEventListener('input', (e) => { state.profiles.rt_dev.billTo.phone = e.target.value; });
  document.getElementById('rt-dev-billto-address')?.addEventListener('input', (e) => { state.profiles.rt_dev.billTo.address = e.target.value; });
  wireTaxRateInput('rt_dev');
  document.getElementById('rt_dev-other-input')?.addEventListener('input', (e) => { state.profiles.rt_dev.otherCosts = parseNum(e.target.value); updateSummaryDisplays('rt_dev'); });

  window.addEventListener('beforeprint', () => {
    window._prevDocTitle = document.title;
    document.title = getInvoiceFormattedName();
  });

  window.addEventListener('afterprint', () => {
    if (window._prevDocTitle) {
      document.title = window._prevDocTitle;
    }
  });

  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
      e.preventDefault();
      triggerPrint();
    }
  });
}
