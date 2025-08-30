const now = new Date();
const mins = now.getMinutes();
const hour = now.getHours();

// सही angle निकालना (no +90 shift)
const hourDegrees = (30 * hour + mins / 2) % 360;

// Degree → Radians
const radians = hourDegrees * Math.PI / 180;

// Build rotation matrix
let a = Math.cos(radians);
let b = Math.sin(radians);
let c = -b;
let d = a;
let e = 0;
let f = 0;

// Cypress को चाहिए fixed 6 decimal places
a = parseFloat(a.toFixed(6));
b = parseFloat(b.toFixed(6));
c = parseFloat(c.toFixed(6));
d = parseFloat(d.toFixed(6));
e = parseFloat(e.toFixed(6));
f = parseFloat(f.toFixed(6));

cy.get('.hour-hand').should(
  'have.css',
  'transform',
  `matrix(${a}, ${b}, ${c}, ${d}, ${e}, ${f})`
);
