export const env = process.env.NODE_ENV;
export const url =
  env === "development"
    ? "http://localhost:3000/api/data"
    : "https://remoto.vercel.app/api/data";

// secondary test env
//"https://remoto-hotfix.vercel.app/api/data"
