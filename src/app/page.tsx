export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans text-zinc-900 dark:bg-black dark:text-zinc-50">
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center sm:px-12">
        <span className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
          Guide
        </span>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
          How to deploy an app on Vercel
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-300">
          Learn the essentials of shipping your Next.js project. We&apos;ll walk through
          project setup, environment configuration, and best practices for going live in
          minutes.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
            href="https://vercel.com/docs/deployments/overview"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start learning
          </a>
          <a
            className="rounded-full border border-zinc-200 px-6 py-3 text-sm font-semibold text-blue-600 transition hover:border-blue-500 hover:text-blue-500 dark:border-zinc-700 dark:text-blue-400 dark:hover:border-blue-400 dark:hover:text-blue-300"
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deploy now
          </a>
        </div>
      </main>
      <footer className="border-t border-zinc-200 px-6 py-6 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
        © {new Date().getFullYear()}{" "}
        <a
          href="https://99foldai.com"
          className="font-medium text-blue-600 transition hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          99foldai.com
        </a>
        . All rights reserved.
      </footer>
    </div>
  );
}
