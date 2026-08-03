"use client";

import { useEffect } from "react";
import * as CookieConsent from "vanilla-cookieconsent";
import "vanilla-cookieconsent/dist/cookieconsent.css";

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

function updateGtagConsent(cookie: CookieConsent.CookieValue) {
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  }
  gtag("consent", "update", {
    analytics_storage: cookie.categories.includes("analytics")
      ? "granted"
      : "denied"
  });
}

export default function CookieConsentBanner() {
  useEffect(() => {
    CookieConsent.run({
      guiOptions: {
        consentModal: {
          layout: "box",
          position: "bottom left",
          equalWeightButtons: true
        },
        preferencesModal: {
          layout: "box",
          position: "right"
        }
      },
      categories: {
        necessary: {
          readOnly: true,
          enabled: true
        },
        analytics: {}
      },
      onFirstConsent: ({ cookie }) => updateGtagConsent(cookie),
      onConsent: ({ cookie }) => updateGtagConsent(cookie),
      onChange: ({ cookie }) => updateGtagConsent(cookie),
      language: {
        default: "en",
        translations: {
          en: {
            consentModal: {
              title: "This site uses cookies",
              description:
                "I use Google Analytics to understand how visitors use this portfolio. No data is sold or shared with third parties.",
              acceptAllBtn: "Accept all",
              acceptNecessaryBtn: "Reject analytics",
              showPreferencesBtn: "Manage preferences",
              footer:
                '<a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Google Privacy Policy</a>'
            },
            preferencesModal: {
              title: "Cookie preferences",
              acceptAllBtn: "Accept all",
              acceptNecessaryBtn: "Reject analytics",
              savePreferencesBtn: "Save preferences",
              closeIconLabel: "Close",
              sections: [
                {
                  title: "Strictly necessary",
                  description:
                    "Required for the site to function properly. Always active.",
                  linkedCategory: "necessary"
                },
                {
                  title: "Analytics",
                  description:
                    "Helps me understand site traffic and usage patterns via Google Analytics.",
                  linkedCategory: "analytics"
                }
              ]
            }
          }
        }
      }
    });
  }, []);

  return null;
}
