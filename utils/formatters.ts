export const titleFormatter = (string: string) => {
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

export const tagFormatter = (string: string) => {
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

    case "🏢 Presencial":
    case "Presencial":
      return "🏢 Presencial";

    case "Alocado":
      return "🏢 Alocado";

    case "🏢 Fora-do-país":
    case "Fora-do-país":
      return "🏢 Fora-do-país";

    case "JUNIOR":
    case "Junior":
    case "Júnior":
    case "JÚNIOR":
    case "👦 Júnior":
    case "👦 Junior":
      return "👦 Júnior";

    case "PLENO":
    case "Pleno":
    case "👨 Pleno":
      return "👨 Pleno";

    case "🏢 Remoto":
    case "Remoto":
      return "🏢 Remoto";

    case "👴 Senior":
    case "SENIOR":
    case "Senior":
    case "Sênior":
    case "SÊNIOR":
    case "👴 Sênior":
      return "👴 Sênior";

    case "⚖️ Outros":
    case "Outros":
      return "⚖️ Outros";

    case "Especialista":
    case "especialista":
      return "👨‍💻 Especialista";

    case "Blockchain":
      return "₿ " + string;

    case "🦠 Remoto durante pandemia":
    case "Remoto durante pandemia":
      return "🦠 Remoto durante pandemia";

    case "💰 1k-3k":
    case "💰 3k-5k":
    case "💰 5k-10k":
    case "💰 15k+":
    case "💰 10k-15k":
      return string;

    default:
      return "⌨️ " + string;
  }
};

export const dateFormatter = (date: string) => {
  let data = new Date(date),
    day = data.getDate().toString(),
    dayF = day.length == 1 ? "0" + day : day,
    month = (data.getMonth() + 1).toString(),
    monthF = month.length == 1 ? "0" + month : month,
    year = data.getFullYear();
  return dayF + "/" + monthF + "/" + year;
};
