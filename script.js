function tampilkanCerita(judul) {
  const ceritaEl = document.getElementById("cerita");

  if (judul === "buku1") {
    ceritaEl.innerHTML = "<h2>Kisah Nabi Muhammad ﷺ</h2><p>Beliau adalah nabi terakhir, diutus untuk seluruh umat manusia...</p>";
  } else if (judul === "buku2") {
    ceritaEl.innerHTML = "<h2>Kisah Abu Bakar RA</h2><p>Abu Bakar adalah sahabat terdekat Rasulullah dan khalifah pertama...</p>";
  } else {
    ceritaEl.innerHTML = "<p>Buku tidak ditemukan.</p>";
  }
}
