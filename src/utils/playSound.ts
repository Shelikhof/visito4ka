import clickSound from "@/assets/sounds/click.mp3";
import hoverSound from "@/assets/sounds/hover.mp3";

const SOUNDS = {
  click: clickSound,
  hover: hoverSound,
};

const playSound = (sound: keyof typeof SOUNDS) => {
  const audio = new Audio(SOUNDS[sound]);

  audio.play();
};

export default playSound;
