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
