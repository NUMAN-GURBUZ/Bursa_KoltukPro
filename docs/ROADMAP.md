# ROADMAP — Bursa Seyyar Koltuk Yıkama

## Geliştirme Aşamaları

```
Aşama 0 ██████████ ✅ Tamamlandı
Aşama 1 ██████████ ✅ Tamamlandı
Aşama 2 ██████████ ✅ Tamamlandı (UI/UX Planı: docs/UI_UX_PLAN.md)
Aşama 3 ██████████ ✅ Tamamlandı (Vite İskeleti & Build Başarılı)
Aşama 4 ██████████ ✅ Tamamlandı (Tasarım Sistemi & Ana Sayfa Uygulandı)
Aşama 5 ░░░░░░░░░░ ⏳ Sırada (Gerçek Görseller & Doğrulanmış İlçeler Eklendiğinde İçerik Zenginleştirme)
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

### Aşama 2 — Reklam Odaklı UI/UX ve İçerik Planı ✅
- [x] `docs/UI_UX_PLAN.md` oluşturuldu.
- [x] Renkler, tipografi, butonlar, 9 ana bölüm kurgusu, mobil alt CTA barı, erişilebilirlik netleştirildi.
- [x] Dürüst dil ve sıfır uydurma veri ilkeleri belirlendi.

---

### Aşama 3 — Teknik Mimari ve Temel Proje İskeleti ✅
- [x] Vite + Vanilla HTML/CSS/JS iskelet kurulumu (`package.json`, `vite.config.js`)
- [x] Dizin yapısı (`src/config`, `src/styles`, `src/utils`, `public`)
- [x] `business.js` güvenli merkezi yapılandırma (uydurma veri yok, null kontrolleri var)
- [x] `npm install` ve `npm run build` komutları çalıştırıldı, sıfır hatayla doğrulandı.

---

### Aşama 4 — Tasarım Sistemi ve Ana Sayfa ✅
- [x] CSS token'ları, modern stil reset ve responsive kurallar tamamlandı.
- [x] Semantik header (geçici marka rozeti ve menü) uygulandı.
- [x] Hero bölümü (yerinde seyyar hizmet değeri + fotoğrafla WhatsApp teklif CTA'sı).
- [x] 3 hizmet kartı (Koltuk, kanepe, köşe takımı).
- [x] 4 adımlı süreç akışı (Nasıl çalışır?).
- [x] Gerçek görseller için dürüstçe etiketlenmiş nötr yer tutucular.
- [x] Kumaş ve leke rehberi (sekmeli interaktif ipuçları ve uyarılar).
- [x] Sıkça sorulan sorular (accordion).
- [x] Hizmet bölgesi bilgilendirmesi (Bursa adrese servis notu).
- [x] WhatsApp kapanış CTA'sı ve footer (gizlilik aydınlatması).
- [x] Mobil ekran için sabit alt çift buton (WhatsApp %70 + Ara %30).
- [x] İletişim bilgisi henüz girilmediğinde açılan erişilebilir bilgilendirme modalı (`#info-modal`).
- [x] Teknik denetim düzeltmeleri: `business.js` config sadeleştirmesi (tek kaynak), ölü kod (`handleWhatsAppClick`) temizliği ve Open Graph metaverileri tamamlandı.
- [ ] Kalan inline stillerin CSS sınıflarına taşınması (bu görevde kapsam dışı; denetimde `index.html` ve `gizlilik.html` içinde toplam 79 inline `style` kullanımı bulundu).

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
- [ ] Barındırmaya özel güvenlik başlıkları (CSP, X-Frame-Options, X-Content-Type-Options)
- [ ] Canlı ortam SSL & yönlendirme doğrulaması
- [ ] Yayın kontrol listesi

---

*Son güncelleme: 2026-10-21*

