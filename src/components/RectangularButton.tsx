import { MutableRefObject } from "react";
import '../styles/rectangularbutton.scss';

interface RectangularButtonProps
{
    refToLi?: MutableRefObject<HTMLLIElement | null>,
    additionalClasses?: string | string[] ,
    text: string,
    onClickCallback?: CallbackFunction,
   // onClickCallback?(e: React.MouseEvent): void
   key: number
}

interface CallbackFunction{
    (e: React.MouseEvent): void;
}

export default function RectangularButton(props: RectangularButtonProps)
{
    return(
        <li ref={props.refToLi} className={['rectangular-button', props.additionalClasses].join(' ')} onClick={props.onClickCallback}>{props.text}</li>
    );
}