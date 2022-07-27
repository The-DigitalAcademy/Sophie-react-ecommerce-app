import { Slide } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { MessageText, PromotionsContainer } from "../../styles/promotions";


const messages = [
    "20% off on your first order!",
    "Summer sale starts now, visit any store",
    "Please like and subscribe :)",
];

export default function Promotions(){
    const [messageIndex, setMessageIndex] = useState(0);
    const [show, setShow] = useState(true);

    useEffect(() => {

        setTimeout(() => {
            setShow(false);
        }, 3000);

        const intervalid = setInterval(() => {
            setMessageIndex(i => (i + 1) % messages.length);

            setShow(true);

            setTimeout(() => {
                setShow(false);
            }, 3000);

        }, 4000);

        return () => {
            clearInterval(intervalid);
        }

    }, []);

    return(
        <PromotionsContainer>
            <Slide direction={ show ? "left" : "right"} in={show}>
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <MessageText>
                        {messages[messageIndex]}
                    </MessageText>
                </Box>
            </Slide>
        </PromotionsContainer>
    );
}