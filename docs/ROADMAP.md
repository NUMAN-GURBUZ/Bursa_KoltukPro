# ROADMAP — Bursa Seyyar Koltuk Yıkama

## Geliştirme Aşamaları

```
Aşama 0 ██████████ ✅ Tamamlandı
Aşama 1 ██████████ ✅ Tamamlandı
Aşama 2 ██████████ ✅ Tamamlandı
Aşama 3 ░░░░░░░░░░ ⏳ Sırada
Aşama 4 ░░░░░░░░░░ Beklemede
Aşama 5 ░░░░░░░░░░ Beklemede
Aşama 6 ░░░░░░░░░░ Beklemede
Aşama 7 ░░░░░░░░░░ Beklemede
```

---

### Aşama 0 — Keşif ve Mevcut Durum Analizi ✅

**Durum:** Tamamlandı  
**Çıktılar:**
- [x] Proje klasörü incelendi (yalnızca ana prompt dosyası mevcut)
- [x] Git durumu kontrol edildi (depo başlatıldı)
- [x] Medya dosyası yok — belgelendi
- [x] Eksik işletme bilgileri listelendi
- [x] Varsayımlar ve belirsizlikler belgelendi

---

### Aşama 1 — Gereksinim Dokümantasyonu ✅

**Durum:** Tamamlandı  
**Çıktılar:**
- [x] `docs/PROJECT_BRIEF.md`
- [x] `docs/REQUIREMENTS.md`
- [x] `docs/OPEN_QUESTIONS.md`
- [x] `docs/DECISIONS.md`
- [x] `docs/ROADMAP.md`

---

### Aşama 2 — UI/UX ve İçerik Planı ✅

**Durum:** Tamamlandı — onay bekleniyor  
**Bağımlılıklar:** Aşama 0-1 tamamlanmış olmalı ✅  
**Çıktılar:**
- [x] Sayfa haritası (site map)
- [x] Kullanıcı yolculuğu diyagramı (user journey — mobil ve masaüstü)
- [x] Mobil ve masaüstü wireframe açıklamaları (10 bölüm)
- [x] Tasarım sistemi temelleri (renkler, tipografi, spacing — geçici)
- [x] Bileşen listesi ve sorumlulukları
- [x] İçerik planı ve medya gereksinimleri (10 çekim maddesi)
- [x] WhatsApp dönüşüm akışı detayı
- [x] Temizlik rehberi etkileşim tasarımı
- [x] Mobil sabit buton davranış kuralları
- [x] SEO ve içerik planı
- [x] 19 test senaryosu
- [x] Mimari son değerlendirme (`docs/ARCHITECTURE_REVIEW.md`)

**Not:** Tasarım referansları henüz onaylanmadığından, geçici öneriler kesinleşmiş kararlar olarak gösterilmemiştir.

---

### Aşama 3 — Teknik Mimari

**Durum:** Beklemede  
**Bağımlılıklar:** Aşama 2 tamamlanmış olmalı  
**Planlanan Çıktılar:**
- [ ] Teknoloji seçimi ve kurulumu (Vite + Vanilla JS — onaylanırsa)
- [ ] Dosya ve klasör yapısının oluşturulması
- [ ] Merkezi yapılandırma modeli (`business.js`)
- [ ] SEO altyapısı planı
- [ ] Analitik entegrasyon noktaları
- [ ] Test stratejisi
- [ ] Dağıtım ve maliyet planı

---

### Aşama 4 — Temel Geliştirme

**Durum:** Beklemede  
**Bağımlılıklar:** Aşama 3 + kritik işletme bilgileri (en azından Q01-Q03)  
**Planlanan Çıktılar:**
- [ ] Proje kurulumu ve build pipeline
- [ ] Tasarım sistemi uygulaması (CSS custom properties)
- [ ] Header bileşeni (logo, navigasyon, mobil menü)
- [ ] Footer bileşeni (iletişim, sosyal, yasal)
- [ ] Ana karşılama alanı (hero section)
- [ ] Sabit WhatsApp/telefon CTA bileşeni (mobil)
- [ ] Merkezi config bağlantısı
- [ ] Mobil responsive doğrulama

---

### Aşama 5 — İçerik ve Etkileşimler

**Durum:** Beklemede  
**Bağımlılıklar:** Aşama 4 + gerçek görseller/içerik  
**Planlanan Çıktılar:**
- [ ] Hizmet kartları bölümü
- [ ] Öncesi/sonrası görselleri (veya yer tutucular)
- [ ] "Nasıl çalışır?" süreç akışı
- [ ] Etkileşimli koltuk temizliği rehberi
- [ ] Sık sorulan sorular (accordion)
- [ ] Hizmet bölgeleri
- [ ] Gizlilik bildirimi sayfası
- [ ] Çerez izin banner'ı

---

### Aşama 6 — Test ve İyileştirme

**Durum:** Beklemede  
**Bağımlılıklar:** Aşama 5  
**Planlanan Çıktılar:**
- [ ] Build testi (hata olmadan derleme)
- [ ] Lint kontrolü
- [ ] Mobil/masaüstü görünüm testleri (farklı cihaz boyutları)
- [ ] WhatsApp URL doğrulaması
- [ ] Telefon bağlantısı doğrulaması
- [ ] Erişilebilirlik kontrolleri (Lighthouse, axe)
- [ ] SEO kontrolleri (meta, yapısal veri, sitemap)
- [ ] Performans ölçümü (Lighthouse, Core Web Vitals)
- [ ] Konsol ve ağ hatası incelenmesi

---

### Aşama 7 — Yayına Alma

**Durum:** Beklemede  
**Bağımlılıklar:** Aşama 6 + tüm gerçek işletme bilgileri + alan adı  
**Planlanan Çıktılar:**
- [ ] Barındırma seçimi ve kurulumu
- [ ] Alan adı bağlama ve HTTPS
- [ ] Google Search Console kaydı
- [ ] Analitik kimliklerinin eklenmesi (GA4, Ads, Meta Pixel)
- [ ] Yayına alma kontrol listesi
- [ ] Geri alma (rollback) prosedürü
- [ ] Lansman sonrası izleme planı

---

## Zaman Çizelgesi Tahmini

| Aşama | Tahmini Süre | Not |
|-------|-------------|-----|
| 0-1 | ✅ Tamamlandı | — |
| 2 | ~1 oturum | Onay bekleniyor |
| 3 | ~1 oturum | Teknik kurulum |
| 4 | ~2-3 oturum | Temel geliştirme |
| 5 | ~2-3 oturum | İçerik ve etkileşimler |
| 6 | ~1 oturum | Test ve düzeltme |
| 7 | ~1 oturum | Yayına alma |

**Toplam:** ~8-10 oturum (işletme bilgileri zamanında sağlanırsa)

---

*Son güncelleme: 2026-10-21*
