import React from "react";

const PredictionBox = () => {
  const [predictText, setPredictText] = React.useState("");
  const [searchText, setSearchText] = React.useState("");

  function getPredictions() {
    return [
      "red shirt",
      "shirt",
      "shirt full sleeve",
      "shirt large size",
      "shirt medium size"
    ];
  }

  function searchPredCheck(svalue) {
    const pridlList = getPredictions();

    if (svalue && svalue.length > 0) {
      const index = pridlList.findIndex(x =>
        x.toLocaleLowerCase().startsWith(svalue.toLocaleLowerCase())
      );
      if (index > -1) {
        const intlCopy = `${svalue}${pridlList[index].substring(
          svalue.length
        )}`;
        setPredictText(intlCopy);
      } else {
        setPredictText("");
      }
    } else {
      setPredictText("");
    }
  }

  return (
    <div className="searchContainer">
      <label className="seachLabel">{predictText}</label>
      <input
        type="search"
        className="seach"
        placeholder="Search your favorites shirts"
        value={searchText}
        onChange={({ target }) => {
          setSearchText(target.value);
          searchPredCheck(target.value);
        }}
        onKeyDown={e => {
          if (e.code === "Tab" && predictText?.length > 0) {
            e.preventDefault();
            setSearchText(predictText);
          }
        }}
      ></input>
    </div>
  );
};

export default PredictionBox;
