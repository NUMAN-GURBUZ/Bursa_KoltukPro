# ROADMAP — Bursa Seyyar Koltuk Yıkama

## Geliştirme Aşamaları

```
Aşama 0 ██████████ ✅ Tamamlandı
Aşama 1 ██████████ ✅ Tamamlandı
Aşama 2 ██████████ 🔄 Reklam Odaklı UI/UX Revizyonu
Aşama 3 ░░░░░░░░░░ ⏳ Şu An Yürütülüyor (Teknik İskelet & Build)
Aşama 4 ░░░░░░░░░░ Beklemede (Tasarım Sistemi & Ana Sayfa)
Aşama 5 ░░░░░░░░░░ Beklemede (İçerik & Etkileşimler)
Aşama 6 ░░░░░░░░░░ Beklemede (SEO & Analitik)
Aşama 7 ░░░░░░░░░░ Beklemede (Test & Kalite)
Aşama 8 ░░░░░░░░░░ Beklemede (Yayına Alma)
```

---

### Aşama 0 — Mevcut Durumu Doğrula ✅
- [x] Proje klasörü incelendi.
- [x] Git durumu kontrol edildi.
- [x] Dosya varlığı doğrulandı.

---

### Aşama 1 — Gereksinimleri ve Açık Soruları Belgele ✅
- [x] `docs/PROJECT_BRIEF.md`
- [x] `docs/REQUIREMENTS.md`
- [x] `docs/OPEN_QUESTIONS.md`
- [x] `docs/DECISIONS.md`
- [x] `docs/ROADMAP.md`

---

### Aşama 2 — Reklam Odaklı UI/UX ve İçerik Planı 🔄
**Kullanıcının son kararları doğrultusunda güncelleniyor:**
- [x] İlk mimari ve tel kafes planı (`docs/STAGE2_UIUX_PLAN.md`)
- [ ] Reklam odaklı, dikkat çekici, net WhatsApp CTA kurgulu revize sunum
- [ ] İlk ekran (Hero) doğrudan değer önerisi metinleri
- [ ] Gerçek fotoğraf çekim listesi ve geçici yer tutucu stratejisi

---

### Aşama 3 — Teknik Mimari ve Temel Proje İskeleti ⏳
**Şu an yürütülüyor:**
- [ ] Vite + Vanilla HTML/CSS/JS iskelet kurulumu (`package.json`, `vite.config.js`)
- [ ] Dizin yapısı (`src/config`, `src/components`, `src/styles`, `src/utils`, `public`)
- [ ] `business.js` güvenli merkezi yapılandırma (uydurma veri yok, null kontrolleri var)
- [ ] Başlangıç semantik `index.html` ve `gizlilik.html`
- [ ] `npm install` ve `npm run build` komutlarının çalıştırılıp doğrulanması

---

### Aşama 4 — Tasarım Sistemi ve Ana Sayfa
**Bağımlılıklar:** Aşama 2 reklam odaklı UI/UX onayı + Aşama 3 teknik iskelet
- [ ] CSS token'ları (renkler, tipografi, spacing)
- [ ] Semantik header ve footer
- [ ] Hero bölümü (Bursa seyyar hizmet + WhatsApp CTA)
- [ ] Mobil sabit çift buton (WhatsApp + Ara)

---

### Aşama 5 — İçerik ve Etkileşimler
- [ ] Hizmet kartları (Koltuk, kanepe, köşe takımı)
- [ ] Öncesi/sonrası yer tutucu alanları
- [ ] Süreç akışı (Nasıl çalışır?)
- [ ] Güvenli temizlik ve kumaş bakım rehberi
- [ ] SSS (Accordion)
- [ ] Gizlilik bildirimi

---

### Aşama 6 — SEO ve Analitik
- [ ] Title, meta description, Open Graph
- [ ] Alan adı netleştiğinde sitemap & robots.txt
- [ ] Gerçek kimlikler sağlandığında GA4 / Ads / Pixel entegrasyonu

---

### Aşama 7 — Test ve Kalite
- [ ] `npm run build` üretim derleme kontrolü
- [ ] Mobil & masaüstü duyarlılık ve kırılma testleri
- [ ] WhatsApp ve `tel:` bağlantı testleri (null fallback doğrulama)
- [ ] Erişilebilirlik ve klavye gezinimi kontrolleri

---

### Aşama 8 — Yayına Alma
- [ ] Alan adı ve barındırma kurulumu (Netlify / Vercel / Cloudflare Pages)
- [ ] Canlı ortam SSL & yönlendirme doğrulaması
- [ ] Yayın kontrol listesi

---

*Son güncelleme: 2026-10-21*

