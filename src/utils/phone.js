/**
 * Telefon Bağlantı Üretici (tel: URI)
 * 
 * Sıfır Uydurma Kuralı:
 * Numara null, tanımsız veya boş ise asla bozuk link üretmez; null döner.
 */
export function getPhoneTelUrl(phoneNumber) {
  if (!phoneNumber || typeof phoneNumber !== 'string') {
    return null;
  }

  const cleanNumber = phoneNumber.replace(/[^\d+]/g, '');
  if (cleanNumber.length < 7) {
    return null;
  }

  return `tel:${cleanNumber}`;
}
