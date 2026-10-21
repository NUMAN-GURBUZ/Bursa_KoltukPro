# Bursa Seyyar Koltuk Yıkama — Uçtan Uca Geliştirme Planı

**Amaç:** Bursa'da müşterinin adresine giderek koltuk, kanepe ve köşe takımı yıkayan işletme için hızlı, mobil uyumlu, güven veren ve WhatsApp üzerinden fiyat talebine odaklı web sitesi.

## 1. Kesinleşen bilgiler

- Hizmet modeli seyyar; fiziksel mağaza varsayılmayacak.
- Bölge Bursa; hizmet verilecek ilçeler henüz doğrulanmadı.
- Ana hizmetler: koltuk, kanepe, köşe takımı yıkama.
- Birincil iletişim WhatsApp, ikincil iletişim telefon.
- Gerçek temizlik görüntüleri ve yararlı temizlik bilgileri kullanılacak.
- Sahte yorum, fiyat, istatistik, adres veya hizmet iddiası oluşturulmayacak.
- İlk sürümde ödeme, üyelik, veritabanı veya karmaşık rezervasyon altyapısı gerekmiyor.

## 2. Geçici teknik karar

**Vite + Vanilla HTML/CSS/JavaScript** başlangıç için uygun görünüyor. Backend/veritabanı eklemeyelim; gerçek ihtiyaç ortaya çıkarsa yeniden değerlendirelim. İşletme bilgileri merkezi bir yapılandırmada tutulabilir.

`business.js` yalnızca sitede gösterilebilecek işletme bilgilerini tutmalı; API anahtarı veya gizli token içermemeli. Telefon/WhatsApp numarası yoksa geçersiz bağlantı üretme. Alan adı bilinmiyorsa sitemap'e uydurma URL yazma. Analitik kimlikleri verilmediyse izlemeyi başlatma.

## 3. Uçtan uca geliştirme aşamaları

### Aşama 0 — Mevcut durumu doğrula
- Proje klasörü, Git durumu, son commit ve gerçek dosyaları kontrol et.
- Önceki raporda var olduğu söylenen belgelerin gerçekten mevcut olduğunu doğrula.
- Kullanıcının dosyalarını silme veya gereksiz yere yeniden oluşturma.

**Çıktı:** Doğru mevcut durum raporu.

### Aşama 1 — Gereksinimleri ve açık soruları belgele
Belgeler:
- `docs/PROJECT_BRIEF.md`
- `docs/REQUIREMENTS.md`
- `docs/OPEN_QUESTIONS.md`
- `docs/DECISIONS.md`
- `docs/ROADMAP.md`

Kesinleşen kararlarla önerileri ayır.

### Aşama 2 — UI/UX planı
- Sayfa haritası ve bölüm sırası.
- Mobil ve masaüstü wireframe açıklaması.
- Tasarım sistemi: renk, tipografi, boşluklar, butonlar, kartlar.
- WhatsApp'a yönlendiren kullanıcı yolculuğu.
- Gerçek fotoğraf/video çekim listesi.
- Etkileşimli temizlik rehberinin kapsamı.
- SEO ve içerik planı.

Tasarım referansı yoksa geçici tasarım yönü öner; nihai karar olarak sunma. Kullanıcı tasarım yönünü onayladıktan sonra tam ana sayfa kodlamasına geç.

### Aşama 3 — Teknik mimari ve proje iskeleti
Önerilen yapı (gereksiz dosya eklemeden sadeleştirilebilir):

```text
bursa_clean/
├── docs/
├── public/
│   ├── images/
│   ├── icons/
│   ├── robots.txt
│   └── favicon.svg
├── src/
│   ├── config/business.js
│   ├── components/
│   ├── styles/
│   │   ├── tokens.css
│   │   ├── base.css
│   │   ├── layout.css
│   │   └── components.css
│   └── utils/
│       ├── whatsapp.js
│       ├── phone.js
│       └── analytics.js
├── index.html
├── gizlilik.html
├── package.json
├── vite.config.js
└── .gitignore
```

- Mevcut dosyaları kontrol etmeden silme veya üstüne yazma.
- Bileşenleri sorumluluklarına göre ayır; aşırı parçalama yapma.
- `schema.js` yalnızca gerçekten gerekliyse ekle.
- Gerçek alan adı yoksa sitemap'i sonradan tamamlanacak olarak işaretle.
- Gizlilik metnini kullanılan gerçek veri işleme ve izleme araçlarına göre hazırla.
- İskelet kurulduktan sonra `npm install` ve `npm run build` komutlarını gerçekten çalıştır.

**Çıktı:** Geliştirme sunucusu açılabilen ve build'i başarılı olan temel proje.

### Aşama 4 — Tasarım sistemi ve ana sayfa
- CSS token'ları ve tipografi.
- Semantik header, navigasyon ve footer.
- Onaylanan bölümler.
- Mobil/masaüstü responsive düzen.
- Gerçek görseller yoksa açıkça yer tutucu kullan.

### Aşama 5 — İçerik ve etkileşimler
- Merkezi işletme yapılandırması.
- Doğrulanmış hizmetler ve ilçeler.
- WhatsApp hazır mesajı ve telefon bağlantısı.
- Gerçek öncesi/sonrası fotoğrafları.
- SSS ve güvenli temizlik rehberi.
- Gizlilik ve gerekli bilgilendirmeler.

### Aşama 6 — SEO ve analitik
- Sayfa başlığı, meta açıklaması, canonical ve Open Graph.
- Sitemap/robots ayarlarını alan adı belli olduğunda doğrula.
- Yapılandırılmış veriyi yalnızca gerçek bilgilere dayandır.
- GA4, Google Ads ve Meta entegrasyonlarını yalnızca gerçek kimlikler sağlandığında etkinleştir.
- Tıklamayı satış veya tamamlanmış randevu sayma.
- İsteğe bağlı izlemeyi gerekli izinler alınmadan başlatma.

### Aşama 7 — Test ve kalite
- `npm run build`, varsa lint ve test komutları.
- Konsol/ağ hataları.
- Mobil ve masaüstü görünüm.
- WhatsApp URL ve mesajı.
- `tel:` bağlantısı.
- Klavye erişimi, kontrast ve form etiketleri.
- SEO metadata, görseller ve bağlantılar.
- Performans testleri gerçekten çalıştırılırsa sonuçları raporla.

### Aşama 8 — Yayına alma
- Alan adı, hosting ve HTTPS.
- Gerçek işletme bilgileri ve görseller.
- Search Console ve analitik kurulumları.
- Üretim URL'si, sitemap ve yönlendirme kontrolü.
- Yayın ve geri alma kontrol listesi.

## 4. İlk sürüm kapsamı

**Dahil:** Ana sayfa, hizmetler, gerçek görsel alanı, süreç, hizmet bölgeleri, SSS, WhatsApp/telefon CTA'ları, basit etkileşimli temizlik rehberi, gizlilik sayfası, temel SEO ve erişilebilirlik.

**Hariç:** Ödeme, üyelik, yönetim paneli, veritabanı, karmaşık rezervasyon takvimi ve doğrulanmamış müşteri yorumları.

## 5. Kullanıcıdan alınacak bilgiler

Bunların hepsi ilk kodlamayı engellemez. Eksik olanlar yapılandırılabilir tutulabilir; yayın öncesi gerçek bilgilerle tamamlanmalıdır.

### Öncelik A — İşlev ve marka
1. İşletme adı veya geçici ad.
2. WhatsApp numarası.
3. Telefon numarası (WhatsApp ile aynı olabilir).
4. Hizmet verilen Bursa ilçeleri.
5. Koltuk/kanepe/köşe takımı dışında hangi hizmetler sunuluyor?
6. Gerçek fotoğraf/video var mı, ne zaman sağlanabilir?

### Öncelik B — Tasarım
7. Beğenilen örnek web sitesi var mı?
8. Tasarım yönü: premium/profesyonel, doğal/ferah veya dikkat çekici/reklam odaklı?
9. Logo/marka renkleri var mı?
10. Fiyatlar sitede yayımlanacak mı, yoksa WhatsApp'tan mı verilecek?

### Öncelik C — Yayın
11. Çalışma saatleri.
12. Alan adı/hosting tercihi.
13. Instagram/Facebook bağlantıları.
14. Analitik hesapları hazır mı?
15. Gizlilik bildirimi için kullanılacak gerçek veri işleme/izleme araçları.

## 6. Claude ile çalışma protokolü

Her aşama sonunda Claude şunları raporlamalı:
1. Yapılan işler.
2. Oluşturulan/değiştirilen dosyalar.
3. Çalıştırılan komutlar ve gerçek sonuçları.
4. Test sonuçları.
5. Açık sorular ve riskler.
6. Sonraki küçük adım.
7. Kullanıcı onayı gereken kararlar.

Küçük ve geri alınabilir işleri gereksiz onaya bağlama. Tasarım yönü, maliyetli servisler, gerçek veri/izleme ve yayına alma gibi önemli kararları kullanıcıyla doğrula. Git değişikliklerinden önce `git status` kontrol et; kullanıcı istemeden uzak depoya push yapma.

## 7. Claude'a şimdi verilecek prompt

> Ana proje promptunu, mevcut dokümantasyonu ve bu yol haritasını oku. Aşama 0–1 raporundaki bilgileri gerçek proje dosyalarıyla doğrula. Önce `docs/ROADMAP.md`, `docs/DECISIONS.md` ve `docs/OPEN_QUESTIONS.md` dosyalarını bu yol haritasıyla tutarlı hale getir.
>
> Vite + Vanilla HTML/CSS/JavaScript yaklaşımını şimdilik kabul ediyorum. Şimdi yalnızca Aşama 3'ün temel proje iskeletini kur. Mevcut dosyaları koru, gereksiz bağımlılık veya soyutlama ekleme. `business.js` içinde gerçek olmayan işletme bilgileri kullanma. Numara yokken WhatsApp/telefon bağlantısı üretme. Alan adı yokken sitemap'e uydurma URL yazma. Analitik kimlikleri yoksa izlemeyi başlatma.
>
> Semantik ve erişilebilir bir başlangıç HTML'i oluştur; ana sayfanın nihai tasarımını henüz kodlama. Uygun npm script'lerini ekle, `npm install` ve `npm run build` komutlarını gerçekten çalıştır ve sonuçlarını raporla. Çalıştıramadığın komutları açıkça belirt.
>
> Raporunda değiştirilen dosyaları, test sonuçlarını, kalan riskleri ve bir sonraki adımı yaz. Tasarım referansları ve işletme bilgileri eksik olsa da iskelet kurulabilir; bu eksikler yüzünden gereksiz yere durma. Büyük veya geri döndürülmesi zor kararlar için önce sor.

## 8. Durum kontrol listesi

- [x] Proje hedefi ve kapsamı tanımlandı.
- [x] İlk teknik yön belirlendi: Vite + Vanilla JS (geçici onay).
- [x] Uydurma işletme bilgisi kullanılmaması kararlaştırıldı.
- [x] Uçtan uca aşamalar tanımlandı.
- [ ] Mevcut dokümantasyonun dosyalarla doğrulanması.
- [ ] Tasarım yönünün kararlaştırılması.
- [ ] Proje iskeletinin kurulması ve build testi.
- [ ] UI/UX planının onaylanması.
- [ ] Ana sayfanın geliştirilmesi.
- [ ] Test ve yayına alma.

**Not:** İşletme adı, numaralar, fotoğraflar ve hizmet ilçeleri eksik diye ilk iskeletin kurulması durmamalı. Ancak bu bilgiler doğrulanmadan site yayına hazır ilan edilmemeli.


## 9. Kullanıcının verdiği güncel kararlar

Bu bölüm, kullanıcının 2026-10-21 tarihinde verdiği cevaplarla güncellenmiştir.

- **İşletme adı:** Henüz seçilmedi; isim önerileri hazırlanacak.
- **Hizmet bölgeleri:** Bursa içindeki ilçeler henüz netleşmedi. İlçe isimleri kesin hizmet bölgeleri gibi yayımlanmayacak.
- **Medya:** Gerçek fotoğraf ve videolar daha sonra çekilecek. İlk taslakta açıkça geçici olduğu belirtilen yer tutucular kullanılabilir.
- **Fiyatlandırma:** Sabit fiyatlar web sitesinde yayımlanmayacak; fiyat teklifi WhatsApp üzerinden alınacak.
- **Tasarım yönü:** Reklam odaklı, dikkat çekici ve ziyaretçiyi hızlı biçimde iletişime yönlendiren tasarım.
- **İşletme modeli:** Seyyar hizmet; müşterinin adresine gidilir, fiziksel mağaza varsayılmaz.

### Tasarım yönünün uygulama karşılığı

“Reklam odaklı ve dikkat çekici” yaklaşımı; agresif animasyonlar veya abartılı vaatler anlamına gelmemelidir. Tasarım şu önceliklerle hazırlanmalı:

1. İlk ekranda Bursa'da adrese gelen koltuk yıkama hizmeti anlaşılmalı.
2. Birincil CTA açıkça “WhatsApp'tan Fiyat Al” veya benzeri bir ifade kullanmalı.
3. Mobilde iletişim butonuna erişmek kolay olmalı; sabit alt CTA kullanılacaksa içerik ve erişilebilirliği kapatmamalı.
4. Gerçek görseller hazır olana kadar yer tutucular kullanılmalı; stok/yapay görseller gerçek müşteri işi gibi sunulmamalı.
5. WhatsApp üzerinden teklif verildiği açıkça belirtilmeli; sitede doğrulanmamış fiyat gösterilmemeli.
6. Hizmet ilçeleri kesinleşene kadar “Bursa'nın tüm ilçelerinde hizmet” gibi doğrulanmamış iddialar yazılmamalı.

## 10. İşletme adı için ilk fikirler

Aşağıdaki adlar yalnızca yaratıcı fikirlerdir; marka, alan adı, sosyal medya kullanıcı adı veya ticari unvan uygunluğu kontrol edilmemiştir. Kullanılmadan önce arama ve uygunluk kontrolü yapılmalıdır.

1. Bursa Koltuk Bakım
2. KoltukJet Bursa
3. TemizKoltuk Bursa
4. KoltukRota
5. KoltukMobil
6. Bursa Koltuk Temizliği
7. Koltuk Parıltı
8. EvKonfor Temizlik
9. KoltukVakti
10. TemizRota Koltuk Yıkama

### İsim seçerken değerlendirme ölçütleri

- Telefonda duyulduğunda kolay anlaşılması.
- Yazımının ve hatırlanmasının kolay olması.
- Bursa ve koltuk yıkama hizmetiyle bağının anlaşılır olması.
- İleride başka döşemeli mobilya hizmetleri eklenirse markayı gereksiz yere sınırlamaması.
- Alan adı ve sosyal medya kullanıcı adlarının uygun olması.
- Başka işletmelerin mevcut markalarıyla karışmaması.

İlk öneri: **KoltukMobil** veya **KoltukJet Bursa** gibi seyyar hizmet fikrini yansıtan kısa bir marka yönünü değerlendirmek; ancak son karar kullanıcıya aittir.

## 11. Güncellenmiş sıradaki adımlar

1. İsim önerilerinden kısa liste oluştur ve tercih edilen adı seç veya geçici marka adı belirle.
2. Tasarım planını reklam odaklı kullanıcı yolculuğuna göre hazırla.
3. İlçe bilgisi netleşene kadar hizmet bölgeleri alanını yapılandırılabilir bırak.
4. Gerçek görseller çekilene kadar yer tutucu medya alanlarını kullan.
5. Fiyat CTA'sını WhatsApp üzerinden teklif almaya göre tasarla.
6. Teknik iskeletin kurulmasına izin ver; gerçek işletme bilgileri beklenirken proje durmasın.
7. Ana sayfanın tasarımını kodlamadan önce kullanıcıya bölüm sırasını ve wireframe'i göster.

### Sıradaki onay

Bir sonraki adım, **isim seçimini ve UI/UX planını paralel ilerletmek** olmalı. İşletme adı henüz kesin değilse geçici marka adı kullanılabilir; merkezi yapılandırma sayesinde sonradan değiştirilebilir. Tasarım planı onaylanınca ana sayfa kodlamasına başlanabilir.
