import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  BookOpen,
  Code2,
  GraduationCap
} from 'lucide-react';

const BiodataPage = () => {
  return (
    <div className="page">

      <div className="page-header">
        <div>
          <h1>Biodata Mahasiswa</h1>
          <p>Profil pembuat Event Management System</p>
        </div>
      </div>

      <div className="biodata-container">

        {/* LEFT */}
        <div className="biodata-card profile-card">

          <div className="profile-avatar-lg">
            <span>B</span>
          </div>

          <h2 className="profile-name">Bagus Prasojo</h2>

          <p className="profile-nim">
            NIM: 24090123
          </p>

          <div className="badge-group">
            <span className="badge">
              D-4 Teknik Informatika
            </span>

            <span className="badge">
              Universitas Harkat Negeri
            </span>
          </div>

          <div className="profile-contacts">

            <div className="contact-chip">
              <Mail size={16} />
              bagusprasojo666@gmail.com
            </div>

            <div className="contact-chip">
              <MapPin size={16} />
              Indonesia
            </div>

            <div className="contact-chip">
              <Phone size={16} />
              0877-2534-5162
            </div>

          </div>

          <div className="social-links">

            <a href="#" className="social-btn">
              <Github size={18} />
            </a>

            <a href="#" className="social-btn">
              <Linkedin size={18} />
            </a>

            <a href="#" className="social-btn">
              <Instagram size={18} />
            </a>

          </div>
        </div>

        {/* RIGHT */}
        <div className="biodata-details">

          {/* AKADEMIK */}
          <div className="detail-card">

            <div className="detail-header">
              <GraduationCap size={20} />
              <h3>Informasi Akademik</h3>
            </div>

            <div className="detail-grid">

              <div className="detail-item">
                <span>Nama</span>
                <strong>Bagus Prasojo</strong>
              </div>

              <div className="detail-item">
                <span>NIM</span>
                <strong>24090123</strong>
              </div>

              <div className="detail-item">
                <span>Program Studi</span>
                <strong>D-4 Teknik Informatika</strong>
              </div>

              <div className="detail-item">
                <span>Fakultas</span>
                <strong>Sekolah Vokasi</strong>
              </div>

              <div className="detail-item">
                <span>Angkatan</span>
                <strong>2024</strong>
              </div>

              <div className="detail-item">
                <span>Status</span>
                <strong>Aktif</strong>
              </div>

            </div>
          </div>

          {/* TEKNOLOGI */}
          <div className="detail-card">

            <div className="detail-header">
              <Code2 size={20} />
              <h3>Teknologi</h3>
            </div>

            <div className="tech-stack">

              <div className="tech-item">
                <strong>React</strong>
                <span>Frontend</span>
              </div>

              <div className="tech-item">
                <strong>TypeScript</strong>
                <span>Language</span>
              </div>

              <div className="tech-item">
                <strong>Express</strong>
                <span>Backend</span>
              </div>

              <div className="tech-item">
                <strong>Prisma</strong>
                <span>ORM</span>
              </div>

              <div className="tech-item">
                <strong>Zustand</strong>
                <span>State</span>
              </div>

              <div className="tech-item">
                <strong>Vite</strong>
                <span>Build Tool</span>
              </div>

            </div>
          </div>

          {/* ABOUT */}
          <div className="detail-card">

            <div className="detail-header">
              <BookOpen size={20} />
              <h3>Tentang Proyek</h3>
            </div>

            <p className="about-text">
              Event Management System adalah aplikasi full-stack untuk mengelola
              event kampus yang mencakup kategori, pembicara, dan data event.
            </p>

            <p className="about-text">
              Dibangun menggunakan React + TypeScript, Express.js, Prisma ORM,
              Supabase PostgreSQL, dan Zustand untuk state management serta JWT.
            </p>

            <div className="repo-link">
              <Github size={16} />
              <a
                href="https://github.com/bagus-prasojo/event-management"
                target="_blank"
              >
                github.com/bagus-prasojo/event-management
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default BiodataPage;