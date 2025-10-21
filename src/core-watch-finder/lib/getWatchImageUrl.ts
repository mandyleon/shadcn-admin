export function getWatchImageUrl(imageFilename: string): string {
  return `${import.meta.env.VITE_API_ENDPOINT}/Watch/image/${imageFilename}`;
}
