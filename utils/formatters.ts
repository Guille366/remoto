import moment from "moment"
moment.locale('pt-br')
import 'moment/locale/pt-br'

export const titleFormatter = (string: string) => {
  if (!string) return;

  return string
    .replace("[Remoto]", "")
    .replace("[Remota]", "")
    .replace("[Remote]", "")
    .replace("[REMOTA]", "")
    .replace("[REMOTO]", "")
    .replace("[REMOTE]", "")
    .replace("[Home Office]", "")
    .replace("[100% Remoto]", "")
    .replace("[100% remoto]", "")
    .replace("[100% REMOTO]", "")
    .replace("[100% REMOTO!]", "")
    .replace("[🏝️ Remoto]", "")
    .replace("[100% REMOTA]", "")
    .replace("[100% remota]", "")
    .replace("[100% Remota]", "")
    .replace("[REMOTO FOREVER]", "")
    .replace("[Remoto Forever]", "")
    .trim();
};

export const tagFormatter = (string: string) => {
  if (!string) return;

  switch (string) {
    case "A-Combinar":
    case "⚖️ A-Combinar":
      return `A-Combinar`;

    case "CLT":
    case "⚖️ CLT":
      return `CLT`;

    case "PJ":
    case "⚖️ PJ":
      return `PJ`;

    case "Freela":
    case "⚖️ Freela":
      return `Freela`;

    case "Estágio":
    case "👶 Estágio":
      return "👶 Estágio";

    case "Flexível":
    case "🏢 Flexível":
      return `Flexível`;

    case "🏢 Presencial":
    case "Presencial":
      return `Presencial`;

    case "Alocado":
      return `Alocado`;

    case "🏢 Fora-do-país":
    case "Fora-do-país":
      return `Fora-do-país`;

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
      return `Remoto`;

    case "👴 Senior":
    case "SENIOR":
    case "Senior":
    case "Sênior":
    case "SÊNIOR":
    case "👴 Sênior":
      return "👴 Sênior";

    case "⚖️ Outros":
    case "Outros":
      return `Outros`;

    case "Especialista":
    case "especialista":
      return `Especialista`;

    case "Blockchain":
      // return "₿ " + string;
      return `Blockchain`;

    case "🦠 Remoto durante pandemia":
    case "Remoto durante pandemia":
      return `Remoto durante pandemia`;

    case "💰 1k-3k":
    case "💰 3k-5k":
    case "💰 5k-10k":
    case "💰 15k+":
    case "💰 10k-15k":
      return `${string.replace("💰 ", "")}`;

    default:
      return string;
  }
};

export const dateFormatter = (date: string) => {
  const data = new Date(date),
    day = data.getDate().toString(),
    dayF = day.length == 1 ? "0" + day : day,
    month = (data.getMonth() + 1).toString(),
    monthF = month.length == 1 ? "0" + month : month,
    year = data.getFullYear();

  const standard = dayF + "/" + monthF + "/" + year;
  const fromNow = moment(data).fromNow()

  return { standard, fromNow }
};

export const handleLevel = (string: string) => {
  switch (string) {
    case "👶 Estágio":
      return true;
    case "👨 Pleno":
      return true;
    case "👴 Sênior":
      return true;
    case "👦 Júnior":
      return true;

    default:
      return false;
  }
};

export const formatSearch = (term: string) => term.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, "");
