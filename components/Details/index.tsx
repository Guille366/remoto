import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Alert from "../common/Alert";
import Fav from "../common/Fav";
import { BiLinkExternal as Issue } from "@react-icons/all-files/bi/BiLinkExternal";
import { TiArrowBackOutline as Back } from "@react-icons/all-files/ti/TiArrowBackOutline";
import formatDate from "../../utils/formatDate";
import { useRouter } from "next/router";

const Details = ({ data }: DataType) => {
  const router = useRouter();

  return (
    <div className="relative text-gray-800 py-4">
      <Alert />
      <div className="flex w-full flex-row justify-between">
        <button
          onClick={() => router.back()}
          className="py-1 text-3xl flex items-center text-purple-700 hover:text-purple-900"
        >
          <Back />
        </button>
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
      <h1 className="mt-4 text-3xl md:text-4xl font-bold">{data?.title}</h1>
      <div className="font-nunito my-4">
        <p className="text-gray-500 text-sm p-0 font-mono">
          {formatDate(data?.created_at)}
        </p>
        <ReactMarkdown skipHtml={true} remarkPlugins={[remarkGfm]}>
          {data?.body}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Details;
