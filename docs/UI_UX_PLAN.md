# UI/UX Uygulama Planı — Bursa Seyyar Koltuk Yıkama

**Tarih:** 2026-10-21  
**Durum:** Tasarım Uygulama Esasları  
**Hedef Kitle:** Bursa'da koltuk, kanepe veya köşe takımı temizletmek isteyen, çoğunlukla mobil cihazlardan veya reklamlardan gelen ev/ofis sahipleri.

---

## 1. Renk Paleti ve Kullanım Amacı

Arayüz renkleri temizlik, güven, ferahlık ve net aksiyon hissi vermek üzere yapılandırılmıştır:

| Renk / Token | Değer | Psikolojik ve İşlevsel Amaç |
|--------------|-------|----------------------------|
| `--color-primary` | `#0284c7` (Gök Mavisi) | Profesyonellik, su/temizlik çağrışımı, ana aksan ve odak çizgileri. |
| `--color-primary-dark` | `#0369a1` (Koyu Mavi) | Başlıklar, hover durumları, kontrast gerektiren metinler. |
| `--color-primary-light` | `#e0f2fe` (Açık Buz Mavisi) | Arka plan vurguları, rozet zeminleri, bilgi kutuları. |
| `--color-secondary` | `#0d9488` (Zümrüt/Teal) | Tazelik, ferahlık hissi, süreç ve bilgilendirme kartları. |
| `--color-whatsapp` | `#25d366` (WhatsApp Yeşili) | Birincil dönüşüm kanalı; gözün ilk odaklandığı aksiyon butonları. |
| `--color-whatsapp-hover` | `#20bd5a` | WhatsApp butonunun üzerine gelme/dokunma durumu. |
| `--color-dark` | `#0f172a` (Koyu Slate) | Gövde metinleri ve footer zemini (okuma kolaylığı, yüksek kontrast). |
| `--color-dark-muted` | `#475569` (Nötr Gri) | İkincil açıklamalar, yardımcı etiketler. |
| `--color-light` | `#f8fafc` (Off-white Zemin) | Temiz, göz yormayan sayfa arka planı. |
| `--color-border` | `#e2e8f0` (Açık Gri Sınır) | Kart ve ayrım çizgileri için ince, zarif sınırlar. |

---

## 2. Tipografi ve Hiyerarşi

Web güvenli, sistem performansını düşürmeyen ve hızlı yüklenen font yığını:  
`system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`

- **H1 (Hero Başlığı):** Mobil 1.875rem (30px) / Masaüstü 2.5rem (40px) — `font-weight: 700`, doğrudan seyyar hizmeti ve kolaylığı anlatan net ifade.
- **H2 (Bölüm Başlıkları):** Mobil 1.5rem (24px) / Masaüstü 2rem (32px) — `font-weight: 700`, bölüm amacını net tanımlayan başlıklar.
- **H3 (Kart Başlıkları):** 1.25rem (20px) — `font-weight: 600`.
- **Gövde Metni (Body):** 1rem (16px) — `line-height: 1.6`, mobil cihazlarda rahat okunabilirlik.
- **Küçük Metin / Rozet:** 0.8125rem (13px) — `font-weight: 600`.

---

## 3. Bileşen Tasarımları

- **Butonlar:**
  - *WhatsApp Butonu:* Canlı yeşil, belirgin WhatsApp ikonu, yumuşak gölge (`--shadow-md`), dokunma alanı en az 48px yüksekliğinde.
  - *İkincil Buton (Ara / Detay):* Mavi çizgi sınır (`border: 2px solid`), şeffaf zemin.
- **Kartlar:**
  - Beyaz zemin, ince sınır çizgisi (`#e2e8f0`), hafif yuvarlatılmış köşeler (`12px`), üzerine gelindiğinde hafif yükselme efekti.
- **Rozetler (Badges):**
  - Seyyar hizmet modelini veya geçici durumları belirten, abartısız hap görünümlü etiketler.
- **Fotoğraf Yer Tutucuları:**
  - Gerçek çekimlerin henüz yapılmadığını dürüstçe belirten; nötr gri-mavi dokulu, net kamera ikonlu ve açıklayıcı etiketli özel alanlar.

---

## 4. Bölüm Sıralaması ve Sayfa Akışı (9 Bölüm)

Sayfa, reklamdan veya aramadan gelen ziyaretçinin zihnindeki soruları sırasıyla yanıtlayacak şekilde kurgulanmıştır:

1. **Header (Başlık Alanı):**
   - Geçici işletme adı (`KoltukMobil Bursa (Geçici Proje Adı)`), seyyar hizmet rozeti ve hızlı iletişim butonu.
2. **Hero (İlk Ekran):**
   - Hizmetin müşterinin adresinde yapıldığı (koltuk taşınmadığı), fotoğrafla WhatsApp üzerinden teklif alınabileceği açıkça belirtilir.
   - Doğrulanmamış ("Bursa geneli", "anında", "tüm lekeler") ifadelerden kaçınılır.
3. **Hizmet Kapsamı (3 Temel Alan):**
   - Koltuk Yıkama, Kanepe/Çekyat Yıkama, Köşe Takımı (L Koltuk) Yıkama.
   - Her bir kart altında fotoğrafla fiyat isteme yönlendirmesi.
4. **Hizmet Süreci (Nasıl Çalışır? - 4 Adım):**
   - 1. Fotoğraf çekin → 2. WhatsApp'tan iletin → 3. Adrese gelelim → 4. Yerinde temizlik.
5. **Gerçek Çalışmalar İçin Yer Tutucu Alanı:**
   - Stok fotoğraf veya uydurma görsel kesinlikle kullanılmaz; açıkça "Gerçek Müşteri Öncesi/Sonrası Çekim Alanı (Görseller hazırlanıyor)" yazılır.
6. **Kumaş Bakımı ve Leke Bilgilendirme (İnteraktif Rehber):**
   - Kullanıcının kumaş/leke türünü seçebileceği veya pratik ipuçlarına göz atabileceği basit, sekmeli/filtreli faydalı rehber (çay lekesi, evcil hayvan kokusu, yanlış müdahale riskleri).
7. **Sıkça Sorulan Sorular (Accordion):**
   - Koltuklar taşınıyor mu? Fiyat nasıl belirleniyor? Kuruma süresi nedir? Elektrik/su ihtiyacı nasıl karşılanıyor?
8. **Hizmet Bölgesi Alanı:**
   - İlçe adı uydurulmaz; "Bursa'da belirlenen bölgelere adrese servis" şeklinde nötr ve yapılandırılabilir metin.
9. **WhatsApp İletişim Çağrısı (CTA Kapanışı) ve Footer:**
   - Son dönüşüm çağrısı, yasal seyyar hizmet bilgilendirmesi, telif ve `gizlilik.html` bağlantısı.

---

## 5. WhatsApp ve Telefon CTA Davranışları (Null Güvenliği)

- Gerçek telefon ve WhatsApp numarası henüz sağlanmadığı için:
  - Butonlar uydurma veya geçersiz numara üretmez.
  - Tıklandığında kullanıcıya işletme numarasının henüz sisteme tanımlanmadığını, iletişim bilgilerinin hazırlık aşamasında olduğunu belirten şık, erişilebilir bir bilgi modalı / bildirimi gösterilir.
  - Gerçek numaralar `src/config/business.js`'e girildiği anda tüm sitede otomatik olarak canlı bağlantıya dönüşür.

---

## 6. Mobil Sabit CTA Çubuğu (Bottom Floating Bar)

- Mobil görünümde ekranın altında sabit kalan çift buton alanı:
  - `%70` genişlikte yeşil WhatsApp butonu ("WhatsApp'tan Fiyat Al").
  - `%30` genişlikte telefon ikonu/butonu ("Ara").
- Sayfanın en altındaki yasal linklerin ve içeriklerin kapanmaması için CSS'te `padding-bottom: calc(var(--mobile-cta-height) + 1.5rem)` safe-area kuralı uygulanır.

---

## 7. Erişilebilirlik ve Hareket Azaltma (WCAG 2.1 AA)

- **Odak Çizgileri:** `:focus-visible` için en az 3px yüksek kontrastlı belirgin mavi çizgi.
- **İçeriğe Atla Linki:** Sayfa başında klavye kullanıcıları için `.sr-only` gizli link (`#main-content`).
- **Renk Kontrastı:** Tüm metin ve zemin kombinasyonları en az 4.5:1 kontrast oranını karşılar.
- **Prefers-Reduced-Motion:** `@media (prefers-reduced-motion: reduce)` ile tüm yumuşak kaydırmalar ve CSS geçişleri kapatılır.
- **Dokunma Hedefleri:** Mobildeki tüm butonlar en az 48x48 piksel dokunma alanına sahiptir.

---

*Belge Tarihi: 2026-10-21*
