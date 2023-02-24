import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import { theme } from "./theme";
import Recipes from "./assets/recipes.png";
import "./App.css";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<Header />
				<Search />
				<img src={Recipes} style={{ marginTop: "30px", width: "300px" }} />
				<div className="background-image red" />
				<div className="background-image yellow" />
			</div>
		</ThemeProvider>
	);
}

export default App;
