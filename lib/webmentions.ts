export default async function loadWebmentions() {
  const KEY_BENSD = process.env.API_KEY_WEBMENTIONS_BENSDEN;
  const data = await fetch(
    `https://webmention.io/api/mentions.jf2?token=${KEY_BENSD}&per-page=1000`,
  ).then((response) => response.json());
  return data;
}
