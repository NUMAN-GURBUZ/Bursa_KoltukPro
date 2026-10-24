/**
 * Telefon Bağlantı Üretici (tel: URI)
 * 
 * Sıfır Uydurma Kuralı:
 * Numara null, tanımsız veya boş ise asla bozuk link üretmez; null döner.
 * Türkiye mobil numaralarını uluslararası '+905XXXXXXXXX' formatına çevirir.
 */
export function getPhoneTelUrl(phoneNumber) {
  if (!phoneNumber || typeof phoneNumber !== 'string') {
    return null;
  }

  const digits = phoneNumber.replace(/\D/g, '');
  const localTurkishMobile = /^0?5\d{9}$/;
  const internationalTurkishMobile = /^905\d{9}$/;

  let cleanNumber = null;
  if (localTurkishMobile.test(digits)) {
    cleanNumber = `+90${digits.replace(/^0/, '')}`;
  } else if (internationalTurkishMobile.test(digits)) {
    cleanNumber = `+${digits}`;
  } else if (digits.length >= 7) {
    cleanNumber = phoneNumber.startsWith('+') ? `+${digits}` : digits;
  }

  if (!cleanNumber) {
    return null;
  }

  return `tel:${cleanNumber}`;
}
