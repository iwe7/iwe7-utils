

/**
 * 转化成RMB元字符串
 * @param digits 当数字类型时，允许指定小数点后数字的个数，默认2位小数
 */
export function yuan(value: any, digits: number = 2): string {
  if (typeof value === "number") value = value.toFixed(digits);
  return `&yen ${value}`;
}

export function fixedZero(val) {
  return val * 1 < 10 ? `0${val}` : val;
}

export function deepGet(obj: any, path: string[], defaultValue?: any) {
  if (!obj || path == null || path.length === 0) return defaultValue;
  if (path.length === 1) {
    const checkObj = obj[path[0]];
    return typeof checkObj === "undefined" ? defaultValue : checkObj;
  }
  return path.reduce((o, k) => o[k], obj) || defaultValue;
}

export function deepCopy(obj: any) {
  return JSON.parse(JSON.stringify(obj));
}

export function copy(value: string): Promise<string> {
  return new Promise<string>((resolve, reject): void => {
    let copyTextArea = null as HTMLTextAreaElement;
    try {
      copyTextArea = document.createElement("textarea");
      copyTextArea.style.height = "0px";
      copyTextArea.style.opacity = "0";
      copyTextArea.style.width = "0px";
      document.body.appendChild(copyTextArea);
      copyTextArea.value = value;
      copyTextArea.select();
      document.execCommand("copy");
      resolve(value);
    } finally {
      if (copyTextArea && copyTextArea.parentNode) {
        copyTextArea.parentNode.removeChild(copyTextArea);
      }
    }
  });
}

export function isNum(value: string | number): boolean {
  return /^((-?\d+\.\d+)|(-?\d+)|(-?\.\d+))$/.test(value.toString());
}

export function isInt(value: string | number): boolean {
  return isNum(value) && parseInt(value.toString(), 10) == value;
}

export function isDecimal(value: string | number): boolean {
  return isNum(value) && !isInt(value);
}

export function isIdCard(value: any): boolean {
  let reg = new RegExp("/(^d{15}$)|(^d{17}([0-9]|X)$)/i");
  return typeof value === "string" && reg.test(value);
}

export function isMobile(value: any): boolean {
  let reg = new RegExp(
    "/^(0|+?86|17951)?(13[0-9]|15[0-9]|17[0678]|18[0-9]|14[57])[0-9]{8}$/"
  );
  return typeof value === "string" && reg.test(value);
}
