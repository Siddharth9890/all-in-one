export default function SimpleList({ setValueSelected, formats }) {
  return (
    <div>
      <label className="text-base font-medium text-gray-900">
        Download Options
      </label>
      <p className="text-sm leading-5 text-gray-500">
        How would you like to download the video
      </p>
      <fieldset className="mt-4">
        <legend className="sr-only">download methods</legend>
        <div className="space-y-2">
          <div className="grid grid-cols-5 gap-10">
            {formats.map((format, idx) => (
              <div key={idx} className="flex items-center">
                {format.qualityLabel && format.audioQuality && (
                  <label>
                    <input
                      type="radio"
                      value={format.itag}
                      name="radio-button"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                      onChange={(e) => setValueSelected(e.target.value)}
                    />
                    {format.qualityLabel}
                  </label>
                )}
              </div>
            ))}
          </div>
        </div>
      </fieldset>
    </div>
  );
}
