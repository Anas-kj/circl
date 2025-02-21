import gsap from "gsap"
export function removeLock() {
  let body = document.body
  if (body) {
    body.style.overflow = "auto"
  }
}
export function addLock() {
  let body = document.body
  if (body) {
    body.style.overflow = "hidden"
  }
}
export function openModel() {
  addLock()
  gsap.to(".model-overlay", { y: "0%", display: "block" })
}
export function closeModel() {
  gsap.to(".model-overlay", { y: "100%", display: "none" })
  removeLock()
}
