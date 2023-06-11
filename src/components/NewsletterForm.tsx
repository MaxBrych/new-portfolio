import { Box, useColorModeValue } from "@chakra-ui/react";
import { useState, FormEvent } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const bg = useColorModeValue("white", "whiteAlpha.200");
  const text = useColorModeValue("gray.700", "gray.200");
  const heading = useColorModeValue("gray.700", "gray.100");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      setMessage("You have successfully subscribed to the newsletter!");
      setEmail("");
    } catch (error) {
      if (error instanceof Error) {
        setMessage(error.message);
      } else {
        setMessage("An unknown error occurred.");
      }
    }
  };

  return (
    <Box
      bg={bg}
      className="col-span-4 row-span-2 p-4 bg-white md:p-6 md:row-span-1 rounded-3xl md:col-span-6"
    >
      <h2
        color={heading}
        className="mb-1 text-xl font-bold tracking-tight md:mb-2 md:text-2xl"
      >
        Folge meinem Newsletter
      </h2>
      <p
        color={text}
        className="mb-4 text-xs font-medium leading-4 md:leading-5 md:text-base"
      >
        Erhalte Visionen und Ideen für eine bessere Zukunft durch die digitale
        Revolution.
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-full"
      >
        <label htmlFor="email-input" className="sr-only">
          Email Addresse
        </label>
        <input
          id="email-input"
          type="email"
          placeholder="Email address"
          className="w-full h-10 px-4 py-2 mb-4 text-sm text-gray-700 rounded-lg md:h-12 md:text-base placeholder-dark-50 bg-dark-99 focus:outline-none focus:ring-1 focus:ring-dark-90 focus:ring-offset-1 focus:ring-offset-cyan-50"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center w-full h-12 px-6 py-3 text-base font-bold transition-all duration-150 border border-transparent rounded-full md:h-14 text-cyan-10 bg-cyan-50 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-70 focus:ring-offset-1 focus:ring-offset-cyan-50"
        >
          Abonnieren
        </button>
      </form>
      {message && <p className="mt-4 text-sm text-cyan-70">{message}</p>}
    </Box>
  );
}
