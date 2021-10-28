import { useRouter } from "next/dist/client/router";
import { useState } from "react";

// Types //
type SearchTypes = {
  searchParam: string;
};

const useSearch = () => {
  const [formInput, setFormInput] = useState<SearchTypes>({
    searchParam: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  };

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const { searchParam } = formInput;
    const url = `/search/${searchParam}`;

    router.push(url);
  };

  return { handleSubmit, handleInputChange, formInput };
};

export default useSearch;
