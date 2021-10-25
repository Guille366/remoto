const replacer = (string: string) => {
  return string
    .replace("[Remoto]", "")
    .replace("[Remote]", "")
    .replace("[REMOTO]", "")
    .replace("[REMOTE]", "")
    .replace("[Home Office]", "")
    .replace("[100% Remoto]", "")
    .replace("[100% remoto]", "")
    .replace("[100% REMOTO]", "")
    .replace("[🏝️ Remoto]", "")
    .trim();
};

export default replacer;
