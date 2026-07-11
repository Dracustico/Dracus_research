import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const manifestUrl = new URL("../public/ecosystem/entities.json", import.meta.url);

test("ecossistema declara entidades únicas e governadas por regras", async () => {
  const manifest = JSON.parse(await readFile(manifestUrl, "utf8"));
  assert.equal(manifest.schema, "dracus.ecosystem.entities/v1");
  assert.equal(manifest.autonomy, "rule-governed");
  assert.ok(manifest.entities.length >= 5);
  const ids = manifest.entities.map((entity) => entity.id);
  assert.equal(new Set(ids).size, ids.length);
  for (const entity of manifest.entities) {
    assert.ok(entity.domain);
    assert.ok(entity.state);
    assert.ok(entity.maturity);
  }
});
