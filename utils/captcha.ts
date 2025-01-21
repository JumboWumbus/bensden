export async function getCaptchaToken() {
  return new Promise<string | null>((resolve) => {
    grecaptcha.ready(async () => {
      const siteKey = process.env.NEXT_PUBLIC_RECAP_SITE_KEY;

      if (!siteKey) {
        console.error("No site key provided");
        resolve(null);
        return;
      }

      const token = await grecaptcha.execute(siteKey, { action: "submit" });
      console.log("Token:", token);
      resolve(token);
    });
  });
}

type ErrorCodes =
  | "missing-input-secret"
  | "invalid-input-secret"
  | "missing-input-response"
  | "invalid-input-response"
  | "bad-request"
  | "timeout-or-duplicate";

type CaptchaData =
  | {
      success: true;
      challenge_ts: string;
      hostname: string;
      score: number;
      "error-codes": string[];
    }
  | {
      success: false;
      "error-codes": ErrorCodes[];
    };

export async function verifyCaptchaToken(token: string) {
  const secretKey = process.env.RECAP_SECRET;
  if (!secretKey) {
    throw new Error("No secret key provided");
  }

  const url = new URL("https://www.google.com/recaptcha/api/siteverify");

  url.searchParams.append("secret", secretKey);
  url.searchParams.append("response", token);

  const res = await fetch(url, { method: "POST" });

  const captchaData: CaptchaData = await res.json();

  console.log(captchaData);

  if (!res.ok) return null;

  return captchaData;
}
