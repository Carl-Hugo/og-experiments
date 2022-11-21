var m = Object.defineProperty;
var S = (t, e, n) => e in t ? m(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var l = (t, e, n) => (S(t, typeof e != "symbol" ? e + "" : e, n), n);
function s(...t) {
  console.debug("og-experiments |", ...t);
}
const u = {
  flow: {
    activate: (t) => Promise.resolve()
  }
};
class v {
  init() {
    s("ActivateScene initiating"), u.flow = {
      activate: this.activate
    }, CONFIG.TextEditor.enrichers.push({
      pattern: /@ActivateScene\[([^\]]+)\](?:{([^}]+)})?/gm,
      enricher: (e, n) => {
        let [a, o] = e.slice(1, 3);
        var f = game.scenes.get(a);
        let p = !f;
        const i = {
          name: o,
          icon: "fas fa-code",
          classes: ["content-link"],
          dataset: {
            uuid: `ActivateScene.${a}`,
            id: a,
            type: "ActivateScene",
            tooltip: "Scene",
            broken: p
          }
        };
        p && (i.icon = "fas fa-unlink", i.classes.push("broken"), i.name = a);
        const c = document.createElement("a");
        c.classList.add(...i.classes), c.draggable = !0;
        for (let [g, h] of Object.entries(i.dataset))
          c.dataset[g] = h;
        return c.innerHTML = `<i class="${i.icon}"></i><i class="fas fa-map"></i> ${i.name}`, c;
      }
    }), document.addEventListener("click", async (e) => {
      var n = e.target;
      n && n.dataset && n.dataset.type === "ActivateScene" && n.dataset.broken === "false" && (e.preventDefault(), await this.activate(n.dataset.id));
    }), s("ActivateScene initiated");
  }
  ready() {
  }
  async activate(e) {
    s(`ActivateScene activating: ${e}`);
    const n = game.scenes.active.journal;
    n && n.sheet && n.sheet.close();
    const a = game.scenes.get(e);
    if (a && (await a.activate(), a.journal)) {
      const o = a.journal;
      if (o.sheet) {
        if (!o.testUserPermission(game.user, "LIMITED"))
          return ui.notifications.warn(`You do not have permission to view this ${o.documentName} sheet.`);
        o.sheet.render(!0);
      }
    }
  }
}
const d = "og-experiments";
class y {
  constructor() {
    l(this, "_openSceneNotes", !0);
    l(this, "_openSceneNotesKey", "openSceneNotes");
  }
  init() {
    s("OpenSceneNotes initiating"), game.settings.register(d, this._openSceneNotesKey, {
      name: "Auto-open scene notes?",
      hint: "If enabled, the scene notes of the current scene will open when the server first load.",
      scope: "client",
      config: !0,
      type: Boolean,
      default: this._openSceneNotes,
      onChange: (e) => this._openSceneNotes = e
    }), this.openSceneNotes = game.settings.get(d, this._openSceneNotesKey), s("OpenSceneNotes initiated");
  }
  ready() {
    if (s("OpenSceneNotes is getting ready"), this.openSceneNotes) {
      const e = game.scenes.active.journal;
      e && e.sheet && e.sheet.render(!0);
    }
    s("OpenSceneNotes is ready");
  }
  get openSceneNotes() {
    return this._openSceneNotes;
  }
  set openSceneNotes(e) {
    this._openSceneNotes = e, game.settings.set(d, this._openSceneNotesKey, e);
  }
}
const r = [
  new v(),
  new y()
];
Hooks.once("init", async function() {
  s("initiating");
  for (let t = 0; t < r.length; t++) {
    const e = r[t];
    e.init && e.init();
  }
  game.og = u, s("initiated");
});
Hooks.once("ready", async function() {
  s("readying");
  for (let t = 0; t < r.length; t++) {
    const e = r[t];
    e.ready && e.ready();
  }
  s("ready");
});
if (process.env.NODE_ENV === "development" && module.hot && (module.hot.accept(), module.hot.status() === "apply"))
  for (const t in _templateCache)
    Object.prototype.hasOwnProperty.call(_templateCache, t) && delete _templateCache[t];
//# sourceMappingURL=index.mjs.map
