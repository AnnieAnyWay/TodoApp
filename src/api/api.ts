import { API_KEY } from "./api.consts";

import type { Options } from "../@types/api.types";

async function api(url: string, options: Options) {
  try {
    const response = await fetch(url, options);
    if (response.ok) {
      const result = await response.json();
      return result;
    }
    return;
  } catch (error) {
    console.log("error");
  }
}

export function getData(url: string) {
  return api(url, {
    headers: {
      "X-Api-Key": API_KEY,
    },
  });
}

export function updateData(url: string, body: Record<string, unknown>) {
  return api(url, {
    method: "PATCH",
    headers: {
      "X-Api-Key": API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
}
