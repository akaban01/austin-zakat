// Sourced from austinzakat.org (the live GAMRC site) — see README "Content notes".

export const eligibleCities = [
  "Austin",
  "Cedar Park",
  "Round Rock",
  "Leander",
  "Pflugerville",
  "Manor",
  "Georgetown",
  "Kyle",
  "Buda",
];

// The nine zakat committees that make up GAMRC. Only the ones with a
// verified public homepage are linked; the rest are named to match.
export const partnerMasajid = [
  { name: "Islamic Center of Greater Austin (ICGA)", href: "https://austinmosque.org/" },
  { name: "Nueces Mosque", href: "https://www.nuecesmosque.com/" },
  { name: "Islamic Center of Brushy Creek (ICBC)", href: "https://icbrushycreek.org/" },
  { name: "Islamic Center of Round Rock (ICRR)", href: "https://roundrockmasjid.org/" },
  { name: "Al-Noor Masjid & Community Center (Al-Noor MCC)", href: "https://alnoormcc.org/" },
];

// ICLT, GIC, QCIC, and ICHC round out GAMRC's nine committees; no verified
// general homepage was found for these, so they're named without a link.
export const otherPartnerMasajid = ["ICLT", "GIC", "QCIC", "ICHC"];

// Direct donation links for each committee, as listed on austinzakat.org.
export const masjidDonationLinks = [
  { name: "Nueces Mosque", href: "https://www.feelingblessed.org/nueces-mosque" },
  { name: "ICGA (Islamic Center of Greater Austin)", href: "https://payments.madinaapps.com/ICGA" },
  { name: "ICBC (Islamic Center of Brushy Creek)", href: "https://icbrushycreek.org/donate/" },
  { name: "Al-Noor MCC", href: "https://alnoormcc.org/donate/" },
  { name: "ICLT (Islamic Center of Lake Travis)", href: "https://www.feelingblessed.org/gd/islamic-center-of-lake-travis" },
  { name: "GIC", href: "https://us.mohid.co/tx/austin/gic/masjid/online/donation" },
  { name: "ICRR (Round Rock Masjid)", href: "https://roundrockmasjid.org/donate/" },
];
