// our-domain.com/news
import Link from "next/link";
import { Fragment } from "react";
function NewsHomepage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-a-great-framework">
            NEXTJS Is A Great Framework
          </Link>
        </li>
        <li>
          <a>Or What Do You Also Think About React Router</a>
        </li>
      </ul>
    </Fragment>
  );
}

export default NewsHomepage;
