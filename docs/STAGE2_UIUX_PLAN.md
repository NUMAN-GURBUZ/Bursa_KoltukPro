# AŞAMA 2 — UI/UX VE İÇERİK PLANI

**Tarih:** 2026-10-21  
**Durum:** Taslak — onay bekleniyor  
**Bağımlılık:** Aşama 0-1 ✅ tamamlandı

---

## 1. Sayfa Haritası ve Bölüm Sıralaması

### Site Yapısı

```
index.html (Ana Sayfa — tek sayfa, bölümlerle)
├── #hero          → Ana karşılama alanı
├── #hizmetler     → Hizmet kartları
├── #oncesi-sonrasi → Öncesi/sonrası görselleri
├── #nasil-calisir → Süreç akışı (4 adım)
├── #temizlik-rehberi → Etkileşimli koltuk temizliği rehberi
├── #hizmet-bolgeleri → Hizmet verilen ilçeler
├── #sss           → Sık sorulan sorular
├── #iletisim      → İletişim ve WhatsApp CTA
└── footer         → Alt bilgi, yasal bağlantılar

privacy.html (Gizlilik Bildirimi — ayrı sayfa)
```

### Bölüm Sıralaması Gerekçesi

| Sıra | Bölüm | Gerekçe |
|------|-------|---------|
| 1 | Hero | İlk 3 saniyede ne hizmeti, nerede, nasıl iletişime geçileceğini anlat |
| 2 | Hizmetler | Spesifik hizmet türlerini göster — ziyaretçi kendi ihtiyacını tanısın |
| 3 | Öncesi/Sonrası | Görsel kanıt ile güven oluştur |
| 4 | Nasıl Çalışır | Süreci basitleştir — belirsizliği azalt |
| 5 | Temizlik Rehberi | Fayda sun, sitede kalma süresini artır, WhatsApp'a yönlendir |
| 6 | Hizmet Bölgeleri | "Benim ilçeme geliyorlar mı?" sorusunu yanıtla |
| 7 | SSS | Kalan tereddütleri gider |
| 8 | İletişim | Son dönüşüm noktası — en güçlü CTA |

**Sayfa haritası kararı:** Tek sayfa (long-scroll) + ayrı gizlilik sayfası.
- Küçük hizmet işletmesi için çok sayfalı yapı gereksiz.
- Mobil kullanıcılar kaydırma hareketine alışkın.
- Her bölüm `id` ile anchor linklere sahip — header navigasyonundan erişilebilir.
- Gizlilik bildirimi ayrı sayfa çünkü yasal içerik ana akışı bozmamalı.

---

## 2. Kullanıcı Yolculukları

### 2.1 Mobil Kullanıcı Yolculuğu (Birincil — trafiğin ~%75+)

```
┌─────────────────────────────────────────────────────────────┐
│  Google Arama: "bursa koltuk yıkama"                        │
│  → Arama sonucunda siteyi görür                             │
│  → Başlık ve meta açıklamadan hizmetin ne olduğunu anlar    │
└───────────────────────┬─────────────────────────────────────┘
                        ▼
┌─────────────────────────────────────────────────────────────┐
│  HERO (0-3 saniye)                                          │
│  • Hizmet başlığını okur                                    │
│  • "Bursa'da adresinize geliyoruz" mesajını görür           │
│  • WhatsApp CTA butonunu fark eder                          │
│  • Gerçek çalışma fotoğrafını görür                         │
│                                                             │
│  Karar noktası:                                             │
│  → Hemen WhatsApp'a tıklar (hızlı dönüşüm) ──────────► WA │
│  → Aşağı kaydırır (bilgi toplar)                            │
└───────────────────────┬─────────────────────────────────────┘
                        ▼
┌─────────────────────────────────────────────────────────────┐
│  HİZMETLER + ÖNCESİ/SONRASI                                │
│  • Koltuk/kanepe/köşe takımı hizmetlerini görür             │
│  • Öncesi/sonrası görselleriyle kaliteyi değerlendirir      │
│                                                             │
│  → Güven artarsa WhatsApp'a tıklar ──────────────────► WA   │
│  → Devam eder                                               │
└───────────────────────┬─────────────────────────────────────┘
                        ▼
┌─────────────────────────────────────────────────────────────┐
│  NASIL ÇALIŞIR + TEMİZLİK REHBERİ                          │
│  • 4 adımlık süreci anlar                                   │
│  • Rehberden kendi sorununa genel tavsiye alır              │
│  • Rehber sonunda "Profesyonel yardım ister misiniz?" CTA   │
│                                                             │
│  → WhatsApp'a tıklar ───────────────────────────────► WA    │
│  → Devam eder                                               │
└───────────────────────┬─────────────────────────────────────┘
                        ▼
┌─────────────────────────────────────────────────────────────┐
│  HİZMET BÖLGELERİ + SSS                                    │
│  • Kendi ilçesini listede arar                              │
│  • Fiyat, süre, kumaş sorularına yanıt bulur                │
│                                                             │
│  → Son tereddütler giderilir                                │
└───────────────────────┬─────────────────────────────────────┘
                        ▼
┌─────────────────────────────────────────────────────────────┐
│  İLETİŞİM (sayfa sonu) + SABİT ALT BUTON                   │
│  • En belirgin WhatsApp CTA                                 │
│  • Telefon numarası                                         │
│  • Varsa çalışma saatleri                                   │
│                                                             │
│  → WhatsApp'a tıklar ───────────────────────────────► WA    │
│  → Telefonu arar ───────────────────────────────────► TEL   │
└─────────────────────────────────────────────────────────────┘
                        ▼
┌─────────────────────────────────────────────────────────────┐
│  WHATSAPP (wa.me)                                           │
│  • Önceden doldurulmuş mesaj görünür                        │
│  • Kullanıcı düzenleyebilir                                 │
│  • Mesajı gönderir → işletme ile konuşma başlar             │
└─────────────────────────────────────────────────────────────┘
```

**Mobilde sabit alt buton:** Sayfa boyunca her an görünür olacak. Kullanıcı karar verdiği anda erişebilmeli.

### 2.2 Masaüstü Kullanıcı Yolculuğu

Masaüstü akışı mobilin aynısıdır; farklar:
- Sabit alt buton yerine header'da iletişim butonları + sağ alt köşede kayan WhatsApp butonu.
- Yan yana (iki sütunlu) düzenler kullanılabilir (hero, hizmetler, öncesi/sonrası).
- Daha geniş görsel alanlar.

---

## 3. Ana Sayfa Wireframe Açıklaması

### 3.1 Header

```
┌──────────────────────────────────────────────────────────┐
│  [Logo/İşletme Adı]     [Hizmetler] [SSS] [İletişim]    │  ← Masaüstü
│                                            [📞 Ara] [💬] │
├──────────────────────────────────────────────────────────┤
│  [Logo/İşletme Adı]                            [☰ Menü] │  ← Mobil
└──────────────────────────────────────────────────────────┘
```

- Yapışkan (sticky) header — kaydırırken üstte kalır.
- Masaüstü: yatay navigasyon + sağda telefon/WhatsApp butonları.
- Mobil: hamburger menü. Menü açıldığında navigasyon + iletişim seçenekleri.
- Scroll sonrası header'a hafif arka plan / gölge eklenir (kaydırma farkındalığı).
- İşletme adı `business.js`'ten okunur; `null` ise geçici metin gösterilmez, boş kalır.

### 3.2 Hero Bölümü

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│              [Gerçek çalışma fotoğrafı]                   │
│              (veya yer tutucu)                            │
│                                                          │
│  Bursa'da Adresinize Gelen                               │  ← H1
│  Profesyonel Koltuk Yıkama                               │
│                                                          │
│  Koltuğunuz, kanepanız veya köşe takımınız için           │  ← Alt başlık
│  profesyonel temizlik hizmeti.                            │
│                                                          │
│  [💬 WhatsApp ile Fiyat İste]  [📞 Hemen Ara]            │  ← CTA butonları
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Mobilde:**
- Fotoğraf üstte, tam genişlik.
- Başlık ve CTA'lar altta.
- CTA butonları tam genişlik, alt alta.
- WhatsApp butonu birincil (dolu, vurgulu); telefon ikincil (çerçeveli).

**Masaüstünde:**
- İki sütun: sol metin + CTA'lar, sağ fotoğraf.
- Veya tam genişlik fotoğraf üzerine overlay metin.

**WhatsApp'a katkısı:** Birincil dönüşüm noktası. İlk 3 saniyede erişilebilir.

### 3.3 Hizmetler Bölümü

```
┌──────────────────────────────────────────────────────────┐
│  Hizmetlerimiz                                    ← H2   │
│                                                          │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐               │
│  │ [ikon]   │  │ [ikon]   │  │ [ikon]   │               │
│  │ Koltuk   │  │ Kanepe   │  │ Köşe     │               │
│  │ Yıkama   │  │ Yıkama   │  │ Takımı   │               │
│  │          │  │          │  │ Yıkama   │               │
│  │ Kısa     │  │ Kısa     │  │ Kısa     │               │
│  │ açıklama │  │ açıklama │  │ açıklama │               │
│  │          │  │          │  │          │               │
│  │ [Fiyat   │  │ [Fiyat   │  │ [Fiyat   │               │
│  │  İste →] │  │  İste →] │  │  İste →] │               │
│  └──────────┘  └──────────┘  └──────────┘               │
└──────────────────────────────────────────────────────────┘
```

- Her kart: ikon, hizmet adı, kısa açıklama, WhatsApp CTA.
- Mobilde: tek sütun, kartlar alt alta.
- Masaüstü: 3 sütun grid.
- Yalnızca `business.js`'te `confirmed: true` olanlar gösterilir.
- Fiyat bilgisi gösterilmez (henüz sağlanmadı, uydurulmayacak).

**WhatsApp'a katkısı:** Her karttan doğrudan ilgili hizmet için fiyat isteme. Mesaj şablonu: "Merhaba, [hizmet adı] hakkında bilgi almak istiyorum."

### 3.4 Öncesi/Sonrası Görselleri

```
┌──────────────────────────────────────────────────────────┐
│  Çalışmalarımızdan Örnekler                       ← H2   │
│                                                          │
│  ┌────────────────────┬────────────────────┐             │
│  │     ÖNCESİ         │     SONRASI        │             │
│  │  [gerçek foto]     │  [gerçek foto]     │             │
│  └────────────────────┴────────────────────┘             │
│  Kısa bilgi: "2'li koltuk takımı — derin leke temizliği" │
│                                                          │
│  [💬 Sizin koltuğunuz için fiyat isteyin]                │
└──────────────────────────────────────────────────────────┘
```

- Gerçek fotoğraflar yoksa yer tutucu alan gösterilir; sahte fotoğraf kullanılmaz.
- Gerçek fotoğraflar geldiğinde aynı mobilyanın aynı açıdan çekilmiş öncesi/sonrası.
- Mobilde: dikey (üst-alt) düzen.
- Masaüstü: yatay (yan yana) düzen.
- Slider mekanizması opsiyonel (gerçek fotoğraflar geldikten sonra değerlendirilecek).

**WhatsApp'a katkısı:** Görsel güven kanıtı → "Benim koltuğumu da böyle temizleyebilirler."

### 3.5 Nasıl Çalışır

```
┌──────────────────────────────────────────────────────────┐
│  Nasıl Çalışır?                                   ← H2   │
│                                                          │
│  ① WhatsApp'tan         ② Fiyat ve koşullar              │
│     yazın                  bildirilir                    │
│                                                          │
│  ③ Tarih ve adres       ④ Adresinize gelir               │
│     netleşir               hizmet sunulur                │
│                                                          │
│  [💬 Hemen WhatsApp'tan Başlayın]                        │
└──────────────────────────────────────────────────────────┘
```

- 4 adım, numaralı, ikonlu.
- Mobil: dikey liste.
- Masaüstü: yatay adımlar veya zigzag düzen.
- İçerik genel operasyon akışı; gerçek bilgilerle sonradan düzenlenebilir.

**WhatsApp'a katkısı:** "Bu kadar basit mi? Hemen yazayım" etkisi.

### 3.6 Etkileşimli Koltuk Temizliği Rehberi

```
┌──────────────────────────────────────────────────────────┐
│  Koltuk Bakım Rehberi                              ← H2  │
│                                                          │
│  Mobilya türünü seçin:                                   │
│  [Koltuk] [Kanepe] [Köşe Takımı]                         │
│                                                          │
│  Kumaş türünüzü biliyor musunuz?                         │
│  [Kumaş] [Deri/Suni Deri] [Kadife] [Bilmiyorum]         │
│                                                          │
│  Sorun nedir?                                            │
│  [Genel kirlilik] [Yiyecek lekesi] [İçecek lekesi]       │
│  [Evcil hayvan] [Koku] [Solma/Renk kaybı]               │
│                                                          │
│  ─────────────────────────────────────────                │
│  📋 Öneriler:                                            │
│  • Lekeye hemen müdahale edin, ovmayın, emerek alın.     │
│  • Kumaş türü bilinmiyorsa görünmeyen bir alanda          │
│    deneyin.                                               │
│  • Üretici bakım talimatına bakın.                        │
│  • Kimyasal karıştırmaktan kaçının.                       │
│                                                          │
│  ⚠️ Her lekenin çıkacağını garanti edemeyiz.             │
│     Profesyonel değerlendirme için bize ulaşın.          │
│                                                          │
│  [💬 WhatsApp ile Danışın]                               │
└──────────────────────────────────────────────────────────┘
```

Detaylı tasarımı: bkz. bu belgenin §7. bölümü.

### 3.7 Hizmet Bölgeleri

```
┌──────────────────────────────────────────────────────────┐
│  Hizmet Bölgelerimiz                               ← H2  │
│                                                          │
│  Bursa'da aşağıdaki ilçelere hizmet veriyoruz:           │
│                                                          │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐            │
│  │ İlçe 1 │ │ İlçe 2 │ │ İlçe 3 │ │ İlçe 4 │            │
│  └────────┘ └────────┘ └────────┘ └────────┘            │
│                                                          │
│  ⚠ İlçe listesi henüz sağlanmamıştır.                   │
│     İşletmeden onay beklenmektedir.                      │
│                                                          │
│  [💬 Bölgenizi sorun]                                    │
└──────────────────────────────────────────────────────────┘
```

- İlçeler `business.js`'te `serviceAreas` dizisinden okunur.
- Dizi boşsa veya tümü `active: false` ise bölüm gizlenir veya "Hizmet bölgelerimiz yakında güncellenecektir" mesajı gösterilir.
- Sahte ilçe listesi oluşturulmaz.

**WhatsApp'a katkısı:** İlçesi listede olan kullanıcı güvenle iletişime geçer; listede olmayan sorabilir.

### 3.8 Sık Sorulan Sorular

```
┌──────────────────────────────────────────────────────────┐
│  Sık Sorulan Sorular                               ← H2  │
│                                                          │
│  ▸ Fiyat nasıl belirleniyor?                             │
│  ▸ Hizmet ne kadar sürüyor?                              │
│  ▸ Koltuk ne kadar sürede kuruyor?                        │
│  ▸ Hangi kumaşlara işlem uygulanabiliyor?                │
│  ▸ Randevu nasıl oluşturuluyor?                          │
│                                                          │
│  (Tıkla → açılır yanıt)                                 │
└──────────────────────────────────────────────────────────┘
```

- HTML `<details>` / `<summary>` ile — sıfır JavaScript.
- Yanıtlar düzenlenebilir taslak olacak; gerçek operasyon bilgisi gelene kadar genel ifadeler kullanılacak.
- Uydurma fiyat, süre veya garanti bilgisi verilmeyecek.

**WhatsApp'a katkısı:** Tereddüt giderme. Son SSS'den sonra "Başka sorunuz mu var?" + WhatsApp CTA.

### 3.9 İletişim Bölümü

```
┌──────────────────────────────────────────────────────────┐
│  Bize Ulaşın                                      ← H2   │
│                                                          │
│  📱 WhatsApp ile yazın      📞 Telefon ile arayın         │
│  [💬 WhatsApp'ı Aç]        [📞 Hemen Ara]               │
│                                                          │
│  ⏰ Çalışma saatleri:                                    │
│  (İşletme bilgisi bekleniyor)                            │
│                                                          │
│  📍 Hizmet alanı: Bursa                                  │
└──────────────────────────────────────────────────────────┘
```

### 3.10 Footer

```
┌──────────────────────────────────────────────────────────┐
│  [İşletme Adı]                                           │
│  Bursa'da profesyonel koltuk yıkama hizmeti              │
│                                                          │
│  Hızlı Bağlantılar: Hizmetler | SSS | İletişim          │
│  Yasal: Gizlilik Bildirimi                               │
│                                                          │
│  © 2026 [İşletme Adı]. Tüm hakları saklıdır.            │
└──────────────────────────────────────────────────────────┘
```

### 3.11 Mobil Sabit İletişim Butonları

```
Sayfanın altında sabit (fixed) çubuk:
┌──────────────────────────────────────────────────────────┐
│  [💬 WhatsApp ile Yaz]              [📞 Ara]             │
└──────────────────────────────────────────────────────────┘
```

Davranış kuralları:
- Yalnızca mobilde görünür (max-width: 768px veya benzeri breakpoint).
- Sayfa yüklendiğinde hemen görünür — scroll gerekmez.
- `z-index` ile diğer içeriklerin üstünde.
- Sayfanın en altına gelince footer ile çakışmasın (footer'a padding eklenir).
- WhatsApp butonu daha geniş (%65), telefon butonu daha dar (%30).
- Hero bölümündeki CTA'lar ile aynı `whatsapp.js` fonksiyonunu kullanır — olay izleme tutarlı.
- `business.js`'te numara `null` ise ilgili buton gizlenir.

Masaüstünde:
- Header'da iletişim butonları.
- Sağ alt köşede kayan (floating) WhatsApp ikonu — küçük, göze çarpmayan ama erişilebilir.

---

## 4. Her Bölümün Amacı ve WhatsApp'a Katkısı (Özet)

| Bölüm | Birincil Amaç | WhatsApp'a Katkısı |
|-------|--------------|-------------------|
| Header | Navigasyon + marka | Masaüstünde doğrudan CTA |
| Hero | İlk izlenim + birincil CTA | ⭐ Hızlı dönüşüm noktası |
| Hizmetler | Spesifik hizmet tanıtımı | Her kartta hizmete özel fiyat isteme |
| Öncesi/Sonrası | Görsel güven kanıtı | "Benim koltuğum da olabilir" etkisi |
| Nasıl Çalışır | Süreç şeffaflığı | Basitliği göster → iletişimi kolaylaştır |
| Temizlik Rehberi | Fayda sunma + etkileşim | Rehber sonunda profesyonel yönlendirme |
| Hizmet Bölgeleri | Konum teyidi | İlçe teyidi → güvenli iletişim |
| SSS | Tereddüt giderme | Son sorulardan sonra CTA |
| İletişim | Son dönüşüm noktası | ⭐ En belirgin CTA |
| Sabit Buton | Sürekli erişim (mobil) | ⭐ Her an erişilebilir dönüşüm |
| Kayan Buton | Sürekli erişim (masaüstü) | Her an erişilebilir dönüşüm |

---

## 5. Tasarım Sistemi Önerileri

### ⚠️ Önemli Not
Aşağıdaki tasarım önerileri **geçicidir**. İşletme renkleri, logosu ve tasarım referansları kesinleşmemiştir. Tüm değerler CSS custom properties olarak tanımlanacak ve tek dosyadan değiştirilebilecektir.

### 5.1 Renk Paleti — İki Yön Karşılaştırması

#### Yön A: Mavi-Yeşil (Temizlik / Güven / Ferahlık) — ÖNERİLEN

| Token | Değer | Kullanım |
|-------|-------|----------|
| `--color-primary` | `hsl(195, 75%, 40%)` | Birincil butonlar, başlıklar |
| `--color-primary-dark` | `hsl(195, 75%, 30%)` | Hover durumları |
| `--color-primary-light` | `hsl(195, 75%, 95%)` | Arka plan vurguları |
| `--color-accent` | `hsl(160, 60%, 45%)` | İkincil vurgular, başarı durumu |
| `--color-whatsapp` | `hsl(142, 70%, 45%)` | WhatsApp butonları (#25D366 yakını) |
| `--color-whatsapp-hover` | `hsl(142, 70%, 38%)` | WhatsApp hover |
| `--color-text` | `hsl(210, 20%, 15%)` | Ana metin |
| `--color-text-light` | `hsl(210, 10%, 45%)` | İkincil metin |
| `--color-bg` | `hsl(0, 0%, 100%)` | Ana arka plan |
| `--color-bg-alt` | `hsl(195, 30%, 97%)` | Alternatif bölüm arka planı |
| `--color-border` | `hsl(210, 15%, 88%)` | Kenarlıklar |

**Gerekçe:** Mavi-yeşil tonları temizlik, hijyen ve güven ile güçlü çağrışıma sahiptir. Hizmet sektöründe (özellikle temizlik) yaygın ve etkili. WhatsApp'ın yeşili ile uyumlu.

#### Yön B: Koyu Lacivert + Altın (Premium / Profesyonel)

| Token | Değer | Kullanım |
|-------|-------|----------|
| `--color-primary` | `hsl(220, 50%, 25%)` | Birincil öğeler |
| `--color-accent` | `hsl(42, 85%, 55%)` | Vurgular, CTA kenarlıkları |

**Gerekçe:** Daha "premium" bir his verir. Ancak ev temizliği hizmeti için fazla kurumsal ve soğuk olabilir. Sıcaklık ve erişilebilirlik riski.

**Öneri:** Yön A ile başla. İşletme farklı bir yön isterse kolay geçiş.

### 5.2 Tipografi

| Token | Değer | Kullanım |
|-------|-------|----------|
| `--font-heading` | `'Inter', system-ui, sans-serif` | Başlıklar |
| `--font-body` | `'Inter', system-ui, sans-serif` | Gövde metni |
| `--font-size-base` | `1rem` (16px) | Normal metin |
| `--font-size-sm` | `0.875rem` (14px) | Küçük metin |
| `--font-size-lg` | `1.125rem` (18px) | Büyük metin |
| `--font-size-h1` | `clamp(1.75rem, 4vw, 2.5rem)` | H1 |
| `--font-size-h2` | `clamp(1.5rem, 3vw, 2rem)` | H2 |
| `--font-size-h3` | `clamp(1.25rem, 2.5vw, 1.5rem)` | H3 |
| `--line-height-body` | `1.6` | Gövde metin satır yüksekliği |
| `--line-height-heading` | `1.2` | Başlık satır yüksekliği |

**Font seçimi gerekçesi:** Inter — okunabilir, modern, Google Fonts'ta ücretsiz, Türkçe karakter desteği tam, `system-ui` fallback ile hızlı ilk render.

**Alternatif:** Roboto veya Outfit. Inter yetersiz bulunursa değerlendirilebilir.

### 5.3 Boşluklar (Spacing)

| Token | Değer | Kullanım |
|-------|-------|----------|
| `--space-xs` | `0.25rem` (4px) | Minimum boşluk |
| `--space-sm` | `0.5rem` (8px) | İç boşluklar |
| `--space-md` | `1rem` (16px) | Genel boşluk |
| `--space-lg` | `1.5rem` (24px) | Bölüm içi boşluk |
| `--space-xl` | `2rem` (32px) | Bölümler arası |
| `--space-2xl` | `3rem` (48px) | Büyük ayrımlar |
| `--space-3xl` | `4rem` (64px) | Bölüm padding |
| `--container-max` | `1200px` | Maksimum içerik genişliği |
| `--container-padding` | `1rem` | Mobilde kenar boşluğu |

### 5.4 Butonlar

| Tür | Stil | Kullanım |
|-----|------|----------|
| **Birincil (WhatsApp)** | Yeşil arka plan, beyaz metin, WhatsApp ikonu, border-radius: 8px, padding: 14px 24px, min-height: 48px | Ana CTA |
| **İkincil (Telefon)** | Şeffaf arka plan, birincil renk kenarlık, birincil renk metin | İkincil CTA |
| **Metin butonu** | Arka plan yok, kenarlık yok, altı çizili veya ok ikonu | Kart içi linkler |

Tüm butonlar:
- Min dokunma alanı: 44×44px.
- Hover: hafif renk koyulaşması + isteğe bağlı hafif translateY.
- Focus: belirgin `:focus-visible` outline.
- Disabled (numara eksikse): soluk görünüm, `pointer-events: none`, `aria-disabled="true"`.

### 5.5 Kartlar

```css
/* Kart temel stili */
border-radius: 12px;
background: var(--color-bg);
border: 1px solid var(--color-border);
padding: var(--space-lg);
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
transition: box-shadow 0.2s ease;

/* Hover (masaüstü) */
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
```

---

## 6. Gerçek Fotoğraf ve Video Çekim Listesi

Aşağıdaki medya dosyaları site yayına almadan önce temin edilmelidir. Sıralama önem sırasınıdır.

### 🔴 Kritik (Yayın öncesi kesinlikle gerekli)

| # | Çekim | Kullanım Yeri | Format / Boyut Önerisi |
|---|-------|--------------|----------------------|
| M01 | Öncesi/sonrası — koltuk yıkama (aynı açı, aynı mobilya) | Öncesi/sonrası bölümü | En az 2 set; 800×600px min, WebP |
| M02 | Öncesi/sonrası — kanepe yıkama | Öncesi/sonrası bölümü | En az 1 set |
| M03 | Çalışma anı fotoğrafı (ekip iş başında) | Hero bölümü | 1200×800px min, WebP |

### 🟡 Yüksek Öncelikli (Kaliteyi önemli ölçüde artırır)

| # | Çekim | Kullanım Yeri |
|---|-------|--------------|
| M04 | Ekipman fotoğrafı (profesyonel temizlik makinesi) | Güven / Nasıl çalışır |
| M05 | Araç fotoğrafı (seyyar hizmet aracı) | Güven bölümü |
| M06 | Öncesi/sonrası — köşe takımı | Öncesi/sonrası bölümü |
| M07 | Kısa tanıtım videosu (15-30 sn, çalışma anı) | Hero veya ayrı bölüm |

### 🟢 Faydalı (Daha sonra eklenebilir)

| # | Çekim | Kullanım Yeri |
|---|-------|--------------|
| M08 | Farklı kumaş türlerinde temizlik | Temizlik rehberi |
| M09 | Temizlik ürünleri/malzemeleri | Güven bölümü |
| M10 | Ekip tanıtım fotoğrafı | Hakkımızda / güven |

### Çekim Tavsiyeleri

- Doğal ışık tercih edilmeli.
- Aynı mobilyanın aynı açıdan öncesi/sonrası çekilmeli (tripod önerilir).
- Yatay (landscape) çekim tercih edilmeli.
- Minimum 1200px genişlik.
- Yüzler net görünüyorsa izin alınmalı.
- Logo veya işletme adı varsa görsel üzerine sonradan eklenebilir.

---

## 7. Koltuk Temizliği Rehberi — Etkileşim Tasarımı

### Amaç
Ziyaretçiye küçük bir fayda sunmak, sitede kalma süresini artırmak ve doğal yoldan WhatsApp'a yönlendirmek.

### Etkileşim Akışı

```
ADIM 1: Mobilya türü seçimi
─────────────────────────
  [Koltuk]  [Kanepe]  [Köşe Takımı]
  (Buton grubu — tek seçim)
           │
           ▼
ADIM 2: Kumaş türü
─────────────────────────
  [Kumaş/Dokuma]  [Deri/Suni Deri]  [Kadife/Süet]  [Bilmiyorum]
  (Buton grubu — tek seçim)
           │
           ▼
ADIM 3: Sorun/leke türü
─────────────────────────
  [Genel kirlilik]  [Yiyecek lekesi]  [İçecek lekesi]
  [Evcil hayvan]    [Koku/ter]        [Mürekkep/boya]
  (Buton grubu — tek seçim)
           │
           ▼
SONUÇ PANELİ
─────────────────────────
  ✅ Genel bakım önerileri (2-4 madde)
  ⚠️ Güvenlik uyarısı
  💬 "Profesyonel değerlendirme için WhatsApp'tan ulaşın" CTA
```

### Güvenlik ve İçerik Kuralları

| Kural | Uygulama |
|-------|----------|
| Riskli kimyasal tavsiye verme | "Farklı temizlik ürünlerini kesinlikle karıştırmayın" uyarısı her sonuçta |
| Çamaşır suyu önerme | Hiçbir sonuçta önerilmeyecek |
| Kesin sonuç vaat etme | "Bu öneriler genel bakım amaçlıdır" ibaresi |
| Kumaş bilinmiyorsa | "Görünmeyen bir alanda küçük bir alanı test edin" önerisi |
| Üretici talimatı | "Üretici bakım etiketine öncelik verin" her sonuçta |

### Teknik Uygulama

- Saf JavaScript — dış kütüphane yok.
- Tüm soru-cevap kombinasyonları statik veri olarak `cleaning-guide-data.js` dosyasında.
- Adım geçişlerinde CSS transition (yumuşak görünüm).
- Seçim yapılmadan sonraki adım görünmez (`display: none` veya `hidden` attribute).
- Tüm adımlar aynı ekranda — sayfa yenilemesi yok, URL değişmez.
- Mobil dostu: butonlar yeterli boyutta, tek sütun düzen.

---

## 8. Mobil Sabit İletişim Butonları — Davranış Detayı

### Görünürlük

```
Koşul: max-width: 768px (mobil/tablet)
Konum: fixed, bottom: 0, left: 0, right: 0
Z-index: 1000
```

### Düzen

```
┌─────────────────────────────────────────┐
│  [💬 WhatsApp ile Yaz     ]  [📞 Ara  ] │
│       ~%65 genişlik          ~%30       │
└─────────────────────────────────────────┘
```

### Davranış Kuralları

| Durum | Davranış |
|-------|----------|
| WhatsApp numarası `null` | WhatsApp butonu gizlenir; telefon butonu tam genişlik |
| Telefon numarası `null` | Telefon butonu gizlenir; WhatsApp butonu tam genişlik |
| Her ikisi de `null` | Tüm çubuk gizlenir |
| Sayfa footer'a ulaştığında | Çubuğun footer ile çakışmaması için footer'a alt padding eklenir |
| Kullanıcı kaydırırken | Çubuk her zaman görünür kalır |

### Tıklama Davranışı

- **WhatsApp butonu:** `whatsapp.js` → URL oluştur → `analytics.js` → olay gönder (izin varsa) → `window.open(whatsappUrl)`.
- **Telefon butonu:** `<a href="tel:+90...">` → `analytics.js` → `phone_click` olayı (izin varsa).
- Her iki buton da `business.js`'ten dinamik olarak numara okur.

### Masaüstü Kayan Buton

- Sağ alt köşe, `position: fixed`.
- WhatsApp ikonu (yuvarlak, yeşil, 56×56px).
- Hover: hafif büyüme (scale 1.05) + tooltip "WhatsApp ile yazın".
- Yalnızca `min-width: 769px` üstünde görünür.

---

## 9. SEO ve İçerik Planı

### 9.1 Hedef Anahtar Kelimeler

| Öncelik | Anahtar Kelime | Sayfa / Bölüm |
|---------|---------------|---------------|
| 🔴 Birincil | bursa koltuk yıkama | index.html — H1, title, meta description |
| 🔴 Birincil | bursa kanepe yıkama | index.html — hizmetler bölümü |
| 🟡 İkincil | bursa koltuk temizleme | İçerik içinde doğal kullanım |
| 🟡 İkincil | bursa köşe takımı yıkama | Hizmetler bölümü |
| 🟡 İkincil | bursa evde koltuk yıkama | Nasıl çalışır bölümü |
| 🟢 Uzun kuyruk | koltuk lekesi nasıl çıkar | Temizlik rehberi |
| 🟢 Uzun kuyruk | kanepe temizliği fiyatı bursa | SSS bölümü |

**Not:** Anahtar kelime doldurma yapılmayacak. Doğal, kullanıcıya faydalı içerik içinde kullanılacak.

### 9.2 Sayfa Başlıkları ve Meta Açıklamalar

**index.html:**
```html
<title>Bursa Koltuk Yıkama — Adresinize Gelen Profesyonel Hizmet | {{İşletme Adı}}</title>
<meta name="description" content="Bursa'da adresinize gelen profesyonel koltuk, kanepe ve köşe takımı yıkama hizmeti. WhatsApp ile hemen fiyat isteyin.">
```

**privacy.html:**
```html
<title>Gizlilik Bildirimi | {{İşletme Adı}}</title>
<meta name="description" content="{{İşletme Adı}} gizlilik bildirimi ve kişisel verilerin korunması hakkında bilgilendirme.">
```

### 9.3 Yapısal Veri (Schema.org)

```
@type: CleaningService (LocalBusiness alt türü)
├── name: (business.js'ten — null ise dahil edilmez)
├── telephone: (business.js'ten — null ise dahil edilmez)
├── url: (business.js'ten — null ise dahil edilmez)
├── areaServed: [City: Bursa + aktif ilçeler]
├── publicAccess: false (seyyar hizmet — müşteri kabul eden mağaza yok)
├── openingHoursSpecification: (business.js'ten — null ise dahil edilmez)
├── hasOfferCatalog:
│   ├── Service: Koltuk Yıkama
│   ├── Service: Kanepe Yıkama
│   └── Service: Köşe Takımı Yıkama
└── address: DAHİL EDİLMEYECEK (fiziksel adres yok, uydurulmayacak)
```

### 9.4 Teknik SEO Kontrol Listesi

| Öğe | Plan |
|-----|------|
| Canonical URL | Her sayfada `<link rel="canonical">` — `business.js`'ten `siteUrl` |
| robots.txt | Tüm sayfalara izin, sitemap yönlendirmesi |
| XML Sitemap | `public/sitemap.xml` — sayfaların listesi |
| Open Graph | `og:title`, `og:description`, `og:image`, `og:type`, `og:url` |
| Hreflang | Gerekli değil (tek dil: Türkçe) |
| Favicon | Gerçek logo gelene kadar basit geçici favicon |

---

## 10. Test Edilecek Kullanıcı Senaryoları

### 10.1 Dönüşüm Senaryoları

| # | Senaryo | Beklenen Sonuç | Test Yöntemi |
|---|---------|---------------|-------------|
| T01 | Mobil kullanıcı hero'dan WhatsApp'a tıklar | wa.me linki doğru numara ve mesajla açılır | Manuel test — gerçek cihaz |
| T02 | Mobil kullanıcı sabit alt butondan WhatsApp'a tıklar | wa.me linki açılır + olay izlenir | Manuel test |
| T03 | Masaüstü kullanıcı kayan butondan WhatsApp'a tıklar | wa.me linki açılır | Manuel test |
| T04 | Kullanıcı telefon butonuna tıklar | tel: linki çalışır + olay izlenir | Manuel test — mobil |
| T05 | Hizmet kartından "Fiyat İste" tıklar | WhatsApp mesajında hizmet adı geçer | Manuel test |

### 10.2 İçerik ve Navigasyon Senaryoları

| # | Senaryo | Beklenen Sonuç |
|---|---------|---------------|
| T06 | Header'dan "Hizmetler" linkine tıklar | Sayfa hizmetler bölümüne kayar |
| T07 | SSS sorusuna tıklar | Yanıt açılır |
| T08 | Temizlik rehberinde 3 adımı tamamlar | Sonuç paneli görünür, WhatsApp CTA gösterilir |
| T09 | Temizlik rehberinde "Bilmiyorum" seçer | Güvenli genel tavsiye gösterilir |

### 10.3 Hata ve Kenar Senaryoları

| # | Senaryo | Beklenen Sonuç |
|---|---------|---------------|
| T10 | `business.js`'te WhatsApp numarası `null` | WhatsApp butonları gizlenir, bozuk link oluşmaz |
| T11 | `business.js`'te telefon numarası `null` | Telefon butonları gizlenir |
| T12 | `business.js`'te `serviceAreas` boş dizi | Hizmet bölgeleri bölümü gizlenir veya uyarı gösterilir |
| T13 | Tüm hizmetler `confirmed: false` | Hizmetler bölümü gizlenir |
| T14 | Çerez izni reddedilir | GA4 ve Meta Pixel yüklenmez, analitik olayları gönderilmez |
| T15 | JavaScript devre dışı | Sayfa okunabilir kalır, CTA linkleri çalışır (href fallback) |

### 10.4 Performans ve Erişilebilirlik Senaryoları

| # | Senaryo | Beklenen Sonuç |
|---|---------|---------------|
| T16 | Lighthouse Mobile skoru | Performans ≥90, Erişilebilirlik ≥90, SEO ≥90 |
| T17 | Yavaş bağlantıda (3G) yükleme | Hero 3 saniye içinde görünür |
| T18 | Klavye ile tüm CTA'lara ulaşma | Tab sırası mantıklı, focus göstergesi görünür |
| T19 | Ekran okuyucu ile gezinme | Tüm bölümler anlamlı, görsellerde alt metin |

---

## Belge Durumu

Bu belge Aşama 2 taslağıdır. Kodlamaya geçilmeden önce onay beklenmektedir.

**Geçici kararlar (kesinleşmemiş):**
- Renk paleti: Yön A (mavi-yeşil) önerildi — kesinleşmedi.
- Font: Inter — kesinleşmedi.
- Tasarım referansı: bekleniyor.
- Gerçek görseller: bekleniyor.

**Kesinleşen kararlar:**
- Tek sayfa + ayrı gizlilik sayfası.
- Bölüm sıralaması (§1).
- WhatsApp birincil CTA.
- Mobil sabit buton davranışı.
- Temizlik rehberi güvenlik kuralları.
- `null` kontrolü ile güvenli CTA render.

---

*Son güncelleme: 2026-10-21*
