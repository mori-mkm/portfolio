import Link from "next/link";
import { notFound } from "next/navigation";

import { homeContent } from "@/content/home";
import { isValidLocale } from "@/lib/i18n";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const content = homeContent[locale];

  return (
    <main>
      <nav>
        <span>{content.name}</span>

        <div>
          <Link href="/en">EN</Link>
          {" / "}
          <Link href="/pt">PT</Link>
        </div>
      </nav>

      <section>
        <p>{content.name}</p>

        <h1>
          {content.roleLine1}
          <br />
          {content.roleLine2}
        </h1>

        <h2>{content.headline}</h2>

        <p>{content.description}</p>
      </section>
    </main>
  );
}