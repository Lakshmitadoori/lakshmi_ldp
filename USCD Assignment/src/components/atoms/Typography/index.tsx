import { Typography as Text, TypographyProps } from "@mui/material"


interface TypoProps extends TypographyProps{
    text:string;
}
export const Typography=({text}:TypoProps)=>{
return(
    <Text>{text}</Text>
)
}