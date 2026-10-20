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
**Durum:** 📋 Önerildi — onay bekleniyor  

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

## Karar Durum Açıklamaları

- ✅ **Kesinleşti:** Prompt tarafından doğrudan desteklenen veya teknik olarak zorunlu kararlar.
- 📋 **Önerildi:** Gerekçelendirilmiş öneriler. Onay veya alternatif tercih bekleniyor.
- ❌ **Reddedildi:** Değerlendirilmiş ancak reddedilmiş seçenekler.

---

*Son güncelleme: 2026-10-21*
