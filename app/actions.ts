"use server";

interface ActionResult {
  success: boolean;
  error?: string;
}

export async function submitStep1(formData: FormData): Promise<ActionResult> {
  const companyName = formData.get("companyName") as string;
  const yourName = formData.get("yourName") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;

  if (!companyName || !yourName || !email) {
    return { success: false, error: "Please fill in all required fields." };
  }

  const webhookUrl = process.env.WEBHOOK_STEP1_URL;
  if (!webhookUrl) {
    console.error("WEBHOOK_STEP1_URL not configured");
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
        step: 1,
        companyName,
        yourName,
        email,
        phone,
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

export async function submitStep2(formData: FormData): Promise<ActionResult> {
  const interestedIn = formData.get("interestedIn") as string;
  const shopType = formData.get("shopType") as string;
  const orderVolume = formData.get("orderVolume") as string;
  const currentSoftware = formData.get("currentSoftware") as string;
  const biggestPainPoint = formData.get("biggestPainPoint") as string;
  const email = formData.get("email") as string;

  if (!interestedIn || !shopType || !orderVolume) {
    return { success: false, error: "Please fill in all required fields." };
  }

  const webhookUrl = process.env.WEBHOOK_STEP2_URL;
  if (!webhookUrl) {
    console.error("WEBHOOK_STEP2_URL not configured");
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
        step: 2,
        email,
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
