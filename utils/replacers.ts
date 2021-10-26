export const titleReplacer = (string: string) => {
  if (!string) return;

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
    .replace("[100% REMOTA]", "")
    .replace("[100% remota]", "")
    .replace("[100% Remota]", "")
    .trim();
};

export const tagReplacer = (string: string) => {
  if (!string) return;

  switch (string) {
    case "A-Combinar":
    case "⚖️ A-Combinar":
      return "⚖️ A-Combinar";

    case "CLT":
    case "⚖️ CLT":
      return "⚖️ CLT";

    case "PJ":
    case "⚖️ PJ":
      return "⚖️ PJ";

    case "Freela":
    case "⚖️ Freela":
      return "⚖️ Freela";

    case "Estágio":
    case "👶 Estágio":
      return "👶 Estágio";

    case "Flexível":
    case "🏢 Flexível":
      return "🏢 Flexível";

    case "🏢 Fora-do-país":
    case "Fora-do-país":
      return "🏢 Fora-do-país";

    case "Junior":
    case "Júnior":
    case "👦 Júnior":
    case "👦 Junior":
      return "👦 Júnior";

    case "Pleno":
    case "👨 Pleno":
      return "👨 Pleno";

    case "🏢 Remoto":
    case "Remoto":
      return "🏢 Remoto";

    case "👴 Senior":
    case "Senior":
    case "Sênior":
    case "👴 Sênior":
      return "👴 Sênior";

    case "👴 Senior":
    case "Senior":
    case "Sênior":
    case "👴 Sênior":
      return "👴 Sênior";

    case "⚖️ Outros":
    case "Outros":
      return "⚖️ Outros";

    case "💰 1k-3k":
    case "💰 3k-5k":
    case "💰 5k-10k":
    case "💰 15k+":
      return string;

    default:
      return "👨‍💻 " + string;
  }
};
