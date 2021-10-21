const replacer = (string: string) => {
  return string
    .replace("[Remoto]", "")
    .replace("[Remote]", "")
    .replace("[REMOTO]", "")
    .replace("[REMOTE]", "")
    .replace("[Home Office]", "")
    .trim();
};

export default replacer;
