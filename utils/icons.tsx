import { GoLaw as LawIcon } from "@react-icons/all-files/go/GoLaw";
import { GiPalmTree as RemoteIcon } from "@react-icons/all-files/gi/GiPalmTree";
import { AiFillCode as LangIcon } from "@react-icons/all-files/ai/AiFillCode";
import { RiFocus3Fill as SpecialistIcon } from "@react-icons/all-files/ri/RiFocus3Fill";
import { MdWork as WorkIcon } from "@react-icons/all-files/md/MdWork";
import { RiMoneyDollarCircleFill as MoneyIcon } from "@react-icons/all-files/ri/RiMoneyDollarCircleFill";
import { BiCodeAlt as OtherIcon } from "@react-icons/all-files/bi/BiCodeAlt";
import { RiVirusFill as VirusIcon } from "@react-icons/all-files/ri/RiVirusFill";
import { FaBitcoin as BitcoinIcon } from "@react-icons/all-files/fa/FaBitcoin";

const getIcon = (type: string) => {
  switch (type) {
    case "A-Combinar":
      return <LawIcon className="text-xl mr-1" />;

    case "CLT":
      return <LawIcon className="text-xl mr-1" />;

    case "PJ":
      return <LawIcon className="text-xl mr-1" />;

    case "Freela":
      return <LawIcon className="text-xl mr-1" />;

    case "Estágio":
      return "";

    case "Flexível":
      return <WorkIcon className="text-xl mr-1" />;

    case "Presencial":
      return <WorkIcon className="text-xl mr-1" />;

    case "Alocado":
      return <WorkIcon className="text-xl mr-1" />;

    case "Fora-do-país":
      return <WorkIcon className="text-xl mr-1" />;

    case "👦 Júnior":
      return "";

    case "👨 Pleno":
      return "";

    case "👴 Sênior":
      return "";

    case "Remoto":
      return <RemoteIcon className="text-xl mr-1" />;

    case "Outros":
      return <OtherIcon className="text-xl mr-1" />;

    case "Especialista":
      return <SpecialistIcon className="text-xl mr-1" />;

    case "Blockchain":
      // return "₿"
      return <BitcoinIcon className="text-xl mr-1" />;

    case "Remoto durante pandemia":
      return <VirusIcon className="text-xl mr-1" />;

    case "1k-3k":
    case "3k-5k":
    case "5k-10k":
    case "15k+":
    case "10k-15k":
      return <MoneyIcon className="text-xl mr-1" />;

    default:
      return <LangIcon className="text-xl mr-1" />;
  }
};

export default getIcon;
