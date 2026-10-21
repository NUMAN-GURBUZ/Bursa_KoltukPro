# DECISIONS — Bursa Seyyar Koltuk Yıkama

Her önemli teknik ve mimari karar, gerekçesiyle birlikte bu belgede kayıt altına alınır.

---

## D01: Statik Site Mimarisi (Backend / DB Yok)

**Tarih:** 2026-10-21  
**Durum:** ✅ Kesinleşti  

**Karar:** Site tamamen statik (client-side) olarak geliştirilecek. Backend sunucu, veritabanı, kullanıcı üyelik sistemi veya otomatik rezervasyon altyapısı kurulmayacak.

**Gerekçe:**
- Proje, bir hizmet tanıtım sitesi ve müşteri kazanım aracıdır. Dinamik veri gerektiren bir iş akışı yoktur.
- WhatsApp ve telefon birincil iletişim kanallarıdır; işlem sunucu tarafında gerçekleşmez.
- Statik site: sıfır sunucu maliyeti (Netlify/Vercel/GitHub Pages ücretsiz tier), sıfır veritabanı bakımı, minimum güvenlik yüzeyi.
- Prompt açıkça belirtiyor: "Statik bir tanıtım sitesi yeterliyse sırf modern görünmek için backend veya veritabanı kurma."

**Değerlendirilen Alternatifler:**
| Alternatif | Neden Reddedildi |
|-----------|-----------------|
| Next.js SSR/SSG | Overkill. SEO için SSG faydalı olur ama bu ölçekte statik HTML ile aynı sonuç elde edilir. Bakım maliyeti artar. |
| WordPress | CMS gereksiz. Güvenlik güncellemesi, hosting maliyeti, plugin bağımlılığı. |
| Headless CMS + Static Gen | İçerik sık değişmeyecek. Config dosyası yeterli. |

**Geri Alınabilir mi?** Evet. İleride dinamik ihtiyaç doğarsa mimarı değiştirmek mümkün.

---

## D02: Vite + Vanilla JS (Framework Seçimi)

**Tarih:** 2026-10-21  
**Durum:** ✅ Onaylandı (kullanıcı tarafından)  

**Karar:** Proje, **Vite** build aracı ile **Vanilla HTML/CSS/JavaScript** kullanılarak geliştirilecek. React, Vue veya benzeri bir UI framework'ü kullanılmayacak.

**Gerekçe:**
- Site basit bir tanıtım ve dönüşüm platformudur. Karmaşık state yönetimi, routing veya veri binding gerektirmez.
- Vite ile: modüler dosya yapısı, hot-reload geliştirme deneyimi, otomatik CSS/JS minification, görsel optimizasyonu (plugin ile), kolay dağıtım.
- Sıfır framework bağımlılığı → küçük bundle boyutu → hızlı yükleme → iyi Core Web Vitals.
- SEO için SSR gerekli değil (statik HTML zaten crawl edilebilir).

**Değerlendirilen Alternatifler:**
| Alternatif | Avantaj | Neden Tercih Edilmedi |
|-----------|---------|----------------------|
| Sade HTML/CSS/JS (build tool yok) | En basit | Geliştirme deneyimi zayıf, minification/optimizasyon yok, modülerlik zor |
| Astro | İçerik odaklı, sıfır JS varsayılanı | Bu ölçekte Vite yeterli, Astro öğrenme/bakım maliyeti |
| 11ty (Eleventy) | Statik site jeneratörü, şablonlama | Basit site için gereksiz soyutlama |
| Next.js | SSR/SSG, React ekosistemi | Çok ağır, React bağımlılığı, bu proje için overkill |

**Geri Alınabilir mi?** Evet. HTML/CSS/JS dosyaları framework-agnostik olduğundan geçiş mümkün.

---

## D03: Merkezi İşletme Yapılandırma Dosyası

**Tarih:** 2026-10-21  
**Durum:** ✅ Kesinleşti  

**Karar:** Tüm işletme bilgileri (ad, telefon, WhatsApp, ilçeler, çalışma saatleri, hizmetler, sosyal medya vb.) tek bir `src/config/business.js` dosyasından yönetilecek.

**Gerekçe:**
- Prompt zorunlu kılıyor: "tek bir merkezi yapılandırma dosyasından yönetilebilir."
- Bilgiler henüz sağlanmadığı için açıkça işaretlenmiş yer tutucular kullanılacak.
- Bilgi güncellendiğinde tek dosya değişir, tüm siteye yansır.
- Gizli bilgi içermez (API key vb. burada tutulmaz).

**Format:** JavaScript modülü (ES module export). JSON yerine JS tercih edildi çünkü:
- Yorum satırları eklenebilir.
- Koşullu değerler ve helper fonksiyonlar (ör: WhatsApp URL oluşturma) tanımlanabilir.
- Vite ile doğrudan import edilir.

---

## D04: SEO — Seyyar Hizmet İçin Yapısal Veri Yaklaşımı

**Tarih:** 2026-10-21  
**Durum:** 📋 Önerildi — araştırma devam ediyor  

**Karar:** Yapısal veri için `LocalBusiness` veya `HomeAndConstructionBusiness` şeması yerine, fiziksel adresi olmayan seyyar hizmet modeline uygun olan `Service` + `AreaServed` kombinasyonu kullanılacak.

**Gerekçe:**
- Google, `LocalBusiness` için fiziksel adres (`address`) gerektirir. Seyyar hizmet modeli bu kalıba uymaz.
- `Service` şeması hizmet tanımını, `AreaServed` ise kapsanan bölgeyi belirtir.
- Uydurma adres kullanmak Google politikalarını ihlal eder.

**Dikkat:** Bu karar Google'ın güncel yapısal veri kılavuzlarına göre doğrulanacaktır.

---

## D05: Analitik — Çerez İzni Yaklaşımı

**Tarih:** 2026-10-21  
**Durum:** 📋 Önerildi — detaylandırılacak  

**Karar:** Basit bir çerez izin banner'ı uygulanacak. Kullanıcı onay vermeden GA4, Meta Pixel ve reklam çerezleri yüklenmeyecek.

**Gerekçe:**
- KVKK ve GDPR uyumluluğu gereği isteğe bağlı izleme çerezleri önceden yüklenemez.
- Prompt: "Gerekli izinler alınmadan isteğe bağlı izleme başlatma."
- Ağır bir Consent Management Platform (CMP) yerine basit, hafif bir çözüm yeterli.

**Uygulama:**
- Zorunlu çerezler (varsa): izin gerekmez.
- Analitik ve reklam çerezleri: banner'dan onay sonrası yüklenir.
- Tercih `localStorage`'da saklanır.

---

## D06: Barındırma Önerisi

**Tarih:** 2026-10-21  
**Durum:** 📋 Önerildi — işletme onayı bekleniyor  

**Karar:** Statik site barındırma için **Netlify** veya **Vercel** (ücretsiz tier) önerilmektedir.

**Gerekçe:**
| Özellik | Netlify (Ücretsiz) | Vercel (Ücretsiz) | GitHub Pages |
|---------|-------------------|-------------------|-------------|
| HTTPS | ✅ Otomatik | ✅ Otomatik | ✅ Otomatik |
| Özel alan adı | ✅ | ✅ | ✅ |
| CDN | ✅ Global | ✅ Global | Sınırlı |
| Build komutu | ✅ | ✅ | ✅ (Actions) |
| Güvenlik başlıkları | ✅ `_headers` dosyası | ✅ `vercel.json` | ❌ Sınırlı |
| Form desteği | ✅ Yerleşik | ❌ | ❌ |
| Maliyet | $0 | $0 | $0 |

---

## D07: Tek Sayfa (Long-Scroll) + Ayrı Gizlilik Sayfası

**Tarih:** 2026-10-21  
**Durum:** ✅ Kesinleşti  

**Karar:** Ana site tek bir sayfa (`index.html`) olarak yapılandırılacak. Bölümler anchor linklerle erişilebilir. Gizlilik bildirimi ayrı sayfa (`privacy.html`).

**Gerekçe:**
- Küçük hizmet işletmesi için çok sayfalı yapı gereksiz.
- Mobil kullanıcılar kaydırma hareketine alışkın.
- Yasal içerik ana akışı bozmamalı → ayrı sayfa.

---

## D08: Güvenli CTA Render — null Kontrolü

**Tarih:** 2026-10-21  
**Durum:** ✅ Kesinleşti  

**Karar:** `business.js`'teki eksik bilgiler `null` değeri alacak. Bileşenler `null` kontrolü yapacak: numara yoksa WhatsApp/telefon butonları gizlenecek, bozuk link oluşturulmayacak.

**Gerekçe:**
- Gerçek bilgiler girilmeden yanlışlıkla çalışan bağlantı oluşturulmasını önlemek.
- Prompt: "Gerçek telefon numarası girilmeden üretim ortamında iletişim bağlantılarının tamamlandığını iddia etme."

---

## D09: Tasarım Yönü — Reklam ve Dönüşüm Odaklı

**Tarih:** 2026-10-21  
**Durum:** ✅ Onaylandı (kullanıcı tarafından)  

**Karar:** Tasarım; doğrudan reklam kampanyalarından gelen mobil ziyaretçiyi hedefleyen, dikkat çekici, hızlı anlaşılan ve WhatsApp üzerinden fiyat teklifi almaya odaklanan bir yapıda olacaktır.
- Agresif, rahatsız edici animasyonlar veya abartılı sahte vaatler kullanılmayacaktır.
- İlk ekranda (Hero) değer önerisi anında anlaşılacak: "Bursa'da Adresinize Gelen Koltuk Yıkama Hizmeti".
- Birincil aksiyon butonu: "WhatsApp'tan Hemen Fiyat Alın".
- Mobilde ekranı kapatmayan, erişilebilir sabit çift buton (WhatsApp + Ara).

---

## D10: Fiyatlandırma Modeli — WhatsApp Üzerinden Teklif Alma

**Tarih:** 2026-10-21  
**Durum:** ✅ Onaylandı (kullanıcı tarafından)  

**Karar:** Sitede sabit fiyat tablosu veya tahmini rakamlar yayımlanmayacaktır. Müşteriler koltuk/kanepe fotoğraflarını WhatsApp üzerinden ileterek yerinde inceleme öncesi net teklif alacaktır.

**Gerekçe:**
- Kumaş türü, koltuk boyutu, leke durumu ve minder sayısı fiyatı değiştirdiği için yanlış beklenti oluşturulması önlenir.
- Kullanıcıyı doğrudan sıcak satış ve WhatsApp diyaloğuna çeker.

---

## D11: Marka ve İşletme Adı — Merkezi Değiştirilebilir İskelet

**Tarih:** 2026-10-21  
**Durum:** ✅ Kesinleşti  

**Karar:** İşletme adı kesinleşene kadar proje kodunda ve içeriklerinde hardcoded metin kullanılmayacak, tüm marka ifadeleri `src/config/business.js` üzerinden dinamik beslenecektir. Geçici marka adı olarak isim listesinden güvenli bir temsil (`KoltukMobil Bursa` / `Bursa Seyyar Koltuk Yıkama`) kullanılacak, isim seçilince tek noktadan değiştirilecektir.

---

## D12: Sıfır Uydurma Veri Politikası (Zero-Hallucination Policy)

**Tarih:** 2026-10-21  
**Durum:** ✅ Kesinleşti  

**Karar:**
1. Gerçek olmayan telefon veya WhatsApp numarası yazılmayacak; numara yoksa butonlar açık bildirimli fallback durumunda olacak veya link üretmeyecektir.
2. Kesinleşmeyen Bursa ilçeleri için uydurma liste oluşturulmayacaktır.
3. Gerçek fotoğraf/videolar çekilene kadar açıkça "Yer Tutucu / Örnek Çalışma Alanı" olarak etiketlenmiş nötr yer tutucular kullanılacaktır.
4. Sahte müşteri yorumu, sahte referans veya sahte puan eklenmeyecektir.
5. Alan adı olmadan sahte canonical / sitemap üretilmeyecektir.

---

## Karar Durum Açıklamaları

- ✅ **Kesinleşti / Onaylandı:** Doğrudan kullanıcı tarafından onaylanan veya teknik olarak zorunlu kararlar.
- 📋 **Önerildi:** Gerekçelendirilmiş öneriler.
- ❌ **Reddedildi:** Değerlendirilmiş ancak elenmiş seçenekler.

---

*Son güncelleme: 2026-10-21*

