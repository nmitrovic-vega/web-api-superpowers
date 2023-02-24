import React from "react";
import { IconButton, InputBase } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import * as S from "./Search.styles";

const Search = () => {
	return (
		<S.SearchField>
			<IconButton sx={{ p: "10px" }} aria-label="menu">
				<SearchIcon color="primary" />
			</IconButton>
			<InputBase
				sx={{ ml: 1, flex: 1 }}
				placeholder="Search Recipes"
				inputProps={{ "aria-label": "search google maps" }}
			/>
		</S.SearchField>
	);
};

export default Search;
