import './styles/tokens.css';
import './styles/base.css';
import './styles/layout.css';
import './styles/components.css';

import { businessConfig } from './config/business.js';
import { getWhatsAppUrl, handleWhatsAppClick } from './utils/whatsapp.js';
import { getPhoneTelUrl } from './utils/phone.js';
import { initAnalytics } from './utils/analytics.js';

// Analitik modülünü başlat (kimlik yoksa pasif kalır)
const analytics = initAnalytics(businessConfig);

// DOM Yüklendiğinde Temel İskelet Bağlantıları
document.addEventListener('DOMContentLoaded', () => {
  console.log('[Bursa Seyyar Koltuk] Proje teknik iskeleti başarıyla başlatıldı.');

  // Başlık ve Marka Adını Güvenli Bağla
  const brandElements = document.querySelectorAll('[data-bind="brand-name"]');
  brandElements.forEach(el => {
    el.textContent = businessConfig.brand.name;
  });

  // WhatsApp Butonları Güvenli Bağlantı Kontrolü
  const whatsappButtons = document.querySelectorAll('[data-action="whatsapp-cta"]');
  whatsappButtons.forEach(btn => {
    const targetUrl = getWhatsAppUrl(
      businessConfig.contact.whatsapp,
      businessConfig.contact.whatsappPrefillMessage
    );

    if (targetUrl) {
      btn.setAttribute('href', targetUrl);
      btn.setAttribute('target', '_blank');
      btn.setAttribute('rel', 'noopener noreferrer');
    } else {
      // Numara henüz atanmadığı için tıklamada nazik uyarı ver
      btn.addEventListener('click', (e) => {
        handleWhatsAppClick(e, businessConfig.contact.whatsapp, businessConfig.contact.whatsappPrefillMessage);
      });
    }
  });

  // Telefon Butonları Güvenli Bağlantı Kontrolü
  const phoneButtons = document.querySelectorAll('[data-action="phone-cta"]');
  phoneButtons.forEach(btn => {
    const telUrl = getPhoneTelUrl(businessConfig.contact.phone);
    if (telUrl) {
      btn.setAttribute('href', telUrl);
    } else {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('İşletme telefon numarası henüz tanımlanmamıştır.');
      });
    }
  });
});
