/** Physician portal — set GATSBY_PATIENT_PORTAL_URL in Netlify if this default changes. */
export const PATIENT_PORTAL_URL =
  typeof process !== "undefined" && process.env.GATSBY_PATIENT_PORTAL_URL
    ? process.env.GATSBY_PATIENT_PORTAL_URL
    : "https://sft.specialized-med-business.com/specMed/"
