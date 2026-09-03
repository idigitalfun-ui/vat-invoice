/**
 * VAT Invoice Web Application
 * Master engine for Get Connected (Wholesale) & I Digital Fun (Retail)
 */

// Store Master Directory from Shop Details.xlsx
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

// 4 Dedicated Catalogs (Wholesale Acc, Wholesale Dev, Retail Acc, Retail Dev)
const CATALOGS = {
  wholesaleAccessories: [
    { desc: "Gerlax GA-25YPS Charger (Bulk Pack)", qty: 50, amount: 4.00 },
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
    { desc: "Hoco CA52 Air Outlet In-Car Magnetic Holder", qty: 7, amount: 2.95 }
  ],
  wholesaleDevices: [
    { desc: "Apple iPhone 11 64GB - Grade A (Wholesale Lot)", qty: 5, amount: 195.00 },
    { desc: "Apple iPhone 12 128GB - Grade A (Wholesale Lot)", qty: 5, amount: 275.00 },
    { desc: "Apple iPhone 13 128GB - Grade A (Wholesale Lot)", qty: 3, amount: 360.00 },
    { desc: "Samsung Galaxy A14 64GB (Black) - Brand New Boxed", qty: 10, amount: 115.00 },
    { desc: "Samsung Galaxy A54 5G 128GB - Brand New Boxed", qty: 5, amount: 235.00 },
    { desc: "Apple iPad 10th Gen 64GB WiFi - Grade A Pack", qty: 3, amount: 295.00 }
  ],
  retailAccessories: [
    { desc: "00SSTG002 - TG Samsung A10/A20/A30/A50/A51", grossPrice: 15.00 },
    { desc: "Tempered Glass Screen Protector - iPhone Series", grossPrice: 15.00 },
    { desc: "20W PD USB-C Fast Charging Adapter", grossPrice: 15.00 },
    { desc: "Type-C to Lightning Fast Charge Cable 1m", grossPrice: 10.00 },
    { desc: "Type-C to Type-C Fast Charge Cable 1m", grossPrice: 10.00 },
    { desc: "Shockproof Clear Hybrid Armor Case", grossPrice: 15.00 },
    { desc: "Magnetic MagSafe Fast Wireless Car Mount", grossPrice: 25.00 },
    { desc: "TWS True Wireless Bluetooth Earbuds Pro", grossPrice: 30.00 },
    { desc: "10,000mAh Ultra-Slim Fast Power Bank", grossPrice: 25.00 },
    { desc: "Heavy Duty Shockproof Armor Ring Stand Case", grossPrice: 20.00 }
  ],
  retailDevices: [
    { desc: "Apple iPhone 11 64GB - Grade A (Unlocked) | IMEI Tracked", grossPrice: 249.00 },
    { desc: "Apple iPhone 12 128GB - Grade A (Unlocked) | IMEI Tracked", grossPrice: 349.00 },
    { desc: "Apple iPhone 13 128GB - Grade A (Unlocked) | IMEI Tracked", grossPrice: 449.00 },
    { desc: "Samsung Galaxy A14 64GB (Black) | 24M Warranty", grossPrice: 149.00 },
    { desc: "Samsung Galaxy A54 5G 128GB | 24M Warranty", grossPrice: 299.00 },
    { desc: "Apple iPad 10th Gen 64GB WiFi (Silver) | 12M Warranty", grossPrice: 389.00 },
    { desc: "Samsung Galaxy Tab A8 10.5 32GB WiFi | 12M Warranty", grossPrice: 189.00 }
  ]
};

// Application State
const state = {
  currentTab: 'wholesale', // 'wholesale' or 'retail'
  wholesale: {
    invoiceNo: '223802',
    date: '2024-02-14',
    paymentMethod: 'Card',
    forReason: 'Accessories',
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
    selectedStoreId: 5, // Thurles default
    activeHeaderBrand: 'IDFL', // 'IDFL' or 'GC'
    billFromCustom: {
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
  savedInvoices: []
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  loadSavedInvoicesFromStorage();
  populateStoreDropdowns();
  loadSampleWholesaleData();
  loadSampleRetailData();
  setupEventListeners();
  renderApp();
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
      if (s.id === state.retail.selectedStoreId) opt.selected = true;
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

// Load Sample Wholesale Data matching PDF Wholesale Invoice 1
function loadSampleWholesaleData() {
  state.wholesale.invoiceNo = '223802';
  state.wholesale.date = '2024-02-14';
  state.wholesale.paymentMethod = 'Card';
  state.wholesale.forReason = 'Accessories';
  state.wholesale.billTo = {
    name: 'Variety World',
    address: 'Lyster Square, Portlaoise, R32P796',
    phone: '+353 862037780',
    email: 'annietariq2011@gmail.com',
    vatNo: '4063008G'
  };
  state.wholesale.taxRate = 23.00;
  state.wholesale.otherCosts = 0.00;
  state.wholesale.items = [
    { desc: 'Gerlax GA-25YPS Charger', qty: 50, amount: 4.00 },
    { desc: 'GSK9 Mini Watch', qty: 6, amount: 24.925 },
    { desc: 'Hoco CA202 Infrared Induction Wireless Charging', qty: 6, amount: 9.95 },
    { desc: 'Hoco X91 Type-C to Type-C Cable 3m', qty: 10, amount: 2.49 },
    { desc: 'Hoco X91 Type-C to Lightning Cable 3m', qty: 10, amount: 2.49 },
    { desc: 'Smart Case 10th 2022 (2blk,1grn,1pnk,1red)', qty: 5, amount: 5.95 },
    { desc: 'Borofone BC48 Transmitter', qty: 10, amount: 5.95 },
    { desc: 'Apple Pamper Case 40mm', qty: 20, amount: 0.90 },
    { desc: 'Apple Pamper Case 41mm', qty: 20, amount: 0.90 },
    { desc: 'Hoco X93 Fast Data Cable Type C to Type C', qty: 10, amount: 2.45 },
    { desc: 'Hoco X93 Fast Data Cable Type C to Ligthning', qty: 10, amount: 2.45 },
    { desc: 'Hoco CA52 Air outlet In-car Holder', qty: 7, amount: 2.95 }
  ];
}

// Load Sample Retail Data matching Retail Invoice.xlsx
function loadSampleRetailData() {
  state.retail.reference = 'SALE/POS250582';
  state.retail.date = '2026-08-24';
  state.retail.selectedStoreId = 5;
  state.retail.activeHeaderBrand = 'IDFL';
  state.retail.billFromCustom = {
    name: 'I Digital Fun Thurles',
    address: 'Thurles Shopping Centre, Unit 10 Slievenamon Rd, Thurles Townparks, Thurles, Co. Tipperary, E41 E674',
    phone: '+353 (0)87 314 1419',
    email: 'INFO@IDFLMOBILE.COM'
  };
  state.retail.billTo = {
    name: 'Nigel Quinn',
    email: 'nigel.quinn@hotmail.com',
    phone: '',
    address: '',
    vatNo: ''
  };
  state.retail.taxRate = 23.00;
  state.retail.otherCosts = 0.00;
  // Sample: Gross price €15.00 -> Net Amount 15 / 1.23 = 12.20
  state.retail.items = [
    { desc: '00SSTG002 - TG Samsung A10/A20/A30/A50/A51', qty: 1, grossPrice: 15.00, amount: 15 / 1.23 }
  ];
}

// Switch Tab
function setTab(tab) {
  state.currentTab = tab;
  
  const wholesaleTabBtn = document.getElementById('tab-btn-wholesale');
  const retailTabBtn = document.getElementById('tab-btn-retail');
  const wholesaleCanvas = document.getElementById('wholesale-invoice-canvas');
  const retailCanvas = document.getElementById('retail-invoice-canvas');
  const wholesaleControls = document.getElementById('wholesale-controls');
  const retailControls = document.getElementById('retail-controls');

  if (tab === 'wholesale') {
    wholesaleTabBtn.classList.add('active-tab');
    retailTabBtn.classList.remove('active-tab');
    wholesaleCanvas.classList.remove('hidden');
    retailCanvas.classList.add('hidden');
    if (wholesaleControls) wholesaleControls.classList.remove('hidden');
    if (retailControls) retailControls.classList.add('hidden');
  } else {
    retailTabBtn.classList.add('active-tab');
    wholesaleTabBtn.classList.remove('active-tab');
    retailCanvas.classList.remove('hidden');
    wholesaleCanvas.classList.add('hidden');
    if (retailControls) retailControls.classList.remove('hidden');
    if (wholesaleControls) wholesaleControls.classList.add('hidden');
  }

  renderApp();
}

// Calculations for Wholesale
function calculateWholesale() {
  const current = state.wholesale;
  let subtotal = 0;
  
  current.items.forEach(item => {
    const qty = parseNum(item.qty);
    const amount = parseNum(item.amount);
    const lineTotal = qty * amount;
    item.lineTotal = Math.round(lineTotal * 100) / 100;
    subtotal += item.lineTotal;
  });

  const taxRate = parseNum(current.taxRate);
  const vatAmount = Math.round((subtotal * (taxRate / 100)) * 100) / 100;
  const otherCosts = parseNum(current.otherCosts);
  const totalDue = Math.round((subtotal + vatAmount + otherCosts) * 100) / 100;

  return { subtotal, taxRate, vatAmount, otherCosts, totalDue };
}

// Calculations for Retail
function calculateRetail() {
  const current = state.retail;
  const taxRate = parseNum(current.taxRate);
  const taxMultiplier = 1 + (taxRate / 100);
  let subtotal = 0;

  current.items.forEach(item => {
    const qty = parseNum(item.qty) || 1;
    
    if (item.grossPrice !== undefined && item.grossPrice !== null && item.grossPrice > 0) {
      item.amount = (item.grossPrice / taxMultiplier);
    } else {
      item.amount = parseNum(item.amount);
      item.grossPrice = item.amount * taxMultiplier;
    }

    const lineTotal = qty * item.amount;
    item.lineTotal = Math.round(lineTotal * 100) / 100;
    subtotal += item.lineTotal;
  });

  const vatAmount = Math.round((subtotal * (taxRate / 100)) * 100) / 100;
  const otherCosts = parseNum(current.otherCosts);
  const totalDue = Math.round((subtotal + vatAmount + otherCosts) * 100) / 100;

  return { subtotal, taxRate, vatAmount, otherCosts, totalDue };
}

// Render the Entire UI
function renderApp() {
  if (state.currentTab === 'wholesale') {
    renderWholesaleCanvas();
  } else {
    renderRetailCanvas();
  }
}

// Render Wholesale Invoice Canvas
function renderWholesaleCanvas() {
  const data = state.wholesale;
  const calc = calculateWholesale();

  // Meta fields
  document.getElementById('ws-disp-date').textContent = formatDateDisplay(data.date);
  document.getElementById('ws-input-date').value = data.date;
  document.getElementById('ws-input-invoiceno').value = data.invoiceNo;
  document.getElementById('ws-input-payment').value = data.paymentMethod;
  
  // Bill To
  document.getElementById('ws-billto-name').value = data.billTo.name || '';
  document.getElementById('ws-billto-address').value = data.billTo.address || '';
  document.getElementById('ws-billto-phone').value = data.billTo.phone || '';
  document.getElementById('ws-billto-email').value = data.billTo.email || '';
  document.getElementById('ws-billto-vat').value = data.billTo.vatNo || '';

  // Render Table Rows
  const tbody = document.getElementById('ws-items-tbody');
  tbody.innerHTML = '';

  data.items.forEach((item, index) => {
    const tr = document.createElement('tr');
    tr.className = 'item-row';
    tr.innerHTML = `
      <td class="row-actions-cell no-print">
        <div class="row-actions">
          <button onclick="deleteWholesaleItem(${index})" title="Delete Row" class="text-rose-500 hover:text-rose-700 p-0.5">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
          </button>
          <button onclick="duplicateWholesaleItem(${index})" title="Duplicate Row" class="text-blue-500 hover:text-blue-700 p-0.5">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
          </button>
        </div>
      </td>
      <td style="width: 58%;">
        <input type="text" class="editable-cell-input font-medium" value="${escapeHtml(item.desc)}" 
               oninput="updateWholesaleItemDesc(${index}, this.value)" placeholder="Item Description">
      </td>
      <td style="width: 10%; text-align: center;">
        <input type="number" step="1" min="1" class="editable-cell-input text-center mono font-medium" 
               value="${item.qty}" oninput="updateWholesaleItemCalcField(${index}, 'qty', this.value)">
      </td>
      <td style="width: 16%; text-align: right;">
        <div class="flex items-center justify-end">
          <span class="text-gray-500 mr-1 text-xs">€</span>
          <input type="number" step="0.01" min="0" class="editable-cell-input text-right mono font-medium" 
                 value="${Number(item.amount).toFixed(2)}" oninput="updateWholesaleItemCalcField(${index}, 'amount', this.value)">
        </div>
      </td>
      <td style="width: 16%; text-align: right; font-weight: 600; font-family: 'JetBrains Mono', monospace;" id="ws-linetotal-${index}">
        ${formatEuro(item.lineTotal)}
      </td>
    `;
    tbody.appendChild(tr);
  });

  updateWholesaleSummaryDisplays(calc);
}

// Update Wholesale Summary Totals without destroying inputs
function updateWholesaleSummaryDisplays(calc) {
  if (!calc) calc = calculateWholesale();
  document.getElementById('ws-subtotal-val').textContent = formatEuro(calc.subtotal);
  document.getElementById('ws-taxrate-input').value = Number(calc.taxRate).toFixed(2);
  document.getElementById('ws-vat-val').textContent = formatEuro(calc.vatAmount);
  document.getElementById('ws-other-input').value = Number(calc.otherCosts).toFixed(2);
  document.getElementById('ws-totaldue-val').textContent = formatEuro(calc.totalDue);
}

// In-place update for Wholesale Item description (No re-rendering so typing never loses cursor focus!)
function updateWholesaleItemDesc(index, value) {
  if (state.wholesale.items[index]) {
    state.wholesale.items[index].desc = value;
  }
}

// In-place update for Wholesale quantity or amount
function updateWholesaleItemCalcField(index, field, value) {
  if (!state.wholesale.items[index]) return;
  state.wholesale.items[index][field] = parseNum(value);
  
  const calc = calculateWholesale();
  const item = state.wholesale.items[index];
  const lineTotalCell = document.getElementById(`ws-linetotal-${index}`);
  if (lineTotalCell) {
    lineTotalCell.textContent = formatEuro(item.lineTotal);
  }
  updateWholesaleSummaryDisplays(calc);
}

// Render Retail Invoice Canvas
function renderRetailCanvas() {
  const data = state.retail;
  const calc = calculateRetail();

  // Dynamic Header Switch (IDFL vs Get Connected)
  const isGC = data.activeHeaderBrand === 'GC';
  const headerElem = document.getElementById('retail-header-banner');
  const logoElem = document.getElementById('retail-logo-img');
  const brandTextElem = document.getElementById('retail-brand-text');
  const contactTextElem = document.getElementById('retail-header-contact');
  const noticeContactElem = document.getElementById('retail-notice-contact');

  if (isGC) {
    headerElem.className = 'invoice-banner retail-gc-banner-bg';
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
    if (noticeContactElem) {
      noticeContactElem.textContent = 'CONTACT: +353(0)857403331    EMAIL: getconnectedire@gmail.com';
    }
  } else {
    headerElem.className = 'invoice-banner retail-idfl-banner-bg';
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
    if (noticeContactElem) {
      noticeContactElem.textContent = 'CONTACT: 057 868 2426    EMAIL: INFO@IDFLMOBILE.COM';
    }
  }

  // Top details
  document.getElementById('rt-input-ref').value = data.reference;
  document.getElementById('rt-disp-date').textContent = formatDateDisplay(data.date);
  document.getElementById('rt-input-date').value = data.date;

  // Bill From Store
  document.getElementById('rt-billfrom-name').value = data.billFromCustom.name || '';
  document.getElementById('rt-billfrom-address').value = data.billFromCustom.address || '';
  document.getElementById('rt-billfrom-phone').value = data.billFromCustom.phone || '';

  // Bill To Customer
  document.getElementById('rt-billto-name').value = data.billTo.name || '';
  document.getElementById('rt-billto-email').value = data.billTo.email || '';
  document.getElementById('rt-billto-phone').value = data.billTo.phone || '';
  document.getElementById('rt-billto-address').value = data.billTo.address || '';

  // Render Table Rows
  const tbody = document.getElementById('rt-items-tbody');
  tbody.innerHTML = '';

  data.items.forEach((item, index) => {
    const tr = document.createElement('tr');
    tr.className = 'item-row';
    const displayGross = item.grossPrice ? Number(item.grossPrice).toFixed(2) : (Number(item.amount) * 1.23).toFixed(2);
    const displayNet = Number(item.amount).toFixed(2);

    tr.innerHTML = `
      <td class="row-actions-cell no-print">
        <div class="row-actions">
          <button onclick="deleteRetailItem(${index})" title="Delete Row" class="text-rose-500 hover:text-rose-700 p-0.5">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
          </button>
          <button onclick="duplicateRetailItem(${index})" title="Duplicate Row" class="text-blue-500 hover:text-blue-700 p-0.5">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
          </button>
        </div>
      </td>
      <td style="width: 58%;">
        <input type="text" class="editable-cell-input font-medium" value="${escapeHtml(item.desc)}" 
               oninput="updateRetailItemDesc(${index}, this.value)" placeholder="Item Description">
      </td>
      <td style="width: 10%; text-align: center;">
        <input type="number" step="1" min="1" class="editable-cell-input text-center mono font-medium" 
               value="${item.qty}" oninput="updateRetailItemCalcField(${index}, 'qty', this.value)">
      </td>
      <td style="width: 16%; text-align: right;">
        <div class="flex items-center justify-end" title="Enter Shelf Price (e.g. 15) -> Auto converts to 15 / 1.23 = 12.20">
          <span class="text-gray-500 mr-1 text-xs">€</span>
          <input type="number" step="0.01" min="0" class="editable-cell-input text-right mono font-medium" 
                 value="${displayGross}" 
                 placeholder="Gross €"
                 oninput="updateRetailItemGrossPrice(${index}, this.value)">
        </div>
      </td>
      <td style="width: 16%; text-align: right; font-weight: 600; font-family: 'JetBrains Mono', monospace;" id="rt-linetotal-${index}">
        ${formatEuro(item.lineTotal)}
      </td>
    `;
    tbody.appendChild(tr);
  });

  updateRetailSummaryDisplays(calc);
}

// Update Retail Summary Totals without destroying inputs
function updateRetailSummaryDisplays(calc) {
  if (!calc) calc = calculateRetail();
  document.getElementById('rt-subtotal-val').textContent = formatEuro(calc.subtotal);
  document.getElementById('rt-taxrate-input').value = Number(calc.taxRate).toFixed(2);
  document.getElementById('rt-vat-val').textContent = formatEuro(calc.vatAmount);
  document.getElementById('rt-other-input').value = Number(calc.otherCosts).toFixed(2);
  document.getElementById('rt-totaldue-val').textContent = formatEuro(calc.totalDue);
}

// In-place update for Retail Item description
function updateRetailItemDesc(index, value) {
  if (state.retail.items[index]) {
    state.retail.items[index].desc = value;
  }
}

// In-place update for Retail Item Gross Price (Price / 1.23)
function updateRetailItemGrossPrice(index, value) {
  if (!state.retail.items[index]) return;
  const gross = parseNum(value);
  const taxRate = parseNum(state.retail.taxRate) || 23;
  state.retail.items[index].grossPrice = gross;
  state.retail.items[index].amount = gross / (1 + (taxRate / 100));

  const calc = calculateRetail();
  const item = state.retail.items[index];
  const lineTotalCell = document.getElementById(`rt-linetotal-${index}`);
  if (lineTotalCell) {
    lineTotalCell.textContent = formatEuro(item.lineTotal);
  }
  updateRetailSummaryDisplays(calc);
}

// In-place update for Retail quantity
function updateRetailItemCalcField(index, field, value) {
  if (!state.retail.items[index]) return;
  state.retail.items[index][field] = parseNum(value);
  
  const calc = calculateRetail();
  const item = state.retail.items[index];
  const lineTotalCell = document.getElementById(`rt-linetotal-${index}`);
  if (lineTotalCell) {
    lineTotalCell.textContent = formatEuro(item.lineTotal);
  }
  updateRetailSummaryDisplays(calc);
}

// Row Add / Delete Handlers (Full table update only when rows change)
function addWholesaleItem(desc = 'New Wholesale Item', qty = 1, amount = 0.00) {
  state.wholesale.items.push({ desc, qty: Number(qty), amount: Number(amount) });
  renderWholesaleCanvas();
  showToast('Item added to Wholesale Invoice');
}

function deleteWholesaleItem(index) {
  state.wholesale.items.splice(index, 1);
  renderWholesaleCanvas();
}

function duplicateWholesaleItem(index) {
  const item = state.wholesale.items[index];
  if (item) {
    state.wholesale.items.splice(index + 1, 0, { ...item });
    renderWholesaleCanvas();
    showToast('Row duplicated');
  }
}

function addRetailItem(desc = 'New Accessory / Device', qty = 1, grossPrice = 15.00) {
  const taxRate = parseNum(state.retail.taxRate) || 23;
  const netAmount = grossPrice / (1 + (taxRate / 100));
  
  state.retail.items.push({
    desc,
    qty: Number(qty),
    grossPrice: Number(grossPrice),
    amount: netAmount
  });
  renderRetailCanvas();
  showToast('Item added to Retail Invoice');
}

function deleteRetailItem(index) {
  state.retail.items.splice(index, 1);
  renderRetailCanvas();
}

function duplicateRetailItem(index) {
  const item = state.retail.items[index];
  if (item) {
    state.retail.items.splice(index + 1, 0, { ...item });
    renderRetailCanvas();
    showToast('Row duplicated');
  }
}

// Catalog Preset Handlers for 4 Distinct Sections
function addCatalogItem(catalogName, index) {
  if (catalogName === 'wholesaleAccessories') {
    const it = CATALOGS.wholesaleAccessories[index];
    addWholesaleItem(it.desc, it.qty, it.amount);
  } else if (catalogName === 'wholesaleDevices') {
    const it = CATALOGS.wholesaleDevices[index];
    addWholesaleItem(it.desc, it.qty, it.amount);
  } else if (catalogName === 'retailAccessories') {
    const it = CATALOGS.retailAccessories[index];
    addRetailItem(it.desc, 1, it.grossPrice);
  } else if (catalogName === 'retailDevices') {
    const it = CATALOGS.retailDevices[index];
    addRetailItem(it.desc, 1, it.grossPrice);
  }
}

// Branch Selection Handler (Dynamic Switch to Get Connected if GC store selected in Retail)
function onStoreSelectChanged(tab, storeId) {
  const store = STORES.find(s => s.id === Number(storeId));
  if (!store) return;

  if (tab === 'retail') {
    state.retail.selectedStoreId = store.id;
    state.retail.activeHeaderBrand = store.brand; // 'GC' or 'IDFL'
    state.retail.billFromCustom = {
      name: store.name,
      address: store.address,
      phone: store.phone,
      email: store.email
    };
    renderRetailCanvas();
    showToast(`Branch selected: ${store.name}`);
  } else if (tab === 'wholesale') {
    state.wholesale.billTo = {
      name: store.name,
      address: store.address,
      phone: store.phone,
      email: store.email,
      vatNo: store.vat
    };
    renderWholesaleCanvas();
    showToast(`Customer loaded: ${store.name}`);
  }
}

// Set Tax Rate
function setQuickTaxRate(rate) {
  if (state.currentTab === 'wholesale') {
    state.wholesale.taxRate = Number(rate);
    const calc = calculateWholesale();
    updateWholesaleSummaryDisplays(calc);
  } else {
    state.retail.taxRate = Number(rate);
    // Recalculate net amounts for retail items with gross price
    state.retail.items.forEach(it => {
      if (it.grossPrice) {
        it.amount = it.grossPrice / (1 + (rate / 100));
      }
    });
    renderRetailCanvas();
  }
  showToast(`Tax Rate set to ${rate}%`);
}

// Auto New Invoice Number
function generateNewInvoiceNumber() {
  const rand = Math.floor(100000 + Math.random() * 900000);
  if (state.currentTab === 'wholesale') {
    state.wholesale.invoiceNo = String(rand);
    document.getElementById('ws-input-invoiceno').value = rand;
    showToast(`Generated Invoice # ${rand}`);
  } else {
    state.retail.reference = `SALE/POS${rand}`;
    document.getElementById('rt-input-ref').value = `SALE/POS${rand}`;
    showToast(`Generated Reference SALE/POS${rand}`);
  }
}

// Reset Current Invoice
function resetCurrentInvoice() {
  if (confirm('Are you sure you want to reset the current invoice?')) {
    if (state.currentTab === 'wholesale') {
      state.wholesale.items = [];
      state.wholesale.otherCosts = 0;
      renderWholesaleCanvas();
    } else {
      state.retail.items = [];
      state.retail.otherCosts = 0;
      renderRetailCanvas();
    }
    showToast('Invoice cleared');
  }
}

// Save Invoice to LocalStorage
function saveCurrentInvoice() {
  const isWs = state.currentTab === 'wholesale';
  const invoiceData = isWs ? JSON.parse(JSON.stringify(state.wholesale)) : JSON.parse(JSON.stringify(state.retail));
  const invoiceNo = isWs ? invoiceData.invoiceNo : invoiceData.reference;
  const clientName = isWs ? invoiceData.billTo.name : invoiceData.billTo.name;
  
  const record = {
    id: 'INV_' + Date.now(),
    type: state.currentTab,
    invoiceNo: invoiceNo || 'INV-' + Math.floor(100000 + Math.random() * 900000),
    clientName: clientName || 'Unnamed Client',
    date: isWs ? invoiceData.date : invoiceData.date,
    total: isWs ? calculateWholesale().totalDue : calculateRetail().totalDue,
    data: invoiceData,
    timestamp: new Date().toISOString()
  };

  state.savedInvoices.unshift(record);
  localStorage.setItem('vat_invoices_history', JSON.stringify(state.savedInvoices));
  showToast(`Invoice ${record.invoiceNo} saved!`);
  renderSavedInvoicesModal();
}

function loadSavedInvoicesFromStorage() {
  try {
    const raw = localStorage.getItem('vat_invoices_history');
    if (raw) {
      state.savedInvoices = JSON.parse(raw);
    }
  } catch (e) {
    console.error('Failed to load history:', e);
  }
}

// Restore saved invoice
function loadInvoiceRecord(id) {
  const rec = state.savedInvoices.find(r => r.id === id);
  if (!rec) return;

  if (rec.type === 'wholesale') {
    state.wholesale = JSON.parse(JSON.stringify(rec.data));
    setTab('wholesale');
  } else {
    state.retail = JSON.parse(JSON.stringify(rec.data));
    setTab('retail');
  }
  closeSavedModal();
  showToast(`Loaded invoice ${rec.invoiceNo}`);
}

function deleteSavedInvoiceRecord(id, e) {
  if (e) e.stopPropagation();
  state.savedInvoices = state.savedInvoices.filter(r => r.id !== id);
  localStorage.setItem('vat_invoices_history', JSON.stringify(state.savedInvoices));
  renderSavedInvoicesModal();
  showToast('Invoice deleted from history');
}

// Export CSV
function exportInvoiceCSV() {
  const isWs = state.currentTab === 'wholesale';
  const data = isWs ? state.wholesale : state.retail;
  const calc = isWs ? calculateWholesale() : calculateRetail();
  
  let csv = 'Item Description,Quantity,Amount (EUR),Total (EUR)\r\n';
  data.items.forEach(it => {
    csv += `"${(it.desc || '').replace(/"/g, '""')}",${it.qty},${Number(it.amount).toFixed(2)},${Number(it.lineTotal).toFixed(2)}\r\n`;
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
  a.download = `${state.currentTab}_invoice_${isWs ? data.invoiceNo : data.reference}.csv`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('Exported CSV');
}

// Export JSON
function exportInvoiceJSON() {
  const isWs = state.currentTab === 'wholesale';
  const data = isWs ? state.wholesale : state.retail;
  const jsonStr = JSON.stringify({ type: state.currentTab, exportedAt: new Date(), ...data }, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${state.currentTab}_invoice_${isWs ? data.invoiceNo : data.reference}_${Date.now()}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('Exported JSON');
}

// Import JSON
function importInvoiceJSON(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const obj = JSON.parse(e.target.result);
      if (obj.type === 'retail') {
        state.retail = { ...state.retail, ...obj };
        setTab('retail');
      } else {
        state.wholesale = { ...state.wholesale, ...obj };
        setTab('wholesale');
      }
      showToast('Invoice imported successfully!');
    } catch (err) {
      alert('Invalid JSON invoice file');
    }
  };
  reader.readAsText(file);
}

// Print / PDF Trigger
function triggerPrint() {
  window.print();
}

// Toast System
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

// Modal Helpers
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
    list.innerHTML = '<div class="text-center text-gray-400 py-8 text-sm">No saved invoices yet. Click "Save Draft" to save invoices.</div>';
    return;
  }

  list.innerHTML = '';
  state.savedInvoices.forEach(inv => {
    const div = document.createElement('div');
    div.className = 'flex items-center justify-between p-3 bg-slate-800 hover:bg-slate-700/80 rounded-lg cursor-pointer transition border border-slate-700';
    div.onclick = () => loadInvoiceRecord(inv.id);
    div.innerHTML = `
      <div class="flex items-center gap-3">
        <span class="px-2 py-0.5 text-xs font-semibold rounded ${inv.type === 'wholesale' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'} uppercase">
          ${inv.type}
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

// Escape HTML utility
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Setup Event Listeners
function setupEventListeners() {
  // Wholesale Listeners
  document.getElementById('ws-input-date')?.addEventListener('change', (e) => {
    state.wholesale.date = e.target.value;
    document.getElementById('ws-disp-date').textContent = formatDateDisplay(e.target.value);
  });
  document.getElementById('ws-input-invoiceno')?.addEventListener('input', (e) => {
    state.wholesale.invoiceNo = e.target.value;
  });
  document.getElementById('ws-input-payment')?.addEventListener('input', (e) => {
    state.wholesale.paymentMethod = e.target.value;
  });
  document.getElementById('ws-billto-name')?.addEventListener('input', (e) => {
    state.wholesale.billTo.name = e.target.value;
  });
  document.getElementById('ws-billto-address')?.addEventListener('input', (e) => {
    state.wholesale.billTo.address = e.target.value;
  });
  document.getElementById('ws-billto-phone')?.addEventListener('input', (e) => {
    state.wholesale.billTo.phone = e.target.value;
  });
  document.getElementById('ws-billto-email')?.addEventListener('input', (e) => {
    state.wholesale.billTo.email = e.target.value;
  });
  document.getElementById('ws-billto-vat')?.addEventListener('input', (e) => {
    state.wholesale.billTo.vatNo = e.target.value;
  });
  document.getElementById('ws-taxrate-input')?.addEventListener('input', (e) => {
    state.wholesale.taxRate = parseNum(e.target.value);
    const calc = calculateWholesale();
    updateWholesaleSummaryDisplays(calc);
  });
  document.getElementById('ws-other-input')?.addEventListener('input', (e) => {
    state.wholesale.otherCosts = parseNum(e.target.value);
    const calc = calculateWholesale();
    updateWholesaleSummaryDisplays(calc);
  });

  // Retail Listeners
  document.getElementById('rt-input-date')?.addEventListener('change', (e) => {
    state.retail.date = e.target.value;
    document.getElementById('rt-disp-date').textContent = formatDateDisplay(e.target.value);
  });
  document.getElementById('rt-input-ref')?.addEventListener('input', (e) => {
    state.retail.reference = e.target.value;
  });
  document.getElementById('rt-billfrom-name')?.addEventListener('input', (e) => {
    state.retail.billFromCustom.name = e.target.value;
  });
  document.getElementById('rt-billfrom-address')?.addEventListener('input', (e) => {
    state.retail.billFromCustom.address = e.target.value;
  });
  document.getElementById('rt-billfrom-phone')?.addEventListener('input', (e) => {
    state.retail.billFromCustom.phone = e.target.value;
  });
  document.getElementById('rt-billto-name')?.addEventListener('input', (e) => {
    state.retail.billTo.name = e.target.value;
  });
  document.getElementById('rt-billto-email')?.addEventListener('input', (e) => {
    state.retail.billTo.email = e.target.value;
  });
  document.getElementById('rt-billto-phone')?.addEventListener('input', (e) => {
    state.retail.billTo.phone = e.target.value;
  });
  document.getElementById('rt-billto-address')?.addEventListener('input', (e) => {
    state.retail.billTo.address = e.target.value;
  });
  document.getElementById('rt-taxrate-input')?.addEventListener('input', (e) => {
    const rate = parseNum(e.target.value);
    state.retail.taxRate = rate;
    // Auto recompute net amount on all retail items with gross prices
    state.retail.items.forEach(it => {
      if (it.grossPrice) {
        it.amount = it.grossPrice / (1 + (rate / 100));
      }
    });
    renderRetailCanvas();
  });
  document.getElementById('rt-other-input')?.addEventListener('input', (e) => {
    state.retail.otherCosts = parseNum(e.target.value);
    const calc = calculateRetail();
    updateRetailSummaryDisplays(calc);
  });

  // Shortcut Ctrl+P
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
      e.preventDefault();
      triggerPrint();
    }
  });
}
