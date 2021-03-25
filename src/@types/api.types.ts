export type RequestMethod = "POST" | "PUT" | "GET" | "DELETE" | "PATCH";

export interface Options {
  method?: RequestMethod;
  body?:
    | string
    | Blob
    | ArrayBufferView
    | ArrayBuffer
    | FormData
    | URLSearchParams
    | ReadableStream<Uint8Array>
    | null
    | undefined;
  headers?: Record<string, string>;
}
