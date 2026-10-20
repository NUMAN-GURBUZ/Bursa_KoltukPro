# REQUIREMENTS — Bursa Seyyar Koltuk Yıkama

## 1. Kesinleşmiş Gereksinimler (Ana Prompttan)

### 1.1 İşlevsel Gereksinimler

| # | Gereksinim | Kaynak |
|---|-----------|--------|
| F01 | WhatsApp üzerinden fiyat talebi başlatma (wa.me linki, önceden doldurulmuş mesaj) | Prompt §3, §5-H |
| F02 | Telefon bağlantısı (tel: linki, tek dokunuşla arama) | Prompt §3, §5-H |
| F03 | Ana hizmetlerin sunumu: Koltuk yıkama, Kanepe yıkama, Köşe takımı yıkama | Prompt §2, §5-B |
| F04 | Gerçek öncesi/sonrası görselleri (veya yer tutucu) | Prompt §5-C |
| F05 | "Nasıl çalışır?" süreç akışı | Prompt §5-D |
| F06 | Etkileşimli koltuk temizliği rehberi (basit, güvenli tavsiyeler) | Prompt §5-E |
| F07 | Hizmet bölgeleri (ilçe bazlı, merkezi yapılandırmadan) | Prompt §5-F |
| F08 | Sık sorulan sorular (düzenlenebilir taslaklar) | Prompt §5-G |
| F09 | İletişim bölümü (WhatsApp, telefon, opsiyonel form) | Prompt §5-H |
| F10 | Gizlilik bildirimi sayfası | Prompt §5-I |
| F11 | Merkezi işletme yapılandırma dosyası (tüm değişken bilgiler tek noktadan) | Prompt §6 |
| F12 | Mobil öncelikli responsive tasarım | Prompt §4, §9 |
| F13 | Analitik entegrasyon noktaları (GA4, GSC, Google Ads, Meta Pixel) — yapılandırılabilir | Prompt §8 |
| F14 | Çerez/gizlilik izin yönetimi (basit, gerekli düzeyde) | Prompt §8 |

### 1.2 SEO Gereksinimleri

| # | Gereksinim | Kaynak |
|---|-----------|--------|
| S01 | Her sayfada özgün `<title>` ve `<meta description>` | Prompt §7 |
| S02 | Mantıklı başlık hiyerarşisi (tek H1) | Prompt §7 |
| S03 | Anlaşılır URL yapısı | Prompt §7 |
| S04 | XML sitemap | Prompt §7 |
| S05 | robots.txt | Prompt §7 |
| S06 | Canonical URL | Prompt §7 |
| S07 | Open Graph metadata | Prompt §7 |
| S08 | Görsellere uygun alt metin | Prompt §7 |
| S09 | Yapısal veri (yalnızca gerçek bilgilerle, seyyar hizmete uygun şema) | Prompt §7 |
| S10 | Google Search Console'a sonradan eklenebilme | Prompt §7 |

### 1.3 Performans Gereksinimleri

| # | Gereksinim | Kaynak |
|---|-----------|--------|
| P01 | Hızlı sayfa yükleme (Core Web Vitals: LCP, INP, CLS) | Prompt §9 |
| P02 | Doğru görsel boyutları ve modern formatlar (WebP/AVIF) | Prompt §9 |
| P03 | Lazy loading (viewport dışı görseller) | Prompt §9 |
| P04 | Ana görselin gereksiz geciktirilmemesi (LCP optimizasyonu) | Prompt §9 |
| P05 | Layout kaymalarının azaltılması (CLS) | Prompt §9 |
| P06 | Gereksiz JavaScript'in önlenmesi | Prompt §9 |

### 1.4 Erişilebilirlik Gereksinimleri

| # | Gereksinim | Kaynak |
|---|-----------|--------|
| A01 | Klavye ile gezinme | Prompt §9 |
| A02 | Görünür odak göstergeleri | Prompt §9 |
| A03 | Yeterli renk kontrastı (WCAG AA) | Prompt §9 |
| A04 | Form alanlarında açık etiketler | Prompt §9 |
| A05 | Uygun alternatif metinler | Prompt §9 |
| A06 | Dokunmatik ekranda rahat buton boyutları (min 44×44 px) | Prompt §9 |

### 1.5 Güvenlik Gereksinimleri

| # | Gereksinim | Kaynak |
|---|-----------|--------|
| G01 | Gizli bilgileri (API key, token) kaynak koduna eklememe | Prompt §6, §10 |
| G02 | Kullanıcı girdilerini uygun şekilde doğrulama | Prompt §10 |
| G03 | Gereksiz kişisel veri toplamama | Prompt §10 |
| G04 | Harici bağlantılarda `rel="noopener noreferrer"` | Prompt §10 |
| G05 | Form varsa spam önlemi değerlendirme | Prompt §10 |
| G06 | Güvenlik başlıkları (barındırma ortamının desteklediği ölçüde) | Prompt §10 |

## 2. Önerilen Ama Henüz Onaylanmamış Özellikler

| # | Özellik | Durum | Not |
|---|---------|-------|-----|
| Ö01 | Ek hizmetler (sandalye, yatak, diğer döşemeli mobilya) | ⏳ İşletme onayı bekleniyor | Prompt §2: "onaylamadan kesin hizmet olarak yayımlama" |
| Ö02 | İletişim formu | ⏳ Değerlendirilecek | WhatsApp birincil kanal; form gerçekten gerekli mi? |
| Ö03 | Görsel karşılaştırma aracı (slider) | ⏳ Değerlendirilecek | Prompt §5-C: "gerçekten faydalıysa ekle" |
| Ö04 | Temizlik rehberinde oyunlaştırma | ⏳ Değerlendirilecek | Prompt §5-E: "ticari hedefi gölgelememeli" |
| Ö05 | Müşteri yorumları bölümü | ⏳ Gerçek yorum bekleniyor | Gerçek yorum yoksa bölümü kaldır veya boş model bırak |

## 3. Kesinlikle Yapılmayacaklar

- Uydurma işletme bilgisi, müşteri yorumu, fiyat, başarı istatistiği üretme.
- Test edilmemiş özellikleri test edilmiş gibi sunma.
- Çalıştırılmamış komutları raporlama.
- Gereksiz backend, veritabanı, üyelik, ödeme altyapısı.
- Fiziksel adres uydurma (seyyar hizmet modeli).
- Doğrulanmamış garanti veya hizmet iddiası.
- Riskli kimyasal tavsiyeler.

---

*Son güncelleme: 2026-10-21*
