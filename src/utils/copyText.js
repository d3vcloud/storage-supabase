export const copyTextToClipboard = async (text) => {
  if (navigator.clipboard) {
    return await navigator.clipboard.writeText(text);
  }
};
