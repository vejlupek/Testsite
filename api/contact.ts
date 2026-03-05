import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { fullname, email, phone, location, service, date, message, urgent, name } = req.body;

  // Honeypot — tiché zahození spamu
  if (name) {
    return res.status(200).json({ ok: true });
  }

  if (!fullname || !email || !phone || !location || !service) {
    return res.status(400).json({ error: 'Chybí povinné pole' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY není nastavený');
    return res.status(500).json({ error: 'Chyba serveru' });
  }

  const text = [
    'Nová poptávka z webu pepevejlupek.cz',
    '',
    `Jméno:    ${fullname}`,
    `E-mail:   ${email}`,
    `Telefon:  ${phone}`,
    `Lokalita: ${location}`,
    `Služba:   ${service}`,
    `Datum:    ${date || 'neuvedeno'}`,
    `Urgentní: ${urgent ? 'ANO' : 'Ne'}`,
    '',
    `Poznámka:\n${message || '–'}`,
  ].join('\n');

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'info@pepevejlupek.cz',
      to: 'info@pepevejlupek.cz',
      reply_to: email,
      subject: `Nová poptávka – ${fullname} (${service})`,
      text,
    }),
  });

  if (response.ok) {
    return res.status(200).json({ ok: true });
  }

  const err = await response.json();
  console.error('Resend error:', err);
  return res.status(500).json({ error: 'Odeslání se nezdařilo' });
}
