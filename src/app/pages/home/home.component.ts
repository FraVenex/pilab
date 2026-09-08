import { Component } from "@angular/core";
import { HeroComponent } from "../../components/hero/hero.component";
import { MethodComponent } from "../../components/method/method.component";
import { PricingComponent } from "../../components/pricing/pricing.component";
import { ReviewsComponent } from "../../components/reviews/reviews.component";
import { AboutComponent } from "../../components/about/about.component";

@Component({
	selector: "app-home",
	standalone: true,
	imports: [HeroComponent, MethodComponent, PricingComponent, ReviewsComponent, AboutComponent],
	template: `
		<main class="min-h-screen bg-base-100">
			<app-hero id="hero"></app-hero>
			<app-method id="metodo"></app-method>
			<app-pricing id="prezzi"></app-pricing>
			<app-reviews id="recensioni"></app-reviews>
			<app-about id="chi-sono"></app-about>
		</main>
	`
})
export class HomeComponent {}
