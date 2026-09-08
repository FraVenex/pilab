import { Component, signal } from "@angular/core";

@Component({
	selector: "app-method",
	standalone: true,
	imports: [],
	template: `
		<section
			class="py-16 md:py-24 px-5 md:px-8 bg-dark-900 relative overflow-hidden"
			id="metodo"
		>
			<!-- Ambient lighting -->
			<div class="absolute top-1/2 left-0 w-80 h-80 bg-brand-purple/10 rounded-full blur-3xl pointer-events-none"></div>
			<div class="absolute bottom-0 right-0 w-80 h-80 bg-brand-indigo/10 rounded-full blur-3xl pointer-events-none"></div>

			<div class="max-w-6xl mx-auto relative z-10">
				<!-- Header -->
				<div class="text-center max-w-3xl mx-auto mb-12 md:mb-16">
					<p class="text-xs font-bold tracking-widest uppercase text-brand-violet mb-3">Un approccio concreto</p>
					<h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-5">
						Risolviamo ciò che a scuola e a casa spesso si blocca.
					</h2>
					<p class="text-white/65 text-base md:text-lg leading-relaxed">
						Nessun trucco miracoloso o metodo misterioso: solo logica chiara, pazienza e un sistema pratico nato da chi ha affrontato le stesse difficoltà sulla propria pelle.
					</p>
				</div>

				<!-- 3 Concrete Scenarios -->
				<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
					<div class="liquid-glass rounded-2xl p-6 md:p-7 border border-white/10 hover:border-brand-violet/30 transition-all duration-300">
						<div class="w-12 h-12 rounded-xl bg-brand-purple/20 flex items-center justify-center text-2xl mb-5 text-brand-violet">
							🏫
						</div>
						<h3 class="text-lg font-bold text-white mb-2.5">A scuola si va di fretta</h3>
						<p class="text-white/60 text-sm leading-relaxed">
							In classi numerose i programmi corrono e non c'è sempre il tempo per chiarire i passaggi intermedi. Qui ci fermiamo su ogni singolo punto finché non è davvero limpido.
						</p>
					</div>

					<div class="liquid-glass rounded-2xl p-6 md:p-7 border border-white/10 hover:border-brand-violet/30 transition-all duration-300">
						<div class="w-12 h-12 rounded-xl bg-brand-purple/20 flex items-center justify-center text-2xl mb-5 text-brand-violet">
							🏠
						</div>
						<h3 class="text-lg font-bold text-white mb-2.5">A casa si creano tensioni</h3>
						<p class="text-white/60 text-sm leading-relaxed">
							Anche con tutta la buona volontà, spiegare matematica o fisica a un figlio dopo il lavoro finisce per generare ansia e discussioni. Un supporto esterno sereno fa ritrovare la tranquillità in famiglia.
						</p>
					</div>

					<div class="liquid-glass rounded-2xl p-6 md:p-7 border border-white/10 hover:border-brand-violet/30 transition-all duration-300">
						<div class="w-12 h-12 rounded-xl bg-brand-purple/20 flex items-center justify-center text-2xl mb-5 text-brand-violet">
							💡
						</div>
						<h3 class="text-lg font-bold text-white mb-2.5">Il metodo collaudato</h3>
						<p class="text-white/60 text-sm leading-relaxed">
							Avendo studiato Fisica, so bene dove e perché la mente si blocca davanti a formule astratte. Trasformiamo la teoria in esempi visivi e passaggi logici facili da assimilare.
						</p>
					</div>
				</div>

				<!-- Dual Perspectives: Studente vs Genitore -->
				<div class="liquid-glass rounded-3xl p-6 sm:p-8 md:p-12 border border-white/12 relative overflow-hidden">
					<div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 pb-6 border-b border-white/10">
						<div>
							<span class="text-xs font-bold uppercase tracking-wider text-brand-violet">Due prospettive, un unico obiettivo</span>
							<h3 class="text-2xl sm:text-3xl font-extrabold text-white mt-1">Cosa cambia nella pratica?</h3>
						</div>

						<!-- Tab selector on mobile/tablet -->
						<div class="flex bg-white/5 p-1 rounded-xl border border-white/10 w-full sm:w-auto self-stretch sm:self-auto">
							<button
								(click)="activeTab.set('student')"
								class="flex-1 sm:flex-initial px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer border-none outline-none"
								[class]="activeTab() === 'student' ? 'bg-gradient-to-br from-brand-purple to-brand-indigo text-white shadow-lg' : 'bg-transparent text-white/50 hover:text-white'"
							>
								Per lo Studente
							</button>
							<button
								(click)="activeTab.set('parent')"
								class="flex-1 sm:flex-initial px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer border-none outline-none"
								[class]="activeTab() === 'parent' ? 'bg-gradient-to-br from-brand-purple to-brand-indigo text-white shadow-lg' : 'bg-transparent text-white/50 hover:text-white'"
							>
								Per il Genitore
							</button>
						</div>
					</div>

					@if (activeTab() === 'student') {
						<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
							<div class="bg-white/[0.03] border border-white/8 rounded-2xl p-5 sm:p-6">
								<div class="text-2xl mb-3">🗣️</div>
								<h4 class="text-white font-bold text-base mb-1.5">Zero giudizi o imbarazzi</h4>
								<p class="text-white/60 text-sm leading-relaxed">
									Non esistono domande stupide. Puoi chiedermi di ripetere lo stesso passaggio 10 volte finché non lo senti davvero tuo.
								</p>
							</div>

							<div class="bg-white/[0.03] border border-white/8 rounded-2xl p-5 sm:p-6">
								<div class="text-2xl mb-3">📲</div>
								<h4 class="text-white font-bold text-base mb-1.5">Appunti su iPad subito tuoi</h4>
								<p class="text-white/60 text-sm leading-relaxed">
									Ogni schema, grafico ed esercizio viene scritto su iPad e inviato in PDF direttamente sul tuo telefono a fine sessione.
								</p>
							</div>

							<div class="bg-white/[0.03] border border-white/8 rounded-2xl p-5 sm:p-6">
								<div class="text-2xl mb-3">💬</div>
								<h4 class="text-white font-bold text-base mb-1.5">Supporto WhatsApp tra le lezioni</h4>
								<p class="text-white/60 text-sm leading-relaxed">
									Se ti blocchi facendo un esercizio a casa prima della verifica, mandi una foto su WhatsApp e lo sblocchiamo insieme.
								</p>
							</div>
						</div>
					} @else {
						<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
							<div class="bg-white/[0.03] border border-white/8 rounded-2xl p-5 sm:p-6">
								<div class="text-2xl mb-3">🧘</div>
								<h4 class="text-white font-bold text-base mb-1.5">Serenità in casa</h4>
								<p class="text-white/60 text-sm leading-relaxed">
									Basta pomeriggi consumati a litigare su compiti e verifiche. Lo studio torna a essere un momento costruttivo e non una sfida familiare.
								</p>
							</div>

							<div class="bg-white/[0.03] border border-white/8 rounded-2xl p-5 sm:p-6">
								<div class="text-2xl mb-3">🎯</div>
								<h4 class="text-white font-bold text-base mb-1.5">Obiettivo: autonomia reale</h4>
								<p class="text-white/60 text-sm leading-relaxed">
									Il traguardo non è fare i compiti al posto suo, ma fornire un metodo di ragionamento che permetta di affrontare verifiche e interrogazioni in autonomia.
								</p>
							</div>

							<div class="bg-white/[0.03] border border-white/8 rounded-2xl p-5 sm:p-6">
								<div class="text-2xl mb-3">🤝</div>
								<h4 class="text-white font-bold text-base mb-1.5">Trasparenza e aggiornamento</h4>
								<p class="text-white/60 text-sm leading-relaxed">
									Sarete sempre aggiornati sull'andamento, sulle lacune colmate e sui punti su cui continuare a lavorare, con la massima chiarezza.
								</p>
							</div>
						</div>
					}

					<!-- Bottom Action Callout -->
					<div class="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
						<div class="text-center sm:text-left">
							<p class="text-white font-semibold text-sm sm:text-base">Vuoi capire se questo metodo è adatto alla tua situazione?</p>
							<p class="text-white/50 text-xs sm:text-sm">Possiamo fare due chiacchiere informali su WhatsApp o prenotare una prima sessione.</p>
						</div>
						<div class="flex items-center gap-3 w-full sm:w-auto">
							<a
								href="https://wa.me/393889898382"
								target="_blank"
								class="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-white/[0.08] hover:bg-white/[0.14] border border-white/15 text-white font-semibold text-xs sm:text-sm px-4 py-2.5 rounded-xl no-underline transition-all"
							>
								<span>Chiedi info su WhatsApp</span>
							</a>
							<a
								href="#prenota"
								class="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-gradient-to-br from-brand-purple to-brand-indigo text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl no-underline shadow-lg shadow-brand-purple/30 hover:shadow-brand-purple/50 transition-all"
							>
								<span>Vedi tariffe & prenota</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	`,
	styles: [
		`
			@keyframes fadeIn {
				from {
					opacity: 0;
					transform: translateY(6px);
				}
				to {
					opacity: 1;
					transform: translateY(0);
				}
			}
			.animate-fadeIn {
				animation: fadeIn 0.3s ease-out forwards;
			}
		`
	]
})
export class MethodComponent {
	activeTab = signal<"student" | "parent">("student");
}
