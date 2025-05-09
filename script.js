const data = [
  {
    policy: "Styled himself 'Gau–Brahmin Pratipālak'",
    source: "Sabḥāsad Bakhar, p. 45",
    verse: "1.92 – King’s excellence depends on honoring Brahmins"
  },
  {
    policy: "Invited Kashi Brahmins for coronation",
    source: "Sardesai, p. 356; Sabḥāsad",
    verse: "7.2, 7.35 – Kshatriya king must be crowned by Brahmins"
  },
  {
    policy: "Asserted Sisodia Kshatriya lineage via Gaga Bhatt",
    source: "Sabḥāsad, Sardesai",
    verse: "10.3–5 – Varna by birth; ruling is Kshatriya dharma"
  },
  {
    policy: "Discouraged inter-caste marriage",
    source: "Court records, judicial behavior",
    verse: "10.1–27 – Inter-caste unions condemned"
  },
  {
    policy: "Routine brahmadeya grants",
    source: "Sarkar, pp. 211–12",
    verse: "11.3–4 – Food/wealth for excellent twice-born"
  },
  {
    policy: "Re-endowed temples, cow shelters",
    source: "Sardesai, p. 362",
    verse: "7.17, 3.69 – Kings must protect cows and temples"
  },
  {
    policy: "Funded Vedic yajñas",
    source: "Coronation rituals",
    verse: "7.75–76 – Righteous king performs sacrifices"
  },
  {
    policy: "Upheld varṇa-āśrama duties",
    source: "Sabḥāsad, coronation discourse",
    verse: "7.85–87 – King must guard varṇa duties"
  },
  {
    policy: "Patronized Brahmin ritual authority",
    source: "Sardesai, Sarkar, court records",
    verse: "1.93–94, 11.1–2 – Brahmins are inherently superior"
  },
  {
    policy: "Discouraged religious innovation",
    source: "Administrative and temple policy",
    verse: "11.1–3, 11.33 – King must uphold śruti-based religion"
  },
  {
    policy: "Modeled kingship on rāma-rājya",
    source: "Coronation epithets, traditions",
    verse: "7.4–7.6 – Ideal king protects social order"
  }
];

const tableBody = document.getElementById("data-body");

data.forEach(row => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${row.policy}</td>
    <td>${row.source}</td>
    <td>${row.verse}</td>
  `;
  tableBody.appendChild(tr);
});

// Collapsible toggle logic
document.querySelectorAll(".collapsible").forEach(section => {
  section.addEventListener("click", () => {
    section.classList.toggle("active");
  });
});
