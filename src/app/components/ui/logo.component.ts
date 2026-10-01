import { Component, Input } from "@angular/core";

@Component({
	selector: "app-logo",
	standalone: true,
	imports: [],
	template: `
		<div class="flex items-center gap-2 select-none group">
			<div
				class="relative flex items-center justify-center transition-all duration-500 group-hover:scale-110"
				[style.width]="size + 'px'"
				[style.height]="size + 'px'"
			>
				<div class="absolute inset-0 bg-gradient-to-tr from-brand-purple to-brand-indigo rounded-xl opacity-20 blur-md group-hover:opacity-40 transition-opacity"></div>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 100 100"
					fill="none"
					class="w-full h-full relative z-10 drop-shadow-[0_0_15px_rgba(116,176,138,0.55)]"
				>
					<defs>
						<linearGradient
							id="piGradient"
							x1="0%"
							y1="0%"
							x2="100%"
							y2="100%"
						>
							<stop
								offset="0%"
								style="stop-color:#a8d5b5;stop-opacity:1"
							/>
							<stop
								offset="60%"
								style="stop-color:#74b08a;stop-opacity:1"
							/>
							<stop
								offset="100%"
								style="stop-color:#4a7c59;stop-opacity:1"
							/>
						</linearGradient>
						<linearGradient
							id="piOrbitGradient"
							x1="0%"
							y1="100%"
							x2="100%"
							y2="0%"
						>
							<stop
								offset="0%"
								style="stop-color:#4a7c59;stop-opacity:0.2"
							/>
							<stop
								offset="50%"
								style="stop-color:#74b08a;stop-opacity:0.9"
							/>
							<stop
								offset="100%"
								style="stop-color:#a8d5b5;stop-opacity:0.4"
							/>
						</linearGradient>
					</defs>

					<!-- Orbital Scientific Ring (Lab) -->
					<g transform="rotate(-28 50 50)">
						<ellipse
							cx="50"
							cy="50"
							rx="38"
							ry="13"
							fill="none"
							stroke="url(#piOrbitGradient)"
							stroke-width="2.5"
							stroke-linecap="round"
							stroke-dasharray="125 10 25 10"
							class="opacity-80"
						/>
						<circle
							cx="88"
							cy="50"
							r="3"
							fill="#a8d5b5"
						/>
						<circle
							cx="12"
							cy="50"
							r="2"
							fill="#74b08a"
						/>
					</g>

					<!-- Stylized Greek Pi (π) Symbol -->
					<!-- Crossbar -->
					<path
						d="M 21,34 C 27,29.5 37,31 50,31 L 75,31 C 79,31 82,32 83,34"
						stroke="url(#piGradient)"
						stroke-width="7"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<!-- Left Leg -->
					<path
						d="M 37,31 L 37,61 C 37,68 31,70 26,67.5"
						stroke="url(#piGradient)"
						stroke-width="7"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<!-- Right Leg -->
					<path
						d="M 63,31 L 63,66 C 63,68.5 66.5,70.5 71,69.5"
						stroke="url(#piGradient)"
						stroke-width="7"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</div>

			@if (!hideText) {
				<div class="flex flex-col justify-center">
					<span
						class="text-white font-extrabold tracking-tight leading-none"
						[style.fontSize]="size * 0.48 + 'px'"
					>
						FraVenex<span class="text-brand-violet">.PiLab</span>
					</span>
				</div>
			}
		</div>
	`
})
export class LogoComponent {
	@Input() size: number = 40;
	@Input() hideText: boolean = false;
}
