import type { NextApiRequest, NextApiResponse } from "next";

async function subscribe(
  email: string,
  listId: string,
  apiKey: string
): Promise<void> {
  const data = {
    email_address: email,
    status: "subscribed",
  };

  const response = await fetch(
    `https://${
      apiKey.split("-")[1]
    }.api.mailchimp.com/3.0/lists/${listId}/members`,
    {
      method: "POST",
      headers: {
        Authorization: `apikey ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    throw new Error("Error subscribing to the newsletter.");
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const { email } = req.body;

  try {
    await subscribe(
      email,
      process.env.MAILCHIMP_AUDIENCE_ID!,
      process.env.MAILCHIMP_API_KEY!
    );
    res
      .status(200)
      .json({ message: "You have successfully subscribed to the newsletter!" });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred." });
    }
  }
}
