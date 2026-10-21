# ARCHITECTURE REVIEW — Son Değerlendirme (Aşama 2 Öncesi)

**Tarih:** 2026-10-21  
**Mimari:** Vite + Vanilla HTML/CSS/JavaScript — Statik Site  
**Durum:** ✅ Onaylandı (kullanıcı tarafından)

---

## 1. HTML Semantiği ve Erişilebilirlik

**Yaklaşım:**

- Ana sayfa `<header>`, `<main>`, `<section>`, `<footer>` ile yapılandırılacak.
- Her bölüm `<section>` içinde anlamlı `aria-label` veya `<h2>` ile tanımlanacak.
- Sayfa genelinde tek `<h1>` — hizmet başlığı. Alt bölümler `<h2>`, `<h3>` hiyerarşisi.
- Tüm `<a>` ve `<button>` öğeleri klavye ile ulaşılabilir, görünür `:focus-visible` göstergesi.
- `<img>` öğelerinde anlamlı `alt` metni; dekoratif görsellerde `alt=""` ve `role="presentation"`.
- CTA butonları `<a>` olacak (dış URL'ye yönlendirme); form gönderimi yapan butonlar `<button>`.
- Dokunmatik hedefler minimum 44×44 px.
- WCAG AA renk kontrastı hedefi.

**Gereksiz soyutlamadan kaçınma:** Bileşenler JavaScript sınıfları veya web components ile değil, düz fonksiyonlarla oluşturulacak. DOM manipülasyonu yalnızca gerçekten dinamik olan alanlar için yapılacak (temizlik rehberi, FAQ accordion, çerez banner'ı). Statik içerik doğrudan HTML'de kalacak.

## 2. Bileşen Modülerliği ve Gereksiz JS Kullanımından Kaçınma

**İlke:** HTML + CSS ile yapılabilen şeyi JavaScript ile yapma.

| Alan | JS Gerekli mi? | Yaklaşım |
|------|---------------|----------|
| Header / navigasyon | ✅ Minimal — yalnızca mobil menü toggle | Hamburger menü açma/kapama |
| Hero bölümü | ❌ | Statik HTML |
| Hizmet kartları | ❌ | Statik HTML, `business.js`'ten yalnızca `confirmed` kontrolü |
| Öncesi/sonrası | 🟡 Opsiyonel — slider kullanılacaksa | Basit CSS/JS slider; yoksa yan yana görseller |
| Nasıl çalışır | ❌ | Statik HTML |
| Temizlik rehberi | ✅ | Etkileşimli seçim aracı |
| SSS | ✅ Minimal | `<details>`/`<summary>` (sıfır JS) veya basit accordion |
| Hizmet bölgeleri | ❌ | Statik HTML, config'ten filtreleme |
| İletişim CTA'ları | ✅ Minimal | URL oluşturma + olay izleme |
| Çerez banner'ı | ✅ | İzin mantığı |
| Analitik | ✅ | Koşullu yükleme |

**Toplam JS modülleri:** ~7-8 küçük modül. Framework yok, bundler dışında runtime bağımlılığı yok.

## 3. Merkezi Yapılandırma ve Güvenli Yer Tutucular

**Kritik güvenlik kuralı:** Eksik bilgilerle çalışan bağlantılar oluşturulmamalı.

```
WhatsApp CTA render mantığı (pseudocode):

if business.whatsapp === null || business.whatsapp.startsWith('{{')
  → Butonu devre dışı göster veya gizle
  → Konsola geliştirici uyarısı yaz
  → wa.me linki OLUŞTURMA

if business.phone === null || business.phone.startsWith('{{')
  → Telefon linkini devre dışı bırak veya gizle
```

`business.js`'teki her yer tutucu alan:
- `null` değeri alacak (string yer tutucu yerine).
- Bileşenler `null` kontrolü ile render kararı verecek.
- Geliştirme modunda `console.warn` ile eksik bilgileri raporlayacak.
- Üretim build'inde eksik bilgi varsa CTA butonları güvenli şekilde gizlenecek, bozuk link oluşmayacak.

## 4. SEO Metadata, Sitemap ve Canonical URL

- `index.html` → `<title>`, `<meta name="description">`, `<link rel="canonical">`, Open Graph meta etiketleri.
- `privacy.html` → Aynı meta yapısı, farklı içerik.
- `public/robots.txt` → Tüm sayfalara izin, `Sitemap:` yönlendirmesi.
- `public/sitemap.xml` → Tüm sayfaların URL listesi (alan adı `business.js`'ten okunacak, `null` ise uyarı verilecek).
- Yapısal veri: `CleaningService` + `areaServed` + `publicAccess: false` (fiziksel adres uydurulmayacak).
- Yapısal veri yalnızca gerçek bilgilerle doldurulacak; eksik alanlar JSON-LD'ye eklenmeyecek.

## 5. Analitik ve İzin Yönetiminin Ayrılması

**Mimari ayrım:**

```
consent.js          → Kullanıcı iznini yönetir (banner göster, tercihi kaydet)
analytics.js        → GA4, Meta Pixel yükler (yalnızca izin verildiyse)
whatsapp.js/CTA'lar → Olay gönderir (analytics.js üzerinden, izin kontrolü ile)
```

- `consent.js` hiçbir analitik kodu içermez.
- `analytics.js` hiçbir UI kodu içermez.
- İzin verilmediyse script etiketleri DOM'a eklenmez, çerez yazılmaz.
- İzin durumu `localStorage`'da saklanır (çerez kullanılmaz — ironik).

## 6. Kapsam Kontrolü

**Bu projede aşağıdakiler YOKTUR ve eklenmeyecektir:**

- ❌ Backend sunucu, API endpoint
- ❌ Veritabanı (SQL, NoSQL, dosya tabanlı)
- ❌ Kullanıcı üyelik/kayıt sistemi
- ❌ Yönetim paneli (CMS)
- ❌ Online ödeme
- ❌ Otomatik rezervasyon/randevu sistemi
- ❌ Sunucu taraflı form işleme (iletişim formu eklenirse Netlify Forms veya benzeri statik çözüm değerlendirilecek)

**Gerekçe:** İşletme küçük ölçekli, seyyar hizmet modeli. Tüm iletişim WhatsApp/telefon üzerinden. Bu altyapılar bakım maliyeti ve karmaşıklık ekler, ticari değer katmaz.

---

**Sonuç:** Mimari değişiklik gerekmiyor. Vite + Vanilla JS yaklaşımı bu proje için uygun. Yukarıdaki kontrol noktaları Aşama 4'te (temel geliştirme) uygulanacak.
