import { createContext, useState } from "react";

export const HasMyRecipeDataContext = createContext({ hasMyRecipeData: false });

export const HasMyRecipeDataProvider = (props) => {
  const [hasMyRecipeData, setHasMyRecipeData] = useState(false);

  return (
    <HasMyRecipeDataContext.Provider
      value={{
        hasMyRecipeData: hasMyRecipeData,
        setHasMyRecipeData: setHasMyRecipeData,
      }}
    >
      {props.children}
    </HasMyRecipeDataContext.Provider>
  );
};
