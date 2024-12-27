export function normalizeQuery(item: string | undefined) {
  if (!item) return undefined;
  return item.replace(" ", "+");
}
