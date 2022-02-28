import { useRef } from "react";
import RectangularButton from "./RectangularButton";

interface RectangularButtonListProps {
  classNames: string | string[];
  buttonNames: string[];
  whichStartsActive: number;
  setNavbarItemClicked?: React.Dispatch<React.SetStateAction<Number>>;
}

export default function RectangularButtonList(
  props: RectangularButtonListProps
) {
  let lastClicked = useRef<HTMLLIElement | null>(null);

  const handleItemClick = (index: number, e: React.MouseEvent) => {
    //Remove the active class from the last clicked LI element, then
    //change the lastClick ref to point towards the recently clicked
    //element and add the active class, next switch the index in the
    //parent state

    if (lastClicked.current !== null) {
      lastClicked.current.classList.remove("active");
    }

    lastClicked.current = e.currentTarget as HTMLLIElement;

    lastClicked.current.classList.add("active");

    if (props.setNavbarItemClicked) props.setNavbarItemClicked(index);
  };

  return (
    <ul className={[props.classNames].join(" ")}>
      {props.buttonNames.map((name, index) => {
        return (
          <RectangularButton
            refToLi={
              index === props.whichStartsActive ? lastClicked : undefined
            }
            additionalClasses={
              index === props.whichStartsActive ? ["active"] : ""
            }
            text={name}
            onClickCallback={(e) => handleItemClick(index, e)}
            key={index}
          />
        );
      })}
    </ul>
  );
}
