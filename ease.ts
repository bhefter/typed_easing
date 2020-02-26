/*
 * Easing Functions - adapted from https://gist.github.com/gre/1650294
 */
export function linear(t: number) {
  return t;
}

export function easeInQuad(t: number) {
  return t * t;
}

export function easeOutQuad(t: number) {
  return t * (2 - t);
}

export function easeInOutQuad(t: number) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

export function easeInCubic(t: number) {
  return t * t * t;
}

export function easeOutCubic(t: number) {
  return --t * t * t + 1;
}

export function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
}

export function easeInQuart(t: number) {
  return t * t * t * t;
}

export function easeOutQuart(t: number) {
  return 1 - --t * t * t * t;
}

export function easeInOutQuart(t: number) {
  return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
}

export function easeInQuint(t: number) {
  return t * t * t * t * t;
}

export function easeOutQuint(t: number) {
  return 1 + --t * t * t * t * t;
}

export function easeInOutQuint(t: number) {
  return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
}

export function easeInExpo(t: number) {
  return Math.pow(2, 10 * (t - 1));
}

export function easeOutExpo(t: number) {
  return -Math.pow(2, -10 * t) + 1;
}

export function easeInOutExpo(t: number) {
  t = t / 2;
  return Math.pow(2, 10 * (t - 1)) / 2;
}

export function easeInElastic(t: number, p = 0.3) {
  return (
    -Math.pow(2, 10 * (t - 1)) * Math.sin(((t - p / 4) * (2 * Math.PI)) / p) + 1
  );
}

export function easeOutElastic(t: number, p = 0.3) {
  return Math.pow(2, -10 * t) * Math.sin(((t - p / 4) * (2 * Math.PI)) / p) + 1;
}

export function easeInOutElastic(t, p = 0.3) {
  if (t < 0.5) {
    return easeInElastic(t * 2, p);
  } else {
    return easeOutElastic(t * 2, p);
  }
}
