import { Dialog, Transition } from "@headlessui/react";
import { Fragment, ReactNode } from "react";
import Button from "./Button";

interface IProbs {
  isOpen: boolean;
  closeModal: () => void;
  title?: string;
  children: ReactNode;
}
const Modal = ({ isOpen, closeModal, title, children }: IProbs) => {
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
            <div className="fixed inset-0 bg-black/25" />
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  {/*~~~~~~~~$ modal title $~~~~~~~~*/}
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-semibold leading-6 text-blue-600 capitalize mb-3"
                  >
                    add a new product
                  </Dialog.Title>

                  {/*~~~~~~~~$ modal body $~~~~~~~~*/}
                  <div className="space-y-3">
                    {children}

                    
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

export default Modal;
