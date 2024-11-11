"use client";

import Image from "next/image";
import ai from "@/public/images/ai.jpeg";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";

import { Metadata } from "next";

// import HeavyComponent from "./components/HeavyComponent";
import { useState } from "react";
import { authOptions } from "./api/auth/authOptions";
// import dynamic from "next/dynamic";
// const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
//   ssr: false,
//   loading: () => <p>Loading</p>,
// });
// import _ from "lodash";

/* Dahsboard */
// export default async function Home() {
//   const session = await getServerSession(authOptions);

//   return (
//     <>
//       <main className="relative h-screen">
//         <div className="flex space-x-5 items-center">
//           <h1 className="m-0 font-monaco">
//             Hello{" "}
//             {session && (
//               <span className="text-blue-500">{session.user!.name}</span>
//             )}
//           </h1>
//           <Link href="/users">Users</Link>
//           <ProductCard />
//         </div>

//         {/* Optimization */}
//         <div className="flex space-x-5 mt-10">
//           <Image src={ai} alt="ai" />
//           {/* <Image
//             src="https://bit.ly/react-cover"
//             alt="react_typescript"
//             // width={300}
//             // height={170}
//             fill
//             // style={{ objectFit: "cover" }}
//             className="object-cover"
//             sizes="(max-width: 768px) 100vw, (max-dith: 1200px) 50vw, 33vw"
//             quality={100}
//             priority
//           /> */}
//         </div>
//       </main>
//     </>
//   );
// }

/* Lazy Loading */
export default function Home() {
  //   const [isVisible, setVisible] = useState(false);

  return (
    <>
      <main className="relative h-screen">
        {/* Heavy Component */}
        {/* <button
          className="btn btn-success mt-5"
          onClick={() => setVisible(true)}
        >
          SHOW
        </button>
        {isVisible && <HeavyComponent />} */}

        {/* lodash */}
        <button
          className="btn btn-success mt-5"
          onClick={async () => {
            const _ = (await import("lodash")).default;
            const users = [{ name: "c" }, { name: "b" }, { name: "a" }];

            const sorted = _.orderBy(users, ["name"]);

            console.log(sorted);
          }}
        >
          SHOW
        </button>
      </main>
    </>
  );
}

// export const metadata: Metadata = {
//   title: "meta_title",
//   description: "meta_description",
// };

/* Generate metadata dynamically */
// export async function generateMetadata(): Promise<Metadata> {
//   const sample = await fetch("");

//   return {
//     title: "sample.title", // sample only, without qoutes
//     description: "sample.description", // sample only, without qoutes
//   };
// }
