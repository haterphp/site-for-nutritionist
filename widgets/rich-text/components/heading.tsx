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
        case 2: return <h2 className={makeClassname('rt-heading', "rt-heading--2")}>{Content}</h2>
        case 3: return <h3 className={makeClassname('rt-heading', "rt-heading--3")}>{Content}</h3>
        case 4: return <h4 className={makeClassname('rt-heading', "rt-heading--4")}>{Content}</h4>
        case 5: return <h5 className={makeClassname('rt-heading', "rt-heading--5")}>{Content}</h5>
        case 6: return <h6 className={makeClassname('rt-heading', "rt-heading--6")}>{Content}</h6>

        default:
        case 1: return <h2 className={makeClassname('rt-heading', "rt-heading--1")}>{Content}</h2>
    }
}