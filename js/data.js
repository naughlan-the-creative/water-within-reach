// ==========================================================
// Chart data: households with access to piped or tap water
// (in the dwelling, on-site or off-site), 2025 (%)
// Source: Stats SA, General Household Survey 2025 (P0318)
//
// "published": stated in the text under Figure 9.1, p. 29
// "calculated": from Table 9.1 (p. 129) as
//   (tap in dwelling + tap in yard + neighbour's tap + public/communal tap) ÷ total households
//   This method reproduces the published values to within 0.3 points.
// ==========================================================

const WATER_DATA = {
  year: 2025,
  national: 87.4, // published; Table 9.1 calculation also gives 87.4
  provinces: [
    { name: "Western Cape",  value: 99.5 }, // published
    { name: "Eastern Cape",  value: 67.7 }, // published
    { name: "Northern Cape", value: 95.5 }, // published
    { name: "Free State",    value: 95.0 }, // calculated
    { name: "KwaZulu-Natal", value: 81.2 }, // published
    { name: "North West",    value: 86.1 }, // calculated
    { name: "Gauteng",       value: 98.3 }, // published
    { name: "Mpumalanga",    value: 86.3 }, // calculated
    { name: "Limpopo",       value: 63.2 }  // published
  ]
};
