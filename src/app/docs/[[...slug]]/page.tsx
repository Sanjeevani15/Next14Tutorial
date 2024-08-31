import React from "react";

type Params = {
  slug: string[];
};

const Docs = ({ params }: { params: Params }) => {
  return (
    <div>
      <h1>Docs - this is using CATCH ALL SEGMENTS routes</h1>
      <p>http://localhost:3001/docs/feature1/concept1</p>
      <p>
        here this above url with open this file, means anything after "docs/"
        will open this file
      </p>

      {/* use of slug  */}

      {params.slug?.length === 2 ? (
        <p>
          Viewing docs for feature {params.slug[0]} and concept {params.slug[1]}
        </p>
      ) : params.slug?.length === 1 ? (
        <p>Viewing docs for feature {params.slug[0]}</p>
      ) : (
        <p>Docs Home page from slug</p>
        // to see only '/docs' page use this : "[[...slug]]"  instead of "[...slug]"
      )}
    </div>
  );
};

export default Docs;
