function tampilkanCerita(judul) {
  const ceritaEl = document.getElementById("cerita");

  if (judul === "buku1") {
    ceritaEl.innerHTML = `
      <h2>Kisah Nabi Muhammad ﷺ (Versi Panjang & Lengkap)</h2>

      <p><strong>Nama lengkap:</strong> Muhammad bin Abdullah bin Abdul Muthalib bin Hasyim. Beliau lahir di kota Mekah pada tanggal 12 Rabiul Awal Tahun Gajah (sekitar tahun 570 M).</p>

      <p>Sebelum beliau lahir, ayahnya wafat. Ibunya juga wafat saat beliau berusia 6 tahun. Beliau kemudian diasuh oleh kakeknya Abdul Muthalib, dan setelah itu oleh pamannya Abu Thalib.</p>

      <p>Sejak muda, beliau dikenal jujur dan terpercaya. Karena itu masyarakat Mekah memanggil beliau dengan julukan <strong>Al-Amin</strong>.</p>

      <p>Pada usia 25 tahun, beliau menikah dengan Khadijah binti Khuwailid dan hidup harmonis. Pada usia 40 tahun, beliau menerima wahyu pertama di Gua Hira melalui Malaikat Jibril, berupa perintah membaca:</p>
      <blockquote><em>"Iqra' bismi rabbika alladzi khalaq..."</em> (QS. Al-‘Alaq: 1)</blockquote>

      <p>Sejak itu beliau mulai berdakwah mengajak manusia menyembah Allah. Namun banyak yang menolak dan menyiksa pengikut beliau. Di tahun ke-10 kenabian, Khadijah dan Abu Thalib wafat, dan tahun itu dikenal sebagai <em>‘Aamul Huzn</em> (Tahun Kesedihan).</p>

      <p>Setelah peristiwa Isra' Mi'raj, beliau hijrah ke Madinah dan membangun masyarakat Islam yang kuat. Di sana beliau membuat Piagam Madinah, mempersaudarakan kaum Muhajirin dan Anshar, serta mendirikan masjid sebagai pusat peradaban.</p>

      <p>Beliau memimpin berbagai peperangan, seperti Perang Badar, Uhud, dan Khandaq. Meskipun menghadapi banyak ujian, Islam terus berkembang hingga beliau berhasil membebaskan Mekah pada tahun ke-8 Hijriyah tanpa peperangan berdarah.</p>

      <p>Pada tahun ke-10 Hijriyah, beliau melaksanakan Haji Wada’. Dalam khutbahnya, beliau menyampaikan:</p>
      <blockquote>
        “Aku tinggalkan kepada kalian dua perkara, kalian tidak akan sesat jika berpegang teguh kepada keduanya: <strong>Kitabullah dan Sunnahku</strong>.”
      </blockquote>

      <p>Setelah kembali ke Madinah, beliau sakit dan wafat pada 12 Rabiul Awal tahun ke-11 H (632 M) dalam usia 63 tahun. Beliau dimakamkan di kamar Aisyah, yang kini termasuk dalam Masjid Nabawi.</p>

      <p><strong>Warisan terbesar beliau adalah Al-Qur’an dan Sunnah.</strong> Beliau adalah suri teladan terbaik sepanjang masa.</p>

      <p><em>Ya Allah, limpahkanlah shalawat dan salam kepada Nabi Muhammad ﷺ dan keluarga serta sahabat beliau.</em></p>
    `;
  } else {
    ceritaEl.innerHTML = "<p>Buku tidak ditemukan.</p>";
  }
}
