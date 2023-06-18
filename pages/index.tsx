import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Landing from "@/components/Landing";
const inter = Inter({ subsets: ["latin"] });
import { Tab } from "@headlessui/react";
import { GetServerSideProps } from "next";
import { fetchCategories } from "@/utils/fetchCategories";
import { fetchProducts } from "@/utils/fetchProducts";
import Product from "@/components/Product";
import Basket from "@/components/Basket";
import { getSession } from "next-auth/react";
import type { Session } from "next-auth";
import { useState } from "react";
import ProductBar from "@/components/ProductBar";

interface Props {
  categories: Category[];
  produsts: Product[];
  session: Session | null;
}
interface StateOf {
  buttonState: boolean;
}

export default function Home({ categories, produsts }: Props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchActive, setSearchActive] = useState(false);
  const [searchResult, setSearchResult] = useState<Product[]>([]);

  const showProducts = (category: number) => {
    const result = produsts
      .filter((product) => product.category._ref === categories[category]._id)
      .map((product) => <Product product={product} key={product._id} />); // filter products by category
    return result;
  };
  const handleInputChange = (e: any) => {
    const target = e.target.value.toLowerCase();
    setSearchQuery(e.target.value);
    if (target === "") return setSearchResult([]);
    const result = produsts.filter((product) =>
      product.title.toLowerCase().includes(target)
    );
    if (result.length > 8) {
      // want that only 6 results are shown
      result.length = 8;
      setSearchResult(result);
      return;
    } else {
      setSearchResult(result);
    }
  };
  const handleSearch = () => {
    const target = searchQuery.toLowerCase();
    if (target === "") return setSearchResult([]);
    const result = produsts.filter((product) =>
      product.title.toLowerCase().includes(target)
    );
    setSearchResult(result);
  };

  return (
    <div className="parent">
      {searchActive && (
        <>
          <div className="searchArea absolute left-1/2  z-50 mt-20 w-[90%] -translate-x-1/2  p-1 sm:w-auto ">
            <div className="mt-2 flex items-center justify-center ">
              <input
                type="text"
                className=" w-[100%] rounded-l-3xl bg-[#e7ecee] p-2 pl-4  outline-none"
                value={searchQuery}
                onChange={handleInputChange}
                placeholder="Search here ..."
              />
              <button
                className="rounded-r-3xl bg-indigo-600 bg-gradient-to-r from-pink-500 to-violet-500 p-2  text-white transition-all duration-300 focus:outline-none"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
            <div className="mt-2 flex flex-col items-center justify-center">
              {searchResult.map((product) => (
                <ProductBar product={product} key={product._id} />
              ))}
            </div>
          </div>
          <div
            className="Overlay fixed left-0 top-0 z-40 min-h-full min-w-full bg-black bg-opacity-90"
            onClick={() => {
              setSearchActive(false);
            }}
          ></div>
        </>
      )}
      <Header
        buttonState={searchActive}
        setButtonState={setSearchActive}
        ifLanding={true}
      />
      <Basket />
      <main className="relative h-[200vh] bg-[#E7ECEE]">
        <Landing />
      </main>
      <section className="relative z-40 -mt-[100vh] min-h-screen bg-[#1B1B1B]">
        <div className="space-y-10 py-16">
          <h1 className=" text-center text-4xl font-medium tracking-wide text-white md:text-5xl">
            New Promos
          </h1>

          <Tab.Group>
            <Tab.List className="flex justify-center">
              {categories.map((category) => (
                <Tab
                  key={category._id}
                  id={category._id}
                  className={({ selected }) =>
                    `whitespace-nowrap rounded-t-lg px-5 py-3 text-sm font-light outline-none md:px-6 md:py-4 md:text-base ${
                      selected
                        ? "borderGradient bg-[#35383C] text-white"
                        : "border-b-2 border-[#35383C] text-[#747474]"
                    }`
                  }
                >
                  {category.title}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mx-auto max-w-fit pb-24 pt-10 sm:px-4">
              <Tab.Panel className="tabPanel">{showProducts(0)}</Tab.Panel>
              <Tab.Panel className="tabPanel">{showProducts(1)}</Tab.Panel>
              <Tab.Panel className="tabPanel">{showProducts(2)}</Tab.Panel>
              <Tab.Panel className="tabPanel">{showProducts(3)}</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </div>
  );
}

// backend code
export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const categories = await fetchCategories();
  const produsts = await fetchProducts();
  const session = await getSession(context);
  return {
    props: {
      categories,
      produsts,
      session,
    },
  };
};
