const STORAGE_KEY = "driva-storage-os-v2";
const OLD_STORAGE_KEY = "driva-storage-os-v1";
const LANGUAGE_KEY = "driva-storage-os-language";
const KNOWN_ORIGINS = ["Indragiri", "Citamiang"];
const KNOWN_LOTS = ["Mix", "Palawija", "Buninagara"];

const i18n = {
  en: {
    mainNavLabel: "Main navigation",
    dashboard: "Dashboard",
    storageDetail: "Storage Detail",
    itemsOut: "Items Out",
    itemsOutFull: "Items Out / Dispatched",
    sideTitle: "Clean stock. Sharp math.",
    sideText: "Local-first inventory for green bean storage, dispatch logs, and live remaining stock.",
    inventoryControl: "Inventory Control",
    language: "Language",
    exportJson: "Export JSON",
    exportCsv: "Export CSV",
    importJson: "Import JSON",
    realTimeStored: "Real-Time Stored",
    realTimeStoredHelp: "Incoming storage minus dispatched stock",
    totalIncoming: "Total Incoming",
    totalIncomingHelp: "All recorded green bean storage",
    totalDispatched: "Total Dispatched",
    totalDispatchedHelp: "Items out to buyers",
    activeLots: "Active Lots",
    activeLotsHelp: "Storage records in the system",
    recentStorage: "Recent Storage",
    addStorage: "Add Storage",
    recentDispatch: "Recent Dispatch",
    addDispatch: "Add Dispatch",
    origin: "Origin",
    originName: "Origin Name",
    lot: "Lot",
    lotName: "Lot Name",
    process: "Process",
    processName: "Process Name",
    available: "Available",
    buyer: "Buyer",
    buyerName: "Buyer Name",
    city: "City",
    cityName: "City Name",
    weight: "Weight",
    incomingAvailableStock: "Incoming / Available Stock",
    outboundStock: "Outbound Stock",
    cancelEdit: "Cancel Edit",
    customOriginName: "Custom Origin Name",
    customLotName: "Custom Lot Name",
    typeLotName: "Type lot name",
    totalGreenBeanWeight: "Total Green Bean Weight (kg)",
    endSortedDate: "End Sorted Date",
    saveStorageRecord: "Save Storage Record",
    updateStorageRecord: "Update Storage Record",
    saveDispatchRecord: "Save Dispatch Record",
    updateDispatchRecord: "Update Dispatch Record",
    storageRecords: "Storage Records",
    dispatchRecords: "Dispatch Records",
    storageCaption: "Available stock updates automatically after dispatch. No sleepy spreadsheet goblin.",
    dispatchCaption: "Each dispatch deducts from matching origin + lot + process.",
    searchStorage: "Search origin, lot, process...",
    searchDispatch: "Search buyer, city, origin, lot...",
    incoming: "Incoming",
    dispatched: "Dispatched",
    sorted: "Sorted",
    actions: "Actions",
    edit: "Edit",
    delete: "Delete",
    selectOrigin: "Select origin",
    selectLot: "Select lot",
    selectProcess: "Select process",
    typeOriginName: "Type origin name",
    buyerPlaceholder: "Buyer / roaster name",
    noStorageYet: "No storage records yet.",
    noDispatchYet: "No dispatch records yet.",
    noMatchingStorage: "No matching storage records.",
    noMatchingDispatch: "No matching dispatch records.",
    deleteStorageConfirm: "Delete this storage record? This can change real-time remaining stock.",
    deleteDispatchConfirm: "Delete this dispatch record?",
    storageDeleted: "Storage record deleted.",
    dispatchDeleted: "Dispatch record deleted.",
    storageUpdated: "Storage record updated.",
    storageSaved: "Storage record saved.",
    dispatchUpdated: "Dispatch record updated.",
    dispatchSaved: "Dispatch record saved.",
    overStockConfirm: amount => `This dispatch is ${amount} above available stock for this origin + lot + process. Save anyway?`,
    importSuccess: "JSON backup imported.",
    importFailed: "Import failed. Please use a valid Driva Storage OS JSON backup.",
    csvStorageTitle: "STORAGE DETAIL",
    csvDispatchTitle: "ITEMS OUT / DISPATCHED"
  },
  id: {
    mainNavLabel: "Navigasi utama",
    dashboard: "Dasbor",
    storageDetail: "Detail Penyimpanan",
    itemsOut: "Barang Keluar",
    itemsOutFull: "Barang Keluar / Terkirim",
    sideTitle: "Stok bersih. Hitungan tajam.",
    sideText: "Inventori lokal untuk penyimpanan green bean, log pengiriman, dan stok tersisa real-time.",
    inventoryControl: "Kontrol Inventori",
    language: "Bahasa",
    exportJson: "Ekspor JSON",
    exportCsv: "Ekspor CSV",
    importJson: "Impor JSON",
    realTimeStored: "Stok Tersimpan Real-Time",
    realTimeStoredHelp: "Stok masuk dikurangi stok terkirim",
    totalIncoming: "Total Masuk",
    totalIncomingHelp: "Semua catatan penyimpanan green bean",
    totalDispatched: "Total Terkirim",
    totalDispatchedHelp: "Barang keluar ke pembeli",
    activeLots: "Lot Aktif",
    activeLotsHelp: "Catatan penyimpanan dalam sistem",
    recentStorage: "Penyimpanan Terbaru",
    addStorage: "Tambah Stok",
    recentDispatch: "Pengiriman Terbaru",
    addDispatch: "Tambah Pengiriman",
    origin: "Origin",
    originName: "Nama Origin",
    lot: "Lot",
    lotName: "Nama Lot",
    process: "Proses",
    processName: "Nama Proses",
    available: "Tersedia",
    buyer: "Pembeli",
    buyerName: "Nama Pembeli",
    city: "Kota",
    cityName: "Nama Kota",
    weight: "Berat",
    incomingAvailableStock: "Stok Masuk / Tersedia",
    outboundStock: "Stok Keluar",
    cancelEdit: "Batalkan Edit",
    customOriginName: "Nama Origin Custom",
    customLotName: "Nama Lot Custom",
    typeLotName: "Ketik nama lot",
    totalGreenBeanWeight: "Total Berat Green Bean (kg)",
    endSortedDate: "Tanggal Selesai Sortir",
    saveStorageRecord: "Simpan Catatan Stok",
    updateStorageRecord: "Perbarui Catatan Stok",
    saveDispatchRecord: "Simpan Catatan Pengiriman",
    updateDispatchRecord: "Perbarui Catatan Pengiriman",
    storageRecords: "Catatan Penyimpanan",
    dispatchRecords: "Catatan Pengiriman",
    storageCaption: "Stok tersedia otomatis berubah setelah pengiriman. Spreadsheet goblin tidak ikut kerja.",
    dispatchCaption: "Setiap pengiriman mengurangi stok dengan origin + lot + proses yang sama.",
    searchStorage: "Cari origin, lot, proses...",
    searchDispatch: "Cari pembeli, kota, origin, lot...",
    incoming: "Masuk",
    dispatched: "Terkirim",
    sorted: "Sortir",
    actions: "Aksi",
    edit: "Edit",
    delete: "Hapus",
    selectOrigin: "Pilih origin",
    selectLot: "Pilih lot",
    selectProcess: "Pilih proses",
    typeOriginName: "Ketik nama origin",
    buyerPlaceholder: "Nama pembeli / roaster",
    noStorageYet: "Belum ada catatan penyimpanan.",
    noDispatchYet: "Belum ada catatan pengiriman.",
    noMatchingStorage: "Tidak ada catatan penyimpanan yang cocok.",
    noMatchingDispatch: "Tidak ada catatan pengiriman yang cocok.",
    deleteStorageConfirm: "Hapus catatan stok ini? Ini bisa mengubah sisa stok real-time.",
    deleteDispatchConfirm: "Hapus catatan pengiriman ini?",
    storageDeleted: "Catatan stok dihapus.",
    dispatchDeleted: "Catatan pengiriman dihapus.",
    storageUpdated: "Catatan stok diperbarui.",
    storageSaved: "Catatan stok disimpan.",
    dispatchUpdated: "Catatan pengiriman diperbarui.",
    dispatchSaved: "Catatan pengiriman disimpan.",
    overStockConfirm: amount => `Pengiriman ini melebihi stok tersedia sebesar ${amount} untuk origin + lot + proses ini. Tetap simpan?`,
    importSuccess: "Backup JSON berhasil diimpor.",
    importFailed: "Impor gagal. Gunakan backup JSON Driva Storage OS yang valid.",
    csvStorageTitle: "DETAIL PENYIMPANAN",
    csvDispatchTitle: "BARANG KELUAR / TERKIRIM"
  }
};

let currentLanguage = localStorage.getItem(LANGUAGE_KEY) || "en";
let currentView = "dashboard";
let state = loadState();
let storageFilter = "";
let dispatchFilter = "";

function t(key, ...args) {
  const value = (i18n[currentLanguage] && i18n[currentLanguage][key]) || i18n.en[key] || key;
  return typeof value === "function" ? value(...args) : value;
}

function setText(selector, text) {
  const element = document.querySelector(selector);
  if (element) element.textContent = text;
}

function setPlaceholder(selector, text) {
  const element = document.querySelector(selector);
  if (element) element.placeholder = text;
}

function setOptionText(selector, text) {
  const element = document.querySelector(selector);
  if (element) element.textContent = text;
}

function applyLanguage() {
  document.documentElement.lang = currentLanguage === "id" ? "id" : "en";
  const languageSelect = document.getElementById("languageSelect");
  if (languageSelect) languageSelect.value = currentLanguage;

  setText('.nav-btn[data-view="dashboard"]', t("dashboard"));
  setText('.nav-btn[data-view="storage"]', t("storageDetail"));
  setText('.nav-btn[data-view="dispatch"]', t("itemsOut"));
  document.querySelector(".nav-tabs")?.setAttribute("aria-label", t("mainNavLabel"));
  setText(".side-note p", t("sideTitle"));
  setText(".side-note span", t("sideText"));
  setText(".topbar .eyebrow", t("inventoryControl"));
  setText("#languageLabel", t("language"));
  setText("#exportJsonBtn", t("exportJson"));
  const importLabel = document.querySelector(".import-label");
  if (importLabel) importLabel.childNodes[0].nodeValue = `${t("importJson")} `;
  setText("#exportCsvBtn", t("exportCsv"));

  const metricCards = document.querySelectorAll(".metric-card");
  const metricKeys = [
    ["realTimeStored", "realTimeStoredHelp"],
    ["totalIncoming", "totalIncomingHelp"],
    ["totalDispatched", "totalDispatchedHelp"],
    ["activeLots", "activeLotsHelp"]
  ];
  metricCards.forEach((card, index) => {
    const [titleKey, helpKey] = metricKeys[index] || [];
    if (!titleKey) return;
    card.querySelector("span").textContent = t(titleKey);
    card.querySelector("small").textContent = t(helpKey);
  });

  const panels = document.querySelectorAll("#dashboard .panel");
  if (panels[0]) {
    panels[0].querySelector("h3").textContent = t("recentStorage");
    panels[0].querySelector("button").textContent = t("addStorage");
    panels[0].querySelector("thead tr").innerHTML = `<th>${t("origin")}</th><th>${t("lot")}</th><th>${t("process")}</th><th>${t("available")}</th>`;
  }
  if (panels[1]) {
    panels[1].querySelector("h3").textContent = t("recentDispatch");
    panels[1].querySelector("button").textContent = t("addDispatch");
    panels[1].querySelector("thead tr").innerHTML = `<th>${t("buyer")}</th><th>${t("city")}</th><th>${t("lot")}</th><th>${t("weight")}</th>`;
  }

  setText("#storage .form-panel .eyebrow", t("incomingAvailableStock"));
  setText("#storage .form-panel h3", t("storageDetail"));
  setText("#cancelStorageEdit", t("cancelEdit"));
  setText("#dispatch .form-panel .eyebrow", t("outboundStock"));
  setText("#dispatch .form-panel h3", t("itemsOutFull"));
  setText("#cancelDispatchEdit", t("cancelEdit"));

  translateFormLabel("storageOrigin", t("originName"));
  translateFormLabel("storageCustomOrigin", t("customOriginName"));
  translateFormLabel("storageLot", t("lotName"));
  translateFormLabel("storageCustomLot", t("customLotName"));
  translateFormLabel("storageProcess", t("processName"));
  translateFormLabel("storageWeight", t("totalGreenBeanWeight"));
  translateFormLabel("storageSortedDate", t("endSortedDate"));
  translateFormLabel("dispatchOrigin", t("originName"));
  translateFormLabel("dispatchCustomOrigin", t("customOriginName"));
  translateFormLabel("dispatchLot", t("lotName"));
  translateFormLabel("dispatchCustomLot", t("customLotName"));
  translateFormLabel("dispatchProcess", t("processName"));
  translateFormLabel("dispatchWeight", t("totalGreenBeanWeight"));
  translateFormLabel("dispatchBuyer", t("buyerName"));
  translateFormLabel("dispatchCity", t("cityName"));

  setOptionText('#storageOrigin option[value=""]', t("selectOrigin"));
  setOptionText('#dispatchOrigin option[value=""]', t("selectOrigin"));
  setOptionText('#storageLot option[value=""]', t("selectLot"));
  setOptionText('#dispatchLot option[value=""]', t("selectLot"));
  setOptionText('#storageProcess option[value=""]', t("selectProcess"));
  setOptionText('#dispatchProcess option[value=""]', t("selectProcess"));
  setPlaceholder("#storageCustomOrigin", t("typeOriginName"));
  setPlaceholder("#dispatchCustomOrigin", t("typeOriginName"));
  setPlaceholder("#storageCustomLot", t("typeLotName"));
  setPlaceholder("#dispatchCustomLot", t("typeLotName"));
  setPlaceholder("#dispatchBuyer", t("buyerPlaceholder"));
  setPlaceholder("#dispatchCity", currentLanguage === "id" ? "Bandung" : "Bandung");

  setText("#storageSubmitBtn", document.getElementById("storageId").value ? t("updateStorageRecord") : t("saveStorageRecord"));
  setText("#dispatchSubmitBtn", document.getElementById("dispatchId").value ? t("updateDispatchRecord") : t("saveDispatchRecord"));

  setText("#storage .full-panel h3", t("storageRecords"));
  setText("#storage .full-panel .panel-caption", t("storageCaption"));
  setPlaceholder("#storageSearch", t("searchStorage"));
  setText("#dispatch .full-panel h3", t("dispatchRecords"));
  setText("#dispatch .full-panel .panel-caption", t("dispatchCaption"));
  setPlaceholder("#dispatchSearch", t("searchDispatch"));

  document.querySelector("#storage .full-panel thead tr").innerHTML = `<th>${t("origin")}</th><th>${t("lot")}</th><th>${t("process")}</th><th>${t("incoming")}</th><th>${t("dispatched")}</th><th>${t("available")}</th><th>${t("sorted")}</th><th>${t("actions")}</th>`;
  document.querySelector("#dispatch .full-panel thead tr").innerHTML = `<th>${t("origin")}</th><th>${t("lot")}</th><th>${t("process")}</th><th>${t("weight")}</th><th>${t("buyer")}</th><th>${t("city")}</th><th>${t("actions")}</th>`;

  updatePageTitle();
}

function translateFormLabel(inputId, labelText) {
  const input = document.getElementById(inputId);
  const label = input?.closest("label");
  if (!label) return;
  const textNode = Array.from(label.childNodes).find(node => node.nodeType === Node.TEXT_NODE);
  if (textNode) textNode.nodeValue = `${labelText} `;
}

function updatePageTitle() {
  const titleMap = { dashboard: t("dashboard"), storage: t("storageDetail"), dispatch: t("itemsOutFull") };
  document.getElementById("pageTitle").textContent = titleMap[currentView] || t("dashboard");
}

function loadState() {
  const fallback = { storage: [], dispatch: [] };
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved) return normalizeState(saved);

    const oldSaved = JSON.parse(localStorage.getItem(OLD_STORAGE_KEY));
    if (oldSaved) {
      const migrated = normalizeState(oldSaved);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(migrated));
      return migrated;
    }
    return fallback;
  } catch {
    return fallback;
  }
}

function normalizeState(raw) {
  return {
    storage: Array.isArray(raw.storage) ? raw.storage.map(normalizeStorageRecord) : [],
    dispatch: Array.isArray(raw.dispatch) ? raw.dispatch.map(normalizeDispatchRecord) : []
  };
}

function normalizeStorageRecord(record) {
  return {
    id: record.id || uid(),
    origin: record.origin || "",
    lot: record.lot || "",
    process: record.process || "",
    weight: Number(record.weight || 0),
    sortedDate: record.sortedDate || "",
    updatedAt: record.updatedAt || new Date().toISOString()
  };
}

function normalizeDispatchRecord(record) {
  return {
    id: record.id || uid(),
    origin: record.origin || "",
    lot: record.lot || "",
    process: record.process || "",
    weight: Number(record.weight || 0),
    buyer: record.buyer || "",
    city: record.city || "",
    updatedAt: record.updatedAt || new Date().toISOString()
  };
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  renderAll();
}

function uid() {
  return crypto.randomUUID ? crypto.randomUUID() : String(Date.now() + Math.random());
}

function weight(value) {
  const number = Number(value || 0);
  return `${number.toLocaleString(currentLanguage === "id" ? "id-ID" : undefined, { maximumFractionDigits: 2 })} kg`;
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>'"]/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
  }[char]));
}

function matches(record, filter) {
  if (!filter) return true;
  return Object.values(record).join(" ").toLowerCase().includes(filter.toLowerCase());
}

function stockKey(record) {
  return [record.origin, record.lot, record.process]
    .map(value => String(value || "").trim().toLowerCase())
    .join("|");
}

function getIncomingFor(item) {
  return state.storage
    .filter(record => stockKey(record) === stockKey(item))
    .reduce((sum, record) => sum + Number(record.weight || 0), 0);
}

function getDispatchedFor(item, excludeDispatchId = "") {
  return state.dispatch
    .filter(record => record.id !== excludeDispatchId && stockKey(record) === stockKey(item))
    .reduce((sum, record) => sum + Number(record.weight || 0), 0);
}

function getAvailableFor(item, excludeDispatchId = "") {
  return getIncomingFor(item) - getDispatchedFor(item, excludeDispatchId);
}

function getStockSummary() {
  const incoming = state.storage.reduce((sum, item) => sum + Number(item.weight || 0), 0);
  const dispatched = state.dispatch.reduce((sum, item) => sum + Number(item.weight || 0), 0);
  return { incoming, dispatched, available: incoming - dispatched };
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2200);
}

function setView(viewId) {
  currentView = viewId;
  document.querySelectorAll(".view").forEach(view => view.classList.remove("active-view"));
  document.querySelectorAll(".nav-btn").forEach(btn => btn.classList.toggle("active", btn.dataset.view === viewId));
  document.getElementById(viewId).classList.add("active-view");
  updatePageTitle();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderDashboard() {
  const summary = getStockSummary();
  document.getElementById("storedWeight").textContent = weight(summary.available);
  document.getElementById("incomingWeight").textContent = weight(summary.incoming);
  document.getElementById("dispatchedWeight").textContent = weight(summary.dispatched);
  document.getElementById("storageCount").textContent = state.storage.length;

  document.getElementById("recentStorageRows").innerHTML = state.storage.slice(-5).reverse().map(item => {
    const available = getAvailableFor(item);
    return `<tr><td>${escapeHtml(item.origin)}</td><td>${escapeHtml(item.lot)}</td><td>${escapeHtml(item.process)}</td><td><strong class="${available < 0 ? "negative-stock" : ""}">${weight(available)}</strong></td></tr>`;
  }).join("") || `<tr><td colspan="4" class="empty-row">${t("noStorageYet")}</td></tr>`;

  document.getElementById("recentDispatchRows").innerHTML = state.dispatch.slice(-5).reverse().map(item => `
    <tr><td>${escapeHtml(item.buyer)}</td><td>${escapeHtml(item.city)}</td><td>${escapeHtml(item.lot)}</td><td>${weight(item.weight)}</td></tr>
  `).join("") || `<tr><td colspan="4" class="empty-row">${t("noDispatchYet")}</td></tr>`;
}

function renderStorage() {
  const rows = state.storage.filter(item => matches(item, storageFilter)).map(item => {
    const incoming = getIncomingFor(item);
    const dispatched = getDispatchedFor(item);
    const available = incoming - dispatched;
    return `
      <tr>
        <td>${escapeHtml(item.origin)}</td>
        <td>${escapeHtml(item.lot)}</td>
        <td>${escapeHtml(item.process)}</td>
        <td>${weight(incoming)}</td>
        <td>${weight(dispatched)}</td>
        <td><strong class="${available < 0 ? "negative-stock" : ""}">${weight(available)}</strong></td>
        <td>${escapeHtml(item.sortedDate)}</td>
        <td><div class="action-row"><button class="table-btn" onclick="editStorage('${item.id}')">${t("edit")}</button><button class="table-btn delete" onclick="deleteStorage('${item.id}')">${t("delete")}</button></div></td>
      </tr>
    `;
  }).join("");
  document.getElementById("storageRows").innerHTML = rows || `<tr><td colspan="8" class="empty-row">${t("noMatchingStorage")}</td></tr>`;
}

function renderDispatch() {
  const rows = state.dispatch.filter(item => matches(item, dispatchFilter)).map(item => `
    <tr>
      <td>${escapeHtml(item.origin)}</td>
      <td>${escapeHtml(item.lot)}</td>
      <td>${escapeHtml(item.process)}</td>
      <td>${weight(item.weight)}</td>
      <td>${escapeHtml(item.buyer)}</td>
      <td>${escapeHtml(item.city)}</td>
      <td><div class="action-row"><button class="table-btn" onclick="editDispatch('${item.id}')">${t("edit")}</button><button class="table-btn delete" onclick="deleteDispatch('${item.id}')">${t("delete")}</button></div></td>
    </tr>
  `).join("");
  document.getElementById("dispatchRows").innerHTML = rows || `<tr><td colspan="7" class="empty-row">${t("noMatchingDispatch")}</td></tr>`;
}

function renderAll() {
  applyLanguage();
  renderDashboard();
  renderStorage();
  renderDispatch();
}

function resetStorageForm() {
  document.getElementById("storageForm").reset();
  document.getElementById("storageId").value = "";
  toggleCustomOrigin("storage");
  toggleCustomLot("storage");
  document.getElementById("storageSubmitBtn").textContent = t("saveStorageRecord");
  document.getElementById("cancelStorageEdit").classList.add("hidden");
}

function resetDispatchForm() {
  document.getElementById("dispatchForm").reset();
  document.getElementById("dispatchId").value = "";
  toggleCustomOrigin("dispatch");
  toggleCustomLot("dispatch");
  document.getElementById("dispatchSubmitBtn").textContent = t("saveDispatchRecord");
  document.getElementById("cancelDispatchEdit").classList.add("hidden");
}

function toggleCustomOrigin(prefix) {
  const select = document.getElementById(`${prefix}Origin`);
  const wrapper = document.getElementById(`${prefix}CustomOriginWrap`);
  const input = document.getElementById(`${prefix}CustomOrigin`);
  const isCustom = select.value === "Custom";
  wrapper.classList.toggle("hidden", !isCustom);
  input.required = isCustom;
  if (!isCustom) input.value = "";
}

function setOriginValue(prefix, origin) {
  const select = document.getElementById(`${prefix}Origin`);
  const input = document.getElementById(`${prefix}CustomOrigin`);
  if (KNOWN_ORIGINS.includes(origin)) {
    select.value = origin;
    input.value = "";
  } else {
    select.value = "Custom";
    input.value = origin;
  }
  toggleCustomOrigin(prefix);
}

function getOriginValue(prefix) {
  const selected = document.getElementById(`${prefix}Origin`).value;
  if (selected === "Custom") return document.getElementById(`${prefix}CustomOrigin`).value.trim();
  return selected.trim();
}

function toggleCustomLot(prefix) {
  const select = document.getElementById(`${prefix}Lot`);
  const wrapper = document.getElementById(`${prefix}CustomLotWrap`);
  const input = document.getElementById(`${prefix}CustomLot`);
  const isCustom = select.value === "Custom";
  wrapper.classList.toggle("hidden", !isCustom);
  input.required = isCustom;
  if (!isCustom) input.value = "";
}

function setLotValue(prefix, lot) {
  const select = document.getElementById(`${prefix}Lot`);
  const input = document.getElementById(`${prefix}CustomLot`);
  if (KNOWN_LOTS.includes(lot)) {
    select.value = lot;
    input.value = "";
  } else {
    select.value = "Custom";
    input.value = lot;
  }
  toggleCustomLot(prefix);
}

function getLotValue(prefix) {
  const selected = document.getElementById(`${prefix}Lot`).value;
  if (selected === "Custom") return document.getElementById(`${prefix}CustomLot`).value.trim();
  return selected.trim();
}

window.editStorage = function(id) {
  const item = state.storage.find(record => record.id === id);
  if (!item) return;
  setView("storage");
  document.getElementById("storageId").value = item.id;
  setOriginValue("storage", item.origin);
  setLotValue("storage", item.lot);
  document.getElementById("storageProcess").value = item.process;
  document.getElementById("storageWeight").value = item.weight;
  document.getElementById("storageSortedDate").value = item.sortedDate;
  document.getElementById("storageSubmitBtn").textContent = t("updateStorageRecord");
  document.getElementById("cancelStorageEdit").classList.remove("hidden");
};

window.deleteStorage = function(id) {
  if (!confirm(t("deleteStorageConfirm"))) return;
  state.storage = state.storage.filter(record => record.id !== id);
  saveState();
  showToast(t("storageDeleted"));
};

window.editDispatch = function(id) {
  const item = state.dispatch.find(record => record.id === id);
  if (!item) return;
  setView("dispatch");
  document.getElementById("dispatchId").value = item.id;
  setOriginValue("dispatch", item.origin);
  setLotValue("dispatch", item.lot);
  document.getElementById("dispatchProcess").value = item.process;
  document.getElementById("dispatchWeight").value = item.weight;
  document.getElementById("dispatchBuyer").value = item.buyer;
  document.getElementById("dispatchCity").value = item.city;
  document.getElementById("dispatchSubmitBtn").textContent = t("updateDispatchRecord");
  document.getElementById("cancelDispatchEdit").classList.remove("hidden");
};

window.deleteDispatch = function(id) {
  if (!confirm(t("deleteDispatchConfirm"))) return;
  state.dispatch = state.dispatch.filter(record => record.id !== id);
  saveState();
  showToast(t("dispatchDeleted"));
};

document.querySelectorAll(".nav-btn").forEach(button => button.addEventListener("click", () => setView(button.dataset.view)));
document.querySelectorAll("[data-jump]").forEach(button => button.addEventListener("click", () => setView(button.dataset.jump)));
document.getElementById("storageOrigin").addEventListener("change", () => toggleCustomOrigin("storage"));
document.getElementById("dispatchOrigin").addEventListener("change", () => toggleCustomOrigin("dispatch"));
document.getElementById("storageLot").addEventListener("change", () => toggleCustomLot("storage"));
document.getElementById("dispatchLot").addEventListener("change", () => toggleCustomLot("dispatch"));
document.getElementById("languageSelect").addEventListener("change", event => {
  currentLanguage = event.target.value;
  localStorage.setItem(LANGUAGE_KEY, currentLanguage);
  renderAll();
});

document.getElementById("storageForm").addEventListener("submit", event => {
  event.preventDefault();
  const id = document.getElementById("storageId").value || uid();
  const record = normalizeStorageRecord({
    id,
    origin: getOriginValue("storage"),
    lot: getLotValue("storage"),
    process: document.getElementById("storageProcess").value,
    weight: Number(document.getElementById("storageWeight").value),
    sortedDate: document.getElementById("storageSortedDate").value,
    updatedAt: new Date().toISOString()
  });

  const existingIndex = state.storage.findIndex(item => item.id === id);
  if (existingIndex >= 0) state.storage[existingIndex] = record;
  else state.storage.push(record);
  saveState();
  resetStorageForm();
  showToast(existingIndex >= 0 ? t("storageUpdated") : t("storageSaved"));
});

document.getElementById("dispatchForm").addEventListener("submit", event => {
  event.preventDefault();
  const id = document.getElementById("dispatchId").value || uid();
  const record = normalizeDispatchRecord({
    id,
    origin: getOriginValue("dispatch"),
    lot: getLotValue("dispatch"),
    process: document.getElementById("dispatchProcess").value,
    weight: Number(document.getElementById("dispatchWeight").value),
    buyer: document.getElementById("dispatchBuyer").value.trim(),
    city: document.getElementById("dispatchCity").value.trim(),
    updatedAt: new Date().toISOString()
  });

  const availableBeforeThisDispatch = getAvailableFor(record, id);
  if (record.weight > availableBeforeThisDispatch) {
    const proceed = confirm(t("overStockConfirm", weight(record.weight - availableBeforeThisDispatch)));
    if (!proceed) return;
  }

  const existingIndex = state.dispatch.findIndex(item => item.id === id);
  if (existingIndex >= 0) state.dispatch[existingIndex] = record;
  else state.dispatch.push(record);
  saveState();
  resetDispatchForm();
  showToast(existingIndex >= 0 ? t("dispatchUpdated") : t("dispatchSaved"));
});

document.getElementById("cancelStorageEdit").addEventListener("click", resetStorageForm);
document.getElementById("cancelDispatchEdit").addEventListener("click", resetDispatchForm);
document.getElementById("storageSearch").addEventListener("input", event => { storageFilter = event.target.value; renderStorage(); });
document.getElementById("dispatchSearch").addEventListener("input", event => { dispatchFilter = event.target.value; renderDispatch(); });

document.getElementById("exportJsonBtn").addEventListener("click", () => downloadFile("driva-storage-os-backup.json", JSON.stringify(state, null, 2), "application/json"));

document.getElementById("exportCsvBtn").addEventListener("click", () => {
  const storageCsv = toCsv(state.storage.map(item => ({
    ...item,
    incoming: item.weight,
    dispatched: getDispatchedFor(item),
    available: Number(item.weight || 0) - getDispatchedFor(item)
  })), ["origin", "lot", "process", "incoming", "dispatched", "available", "sortedDate"]);
  const dispatchCsv = toCsv(state.dispatch, ["origin", "lot", "process", "weight", "buyer", "city"]);
  downloadFile("driva-storage-os-export.csv", `${t("csvStorageTitle")}\n${storageCsv}\n\n${t("csvDispatchTitle")}\n${dispatchCsv}`, "text/csv");
});

document.getElementById("importJsonInput").addEventListener("change", async event => {
  const file = event.target.files[0];
  if (!file) return;
  try {
    const imported = JSON.parse(await file.text());
    if (!Array.isArray(imported.storage) || !Array.isArray(imported.dispatch)) throw new Error("Invalid format");
    state = normalizeState(imported);
    saveState();
    showToast(t("importSuccess"));
  } catch {
    alert(t("importFailed"));
  }
  event.target.value = "";
});

function toCsv(records, fields) {
  const header = fields.join(",");
  const body = records.map(record => fields.map(field => `"${String(record[field] ?? "").replace(/"/g, '""')}"`).join(",")).join("\n");
  return `${header}\n${body}`;
}

function downloadFile(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("service-worker.js").catch(() => {}));
}

toggleCustomOrigin("storage");
toggleCustomOrigin("dispatch");
toggleCustomLot("storage");
toggleCustomLot("dispatch");
renderAll();
