export class Alert {
  variant
  text
  show

  constructor(variant, text, show = true) {
    this.variant = variant;
    this.text = text;
    this.show = show;
  }
}
