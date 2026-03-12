const { contextBridge, ipcRenderer } = require("electron");
const { on } = require("events");

contextBridge.exposeInMainWorld("api", {
  ouvrir: () => ipcRenderer.invoke("open-file-dialog"),

  sauvegarder: (content) => ipcRenderer.invoke("save-content", content),

  onFileOpened: (cb) =>
    ipcRenderer.on("file-opened", (_event, data) => cb(data)),

  onMenuSave: (cb) => ipcRenderer.on("menu-save", () => cb()),

  onMenuNew: (cb) => ipcRenderer.on("menu-new", () => cb()),

  getPreference: (key, defaultValue) =>
    ipcRenderer.invoke("store-get", key, defaultValue),

  setPreference: (key, value) => ipcRenderer.invoke("store-set", key, value),

  deletePreference: (key) => ipcRenderer.invoke("store-delete", key),
});
