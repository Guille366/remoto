interface AlertTypes {
  msg: string | null;
  active: boolean;
}
interface ContextTypes {
  jobs: JobsTypes[] | null;
  setJobs: Dispatch<SetStateAction<JobsTypes[] | null>>;
  alert: {
    msg: string | null;
    active: boolean;
  };
  setAlert: Dispatch<SetStateAction<AlertTypes>>;
  filterArgs: {
    pj: boolean;
    clt: boolean;
    junior: boolean;
    pleno: boolean;
    senior: boolean;
  };
  setFilterArgs: Dispatch<
    SetStateAction<{
      pj: boolean;
      clt: boolean;
      junior: boolean;
      pleno: boolean;
      senior: boolean;
    }>
  >;
}

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

interface DataTypeArr {
  data: {
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

interface DataTypes {
  body: string;
  html_url: string;
  created_at: string;
  id: number;
  labels: {
    name: string;
  }[];
  title: string;
}

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

interface ParamType {
  params: {
    id: string;
  };
}
