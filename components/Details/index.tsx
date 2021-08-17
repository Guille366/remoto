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
    <div>
      <h1 className="text-4xl font-bold">{data.title}</h1>
      <div className="font-nunito my-4">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{data.body}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Details;
