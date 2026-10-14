import { test } from "node:test";
import assert from "node:assert/strict";
import { total } from "../src/checkout.js";

test("totals are rounded to cents", () => {
  assert.equal(total([{ price: 0.1, qty: 3 }]), 0.3);
});
