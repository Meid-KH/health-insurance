import React from "react";
import "./App.scss";
import Header from "./components/Header";
import Icon from "./components/ui/Icon";

function App() {
	const [count, setCount] = React.useState(0);

	return (
		<div className="app font-inter">
			<Header />
			<div className="container mx-auto px-6">
				<div className="my-24 max-w-5xl mx-auto p-12 bg-white shadow rounded-lg">
					<div className="fieldset">
						<h3 className="fieldset__title">
							Je souhaite que mon contrat commence le
						</h3>
						<div className="form__group">
							<input type="date" className="form__control" />
						</div>
					</div>
					{/* OPTIONS */}
					<div className="fieldset">
						<span className="fieldset__title">
							Souhaitez-vous ajouter un bénéficiaire?
						</span>
						<div className="flex gap-6">
							<button className="flex items-center justify-center gap-3 button">
								<span className="inline-block w-6">
									{/* {% include "svg/plus.svg" %} */}
								</span>
								Enfant
							</button>
							<button className="flex items-center justify-center gap-3 button">
								<span className="inline-block w-6">
									{/* {% include "svg/plus.svg" %} */}
								</span>
								Conjoint
							</button>
						</div>
					</div>

					{/* FORM */}
					<div className="fieldset">
						<span className="fieldset__title">
							Quelle est la date de naissance de votre enfant ?
						</span>
						<button
							type="button"
							className="w-10 h-10 p-1.5 border-2 border-gray-800 bg-white text-gray-700 rounded-full 
              absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 scale-95 transition-all 
              hover:text-red-500 hover:border-red-500 hover:scale-100"
						>
							<Icon name="cancel" />
						</button>
						<div className="space-y-4">
							<div className="form__group">
								<input type="date" />
							</div>
							<button className="button">Enregistrer</button>
						</div>
					</div>

					{/* LIST */}
					{/* Children */}
					{[0, 1, 2].map((item, i) => (
						<div key={i} className="fieldset alert--info">
							<span className="fieldset__title !text-current bg-white border border-current text-xs py-1 tracking-wider font-medium rounded-full">
								Bénéficiaire: Enfant 001
							</span>
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
							{/* Action buttons */}
							<div className="space-y-4">
								<p className="text-sm font-medium">
									Date de naissance :{" "}
									<span className="font-semibold">
										02/14/1995
									</span>
								</p>
								<div className="flex gap-5">
									<input
										type="date"
										className="!h-12 !py-2 !border-blue-500"
									/>
									<button className="button w-max !h-12 !text-sm !py-3 !px-8 flex-1">
										Enregistrer
									</button>
								</div>
							</div>
						</div>
					))}
					{/* Parnter */}
					<div className="fieldset alert--warning">
						<span className="fieldset__title !text-current bg-white border border-current text-xs py-1 tracking-wider font-medium rounded-full">
							Bénéficiaire: Enfant 001
						</span>
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
						{/* Action buttons */}
						<div className="space-y-4">
							<p className="text-sm font-medium">
								Date de naissance :{" "}
								<span className="font-semibold">
									02/14/1995
								</span>
							</p>
							<div className="flex gap-5">
								<input
									type="date"
									className="!h-12 !py-2 !border-yellow-500"
								/>
								<button className="button w-max !h-12 !text-sm !py-3 !px-8 flex-1">
									Enregistrer
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
