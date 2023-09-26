import { component$ } from "@builder.io/qwik";
import { routeAction$, type DocumentHead, Form } from "@builder.io/qwik-city";

export const useExternalRedirect = routeAction$((_, req) => {
  throw req.redirect(303, "https://www.google.com");
});

export const useExistingPageRedirect = routeAction$((_, req) => {
  throw req.redirect(303, "/existing-page");
});

export const useNonExistingPageRedirect = routeAction$((_, req) => {
  throw req.redirect(303, "/non-existing-page");
});

export default component$(() => {
  const externalRedirect = useExternalRedirect();
  const existingPageRedirect = useExistingPageRedirect();
  const nonExistingPageRedirect = useNonExistingPageRedirect();
  return (
    <>
      <h1>Hi 👋</h1>
      <Form action={externalRedirect}>
        <button type="submit">Redirect to https://www.google.com</button>
      </Form>
      <Form action={existingPageRedirect}>
        <button type="submit">Redirect to /existing-page</button>
      </Form>
      <Form action={nonExistingPageRedirect}>
        <button type="submit">Redirect to /non-existing-page</button>
      </Form>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
