import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Alert from "../common/Alert";
import Fav from "../common/Fav";
import { dateFormatter, titleFormatter } from "../../utils/formatters";
import BackButton from "../common/Buttons/Back";
import { extractEmail, extractLink } from "../../utils/extractFromString";
import LinkButton from "../common/Buttons/LinkButton";

const Details = ({ data }: DataType) => {
  const email = extractEmail(data.body);
  const link = extractLink(data.body);
  const isEmail = !link

  return (
    <div className="relative py-4">
      <Alert />
      <div className="flex w-full flex-row justify-between">
        <BackButton />
        <div className="relative flex flex-row align-center">
          <Fav big id={data?.id} className="text-2xl mx-2" />
          
          <LinkButton
            isEmail={isEmail}
            to={isEmail ? email || '' : link || ''}
            text="Aplique"
          />
        </div>
      </div>
      <h1 className="mt-4 text-3xl md:text-4xl font-bold">
        {titleFormatter(data?.title)}
      </h1>
      <div className="font-nunito my-4">
        <p className="text-gray-500 text-sm p-0 font-mono">
          {dateFormatter(data?.created_at).standard}
        </p>
        <ReactMarkdown skipHtml={true} remarkPlugins={[remarkGfm]}>
          {data?.body.replace(/\u2028/g, "")}
        </ReactMarkdown>
        <div className="mt-4">
          <LinkButton
              isEmail={isEmail}
              to={isEmail ? email || '' : link || ''}
              text="Aplique"
              className="py-3 ml-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Details;
