export {};
// import React, { ReactElement } from "react";

// import { QueryClient, QueryClientProvider, useQuery } from "react-query";

// const queryClient = new QueryClient();

// export default function ReactQuery() {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <Example />
//     </QueryClientProvider>
//   );
// }

// function Example() {
//   const { isLoading, error, data } = useQuery("repoData", () =>
//     fetch("https://api.github.com/repos/tannerlinsley/react-query").then(
//       (res) => res.json()
//     )
//   );

//   if (isLoading)
//     return (
//       <p className="text-2xl m-10 bg-white p-10 roudned-md w-1/3">
//         'Loading...'
//       </p>
//     );
//   // if (error)
//   //   return (

//   //     <p className="text-2xl m-10 bg-white p-10 roudned-md w-1/3">

//   //       An error has occurred:
//   //       {/* //@ts-ignore */}
//   //       {error.message as string}{" "}
//   //     </p>
//   //   );

//   return (
//     <div className="p-10 m-10 bg-white rounded-md w-1/2">
//       <h1 className="text-2xl">{data.name}</h1>
//       <p className="text-lg text-gray-500">{data.description}</p>
//       <strong className="text-sm">👀 {data.subscribers_count}</strong>{" "}
//       <strong className="text-sm">✨ {data.stargazers_count}</strong>{" "}
//       <strong className="text-sm">🍴 {data.forks_count}</strong>
//     </div>
//   );
// }
