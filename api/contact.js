const TO_EMAIL = 'hello@heyflat.com.au'
const FROM_EMAIL = 'HeyFlat Site <contato@mail.heyflat.com.au>'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  const { name, email, message } = req.body ?? {}

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    res.status(400).json({ error: 'Missing required fields' })
    return
  }

  try {
    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: email,
        subject: `Contato pelo site — ${name}`,
        text: `Nome: ${name}\nEmail: ${email}\n\n${message}`,
      }),
    })

    if (!resendRes.ok) {
      console.error('Resend error:', await resendRes.text())
      res.status(502).json({ error: 'Failed to send email' })
      return
    }

    res.status(200).json({ ok: true })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Unexpected error' })
  }
}
