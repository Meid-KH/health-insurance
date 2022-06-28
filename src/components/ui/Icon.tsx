import React from "react";

type Types = {
	name: React.ReactNode;
	className?: String;
};

const Icon = ({ name, className }: Types) => {
	return (
		<>
			<span className={`grid place-items-center ${className ?? ""}`}>
				<SvgIcon name={name} />
			</span>
		</>
	);
};

const SvgIcon = ({ name }: Types) => {
	switch (name) {
		case "cancel":
			return (
				<svg
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth="2"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M6 18L18 6M6 6l12 12"
					></path>
				</svg>
			);
		case "edit":
			return (
				<svg
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth="2"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
					/>
				</svg>
			);

		default:
			return <i className="text-xs">icon</i>;
			break;
	}
};

export default Icon;
