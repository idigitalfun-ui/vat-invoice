/**
 * VAT Invoice Studio - 4 Profile VAT Invoicing & AI Document Scanner
 * Exact Irish VAT precision + Client-Side Photo OCR & Excel Parsing
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

// 4 Preset Item Catalogs
const CATALOGS = {
  wholesaleGC: [
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
  retailIDFL: [
    { desc: "00SSTG002 - TG Samsung A10/A20/A30/A50/A51", grossPrice: 15.00 },
    { desc: "Tempered Glass Screen Protector - iPhone Series", grossPrice: 15.00 },
    { desc: "20W PD USB-C Fast Charging Adapter", grossPrice: 15.00 },
    { desc: "Type-C to Lightning Fast Cable 1m", grossPrice: 10.00 },
    { desc: "Type-C to Type-C Fast Cable 1m", grossPrice: 10.00 },
    { desc: "Shockproof Clear Hybrid Armor Case", grossPrice: 15.00 },
    { desc: "Magnetic MagSafe Fast Wireless Car Mount", grossPrice: 25.00 },
    { desc: "TWS True Wireless Bluetooth Earbuds Pro", grossPrice: 30.00 }
  ],
  accessoriesSpecial: [
    { sku: "ACC-TG-01", desc: "9D Full Glue Tempered Glass (iPhone Series)", grossPrice: 15.00 },
    { sku: "ACC-TG-02", desc: "Samsung Edge Curved Tempered Glass", grossPrice: 15.00 },
    { sku: "CHG-20W", desc: "20W Super Fast PD Power Adapter", grossPrice: 15.00 },
    { sku: "CHG-65W", desc: "65W GaN Triple-Port Laptop & Phone Charger", grossPrice: 45.00 },
    { sku: "CBL-TC-1M", desc: "Heavy Duty Braided USB-C 100W Cable 1.2m", grossPrice: 12.00 },
    { sku: "CBL-LT-1M", desc: "MFi Certified Braided Lightning Cable 1.2m", grossPrice: 12.00 },
    { sku: "PB-10K", desc: "10,000mAh Magnetic Wireless Power Bank", grossPrice: 35.00 },
    { sku: "HLD-MAG", desc: "15W MagSafe Auto-Clamping Car Charger Mount", grossPrice: 28.00 }
  ],
  devicesSales: [
    { model: "Apple iPhone 11 64GB Black", imei: "356789104523901", grade: "Grade A", warranty: "12 Months", grossPrice: 249.00 },
    { model: "Apple iPhone 12 128GB Blue", imei: "358901237645129", grade: "Grade A", warranty: "12 Months", grossPrice: 349.00 },
    { model: "Apple iPhone 13 128GB Midnight", imei: "359012348756230", grade: "Grade A", warranty: "12 Months", grossPrice: 449.00 },
    { model: "Samsung Galaxy A14 64GB Black", imei: "354567890123456", grade: "Brand New Boxed", warranty: "24 Months", grossPrice: 149.00 },
    { model: "Samsung Galaxy A54 5G 128GB Lime", imei: "357890123456789", grade: "Brand New Boxed", warranty: "24 Months", grossPrice: 299.00 },
    { model: "Apple iPad 10th Gen 64GB WiFi Silver", imei: "DMPX89012345", grade: "Grade A", warranty: "12 Months", grossPrice: 389.00 }
  ]
};

// Application State
const state = {
  activeProfile: 'wholesale', // 'wholesale', 'retail', 'accessories', 'devices'
  scannedItemsBuffer: [],
  profiles: {
    wholesale: {
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
    retail: {
      reference: 'SALE/POS250582',
      date: '2026-08-24',
      selectedStoreId: 5,
      activeBrand: 'IDFL',
      billFrom: {
        name: 'I Digital Fun Thurles',
        address: 'Thurles Shopping Centre, Unit 10 Slievenamon Rd, Thurles Townparks, Thurles, Co. Tipperary, E41 E674',
        phone: '+353 (0)87 314 1419',
        email: 'INFO@IDFLMOBILE.COM'
      },
      billTo: {
        name: 'Nigel Quinn',
        email: 'nigel.quinn@hotmail.com',
        phone: '',
        address: '',
        vatNo: ''
      },
      items: [],
      taxRate: 23.00,
      otherCosts: 0.00
    },
    accessories: {
      invoiceNo: 'ACC-89412',
      date: '2026-09-03',
      brand: 'IDFL',
      billTo: {
        name: 'Tech Fix Solutions',
        address: 'Main Street, Portlaoise, Co. Laois',
        phone: '+353 87 223 4455',
        email: 'orders@techfix.ie',
        vatNo: 'IE8273645W'
      },
      items: [],
      taxRate: 23.00,
      otherCosts: 0.00
    },
    devices: {
      invoiceNo: 'DEV-2026-501',
      date: '2026-09-03',
      salesRep: 'POS Terminal 1',
      billTo: {
        name: 'Sean O'Connor',
        address: '14 Elm Court, Portlaoise, Co. Laois',
        phone: '085 123 4567',
        email: 'sean.oconnor@gmail.com'
      },
      items: [],
      taxRate: 23.00,
      otherCosts: 0.00
    }
  },
  savedInvoices: []
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  loadSavedInvoicesFromStorage();
  populateStoreDropdowns();
  loadAllSampleData();
  setupEventListeners();
  setupScannerHandlers();
  renderActiveProfile();
});

// Format Date as DD/MM/YYYY
function formatDateDisplay(isoDate) {
  if (!isoDate) return '';
  const parts = isoDate.split('-');
  if (parts.length === 3) {
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
  }
  return isoDate;
}

// Format Euro Currency
function formatEuro(num) {
  const val = Number(num) || 0;
  return '€ ' + val.toFixed(2);
}

// Parse Number safely
function parseNum(val) {
  if (typeof val === 'number') return val;
  if (!val) return 0;
  const clean = String(val).replace(/[^0-9.-]/g, '');
  return parseFloat(clean) || 0;
}

function round2(num) {
  return Math.round((Number(num) + Number.EPSILON) * 100) / 100;
}

// Populate Store Selectors
function populateStoreDropdowns() {
  const billFromSelect = document.getElementById('retail-store-select');
  const billToSelectWholesale = document.getElementById('wholesale-store-select');
  
  if (billFromSelect) {
    billFromSelect.innerHTML = '<option value="">-- Choose Branch (13 Stores) --</option>';
    STORES.forEach(s => {
      const opt = document.createElement('option');
      opt.value = s.id;
      opt.textContent = `${s.name} (${s.city})`;
      if (s.id === state.profiles.retail.selectedStoreId) opt.selected = true;
      billFromSelect.appendChild(opt);
    });
  }

  if (billToSelectWholesale) {
    billToSelectWholesale.innerHTML = '<option value="">-- Select Customer / Store Preset --</option>';
    STORES.forEach(s => {
      const opt = document.createElement('option');
      opt.value = s.id;
      opt.textContent = `${s.name} - ${s.city}`;
      billToSelectWholesale.appendChild(opt);
    });
  }
}

// Load All Samples
function loadAllSampleData() {
  state.profiles.wholesale.items = JSON.parse(JSON.stringify(CATALOGS.wholesaleGC));
  
  state.profiles.retail.items = [
    { desc: '00SSTG002 - TG Samsung A10/A20/A30/A50/A51', qty: 1, grossPrice: 15.00 }
  ];

  state.profiles.accessories.items = [
    { sku: 'ACC-TG-01', desc: '9D Full Glue Tempered Glass (iPhone Series)', qty: 2, grossPrice: 15.00 },
    { sku: 'CHG-20W', desc: '20W Super Fast PD Power Adapter', qty: 1, grossPrice: 15.00 }
  ];

  state.profiles.devices.items = [
    { model: 'Apple iPhone 13 128GB Midnight', imei: '359012348756230', grade: 'Grade A (Unlocked)', warranty: '12 Months', qty: 1, grossPrice: 449.00 }
  ];
}

// Switch Profile Tab
function switchProfile(profileKey) {
  state.activeProfile = profileKey;
  
  ['wholesale', 'retail', 'accessories', 'devices'].forEach(key => {
    const btn = document.getElementById(`tab-btn-${key}`);
    const canvas = document.getElementById(`canvas-${key}`);
    const controls = document.getElementById(`controls-${key}`);
    
    if (key === profileKey) {
      btn?.classList.add('active-tab');
      canvas?.classList.remove('hidden');
      controls?.classList.remove('hidden');
    } else {
      btn?.classList.remove('active-tab');
      canvas?.classList.add('hidden');
      controls?.classList.add('hidden');
    }
  });

  renderActiveProfile();
}

// Exact Irish VAT Calculation Engine
function calculateProfileTotals(profileKey) {
  const prof = state.profiles[profileKey];
  const taxRate = parseNum(prof.taxRate) || 23;
  const taxMultiplier = 1 + (taxRate / 100);
  const otherCosts = parseNum(prof.otherCosts) || 0;

  let subtotal = 0;
  let totalGross = 0;

  if (profileKey === 'wholesale') {
    prof.items.forEach(it => {
      const qty = parseNum(it.qty) || 1;
      const amount = parseNum(it.amount) || 0;
      const lineTotal = round2(qty * amount);
      it.lineTotal = lineTotal;
      subtotal += lineTotal;
    });
    subtotal = round2(subtotal);
    const vatAmount = round2(subtotal * (taxRate / 100));
    const totalDue = round2(subtotal + vatAmount + otherCosts);
    return { subtotal, taxRate, vatAmount, otherCosts, totalDue };
  } else {
    prof.items.forEach(it => {
      const qty = parseNum(it.qty) || 1;
      const gross = parseNum(it.grossPrice) || 0;
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
  }
}

// Master Render
function renderActiveProfile() {
  const p = state.activeProfile;
  if (p === 'wholesale') renderWholesale();
  else if (p === 'retail') renderRetail();
  else if (p === 'accessories') renderAccessories();
  else if (p === 'devices') renderDevices();
}

// 1. Render Wholesale
function renderWholesale() {
  const data = state.profiles.wholesale;
  const calc = calculateProfileTotals('wholesale');

  document.getElementById('ws-disp-date').textContent = formatDateDisplay(data.date);
  document.getElementById('ws-input-date').value = data.date;
  document.getElementById('ws-input-invoiceno').value = data.invoiceNo;
  document.getElementById('ws-input-payment').value = data.paymentMethod;

  document.getElementById('ws-billto-name').value = data.billTo.name || '';
  document.getElementById('ws-billto-address').value = data.billTo.address || '';
  document.getElementById('ws-billto-phone').value = data.billTo.phone || '';
  document.getElementById('ws-billto-email').value = data.billTo.email || '';
  document.getElementById('ws-billto-vat').value = data.billTo.vatNo || '';

  const tbody = document.getElementById('ws-items-tbody');
  tbody.innerHTML = '';

  data.items.forEach((item, index) => {
    const tr = document.createElement('tr');
    tr.className = 'item-row';
    tr.innerHTML = `
      <td class="row-actions-cell no-print">
        <div class="row-actions">
          <button onclick="deleteRow('wholesale', ${index})" title="Delete" class="text-rose-500 hover:text-rose-700 p-0.5">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
          </button>
          <button onclick="duplicateRow('wholesale', ${index})" title="Duplicate" class="text-blue-500 hover:text-blue-700 p-0.5">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
          </button>
        </div>
      </td>
      <td style="width: 58%;">
        <input type="text" class="editable-cell-input font-medium" value="${escapeHtml(item.desc)}" 
               oninput="updateItemField('wholesale', ${index}, 'desc', this.value)" placeholder="Item Description">
      </td>
      <td style="width: 10%; text-align: center;">
        <input type="number" step="1" min="1" class="editable-cell-input text-center mono font-medium" 
               value="${item.qty}" oninput="updateItemCalcField('wholesale', ${index}, 'qty', this.value)">
      </td>
      <td style="width: 16%; text-align: right;">
        <div class="flex items-center justify-end">
          <span class="text-gray-500 mr-1 text-xs">€</span>
          <input type="number" step="0.01" min="0" class="editable-cell-input text-right mono font-medium" 
                 value="${Number(item.amount).toFixed(2)}" oninput="updateItemCalcField('wholesale', ${index}, 'amount', this.value)">
        </div>
      </td>
      <td style="width: 16%; text-align: right; font-weight: 600; font-family: 'JetBrains Mono', monospace;" id="wholesale-linetotal-${index}">
        ${formatEuro(item.lineTotal)}
      </td>
    `;
    tbody.appendChild(tr);
  });

  updateSummaryDisplays('wholesale', calc);
}

// 2. Render Retail
function renderRetail() {
  const data = state.profiles.retail;
  const calc = calculateProfileTotals('retail');

  const isGC = data.activeBrand === 'GC';
  const headerElem = document.getElementById('retail-header-banner');
  const logoElem = document.getElementById('retail-logo-img');
  const brandTextElem = document.getElementById('retail-brand-text');
  const contactTextElem = document.getElementById('retail-header-contact');
  const noticeContactElem = document.getElementById('retail-notice-contact');

  if (isGC) {
    headerElem.className = 'banner-wholesale-gc';
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
    headerElem.className = 'banner-retail-idfl';
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

  document.getElementById('rt-input-ref').value = data.reference;
  document.getElementById('rt-disp-date').textContent = formatDateDisplay(data.date);
  document.getElementById('rt-input-date').value = data.date;

  document.getElementById('rt-billfrom-name').value = data.billFrom.name || '';
  document.getElementById('rt-billfrom-address').value = data.billFrom.address || '';
  document.getElementById('rt-billfrom-phone').value = data.billFrom.phone || '';

  document.getElementById('rt-billto-name').value = data.billTo.name || '';
  document.getElementById('rt-billto-email').value = data.billTo.email || '';
  document.getElementById('rt-billto-phone').value = data.billTo.phone || '';
  document.getElementById('rt-billto-address').value = data.billTo.address || '';

  const tbody = document.getElementById('rt-items-tbody');
  tbody.innerHTML = '';

  data.items.forEach((item, index) => {
    const tr = document.createElement('tr');
    tr.className = 'item-row';
    const displayGross = Number(item.grossPrice || 0).toFixed(2);

    tr.innerHTML = `
      <td class="row-actions-cell no-print">
        <div class="row-actions">
          <button onclick="deleteRow('retail', ${index})" title="Delete" class="text-rose-500 hover:text-rose-700 p-0.5">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
          </button>
          <button onclick="duplicateRow('retail', ${index})" title="Duplicate" class="text-blue-500 hover:text-blue-700 p-0.5">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
          </button>
        </div>
      </td>
      <td style="width: 58%;">
        <input type="text" class="editable-cell-input font-medium" value="${escapeHtml(item.desc)}" 
               oninput="updateItemField('retail', ${index}, 'desc', this.value)" placeholder="Item Description">
      </td>
      <td style="width: 10%; text-align: center;">
        <input type="number" step="1" min="1" class="editable-cell-input text-center mono font-medium" 
               value="${item.qty}" oninput="updateItemCalcField('retail', ${index}, 'qty', this.value)">
      </td>
      <td style="width: 16%; text-align: right;">
        <div class="flex items-center justify-end" title="Enter Retail Price (e.g. 15) -> Net = 15 / 1.23 = 12.20">
          <span class="text-gray-500 mr-1 text-xs">€</span>
          <input type="number" step="0.01" min="0" class="editable-cell-input text-right mono font-medium" 
                 value="${displayGross}" placeholder="15.00"
                 oninput="updateItemGrossField('retail', ${index}, this.value)">
        </div>
      </td>
      <td style="width: 16%; text-align: right; font-weight: 600; font-family: 'JetBrains Mono', monospace;" id="retail-linetotal-${index}">
        ${formatEuro(item.lineTotal)}
      </td>
    `;
    tbody.appendChild(tr);
  });

  updateSummaryDisplays('retail', calc);
}

// 3. Render Accessories
function renderAccessories() {
  const data = state.profiles.accessories;
  const calc = calculateProfileTotals('accessories');

  document.getElementById('acc-disp-date').textContent = formatDateDisplay(data.date);
  document.getElementById('acc-input-date').value = data.date;
  document.getElementById('acc-input-invoiceno').value = data.invoiceNo;

  document.getElementById('acc-billto-name').value = data.billTo.name || '';
  document.getElementById('acc-billto-address').value = data.billTo.address || '';
  document.getElementById('acc-billto-phone').value = data.billTo.phone || '';
  document.getElementById('acc-billto-email').value = data.billTo.email || '';
  document.getElementById('acc-billto-vat').value = data.billTo.vatNo || '';

  const tbody = document.getElementById('acc-items-tbody');
  tbody.innerHTML = '';

  data.items.forEach((item, index) => {
    const tr = document.createElement('tr');
    tr.className = 'item-row';
    const displayGross = Number(item.grossPrice || 0).toFixed(2);

    tr.innerHTML = `
      <td class="row-actions-cell no-print">
        <div class="row-actions">
          <button onclick="deleteRow('accessories', ${index})" title="Delete" class="text-rose-500 hover:text-rose-700 p-0.5">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
          </button>
        </div>
      </td>
      <td style="width: 18%;">
        <input type="text" class="editable-cell-input font-mono text-xs text-teal-800" value="${escapeHtml(item.sku || '')}" 
               oninput="updateItemField('accessories', ${index}, 'sku', this.value)" placeholder="SKU / Barcode">
      </td>
      <td style="width: 44%;">
        <input type="text" class="editable-cell-input font-medium" value="${escapeHtml(item.desc)}" 
               oninput="updateItemField('accessories', ${index}, 'desc', this.value)" placeholder="Accessory & Model">
      </td>
      <td style="width: 8%; text-align: center;">
        <input type="number" step="1" min="1" class="editable-cell-input text-center mono font-medium" 
               value="${item.qty}" oninput="updateItemCalcField('accessories', ${index}, 'qty', this.value)">
      </td>
      <td style="width: 15%; text-align: right;">
        <div class="flex items-center justify-end">
          <span class="text-gray-500 mr-1 text-xs">€</span>
          <input type="number" step="0.01" min="0" class="editable-cell-input text-right mono font-medium" 
                 value="${displayGross}" oninput="updateItemGrossField('accessories', ${index}, this.value)">
        </div>
      </td>
      <td style="width: 15%; text-align: right; font-weight: 600; font-family: 'JetBrains Mono', monospace;" id="accessories-linetotal-${index}">
        ${formatEuro(item.lineTotal)}
      </td>
    `;
    tbody.appendChild(tr);
  });

  updateSummaryDisplays('accessories', calc);
}

// 4. Render Devices
function renderDevices() {
  const data = state.profiles.devices;
  const calc = calculateProfileTotals('devices');

  document.getElementById('dev-disp-date').textContent = formatDateDisplay(data.date);
  document.getElementById('dev-input-date').value = data.date;
  document.getElementById('dev-input-invoiceno').value = data.invoiceNo;

  document.getElementById('dev-billto-name').value = data.billTo.name || '';
  document.getElementById('dev-billto-address').value = data.billTo.address || '';
  document.getElementById('dev-billto-phone').value = data.billTo.phone || '';
  document.getElementById('dev-billto-email').value = data.billTo.email || '';

  const tbody = document.getElementById('dev-items-tbody');
  tbody.innerHTML = '';

  data.items.forEach((item, index) => {
    const tr = document.createElement('tr');
    tr.className = 'item-row';
    const displayGross = Number(item.grossPrice || 0).toFixed(2);

    tr.innerHTML = `
      <td class="row-actions-cell no-print">
        <div class="row-actions">
          <button onclick="deleteRow('devices', ${index})" title="Delete" class="text-rose-500 hover:text-rose-700 p-0.5">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
          </button>
        </div>
      </td>
      <td style="width: 32%;">
        <input type="text" class="editable-cell-input font-medium" value="${escapeHtml(item.model || item.desc || '')}" 
               oninput="updateItemField('devices', ${index}, 'model', this.value)" placeholder="Device Model & Specs">
      </td>
      <td style="width: 22%;">
        <input type="text" class="editable-cell-input font-mono text-[10px] text-indigo-900" value="${escapeHtml(item.imei || '')}" 
               oninput="updateItemField('devices', ${index}, 'imei', this.value)" placeholder="IMEI / Serial No">
      </td>
      <td style="width: 14%;">
        <input type="text" class="editable-cell-input text-[10px]" value="${escapeHtml(item.grade || 'Grade A')}" 
               oninput="updateItemField('devices', ${index}, 'grade', this.value)" placeholder="Condition">
      </td>
      <td style="width: 14%;">
        <input type="text" class="editable-cell-input text-[10px]" value="${escapeHtml(item.warranty || '12M Warranty')}" 
               oninput="updateItemField('devices', ${index}, 'warranty', this.value)" placeholder="Warranty">
      </td>
      <td style="width: 18%; text-align: right;">
        <div class="flex items-center justify-end">
          <span class="text-gray-500 mr-1 text-xs">€</span>
          <input type="number" step="0.01" min="0" class="editable-cell-input text-right mono font-medium" 
                 value="${displayGross}" oninput="updateItemGrossField('devices', ${index}, this.value)">
        </div>
      </td>
      <td style="width: 18%; text-align: right; font-weight: 600; font-family: 'JetBrains Mono', monospace;" id="devices-linetotal-${index}">
        ${formatEuro(item.lineTotal)}
      </td>
    `;
    tbody.appendChild(tr);
  });

  updateSummaryDisplays('devices', calc);
}

// Summary updater
function updateSummaryDisplays(profileKey, calc) {
  if (!calc) calc = calculateProfileTotals(profileKey);
  const prefix = profileKey === 'wholesale' ? 'ws' : (profileKey === 'retail' ? 'rt' : (profileKey === 'accessories' ? 'acc' : 'dev'));

  const subtotalElem = document.getElementById(`${prefix}-subtotal-val`);
  const taxrateElem = document.getElementById(`${prefix}-taxrate-input`);
  const vatElem = document.getElementById(`${prefix}-vat-val`);
  const otherElem = document.getElementById(`${prefix}-other-input`);
  const totalElem = document.getElementById(`${prefix}-totaldue-val`);

  if (subtotalElem) subtotalElem.textContent = formatEuro(calc.subtotal);
  if (taxrateElem) taxrateElem.value = Number(calc.taxRate).toFixed(2);
  if (vatElem) vatElem.textContent = formatEuro(calc.vatAmount);
  if (otherElem) otherElem.value = Number(calc.otherCosts).toFixed(2);
  if (totalElem) totalElem.textContent = formatEuro(calc.totalDue);
}

// Field updates in place
function updateItemField(profileKey, index, field, value) {
  const prof = state.profiles[profileKey];
  if (prof && prof.items[index]) {
    prof.items[index][field] = value;
  }
}

function updateItemGrossField(profileKey, index, value) {
  const prof = state.profiles[profileKey];
  if (!prof || !prof.items[index]) return;
  prof.items[index].grossPrice = parseNum(value);

  const calc = calculateProfileTotals(profileKey);
  const item = prof.items[index];
  const linetotalCell = document.getElementById(`${profileKey}-linetotal-${index}`);
  if (linetotalCell) linetotalCell.textContent = formatEuro(item.lineTotal);

  updateSummaryDisplays(profileKey, calc);
}

function updateItemCalcField(profileKey, index, field, value) {
  const prof = state.profiles[profileKey];
  if (!prof || !prof.items[index]) return;
  prof.items[index][field] = parseNum(value);

  const calc = calculateProfileTotals(profileKey);
  const item = prof.items[index];
  const linetotalCell = document.getElementById(`${profileKey}-linetotal-${index}`);
  if (linetotalCell) linetotalCell.textContent = formatEuro(item.lineTotal);

  updateSummaryDisplays(profileKey, calc);
}

// Row Handlers
function addRow(profileKey, customItem = null) {
  const prof = state.profiles[profileKey];
  if (!prof) return;

  if (customItem) {
    prof.items.push(JSON.parse(JSON.stringify(customItem)));
  } else {
    if (profileKey === 'wholesale') {
      prof.items.push({ desc: 'New Wholesale Item', qty: 1, amount: 0.00 });
    } else if (profileKey === 'accessories') {
      prof.items.push({ sku: 'ACC-NEW', desc: 'New Phone Accessory', qty: 1, grossPrice: 15.00 });
    } else if (profileKey === 'devices') {
      prof.items.push({ model: 'New Device Handset', imei: '', grade: 'Grade A', warranty: '12 Months', qty: 1, grossPrice: 199.00 });
    } else {
      prof.items.push({ desc: 'New Retail Item', qty: 1, grossPrice: 15.00 });
    }
  }

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

  if (catalogKey === 'wholesaleGC') addRow('wholesale', item);
  else if (catalogKey === 'retailIDFL') addRow('retail', item);
  else if (catalogKey === 'accessoriesSpecial') addRow('accessories', item);
  else if (catalogKey === 'devicesSales') addRow('devices', item);
}

function onStoreSelectChanged(profileKey, storeId) {
  const store = STORES.find(s => s.id === Number(storeId));
  if (!store) return;

  if (profileKey === 'retail') {
    state.profiles.retail.selectedStoreId = store.id;
    state.profiles.retail.activeBrand = store.brand;
    state.profiles.retail.billFrom = {
      name: store.name,
      address: store.address,
      phone: store.phone,
      email: store.email
    };
    renderRetail();
    showToast(`Branch selected: ${store.name}`);
  } else if (profileKey === 'wholesale') {
    state.profiles.wholesale.billTo = {
      name: store.name,
      address: store.address,
      phone: store.phone,
      email: store.email,
      vatNo: store.vat
    };
    renderWholesale();
    showToast(`Customer loaded: ${store.name}`);
  }
}

function setQuickTaxRate(rate) {
  const prof = state.profiles[state.activeProfile];
  if (!prof) return;
  prof.taxRate = Number(rate);
  renderActiveProfile();
  showToast(`Tax Rate set to ${rate}%`);
}

function generateNewInvoiceNumber() {
  const rand = Math.floor(100000 + Math.random() * 900000);
  const p = state.activeProfile;
  const prof = state.profiles[p];

  if (p === 'wholesale') {
    prof.invoiceNo = String(rand);
    document.getElementById('ws-input-invoiceno').value = rand;
  } else if (p === 'retail') {
    prof.reference = `SALE/POS${rand}`;
    document.getElementById('rt-input-ref').value = `SALE/POS${rand}`;
  } else if (p === 'accessories') {
    prof.invoiceNo = `ACC-${rand}`;
    document.getElementById('acc-input-invoiceno').value = `ACC-${rand}`;
  } else if (p === 'devices') {
    prof.invoiceNo = `DEV-${rand}`;
    document.getElementById('dev-input-invoiceno').value = `DEV-${rand}`;
  }
  showToast(`Generated Invoice # ${rand}`);
}

function resetCurrentInvoice() {
  if (confirm('Are you sure you want to reset the current invoice?')) {
    const prof = state.profiles[state.activeProfile];
    prof.items = [];
    prof.otherCosts = 0;
    renderActiveProfile();
    showToast('Invoice cleared');
  }
}

// =========================================================
// AI PHOTO OCR, EXCEL & CLIPBOARD SCANNER HANDLERS
// =========================================================
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
      if (e.dataTransfer.files.length > 0) {
        processUploadedFile(e.dataTransfer.files[0]);
      }
    });

    fileInput.addEventListener('change', (e) => {
      if (e.target.files.length > 0) {
        processUploadedFile(e.target.files[0]);
      }
    });
  }
}

function openScannerModal() {
  const select = document.getElementById('scanner-target-profile');
  if (select) select.value = state.activeProfile;
  document.getElementById('scanner-modal').classList.remove('hidden');
}

function closeScannerModal() {
  document.getElementById('scanner-modal').classList.add('hidden');
}

// Process Uploaded File (Photo image, Excel XLSX, or CSV)
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
      // Excel File Processing via SheetJS
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
      // Photo OCR Processing via Tesseract.js
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

// Parse Raw Text from Photo OCR
function parseOCRText(text) {
  const lines = text.split(/\r?\n/).map(l => l.trim()).filter(l => l.length > 0);
  const items = [];

  lines.forEach(line => {
    // Look for lines containing numbers or prices (€ or numbers with decimal)
    const priceMatch = line.match(/(?:€|EUR)?\s*(\d+[.,]\d{2})/i) || line.match(/\b(\d+)\s*(?:€|EUR)/i);
    const qtyMatch = line.match(/\b(\d+)\s*(?:x|pcs|pk|qty)?\b/i);

    if (priceMatch) {
      const price = parseFloat(priceMatch[1].replace(',', '.'));
      let qty = qtyMatch ? parseInt(qtyMatch[1], 10) : 1;
      if (qty > 1000) qty = 1;

      // Clean description
      let desc = line.replace(priceMatch[0], '').replace(/(?:€|EUR)/gi, '').trim();
      if (desc.length < 3) desc = 'Scanned Product / Item';

      items.push({
        desc: desc,
        qty: qty,
        grossPrice: price,
        amount: round2(price / 1.23)
      });
    }
  });

  if (items.length === 0) {
    // If no exact price regex match, create rows from lines
    lines.slice(0, 8).forEach(l => {
      items.push({ desc: l, qty: 1, grossPrice: 15.00, amount: 12.20 });
    });
  }

  showParsedPreview(items);
}

// Parse Excel rows
function parseTableRows(rows) {
  const items = [];
  rows.forEach(row => {
    if (!row || row.length === 0) return;
    const lineText = row.filter(c => c !== undefined && c !== null).join(' ');
    
    // Check if row has valid description and numeric price
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
        amount: round2(price / 1.23)
      });
    }
  });

  showParsedPreview(items);
}

// Show Parsed Preview Table
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
               oninput="state.scannedItemsBuffer[${index}].grossPrice = parseNum(this.value); state.scannedItemsBuffer[${index}].amount = round2(parseNum(this.value)/1.23)">
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

// Paste directly from Clipboard
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

// Apply Scanned Items to Selected Profile
function applyScannedItemsToProfile() {
  const targetProfile = document.getElementById('scanner-target-profile').value;
  const prof = state.profiles[targetProfile];
  if (!prof) return;

  if (state.scannedItemsBuffer.length === 0) {
    alert('No items found to import.');
    return;
  }

  state.scannedItemsBuffer.forEach(it => {
    if (targetProfile === 'wholesale') {
      prof.items.push({
        desc: it.desc,
        qty: it.qty || 1,
        amount: it.amount || round2(it.grossPrice / 1.23)
      });
    } else if (targetProfile === 'accessories') {
      prof.items.push({
        sku: 'ACC-SCAN',
        desc: it.desc,
        qty: it.qty || 1,
        grossPrice: it.grossPrice || round2(it.amount * 1.23)
      });
    } else if (targetProfile === 'devices') {
      prof.items.push({
        model: it.desc,
        imei: '',
        grade: 'Grade A',
        warranty: '12 Months',
        qty: it.qty || 1,
        grossPrice: it.grossPrice || round2(it.amount * 1.23)
      });
    } else {
      prof.items.push({
        desc: it.desc,
        qty: it.qty || 1,
        grossPrice: it.grossPrice || round2(it.amount * 1.23)
      });
    }
  });

  switchProfile(targetProfile);
  closeScannerModal();
  showToast(`✨ Successfully imported ${state.scannedItemsBuffer.length} items into ${targetProfile.toUpperCase()}!`);
}

// Storage History
function saveCurrentInvoice() {
  const p = state.activeProfile;
  const prof = state.profiles[p];
  const calc = calculateProfileTotals(p);
  const invoiceNo = prof.invoiceNo || prof.reference || 'INV-' + Math.floor(100000 + Math.random() * 900000);
  const clientName = prof.billTo?.name || 'Customer';

  const record = {
    id: 'INV_' + Date.now(),
    profile: p,
    invoiceNo: invoiceNo,
    clientName: clientName,
    date: prof.date,
    total: calc.totalDue,
    data: JSON.parse(JSON.stringify(prof)),
    timestamp: new Date().toISOString()
  };

  state.savedInvoices.unshift(record);
  localStorage.setItem('vat_invoices_history_v2', JSON.stringify(state.savedInvoices));
  showToast(`Invoice ${record.invoiceNo} saved!`);
  renderSavedInvoicesModal();
}

function loadSavedInvoicesFromStorage() {
  try {
    const raw = localStorage.getItem('vat_invoices_history_v2');
    if (raw) state.savedInvoices = JSON.parse(raw);
  } catch (e) {
    console.error('History error:', e);
  }
}

function loadInvoiceRecord(id) {
  const rec = state.savedInvoices.find(r => r.id === id);
  if (!rec) return;

  state.profiles[rec.profile] = JSON.parse(JSON.stringify(rec.data));
  switchProfile(rec.profile);
  closeSavedModal();
  showToast(`Loaded invoice ${rec.invoiceNo}`);
}

function deleteSavedInvoiceRecord(id, e) {
  if (e) e.stopPropagation();
  state.savedInvoices = state.savedInvoices.filter(r => r.id !== id);
  localStorage.setItem('vat_invoices_history_v2', JSON.stringify(state.savedInvoices));
  renderSavedInvoicesModal();
  showToast('Invoice deleted from history');
}

function exportInvoiceCSV() {
  const p = state.activeProfile;
  const prof = state.profiles[p];
  const calc = calculateProfileTotals(p);
  
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
  a.download = `${p}_invoice_${prof.invoiceNo || prof.reference}.csv`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('Exported CSV');
}

function exportInvoiceJSON() {
  const p = state.activeProfile;
  const prof = state.profiles[p];
  const jsonStr = JSON.stringify({ profile: p, exportedAt: new Date(), ...prof }, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${p}_invoice_${prof.invoiceNo || prof.reference}_${Date.now()}.json`;
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
      const targetProf = obj.profile || 'wholesale';
      state.profiles[targetProf] = { ...state.profiles[targetProf], ...obj };
      switchProfile(targetProf);
      showToast('Invoice imported successfully!');
    } catch (err) {
      alert('Invalid JSON file');
    }
  };
  reader.readAsText(file);
}

function triggerPrint() {
  window.print();
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
  document.getElementById('saved-invoices-modal').classList.remove('hidden');
}

function closeSavedModal() {
  document.getElementById('saved-invoices-modal').classList.add('hidden');
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
          ${inv.profile}
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
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Event Listeners
function setupEventListeners() {
  document.getElementById('ws-input-date')?.addEventListener('change', (e) => {
    state.profiles.wholesale.date = e.target.value;
    document.getElementById('ws-disp-date').textContent = formatDateDisplay(e.target.value);
  });
  document.getElementById('ws-input-invoiceno')?.addEventListener('input', (e) => {
    state.profiles.wholesale.invoiceNo = e.target.value;
  });
  document.getElementById('ws-input-payment')?.addEventListener('input', (e) => {
    state.profiles.wholesale.paymentMethod = e.target.value;
  });
  document.getElementById('ws-billto-name')?.addEventListener('input', (e) => {
    state.profiles.wholesale.billTo.name = e.target.value;
  });
  document.getElementById('ws-billto-address')?.addEventListener('input', (e) => {
    state.profiles.wholesale.billTo.address = e.target.value;
  });
  document.getElementById('ws-billto-phone')?.addEventListener('input', (e) => {
    state.profiles.wholesale.billTo.phone = e.target.value;
  });
  document.getElementById('ws-billto-email')?.addEventListener('input', (e) => {
    state.profiles.wholesale.billTo.email = e.target.value;
  });
  document.getElementById('ws-billto-vat')?.addEventListener('input', (e) => {
    state.profiles.wholesale.billTo.vatNo = e.target.value;
  });
  document.getElementById('ws-taxrate-input')?.addEventListener('input', (e) => {
    state.profiles.wholesale.taxRate = parseNum(e.target.value);
    updateSummaryDisplays('wholesale');
  });
  document.getElementById('ws-other-input')?.addEventListener('input', (e) => {
    state.profiles.wholesale.otherCosts = parseNum(e.target.value);
    updateSummaryDisplays('wholesale');
  });

  document.getElementById('rt-input-date')?.addEventListener('change', (e) => {
    state.profiles.retail.date = e.target.value;
    document.getElementById('rt-disp-date').textContent = formatDateDisplay(e.target.value);
  });
  document.getElementById('rt-input-ref')?.addEventListener('input', (e) => {
    state.profiles.retail.reference = e.target.value;
  });
  document.getElementById('rt-billfrom-name')?.addEventListener('input', (e) => {
    state.profiles.retail.billFrom.name = e.target.value;
  });
  document.getElementById('rt-billfrom-address')?.addEventListener('input', (e) => {
    state.profiles.retail.billFrom.address = e.target.value;
  });
  document.getElementById('rt-billfrom-phone')?.addEventListener('input', (e) => {
    state.profiles.retail.billFrom.phone = e.target.value;
  });
  document.getElementById('rt-billto-name')?.addEventListener('input', (e) => {
    state.profiles.retail.billTo.name = e.target.value;
  });
  document.getElementById('rt-billto-email')?.addEventListener('input', (e) => {
    state.profiles.retail.billTo.email = e.target.value;
  });
  document.getElementById('rt-billto-phone')?.addEventListener('input', (e) => {
    state.profiles.retail.billTo.phone = e.target.value;
  });
  document.getElementById('rt-billto-address')?.addEventListener('input', (e) => {
    state.profiles.retail.billTo.address = e.target.value;
  });
  document.getElementById('rt-taxrate-input')?.addEventListener('input', (e) => {
    state.profiles.retail.taxRate = parseNum(e.target.value);
    renderRetail();
  });
  document.getElementById('rt-other-input')?.addEventListener('input', (e) => {
    state.profiles.retail.otherCosts = parseNum(e.target.value);
    updateSummaryDisplays('retail');
  });

  document.getElementById('acc-input-date')?.addEventListener('change', (e) => {
    state.profiles.accessories.date = e.target.value;
    document.getElementById('acc-disp-date').textContent = formatDateDisplay(e.target.value);
  });
  document.getElementById('acc-input-invoiceno')?.addEventListener('input', (e) => {
    state.profiles.accessories.invoiceNo = e.target.value;
  });
  document.getElementById('acc-billto-name')?.addEventListener('input', (e) => {
    state.profiles.accessories.billTo.name = e.target.value;
  });
  document.getElementById('acc-billto-address')?.addEventListener('input', (e) => {
    state.profiles.accessories.billTo.address = e.target.value;
  });
  document.getElementById('acc-billto-phone')?.addEventListener('input', (e) => {
    state.profiles.accessories.billTo.phone = e.target.value;
  });
  document.getElementById('acc-billto-email')?.addEventListener('input', (e) => {
    state.profiles.accessories.billTo.email = e.target.value;
  });
  document.getElementById('acc-taxrate-input')?.addEventListener('input', (e) => {
    state.profiles.accessories.taxRate = parseNum(e.target.value);
    renderAccessories();
  });
  document.getElementById('acc-other-input')?.addEventListener('input', (e) => {
    state.profiles.accessories.otherCosts = parseNum(e.target.value);
    updateSummaryDisplays('accessories');
  });

  document.getElementById('dev-input-date')?.addEventListener('change', (e) => {
    state.profiles.devices.date = e.target.value;
    document.getElementById('dev-disp-date').textContent = formatDateDisplay(e.target.value);
  });
  document.getElementById('dev-input-invoiceno')?.addEventListener('input', (e) => {
    state.profiles.devices.invoiceNo = e.target.value;
  });
  document.getElementById('dev-billto-name')?.addEventListener('input', (e) => {
    state.profiles.devices.billTo.name = e.target.value;
  });
  document.getElementById('dev-billto-address')?.addEventListener('input', (e) => {
    state.profiles.devices.billTo.address = e.target.value;
  });
  document.getElementById('dev-billto-phone')?.addEventListener('input', (e) => {
    state.profiles.devices.billTo.phone = e.target.value;
  });
  document.getElementById('dev-billto-email')?.addEventListener('input', (e) => {
    state.profiles.devices.billTo.email = e.target.value;
  });
  document.getElementById('dev-taxrate-input')?.addEventListener('input', (e) => {
    state.profiles.devices.taxRate = parseNum(e.target.value);
    renderDevices();
  });
  document.getElementById('dev-other-input')?.addEventListener('input', (e) => {
    state.profiles.devices.otherCosts = parseNum(e.target.value);
    updateSummaryDisplays('devices');
  });

  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
      e.preventDefault();
      triggerPrint();
    }
  });
}
