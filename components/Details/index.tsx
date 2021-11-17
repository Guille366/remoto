import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Alert from "../common/Alert";
import Fav from "../common/Fav";
import { BiLinkExternal as Issue } from "@react-icons/all-files/bi/BiLinkExternal";
import { dateFormatter, titleFormatter } from "../../utils/formatters";
import BackButton from "../common/Buttons/Back";

const Details = ({ data }: DataType) => {
  return (
    <div className="relative py-4">
      <Alert />
      <div className="flex w-full flex-row justify-between">
        <BackButton />
        <div className="relative flex flex-row align-center">
          <a
            className="mr-8 text-2xl flex items-center"
            href={data?.html_url}
            target="_blank"
            rel="noreferrer"
          >
            <Issue />
          </a>

          <Fav big id={data?.id} className="text-2xl" />
        </div>
      </div>
      <h1 className="mt-4 text-3xl md:text-4xl font-bold">
        {titleFormatter(data?.title)}
      </h1>
      <div className="font-nunito my-4">
        <p className="text-gray-500 text-sm p-0 font-mono">
          {dateFormatter(data?.created_at)}
        </p>
        <ReactMarkdown skipHtml={true} remarkPlugins={[remarkGfm]}>
          {data?.body.replace(/\u2028/g, "")}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Details;
