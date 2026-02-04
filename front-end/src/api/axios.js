export async function request({ method = "GET", url, data, params, headers }) {
  const baseUrl = import.meta.env.VITE_API_BASE_URL || ""
  const query = params
    ? `?${new URLSearchParams(params).toString()}`
    : ""
  const response = await fetch(`${baseUrl}${url}${query}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(headers || {}),
    },
    body: data ? JSON.stringify(data) : undefined,
  })

  if (!response.ok) {
    const message = await response.text()
    throw new Error(message || "Request failed")
  }

  const contentType = response.headers.get("content-type") || ""
  if (contentType.includes("application/json")) {
    return response.json()
  }
  return response.text()
}
