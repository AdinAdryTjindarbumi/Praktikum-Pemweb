function hitungNilai() {
  // Mengambil nilai input dari user
  const tugas = parseFloat(document.getElementById("tugas").value);
  const uts = parseFloat(document.getElementById("uts").value);
  const uas = parseFloat(document.getElementById("uas").value);

  // Validasi: Pastikan input berada dalam rentang 0 - 100
  if (
    isNaN(tugas) ||
    tugas < 0 ||
    tugas > 100 ||
    isNaN(uts) ||
    uts < 0 ||
    uts > 100 ||
    isNaN(uas) ||
    uas < 0 ||
    uas > 100
  ) {
    alert("Nilai harus di antara 0 dan 100.");
    return;
  }

  // Deklarasi konstanta bobot
  const BOBOT_TUGAS = 0.3;
  const BOBOT_UTS = 0.3;
  const BOBOT_UAS = 0.4;
  const BATAS_LULUS = 60;

  // Menghitung rata-rata tertimbang
  const rataRata = tugas * BOBOT_TUGAS + uts * BOBOT_UTS + uas * BOBOT_UAS;

  // Menentukan nilai huruf
  let nilaiHuruf;
  if (rataRata >= 90) {
    nilaiHuruf = "A";
  } else if (rataRata >= 80) {
    nilaiHuruf = "B";
  } else if (rataRata >= 70) {
    nilaiHuruf = "C";
  } else if (rataRata >= 60) {
    nilaiHuruf = "D";
  } else {
    nilaiHuruf = "E";
  }

  // Menentukan status kelulusan
  const lulus = rataRata >= BATAS_LULUS;
  const status = lulus ? "Lulus" : "Tidak Lulus";
  const warna = lulus ? "status lulus" : "status gagal";

  // Menampilkan hasil perhitungan
  document.getElementById("hasil").innerHTML = `
        <p>Rata-Rata: ${rataRata.toFixed(2)}</p>
        <p>Nilai Huruf: ${nilaiHuruf}</p>
        <p class="${warna}">Status: ${status}</p>
    `;
}
