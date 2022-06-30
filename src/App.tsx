import React from "react";
import "./App.scss";
import Header from "./components/Header";
import Item from "./components/Item";
import Button from "./components/ui/Button";
import Fieldset from "./components/ui/Fieldset";
import Icon from "./components/ui/Icon";

function App() {
	return (
		<div className="app font-inter">
			{/* <Header /> */}
			<div className="container mx-auto px-6">
				<div className="my-24 max-w-5xl mx-auto p-12 bg-white shadow rounded-lg">
					{/* OPTIONS */}
					<Fieldset title="Souhaitez-vous ajouter un bénéficiaire?">
						<div className="flex gap-6">
							<Button className="flex items-center justify-center gap-3">
								<span className="inline-block w-6">
									{/* {% include "svg/plus.svg" %} */}
								</span>
								Enfant
							</Button>
							<Button className="flex items-center justify-center gap-3">
								<span className="inline-block w-6">
									{/* {% include "svg/plus.svg" %} */}
								</span>
								Conjoint
							</Button>
						</div>
					</Fieldset>

					{/* FORM */}
					<Fieldset
						title="Quelle est la date de naissance de votre enfant ?"
						className="fieldset"
					>
						<span className="fieldset__title"></span>
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
							<Button>Enregistrer</Button>
						</div>
					</Fieldset>

					{/* LIST */}
					{/* Children */}
					{[0, 1, 2].map((item, i) => (
						<Item
							key={i}
							title="Bénéficiaire: Enfant 001"
							variant="info"
						/>
					))}
					{/* Parnter */}
					<Item title="Bénéficiaire: Conjoint" variant="warning" />
				</div>
			</div>
		</div>
	);
}

export default App;
