import { Heading } from "@/shared/interfaces";
import { useMemo } from "react";
import { richTextParser } from "../parser";
import { makeClassname } from "@/shared/components";

export function HeadingComponent(props: Heading): JSX.Element {
    const { level, children } = props 

    const Content = useMemo(() => {
        return children.map(item => richTextParser(item))
    }, [children])

    switch(level) {
        case 1: return <h2 className={makeClassname('heading', "heading--1")}>{Content}</h2>
        case 2: return <h3 className={makeClassname('heading', "heading--2")}>{Content}</h3>
        case 3: return <h4 className={makeClassname('heading', "heading--3")}>{Content}</h4>
        case 4: return <h5 className={makeClassname('heading', "heading--4")}>{Content}</h5>
        case 5: return <h6 className={makeClassname('heading', "heading--5")}>{Content}</h6>

        default:
        case 0: return <h2 className={makeClassname('heading', "heading--0")}>{Content}</h2>
    }
}