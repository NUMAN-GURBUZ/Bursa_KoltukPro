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
  // Marka & Kimlik
  brand: {
    name: 'Bursa KoltukPro',
    tagline: 'Bursa\'da Adresinize Gelen Yerinde Koltuk ve Kanepe Temizliği',
    shortDescription: 'Koltuk, kanepe ve köşe takımlarınızı taşımadan, adresinizde temizliyoruz.',
    logoUrl: null
  },

  // İletişim Kanalları
  contact: {
    phone: '05433704523',    // Yerel Türkiye mobil formatı; phone yardımcısı tel:+905433704523 biçimine dönüştürür
    phoneDisplay: '0543 370 45 23',
    whatsapp: '05433704523', // Yerel Türkiye mobil formatı; URL yardımcısı 905XXXXXXXXX biçimine dönüştürür
    whatsappPrefillMessage: 'Merhaba, Bursa\'da koltuk yıkama hizmeti almak istiyorum. Fiyat bilgisi alabilir miyim?',
    email: null,
    workingHours: null
  },

  // Hizmet Modeli ve Konum
  location: {
    city: 'Bursa',
    serviceModel: 'seyyar',  // Müşterinin adresine gidilir; fiziksel dükkan/mağaza yoktur
    serviceAreaNote: 'Bursa içinde belirlenen hizmet noktalarına adrese servis sağlanmaktadır.',
    districts: []            // Kesin hizmet verilen ilçeler netleşince listelenecektir
  },

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
