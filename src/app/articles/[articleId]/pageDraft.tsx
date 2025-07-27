"use client";
import Link from "next/link";
import { use } from "react";
type NewsParams = {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
};
export default function NewsArticle({ params, searchParams }: NewsParams) {
  const { articleId } = use(params);
  const { lang } = use(searchParams);
  console.log(articleId);
  console.log(lang);

  const langMap: Record<string, string> = {
    en: "English Language",
    es: "Spanish Language",
    fr: "French Language",
  };

  return (
    <div className="max-w-7xl mx-auto my-10">
      <h1 className="text-center">News Article {articleId}</h1>
      <p className="text-center">
        Reading in {langMap[lang ?? ""] ?? lang ?? "Unknown"}
        {/* {lang === "en"
          ? "English"
          : lang === "es"
          ? "Spenish"
          : lang === "fr"
          ? "French"
          : lang} */}
      </p>
      <div className="mt-10 flex gap-5">
        <Link href={`/articles/${articleId}?lang=en`}>English</Link>
        <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
        <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
      </div>
    </div>
  );
}
