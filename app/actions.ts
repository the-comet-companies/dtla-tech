"use server";

interface ActionResult {
  success: boolean;
  error?: string;
}

export async function submitStep1(formData: FormData): Promise<ActionResult> {
  const companyName = formData.get("companyName") as string;
  const yourName = formData.get("yourName") as string;
  const email = formData.get("email") as string;

  if (!companyName || !yourName || !email) {
    return { success: false, error: "Please fill in all required fields." };
  }

  // Step 1 just validates — no webhook call, data is sent on final submit
  return { success: true };
}

export async function submitForm(formData: FormData): Promise<ActionResult> {
  // Step 1 fields
  const companyName = formData.get("companyName") as string;
  const yourName = formData.get("yourName") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;

  // Step 2 fields
  const interestedIn = formData.get("interestedIn") as string;
  const shopType = formData.get("shopType") as string;
  const orderVolume = formData.get("orderVolume") as string;
  const currentSoftware = formData.get("currentSoftware") as string;
  const biggestPainPoint = formData.get("biggestPainPoint") as string;

  if (!companyName || !yourName || !email || !interestedIn || !shopType || !orderVolume) {
    return { success: false, error: "Please fill in all required fields." };
  }

  const webhookUrl = process.env.WEBHOOK_STEP_URL;
  if (!webhookUrl) {
    console.error("WEBHOOK_STEP_URL not configured");
    return {
      success: false,
      error: "Configuration error. Please try again later.",
    };
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        companyName,
        yourName,
        email,
        phone,
        interestedIn,
        shopType,
        orderVolume,
        currentSoftware,
        biggestPainPoint,
        submittedAt: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      return { success: false, error: "Submission failed. Please try again." };
    }

    return { success: true };
  } catch {
    return { success: false, error: "Network error. Please try again." };
  }
}
