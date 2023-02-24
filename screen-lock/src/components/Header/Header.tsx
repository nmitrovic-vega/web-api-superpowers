import React, { useEffect, useState } from "react";
import { Switch } from "@mui/material";
import { useWakeLock } from "../../useWakeLock";
import { ReactComponent as ChefHat } from "../../assets/chef-hat.svg";
import * as S from "./Header.styles";

const Header = () => {
	const [seconds, setSeconds] = useState<string>("1:00");
	const [isWake, setIsWake] = useState<boolean>(false);
	useWakeLock(isWake);

	const countdown = (minutes: number, seconds: number) => {
		let totalSeconds = minutes * 60 + seconds;
		let interval = setInterval(() => {
			totalSeconds--;

			let min = Math.floor(totalSeconds / 60);
			let sec = totalSeconds % 60;

			if (totalSeconds < 0) {
				clearInterval(interval);

				return;
			}

			setSeconds(`${min}:${sec < 10 ? "0" : ""}${sec}`);
		}, 1000);
	};

	useEffect(() => {
		countdown(1, 0);
	}, []);

	const handleSwitch = async ({ target: { checked } }: any) => {
		setIsWake(checked);
	};

	return (
		<S.Header>
			<S.Seconds>{seconds}</S.Seconds>
			<S.Cooking>
				<Switch onChange={handleSwitch} />
				<ChefHat fill={isWake ? "#35bc93" : "#000"} />
			</S.Cooking>
		</S.Header>
	);
};

export default Header;
