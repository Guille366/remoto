import { useContext, useState } from "react";
import { Context } from "../../pages/_app";
import { IoFilterCircleSharp } from "@react-icons/all-files/io5/IoFilterCircleSharp";
import { IoFilterCircleOutline } from "@react-icons/all-files/io5/IoFilterCircleOutline";

const Filter = () => {
  const [open, setOpen] = useState(false);

  const context = useContext(Context);

  const handleChange = (e: any) => {
    const name = e.target.name;

    switch (name) {
      case "pj":
        context?.setFilterArgs({
          ...context?.filterArgs,
          [name]: !context?.filterArgs.pj,
        });
        break;
      case "clt":
        context?.setFilterArgs({
          ...context?.filterArgs,
          [name]: !context?.filterArgs.clt,
        });
        break;
      case "junior":
        context?.setFilterArgs({
          ...context?.filterArgs,
          [name]: !context?.filterArgs.junior,
        });
        break;
      case "pleno":
        context?.setFilterArgs({
          ...context?.filterArgs,
          [name]: !context?.filterArgs.pleno,
        });
        break;
      case "senior":
        context?.setFilterArgs({
          ...context?.filterArgs,
          [name]: !context?.filterArgs.senior,
        });
        break;

      default:
        break;
    }
  };

  return (
    <div className={`flex w-full h-6 items-center justify-end`}>
      <div
        className={`${
          open ? "flex" : "hidden"
        } sm:w-full absolute sm:static top-64 right-4 bg-purple-700 sm:bg-transparent text-white sm:text-gray-800 rounded shadow sm:shadow-none z-50 p-4 sm:pr-0 sm:flex-row flex-col items-start justify-end`}
      >
        <div
          className={`${
            context?.filterArgs.pj ? "sm:text-purple-700" : ""
          } py-1`}
        >
          <label className="mr-1 cursor-pointer" htmlFor="pj">
            PJ
          </label>
          <input
            className={` mr-3 cursor-pointer`}
            type="checkbox"
            id="pj"
            name="pj"
            checked={context?.filterArgs.pj}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div
          className={`${
            context?.filterArgs.clt ? "sm:text-purple-700" : ""
          } py-1`}
        >
          <label className="mr-1 cursor-pointer" htmlFor="clt">
            CLT
          </label>
          <input
            className={` mr-3 cursor-pointer`}
            type="checkbox"
            id="clt"
            name="clt"
            checked={context?.filterArgs.clt}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div
          className={`${
            context?.filterArgs.junior ? "sm:text-purple-700" : ""
          } py-1`}
        >
          <label className="mr-1 cursor-pointer" htmlFor="junior">
            Júnior
          </label>
          <input
            className={`mr-3 cursor-pointer`}
            type="checkbox"
            id="junior"
            name="junior"
            checked={context?.filterArgs.junior}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div
          className={`${
            context?.filterArgs.pleno ? "sm:text-purple-700" : ""
          } py-1`}
        >
          <label className="mr-1 cursor-pointer" htmlFor="pleno">
            Pleno
          </label>
          <input
            className={`mr-3 cursor-pointer`}
            type="checkbox"
            id="pleno"
            name="pleno"
            checked={context?.filterArgs.pleno}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div
          className={`${
            context?.filterArgs.senior ? "sm:text-purple-700" : ""
          } py-1`}
        >
          <label className="mr-1 cursor-pointer" htmlFor="senior">
            Sênior
          </label>
          <input
            className={`mr-3 cursor-pointer`}
            type="checkbox"
            id="senior"
            name="senior"
            checked={context?.filterArgs.senior}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>

      <button
        className="p-4 whitespace-nowrap text-purple-700"
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <IoFilterCircleSharp className="text-2xl" />
        ) : (
          <IoFilterCircleOutline className="text-2xl" />
        )}
      </button>
    </div>
  );
};

export default Filter;
