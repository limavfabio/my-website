import { Dialog } from "radix-ui";

export default function About() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-stone-900 dark:text-stone-50">
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Header */}
        <header className="flex items-start justify-between">
          <div className="space-y-2">
            <h1 className="text-6xl font-extrabold leading-none tracking-tight uppercase">
              FABIO LIMA
            </h1>
            <p className="text-sm dark:text-stone-300 font-medium text-stone-600">
              Developer — fullstack systems, tooling, and APIs.
            </p>
          </div>
        </header>

        {/* Content */}
        <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div id="work" className="md:col-span-2">
            <div className="prose prose-stone dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed">
                I build raw, focused web experiences — tooling, APIs, and small
                libraries that scale.
              </p>

              <ul className="mt-6 text-sm space-y-2">
                <li>
                  <strong>Focus:</strong> performance, correctness, clarity.
                </li>
                <li><strong>Languages:</strong> Ruby, TypeScript, Go.</li>
                <li>
                  <strong>Approach:</strong> robust systems, readable interfaces,
                  pragmatic UX.
                </li>
              </ul>
            </div>
          </div>

          <aside className="md:col-span-1 space-y-4">
            <nav className="flex flex-col gap-3">
              <a
                className="text-start block px-4 py-2 font-medium text-sm hover:bg-stone-100 dark:hover:bg-white/10"
                href="#work"
              >
                Work
              </a>

              {/* Contact modal using Radix Dialog */}
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <button className="text-start block cursor-pointer px-4 py-2 font-medium text-sm hover:bg-stone-100 dark:hover:bg-white/10">
                    Contact
                  </button>
                </Dialog.Trigger>
                <Dialog.Portal>
                  <Dialog.Overlay className="fixed inset-0 bg-black/40" />
                  <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 p-6 w-[min(90vw,420px)] shadow-lg">
                    <Dialog.Title className="text-lg font-semibold">
                      Get in touch
                    </Dialog.Title>
                    <Dialog.Description className="text-sm text-stone-600 dark:text-stone-300 mt-2">
                      Short and to the point — email or X.
                    </Dialog.Description>

                    <div className="mt-4 space-y-2 text-sm">
                      <div><strong>Email:</strong> hi@limavfabio.dev</div>
                      <div><strong>X:</strong> @limavfabio</div>
                    </div>

                    <div className="mt-6 text-right">
                      <Dialog.Close asChild>
                        <button className="px-3 py-1 border text-sm">
                          Close
                        </button>
                      </Dialog.Close>
                    </div>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
            </nav>

            <div className="pt-4 border-t border-stone-100 dark:border-stone-800">
              <div className="text-xs text-stone-500">Focused stack</div>
              <div className="mt-2 text-sm font-mono text-stone-700 dark:text-stone-200">
                ruby · rails · typescript · go
              </div>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
