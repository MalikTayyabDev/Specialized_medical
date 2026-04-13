/** Patient / physician portal — set GATSBY_PATIENT_PORTAL_URL in Netlify if this default changes. */
export const PATIENT_PORTAL_URL =
  typeof process !== "undefined" && process.env.GATSBY_PATIENT_PORTAL_URL
    ? process.env.GATSBY_PATIENT_PORTAL_URL
    : "https://www.specialized-med.com/patient-portal/"
