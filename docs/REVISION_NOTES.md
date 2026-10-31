# Bursa KoltukPro — Revizyon Notları

## 28 Ekim 2026 — Görsel, metin ve teknik tutarlılık

### Marka ve görseller
- Başlıkta mavi parıltılı eski PNG yerine yeni, ölçeklenebilir yeşil-krem SVG logo kullanılıyor. Eski PNG dosyaları silinmedi; `logo-original-bursa-koltukpro.png` ve `logo-bursa-koltukpro.png` yedek olarak korunuyor.
- Altı hizmet fotoğrafının mobilya eşleşmeleri korundu; çözünürlükleri 2x'e çıkarıldı ve hafif kontrast/keskinlik düzenlemesi yapıldı. Görseller temsili uygulama fotoğraflarıdır, gerçek müşteri sonucu olarak sunulmuyor.
- `benefits-upholstery-cleaning.jpg` temiz bir kırpımla yeniden hazırlandı; önceki dosyanın altındaki siyah bant giderildi.
- `og-cover.jpg` paylaşım önizlemeleri için 1200×630 boyutunda hazırlandı.
- `video-poster.jpg` dikey video için önizleme kare­si olarak eklendi.
- 1080×1920, yaklaşık 12 MB olan 10 saniyelik video 720×1280 çözünürlükte ve yaklaşık 1.3 MB boyutunda web için yeniden kodlandı; `preload="metadata"` korunuyor.

### İçerik
- Başlıktaki eski mavi logo kullanımdan çıkarıldı; hizmet sayfası için yeni SVG marka simgesi eklendi.
- Yapay veya savunmacı duran metinler daha doğal müşteri iletişimine çevrildi; “sahte puan/iddia” gibi site hazırlığını belli eden ifadeler kaldırıldı.
- Fotoğrafa göre kesin fiyat vaadi “ön değerlendirme ve fiyatı birlikte netleştirme” şeklinde yumuşatıldı. Kuruma süresi için kesin veya herkese uyan bir süre vaat edilmiyor.
- Galeri altında sabit fotoğrafların temsili olduğu ve gerçek sonucun kumaş/leke durumuna bağlı değişebileceği belirtildi.

### SEO ve yayın ayarları
- Ana sayfa title/description ve Open Graph/Twitter kart etiketleri güncellendi; paylaşımlar için `og-cover.jpg` eklendi.
- `robots.txt` sitemap adresini bildiriyor; `sitemap.xml` ana sayfa ve gizlilik sayfasını içeriyor.
- Canonical ve paylaşım URL'leri mevcut projede kullanılan `https://bursakoltukpro.com.tr` alan adına göre düzenlendi. Üretime gönderilmeden önce alan adının DNS ve HTTPS durumu doğrulanmalı.
- Gizlilik sayfası daha anlaşılır hâle getirildi; yasal unvan, veri saklama süresi ve veri sorumlusu bilgilerinin işletme tarafından doğrulanması için ayrı yayın öncesi kontrol listesi eklendi.

### Kontroller
- JavaScript modülleri `node --check` ile sözdizimi kontrolünden geçirildi.
- HTML sayfalarında yinelenen ID bulunmadı; yerel resim/video yolları kontrol edildi.
- `npm ci` bu çalışma ortamında npm kayıt sunucusuna erişim zaman aşımına uğradı; bu nedenle Vite üretim derlemesi tamamlanamadı. Paketi yerel bilgisayarda `npm install`, `npm run build` ve `npm run dev` komutlarıyla kontrol edin.
