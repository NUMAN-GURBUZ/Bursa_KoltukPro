import './styles/tokens.css';
import './styles/base.css';
import './styles/layout.css';
import './styles/components.css';
import './utils/theme.js';

import { businessConfig } from './config/business.js';
import { getWhatsAppUrl } from './utils/whatsapp.js';
import { getPhoneTelUrl } from './utils/phone.js';
import { initAnalytics } from './utils/analytics.js';

// Analitik modülünü başlat (kimlik yoksa sessizce pasif kalır)
const analytics = initAnalytics(businessConfig);

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dinamik Marka Bilgilerini Bağla
  const brandTitleEls = document.querySelectorAll('[data-bind="brand-name"]');
  brandTitleEls.forEach(el => {
    el.textContent = businessConfig.brand.name;
  });

  const brandTaglineEls = document.querySelectorAll('[data-bind="brand-tagline"]');
  brandTaglineEls.forEach(el => {
    el.textContent = businessConfig.brand.tagline;
  });

  // 2. Güvenli Bilgilendirme Modalı Mantığı (Null Fallback)
  const infoModal = document.getElementById('info-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalTextEl = document.getElementById('modal-text');
  let previousActiveElement = null;

  function getModalFocusableElements() {
    if (!infoModal) return [];

    return [...infoModal.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )].filter(el => !el.hasAttribute('hidden'));
  }

  function openInfoModal(message) {
    previousActiveElement = document.activeElement;
    if (modalTextEl) {
      modalTextEl.textContent = message;
    }
    if (infoModal) {
      infoModal.removeAttribute('hidden');
      infoModal.classList.add('open');
      infoModal.setAttribute('aria-hidden', 'false');
      modalCloseBtn?.focus();
    }
  }

  function closeInfoModal() {
    if (infoModal) {
      infoModal.classList.remove('open');
      infoModal.setAttribute('aria-hidden', 'true');
      infoModal.setAttribute('hidden', '');
      if (previousActiveElement && typeof previousActiveElement.focus === 'function') {
        previousActiveElement.focus();
      }
    }
  }

  modalCloseBtn?.addEventListener('click', closeInfoModal);
  infoModal?.addEventListener('click', (e) => {
    if (e.target === infoModal) closeInfoModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && infoModal?.classList.contains('open')) {
      e.preventDefault();
      closeInfoModal();
      return;
    }

    if (e.key !== 'Tab' || !infoModal?.classList.contains('open')) {
      return;
    }

    const focusableElements = getModalFocusableElements();
    if (focusableElements.length === 0) {
      e.preventDefault();
      return;
    }

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (e.shiftKey && (document.activeElement === firstElement || !infoModal.contains(document.activeElement))) {
      e.preventDefault();
      lastElement.focus();
    } else if (!e.shiftKey && (document.activeElement === lastElement || !infoModal.contains(document.activeElement))) {
      e.preventDefault();
      firstElement.focus();
    }
  });

  // 3. WhatsApp CTA Butonlarını Güvenli Yapılandır
  const whatsappButtons = document.querySelectorAll('[data-action="whatsapp-cta"]');

  whatsappButtons.forEach(btn => {
    const customMsg = btn.getAttribute('data-whatsapp-message') || businessConfig.contact.whatsappPrefillMessage;
    const whatsappUrl = getWhatsAppUrl(businessConfig.contact.whatsapp, customMsg);

    if (whatsappUrl) {
      btn.setAttribute('href', whatsappUrl);
      btn.setAttribute('target', '_blank');
      btn.setAttribute('rel', 'noopener noreferrer');
      btn.addEventListener('click', () => {
        analytics.trackEvent('whatsapp_click', { label: btn.getAttribute('data-whatsapp-message') ? 'service_card_cta' : 'general_cta' });
      });
    } else {
      btn.setAttribute('href', '#');
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        openInfoModal(
          'İşletmenin resmi WhatsApp iletişim numarası henüz sisteme girilmemiştir. Sitemiz şu anda hazırlık aşamasında olup, numara tanımlandığında doğrudan mesajlaşma başlayacaktır.'
        );
      });
    }
  });

  // 4. Telefon Butonlarını Güvenli Yapılandır
  const phoneButtons = document.querySelectorAll('[data-action="phone-cta"]');
  const phoneUrl = getPhoneTelUrl(businessConfig.contact.phone);

  phoneButtons.forEach(btn => {
    if (phoneUrl) {
      btn.setAttribute('href', phoneUrl);
      btn.addEventListener('click', () => {
        analytics.trackEvent('phone_click', { label: 'direct_call' });
      });
    } else {
      btn.setAttribute('href', '#');
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        openInfoModal(
          'İşletmenin resmi telefon numarası henüz tanımlanmamıştır. Hazırlık süreci tamamlandığında doğrudan arama bağlantısı aktif olacaktır.'
        );
      });
    }
  });

  // 5. İnteraktif Kumaş ve Leke Rehberi Sekme Mantığı
  const tabButtons = document.querySelectorAll('[data-tab-target]');
  const tabPanels = document.querySelectorAll('[data-tab-panel]');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-tab-target');

      // Aktif sekme butonunu güncelle
      tabButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      });
      button.classList.add('active');
      button.setAttribute('aria-selected', 'true');

      // İlgili paneli göster
      tabPanels.forEach(panel => {
        if (panel.id === targetId) {
          panel.classList.add('active');
          panel.removeAttribute('hidden');
        } else {
          panel.classList.remove('active');
          panel.setAttribute('hidden', 'true');
        }
      });
    });
  });
});
