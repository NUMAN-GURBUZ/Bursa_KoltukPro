## 🟢 Güncel Durum ve Alınan Kararlar (2026-10-21)

Aşağıdaki açık konular kullanıcı tarafından netleştirilmiştir:

| Konu | Alınan Karar / Durum | Uygulama Yaklaşımı |
|------|----------------------|-------------------|
| **İşletme Adı (Q01)** | Henüz seçilmedi; 10 maddelik isim öneri havuzu hazırlandı (`KoltukMobil`, `KoltukJet Bursa` vb.). | `business.js` içinde geçici/placeholder tutulacak, arayüze dinamik bağlanacak. |
| **Hizmet Bölgeleri (Q04)** | Bursa ilçeleri henüz net değil. | Kesin ilçe listesi yayımlanmayacak, "Bursa ve çevresinde yerinde hizmet" genel ifadesi kullanılacak, config'de dinamik tutulacak. |
| **Medya & Görseller (Q06-Q08)** | Gerçek fotoğraf/videolar daha sonra çekilecek. | Yer tutucu (placeholder) kullanılacak; stok veya yapay görsel gerçek iş gibi sunulmayacak. |
| **Fiyatlandırma (Q11)** | Sabit fiyat yayımlanmayacak; fiyatlar WhatsApp üzerinden teklif olarak verilecek. | "Koltuk fotoğraflarınızı WhatsApp'tan iletin, hemen net fiyat verelim" CTA mesajı vurgulanacak. |
| **Tasarım Yönü (Q23)** | **Reklam odaklı, dikkat çekici ve dönüşüm odaklı.** | Adrese gelen seyyar hizmet değeri ilk ekranda verilecek, WhatsApp CTA'ları öne çıkacak, mobil çift buton sağlanacak. |

---

## 🔴 Kritik — Yayın Öncesi Kesinlikle Gerekli (Kalanlar)

Bu bilgiler olmadan site yayına **alınamaz** (geliştirme aşamasında güvenli fallback kullanılacaktır):

| # | Soru | Durum / Neden Kritik? |
|---|------|-----------------------|
| Q01 | İşletme adı nedir? | ⏳ İsim listesinden seçim bekleniyor. Geliştirmede geçici marka adı kullanılacak. |
| Q02 | WhatsApp numarası nedir? (Uluslararası formatta, ör: 905XXXXXXXXX) | ⏳ Bekleniyor. Gerçek numara olmadan butonlar uydurma link üretmeyecek, bilgilendirici fallback gösterecek. |
| Q03 | Telefon numarası nedir? | ⏳ Bekleniyor. İkincil iletişim kanalı. |
| Q04 | Hangi ilçelere hizmet veriliyor? (Kesin liste) | ⏳ Netleşmedi. İlçe adı uydurulmayacak, dinamik liste boş/genel Bursa olarak tutulacak. |
| Q05 | Çalışma saatleri nedir? (Hangi günler, saat aralığı) | ⏳ Bekleniyor. |

---

## 🟡 Yüksek Öncelik — İçerik ve Görsel Çekimi

| # | Soru | Durum / Plan |
|---|------|--------------|
| Q06 | Gerçek işletme fotoğrafları (Ekip, araç, makine) | ⏳ Çekim listesi hazırlandı; gerçek çekimler sonra eklenecek. |
| Q07 | Öncesi/sonrası fotoğrafları | ⏳ Gerçek çekimler bekleniyor; şimdilik açık yer tutucu kullanılacak. |
| Q08 | Tanıtım videosu | ⏳ Opsiyonel / daha sonra değerlendirilecek. |
| Q09 | Ek hizmetler (Sandalye, yatak vb.) | ⏳ Doğrulanana kadar yalnızca koltuk/kanepe/köşe takımı odaklı kalınacak. |
| Q10 | Logo & marka renkleri | ⏳ İsim netleşince geçici temizlik renkleri (mavi/zümrüt/ferah tonlar) ile başlanacak. |

---

## 🔵 Teknik ve Yayın Konuları

| # | Soru | Durum |
|---|------|-------|
| Q18 | Alan adı seçildi mi? | ⏳ İsim seçimine bağlı. Alan adı yokken uydurma sitemap URL'si oluşturulmayacak. |
| Q20-Q22 | Analitik / Pixel / Hosting hesapları | ⏳ Kimlikler sağlanmadan izleme başlatılmayacak. |

---

## Güvenli Kararlar ve Sıfır Uydurma İlkesi

1. Gerçek olmayan telefon, WhatsApp veya e-posta adresi yazılmayacak.
2. Gerçek olmayan ilçe isimleri kesin hizmet bölgesi gibi iddia edilmeyecek.
3. Gerçek olmayan fiyat, indirim veya süre garantisi sunulmayacak.
4. Stok fotoğraf veya yapay zeka çıktısı gerçek temizlik sonucu gibi sunulmayacak.
5. Uydurma müşteri yorumu veya puanı yazılmayacak.

---

*Son güncelleme: 2026-10-21*

