import { createContext, useCallback, useState } from "react";

export const HasMyRecipeDataContext = createContext({ hasMyRecipeData: false, setHasMyRecipeData: () => { } });

export const HasMyRecipeDataProvider = (props) => {
  const [hasMyRecipe, setHasMyRecipe] = useState(false);
  const setHasMyRecipeData = useCallback((bool) => {
    setHasMyRecipe(bool);
  }, []);

  return (
    <HasMyRecipeDataContext.Provider
      value={{
        hasMyRecipeData: hasMyRecipe,
        setHasMyRecipeData: setHasMyRecipeData,
      }}
    >
      {props.children}
    </HasMyRecipeDataContext.Provider>
  );
};
