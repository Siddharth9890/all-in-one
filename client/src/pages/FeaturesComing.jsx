const features = [
  {
    name: "A fully featured converted for your images",
    title: "For image converter ",
    role: "Coming Soon",
    status: "Under development",
  },
  {
    name: "Working on 1080p videos download",
    title: "For youtube downloader ",
    role: "Coming Soon",
    status: "Under development",
  },
  {
    name: "Need to build advance calculator",
    title: "For calculator section",
    role: "Coming Soon",
    status: "Under development",
  },
  {
    name: "Need to add more downloaders for facebook and so n",
    title: "For Videos section",
    role: "Coming Soon",
    status: "N/A",
  },
  {
    name: "Need to convert word to pdf and all formats",
    title: "A totally new section to be added",
    role: "Coming Soon",
    status: "N/A",
  },
  {
    name: "A basic image editor to be added",
    title: "For images section ",
    role: "Coming Soon",
    status: "N/A",
  },
];

export default function FeaturesComing() {
  return (
    <div className="flex flex-col">
      <header className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white">
            Upcoming features that we are working on!
          </h1>
          <h5 className="text-xl font-bold text-white">
            If there are any bugs or any features that we are currently working
            on are listed here
          </h5>
        </div>
      </header>
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    ETA
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {features.map((feature, idx) => (
                  <tr key={idx}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-2">
                          <div className="text-sm font-medium text-gray-900">
                            {feature.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {feature.title}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {feature.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {feature.role}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
