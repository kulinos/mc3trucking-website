"use client";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return <section className="section"><div className="wrap"><h1>Something went wrong.</h1><p>Please try loading this page again.</p><button className="button" onClick={reset}>Try again</button></div></section>;
}
