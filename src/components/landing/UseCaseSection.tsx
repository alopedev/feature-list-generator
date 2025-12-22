'use client';

/**
 * UseCaseSection Component
 *
 * Editorial-style use case showcase with alternating layouts and
 * refined typography. Inspired by high-end tech publications.
 */
export default function UseCaseSection(props?: React.HTMLAttributes<HTMLElement>) {
  const useCases = [
    {
      number: '01',
      title: 'Upload & Extract',
      description:
        'Drop your PDF or DOCX proposal and watch as AI instantly identifies every feature, requirement, and specification. No manual reading required.',
      color: 'gold',
      gradient: 'from-gold/10 to-gold/5',
      accentColor: 'bg-gold',
    },
    {
      number: '02',
      title: 'Review & Refine',
      description:
        'AI gets you 90% there. You perfect the remaining 10%. Edit titles, adjust categories, add acceptance criteria, or remove false positives with intuitive controls.',
      color: 'blue',
      gradient: 'from-blue/10 to-blue/5',
      accentColor: 'bg-blue',
    },
    {
      number: '03',
      title: 'Export Anywhere',
      description:
        'Generate polished Excel spreadsheets, CSV files, or Markdown documents. One click. Multiple formats. Ready for your PM tools, clients, or team.',
      color: 'orange',
      gradient: 'from-orange/10 to-orange/5',
      accentColor: 'bg-orange',
    },
  ];

  return (
    <section
      role="region"
      className="relative bg-gradient-to-b from-white via-[#faf8f3] to-white py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden"
      {...props}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue/5 rounded-full blur-3xl" />
      </div>

      {/* Content container */}
      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-24 lg:mb-32">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 backdrop-blur-sm rounded-full border border-gold/20 mb-6">
            <div className="w-1.5 h-1.5 bg-gold rounded-full" />
            <span className="text-sm font-medium text-gray-700 tracking-wide uppercase">
              Three Simple Steps
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            See It In Action
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-light">
            From lengthy proposal to structured feature list in under a minute.
            No complex setup. No learning curve.
          </p>
        </div>

        {/* Use cases grid */}
        <div className="space-y-24 sm:space-y-32 lg:space-y-40">
          {useCases.map((useCase, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={useCase.number}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Text content */}
                <div
                  className={`space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  {/* Number badge */}
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${useCase.gradient} border border-${useCase.color}/20 flex items-center justify-center`}
                    >
                      <span className={`text-2xl sm:text-3xl font-bold text-${useCase.color}`}>
                        {useCase.number}
                      </span>
                    </div>

                    {/* Vertical connector line (except for last item) */}
                    {index < useCases.length - 1 && (
                      <div className="hidden lg:block absolute left-[39px] mt-20 w-0.5 h-32 bg-gradient-to-b from-gray-300 to-transparent" />
                    )}
                  </div>

                  {/* Heading and description */}
                  <div>
                    <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                      {useCase.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {useCase.description}
                    </p>
                  </div>

                  {/* Feature highlights */}
                  <div className="flex flex-wrap gap-2">
                    {index === 0 && (
                      <>
                        <span className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                          PDF Support
                        </span>
                        <span className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                          DOCX Support
                        </span>
                        <span className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                          Claude AI
                        </span>
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <span className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                          Drag & Drop
                        </span>
                        <span className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                          Inline Editing
                        </span>
                        <span className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                          Categories
                        </span>
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <span className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                          Excel
                        </span>
                        <span className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                          CSV
                        </span>
                        <span className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                          Markdown
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {/* Visual placeholder */}
                <div
                  className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  <div className="relative group">
                    {/* Main visual container */}
                    <div
                      className={`aspect-[4/3] rounded-3xl bg-gradient-to-br ${useCase.gradient} border border-gray-200 shadow-xl overflow-hidden relative`}
                    >
                      {/* Mockup content */}
                      <div className="absolute inset-0 p-8 flex flex-col">
                        {/* Simulated window chrome */}
                        <div className="flex items-center gap-2 mb-6">
                          <div className="w-3 h-3 rounded-full bg-red-400/60" />
                          <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                          <div className="w-3 h-3 rounded-full bg-green-400/60" />
                        </div>

                        {/* Content based on use case */}
                        {index === 0 && (
                          <div className="space-y-4">
                            {/* Upload area simulation */}
                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-dashed border-gray-300">
                              <div className="text-center space-y-2">
                                <svg
                                  className="w-12 h-12 mx-auto text-gray-400"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                  />
                                </svg>
                                <div className="text-sm text-gray-600 font-medium">
                                  Drop PDF or DOCX
                                </div>
                              </div>
                            </div>
                            {/* File list */}
                            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 space-y-2">
                              <div className="h-3 bg-gray-300 rounded w-3/4" />
                              <div className="h-3 bg-gray-200 rounded w-1/2" />
                            </div>
                          </div>
                        )}

                        {index === 1 && (
                          <div className="space-y-3">
                            {/* Table-like feature list */}
                            {[1, 2, 3, 4].map((item) => (
                              <div
                                key={item}
                                className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200 flex items-center gap-3"
                              >
                                <div className="w-6 h-6 rounded bg-blue/20 flex-shrink-0" />
                                <div className="flex-1 space-y-2">
                                  <div className="h-2.5 bg-gray-300 rounded w-2/3" />
                                  <div className="h-2 bg-gray-200 rounded w-1/2" />
                                </div>
                                <div className="w-8 h-8 rounded-lg bg-gray-100 flex-shrink-0" />
                              </div>
                            ))}
                          </div>
                        )}

                        {index === 2 && (
                          <div className="space-y-4">
                            {/* Export format cards */}
                            <div className="grid grid-cols-3 gap-3">
                              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200 text-center">
                                <div className="w-10 h-10 mx-auto mb-2 bg-green-100 rounded-lg" />
                                <div className="h-2 bg-gray-300 rounded w-3/4 mx-auto" />
                              </div>
                              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200 text-center">
                                <div className="w-10 h-10 mx-auto mb-2 bg-blue-100 rounded-lg" />
                                <div className="h-2 bg-gray-300 rounded w-3/4 mx-auto" />
                              </div>
                              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200 text-center">
                                <div className="w-10 h-10 mx-auto mb-2 bg-orange-100 rounded-lg" />
                                <div className="h-2 bg-gray-300 rounded w-3/4 mx-auto" />
                              </div>
                            </div>
                            {/* Download button */}
                            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200 flex items-center justify-center gap-2">
                              <div className="w-5 h-5 bg-orange rounded" />
                              <div className="h-3 bg-gray-300 rounded w-24" />
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Accent gradient overlay */}
                      <div
                        className={`absolute inset-0 ${useCase.accentColor} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                      />
                    </div>

                    {/* Floating accent element */}
                    <div
                      className={`absolute -bottom-4 -right-4 w-24 h-24 ${useCase.accentColor} opacity-10 rounded-2xl rotate-12 -z-10`}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA hint */}
        <div className="mt-24 sm:mt-32 text-center">
          <p className="text-gray-500 text-sm font-medium">
            Ready to streamline your workflow?
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-gold">
            <span className="text-sm font-semibold">Try it now</span>
            <svg
              className="w-4 h-4 animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
