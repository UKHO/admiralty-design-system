// import { Component, h, Prop, Host, Element } from "@stencil/core";
// import { MouseEvent } from "react";
//
// @Component({
//   tag: 'admiralty-tooltip-wrapper',
//   styleUrl: 'tooltip.scss',
//   scoped: true,
// })
// export class TooltipWrapperComponent {
//   @Prop() tooltipContent: string;
//
//   private tooltipElement: HTMLAdmiraltyTooltipElement;
//
//   @Element() hostElement!: HTMLElement;
//
//   connectedCallback() {
//     this.createTooltipElement();
//     this.addEventListeners();
//   }
//
//   disconnectedCallback() {
//     this.removeTooltipElement();
//   }
//
//   private createTooltipElement() {
//     this.tooltipElement = document.createElement('admiralty-tooltip');
//     this.tooltipElement.tooltipContent = this.tooltipContent;
//     this.tooltipElement.tooltipContent = this.tooltipContent;
//     document.body.appendChild(this.tooltipElement);
//   }
//
//   private removeTooltipElement() {
//     if (this.tooltipElement) {
//       document.body.removeChild(this.tooltipElement);
//     }
//   }
//
//   private addEventListeners() {
//     this.hostElement.addEventListener('mouseenter', this.showTooltip.bind(this))
//     this.hostElement.addEventListener('mouseleave', this.hideTooltip.bind(this))
//     this.hostElement.addEventListener('mousemove', this.updateTooltipPosition.bind(this))
//   }
//
//   private showTooltip() {
//     if (this.tooltipElement) {
//       this.tooltipElement.visible = true;
//       this.tooltipElement.classList.add('visible');
//     }
//   }
//
//   private hideTooltip() {
//     if (this.tooltipElement) {
//       this.tooltipElement.visible = false;
//       this.tooltipElement.classList.remove('visible');
//     }
//   }
//
//
//   private updateTooltipPosition(event: MouseEvent) {
//     if (this.tooltipElement) {
//       this.tooltipElement.x = event.clientX;
//       this.tooltipElement.y = event.clientY;
//     }
//   }
//
//   render() {
//     return (
//       <Host>
//         <slot></slot>
//       </Host>
//     )
//   }
// }
