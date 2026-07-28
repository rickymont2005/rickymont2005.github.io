import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the branded portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Ricardo Montano \| Mechanical Engineering Portfolio<\/title>/i);
  assert.match(html, /Mechanical Engineering Portfolio/);
  assert.match(html, /Ricardo-Montano-Resume\.pdf/);
  assert.match(html, /manifest\.webmanifest/);
  assert.match(html, /favicon\.png/);
  assert.doesNotMatch(html, /visitor account|admin button|content-editing form/i);
});

test("manifest uses the portfolio identity", async () => {
  const response = await render("/manifest.webmanifest");
  assert.equal(response.status, 200);
  const body = await response.text();
  assert.match(body, /Ricardo Montano/);
  assert.match(body, /Mechanical Engineering Portfolio/);
});
