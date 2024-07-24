export function getErrorMessages(errors, err) {
  const [firstKey, firstValue] = Object.entries(errors)[0];
  return Object?.keys(errors)?.length === 0 ? err : firstValue?.[0];
}
