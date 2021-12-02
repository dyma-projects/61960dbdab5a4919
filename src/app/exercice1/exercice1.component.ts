import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice1",
  templateUrl: "./exercice1.component.html",
  styleUrls: ["./exercice1.component.css"],
})
export class Exercice1Component implements OnInit {
  public interVar = "Interpopolation";
  public title = "balise title du H2";
  constructor() {}

  ngOnInit(): void {}

  public showEvent(event: Event) {
    console.log(event);
  }
}
