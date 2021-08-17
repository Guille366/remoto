import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
    <div className="text-gray-800">
      <Link href="/">
        <a
          className={`px-4 py-1 rounded shadow-md text-gray-100 hover:text-gray-100 bg-purple-700 hover:bg-purple-900`}
        >
          {"Voltar"}
        </a>
      </Link>
      <h1 className="mt-4 text-4xl font-bold">{data.title}</h1>
      <div className="font-nunito my-4">
        <ReactMarkdown skipHtml={true} remarkPlugins={[remarkGfm]}>
          {data.body}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Details;
