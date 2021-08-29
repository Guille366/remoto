import { useContext, useState } from "react";
import { Context } from "../../pages/_app";

const Filter = () => {
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
    <div className="w-full flex items-center justify-end">
      <label className="mr-1" htmlFor="pj">
        PJ
      </label>
      <input
        className="mr-3 cursor-pointer"
        type="checkbox"
        id="pj"
        name="pj"
        checked={context?.filterArgs.pj}
        onChange={(e) => handleChange(e)}
      />

      <label className="mr-1" htmlFor="clt">
        CLT
      </label>
      <input
        className="mr-3 cursor-pointer"
        type="checkbox"
        id="clt"
        name="clt"
        checked={context?.filterArgs.clt}
        onChange={(e) => handleChange(e)}
      />

      <label className="mr-1" htmlFor="junior">
        Junior
      </label>
      <input
        className="mr-3 cursor-pointer"
        type="checkbox"
        id="junior"
        name="junior"
        checked={context?.filterArgs.junior}
        onChange={(e) => handleChange(e)}
      />

      <label className="mr-1" htmlFor="pleno">
        Pleno
      </label>
      <input
        className="mr-3 cursor-pointer"
        type="checkbox"
        id="pleno"
        name="pleno"
        checked={context?.filterArgs.pleno}
        onChange={(e) => handleChange(e)}
      />

      <label className="mr-1" htmlFor="senior">
        Sênior
      </label>
      <input
        className="mr-3 cursor-pointer"
        type="checkbox"
        id="senior"
        name="senior"
        checked={context?.filterArgs.senior}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default Filter;
