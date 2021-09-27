import { AxiosResponse } from "axios";

export function formatDate(datetime: string | number): string {
  const date = new Date(datetime);
  return date.toLocaleString("ru").slice(0, -3);
}

export function parseQuery(queryString: string): Record<string, unknown> {
  const query: Record<string, unknown> = {};
  const pairs = (queryString[0] === "?" ? queryString.substr(1) : queryString)
    .replace(/\/$/, "")
    .split("&");
  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i].split("=");
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || "");
  }
  return query;
}

export function isObject(item: unknown): boolean {
  return !!(item && typeof item === "object" && !Array.isArray(item));
}

export function isFunction(item: unknown): boolean {
  return typeof item === "function";
}

export function groupNum(number: string | number, qnt = 3, char = " "): string {
  return `${number}`
    .split("")
    .reverse()
    .join("")
    .replace(new RegExp(`(\\d{${qnt}})`, "g"), `$1${char}`)
    .split("")
    .reverse()
    .join("")
    .trim();
}

export function getImgSrc(res: AxiosResponse): Promise<string> {
  const { data } = res;
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.readAsDataURL(data);
    reader.onload = e => {
      if (e.target?.result && typeof e.target.result === "string") {
        resolve(e.target?.result);
      } else {
        resolve("");
      }
    };
  });
}

export function downloadFile(filename: string) {
  return function(response: AxiosResponse): void {
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
  };
}
