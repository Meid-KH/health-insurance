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
	// const date: Date = new Date();
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
			{/* Action buttons */}
			<ActionButtons />

			<div className="space-y-4">
				<Date date={"12/12/1995"} />
				<Form />
			</div>
		</Fieldset>
	);
};

const Date = ({ date }: any) => {
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

const ActionButtons = () => {
	return (
		<div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 flex flex-col gap-2">
			<button
				type="button"
				className="w-9 h-9 p-1.5 border-2 border-current text-gray-600 bg-white rounded-full 
                  scale-95 transition-all hover:blue-red-500 hover:scale-100"
			>
				<Icon name="edit" />
			</button>
			<button
				type="button"
				className="w-9 h-9 p-1.5 border-2 border-current text-gray-600 bg-white rounded-full 
                 scale-95 transition-all hover:text-red-500 hover:scale-100"
			>
				<Icon name="cancel" />
			</button>
		</div>
	);
};

export default Item;
