import fetch from "node-fetch";

type Props = {
  stars: string;
  build_time: string;
};

// getStaticPropsで取得したスター数とビルド時の時刻を受け取る
const TagArchives = ({ stars, build_time }: Props) => {
  return (
    <div>
      ビルド時（{build_time}）のNextのstar数は: {stars}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://api.github.com/repos/zeit/next.js");
  const json = await res.json();
  const stars = json.stargazers_count;

  const build_time = new Date().toString();

  return {
    props: {
      stars,
      build_time,
    },
  };
}

// {
//   tags.map((tag, i) => {
//     return (
//       <li className="tags-label" key={i}>
//         <Link as={`/archives/${tag.name}`} href="/archives/[tag]">
//           <span>
//             #<span className="ml-3">{tag.name}</span>
//           </span>
//         </Link>
//       </li>
//     );
//   });
// }


export default TagArchives;
