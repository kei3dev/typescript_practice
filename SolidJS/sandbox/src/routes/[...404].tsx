import { A } from "@solidjs/router"

const NotFoundPage = () => {
  return (
    <main class="mx-auto p-4 text-center text-gray-700">
      <h1 class="max-6-xs my-16 font-thin text-6xl text-sky-700 uppercase">
        Not Found
      </h1>
      <p class="mt-8">
        Visit{" "}
        <a
          href="https://solidjs.com"
          target="_blank"
          rel="noreferrer noopener"
          class="text-sky-600 hover:underline"
        >
          solidjs.com
        </a>{" "}
        to learn how to build Solid apps.
      </p>
      <p class="my-4">
        <A href="/" class="text-sky-600 hover:underline">
          Home
        </A>
        {" - "}
        <A href="/about" class="text-sky-600 hover:underline">
          About Page
        </A>
      </p>
    </main>
  )
}

export default NotFoundPage
