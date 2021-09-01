import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Alert from "../common/Alert";
import Fav from "../common/Fav";
import { BiLinkExternal as Issue } from "@react-icons/all-files/bi/BiLinkExternal";

interface DataType {
  data: {
    body: string;
    html_url: string;
    created_at: string;
    id: number;
    labels: {
      name: string;
    }[];
    title: string;
  };
}

const Details = ({ data }: DataType) => {
  return (
    <div className="relative text-gray-800 py-4">
      <Alert />
      <div className="flex w-full flex-row justify-between">
        <Link href="/">
          <a className="py-1 flex items-center">{"< Voltar"}</a>
        </Link>
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
        <ReactMarkdown skipHtml={true} remarkPlugins={[remarkGfm]}>
          {data?.body}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Details;
