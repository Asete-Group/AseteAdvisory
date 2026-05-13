export const WHATSAPP_CONTACT_URL =
  "https://wa.me/5547996135427?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista%20da%20ASETE%20Advisory."

const WHATSAPP_PHONE = "5547996135427"

export function buildWhatsAppContactUrl(message: string) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`
}
