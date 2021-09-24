import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header";
import SearchResults from "../components/SearchResults";
import { API_KEY, CONTEXT_KEY } from "../keys";
import Response from "../Response";

// search in lowercase bcoz -> these value is actually link to root name so we use lovar case "s"

function Search({ results }) {
  const router = useRouter();

  // console.log(results);
  
  return (
    <div>
      <Head>
        <title> {router.query.term} - Google Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      {/* Search Results */}
      <SearchResults results={results} />
    </div>
  );
}

export default Search;

/* SSR */

//  getServerSideProps -> it is main SSR props for this page only not entire site

export async function getServerSideProps(context) {
  const useDummyData = false;
  const startIndex = context.query.start || "0";

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`

        // make a request to google - https://www.googleapis.com/customsearch/v1
        //  use a key - key=${API_KEY}
        //  and use context key that is known as site to search - cx=${CONTEXT_KEY}
        // query that we basically entered in - q=${context.query.term}
      ).then((response) => response.json());
  // |^ pass the response as json object

  // After the SERVER has rendered... pass the result to the client...
  return {
    props: {
      results: data,
    },
  };
}
