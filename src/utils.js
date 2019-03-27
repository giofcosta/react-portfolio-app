export function changeHash(myhash, animateHeader) {
  if (window.history.pushState) {
    window.history.pushState(null, null, myhash);
  } else {
    window.location.hash = myhash;
  }

  window.dispatchEvent(new HashChangeEvent("hashchange"));

  if (animateHeader) {
    document.getElementById("header").classList.add("animate");
  } else {
    document.getElementById("header").classList.remove("animate");
  }
}
