export function segments(filePath: string) {
  return filePath.split(/[/\\]{1,}/);
}
