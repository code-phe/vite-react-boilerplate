import { useTranslation } from "react-i18next";
import type { FunctionComponent } from "../common/types";
import { getPokemonList } from "../api";
import { useQuery } from "@tanstack/react-query";

export const Home = (): FunctionComponent => {
	const { t, i18n } = useTranslation();
	const { data, isLoading } = useQuery({
		queryKey: ["pokemon"],
		queryFn: () => getPokemonList(),
	});

	const onTranslateButtonClick = async (): Promise<void> => {
		if (i18n.resolvedLanguage === "en") {
			await i18n.changeLanguage("es");
		} else {
			await i18n.changeLanguage("en");
		}
	};
	return (
		<div className="bg-blue-300  font-bold w-screen h-screen flex flex-col justify-center items-center">
			<p className="text-white text-6xl">{t("home.greeting")}</p>
			<button type="submit" onClick={onTranslateButtonClick}>
				translate
			</button>

			{isLoading ? <p>Loading...</p> : <p>{JSON.stringify(data)}</p>}
		</div>
	);
};
