'use client'

import { createRef, PropsWithChildren, RefObject, useState } from "react";
import { SnackbarContext } from "./context";
import { ISnackbarMessageProps, SnackbarMessage } from "./message";

import './index.css'
import { CSSTransition, TransitionGroup } from "react-transition-group";

type SnackbarMessageObject = Required<ISnackbarMessageProps> & { nodeRef: RefObject<HTMLDivElement> }

interface ISnackbarProps extends PropsWithChildren {
    timeout?: number
}

export function SnackbarProvider(props: ISnackbarProps) {
    const { timeout = 2000, children } = props

    const [messages, setMessages] = useState<SnackbarMessageObject[]>([])

    const makeNewMessage = (value: ISnackbarMessageProps): void => {
        const id = Math.random()
        
        setMessages((prev) => [...prev, { id, nodeRef: createRef<HTMLDivElement>(), ...value }])

        setTimeout(setMessages, timeout, (prev: ISnackbarMessageProps[]) => {
            const idx = prev.findIndex(item => item.id === id)

            if (idx !== -1) return [...prev.slice(0, idx), ...prev.slice(idx + 1)]
            return prev
        })
    }

    return (
        <>
            <SnackbarContext.Provider value={{ make: makeNewMessage }}>
                {children}
            </SnackbarContext.Provider>

            <TransitionGroup className="snackbar">
                {messages.map(({nodeRef, ...item}) => (
                    <CSSTransition key={item.id} ref={nodeRef as unknown as RefObject<CSSTransition<HTMLDivElement>>} timeout={250} classNames="message">
                        <SnackbarMessage key={item.id} ref={nodeRef} {...item} />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </>
    )
}