export const INSTAGRAM_URL = "https://www.instagram.com/esoguliderlik/";
export const WHATSAPP_URL = "https://chat.whatsapp.com/DiWNixw067s6GDC39xjAQR";

// "Kulübe Katıl" butonları doğrudan WhatsApp topluluk grubuna gider.
export const JOIN_URL = WHATSAPP_URL;

/** Props for links that leave the site: open in a new tab without leaking the opener. */
export const EXTERNAL = { target: "_blank", rel: "noopener noreferrer" } as const;

export const NAV_LINKS = [
  { href: "#hakkimizda", label: "Hakkımızda" },
  { href: "#saglik-yonetimi", label: "Sağlık Yönetimi Nedir" },
  { href: "#misyon-vizyon", label: "Misyon & Vizyon" },
  { href: "#etkinlikler", label: "Etkinlikler" },
  { href: "#iletisim", label: "İletişim" },
] as const;
