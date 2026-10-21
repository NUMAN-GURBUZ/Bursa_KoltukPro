/**
 * WhatsApp Bağlantı Üretici
 * 
 * Sıfır Uydurma Kuralı:
 * Numara null, tanımsız veya boş ise asla bozuk/uydurma link üretmez; null döner.
 */
export function getWhatsAppUrl(phoneNumber, customMessage = null) {
  if (!phoneNumber || typeof phoneNumber !== 'string') {
    return null;
  }

  // Sadece rakamları ayıkla
  const cleanNumber = phoneNumber.replace(/\D/g, '');
  if (cleanNumber.length < 10) {
    return null;
  }

  const baseUrl = `https://wa.me/${cleanNumber}`;
  if (customMessage && typeof customMessage === 'string' && customMessage.trim().length > 0) {
    return `${baseUrl}?text=${encodeURIComponent(customMessage.trim())}`;
  }

  return baseUrl;
}

/**
 * WhatsApp CTA Tıklama Olayı Güvenlik Sarmalayıcısı
 */
export function handleWhatsAppClick(event, phoneNumber, message) {
  const url = getWhatsAppUrl(phoneNumber, message);
  if (!url) {
    event?.preventDefault();
    console.warn('[Bursa Seyyar Koltuk] WhatsApp numarası henüz tanımlanmadığı için yönlendirme yapılamadı.');
    alert('İşletme iletişim numarası henüz sisteme tanımlanmamıştır. Lütfen daha sonra tekrar deneyiniz.');
    return false;
  }
  return true;
}
