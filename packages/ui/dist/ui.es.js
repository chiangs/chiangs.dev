import a from "react";
const u = {
  variant: "primary",
  label: "button",
  type: "button",
  isDisabled: !1,
  clickHandler: () => null,
  customClasses: []
}, m = (e) => {
  const t = "button", { variant: l, label: n, type: c, isDisabled: s, clickHandler: o, customClasses: i } = {
    ...u,
    ...e
  }, r = [t, l, [...i || []]].join(
    " "
  ), d = () => {
    s || o();
  };
  return /* @__PURE__ */ a.createElement("button", {
    className: r,
    "data-testid": t,
    type: c,
    disabled: s,
    onClick: d
  }, /* @__PURE__ */ a.createElement("div", {
    className: `${t}--content`
  }, e.children || n));
};
export {
  m as Button
};
