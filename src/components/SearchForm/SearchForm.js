import { useState } from "react";
import { useParams } from "react-router-dom";
import Notiflix from 'notiflix';
import { StyledInput, StyledBtn } from "./SearchForm.styled";

const Form = ({setSearchParams}) => {
    const { query: urlQuery} = useParams();
    const [query, setQuery] = useState(urlQuery);

    const handleInput = evt => {
        const inputValue = evt.target.value;
        setQuery(inputValue);
      };

    const handleSubmit = evt => {
        evt.preventDefault();
        if (!query) {
          Notiflix.Notify.info('Please enter your request');
        } else {
          setSearchParams({ query });
        }
      };

      return (
        <form onSubmit={handleSubmit}>
          <StyledInput
            type="text"
            placeholder="Enter title"
            value={query}
            autoFocus
            onChange={handleInput}
            autoComplete="off"
          />
    
          <StyledBtn type="submit">Search</StyledBtn>
        </form>
      );
}

export default Form;