const replacer = (string: string) => {
  return string
    .replace("[Remoto]", "")
    .replace("[Remote]", "")
    .replace("[REMOTO]", "")
    .replace("[REMOTE]", "")
    .trim();
};

export default replacer;
