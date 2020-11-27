import { fetchRepositories, gatStaticPaths } from "~/lib/fetchTest";

type Props = {
  repositories: any;
  params: any;
};

const Archives = ({ repositories, params }: Props) => {
  console.log(repositories);
  console.log(params);
  return (
    <>
      <div>
        <h1>git repositories</h1>
      </div>
    </>
  );
};

export default Archives;

export async function getStaticPaths() {
  const paths = await gatStaticPaths();
  return {
    paths: paths.map((path) => {
      return {
        params: {
          slug: path.name,
        },
      };
    }),
    fallback: false,
  };
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const repositories = await fetchRepositories();
  return {
    props: {
      params: params.slug,
      repositories,
    },
  };
}
