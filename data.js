// ================= KONFIGURASI DEFAULT SEKOLAH & PIN =================
const DEFAULT_SCHOOL_CONFIG = {
  pin: "12345",
  yayasan: "YAYASAN PENDIDIKAN MUTIARA HARAPAN",
  schoolName: "TK MUTIARA HARAPAN",
  schoolAddress: "Sei Meranti, Kec. Tanjung Medan, Kab. Rokan Hilir, Prov. Riau - Kode Pos 28983",
  npsn: "70047565",
  semester: "I (Ganjil) / Tahun Ajaran 2026-2027",
  kepsekName: "Kepala Sekolah TK Mutiara Harapan",
  kepsekNip: "-",
  guruName: "Miss Laila Hafni",
  guruNip: "-",
  ttdDate: "Tanjung Medan, 19 Desember 2026"
};

function generateDefaultNarasi(nama) {
  return {
    agamaNarasi: `Ananda ${nama} menunjukkan perkembangan yang sangat baik dalam mengenal ajaran agama yang dianutnya. Ananda terbiasa mengucapkan salam, berdoa sebelum dan sesudah melakukan kegiatan, serta menunjukkan sikap santun, jujur, dan menyayangi teman maupun ciptaan Tuhan di lingkungan sekolah.`,
    jatiDiriNarasi: `Ananda ${nama} mampu mengenali dan mengelola emosinya dengan baik saat bermain bersama teman. Ananda menunjukkan kemandirian dalam merawat diri, berani tampil percaya diri di depan kelas, serta memiliki koordinasi motorik kasar dan halus yang berkembang optimal sesuai usianya.`,
    literasiNarasi: `Ananda ${nama} menunjukkan rasa ingin tahu yang tinggi melalui kegiatan eksplorasi dan bermain. Ananda mampu menyimak cerita, mengungkapkan gagasan secara lisan dengan runtut, mengenal konsep bilangan dan bentuk geometri sederhana, serta mengekspresikan imajinasinya melalui karya seni dan menggambar.`,
    p5Narasi: `Dalam kegiatan Projek Penguatan Profil Pelajar Pancasila (P5), ananda ${nama} aktif bergotong royong, menghargai perbedaan, serta antusias menjaga kebersihan dan kelestarian lingkungan sekitar sekolah.`,
    refleksiOrtu: `Terima kasih atas pendampingan dan kerja sama Ayah/Bunda di rumah dalam mendukung pembiasaan baik serta kemandirian ananda ${nama}.`
  };
}

function getLevel(score) {
  const n = Number(score);
  if (n >= 90) return "l1";
  if (n >= 75) return "l2";
  if (n >= 60) return "l3";
  return "l4";
}

// ================= DATA 12 PESERTA DIDIK & NILAI SPESIFIK DARI EXCEL =================
const RAW_STUDENTS_EXCEL = [
  {
    id: 1, nama: "DAFFA AFFNAN FADLAN", panggilan: "DAFFA", jk: "L", nisn: "-", nik: "1410000000000000",
    tempatLahir: "Kabupaten Rokan Hilir", tglLahir: "06-09-2021", agama: "Islam", rombel: "Rombel B",
    ortu: "Muhammad Wahyu", tb: "110", bb: "25", lk: "51", sakit: 0, izin: 0, alpa: 0,
    peringkat: "Peringkat 9",
    juara: "DAFFA AFFNAN FADLAN berada pada peringkat 14 dari 19 anak di Rombel B dengan nilai rata-rata 76,75. Terus semangat dan tingkatkan prestasinya!",
    scores: { agama: "80", moral: "72", sosial: "75", mandiri: "75", indo: "80", inggris: "75", numerasi: "80", sains: "80", tekno: "74", seni: "75", motorik: "80", sd: "75" }
  },
  {
    id: 2, nama: "DANIEL", panggilan: "DANIEL", jk: "L", nisn: "-", nik: "1410000000000000",
    tempatLahir: "Tanjung Medan", tglLahir: "16-08-2020", agama: "Kristen", rombel: "Rombel B",
    ortu: "Andika Pratama", tb: "111", bb: "20", lk: "51", sakit: 0, izin: 0, alpa: 0,
    peringkat: "Peringkat 10",
    juara: "DANIEL berada pada peringkat 16 dari 19 anak di Rombel B dengan nilai rata-rata 75,92. Terus semangat dan tingkatkan prestasinya!",
    scores: { agama: "80", moral: "76", sosial: "73", mandiri: "74", indo: "80", inggris: "72", numerasi: "75", sains: "77", tekno: "73", seni: "75", motorik: "80", sd: "76" }
  },
  {
    id: 3, nama: "DESVIA ADRIELLA TOBING", panggilan: "DESVIA", jk: "P", nisn: "-", nik: "1410000000000000",
    tempatLahir: "Kabupaten Rokan Hilir", tglLahir: "13-12-2020", agama: "Kristen", rombel: "Rombel B",
    ortu: "Hotben L Tobing", tb: "110", bb: "18", lk: "51", sakit: 0, izin: 0, alpa: 0,
    peringkat: "Peringkat 1",
    juara: "DESVIA ADRIELLA TOBING berada pada peringkat 5 dari 19 anak di Rombel B dengan nilai rata-rata 82,92. Terus semangat dan tingkatkan prestasinya!",
    scores: { agama: "80", moral: "80", sosial: "84", mandiri: "75", indo: "96", inggris: "85", numerasi: "92", sains: "86", tekno: "75", seni: "80", motorik: "80", sd: "82" }
  },
  {
    id: 4, nama: "DOMINIK NAPATAR SIHOMBING", panggilan: "DOMINIK", jk: "L", nisn: "-", nik: "6110000000000000",
    tempatLahir: "Sintang", tglLahir: "29-06-2021", agama: "Katholik", rombel: "Rombel B",
    ortu: "Tomson Sihombing", tb: "110", bb: "25", lk: "55", sakit: 0, izin: 0, alpa: 0,
    peringkat: "Peringkat 2",
    juara: "DOMINIK NAPATAR SIHOMBING berada pada peringkat 7 dari 19 anak di Rombel B dengan nilai rata-rata 81,08. Terus semangat dan tingkatkan prestasinya!",
    scores: { agama: "80", moral: "75", sosial: "80", mandiri: "74", indo: "92", inggris: "84", numerasi: "90", sains: "85", tekno: "75", seni: "78", motorik: "80", sd: "80" }
  },
  {
    id: 5, nama: "FEODORA TINDAON", panggilan: "FEODORA", jk: "P", nisn: "-", nik: "1410000000000000",
    tempatLahir: "Bagan Batu", tglLahir: "12-06-2021", agama: "Katholik", rombel: "Rombel B",
    ortu: "Friwando Sitindaon", tb: "120", bb: "23", lk: "54", sakit: 0, izin: 0, alpa: 0,
    peringkat: "Peringkat 7",
    juara: "FEODORA TINDAON berada pada peringkat 13 dari 19 anak di Rombel B dengan nilai rata-rata 77,75. Terus semangat dan tingkatkan prestasinya!",
    scores: { agama: "80", moral: "80", sosial: "78", mandiri: "75", indo: "80", inggris: "76", numerasi: "80", sains: "78", tekno: "74", seni: "75", motorik: "80", sd: "77" }
  },
  {
    id: 6, nama: "GERALDO SAMOSIR", panggilan: "GERALDO", jk: "L", nisn: "-", nik: "1410000000000000",
    tempatLahir: "Bagan Batu", tglLahir: "17-05-2021", agama: "Kristen", rombel: "Rombel B",
    ortu: "Juspair Samosir", tb: "110", bb: "24", lk: "51", sakit: 0, izin: 0, alpa: 0,
    peringkat: "Peringkat 4",
    juara: "GERALDO SAMOSIR berada pada peringkat 9 dari 19 anak di Rombel B dengan nilai rata-rata 79,75. Terus semangat dan tingkatkan prestasinya!",
    scores: { agama: "80", moral: "75", sosial: "73", mandiri: "75", indo: "85", inggris: "78", numerasi: "95", sains: "86", tekno: "75", seni: "80", motorik: "80", sd: "75" }
  },
  {
    id: 7, nama: "MARTIN MIRACLE SITORUS", panggilan: "MARTIN", jk: "L", nisn: "-", nik: "1410000000000000",
    tempatLahir: "Tanjung Medan", tglLahir: "23-09-2020", agama: "Kristen", rombel: "Rombel B",
    ortu: "Rayanto Sitorus", tb: "110", bb: "23", lk: "50", sakit: 0, izin: 0, alpa: 0,
    peringkat: "Peringkat 5",
    juara: "MARTIN MIRACLE SITORUS berada pada peringkat 10 dari 19 anak di Rombel B dengan nilai rata-rata 79,42. Terus semangat dan tingkatkan prestasinya!",
    scores: { agama: "80", moral: "85", sosial: "82", mandiri: "73", indo: "85", inggris: "75", numerasi: "80", sains: "75", tekno: "75", seni: "77", motorik: "80", sd: "86" }
  },
  {
    id: 8, nama: "WIRA PRADANA", panggilan: "WIRA", jk: "L", nisn: "-", nik: "1410000000000000",
    tempatLahir: "Tanjung Medan", tglLahir: "09-08-2020", agama: "Islam", rombel: "Rombel B",
    ortu: "Suyetno", tb: "110", bb: "20", lk: "51", sakit: 0, izin: 0, alpa: 0,
    peringkat: "Peringkat 6",
    juara: "WIRA PRADANA berada pada peringkat 11 dari 19 anak di Rombel B dengan nilai rata-rata 78,75. Terus semangat dan tingkatkan prestasinya!",
    scores: { agama: "80", moral: "80", sosial: "75", mandiri: "74", indo: "84", inggris: "78", numerasi: "82", sains: "80", tekno: "74", seni: "80", motorik: "80", sd: "78" }
  },
  {
    id: 9, nama: "DELIMA NABABAN", panggilan: "DELIMA", jk: "P", nisn: "-", nik: "-",
    tempatLahir: "Sei Meranti", tglLahir: "2021", agama: "Kristen", rombel: "Rombel A",
    ortu: "-", tb: "110", bb: "19", lk: "50", sakit: 0, izin: 0, alpa: 0,
    peringkat: "Peringkat 12",
    juara: "DELIMA NABABAN berada pada peringkat 7 dari 7 anak di Rombel A dengan nilai rata-rata 74,08. Terus semangat dan tingkatkan prestasinya!",
    scores: { agama: "80", moral: "75", sosial: "72", mandiri: "73", indo: "75", inggris: "74", numerasi: "72", sains: "73", tekno: "72", seni: "74", motorik: "76", sd: "73" }
  },
  {
    id: 10, nama: "ALIANDO ALVARO KENZY", panggilan: "ALIANDO", jk: "L", nisn: "-", nik: "-",
    tempatLahir: "Sei Meranti", tglLahir: "2021", agama: "Islam", rombel: "Rombel A",
    ortu: "-", tb: "110", bb: "19", lk: "50", sakit: 0, izin: 0, alpa: 0,
    peringkat: "Peringkat 11",
    juara: "ALIANDO ALVARO KENZY berada pada peringkat 6 dari 7 anak di Rombel A dengan nilai rata-rata 75,67. Terus semangat dan tingkatkan prestasinya!",
    scores: { agama: "80", moral: "70", sosial: "74", mandiri: "75", indo: "80", inggris: "72", numerasi: "80", sains: "76", tekno: "72", seni: "75", motorik: "80", sd: "74" }
  },
  {
    id: 11, nama: "ANUGRAH SAPUTRA ZEGA", panggilan: "ANUGRAH", jk: "L", nisn: "-", nik: "-",
    tempatLahir: "Sei Meranti", tglLahir: "2021", agama: "Kristen", rombel: "Rombel A",
    ortu: "-", tb: "110", bb: "19", lk: "50", sakit: 0, izin: 0, alpa: 0,
    peringkat: "Peringkat 8",
    juara: "ANUGRAH SAPUTRA ZEGA berada pada peringkat 4 dari 7 anak di Rombel A dengan nilai rata-rata 77. Terus semangat dan tingkatkan prestasinya!",
    scores: { agama: "80", moral: "75", sosial: "72", mandiri: "75", indo: "86", inggris: "75", numerasi: "80", sains: "74", tekno: "73", seni: "76", motorik: "80", sd: "78" }
  },
  {
    id: 12, nama: "MUHAMMAD ALFAHRIANSYAH", panggilan: "MUHAMMAD", jk: "L", nisn: "-", nik: "-",
    tempatLahir: "Sei Meranti", tglLahir: "2021", agama: "Islam", rombel: "Rombel A",
    ortu: "-", tb: "110", bb: "19", lk: "50", sakit: 0, izin: 0, alpa: 0,
    peringkat: "Juara 7",
    juara: "MUHAMMAD ALFAHRIANSYAH meraih Juara 3 di Rombel A dengan nilai rata-rata 77,75 dari 7 anak. Selamat dan terus semangat belajar!",
    scores: { agama: "80", moral: "75", sosial: "74", mandiri: "75", indo: "80", inggris: "76", numerasi: "84", sains: "78", tekno: "75", seni: "80", motorik: "80", sd: "76" }
  }
];

const INITIAL_STUDENTS = RAW_STUDENTS_EXCEL.map(s => {
  const sc = {};
  Object.keys(s.scores).forEach(k => {
    sc[k] = { num: s.scores[k], level: getLevel(s.scores[k]) };
  });

  return {
    ...s,
    ttl: `${s.tempatLahir}, ${s.tglLahir}`,
    catatanUmum: `Selama semester ini, ${s.nama} menunjukkan perkembangan yang sangat baik dalam kegiatan bermain dan belajar di TK Mutiara Harapan.`,
    karya: "Hasil karya anak meliputi gambar, kolase, bentuk geometri, serta hasil kreativitas tematik.",
    proyek: "Ananda aktif berpartisipasi dalam kegiatan eksplorasi dan proyek kelompok.",
    dokumentasi: "Dokumentasi kegiatan belajar mengajar tersimpan dalam portofolio kelas.",
    berkembang: "Ananda menunjukkan kemajuan yang konsisten pada aspek nilai agama, kemandirian, dan motorik.",
    saran: "Terus dampingi ananda di rumah dalam pembiasaan positif, membaca buku cerita, dan kemandirian harian.",
    ortuNote: "Terima kasih atas kerja sama dan komunikasi yang baik antara rumah dan sekolah.",
    sc,
    bn: {}
  };
});