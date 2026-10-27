# Clinic Website Starter (Next.js)

Mymensingh er clinic/diagnostic center er jonno ready template. Bangla, mobile-first.

## Chalano

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Notun client er jonno bodlano

Shudhu `data/clinic.js` file ta edit koro:

- `clinic`: naam, phone, WhatsApp number (country code shoho, `+` chhara), address, Google Map query
- `doctors`, `services`, `tests`, `reviews`: client er asol data

Pages: `/` home, `/doctors`, `/tests`, `/appointment`, `/contact`.

## Appointment form

Ekhon submit korle clinic er WhatsApp e ready message khule. Pore chaile email/Google Sheet API jog kora jabe.

## Deploy (free)

GitHub e push kore Vercel e import koro. Client er domain connect korte parbe.

## Kintu mone rakho

- Sample data (naam, phone, review, price) shob kalponik. Client er asol data chhara live korbe na.
- Client er onumoti chhara tar naam/logo/chhobi use korbe na.
- Reviews e shudhu asol rogir review dao.
