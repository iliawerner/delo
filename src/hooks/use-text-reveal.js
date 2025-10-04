import { useEffect } from "react"

const TEXT_SELECTOR = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "p",
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
]

const BASE_TEXT_SELECTOR = TEXT_SELECTOR.join(",")
const TARGET_SELECTOR = `${BASE_TEXT_SELECTOR},[data-text-reveal-target]`

const STAGGER_DELAY_MS = 60
const OBSERVER_OPTIONS = {
  rootMargin: "0px 0px -20% 0px",
  threshold: 0.35
}

function isElementEligible(element) {
  if (!(element instanceof HTMLElement)) {
    return false
  }

  if (element.dataset.textReveal === "true") {
    return false
  }

  if (element.closest("[data-text-reveal-opt-out]")) {
    return false
  }

  const hasForcedTarget = element.hasAttribute("data-text-reveal-target")

  if (!hasForcedTarget) {
    const text = element.textContent?.trim()
    if (!text) {
      return false
    }
  }

  const styles = window.getComputedStyle(element)
  if (styles.visibility === "hidden" || styles.display === "none") {
    return false
  }

  return true
}

export function useTextReveal() {
  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined
    }

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const prefersReducedMotion = motionQuery.matches
    const groupCounters = new WeakMap()

    const intersectionObserver = prefersReducedMotion
      ? null
      : new IntersectionObserver((entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) {
              continue
            }

            const target = entry.target
            target.classList.add("text-reveal--visible")
            intersectionObserver.unobserve(target)
          }
        }, OBSERVER_OPTIONS)

    const registerElement = (element) => {
      if (!isElementEligible(element)) {
        return
      }

      element.dataset.textReveal = "true"

      if (prefersReducedMotion) {
        element.classList.add("text-reveal--no-motion")
        return
      }

      const parent = element.parentElement ?? document.body
      const order = groupCounters.get(parent) ?? 0
      groupCounters.set(parent, order + 1)
      element.style.setProperty("--text-reveal-delay", `${order * STAGGER_DELAY_MS}ms`)
      element.classList.add("text-reveal")
      intersectionObserver.observe(element)
    }

    const processNode = (node) => {
      if (!(node instanceof Element)) {
        return
      }

      if (node.matches(TARGET_SELECTOR)) {
        registerElement(node)
      }

      node.querySelectorAll(TARGET_SELECTOR).forEach(registerElement)
    }

    document.querySelectorAll(TARGET_SELECTOR).forEach(registerElement)

    const mutationObserver = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach(processNode)
      }
    })

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    })

    return () => {
      mutationObserver.disconnect()
      intersectionObserver?.disconnect()
    }
  }, [])
}
