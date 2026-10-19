// ==========================================================
// Responsive horizontal bar chart, plain JavaScript and SVG.
// It redraws whenever the window is resized, so it always fits the screen.
// ==========================================================

(function () {
  const chartEl = document.getElementById("chart");
  const buttons = document.querySelectorAll(".chart-controls button");
  const SVG_NS = "http://www.w3.org/2000/svg";
  let sortMode = "value";

  // Helper: create an SVG element with attributes in one line
  function el(tag, attrs) {
    const node = document.createElementNS(SVG_NS, tag);
    for (const key in attrs) node.setAttribute(key, attrs[key]);
    return node;
  }

  function draw() {
    const rows = WATER_DATA.provinces.slice();

    // Never draw invented numbers: if any value is missing, say so
    if (rows.some(r => r.value === null)) {
      chartEl.innerHTML = '<p class="chart-pending">Chart data pending: add the provincial figures in js/data.js.</p>';
      return;
    }

    if (sortMode === "value") rows.sort((a, b) => b.value - a.value);
    else rows.sort((a, b) => a.name.localeCompare(b.name));

    // Layout: narrow screens get a narrower label column
    const width = chartEl.clientWidth;
    const labelWidth = width < 500 ? 110 : 150;
    const valueWidth = 56;
    const rowHeight = 36;
    const barHeight = 22;
    const top = 28; // room for the national label
    const plotWidth = width - labelWidth - valueWidth;
    const height = top + rows.length * rowHeight;

    // Map 0–100% onto the plot width
    const x = pct => (pct / 100) * plotWidth;

    const svg = el("svg", {
      viewBox: `0 0 ${width} ${height}`,
      role: "img",
      "aria-label": `Bar chart of piped water access by province, ${WATER_DATA.year}`
    });

    rows.forEach((row, i) => {
      const y = top + i * rowHeight;
      const g = el("g", { class: "row" });

      const label = el("text", { class: "label", x: labelWidth - 10, y: y + barHeight / 2 + 5, "text-anchor": "end" });
      label.textContent = row.name;

      const bar = el("rect", { class: "bar", x: labelWidth, y: y, height: barHeight, width: x(row.value), rx: 2 });
      const pct = `${row.value.toFixed(1)}%`; // always one decimal: 95.0%, not 95%

      const tip = el("title", {});
      tip.textContent = `${row.name}: ${pct}`;
      bar.appendChild(tip);

      const value = el("text", { class: "value", x: labelWidth + x(row.value) + 8, y: y + barHeight / 2 + 5 });
      value.textContent = pct;

      g.append(label, bar, value);
      svg.appendChild(g);
    });

    // National reference line, drawn last so it sits on top of the bars
    const nx = labelWidth + x(WATER_DATA.national);
    svg.appendChild(el("line", { class: "national-line", x1: nx, x2: nx, y1: top - 6, y2: height }));
    const nLabel = el("text", { class: "national-label", x: nx, y: top - 12, "text-anchor": "middle" });
    nLabel.textContent = `National ${WATER_DATA.national}%`;
    svg.appendChild(nLabel);

    chartEl.replaceChildren(svg);
  }

  // Sort buttons
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      sortMode = btn.dataset.sort;
      buttons.forEach(b => b.setAttribute("aria-pressed", String(b === btn)));
      draw();
    });
  });

  // Draw once now, then redraw whenever the chart's own width changes
  // (phone rotation, window resize)
  let lastWidth = chartEl.clientWidth;
  draw();
  new ResizeObserver(() => {
    if (chartEl.clientWidth === lastWidth) return;
    lastWidth = chartEl.clientWidth;
    draw();
  }).observe(chartEl);
})();
