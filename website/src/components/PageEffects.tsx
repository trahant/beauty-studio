"use client";

import { useEffect } from "react";

export function PageEffects() {
  useEffect(() => {
    // FAQ accordion
    const faqButtons = document.querySelectorAll<HTMLButtonElement>(".faq-q");
    faqButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const item = btn.closest(".faq-item");
        const isOpen = item?.classList.contains("open");
        document.querySelectorAll(".faq-item").forEach((i) => {
          i.classList.remove("open");
          const icon = i.querySelector(".icon");
          if (icon) icon.textContent = "+";
        });
        if (item && !isOpen) {
          item.classList.add("open");
          const icon = btn.querySelector(".icon");
          if (icon) icon.textContent = "\u2212";
        }
      });
    });

    // Fade-up on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
  }, []);

  return null;
}
