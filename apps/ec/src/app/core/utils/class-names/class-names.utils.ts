const validateClass = (mix: any) => {
  let str = '';
  let k;
  let y;

  if (typeof mix === 'string' || typeof mix === 'number') {
    str += mix;
  } else if (typeof mix === 'object') {
    if (Array.isArray(mix)) {
      for (k = 0; k < mix.length; k++) {
        if (mix[k]) {
          if ((y = validateClass(mix[k]))) {
            str && (str += ' ');
            str += y;
          }
        }
      }
    } else {
      for (k in mix) {
        if (mix[k]) {
          str && (str += ' ');
          str += k;
        }
      }
    }
  }

  return str;
};

export const classNames = <T>(...args: T[]) => {
  let str = '';
  let i = 0;
  let tmp;
  let x;

  while (i < args.length) {
    if ((tmp = args[i++])) {
      if ((x = validateClass(tmp))) {
        str && (str += ' ');
        str += x;
      }
    }
  }
  return str;
};

export default classNames;
