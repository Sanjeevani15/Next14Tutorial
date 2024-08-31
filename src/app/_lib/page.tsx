import React from "react";

const PrivateFolder = () => {
  return (
    <div>
      <h2>This is a private folder as the name starts with an underscore.</h2>
      <p>Therefore you cannot view this folder</p>
      <p>useful for seperating UI logic from routing logic</p>
      <h4>
        and for underscore in URL segments, you can prefix the folder name with
        '%F, which i sthe URL encoded form of an underscore.'
      </h4>
    </div>
  );
};

export default PrivateFolder;
