import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

const faqs = [
  {
    question: "What is All In One ?",
    answer:
      "It is a all in one site with lots of features like images compressor,videos,calculators",
  },
  {
    question: "Do i need to open a account to access your features ?",
    answer:
      "No! there is absolutely no need to open a account the features are completely free for ever.",
  },
  {
    question: "For how much time do you keep photos or videos on your server ?",
    answer:
      "We generally keep the photos and videos for 4 hours after that it is deleted from our databases it s a automated process so dont need to wory about that",
  },
  {
    question: "I have a found a question or a bug or have a suggestion ?",
    answer:
      "You can contact use and can tell your questions we are happy to answer to you",
  },
  {
    question:
      "If you found any copyright stuff on our service and wanted to remove it ?",
    answer:
      "All the data be it images or videos are removed from our servers within 4 hours it s a automated process ",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function FAQ() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        <span className="font-medium text-gray-900">
                          {faq.question}
                        </span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(
                              open ? "-rotate-180" : "rotate-0",
                              "h-6 w-6 transform"
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
