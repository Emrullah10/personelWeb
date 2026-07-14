INSERT INTO skills (category, items, display_order) VALUES
  ('Mobile', ARRAY['Flutter', 'React Native', 'Dart', 'Riverpod', 'Clean Architecture', 'MVVM'], 1),
  ('Web & Backend', ARRAY['Node.js', 'Express.js', 'React', 'JavaScript', 'SQL', 'REST API'], 2),
  ('Tools & Methods', ARRAY['Git', 'CI/CD', 'Figma', 'UI/UX Design', 'Agile/Scrum', 'TDD'], 3);

INSERT INTO experiences (company, role, location, period, bullets, display_order) VALUES
  ('Poetas',
   '{"en": "Full Stack & Mobile Developer", "tr": "Full Stack & Mobil Geliştirici"}',
   'Ankara, Turkey',
   '09.2025 – Present',
   '{"en": ["Developed high-performance backend services using Node.js and maintained existing systems.", "Designed responsive web interfaces with React and expanded to mobile via React Native.", "Managed SQL database operations and REST API integrations.", "Applied clean code and TDD throughout the development lifecycle.", "Contributed to CI/CD pipelines for fast, reliable deployments."], "tr": ["Node.js kullanarak yüksek performanslı backend servisleri geliştirdi ve mevcut sistemleri sürdürdü.", "React ile duyarlı web arayüzleri tasarladı, React Native ile mobile genişletti.", "SQL veritabanı işlemlerini ve REST API entegrasyonlarını yönetti.", "Geliştirme süreci boyunca temiz kod ve TDD prensiplerini uyguladı.", "Hızlı ve güvenilir dağıtım için CI/CD süreçlerine katkı sağladı."]}',
   1),
  ('BiliciSoft',
   '{"en": "Jr. Mobile Developer", "tr": "Jr. Mobil Geliştirici"}',
   'Ankara, Turkey',
   '07.2024 – 05.2025',
   '{"en": ["Built three government mobile apps with Flutter and Dart (Municipal Police, Agriculture, Archive).", "Ensured maintainability using MVVM architecture and Riverpod state management.", "Integrated RESTful APIs for dynamic data exchange.", "Designed user-friendly interfaces following UI/UX principles.", "Worked within an agile team process."], "tr": ["Flutter ve Dart ile üç kamu kurumu mobil uygulaması geliştirdi (Zabıta, Tarım, Arşiv).", "MVVM mimarisi ve Riverpod state yönetimi ile sürdürülebilirlik sağladı.", "Dinamik veri alışverişi için RESTful API entegrasyonları yaptı.", "UI/UX prensiplerine uygun kullanıcı dostu arayüzler tasarladı.", "Agile metodolojilerle takım içinde aktif rol aldı."]}',
   2),
  ('Kodland',
   '{"en": "Python Tutor", "tr": "Python Eğitmeni"}',
   'Remote',
   '10.2022 – 06.2025',
   '{"en": ["Taught Python programming from beginner to intermediate levels.", "Provided individual mentoring to 30 plus students.", "Explained complex programming concepts in an understandable way.", "Accelerated learning with custom educational materials."], "tr": ["Başlangıçtan orta seviyeye Python programlama dersleri verdi.", "30 öğrenciden fazlasına bireysel gelişim desteği sağladı.", "Karmaşık programlama kavramlarını anlaşılır şekilde aktardı.", "Özel eğitim materyalleriyle öğrenme sürecini hızlandırdı."]}',
   3);

INSERT INTO projects (title, description, tech_stack, github_url, display_order) VALUES
  ('HealthFintel',
   '{"en": "MVP prototype for a mobile app integrating health and financial data.", "tr": "Sağlık ve finansal verileri birleştiren mobil uygulama MVP prototipi."}',
   ARRAY['Flutter', 'Dart'],
   NULL,
   1),
  ('Accessibility of Academic Content',
   '{"en": "TÜBİTAK 2209-supported AI app summarizing class and meeting recordings.", "tr": "TÜBİTAK 2209 destekli, ders ve toplantı kayıtlarını özetleyen AI uygulaması."}',
   ARRAY['Flutter', 'Python'],
   NULL,
   2),
  ('Archive Application',
   '{"en": "Corporate mobile platform for digital archive document management.", "tr": "Kurumsal arşiv belgelerinin dijital yönetimi için mobil platform."}',
   ARRAY['Flutter', 'Dart'],
   NULL,
   3);
