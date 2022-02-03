import { CheckIcon } from "@heroicons/react/outline";
import { UsersIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";

const features = [
  {
    name: "Convert Images",
    description:
      "Be it jpeg or png we convert the images very easily using our converting algorithm",
  },
  {
    name: "Compress Images",
    description:
      "We compress your images in a snap very easy to use and gives you the option to compress by quality and size also ",
  },
  {
    name: "Youtube Downloader",
    description:
      "Be it a video or shorts video we handle it easily just give us a youtube link and left the rest to us",
  },
  {
    name: "Utils",
    description:
      "We cover basic stuff also like calculators + converters and so much more",
  },
];

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Welcome to All-in-one platform 🙌
            </h2>
          </div>
          <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <CheckIcon
                    className="absolute h-6 w-6 text-green-500"
                    aria-hidden="true"
                  />
                  <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="relative bg-white">
        <div className="h-56 bg-indigo-600 sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2">
          <img
            className="h-full object-cover w-16 md:w-32 lg:w-full"
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt="Support team"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-16">
          <div className="max-w-2xl mx-auto lg:max-w-none lg:mr-0 lg:ml-auto lg:w-1/2 lg:pl-10">
            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <UsersIcon className="h-6 w-6" aria-hidden="true" />
              </div>
            </div>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Deliver what your customers want every time
            </h2>
            <p className="mt-6 text-lg text-gray-500">
              Want to convert images covered. Want to compress images covered.
              Want to download videos covered.
            </p>
            <div className="mt-8 overflow-hidden">
              <dl className="-mx-8 -mt-8 flex flex-wrap">
                <div className="flex flex-col px-8 pt-8">
                  <dt className="order-2 text-base font-medium text-gray-500">
                    Delivery
                  </dt>
                  <dd className="order-1 text-2xl font-extrabold text-indigo-600 sm:text-3xl">
                    24/7
                  </dd>
                </div>
                <div className="flex flex-col px-8 pt-8">
                  <dt className="order-2 text-base font-medium text-gray-500">
                    Up time
                  </dt>
                  <dd className="order-1 text-2xl font-extrabold text-indigo-600 sm:text-3xl">
                    99.9%
                  </dd>
                </div>
                <div className="flex flex-col px-8 pt-8">
                  <dt className="order-2 text-base font-medium text-gray-500">
                    Clients served
                  </dt>
                  <dd className="order-1 text-2xl font-extrabold text-indigo-600 sm:text-3xl">
                    100k+
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-indigo-800">
        <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 md:px-6 lg:px-8">
          <div className="py-12 px-4 sm:px-6 md:flex md:flex-col md:py-16 md:pl-0 md:pr-10 md:border-r md:border-indigo-900 lg:pr-16">
            <div className="md:flex-shrink-0">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/tuple-logo-indigo-300.svg"
                alt="Tuple"
              />
            </div>
            <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
              <div className="relative text-lg font-medium text-white md:flex-grow">
                <svg
                  className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-indigo-600"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="relative">Highly recommended.</p>
              </div>
              <footer className="mt-8">
                <div className="flex items-start">
                  <div className="ml-4">
                    <div className="text-base font-medium text-white">
                      Vareendeep Bhalla
                    </div>
                    <div className="text-base font-medium text-indigo-200">
                      Web developer
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
          <div className="py-12 px-4 border-t-2 border-indigo-900 sm:px-6 md:py-16 md:pr-0 md:pl-10 md:border-t-0 md:border-l lg:pl-16">
            <div className="md:flex-shrink-0">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/workcation-logo-indigo-300.svg"
                alt="Workcation"
              />
            </div>
            <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
              <div className="relative text-lg font-medium text-white md:flex-grow">
                <svg
                  className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-indigo-600"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="relative">
                  Best website to do all the basic stuff!.
                </p>
              </div>
              <footer className="mt-8">
                <div className="flex items-start">
                  <div className="ml-4">
                    <div className="text-base font-medium text-white">
                      Siddharth Singh
                    </div>
                    <div className="text-base font-medium text-indigo-200">
                      Web developer
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block">Start your free trial today.</span>
          </h2>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <button
                onClick={() => navigate("/image-compressor")}
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Get started
              </button>
            </div>
            <div className="ml-3 inline-flex">
              <button
                onClick={() => navigate("/faq")}
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
      )
    </>
  );
}
