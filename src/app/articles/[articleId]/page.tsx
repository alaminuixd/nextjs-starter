"use client";
import Link from "next/link";
// we removed "async" from the function and "await" is replaced by "use()"
// This is because "use client" can't be used in "async await"
import { use } from "react";

// important: "searchParams" is not available in "layout" component.
type ParamsType = {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
};

export default function NewsArticle({ params, searchParams }: ParamsType) {
  const { articleId } = use(params);
  const { lang = "en" } = use(searchParams);
  return (
    <div className="max-w-7xl mx-auto my-10">
      <h1 className="text-center">News Article {articleId}</h1>
      <p className="text-center">Reading in {lang.toUpperCase()}</p>
      <div className="mt-10 flex gap-5">
        <Link href={`/articles/${articleId}?lang=en`}>English</Link>
        <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
        <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
      </div>
    </div>
  );
}
