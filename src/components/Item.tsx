import React from "react";
import Button from "./ui/Button";
import Fieldset from "./ui/Fieldset";
import Icon from "./ui/Icon";

type Types = {
	title: string;
	variant: "info" | "warning";
	// children: React.ReactNode;
};

// type dateT = {
// 	date: Date;
// };

const Item = ({ title, variant }: Types) => {
	// const date = Date.now();

	return (
		<Fieldset
			title={title}
			className={`
        ${variant === "info" && "alert--info"} 
        ${variant === "warning" && "alert--warning"}`}
			titleClassName="!text-current 
        bg-white border border-current text-xs py-1 
        tracking-wider font-medium rounded-full"
		>
			<ActionButtons openModal={() => console.log("open modal")} />
			<div className="space-y-4">
				<Date date={"02/14/1995"} />
				<Form />
			</div>
		</Fieldset>
	);
};

const Date = ({ date }: any) => {
	console.log(date);

	return (
		<p className="text-sm font-medium">
			Date de naissance : <span className="font-semibold">{date}</span>
		</p>
	);
};

const Form = () => {
	return (
		<div className="flex gap-5">
			<input type="date" className="!h-12 !py-2 !border-current" />
			<Button size="small" className="button w-max flex-1">
				Enregistrer
			</Button>
		</div>
	);
};

const ActionButtons = ({ openModal }: any) => {
	return (
		<div className="flex justify-end gap-2 -mt-4">
			<button
				className="flex justify-center items-center uppercase tracking-wide font-semibold gap-3 
        py-1 px-4 border-2 border-current text-xs text-current bg-white rounded-full hover:bg-gray-50 transition active:scale-95"
				onClick={openModal}
			>
				Mettre à jour <Icon name="edit" className="w-5" />
			</button>
			<button
				className="flex justify-center items-center uppercase tracking-wide font-semibold gap-3 
        py-1 px-4 border-2 border-current text-xs text-red-400 bg-white rounded-full hover:bg-gray-50 transition active:scale-95"
			>
				Supprimer <Icon name="trash" className="w-5" />
			</button>
		</div>
	);
};

export default Item;
