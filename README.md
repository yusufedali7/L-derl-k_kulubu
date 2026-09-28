# Liderlik Kulübü — Tanıtım Sitesi

Eskişehir Osmangazi Üniversitesi Sağlık Yönetimi Liderlik Kulübü için tek sayfalık tanıtım sitesi.
Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion.

## Çalıştırma

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # üretim derlemesi
```

## Yayına alma (Vercel)

```bash
npx vercel --prod
```

Ek ayar gerekmez. Özel alan adı bağlanırsa Open Graph görselinin tam adresle paylaşılması için
Vercel'de `NEXT_PUBLIC_SITE_URL` ortam değişkenini (örn. `https://liderlikkulubu.com`) tanımlayın.

## Bağlantılar

Tüm dış bağlantılar tek dosyada: **`lib/links.ts`**. Hepsi yeni sekmede açılır.

| Sabit | Adres | Kullanıldığı yer |
| --- | --- | --- |
| `WHATSAPP_URL` / `JOIN_URL` | WhatsApp topluluk grubu | Tüm "Kulübe Katıl" butonları, footer WhatsApp ikonu |
| `INSTAGRAM_URL` | instagram.com/esoguliderlik | "Instagram'da Takip Et" butonları, footer Instagram ikonu |

WhatsApp davet linki yenilenirse yalnızca `WHATSAPP_URL` değerini değiştirmek yeterli.

## İçerik ve görseller

- Metinler bileşenlerin içinde, kulübün verdiği haliyle: `components/*.tsx`.
- Etkinlikler ve hangi fotoğrafın hangi etkinliğe ait olduğu: `components/ZamanCizelgesi.tsx` içindeki `yillar` dizisi.
  Yeni etkinlik eklemek için ilgili yıla bir nesne eklemeniz yeterli.
- Fotoğraflar `public/images/` altında; alt metinleri `lib/images.ts` dosyasında.
  Yeni fotoğrafı oraya kopyalayıp `lib/images.ts` içine ekleyin.

## Tasarım notları

- Renkler kulüp logosundan alındı (lacivert, EKG kırmızısı, beyaz); `app/globals.css` içinde `--color-*` değişkenleri, `tailwind.config.ts` aynı değerleri kullanır.
- Logo: `public/images/liderlik-logo.png` (header, footer), site ikonu: `app/icon.png`.
- Kırmızı EKG çizgisi başlık ayıracı olarak kullanılır: `components/Pulse.tsx`.
- "Sergi panosu" çerçevesi: `.panel` + `<Corners />` (köşe klipsleri), fotoğraf çerçevesi: `.frame`.
- Hareket: hero kolajının ve EKG çizgisinin ilk açılışı, zaman çizelgesi çizgisinin kaydırmayla dolması, fotoğrafların üzerine gelince hafifçe kalkması.
  `prefers-reduced-motion` açık olan cihazlarda bunların hepsi devre dışı kalır.
