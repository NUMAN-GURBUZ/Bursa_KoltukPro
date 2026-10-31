import { businessConfig } from '../config/business.js';

/**
 * Genel WhatsApp mesajını döndürür.
 * Belirli bir hizmeti varsaymaz; müşteriyi fotoğraf paylaşarak fiyat almaya yönlendirir.
 */
export function getGeneralMessage(config = businessConfig) {
  return (
    config?.contact?.whatsappMessages?.general ||
    config?.contact?.whatsappPrefillMessage ||
    ''
  );
}

/**
 * Hizmet anahtarına (ör. 'koltuk-yikama', 'kose-takimi') özel WhatsApp mesajını döndürür.
 * Geçersiz veya tanımsız bir anahtar verilirse güvenli biçimde genel mesaja döner.
 */
export function getServiceMessage(serviceKey, config = businessConfig) {
  if (!serviceKey || typeof serviceKey !== 'string') {
    return getGeneralMessage(config);
  }

  const normalizedKey = serviceKey.trim().toLowerCase();
  const serviceMessages = config?.contact?.whatsappMessages?.services || {};

  return serviceMessages[normalizedKey] || getGeneralMessage(config);
}

/**
 * İlgili buton veya hizmet bağlamına göre gönderilecek WhatsApp mesajını oluşturur.
 */
export function createWhatsAppMessage(serviceKey = null, config = businessConfig) {
  if (serviceKey && typeof serviceKey === 'string' && serviceKey.trim().length > 0) {
    return getServiceMessage(serviceKey, config);
  }
  return getGeneralMessage(config);
}

/**
 * WhatsApp Bağlantı Üretici
 *
 * Sıfır Uydurma Kuralı:
 * Numara null, tanımsız, boş veya geçersiz ise asla bozuk/uydurma link üretmez; null döner.
 */
export function getWhatsAppUrl(phoneNumber, customMessage = null) {
  if (!phoneNumber || typeof phoneNumber !== 'string') {
    return null;
  }

  // Yalnızca rakamları kullan ve Türkiye mobil numaralarını wa.me için uluslararası biçime çevir.
  const digits = phoneNumber.replace(/\D/g, '');
  const localTurkishMobile = /^0?5\d{9}$/;
  const internationalTurkishMobile = /^905\d{9}$/;

  let cleanNumber = null;
  if (localTurkishMobile.test(digits)) {
    cleanNumber = `90${digits.replace(/^0/, '')}`;
  } else if (internationalTurkishMobile.test(digits)) {
    cleanNumber = digits;
  }

  if (!cleanNumber) {
    return null;
  }

  const baseUrl = `https://wa.me/${cleanNumber}`;
  if (customMessage && typeof customMessage === 'string' && customMessage.trim().length > 0) {
    return `${baseUrl}?text=${encodeURIComponent(customMessage.trim())}`;
  }

  return baseUrl;
}
