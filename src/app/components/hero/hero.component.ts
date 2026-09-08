import { Component } from "@angular/core";

@Component({
	selector: "app-hero",
	standalone: true,
	imports: [],
	template: `
		<section
			class="min-h-[92vh] flex flex-col justify-center relative overflow-hidden px-5 md:px-6 pt-24 pb-16 md:py-24"
			style="background: linear-gradient(135deg, #0a1f14 0%, #1a3a2a 50%, #0f2a1e 100%)"
		>
			<!-- Ambient lighting -->
			<div class="absolute inset-0 overflow-hidden pointer-events-none">
				<div
					class="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-10 blur-3xl"
					style="background: #4a7c59"
				></div>
				<div
					class="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
					style="background: #2d6a4f"
				></div>
			</div>

			<!-- Floating cards on Desktop -->
			<div class="absolute inset-0 pointer-events-none hidden xl:block">
				@for (card of frustrationCards; track card.text) {
					<div
						[class]="
							'absolute liquid-glass p-4 rounded-2xl max-w-[240px] border border-white/10 shadow-2xl animate-float opacity-50 hover:opacity-100 transition-opacity duration-500 pointer-events-auto cursor-default ' +
							card.position
						"
						[style.animation-delay]="card.delay"
					>
						<p class="text-white/85 text-xs sm:text-sm italic leading-relaxed">"{{ card.text }}"</p>
						<div class="mt-2 flex items-center gap-2">
							<div class="w-1.5 h-1.5 rounded-full bg-brand-violet"></div>
							<span class="text-[10px] uppercase tracking-wider text-white/50 font-bold">{{ card.author }}</span>
						</div>
					</div>
				}
			</div>

			<div class="relative z-10 text-center max-w-4xl mx-auto w-full">
				<!-- Availability Pill -->
				<div class="inline-flex items-center gap-2 liquid-glass text-white/80 text-xs sm:text-sm font-medium px-4 py-2 rounded-full mb-6 sm:mb-8">
					<span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
					<span>Disponibile in presenza a <strong>Nettuno & Anzio</strong> e <strong>Online</strong></span>
				</div>

				<!-- Main Headline -->
				<h1 class="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-[1.15] tracking-tight mb-6 sm:mb-8">
					Matematica e Fisica possono essere semplici.<br />
					<span class="gradient-text">Serve solo il modo giusto di spiegarle.</span>
				</h1>

				<!-- Subhead -->
				<div class="max-w-2xl mx-auto mb-8 sm:mb-10">
					<p class="text-base sm:text-lg md:text-xl text-white/80 font-normal leading-relaxed">
						Spiegazioni visive su iPad, logica senza formule a memoria e zero giudizi. 
						Un supporto concreto per ritrovare sicurezza nello studio, senza ansie né tensioni in famiglia.
					</p>
				</div>

				<!-- Direct Call to Actions -->
				<div class="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-10 sm:mb-12 max-w-md mx-auto sm:max-w-none">
					<a
						href="#prenota"
						class="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-br from-brand-purple to-brand-indigo text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-lg shadow-brand-purple/35 hover:-translate-y-0.5 hover:shadow-brand-purple/50 transition-all no-underline"
					>
						<span>📅 Prenota una sessione</span>
					</a>

					<a
						href="https://wa.me/393889898382"
						target="_blank"
						class="w-full sm:w-auto inline-flex items-center justify-center gap-2 liquid-glass hover:bg-white/10 border border-white/20 text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl transition-all no-underline"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="18"
							fill="currentColor"
							viewBox="0 0 24 24"
							class="text-emerald-400"
						>
							<path
								d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
							/>
						</svg>
						<span>Scrivimi su WhatsApp</span>
					</a>
				</div>

				<!-- Mobile & Tablet Scenarios Pill Preview -->
				<div class="xl:hidden grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto mb-10 text-left">
					<div class="liquid-glass p-3.5 rounded-xl border border-white/10">
						<div class="flex items-center gap-2 mb-1">
							<span class="text-xs font-bold uppercase tracking-wider text-brand-violet">Per lo studente</span>
						</div>
						<p class="text-white/75 text-xs leading-relaxed italic">"In classe vanno veloci e ti vergogni a chiedere? Qui rispieghiamo tutto senza fretta."</p>
					</div>

					<div class="liquid-glass p-3.5 rounded-xl border border-white/10">
						<div class="flex items-center gap-2 mb-1">
							<span class="text-xs font-bold uppercase tracking-wider text-brand-violet">Per il genitore</span>
						</div>
						<p class="text-white/75 text-xs leading-relaxed italic">"Basta pomeriggi di tensione sui compiti: un supporto chiaro e mirato all'autonomia."</p>
					</div>
				</div>

				<!-- 3 Concrete Highlights -->
				<div class="flex flex-wrap gap-6 sm:gap-10 justify-center opacity-85">
					<div class="text-center">
						<div class="text-lg sm:text-xl font-extrabold text-white tracking-tight">STUDENTE</div>
						<div class="text-xs text-brand-violet font-bold uppercase tracking-wide">Comprensione & Fiducia</div>
					</div>
					<div class="text-center">
						<div class="text-lg sm:text-xl font-extrabold text-white tracking-tight">GENITORE</div>
						<div class="text-xs text-brand-violet font-bold uppercase tracking-wide">Serenità & Costanza</div>
					</div>
					<div class="text-center">
						<div class="text-lg sm:text-xl font-extrabold text-white tracking-tight">METODO</div>
						<div class="text-xs text-brand-violet font-bold uppercase tracking-wide">Pratico & Visivo</div>
					</div>
				</div>
			</div>

			<!-- Scroll indicator -->
			<div class="mt-12 flex justify-center">
				<a
					href="#metodo"
					class="inline-flex flex-col items-center gap-1 text-white/40 hover:text-white/80 transition-colors no-underline text-xs"
				>
					<span>Scopri come funziona</span>
					<svg
						class="w-5 h-5 animate-bounce"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M19 9l-7 7-7-7"
						></path>
					</svg>
				</a>
			</div>
		</section>
	`,
	styles: [
		`
			@keyframes float {
				0%,
				100% {
					transform: translateY(0px) rotate(0deg);
				}
				50% {
					transform: translateY(-16px) rotate(1deg);
				}
			}
			.animate-float {
				animation: float 6s ease-in-out infinite;
			}
		`
	]
})
export class HeroComponent {
	frustrationCards = [
		{
			text: "In classe vanno troppo veloci e mi perdo i passaggi intermedi.",
			author: "Uno Studente",
			position: "top-[16%] left-[4%]",
			delay: "0s"
		},
		{
			text: "A casa spiegare matematica finisce sempre per creare tensioni.",
			author: "Un Genitore",
			position: "bottom-[22%] left-[6%]",
			delay: "1.5s"
		},
		{
			text: "Studio ore, ma davanti al compito mi blocco e vado nel panico.",
			author: "Uno Studente",
			position: "top-[18%] right-[5%]",
			delay: "0.8s"
		},
		{
			text: "Vorrei che trovasse qualcuno capace di spiegargli le cose con calma.",
			author: "Un Genitore",
			position: "bottom-[24%] right-[6%]",
			delay: "2.2s"
		}
	];
}
