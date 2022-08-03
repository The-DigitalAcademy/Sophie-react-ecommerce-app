import { keyframes } from "@mui/system";

const flipHorizontalBottom = keyframes`
0% {
    -webkit-transform: rotatX(0);
           transform: rotatX(0);
}
100% {
    -webkit-transform: rotatX(-180deg);
            transform: rotatX(-180deg);
}
`;

export const textPopUpTop = keyframes`
0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
    text-shadow: none;
}
100% {
    -webkit-transform: translateY(-10px);
            transform: translateY(-10px);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
    text-shadow: 0 1px 0 #000, 0 2px #000, 0 3px #000, 0 4px #000, 0 5px #000, 0 6px #000, 0 7px #000, 0 8px #000, 0 9px #000;
}
`;

export const slideInBottom = keyframes`
0% {
    -webkit-transform: translateY(50px);
    transform: translateY(50);
    opacity: 0;
}
100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;

}
`;
 export const slideInRight = keyframes`
 0% {
    -webkit-transform: translateY(50px);
    transform: translateY(50);
    opacity: 0;
}
100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
     
 }
 ;`

