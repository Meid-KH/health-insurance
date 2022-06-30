import React, { Fragment } from "react";
import "./App.scss";
import { Dialog, Transition } from "@headlessui/react";
import Header from "./components/Header";
import Item from "./components/Item";
import Button from "./components/ui/Button";
import Fieldset from "./components/ui/Fieldset";
import Icon from "./components/ui/Icon";

function App() {
	const [modalOpen, setModalOpen] = React.useState(true);

	const openModal = () => setModalOpen(true);
	const closeModal = () => setModalOpen(false);

	console.log(modalOpen);

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
			<Modal closeModal={closeModal} isOpen={modalOpen} />
		</div>
	);
}

export default App;

const Modal = ({ closeModal, isOpen }: any) => {
	return (
		<>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
									<Dialog.Title
										as="h3"
										className="text-lg font-medium leading-6 text-gray-900"
									>
										Payment successful
									</Dialog.Title>
									<div className="mt-2">
										<p className="text-sm text-gray-500">
											Your payment has been successfully
											submitted. We’ve sent you an email
											with all of the details of your
											order.
										</p>
									</div>

									<div className="mt-4">
										<button
											type="button"
											className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
											onClick={closeModal}
										>
											Got it, thanks!
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};
