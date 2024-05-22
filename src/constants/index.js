import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `Saya adalah seorang programmer di bidang web development yang saat ini merupakan mahasiswa program studi Teknologi Rekayasa Perangkat Lunak di Politeknik Negeri Banyuwangi. Dasar-dasar yang diperlukan seperti halnya HTML, CSS, dan JS mampu saya pahami dan terapkan ke dalam proyek pengembangan website. Selain itu framework yang saya gunakan adalah Laravel dan saat ini tengah mempelajari ReactJS. Kecenderungan yang saya miliki mengarah ke pengembangan front-end, namun skill back-end yang saya miliki seperti konfigurasi database (MySQL) juga dapat membantu dalam proses pengembangan proyek. Kemampuan dan pengalaman yang saya miliki menurut saya dapat berguna di bidang IT sebuah perusahaan. Dapat bekerja secara kolektif dengan programmer lain, dan selalu memiliki semangat untuk mempelajari hal-hal baru serta meningkatkan kemampuan terutama di bidang programming.`;

export const ABOUT_TEXT = `Saya adalah seorang mahasiswa IT yang memiliki ketertarikan terhadap dunia programming. Ketertarikan ini tumbuh semenjak menempuh pendidikan di SMP dimana saya sering meluangkan waktu di depan laptop dan melakukan eksplorasi terhadap program komputer. Saya telah berpartisipasi dalam pembuatan beberapa proyek baik yang berkaitan dengan kegiatan studi maupun luar studi, yang meliputi website development dengan kemampuan HTML, CSS, JS, PHP, MySQL dengan menggunakan framework Laravel, serta mobile development dengan menggunakan Flutter.  Pada tahun 2023, saya terpilih sebagai Ketua Himpunan Mahasiswa Jurusan Teknik Informatika, dan penerima beasiswa luar negeri IISMA dari Kemendikbudristek di Ulsan College, Korea Selatan. Diluar minat saya di bidang programming, saya juga memiliki minat pada creative writing, linguistik, english skills dan desain UI. `;

export const EXPERIENCES = [
  {
    year: "2020",
    role: "Jurnalis Lokal",
    company: "Kabar Besuki Media Partner of Pikiran Rakyat",
    description: `Membuat artikel berita sebagai jurnalis lokal di media berita lokal Kabar Besuki. Lebih dari 300 artikel berita yang saya buat telah dipublikasikan dan mendapat impresi/viewer lebih dari 500.000 dalam sebulannya.`,
    skills: ["Writing", "Journalism", "SEO"],
  },
  {
    year: "2022",
    role: "Engineering Service Corps",
    company: "Pusan National University",
    description: `Meraih juara pertama di lomba internasional Creativity Station 2022 yang diikuti oleh tiga negara (Indonesia, Maroko, Korea Selatan) yang bertujuan untuk mengatasi permasalahan lingkungan. Peran yang saya jalankan adalah menerapkan IoT dengan menghubungkan mesin ANOMAN (Automatic Virgin Coconut Oil) dengan smartphone menggunakan sinyal Wi-Fi dan aplikasi mobile.`,
    skills: ["IoT", "Design", "Problem Solving", "Mechanical Engineering"],
  },
  {
    year: "2023",
    role: "Ketua Himpunan",
    company: "Himpunan Mahasiswa Jurusan Teknik Informatika",
    description: `Memimpin himpunan selama satu periode, dimana himpunan ini merupakan suatu organisasi yang menampung serta memfasilitasi mahasiswa jurusan Teknik Informatika Politeknik Negeri Banyuwangi baik pengurus maupun anggota untuk mengembangkan bakat terutama di bidang program studi.`,
    skills: ["Critical Thinking", "Organizational Skills", "Leadership", "Event Organizing"],
  },
  {
    year: "November - Desember 2023",
    role: "Magang Industri",
    company: "Hyundai Heavy Industries (HNIX Dept.), Korea Selatan",
    description: `Menjalani magang di perusahaan internasional Hyundai Heavy Industries, departemen IT (HNIX), Korea Selatan. Mempelajari web development dengan menggunakan Vue.js, desain 3D dengan menggunakan Autodesk Maya, dan memahami tugas dan implementasi kemampuan divisi lainnya.`,
    skills: ["Vue.js", "3D Design", "Telecom", "Computer Networks"],
  },
  {
    year: "March 2024 - Sekarang",
    role: "Magang Mandiri",
    company: "Kementerian Lingkungan Hidup dan Kehutanan",
    description: `Menjalani magang di Taman Nasional Baluran yang dinaungi oleh Kementerian Lingkungan Hidup dan Kehutanan di Situbondo. Membangun website informasi yang ditujukan untuk sarana edukasi para pengunjung. Peran yang saya ambil adalah full-stack developing menggunakan Laravel`,
    skills: ["Laravel", "HTML", "CSS", "MySQL"],
  },
];

export const PROJECTS = [
  {
    title: "ANOMAN (Automatic Virgin Coconut Oil Machine)",
    image: project1,
    description:
      "Menerapkan IoT dengan menggunakan smart breaker ke mesin ANOMAN dengan menggunakan koneksi Wi-Fi dan dikontrol melalui aplikasi mobile. Informasi tentang mesin dicantumkan kedalam website menggunakan WordPress",
    skills: ["Android", "IoT", "Wordpress"],
  },
  {
    title: "Tambong in Your Hand (Aplikasi Mobile Galeri Desa Tambong)",
    image: project2,
    description:
      "Aplikasi galeri/informasi desa berbasis mobile untuk sarana edukasi dan informasi masyarakat lokal dan pengunjung Desa Tambong, Banyuwangi. Peran yang saya ambil adalah merancang wireframe aplikasi menggunakan Figma dan coding Front-End menggunakan Flutter",
    skills: ["Flutter", "Figma"],
  },
  {
    title: "Booklet",
    image: project3,
    description:
      "Aplikasi peminjaman perangkat jurusan berbasis mobile yang digunakan untuk proses booking dan pengecekan status ketersediaaan perangkat. Peran yang saya ambil adalah merancang wireframe aplikasi menggunakan Figma dan coding Front-End aplikasi menggunakan Flutter",
    skills: ["FLutter", "Figma"],
  },
  {
    title: "Website Informasi Terintegrasi QR Code",
    image: project4,
    description:
      "Website informasi terkait flora dan situs yang terintegrasikan dengan QR Code yang ada di Taman Nasional Baluran. Peran yang saya ambil adalah developing website Fullstack",
    skills: ["Laravel","HTML", "CSS", "MySQL"],
  },
];

export const CONTACT = {
  address: "Perumahan Permata Giri, Blok BA-14, Banyuwangi, Jawa Timur, Indonesia ",
  phoneNo: "+62 881 959 1871 ",
  email: "kenafsm23@gmail.com",
};
