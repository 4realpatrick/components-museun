import { useCallback, useLayoutEffect } from "react";
const keyCodeMapping = {
  a: "KeyA",
  b: "KeyB",
  c: "KeyC",
  d: "KeyD",
  e: "KeyE",
  f: "KeyF",
  g: "KeyG",
  h: "KeyH",
  i: "KeyI",
  j: "KeyJ",
  k: "KeyK",
  l: "KeyL",
  m: "KeyM",
  n: "KeyN",
  o: "KeyO",
  p: "KeyP",
  q: "KeyQ",
  r: "KeyR",
  s: "KeyS",
  t: "KeyT",
  u: "KeyU",
  v: "KeyV",
  w: "KeyW",
  x: "KeyX",
  y: "KeyY",
  z: "KeyZ",
  "0": "Digit0",
  "1": "Digit1",
  "2": "Digit2",
  "3": "Digit3",
  "4": "Digit4",
  "5": "Digit5",
  "6": "Digit6",
  "7": "Digit7",
  "8": "Digit8",
  "9": "Digit9",
  "ESC": "Escape",
  "Enter": "Enter"
};
type KeyCodeMappingKey = keyof typeof keyCodeMapping;
type SpecialKey = "Shift" | "Control" | "Alt" | "Command";
/**
 * @description 该hook为一个键盘事件的hook，目前可以绑定的键位最多为2个，当触发键盘事件时会执行对应的回调
 * @param {[KeyCodeMappingKey, SpecialKey?]} keySet keySet为一个数组，最大长度是2，数组的第一位只能为键盘上的字母和数字，数组的第二位只能是Shift、Control、Alt、Command中的一个
 * @param {(e?: KeyboardEvent) => void} callback 触发键盘事件后的回调
 */
export default function useKeyBoardWatchEvent(
  keySet: [KeyCodeMappingKey, SpecialKey?],
  callback: (e?: KeyboardEvent) => void
) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      // 不能用keyCode，这个属性已经在官方被deprecated，doc：https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
      const eventKeyCode = e.code;
      if (keySet.length <= 1) {
        eventKeyCode === keyCodeMapping[keySet[0]] && callback(e);
      } else {
        const isMetaKey = e.metaKey;
        const isShiftKey = e.shiftKey;
        const isContrlKey = e.ctrlKey;
        const isAltKey = e.altKey;
        switch (keySet[1]) {
          case "Alt":
            isAltKey &&
              eventKeyCode === keyCodeMapping[keySet[0]] &&
              callback(e);
            break;
          case "Control":
            isContrlKey &&
              eventKeyCode === keyCodeMapping[keySet[0]] &&
              callback(e);
            break;
          case "Shift":
            isShiftKey &&
              eventKeyCode === keyCodeMapping[keySet[0]] &&
              callback(e);
            break;
          case "Command":
            isMetaKey &&
              eventKeyCode === keyCodeMapping[keySet[0]] &&
              callback(e);
            break;
        }
      }
    },
    [keySet, callback]
  );
  const errorCheck = useCallback(() => {
    let noError = true;
    if (!keySet || !keySet.length) {
      console.error("useKeyBoardWatchEvent Error: invalid keyCodeSet");
      noError = false;
    }
    if (keySet.length > 2) {
      console.error("useKeyBoardWatchEvent Error: keyCodeSet.length must <= 2");
      noError = false;
    }
    if (!(keySet[0] in keyCodeMapping)) {
      console.error(
        "useKeyBoardWatchEvent Error: keyCodeSet[0] doesn't exist in keyCodeMapping"
      );
      noError = false;
    }
    return noError;
  }, []);
  useLayoutEffect(() => {
    if (!errorCheck()) return;
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);
}
