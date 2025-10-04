import { useEffect } from "react"

const TEXT_SELECTOR = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "p",
  "li",
  "dt",
  "dd",
  "blockquote",
  "figcaption",
  "span",
  "small",
  "strong",
  "em",
  "label",
  "a",
  "button",
  "th",
  "td",
  "summary",
  "caption"
].join(",")

function isElementEligible(element) {
  if (!(element instanceof HTMLElement)) {
    return false
  }

  if (element.dataset.textReveal === "true") {
    return false
  }

  const text = element.textContent?.trim()
  if (!text) {
    return false
  }

  const styles = window.getComputedStyle(element)
  if (styles.visibility === "hidden" || styles.display === "none") {
    return false
  }

  return true
}

export function useTextReveal() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    let order = 0

    const applyAnimation = (element) => {
      if (!isElementEligible(element)) {
        return
      }

      element.dataset.textReveal = "true"

      if (prefersReducedMotion) {
        element.classList.add("text-reveal--no-motion")
        return
      }

      element.style.setProperty("--text-reveal-delay", `${order * 60}ms`)
      element.classList.add("text-reveal")
      order += 1
    }

    const applyToNode = (node) => {
      if (!(node instanceof Element)) {
        return
      }

      if (node.matches(TEXT_SELECTOR)) {
        applyAnimation(node)
      }

      node.querySelectorAll(TEXT_SELECTOR).forEach(applyAnimation)
    }

    document.querySelectorAll(TEXT_SELECTOR).forEach(applyAnimation)

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          applyToNode(node)
        })
      }
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true
    })

    return () => observer.disconnect()
  }, [])
}
