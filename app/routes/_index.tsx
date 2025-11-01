import { Dialog } from "radix-ui";
import { Link } from "react-router";

export default function About() {
	return (
		<main className="min-h-screen bg-white text-stone-900 dark:bg-black dark:text-stone-50">
			<div className="mx-auto max-w-4xl px-6 py-20">
				{/* Header */}
				<header className="flex items-start justify-between">
					<div className="space-y-2">
						<h1 className="font-extrabold text-6xl uppercase leading-none tracking-tight">
							FABIO LIMA
						</h1>
						<p className="font-medium text-sm text-stone-600 dark:text-stone-300">
							Developer — fullstack systems, tooling, and APIs.
						</p>
					</div>
				</header>

				{/* Content */}
				<section className="mt-12 grid grid-cols-1 items-start gap-8 md:grid-cols-3">
					<div id="work" className="md:col-span-2">
						<div className="prose prose-stone dark:prose-invert max-w-none">
							<p className="text-lg">
								I build raw, focused web experiences —
								<span className="block font-mono text-base opacity-75">
									tooling, APIs, and libraries that scale.
								</span>
							</p>

							<ul className="mt-6 space-y-2 text-sm">
								<li>
									<strong>Focus:</strong> performance, correctness, clarity.
								</li>
								<li>
									<strong>Languages:</strong> Ruby, TypeScript, Go.
								</li>
								<li>
									<strong>Approach:</strong> robust systems, readable
									interfaces, pragmatic UX.
								</li>
							</ul>
						</div>
					</div>

					<aside className="space-y-4 md:col-span-1">
						<nav className="flex flex-col gap-3">
							<Link
								className="block px-4 py-2 text-start font-medium text-sm hover:bg-stone-100 dark:hover:bg-white/10"
								to="/work"
							>
								Work
							</Link>

							{/* Contact modal using Radix Dialog */}
							<Dialog.Root>
								<Dialog.Trigger asChild>
									<button
										type="button"
										className="block cursor-pointer px-4 py-2 text-start font-medium text-sm hover:bg-stone-100 dark:hover:bg-white/10"
									>
										Contact
									</button>
								</Dialog.Trigger>
								<Dialog.Portal>
									<Dialog.Overlay className="fixed inset-0 bg-black/40" />
									<Dialog.Content className="-translate-x-1/2 -translate-y-1/2 fixed top-1/2 left-1/2 w-[min(90vw,420px)] border border-stone-200 bg-white p-6 shadow-lg dark:border-stone-700 dark:bg-stone-900">
										<Dialog.Title className="font-semibold text-lg">
											Email or X
										</Dialog.Title>
										{/* <Dialog.Description className="text-sm text-stone-600 dark:text-stone-300 mt-2">
                      Short and to the point — email or X.
                    </Dialog.Description> */}

										<div className="mt-4 space-y-2 text-sm">
											<div>
												<strong>Email:</strong> limavfabio@gmail.com
											</div>
											<div>
												<strong>X:</strong> @limavfabio
											</div>
										</div>

										<div className="mt-6 text-right">
											<Dialog.Close asChild>
												<button
													type="button"
													className="border px-3 py-1 text-sm"
												>
													Close
												</button>
											</Dialog.Close>
										</div>
									</Dialog.Content>
								</Dialog.Portal>
							</Dialog.Root>
						</nav>

						<div className="border-stone-100 border-t pt-4 dark:border-stone-800">
							<div className="text-stone-500 text-xs">Focused stack</div>
							<div className="mt-2 font-mono text-sm text-stone-700 dark:text-stone-200">
								Ruby · Rails · TypeScript · Go
							</div>
						</div>
					</aside>
				</section>
			</div>
		</main>
	);
}
