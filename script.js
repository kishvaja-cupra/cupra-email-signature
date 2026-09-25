'use strict';

// Maintain the product lists here. The page creates the checkboxes automatically.
const cupraProducts = ['Born', 'Formentor', 'Leon', 'Raval', 'Tavascan', 'Terramar',];
const seatProducts = ['Arona', 'Ibiza', 'Leon'];

const previewLogoPath = 'assets/cupra-seat-logo.png';
const embeddedLogoDataUri = 'data:image/png;base64,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';
const phonePattern = /^\+44 \(0\) \d{4} \d{3} \d{3}$/;

const form = document.querySelector('#signature-form');
const nameInput = document.querySelector('#name');
const jobTitleInput = document.querySelector('#job-title');
const phoneInput = document.querySelector('#phone');
const preview = document.querySelector('#signature-preview');
const copyButton = document.querySelector('#copy-button');
const copyStatus = document.querySelector('#copy-status');

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function createProductOptions(containerId, products, brand) {
  const container = document.querySelector(containerId);
  container.innerHTML = products.map((product, index) => {
    const safeId = (brand + '-product-' + index).toLowerCase();
    return       '<label class="checkbox-option" for="' + safeId + '">' +
      '<input id="' + safeId + '" type="checkbox" name="' + brand + 'Products" value="' + escapeHtml(product) + '">' +
      '<span>' + escapeHtml(product) + '</span>' +
      '</label>';
  }).join('');
}

function selectedProducts(name) {
  return [...document.querySelectorAll('input[name="' + name + '"]:checked')].map(input => input.value);
}

function buildProductRow(brand, products) {
  if (!products.length) return '';
  const brandColour = brand === 'CUPRA' ? '#474852' : '#ff0036';
  const marginBottom = brand === 'CUPRA' ? '6px' : '14px';
  return '<div style="margin-bottom:' + marginBottom + ';">' +
    '<span style="color:' + brandColour + ';font-size:9px;font-weight:bold;">&#x258C;' + brand + '</span>' +
    '<span style="color:#1d1d1b;">&nbsp;' + products.map(escapeHtml).join(' | ') + '</span>' +
    '</div>';
}

function buildSignature(logoSource) {
  const name = nameInput.value.trim() || 'Your name';
  const jobTitle = jobTitleInput.value.trim() || 'Your job title';
  const phone = phoneInput.value.trim();
  const cupra = selectedProducts('cupraProducts');
  const seat = selectedProducts('seatProducts');

  const phoneRow = phone
    ? '<div style="margin-bottom:0;font-size:9px;"><span style="font-weight:bold;">M</span>&nbsp;&nbsp;' + escapeHtml(phone) + '</div>'
    : '';

  return '<table role="presentation" style="color:#1d1d1b;line-height:1.4;border-collapse:collapse;" border="0" cellspacing="0" cellpadding="0">' +
    '<tbody><tr><td style="padding:0;">' +
    '<div style="font-size:16px;font-weight:bold;color:#1d1d1b;">' + escapeHtml(name) + '</div>' +
    '<div style="font-size:9px;color:#666666;margin-bottom:12px;">' + escapeHtml(jobTitle) + '</div>' +
    buildProductRow('CUPRA', cupra) +
    buildProductRow('SEAT', seat) +
    phoneRow +
    '<div style="height:1px;border-bottom:1px solid #a68a64;margin:0 0 16px 0;">&nbsp;</div>' +
    '<div style="margin:0 0 9px 0;"><img src="' + logoSource + '" width="156" height="66" alt="CUPRA and SEAT" style="display:block;width:244px;height:95px;border:0;outline:none;text-decoration:none;"></div>' +
    '<div style="font-weight:bold;font-size:9px;color:#1d1d1b;margin-bottom:0;">CUPRA & SEAT UK</div>' +
    '<div style="font-size:9px;color:#666666;">Yeomans Drive, Blakelands, Milton Keynes MK14 5AN</div>' +
    '<div style="font-size:9px;margin-top:8px;">' +
    '<a href="https://www.cupraofficial.co.uk" style="color:#474852;text-decoration:none;" target="_blank" rel="noopener noreferrer">CUPRA</a>' +
    '<span style="color:#666666;"> | </span>' +
    '<a href="https://www.seat.co.uk" style="color:#ff0036;text-decoration:none;" target="_blank" rel="noopener noreferrer">SEAT</a>' +
    '</div>' +
    '</td></tr></tbody></table>';
}

function validateField(input, errorId, message) {
  const error = document.querySelector(errorId);
  const valid = input.value.trim().length > 0;
  input.setAttribute('aria-invalid', String(!valid));
  error.textContent = valid ? '' : message;
  return valid;
}

function validatePhone() {
  const value = phoneInput.value.trim();
  const valid = value === '' || phonePattern.test(value);
  phoneInput.setAttribute('aria-invalid', String(!valid));
  document.querySelector('#phone-error').textContent = valid ? '' : 'Please use the format +44 (0) 7777 111 222.';
  return valid;
}

function validateForm() {
  const nameValid = validateField(nameInput, '#name-error', 'Enter your name.');
  const jobTitleValid = validateField(jobTitleInput, '#job-title-error', 'Enter your job title.');
  const phoneValid = validatePhone();
  return nameValid && jobTitleValid && phoneValid;
}

function updatePreview() {
  preview.innerHTML = buildSignature(previewLogoPath);
  if (phoneInput.value.trim()) validatePhone();
  copyStatus.textContent = '';
  copyStatus.classList.remove('error');
}

async function copySignature() {
  if (!validateForm()) {
    copyStatus.textContent = 'Check the highlighted fields before copying.';
    copyStatus.classList.add('error');
    form.querySelector('[aria-invalid="true"]')?.focus();
    return;
  }

  const html = buildSignature(embeddedLogoDataUri);
  const plainText = preview.innerText;

  try {
    if (window.ClipboardItem && navigator.clipboard?.write) {
      await navigator.clipboard.write([
        new ClipboardItem({
          'text/html': new Blob([html], { type: 'text/html' }),
          'text/plain': new Blob([plainText], { type: 'text/plain' })
        })
      ]);
    } else {
      const temporary = document.createElement('div');
      temporary.contentEditable = 'true';
      temporary.style.position = 'fixed';
      temporary.style.left = '-9999px';
      temporary.innerHTML = html;
      document.body.appendChild(temporary);
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(temporary);
      selection.removeAllRanges();
      selection.addRange(range);
      const copied = document.execCommand('copy');
      selection.removeAllRanges();
      temporary.remove();
      if (!copied) throw new Error('Clipboard copy was not available.');
    }

    copyStatus.textContent = 'Signature copied. You can now paste it into Outlook.';
    copyStatus.classList.remove('error');
  } catch (error) {
    console.error(error);
    copyStatus.textContent = 'Copy was blocked by the browser. Use a current browser and allow clipboard access.';
    copyStatus.classList.add('error');
  }
}

createProductOptions('#cupra-products', cupraProducts, 'cupra');
createProductOptions('#seat-products', seatProducts, 'seat');
form.addEventListener('input', updatePreview);
form.addEventListener('change', updatePreview);
form.addEventListener('reset', () => setTimeout(() => {
  document.querySelectorAll('[aria-invalid="true"]').forEach(element => element.setAttribute('aria-invalid', 'false'));
  document.querySelectorAll('.field-error').forEach(element => { element.textContent = ''; });
  updatePreview();
}, 0));
copyButton.addEventListener('click', copySignature);
updatePreview();
