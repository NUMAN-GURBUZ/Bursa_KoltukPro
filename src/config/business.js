/**
 * Bursa Seyyar Koltuk Yıkama — Merkezi İşletme Yapılandırması
 * 
 * DİKKAT: Bu dosya yalnızca istemci tarafında güvenle gösterilebilecek bilgileri barındırır.
 * Gizli anahtarlar, API secret'ları veya token'lar kesinlikle buraya YAZILMAZ.
 * 
 * Sıfır Uydurma Politikası (D12):
 * Bilinmeyen veya henüz doğrulanmamış alanlar null veya boş dizi olarak bırakılmıştır.
 * Sahte telefon, sahte WhatsApp, sahte ilçe veya sahte adres eklenmemelidir.
 */

export const businessConfig = {
  // Marka & Kimlik (İşletme adı henüz kesinleşmedi; geçici gösterim kullanılır)
  brand: {
    name: 'Bursa Seyyar Koltuk Yıkama', // Geçici genel tanımlayıcı (kesinleşince güncellenecektir)
    tagline: 'Bursa\'da Adresinize Gelen Profesyonel Koltuk ve Kanepe Temizliği',
    shortDescription: 'Koltuk, kanepe ve köşe takımlarınızı yerinde, derinlemesine temizliyoruz.',
    logoUrl: null // Logo henüz oluşturulmadı
  },

  // İletişim Kanalları (Gerçek numaralar henüz iletilmediği için null)
  contact: {
    phone: null,             // Örnek format: '+905XXXXXXXXX'
    phoneDisplay: null,      // Örnek format: '05XX XXX XX XX'
    whatsapp: null,          // Uluslararası rakamsal format: '905XXXXXXXXX'
    whatsappPrefillMessage: 'Merhaba, Bursa içi koltuk yıkama hizmetiniz için fiyat teklifi almak istiyorum. Koltuğumun fotoğrafını paylaşıyorum:',
    email: null,
    workingHours: null       // Ör: 'Pazartesi - Cumartesi: 09:00 - 19:00'
  },

  // Hizmet Modeli ve Konum
  location: {
    city: 'Bursa',
    serviceModel: 'seyyar',  // Müşterinin adresine gidilir; fiziksel dükkan/mağaza yoktur
    serviceModelNote: 'Hizmetimiz tamamen seyyardır; temizlik adresinizde, yerinde gerçekleştirilir.',
    districts: []            // Kesin hizmet verilen ilçeler netleşince listelenecektir (uydurma eklenmez)
  },

  // Temel Hizmet Kapsamı (Yalnızca teyitli mobilya türleri)
  services: [
    {
      id: 'koltuk-yikama',
      title: 'Koltuk Yıkama',
      description: 'Oturma odası koltuklarınız için yerinde derinlemesine leke ve kir temizliği.',
      pricingNote: 'Fotoğraf ile WhatsApp üzerinden net fiyat teklifi verilir.'
    },
    {
      id: 'kanepe-yikama',
      title: 'Kanepe & Çekyat Yıkama',
      description: 'Günlük kullanılan kanepe ve çekyat kumaşlarının hijyenik buharlı/vakumlu bakımı.',
      pricingNote: 'Fotoğraf ile WhatsApp üzerinden net fiyat teklifi verilir.'
    },
    {
      id: 'kose-takimi-yikama',
      title: 'Köşe Takımı (L Koltuk) Yıkama',
      description: 'Geniş köşe koltuklar için kumaş dokusuna uygun detaylı yerinde yıkama.',
      pricingNote: 'Fotoğraf ile WhatsApp üzerinden net fiyat teklifi verilir.'
    }
  ],

  // Dijital Varlıklar ve İzleme (Değerler sağlanmadan aktif edilmez)
  meta: {
    domain: null,            // Henüz alan adı tahsis edilmedi
    analytics: {
      googleAnalyticsId: null, // Ör: 'G-XXXXXXXXXX'
      googleAdsConversionId: null,
      metaPixelId: null
    }
  }
};
