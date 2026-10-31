/**
 * Bursa Koltuk Pro — Merkezi İşletme Yapılandırması
 *
 * DİKKAT: Bu dosya yalnızca istemci tarafında güvenle gösterilebilecek bilgileri barındırır.
 * Gizli anahtarlar, API secret'ları veya token'lar kesinlikle buraya YAZILMAZ.
 *
 * Sıfır Uydurma Politikası (D12):
 * Bilinmeyen veya henüz doğrulanmamış alanlar null veya boş dizi olarak bırakılmıştır.
 * Sahte telefon, sahte WhatsApp, sahte ilçe veya sahte adres eklenmemelidir.
 */

export const businessConfig = {
  // Marka & Kimlik
  brand: {
    name: 'Bursa Koltuk Pro',
    displayNameUpper: 'BURSA KOLTUK PRO',
    tagline: 'Koltuk, kanepe, çekyat, yatak ve sandalyelerinizi taşımadan adresinizde temizliyoruz.',
    shortDescription: 'Döşemeli mobilyalarınızı taşımadan, adresinizde vakumlu ekipmanla temizliyoruz.',
    logoUrl: '/images/logo-bursa-koltukpro.svg'
  },

  // İletişim Kanalları
  contact: {
    phone: '05433704523',    // Yerel Türkiye mobil formatı; phone yardımcısı tel:+905433704523 biçimine dönüştürür
    phoneDisplay: '0543 370 45 23',
    whatsapp: '05433704523', // Yerel Türkiye mobil formatı; URL yardımcısı 905XXXXXXXXX biçimine dönüştürür
    whatsappPrefillMessage:
      'Merhaba, Bursa Koltuk Pro üzerinden ulaşıyorum. Temizlik hizmetleriniz hakkında bilgi ve fiyat almak istiyorum. Temizletmek istediğim ürünün fotoğraflarını paylaşarak fiyat teklifi almak istiyorum. Yardımcı olabilir misiniz?',
    whatsappMessages: {
      general:
        'Merhaba, Bursa Koltuk Pro üzerinden ulaşıyorum. Temizlik hizmetleriniz hakkında bilgi ve fiyat almak istiyorum. Temizletmek istediğim ürünün fotoğraflarını paylaşarak fiyat teklifi almak istiyorum. Yardımcı olabilir misiniz?',
      services: {
        'koltuk-yikama':
          'Merhaba, Bursa Koltuk Pro üzerinden ulaşıyorum. Koltuk yıkama hizmetiniz için fiyat almak istiyorum. Koltuğumun fotoğraflarını paylaşacağım. Fiyat ve hizmet detayları hakkında yardımcı olabilir misiniz?',
        'kanepe-cekyat':
          'Merhaba, Bursa Koltuk Pro üzerinden ulaşıyorum. Kanepe ve çekyat temizliği hizmetiniz için fiyat almak istiyorum. Ürünümün fotoğraflarını paylaşacağım. Fiyat ve uygulama detayları hakkında yardımcı olabilir misiniz?',
        'kose-takimi':
          'Merhaba, Bursa Koltuk Pro üzerinden ulaşıyorum. Köşe takımı temizliği hizmetiniz için fiyat almak istiyorum. Köşe koltuğumun fotoğraflarını paylaşacağım. Fiyat ve hizmet detayları hakkında yardımcı olabilir misiniz?',
        'tek-kisilik-yatak':
          'Merhaba, Bursa Koltuk Pro üzerinden ulaşıyorum. Tek kişilik yatak temizliği hizmetiniz için fiyat almak istiyorum. Yatağımın fotoğraflarını paylaşacağım. Fiyat ve işlem detayları hakkında yardımcı olabilir misiniz?',
        'cift-kisilik-yatak':
          'Merhaba, Bursa Koltuk Pro üzerinden ulaşıyorum. Çift kişilik yatak temizliği hizmetiniz için fiyat almak istiyorum. Yatağımın fotoğraflarını paylaşacağım. Fiyat ve işlem detayları hakkında yardımcı olabilir misiniz?',
        'sandalye-temizligi':
          'Merhaba, Bursa Koltuk Pro üzerinden ulaşıyorum. Sandalye temizliği hizmetiniz için fiyat almak istiyorum. Sandalyelerimin fotoğraflarını ve adet bilgisini paylaşacağım. Fiyat teklifi konusunda yardımcı olabilir misiniz?'
      }
    },
    email: null,
    workingHours: null
  },

  // Hizmetler (Gerçek sunulan hizmet listesi — Schema.org ve UI ile tutarlı)
  services: [
    {
      id: 'koltuk-yikama',
      name: 'Koltuk Yıkama',
      description: 'Tekli, ikili ve üçlü koltuklar için kumaş yapısına uygun yerinde temizlik.'
    },
    {
      id: 'kanepe-cekyat',
      name: 'Kanepe ve Çekyat Temizliği',
      description: 'Kanepe ve çekyatlarda kumaşa uygun ürün ve vakumlu ekipmanla temizlik.'
    },
    {
      id: 'kose-takimi',
      name: 'Köşe Takımı Temizliği',
      description: 'L ve U köşe takımlarında oturma alanları ve ulaşılması zor bölümlere uygun temizlik.'
    },
    {
      id: 'tek-kisilik-yatak',
      name: 'Tek Kişilik Yatak Temizliği',
      description: 'Tek kişilik yatak döşemesine uygun vakumlu temizlik uygulaması.'
    },
    {
      id: 'cift-kisilik-yatak',
      name: 'Çift Kişilik Yatak Temizliği',
      description: 'Çift kişilik yataklarda kumaş yapısına göre değerlendirilmiş temizlik.'
    },
    {
      id: 'sandalye-temizligi',
      name: 'Sandalye Temizliği',
      description: 'Yemek masası ve çalışma sandalyelerinin kumaş döşemelerine uygun temizlik.'
    }
  ],

  // Hizmet Modeli ve Konum
  location: {
    city: 'Bursa',
    countryCode: 'TR',
    serviceModel: 'seyyar',  // Müşterinin adresine gidilir; fiziksel dükkan/mağaza yoktur
    serviceAreaNote: 'Bursa içinde belirlenen hizmet noktalarına adrese servis sağlanmaktadır.',
    districts: []            // Kesin hizmet verilen ilçeler netleşince listelenecektir
  },

  // Dijital Varlıklar ve İzleme (Değerler sağlanmadan aktif edilmez)
  meta: {
    domain: 'https://bursakoltukpro.com.tr', // SEO URL'leri bu adresi kullanır; yayına almadan önce DNS/HTTPS doğrulanmalı
    analytics: {
      googleAnalyticsId: null, // Ör: 'G-XXXXXXXXXX'
      googleAdsConversionId: null,
      metaPixelId: null
    }
  }
};
