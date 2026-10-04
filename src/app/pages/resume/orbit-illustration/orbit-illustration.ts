import { Component } from '@angular/core';

/** Artboard size (px) of the Figma frame "Um universo ao redor de um núcleo". */
const WIDTH = 568;
const HEIGHT = 410;

interface Layer {
  src: string;
  /** Position and size as a percentage of the artboard, so the art scales with its container. */
  left: number;
  top: number;
  width: number;
  height: number;
  /** CSS `inset` for the image inside its box; negative where the SVG overflows (stroke). */
  inset: string;
}

function layer(
  name: string,
  x: number,
  y: number,
  width: number,
  height = width,
  inset = '0',
): Layer {
  return {
    src: `assets/portfolio/${name}.svg`,
    left: (x / WIDTH) * 100,
    top: (y / HEIGHT) * 100,
    width: (width / WIDTH) * 100,
    height: (height / HEIGHT) * 100,
    inset,
  };
}

@Component({
  selector: 'app-orbit-illustration',
  host: { class: 'block' },
  templateUrl: './orbit-illustration.html',
})
export class OrbitIllustration {
  /** Back to front. */
  protected readonly layers: Layer[] = [
    layer('solar-halo', 72.88, -6.12, 422.24),
    layer('outer-orbit', 102, 23, 364),
    layer('inner-orbit', 176.62, 97.62, 214.76),
    layer('open-c-orbit', 134.76, 55.76, 298.48, 298.48, '-0.67% -0.4% -0.67% -0.67%'),
    layer('transverse-orbit', 81.25, 157.68, 405.496, 94.64),
    layer('central-sun', 239.23, 160.23, 89.544),
    layer('satellite', 385.92, 88.52, 8),
    layer('star-3', 56.8, 61.5, 3),
    layer('star-2', 516.88, 287, 2),
  ];

  protected readonly captionLeft = (8 / WIDTH) * 100;
  protected readonly captionTop = (392 / HEIGHT) * 100;
}
