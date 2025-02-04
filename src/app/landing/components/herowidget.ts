import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'hero-widget',
  imports: [ButtonModule, RippleModule],
  templateUrl: './herowidget.html',
  styleUrls: ['./herowidget.css'], // Importa el archivo CSS
})
export class HeroWidget implements OnInit, AfterViewInit, OnDestroy {
  textParts = ['PARTIDAS,', 'PRESUPUESTOS,', 'BASES DE DATOS,', 'INSUMOS,', 'Y', 'ANÁLISIS DE PRECIOS UNITARIOS'];
  currentText = '';
  currentIndex = 0;
  isTyping = true;
  @ViewChild('typedText') typedTextSpan!: ElementRef;
  typingInterval: any;

  ngOnInit() {}

  ngAfterViewInit() {
    this.startTypingAnimation();
  }

  startTypingAnimation() {
    if (!this.typedTextSpan) return; // Seguridad

    let i = 0;
    this.typingInterval = setInterval(() => {
      const currentPart = this.textParts[this.currentIndex];

      if (this.isTyping) {
        if (i <= currentPart.length) {
          this.currentText = currentPart.substring(0, i);
          this.typedTextSpan.nativeElement.textContent = this.currentText;
          i++;
        } else {
          this.isTyping = false;
          i = currentPart.length;
        }
      } else {
        if (i >= 0) {
          this.currentText = currentPart.substring(0, i);
          this.typedTextSpan.nativeElement.textContent = this.currentText;
          i--;
        } else {
          this.isTyping = true;
          this.currentIndex = (this.currentIndex + 1) % this.textParts.length;
          i = 0;
        }
      }
    }, 90);
  }

  ngOnDestroy() {
    clearInterval(this.typingInterval);
  }
}
