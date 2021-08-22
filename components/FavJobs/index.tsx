import Link from "next/link";
import formatDate from "../../utils/formatDate";
import Alert from "../common/Alert";
import Fav from "../common/Fav";

interface FavTypes {
  favData: {
    body: string;
    html_url: string;
    created_at: string;
    id: number;
    labels: {
      name: string;
    }[];
    title: string;
  }[];
}

const FavJobs = ({ favData }: FavTypes) => {
  return (
    <div className="font-nunito py-8">
      <Alert />
      {favData.length !== 0 && (
        <p className="text-sm pt-0">{favData.length} vagas favoritadas</p>
      )}
      <div className="grid md:grid-cols-2 gap-4">
        {favData.length === 0 ? (
          <h2 className="w-full text-center pt-12 text-xl">
            Sem favoritos por enquanto...
          </h2>
        ) : (
          favData.map((item) => (
            <div key={item.id} className="relative">
              <Fav id={item.id} />

              <Link href={`/jobs/${item.id}`}>
                <a className="text-gray-700 flex flex-col justify-center h-full p-4 no-underline shadow-md rounded border-red-700 border border-opacity-25 hover:shadow-lg hover:border-opacity-50">
                  <h2 className="font-code pt-0">{item.title}</h2>
                  <div className="flex flex-row flex-wrap">
                    {item.labels.map((item, key) => (
                      <div
                        className="font-bold text-sm py-0.5 px-1.5 mx-1 my-1 rounded-lg border border-red-700 text-red-700"
                        key={key}
                      >
                        {item.name}
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-500 text-sm p-0 font-mono">
                    {formatDate(item.created_at)}
                  </p>
                </a>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FavJobs;
