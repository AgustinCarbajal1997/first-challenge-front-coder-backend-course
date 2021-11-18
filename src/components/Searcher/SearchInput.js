import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { FiSearch } from "react-icons/fi";


const SearchInput = () => {
  const [text, setText] = useState("");
  const [searchPath, setSearchPath] = useState("");
  const history = useHistory();

  useEffect(() => {
    let newPath = text.trim().replace(/\s+/g, "-").toLocaleLowerCase();
    setSearchPath(newPath);
  }, [text]);

  const onSearchLinkHandler = () => {
      history.push(`/search?q=${searchPath}`);
      setText("");
  }
  const onKeyDownEnterHandler = (e) =>{
    if(e.keyCode === 13){
        history.push(`/search?q=${searchPath}`);
        setText("");
    }
  }

  return (
    <div className="input-search-container">
      <div className="input-search">
        <input
          type="text"
          placeholder="Buscar productos"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={onKeyDownEnterHandler}
        />
        <div 
            className="input-lens" 
            onClick={onSearchLinkHandler}   
        >
          <FiSearch size="1.5rem" color="#f5f5f5" />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
